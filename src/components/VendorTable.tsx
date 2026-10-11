import Link from 'next/link'
import React from 'react'

import { formatDate, formatMoney, rel, relId } from '@/lib/data'
import type { Fee, Page, Vendor } from '@/payload-types'

type Props = {
  vendors: Vendor[]
  fees: Fee[]
  title?: string
}

function findFee(fees: Fee[], vendorId: string, packageCode: string, tier: Fee['tier']) {
  return fees.find((f) => relId(f.vendor) === vendorId && f.packageCode === packageCode && f.tier === tier) || null
}

function findAddon(fees: Fee[], vendorId: string, addonKey: NonNullable<Fee['addonKey']>) {
  return fees.find((f) => relId(f.vendor) === vendorId && (f.tier === 'addon' || f.tier === 'optional') && f.addonKey === addonKey) || null
}

function days(fee: Fee | null) {
  if (!fee?.targetDays) return null
  const unit = fee.daysUnit === 'calendar' ? 'days' : fee.daysUnit === 'business' ? 'business days' : 'working days'
  return `${fee.targetDays} ${unit}`
}

export function VendorTable({ vendors, fees, title = 'Approved PSV providers compared' }: Props) {
  if (vendors.length === 0) return null

  const verifiedDates = fees.map((f) => f.verifiedOn).filter(Boolean) as string[]
  const latestVerified = verifiedDates.sort().at(-1)

  return (
    <section className="block" aria-labelledby="vendor-table-title">
      <h2 id="vendor-table-title" className="block-title">
        {title}
      </h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Status</th>
              <th>Physicians &amp; dentists (Package A)</th>
              <th>Nurses &amp; pharmacists (Package E)</th>
              <th>Published target</th>
              <th>Faster tier</th>
              <th>Report transfer</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => {
              const a = findFee(fees, v.id, 'A', 'standard')
              const e = findFee(fees, v.id, 'E', 'standard')
              const aFast = findFee(fees, v.id, 'A', 'express') || findAddon(fees, v.id, 'express-upgrade')
              const transfer = findAddon(fees, v.id, 'report-transfer')
              const guide = rel<Page>(v.page)
              const hasFees = Boolean(a || e)
              return (
                <tr key={v.id}>
                  <td>
                    <strong>{v.shortName || v.name}</strong>
                    {v.tagline && (
                      <>
                        <br />
                        <span className="meta">{v.tagline}</span>
                      </>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${v.status === 'approved' ? '' : 'badge-muted'}`}>
                      {v.status === 'approved' ? 'Approved' : v.status === 'former' ? 'Former' : 'Other'}
                    </span>
                    {v.approvedOn && (
                      <>
                        <br />
                        <span className="meta">since {formatDate(v.approvedOn, { month: 'short', year: 'numeric' })}</span>
                      </>
                    )}
                  </td>
                  <td>{a ? formatMoney(a.amount, a.currency || 'QAR') : hasFees ? '—' : 'Not yet published'}</td>
                  <td>{e ? formatMoney(e.amount, e.currency || 'QAR') : hasFees ? '—' : 'Not yet published'}</td>
                  <td>{days(a) || days(e) || '—'}</td>
                  <td>
                    {aFast
                      ? `${aFast.tier === 'express' ? formatMoney(aFast.amount, aFast.currency || 'QAR') : `+${formatMoney(aFast.amount, aFast.currency || 'QAR')}`}${days(aFast) ? ` · ${days(aFast)}` : ''}`
                      : '—'}
                  </td>
                  <td>{transfer ? formatMoney(transfer.amount, transfer.currency || 'QAR') : '—'}</td>
                  <td>
                    {guide && (
                      <>
                        <Link href={guide.path}>Our guide</Link>
                        <br />
                      </>
                    )}
                    {v.applyUrl && (
                      <>
                        <a href={v.applyUrl} rel="noopener noreferrer nofollow" target="_blank">
                          Apply
                        </a>
                        <br />
                      </>
                    )}
                    {v.trackUrl && (
                      <a href={v.trackUrl} rel="noopener noreferrer nofollow" target="_blank">
                        Track status
                      </a>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="form-note">
        Package A = up to two educational qualifications, one professional licence and the last five years of employment;
        Package E = one qualification, one licence and the last three years. Figures come from each provider&apos;s published
        price list or the approving DHP circular{latestVerified ? `, last checked ${formatDate(latestVerified)}` : ''}. Confirm
        the current price on the provider&apos;s portal before paying.
      </p>
    </section>
  )
}
