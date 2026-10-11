import React from 'react'

import { formatDate } from '@/lib/data'
import type { Page } from '@/payload-types'

export function ChangeLog({ entries }: { entries: Page['changeLog'] }) {
  if (!entries?.length) return null
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <section className="changelog block">
      <h3>Change log</h3>
      <ul>
        {sorted.map((e, i) => (
          <li key={e.id || i}>
            <strong>{formatDate(e.date)}</strong> — {e.note}
          </li>
        ))}
      </ul>
    </section>
  )
}
