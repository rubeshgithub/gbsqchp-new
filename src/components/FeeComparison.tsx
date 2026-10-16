import React from 'react'

import { ADDON_KEYS } from '@/collections/Fees'
import { formatDate, formatMoney, relId } from '@/lib/data'
import type { Fee, Vendor } from '@/payload-types'

/** The Qatari riyal is pegged to the US dollar at 3.64 (Qatar Central Bank), so these conversions do not drift. */
const QAR_PER_USD = 3.64

/** Package rows, in the order applicants look for them. Codes are the DHP package letters used across the site. */
const ROWS: { code: string; label: string; fastTier: boolean }[] = [
  { code: 'A', label: 'Physicians & dentists', fastTier: true },
  { code: 'G', label: 'Clinical nurse specialists, nurse practitioners & nurse educators', fastTier: true },
  { code: 'E', label: 'Nurses, midwives & pharmacists', fastTier: true },
  { code: 'B', label: 'Allied health professionals', fastTier: true },
  { code: 'F', label: 'Trainees with no experience', fastTier: false },
  { code: 'I', label: 'Good standing certificates only (2–3)', fastTier: false },
  { code: 'C', label: 'Retrospective: physicians & dentists in Qatar 5+ years', fastTier: false },
  { code: 'D', label: 'Retrospective: allied health in Qatar 3+ years', fastTier: false },
]

const ADDON_ROWS = [
  'extra-education',
  'extra-licence',
  'good-standing',
  'extra-employer',
  'logbook',
  'report-transfer',
  'report-reissue',
  'applicant-assist',
  'concierge',
  'vip',
  'sms',
] as const

const ADDON_LABELS: Record<string, string> = {
  ...Object.fromEntries(ADDON_KEYS.map((k) => [k.value, k.label])),
  'extra-employer': 'Extra employment check',
  'report-transfer': 'Report transfer',
  'report-reissue': 'Report re-issue',
  'applicant-assist': 'Application help',
  vip: 'VIP assistance',
}

function usd(amount: number) {
  return `≈ US$${new Intl.NumberFormat('en-US').format(Math.round(amount / QAR_PER_USD))}`
}

function days(fee: Fee | null | undefined) {
  if (!fee?.targetDays) return null
  const unit = fee.daysUnit === 'calendar' ? 'days' : fee.daysUnit === 'business' ? 'business days' : 'working days'
  return `${fee.targetDays} ${unit}`
}

type Cell = { standard: Fee | null; fastTotal: number | null; fastDays: string | null; fastLabel: string | null }

function cellFor(fees: Fee[], vendorId: string, code: string, fastTier: boolean): Cell {
  const own = fees.filter((f) => relId(f.vendor) === vendorId && f.active !== false)
  const standard = own.find((f) => f.tier === 'standard' && f.packageCode === code) || null
  if (!standard || !fastTier) return { standard, fastTotal: null, fastDays: null, fastLabel: null }

  const express = own.find((f) => f.tier === 'express' && f.packageCode === code)
  if (express) return { standard, fastTotal: express.amount, fastDays: days(express), fastLabel: 'Prestige' }

  const upgrade = own.find((f) => (f.tier === 'addon' || f.tier === 'optional') && f.addonKey === 'express-upgrade')
  if (upgrade) {
    return {
      standard,
      fastTotal: standard.amount + upgrade.amount,
      fastDays: days(upgrade) || 'no published target',
      fastLabel: 'Express',
    }
  }
  return { standard, fastTotal: null, fastDays: null, fastLabel: null }
}

/**
 * Master PSV price table for the fees guide: every package type × every approved provider, standard and fast-tier
 * totals in QAR with US$ equivalents, then the add-on prices. Reads only Fee + Vendor records, so an admin edit to a
 * price updates this table, the comparison table, the provider pages and the calculator together.
 */
