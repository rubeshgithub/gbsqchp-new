import Link from 'next/link'
import React from 'react'

import { formatDate, formatMoney, rel, relId } from '@/lib/data'
import type { Fee, Page, Vendor } from '@/payload-types'

export function VendorCards({ vendors, fees }: { vendors: Vendor[]; fees: Fee[] }) {
  return (
    <div className="grid">
      {vendors.map((v) => {
        // "From" price = cheapest standard package that applies to a profession (ignores good-standing-only packages etc.)
        const standard = fees.filter((f) => relId(f.vendor) === v.id && f.tier === 'standard')
        const professional = standard.filter((f) => (f.professions || []).length > 0)
        const pool = professional.length ? professional : standard
        const cheapest = pool.length ? pool.reduce((m, f) => (f.amount < m.amount ? f : m)) : null
        const guide = rel<Page>(v.page)
        return (
          <article className="card" key={v.id}>
            <span className={`badge ${v.status === 'approved' ? '' : 'badge-muted'}`}>
              {v.status === 'approved' ? 'DHP-approved' : 'Former provider'}
            </span>
            <h3>{guide ? <Link href={guide.path}>{v.name}</Link> : v.name}</h3>
            {v.tagline && <p>{v.tagline}</p>}
            <p className="meta">
              {v.approvedOn && <>Approved {formatDate(v.approvedOn)}. </>}
              {cheapest ? <>Packages from {formatMoney(cheapest.amount, cheapest.currency || 'QAR')}.</> : 'Fees not yet published.'}
            </p>
            <div className="card-links">
              {guide ? <Link href={guide.path}>Read our guide</Link> : <Link href="/qatar/psv">PSV overview</Link>}
              {v.applyUrl && (
                <a href={v.applyUrl} rel="noopener noreferrer nofollow" target="_blank">
                  Provider portal
                </a>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
