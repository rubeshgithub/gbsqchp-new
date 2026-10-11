import type { Metadata } from 'next'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CircularTable } from '@/components/CircularTable'
import { JsonLd } from '@/components/JsonLd'
import { NewsletterForm } from '@/components/NewsletterForm'
import { getCirculars, getCountryBySlug, getSiteSettings } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'DHP Qatar circulars 2024–2026: every licensing change',
  description:
    'A dated tracker of every Department of Healthcare Professions circular affecting registration, PSV, exams and experience – with plain-English summaries and links to the official PDFs.',
  alternates: { canonical: '/qatar/circulars' },
}

export default async function CircularsPage() {
  const [qatar, settings] = await Promise.all([getCountryBySlug('qatar'), getSiteSettings()])
  const circulars = await getCirculars(qatar?.id, 100)
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Qatar', path: '/qatar' },
    { name: 'Circulars', path: '/qatar/circulars' },
  ]

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>DHP Qatar circular tracker: every registration and licensing change</h1>
      <p className="lead">
        The DHP publishes rule changes as numbered circulars on dhp.moph.gov.qa, usually as PDFs with no summary. This
        table lists each one that affects applicants – what changed, who it affects, and where to read the original.
        Entries marked as not yet verified are being checked against the official PDF.
      </p>
      <CircularTable circulars={circulars} />
      <NewsletterForm title={settings.newsletterTitle || 'DHP circular alerts'} blurb={settings.newsletterBlurb} source="/qatar/circulars" />
    </div>
  )
}