export function FeeComparison({ vendors, fees }: { vendors: Vendor[]; fees: Fee[] }) {
  const providers = vendors.filter((v) => v.status === 'approved' && fees.some((f) => relId(f.vendor) === v.id))
  if (providers.length === 0) return null

  const rows = ROWS.map((row) => ({
    ...row,
    cells: providers.map((v) => cellFor(fees, v.id, row.code, row.fastTier)),
  })).filter((row) => row.cells.some((c) => c.standard))

  const addonNotes: string[] = []
  const addonRows = ADDON_ROWS.map((key) => ({
    key,
    cells: providers.map((v) => {
      const fee = fees.find(
        (f) => relId(f.vendor) === v.id && (f.tier === 'addon' || f.tier === 'optional') && f.addonKey === key && f.active !== false,
      )
      let note: number | null = null
      if (fee?.notes) {
        const name = v.shortName || v.name
        const text = fee.notes.startsWith(name) ? fee.notes : `${name}: ${fee.notes}`
        const existing = addonNotes.indexOf(text)
        if (existing === -1) addonNotes.push(text)
        note = (existing === -1 ? addonNotes.length - 1 : existing) + 1
      }
      return { fee: fee || null, note }
    }),
  })).filter((row) => row.cells.some((c) => c.fee))

  const checked = fees
    .filter((f) => providers.some((v) => v.id === relId(f.vendor)))
    .map((f) => f.verifiedOn)
    .filter(Boolean)
    .sort() as string[]
  const firstChecked = checked[0]
  const lastChecked = checked.at(-1)
  const checkedText =
    firstChecked && lastChecked
      ? firstChecked.slice(0, 10) === lastChecked.slice(0, 10)
        ? ` Prices last checked ${formatDate(lastChecked)}.`
        : ` Prices checked between ${formatDate(firstChecked)} and ${formatDate(lastChecked)}.`
      : ''

  return (
    <section className="block fee-compare" aria-labelledby="fee-compare-title">
      <h2 id="fee-compare-title" className="block-title">
        PSV fees by profession and provider (new applications)
      </h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Package</th>
              {providers.map((v) => (
                <th scope="col" key={v.id}>
                  {v.shortName || v.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const amounts = row.cells.map((c) => c.standard?.amount).filter((a): a is number => typeof a === 'number')
              const lowest = amounts.length > 1 ? Math.min(...amounts) : null
              return (
                <tr key={row.code}>
                  <th scope="row">
                    {row.label}
                    <br />
                    <span className="meta">Package {row.code}</span>
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={providers[i].id}>
                      {cell.standard ? (
                        <>
                          <span className={cell.standard.amount === lowest ? 'fee-amount fee-lowest' : 'fee-amount'}>
                            {formatMoney(cell.standard.amount, cell.standard.currency || 'QAR')}
                          </span>
                          {cell.standard.amount === lowest && <span className="badge">lowest</span>}
                          <br />
                          <span className="meta">
                            {usd(cell.standard.amount)}
                            {days(cell.standard) ? ` · ${days(cell.standard)}` : ''}
                          </span>
                          {cell.fastTotal !== null && (
                            <>
                              <br />
                              <span className="meta">
                                {cell.fastLabel}: {formatMoney(cell.fastTotal)} in total{cell.fastDays ? ` · ${cell.fastDays}` : ''}
                              </span>
                            </>
                          )}
                        </>
                      ) : (
                        <span className="meta">Not offered</span>
                      )}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {addonRows.length > 0 && (
        <>
          <h3 className="block-subtitle">Add-ons and optional services</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  {providers.map((v) => (
                    <th scope="col" key={v.id}>
                      {v.shortName || v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {addonRows.map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{ADDON_LABELS[row.key] || row.key}</th>
                    {row.cells.map((cell, i) => (
                      <td key={providers[i].id} className="fee">
                        {cell.fee ? (
                          <>
                            {formatMoney(cell.fee.amount, cell.fee.currency || 'QAR')}
                            {cell.note && <sup>{cell.note}</sup>}
                          </>
                        ) : (
                          <span className="meta">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {addonNotes.length > 0 && (
            <ol className="form-note fee-notes">
              {addonNotes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ol>
          )}
        </>
      )}

      <p className="form-note">
        Standard package fees as published by each provider or in the DHP circular approving it. &ldquo;In total&rdquo; is the
        package plus the provider&apos;s express fee (DataFlow, AVS) or its Prestige package price (QuadraBay). US$ figures use the
        fixed rate of QAR 3.64 per dollar. AVS gives no published target for its express service, and does not say whether its 20
        days are working days.{checkedText} Confirm the price on the
        provider&apos;s portal before paying.
      </p>
    </section>
  )
}
