import React from 'react'

import { formatDate, formatMoney, rel, relId } from '@/lib/data'
import type { Circular, Fee, Vendor } from '@/payload-types'

type Props = {
  vendor: Vendor
  fees: Fee[]
}

function days(fee: Fee) {
  if (!fee.targetDays) return '—'
  const unit = fee.daysUnit === 'calendar' ? 'days' : fee.daysUnit === 'business' ? 'business days' : 'working days'
  return `${fee.targetDays} ${unit}`
}

function money(fee: Fee) {
  return formatMoney(fee.amount, fee.currency || 'QAR')
}

const ADDON_ORDER = [
  'extra-education',
  'extra-licence',
  'good-standing',
  'extra-employer',
  'logbook',
  'express-upgrade',
  'report-transfer',
  'report-reissue',
  'applicant-assist',
  'vip',
  'concierge',
  'sms',
  'other',
]

function byAddonOrder(a: Fee, b: Fee) {
  const ia = ADDON_ORDER.indexOf(a.addonKey || 'other')
  const ib = ADDON_ORDER.indexOf(b.addonKey || 'other')
  return ia - ib || a.amount - b.amount
}

function telHref(value: string) {
  return `tel:${value.replace(/[^+\d]/g, '')}`
}

/**
 * Full fee schedule and contact card for one provider. Reads only Fee + Vendor records, so a price change in the
 * admin updates this block, the comparison table and the calculator together.
 */
