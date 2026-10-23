/**
 * Idempotent seed. Run with:  npm run seed
 * Creates or updates countries, professions, circulars, vendors, fees, the author, site settings and the published
 * guide pages. Safe to re-run: records are matched on their natural keys (slug, number, package+tier).
 */
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { CollectionSlug, Payload, RichTextField } from 'payload'
import { getPayload } from 'payload'

import config from '../payload.config'
import { avsGuide } from './content/avs'
import { dataflowGuide } from './content/dataflow'
import { feesGuide } from './content/fees'
import { documentsGuide } from './content/documents'
import { timelineGuide } from './content/timeline'
import { nameMismatchGuide } from './content/name-mismatch'
import { goodStandingArticle } from './content/articles/good-standing-psv'
import { avsApprovedArticle } from './content/articles/avs-approved'
import { indiaGuide } from './content/countries/india'
import { philippinesGuide } from './content/countries/philippines'
import { pakistanGuide } from './content/countries/pakistan'
import { reportTransferGuide } from './content/report-transfer'
import { unableToVerifyGuide } from './content/unable-to-verify'
import { discrepancyGuide } from './content/discrepancy'
import { universityNotRespondingGuide } from './content/university-not-responding'
import { statusGuide } from './content/status'
import { examGuide } from './content/exam'
import { licensingGuide } from './content/licensing'
import { legacyGbs } from './content/legacy-gbs'
import { psvPillar } from './content/psv-pillar'
import { quadrabayGuide } from './content/quadrabay'
import { RENAMED_CIRCULARS, author, circulars, countries, fees, professions, vendors } from './data'

type AnyData = Record<string, unknown>

