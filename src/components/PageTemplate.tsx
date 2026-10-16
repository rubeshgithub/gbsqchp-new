import React from 'react'

import { getCirculars, getFeesForCountry, getVendorsForCountry, rel } from '@/lib/data'
import { articleJsonLd, breadcrumbJsonLd, breadcrumbsFromPath, faqJsonLd } from '@/lib/seo'
import type { Author, Country, Page, SiteSetting, Vendor } from '@/payload-types'

import { AuthorBox } from './AuthorBox'
import { Breadcrumbs } from './Breadcrumbs'
import { ChangeLog } from './ChangeLog'
import { CircularTable } from './CircularTable'
import { FaqSection } from './FaqSection'
import { FeeComparison } from './FeeComparison'
import { FeeCalculatorBlock } from './FeeCalculatorBlock'
import { JsonLd } from './JsonLd'
import { NewsletterForm } from './NewsletterForm'
import { RelatedPages } from './RelatedPages'
import { RichTextBlock } from './RichTextBlock'
import { VendorPackages } from './VendorPackages'
import { VendorTable } from './VendorTable'
import { VerifiedStamp } from './VerifiedStamp'

const SEGMENT_LABELS: Record<string, string> = {
  qatar: 'Qatar',
  psv: 'Primary Source Verification',
  licensing: 'Licensing',
  exam: 'Qualifying exam',
  circulars: 'Circulars',
  problems: 'Common problems',
  documents: 'Documents',
  careers: 'Careers',
  tools: 'Tools',
}

export async function PageTemplate({ page, settings }: { page: Page; settings: SiteSetting }) {
  const country = rel<Country>(page.country)
  const author = rel<Author>(page.author)
  const featuredVendor = rel<Vendor>(page.featuredVendor)
  const crumbs = breadcrumbsFromPath(page.path, page.title, SEGMENT_LABELS)
  const needsVendors = Boolean((page.showVendorTable || page.showFeeComparison) && country)
  const needsFees = Boolean((page.showVendorTable || page.showFeeComparison || featuredVendor) && country)

  const [vendors, fees, circulars] = await Promise.all([
    needsVendors && country ? getVendorsForCountry(country.id) : Promise.resolve([]),
    needsFees && country ? getFeesForCountry(country.id) : Promise.resolve([]),
    page.showCirculars ? getCirculars(country?.id) : Promise.resolve([]),
  ])

  const comparison =
    page.showVendorTable && vendors.length > 0 ? (
      <VendorTable
        vendors={vendors}
        fees={fees}
        title={featuredVendor ? `${featuredVendor.shortName || featuredVendor.name} compared with the other approved providers` : undefined}
      />
    ) : null

  return (
    <article className="page container">
      <JsonLd data={articleJsonLd(page, settings)} />
      <JsonLd data={faqJsonLd(page)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <Breadcrumbs items={crumbs} />

      <header className="article-header">
        <h1>{page.title}</h1>
        <p className="lead">{page.summary}</p>
        <VerifiedStamp page={page} />
      </header>

      {page.showFeeComparison && <FeeComparison vendors={vendors} fees={fees} />}

      {featuredVendor ? <VendorPackages vendor={featuredVendor} fees={fees} /> : !page.showFeeComparison && comparison}

      <RichTextBlock content={page.content} />

      {(featuredVendor || page.showFeeComparison) && comparison}

      {page.showCalculator && country && <FeeCalculatorBlock country={country} />}

      {page.showCirculars && <CircularTable circulars={circulars} title="Circular tracker" />}

      <FaqSection faqs={page.faqs} />

      <RelatedPages pages={page.relatedPages} />

      <AuthorBox author={author} />

      <ChangeLog entries={page.changeLog} />

      <NewsletterForm
        title={settings.newsletterTitle || 'DHP circular alerts'}
        blurb={settings.newsletterBlurb}
        source={page.path}
      />

      <div className="callout">{settings.disclaimerLong}</div>
    </article>
  )
}
