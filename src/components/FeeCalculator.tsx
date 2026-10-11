'use client'

import React, { useMemo, useState } from 'react'

export type CalcVendor = {
  id: string
  name: string
  applyUrl?: string | null
  guidePath?: string | null
}

export type CalcFee = {
  vendorId: string
  tier: 'standard' | 'express' | 'addon' | 'optional'
  packageCode?: string | null
  addonKey?: string | null
  label: string
  amount: number
  currency: string
  targetDays?: number | null
  daysUnit?: string | null
}

export type CalcProfession = {
  slug: string
  name: string
  psvPackageCode?: string | null
  experienceYearsVerified?: number | null
}

type Props = {
  vendors: CalcVendor[]
  fees: CalcFee[]
  professions: CalcProfession[]
  verifiedOn?: string | null
}

const ADDONS: { key: string; label: string; qty?: boolean }[] = [
  { key: 'extra-education', label: 'Extra educational qualification', qty: true },
  { key: 'good-standing', label: 'Extra good-standing certificate', qty: true },
  { key: 'extra-licence', label: 'Extra professional licence', qty: true },
  { key: 'extra-employer', label: 'Extra employer beyond the package', qty: true },
  { key: 'logbook', label: 'Surgical logbook' },
  { key: 'report-transfer', label: 'Transfer an existing report' },
  { key: 'vip', label: 'VIP / virtual assistance' },
  { key: 'sms', label: 'SMS notifications' },
]

function money(amount: number, currency: string) {
  return `${currency} ${new Intl.NumberFormat('en-US').format(Math.round(amount))}`
}

function unitLabel(unit?: string | null) {
  return unit === 'calendar' ? 'days' : unit === 'business' ? 'business days' : 'working days'
}

export function FeeCalculator({ vendors, fees, professions, verifiedOn }: Props) {
  const [professionSlug, setProfessionSlug] = useState(professions[0]?.slug || '')
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard')
  const [addons, setAddons] = useState<Record<string, number>>({})

  const profession = professions.find((p) => p.slug === professionSlug) || null
  const packageCode = profession?.psvPackageCode || null

  const results = useMemo(() => {
    return vendors.map((v) => {
      const vendorFees = fees.filter((f) => f.vendorId === v.id)
      const base =
        (packageCode && vendorFees.find((f) => f.packageCode === packageCode && f.tier === speed)) ||
        (packageCode && speed === 'express' && vendorFees.find((f) => f.packageCode === packageCode && f.tier === 'standard')) ||
        null
      const expressUpgrade =
        speed === 'express' && base?.tier === 'standard'
          ? vendorFees.find((f) => f.addonKey === 'express-upgrade' && (f.tier === 'addon' || f.tier === 'optional'))
          : null

      const lines: { label: string; amount: number }[] = []
      if (base) lines.push({ label: base.label, amount: base.amount })
      if (expressUpgrade) lines.push({ label: expressUpgrade.label, amount: expressUpgrade.amount })

      let missing: string[] = []
      for (const a of ADDONS) {
        const qty = addons[a.key] || 0
        if (!qty) continue
        const fee = vendorFees.find((f) => f.addonKey === a.key && (f.tier === 'addon' || f.tier === 'optional'))
        if (fee) lines.push({ label: `${fee.label}${qty > 1 ? ` × ${qty}` : ''}`, amount: fee.amount * qty })
        else missing = [...missing, a.label]
      }

      const total = lines.reduce((s, l) => s + l.amount, 0)
      const currency = base?.currency || vendorFees[0]?.currency || 'QAR'
      const target = expressUpgrade?.targetDays ? expressUpgrade : base
      const fasterAvailable = base?.tier === 'express' || Boolean(expressUpgrade)
      return { vendor: v, base, lines, total, currency, target, missing, fasterAvailable, hasAnyFees: vendorFees.length > 0 }
    })
  }, [vendors, fees, packageCode, speed, addons])

  function setQty(key: string, value: number) {
    setAddons((prev) => ({ ...prev, [key]: Math.max(0, value) }))
  }

  return (
    <div className="calculator" aria-live="polite">
      <div className="controls">
        <div>
          <label htmlFor="calc-profession">Your profession</label>
          <select id="calc-profession" value={professionSlug} onChange={(e) => setProfessionSlug(e.target.value)}>
            {professions.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="calc-speed">Processing tier</label>
          <select id="calc-speed" value={speed} onChange={(e) => setSpeed(e.target.value as 'standard' | 'express')}>
            <option value="standard">Standard</option>
            <option value="express">Express / Prestige (faster target)</option>
          </select>
        </div>
      </div>

      <p className="form-note">
        {packageCode ? (
          <>
            Providers verify this profession under <strong>Package {packageCode}</strong>
            {profession?.experienceYearsVerified ? ` (last ${profession.experienceYearsVerified} years of employment)` : ''}.
            Tick anything outside the package:
          </>
        ) : (
          'Select a profession to see package prices.'
        )}
      </p>

      <div className="addons">
        {ADDONS.map((a) => (
          <label key={a.key}>
            <input
              type="checkbox"
              checked={(addons[a.key] || 0) > 0}
              onChange={(e) => setQty(a.key, e.target.checked ? 1 : 0)}
            />
            <span>{a.label}</span>
            {a.qty && (addons[a.key] || 0) > 0 && (
              <input
                type="number"
                min={1}
                max={10}
                value={addons[a.key]}
                onChange={(e) => setQty(a.key, Number(e.target.value) || 1)}
                style={{ width: 64, padding: '4px 8px' }}
                aria-label={`${a.label} quantity`}
              />
            )}
          </label>
        ))}
      </div>

      <div className="results">
        {results.map((r) => (
          <div className="result" key={r.vendor.id}>
            <strong>{r.vendor.name}</strong>
            {r.base ? (
              <>
                <div className="total">{money(r.total, r.currency)}</div>
                <div className="small">
                  {r.target?.targetDays ? `Target ${r.target.targetDays} ${unitLabel(r.target.daysUnit)} after a complete file` : 'No published target'}
                  {speed === 'express' && !r.fasterAvailable ? ' · no faster tier published' : ''}
                </div>
                <ul className="small" style={{ paddingLeft: '1.1em', margin: '8px 0 0' }}>
                  {r.lines.map((l, i) => (
                    <li key={i}>
                      {l.label}: {money(l.amount, r.currency)}
                    </li>
                  ))}
                </ul>
                {r.missing.length > 0 && (
                  <div className="small">Not priced separately by this provider: {r.missing.join(', ')}.</div>
                )}
              </>
            ) : (
              <div className="small">{r.hasAnyFees ? 'No package published for this profession.' : 'Fees not yet published.'}</div>
            )}
            <div className="small" style={{ marginTop: 8 }}>
              {r.vendor.guidePath && <a href={r.vendor.guidePath}>Our guide</a>}
              {r.vendor.guidePath && r.vendor.applyUrl && ' · '}
              {r.vendor.applyUrl && (
                <a href={r.vendor.applyUrl} rel="noopener noreferrer nofollow" target="_blank">
                  Provider portal
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="form-note" style={{ marginTop: 16 }}>
        Indicative only. Prices come from each provider&apos;s published list or the approving DHP circular
        {verifiedOn ? `, last checked ${new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(verifiedOn))}` : ''}.
        Targets start only when your file is complete and never include the time your university or employer takes to reply.
      </p>
    </div>
  )
}
