import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FeeCalculatorBlock } from '@/components/FeeCalculatorBlock'
import { JsonLd } from '@/components/JsonLd'
import { getCountryBySlug } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'PSV fee & timeline calculator – Qatar DHP (DataFlow, QuadraBay, AVS)',
  description:
    'Estimate what Primary Source Verification will cost and how long it should take for your profession in Qatar, across every DHP-approved provider, including add-ons and faster tiers.',
  alternates: { canonical: '/tools/psv-fee-calculator' },
}

export default async function CalculatorPage() {
  const qatar = await getCountryBySlug('qatar')
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools/psv-fee-calculator' },
    { name: 'PSV fee calculator', path: '/tools/psv-fee-calculator' },
  ]

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>PSV fee &amp; timeline calculator for Qatar DHP</h1>
      <p className="lead">
        Pick your profession, tick anything outside the standard package, and see what each DHP-approved provider will
        charge and the turnaround it publishes. Then read the <Link href="/qatar/psv">PSV comparison</Link> before you
        pay.
      </p>
      {qatar ? (
        <FeeCalculatorBlock country={qatar} title="Compare providers" />
      ) : (
        <p className="callout callout-info">Country data has not been seeded yet.</p>
      )}
    </div>
  )
}
