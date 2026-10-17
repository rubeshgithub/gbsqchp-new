import type { Metadata } from 'next'

import type { Author, Media, Page, SiteSetting } from '@/payload-types'

import { rel, SITE_URL } from './data'

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function mediaUrl(media: Media | null): string | undefined {
  if (!media?.url) return undefined
  return media.url.startsWith('http') ? media.url : absoluteUrl(media.url)
}

export function buildPageMetadata(page: Page, settings: SiteSetting): Metadata {
  const title = page.meta?.title || page.title
  const description = page.meta?.description || page.summary.slice(0, 155)
  const ogImage = mediaUrl(rel(page.meta?.image)) || mediaUrl(rel(settings.defaultOgImage))
  const url = absoluteUrl(page.path)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: settings.siteName,
      type: 'article',
      images: ogImage ? [{ url: ogImage }] : undefined,
      modifiedTime: page.updatedAt,
      publishedTime: page.publishedAt || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function organizationJsonLd(settings: SiteSetting) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings.siteName,
    url: settings.siteUrl || SITE_URL,
    parentOrganization: settings.publisherName ? { '@type': 'Organization', name: settings.publisherName } : undefined,
    sameAs: settings.social?.map((s) => s.url) || undefined,
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer support', url: `${settings.siteUrl || SITE_URL}/contact`, availableLanguage: ['English'] },
    ],
  }
}

export function websiteJsonLd(settings: SiteSetting) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: settings.siteName,
    url: settings.siteUrl || SITE_URL,
  }
}

export function articleJsonLd(page: Page, settings: SiteSetting) {
  const author = rel<Author>(page.author)
  return {
    '@context': 'https://schema.org',
    '@type': page.section === 'articles' ? 'NewsArticle' : 'Article',
    headline: page.meta?.title || page.title,
    description: page.meta?.description || page.summary,
    mainEntityOfPage: absoluteUrl(page.path),
    datePublished: page.publishedAt || page.createdAt,
    dateModified: page.updatedAt,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.jobTitle && author.jobTitle !== settings.publisherName ? author.jobTitle : undefined,
          worksFor: settings.publisherName ? { '@type': 'Organization', name: settings.publisherName } : undefined,
          url: author.linkedin || undefined,
        }
      : { '@type': 'Organization', name: settings.siteName },
    publisher: { '@type': 'Organization', name: settings.siteName, url: settings.siteUrl || SITE_URL },
  }
}

export function faqJsonLd(page: Page) {
  if (!page.faqs?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Build breadcrumb items from a path such as /qatar/psv/dataflow. */
export function breadcrumbsFromPath(path: string, title: string, labels: Record<string, string> = {}) {
  const segments = path.split('/').filter(Boolean)
  const items: { name: string; path: string }[] = [{ name: 'Home', path: '/' }]
  let acc = ''
  segments.forEach((seg, i) => {
    acc += `/${seg}`
    const isLast = i === segments.length - 1
    const shortTitle = title.length > 60 ? `${title.slice(0, 57).trimEnd()}…` : title
    items.push({ name: isLast ? shortTitle : labels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()), path: acc })
  })
  return items
}
