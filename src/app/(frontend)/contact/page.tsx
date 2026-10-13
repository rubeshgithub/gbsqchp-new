import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { JsonLd } from '@/components/JsonLd'
import { getSiteSettings } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Ask a question about Primary Source Verification, DHP licensing in Qatar or your documents. Online-only service – we reply by email.',
  alternates: { canonical: '/contact' },
}

export default async function ContactPage() {
  const settings = await getSiteSettings()
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>Contact us</h1>
      <p className="lead">
        {settings.contactIntro ||
          'Questions about Primary Source Verification, DHP licensing or your documents? Send them here and we reply by email.'}
      </p>
      {settings.onlineOnlyNote && <p className="callout callout-info">{settings.onlineOnlyNote}</p>}

      <section className="block contact-block">
        <ContactForm />
      </section>

      <section className="block">
        <h2>Before you write</h2>
        <ul>
          <li>
            We are an independent information service, not a PSV provider or the regulator. To apply for verification, use
            the provider&apos;s own portal – our <Link href="/qatar/psv">PSV guide</Link> links to all three.
          </li>
          <li>
            For the status of an existing DataFlow, QuadraBay or AVS case, contact that provider: only it can see your file.
          </li>
          <li>
            For decisions on your licence or evaluation, the DHP Registration and Licensing section is the only authority.
          </li>
        </ul>
      </section>
    </div>
  )
}
