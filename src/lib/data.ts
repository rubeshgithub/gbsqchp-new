import type { Where } from 'payload'

import type { Circular, Country, Fee, Page, Profession, SiteSetting, Vendor } from '@/payload-types'

import { getPayloadClient } from './payload'

export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** Normalise a relationship value (id string or populated doc) to the populated doc, if present. */
export function rel<T extends { id: string }>(value: string | T | null | undefined): T | null {
  if (!value || typeof value === 'string') return null
  return value
}

export function relId(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null
  return typeof value === 'string' ? value : value.id
}

export async function getSiteSettings(): Promise<SiteSetting> {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}

export async function getPageByPath(path: string, options?: { draft?: boolean }): Promise<Page | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: options?.draft
      ? { path: { equals: path } }
      : { and: [{ path: { equals: path } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 2,
    draft: options?.draft ?? false,
  })
  return result.docs[0] ?? null
}

export type PageSummary = Pick<Page, 'id' | 'title' | 'path' | 'section' | 'summary' | 'country' | 'updatedAt' | 'verifiedOn'>

export async function getPublishedPages(where?: Where): Promise<PageSummary[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: { and: [{ _status: { equals: 'published' } }, ...(where ? [where] : [])] },
    limit: 500,
    depth: 1,
    sort: 'path',
    select: {
      title: true,
      path: true,
      section: true,
      summary: true,
      country: true,
      updatedAt: true,
      verifiedOn: true,
    },
  })
  return result.docs as PageSummary[]
}

export async function getCountryBySlug(slug: string): Promise<Country | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'countries', where: { slug: { equals: slug } }, limit: 1 })
  return result.docs[0] ?? null
}

export async function getCountries(): Promise<Country[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'countries', limit: 20, sort: 'phase' })
  return result.docs
}

export async function getVendorsForCountry(countryId: string, includeFormer = false): Promise<Vendor[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'vendors',
    where: includeFormer
      ? { countries: { equals: countryId } }
      : { and: [{ countries: { equals: countryId } }, { status: { equals: 'approved' } }] },
    sort: 'sortOrder',
    depth: 1,
    limit: 20,
  })
  return result.docs
}

export async function getFeesForCountry(countryId: string): Promise<Fee[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'fees',
    where: { and: [{ country: { equals: countryId } }, { active: { equals: true } }] },
    depth: 1,
    limit: 500,
    sort: 'packageCode',
  })
  return result.docs
}

export async function getProfessions(): Promise<Profession[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'professions', sort: 'sortOrder', limit: 100 })
  return result.docs
}

export async function getCirculars(countryId?: string, limit = 50): Promise<Circular[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'circulars',
    where: countryId ? { country: { equals: countryId } } : undefined,
    sort: '-issuedOn',
    depth: 1,
    limit,
  })
  return result.docs
}

export function formatDate(value?: string | null, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat('en-GB', { ...opts, timeZone: 'UTC' }).format(d)
}

export function formatMoney(amount: number, currency = 'QAR') {
  return `${currency} ${new Intl.NumberFormat('en-US').format(amount)}`
}
