import React from 'react'

import { formatDate, rel } from '@/lib/data'
import type { Circular, Page } from '@/payload-types'

export function VerifiedStamp({ page }: { page: Page }) {
  const sources = page.verifiedAgainst || []
  if (!page.verifiedOn && sources.length === 0) return null

  return (
    <div className="verified">
      {page.verifiedOn && (
        <span>
          <strong>Verified against official sources on {formatDate(page.verifiedOn)}.</strong>
        </span>
      )}
      {sources.length > 0 && (
        <ul>
          {sources.map((s, i) => {
            const circular = rel<Circular>(s.circular)
            const label = circular && !s.label.includes(circular.number) ? `${circular.number} – ${s.label}` : s.label
            const url = s.url || circular?.officialUrl
            return (
              <li key={s.id || i}>
                {url ? (
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    {label}
                  </a>
                ) : (
                  label
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
