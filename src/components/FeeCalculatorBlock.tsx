import React from 'react'

import { getFeesForCountry, getProfessions, getVendorsForCountry, rel, relId } from '@/lib/data'
import type { Country, Page } from '@/payload-types'

import { FeeCalculator, type CalcFee, type CalcProfession, type CalcVendor } from './FeeCalculator'

/** Server wrapper: loads vendors, fees and professions for a country and hands plain data to the client calculator. */
export async function FeeCalculatorBlock({ country, title }: { country: Country; title?: string }) {
  const [vendors, fees, professions] = await Promise.all([
    getVendorsForCountry(country.id),
    getFeesForCountry(country.id),
    getProfessions(),
  ])

  const calcVendors: CalcVendor[] = vendors.map((v) => ({
    id: v.id,
    name: v.shortName || v.name,
    applyUrl: v.applyUrl,
    guidePath: rel<Page>(v.page)?.path || null,
  }))

  const calcFees: CalcFee[] = fees
    .filter((f) => relId(f.vendor))
    .map((f) => ({
      vendorId: relId(f.vendor) as string,
      tier: f.tier,
      packageCode: f.packageCode,
      addonKey: f.addonKey,
      label:
        f.tier === 'standard' || f.tier === 'express'
          ? `Package ${f.packageCode || ''}${f.packageName ? ` – ${f.packageName}` : ''} (${f.tier === 'express' ? 'faster tier' : 'standard'})`
          : f.packageName || f.label,
      amount: f.amount,
      currency: f.currency || 'QAR',
      targetDays: f.targetDays,
      daysUnit: f.daysUnit,
    }))

  const calcProfessions: CalcProfession[] = professions
    .filter((p) => p.psvPackageCode)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      psvPackageCode: p.psvPackageCode,
      experienceYearsVerified: p.experienceYearsVerified,
    }))

  const verifiedOn = fees.map((f) => f.verifiedOn).filter(Boolean).sort().at(-1) || null

  return (
    <section className="block" id="calculator">
      <h2 className="block-title">{title || `PSV fee & timeline calculator – ${country.name}`}</h2>
      <FeeCalculator vendors={calcVendors} fees={calcFees} professions={calcProfessions} verifiedOn={verifiedOn} />
    </section>
  )
}
