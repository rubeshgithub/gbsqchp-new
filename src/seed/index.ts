/**
 * Idempotent seed. Run with:  npm run seed
 * Creates or updates countries, professions, circulars, vendors, fees, the author, site settings and the first
 * two published pages. Safe to re-run: records are matched on their natural keys (slug, number, package+tier).
 */
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { CollectionSlug, Payload } from 'payload'
import { getPayload } from 'payload'

import config from '../payload.config'
import { legacyGbs } from './content/legacy-gbs'
import { psvPillar } from './content/psv-pillar'
import { author, circulars, countries, fees, professions, vendors } from './data'

type AnyData = Record<string, unknown>

async function upsert(payload: Payload, collection: CollectionSlug, where: Record<string, { equals: unknown }>, data: AnyData) {
  const existing = await payload.find({ collection, where, limit: 1, depth: 0, pagination: false })
  if (existing.docs[0]) {
    const doc = await payload.update({ collection, id: existing.docs[0].id, data: data as never, depth: 0 })
    return doc as { id: string }
  }
  const doc = await payload.create({ collection, data: data as never, depth: 0 })
  return doc as { id: string }
}

async function run() {
  const payload = await getPayload({ config })
  const log = (msg: string) => console.log(`[seed] ${msg}`)

  // ---------- countries ----------
  const countryIds: Record<string, string> = {}
  for (const c of countries) {
    const doc = await upsert(payload, 'countries', { code: { equals: c.code } }, c)
    countryIds[c.code] = doc.id
  }
  log(`countries: ${Object.keys(countryIds).length}`)

  // ---------- professions ----------
  const professionIds: Record<string, string> = {}
  for (const p of professions) {
    const doc = await upsert(payload, 'professions', { slug: { equals: p.slug } }, p)
    professionIds[p.slug] = doc.id
  }
  log(`professions: ${Object.keys(professionIds).length}`)

  // ---------- circulars ----------
  const circularIds: Record<string, string> = {}
  for (const c of circulars) {
    const doc = await upsert(
      payload,
      'circulars',
      { number: { equals: c.number } },
      { ...c, country: countryIds.QA },
    )
    circularIds[c.number] = doc.id
  }
  log(`circulars: ${Object.keys(circularIds).length}`)

  // ---------- vendors ----------
  const vendorIds: Record<string, string> = {}
  for (const v of vendors) {
    const { countryCodes, approvedUnderNumbers, ...rest } = v
    const doc = await upsert(
      payload,
      'vendors',
      { slug: { equals: v.slug } },
      {
        ...rest,
        countries: countryCodes.map((code) => countryIds[code]).filter(Boolean),
        approvedUnder: approvedUnderNumbers.map((n) => circularIds[n]).filter(Boolean),
      },
    )
    vendorIds[v.slug] = doc.id
  }
  log(`vendors: ${Object.keys(vendorIds).length}`)

  // ---------- fees ----------
  let feeCount = 0
  for (const f of fees) {
    const { vendorSlug, countryCode, professionSlugs, includes, ...rest } = f
    const vendorName = vendors.find((v) => v.slug === vendorSlug)?.shortName || vendorSlug
    const label =
      f.tier === 'standard' || f.tier === 'express'
        ? `${vendorName} – Package ${f.packageCode} (${f.packageName}) – ${f.tier === 'express' ? 'Prestige/Express' : 'Standard'}`
        : `${vendorName} – ${f.packageName}`
    const where: Record<string, { equals: unknown }> = {
      vendor: { equals: vendorIds[vendorSlug] },
      country: { equals: countryIds[countryCode] },
      tier: { equals: f.tier },
    }
    if (f.packageCode) where.packageCode = { equals: f.packageCode }
    if (f.addonKey) where.addonKey = { equals: f.addonKey }

    await upsert(payload, 'fees', where, {
      ...rest,
      label,
      vendor: vendorIds[vendorSlug],
      country: countryIds[countryCode],
      professions: (professionSlugs || []).map((s) => professionIds[s]).filter(Boolean),
      includes: (includes || []).map((item) => ({ item })),
      currency: f.currency || 'QAR',
      active: true,
    })
    feeCount += 1
  }
  log(`fees: ${feeCount}`)

  // ---------- author ----------
  const authorDoc = await upsert(
    payload,
    'authors',
    { slug: { equals: author.slug } },
    { ...author, credentials: author.credentials.map((item) => ({ item })) },
  )
  log(`author: ${author.name}`)

  // ---------- site settings ----------
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Gulf Bridge Licensing Guide',
      tagline: 'The independent pre-submission guide to GCC healthcare licensing. Qatar first.',
      siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'https://gbsqchp.com',
      legalName: 'Instead Global (2682736 Alberta Inc.)',
      parentBrand: 'Gulf Bridge Services',
      parentUrl: 'https://gulfbridgeservices.com',
    },
  })
  log('site settings updated')

  // ---------- pages ----------
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  const pageIds: Record<string, string> = {}
  for (const page of [psvPillar, legacyGbs]) {
    const { markdown, verifiedAgainst, meta, ...rest } = page
    const content = convertMarkdownToLexical({ editorConfig, markdown: markdown.trim() })
    const doc = await upsert(
      payload,
      'pages',
      { path: { equals: page.path } },
      {
        ...rest,
        content,
        country: countryIds.QA,
        author: authorDoc.id,
        verifiedAgainst: verifiedAgainst.map((s) => ({
          label: s.label,
          url: s.url,
          circular: 'circularNumber' in s && s.circularNumber ? circularIds[s.circularNumber] : undefined,
        })),
        meta: { title: meta.title, description: meta.description },
        _status: 'published',
      },
    )
    pageIds[page.path] = doc.id
  }

  // cross-link the two pages and attach guide pages to vendors / circulars
  await payload.update({ collection: 'pages', id: pageIds[psvPillar.path], data: { relatedPages: [pageIds[legacyGbs.path]] } })
  await payload.update({ collection: 'pages', id: pageIds[legacyGbs.path], data: { relatedPages: [pageIds[psvPillar.path]] } })
  await payload.update({ collection: 'vendors', id: vendorIds.gbs, data: { page: pageIds[legacyGbs.path] } })
  for (const n of ['15/2018', 'DHP/09/2024']) {
    await payload.update({ collection: 'circulars', id: circularIds[n], data: { explainer: pageIds[legacyGbs.path] } })
  }
  log(`pages: ${Object.keys(pageIds).join(', ')}`)

  // ---------- first admin user (only if none exists) ----------
  const users = await payload.find({ collection: 'users', limit: 1, depth: 0 })
  if (users.totalDocs === 0 && process.env.SEED_ADMIN_EMAIL && process.env.SEED_ADMIN_PASSWORD) {
    await payload.create({
      collection: 'users',
      data: { email: process.env.SEED_ADMIN_EMAIL, password: process.env.SEED_ADMIN_PASSWORD, name: 'Admin' },
    })
    log(`admin user created: ${process.env.SEED_ADMIN_EMAIL}`)
  } else if (users.totalDocs === 0) {
    log('no admin user yet – create one at /admin (or set SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD and re-run)')
  }

  log('seed complete')
  await payload.destroy()
}

// `payload run` imports this module and exits as soon as the import resolves, so the work must be awaited here.
try {
  await run()
} catch (err) {
  console.error(err)
  process.exit(1)
}