export function VendorPackages({ vendor, fees }: Props) {
  const own = fees.filter((f) => relId(f.vendor) === vendor.id && f.active !== false)
  const standard = own.filter((f) => f.tier === 'standard').sort((a, b) => (a.packageCode || '').localeCompare(b.packageCode || ''))
  const express = own.filter((f) => f.tier === 'express')
  const addons = own.filter((f) => f.tier === 'addon').sort(byAddonOrder)
  const optional = own.filter((f) => f.tier === 'optional').sort(byAddonOrder)
  const hasFaster = express.length > 0
  const source = own.find((f) => f.sourceUrl) || own[0]
  const verifiedOn = own.map((f) => f.verifiedOn).filter(Boolean).sort().at(-1)
  const circulars = (vendor.approvedUnder || []).map((c) => rel<Circular>(c)).filter(Boolean) as Circular[]
  const name = vendor.shortName || vendor.name

  return (
    <section className="block vendor-packages" aria-labelledby="vendor-packages-title">
      <div className="vendor-contact card">
        <div>
          <span className={`badge ${vendor.status === 'approved' ? '' : 'badge-muted'}`}>
            {vendor.status === 'approved' ? 'DHP-approved provider' : vendor.status === 'former' ? 'Former provider' : 'Not approved'}
          </span>
          <h2 id="vendor-packages-title">{vendor.name}</h2>
          {vendor.tagline && <p>{vendor.tagline}</p>}
          <ul className="vendor-facts">
            {vendor.approvedOn && (
              <li>
                <strong>Approved:</strong> {formatDate(vendor.approvedOn)}
                {circulars.length > 0 && (
                  <>
                    {' '}
                    (
                    {circulars.map((c, i) => (
                      <React.Fragment key={c.id}>
                        {i > 0 && ', '}
                        {c.officialUrl ? (
                          <a href={c.officialUrl} rel="noopener noreferrer" target="_blank">
                            Circular {c.number}
                          </a>
                        ) : (
                          <>Circular {c.number}</>
                        )}
                      </React.Fragment>
                    ))}
                    )
                  </>
                )}
              </li>
            )}
            {vendor.endedOn && (
              <li>
                <strong>Ended:</strong> {formatDate(vendor.endedOn)}
              </li>
            )}
            {vendor.officeAddress && (
              <li>
                <strong>Doha office:</strong> {vendor.officeAddress}
                {vendor.officeHours ? ` · ${vendor.officeHours}` : ''}
              </li>
            )}
            {(vendor.supportEmail || vendor.phone || vendor.whatsapp) && (
              <li>
                <strong>Contact:</strong>{' '}
                {vendor.supportEmail && <a href={`mailto:${vendor.supportEmail}`}>{vendor.supportEmail}</a>}
                {vendor.phone && (
                  <>
                    {vendor.supportEmail ? ' · ' : ''}
                    <a href={telHref(vendor.phone)}>{vendor.phone}</a>
                  </>
                )}
                {vendor.whatsapp && (
                  <>
                    {vendor.supportEmail || vendor.phone ? ' · ' : ''}
                    WhatsApp <a href={`https://wa.me/${vendor.whatsapp.replace(/[^\d]/g, '')}`} rel="noopener noreferrer nofollow" target="_blank">{vendor.whatsapp}</a>
                  </>
                )}
              </li>
            )}
          </ul>
        </div>
        <div className="card-links">
          {vendor.applyUrl && (
            <a className="btn btn-primary" href={vendor.applyUrl} rel="noopener noreferrer nofollow" target="_blank">
              Apply on the {name} portal
            </a>
          )}
          {vendor.trackUrl && (
            <a href={vendor.trackUrl} rel="noopener noreferrer nofollow" target="_blank">
              Track an application
            </a>
          )}
          {vendor.supportUrl && (
            <a href={vendor.supportUrl} rel="noopener noreferrer nofollow" target="_blank">
              Support centre
            </a>
          )}
          {vendor.website && (
            <a href={vendor.website} rel="noopener noreferrer nofollow" target="_blank">
              Official page
            </a>
          )}
        </div>
      </div>

      {standard.length === 0 ? (
        <p className="callout callout-info">{name} has not published a fee schedule yet. This block fills in automatically when it does.</p>
      ) : (
        <>
          <h3>{name} packages for Qatar DHP</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Who it is for</th>
                  <th>What is verified</th>
                  <th>Fee</th>
                  {hasFaster && <th>Faster tier</th>}
                  <th>Published target</th>
                </tr>
              </thead>
              <tbody>
                {standard.map((f) => {
                  const fast = express.find((e) => e.packageCode === f.packageCode)
                  return (
                    <tr key={f.id}>
                      <td>
                        <strong>{f.packageCode ? `Package ${f.packageCode}` : '—'}</strong>
                      </td>
                      <td>{f.packageName}</td>
                      <td>
                        {f.includes && f.includes.length > 0 ? (
                          <ul className="compact">
                            {f.includes.map((i, idx) => (
                              <li key={i.id || idx}>{i.item}</li>
                            ))}
                          </ul>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="fee">
                        <strong>{money(f)}</strong>
                      </td>
                      {hasFaster && <td className="fee">{fast ? `${money(fast)} · ${days(fast)}` : '—'}</td>}
                      <td>{days(f)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {standard.some((f) => f.notes) && (
            <p className="form-note">{standard.find((f) => f.notes)?.notes}</p>
          )}
        </>
      )}

      {addons.length > 0 && (
        <>
          <h3>Add-ons: documents outside the package</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Fee</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((f) => (
                  <tr key={f.id}>
                    <td>{f.packageName || f.label}</td>
                    <td className="fee">
                      <strong>{money(f)}</strong>
                      {f.targetDays ? ` · ${days(f)}` : ''}
                    </td>
                    <td>{f.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {optional.length > 0 && (
        <>
          <h3>Optional services</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Fee</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {optional.map((f) => (
                  <tr key={f.id}>
                    <td>{f.packageName || f.label}</td>
                    <td className="fee">
                      <strong>{money(f)}</strong>
                    </td>
                    <td>{f.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {source && (
        <p className="form-note">
          Source:{' '}
          {source.sourceUrl ? (
            <a href={source.sourceUrl} rel="noopener noreferrer" target="_blank">
              {source.sourceLabel || 'provider price list'}
            </a>
          ) : (
            source.sourceLabel || 'provider price list'
          )}
          {verifiedOn ? `, checked ${formatDate(verifiedOn)}` : ''}. All fees in QAR, excluding any fee an issuing university or
          council charges to answer the verification request. Confirm the current price on the provider&apos;s portal before paying.
        </p>
      )}
    </section>
  )
}
