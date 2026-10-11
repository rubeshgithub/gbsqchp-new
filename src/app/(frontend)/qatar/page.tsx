import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { VendorCards } from '@/components/VendorCards'
import { getCountryBySlug, getFeesForCountry, getPublishedPages, getVendorsForCountry } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Qatar – PSV, DHP licensing, exam and circulars',
  description:
    'Everything an internationally trained physician, dentist, nurse, pharmacist or allied health professional needs to get licensed by Qatar’s DHP.',
  alternates: { canonical: '/qatar' },
}

const SECTION_LABELS: Record<string, string> = {
  psv: 'Primary Source Verification',
  licensing: 'Licensing & registration',
  exam: 'Qualifying exam',
  circulars: 'Circulars',
  documents: 'Documents by country',
  careers: 'Careers',
  tools: 'Tools',
  legacy: 'About',
  general: 'General',
}

export default async function QatarHub() {
  const qatar = await getCountryBySlug('qatar')
  const [vendors, fees, pages] = await Promise.all([
    qatar ? getVendorsForCountry(qatar.id) : Promise.resolve([]),
    qatar ? getFeesForCountry(qatar.id) : Promise.resolve([]),
    qatar ? getPublishedPages({ country: { equals: qatar.id } }) : Promise.resolve([]),
  ])

  const bySection = pages.reduce<Record<string, typeof pages>>((acc, p) => {
    ;(acc[p.section] ||= []).push(p)
    return acc
  }, {})

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Qatar', path: '/qatar' },
  ]

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>Qatar: getting licensed by the Department of Healthcare Professions (DHP)</h1>
      <p className="lead">
        {qatar?.summary ||
          'The DHP under the Ministry of Public Health licenses every healthcare practitioner in Qatar. Verification first, then the qualifying exam or an exemption, then evaluation, then your employer activates the licence.'}
      </p>

      {vendors.length > 0 && (
        <section className="section">
          <div className="section-title">
            <h2>PSV providers approved by DHP</h2>
            <Link href="/qatar/psv">Compare in detail →</Link>
          </div>
          <VendorCards vendors={vendors} fees={fees} />
        </section>
      )}

      {Object.keys(bySection).length === 0 ? (
        <p className="callout callout-info">No published pages yet for Qatar.</p>
      ) : (
        Object.entries(bySection).map(([section, docs]) => (
          <section className="section" key={section}>
            <h2>{SECTION_LABELS[section] || section}</h2>
            <div className="grid">
              {docs.map((p) => (
                <article className="card" key={p.id}>
                  <h3>
                    <Link href={p.path}>{p.title}</Link>
                  </h3>
                  <p>{p.summary.length > 160 ? `${p.summary.slice(0, 157)}…` : p.summary}</p>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
