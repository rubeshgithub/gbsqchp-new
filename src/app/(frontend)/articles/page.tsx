import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { NewsletterForm } from '@/components/NewsletterForm'
import { formatDate, getArticles, getSiteSettings } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Qatar healthcare licensing updates: PSV and DHP news',
  description:
    'Dated updates on Qatar DHP licensing and Primary Source Verification: new circulars, provider changes and fee changes, each linked to the guide it affects.',
  alternates: { canonical: '/articles' },
}

export default async function ArticlesPage() {
  const [articles, settings] = await Promise.all([getArticles(), getSiteSettings()])
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
  ]

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>Updates: Qatar licensing and PSV news</h1>
      <p className="lead">
        Dated notes on what has changed – a new DHP circular, a new provider, a changed fee – and what it means for your
        application. Each update links to the guide it affects; the guides themselves are kept current and carry their own
        change logs.
      </p>
      {articles.length === 0 ? (
        <p>No updates published yet.</p>
      ) : (
        <ul className="article-list">
          {articles.map((a) => (
            <li key={a.id}>
              {a.publishedAt && (
                <time className="meta" dateTime={a.publishedAt}>
                  {formatDate(a.publishedAt)}
                </time>
              )}
              <h2>
                <Link href={a.path}>{a.title}</Link>
              </h2>
              <p>{a.summary}</p>
            </li>
          ))}
        </ul>
      )}
      <NewsletterForm title={settings.newsletterTitle || 'DHP circular alerts'} blurb={settings.newsletterBlurb} source="/articles" />
    </div>
  )
}
