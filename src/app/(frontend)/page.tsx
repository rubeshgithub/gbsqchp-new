import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { CircularTable } from '@/components/CircularTable'
import { NewsletterForm } from '@/components/NewsletterForm'
import { VendorCards } from '@/components/VendorCards'
import { getCirculars, getCountryBySlug, getFeesForCountry, getSiteSettings, getVendorsForCountry } from '@/lib/data'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    title: `${settings.siteName} – Qatar DHP licensing & PSV, explained before you pay`,
    description:
      'Independent guide to Primary Source Verification (DataFlow, QuadraBay, AVS) and DHP licensing in Qatar: fees, documents, timelines, circulars and free tools.',
    alternates: { canonical: '/' },
  }
}

const START_HERE = [
  {
    href: '/qatar/psv',
    title: 'Primary Source Verification',
    text: 'DataFlow, QuadraBay and AVS compared: packages, fees, timelines and which to choose.',
  },
  {
    href: '/tools/psv-fee-calculator',
    title: 'Fee & timeline calculator',
    text: 'Your profession, your add-ons, every approved provider side by side.',
  },
  {
    href: '/contact',
    title: 'Ask a question',
    text: 'We are online-only. Send your question through the contact form or the chat bubble and we reply by email.',
  },
  {
    href: '/qatar/circulars',
    title: 'Circular tracker',
    text: 'Every DHP rule change since 2024, dated and summarised in plain English.',
  },
]

export default async function HomePage() {
  const settings = await getSiteSettings()
  const qatar = await getCountryBySlug('qatar')
  const [vendors, fees, circulars] = await Promise.all([
    qatar ? getVendorsForCountry(qatar.id) : Promise.resolve([]),
    qatar ? getFeesForCountry(qatar.id) : Promise.resolve([]),
    getCirculars(qatar?.id, 4),
  ])

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="badge">Phase 1 · Qatar</span>
          <h1>Qatar DHP licensing and PSV, explained before you pay a verifier.</h1>
          <p className="lead">{settings.tagline}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/qatar/psv">
              Start with PSV
            </Link>
            <Link className="btn btn-secondary" href="/tools/psv-fee-calculator">
              Fee &amp; timeline calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-title">
          <h2>Three DHP-approved PSV providers. Compare before you choose.</h2>
          <Link href="/qatar/psv">Full comparison →</Link>
        </div>
        {vendors.length > 0 ? (
          <VendorCards vendors={vendors} fees={fees} />
        ) : (
          <p className="callout callout-info">
            Provider data has not been seeded yet. Run <code>npm run seed</code> after connecting the database.
          </p>
        )}
        <p className="callout callout-info">
          Looking for the old GBS QCHP PSV portal? Gulf Bridge Services stopped verifying for DHP in February 2024.{' '}
          <Link href="/gbs-psv-portal">What happened and where to apply now →</Link>
        </p>
      </section>

      <section className="section container">
        <div className="section-title">
          <h2>Start here</h2>
        </div>
        <div className="grid">
          {START_HERE.map((item) => (
            <article className="card" key={item.href}>
              <h3>
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-title">
          <h2>Latest DHP circulars</h2>
          <Link href="/qatar/circulars">All circulars →</Link>
        </div>
        <CircularTable circulars={circulars} />
      </section>

      <div className="container">
        <NewsletterForm title={settings.newsletterTitle || 'DHP circular alerts'} blurb={settings.newsletterBlurb} source="/" />
      </div>
    </>
  )
}