/** Shape shared by the files in ./content. Markdown becomes the Lexical body; everything else maps onto the Pages fields. */
type SeedPage = {
  title: string
  path: string
  section: 'psv' | 'licensing' | 'exam' | 'circulars' | 'documents' | 'careers' | 'tools' | 'articles' | 'legacy' | 'general'
  /** Articles only: the publication date shown on the page and in the /articles list (ISO date). */
  publishedAt?: string
  summary: string
  meta: { title: string; description: string }
  showVendorTable?: boolean
  showFeeComparison?: boolean
  showCalculator?: boolean
  showCirculars?: boolean
  featuredVendorSlug?: string
  verifiedOn?: string
  verifiedAgainst: { label: string; url?: string; circularNumber?: string }[]
  changeLog?: { date: string; note: string }[]
  faqs?: { question: string; answer: string }[]
  markdown: string
}

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
  // Rename records whose number was corrected after an earlier seed, so re-running never leaves duplicates.
  for (const [oldNumber, newNumber] of Object.entries(RENAMED_CIRCULARS)) {
    const stale = await payload.find({ collection: 'circulars', where: { number: { equals: oldNumber } }, limit: 1, depth: 0 })
    if (stale.docs[0]) {
      await payload.update({ collection: 'circulars', id: stale.docs[0].id, data: { number: newNumber } })
      log(`circular renamed: ${oldNumber} → ${newNumber}`)
    }
  }
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
      active: f.active ?? true,
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
      siteName: 'Primary Source Verification Guide',
      tagline: 'The independent pre-submission guide to GCC healthcare licensing. Qatar first.',
      siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'https://gbsqchp.com',
      publisherName: 'MRP Business Consulting',
    },
  })
  log('site settings updated')

  // ---------- pages ----------
  // Use the Pages body field's own editor (it includes the table feature), so Markdown tables become real tables.
  const contentField = payload.collections.pages.config.flattenedFields.find((f) => f.name === 'content') as RichTextField
  const editorConfig = editorConfigFactory.fromField({ field: contentField })

  const pageIds: Record<string, string> = {}
  const pages: SeedPage[] = [psvPillar, legacyGbs, dataflowGuide, quadrabayGuide, avsGuide, feesGuide, documentsGuide, timelineGuide, nameMismatchGuide, goodStandingArticle, avsApprovedArticle, indiaGuide, philippinesGuide, pakistanGuide, statusGuide, examGuide, licensingGuide, reportTransferGuide, unableToVerifyGuide, discrepancyGuide, universityNotRespondingGuide]
  for (const page of pages) {
    const { markdown, verifiedAgainst, meta, featuredVendorSlug, ...rest } = page
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
        featuredVendor: featuredVendorSlug ? vendorIds[featuredVendorSlug] : null,
        verifiedAgainst: verifiedAgainst.map((s) => ({
          label: s.label,
          url: s.url,
          circular: s.circularNumber ? circularIds[s.circularNumber] : undefined,
        })),
        meta: { title: meta.title, description: meta.description },
        _status: 'published',
      },
    )
    pageIds[page.path] = doc.id
  }

  // cross-link the pages and attach guide pages to vendors / circulars
  const related: Record<string, string[]> = {
    [psvPillar.path]: [feesGuide.path, documentsGuide.path, timelineGuide.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path, legacyGbs.path],
    [dataflowGuide.path]: [psvPillar.path, feesGuide.path, documentsGuide.path, timelineGuide.path, quadrabayGuide.path, avsGuide.path],
    [quadrabayGuide.path]: [psvPillar.path, feesGuide.path, documentsGuide.path, timelineGuide.path, dataflowGuide.path, avsGuide.path],
    [avsGuide.path]: [psvPillar.path, feesGuide.path, documentsGuide.path, timelineGuide.path, dataflowGuide.path, quadrabayGuide.path],
    [feesGuide.path]: [psvPillar.path, documentsGuide.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path],
    [documentsGuide.path]: [psvPillar.path, feesGuide.path, timelineGuide.path, nameMismatchGuide.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path],
    [timelineGuide.path]: [psvPillar.path, statusGuide.path, documentsGuide.path, feesGuide.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path],
    [nameMismatchGuide.path]: [documentsGuide.path, psvPillar.path, timelineGuide.path, dataflowGuide.path],
    [licensingGuide.path]: [psvPillar.path, examGuide.path, feesGuide.path, timelineGuide.path, documentsGuide.path],
    [examGuide.path]: [licensingGuide.path, feesGuide.path, timelineGuide.path, documentsGuide.path, psvPillar.path],
    [statusGuide.path]: [timelineGuide.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path, nameMismatchGuide.path],
    [indiaGuide.path]: [documentsGuide.path, nameMismatchGuide.path, feesGuide.path, timelineGuide.path, psvPillar.path, philippinesGuide.path],
    [philippinesGuide.path]: [documentsGuide.path, nameMismatchGuide.path, feesGuide.path, timelineGuide.path, psvPillar.path, indiaGuide.path],
    [universityNotRespondingGuide.path]: [statusGuide.path, timelineGuide.path, unableToVerifyGuide.path, documentsGuide.path, dataflowGuide.path],
    [discrepancyGuide.path]: [nameMismatchGuide.path, unableToVerifyGuide.path, statusGuide.path, documentsGuide.path, dataflowGuide.path],
    [unableToVerifyGuide.path]: [statusGuide.path, nameMismatchGuide.path, timelineGuide.path, dataflowGuide.path, quadrabayGuide.path],
    [reportTransferGuide.path]: [dataflowGuide.path, quadrabayGuide.path, feesGuide.path, timelineGuide.path, statusGuide.path],
    [pakistanGuide.path]: [documentsGuide.path, examGuide.path, nameMismatchGuide.path, feesGuide.path, timelineGuide.path, indiaGuide.path],
    [goodStandingArticle.path]: [documentsGuide.path, feesGuide.path, timelineGuide.path, psvPillar.path],
    [avsApprovedArticle.path]: [avsGuide.path, feesGuide.path, psvPillar.path, dataflowGuide.path, quadrabayGuide.path],
    [legacyGbs.path]: [psvPillar.path, dataflowGuide.path, quadrabayGuide.path, avsGuide.path],
  }
  for (const [path, targets] of Object.entries(related)) {
    await payload.update({ collection: 'pages', id: pageIds[path], data: { relatedPages: targets.map((t) => pageIds[t]) } })
  }
  const vendorPages: Record<string, string> = {
    gbs: legacyGbs.path,
    dataflow: dataflowGuide.path,
    quadrabay: quadrabayGuide.path,
    avs: avsGuide.path,
  }
  for (const [slug, path] of Object.entries(vendorPages)) {
    await payload.update({ collection: 'vendors', id: vendorIds[slug], data: { page: pageIds[path] } })
  }
  const circularExplainers: Record<string, string> = {
    '15/2018': legacyGbs.path,
    'DHP/2024/10': feesGuide.path,
    'DHP/2025/08': documentsGuide.path,
    'DHP/2024/16': timelineGuide.path,
    'DHP/2025/19': examGuide.path,
    'DHP/2024/09': legacyGbs.path,
    'DHP/2025/20': quadrabayGuide.path,
    'DHP/2026/36': avsGuide.path,
  }
  for (const [n, path] of Object.entries(circularExplainers)) {
    await payload.update({ collection: 'circulars', id: circularIds[n], data: { explainer: pageIds[path] } })
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
