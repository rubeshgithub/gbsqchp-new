import type { MetadataRoute } from 'next'

import { getPublishedPages, SITE_URL } from '@/lib/data'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/qatar`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/qatar/circulars`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/tools/psv-fee-calculator`, changeFrequency: 'monthly', priority: 0.7 },
  ]

  let pages: MetadataRoute.Sitemap = []
  try {
    const docs = await getPublishedPages()
    pages = docs.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly',
      priority: p.section === 'psv' || p.section === 'licensing' ? 0.9 : 0.6,
    }))
  } catch {
    // Database unavailable – still emit the static routes.
  }

  return [...staticRoutes, ...pages]
}
