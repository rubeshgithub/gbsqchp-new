import Link from 'next/link'
import React from 'react'

import type { Page } from '@/payload-types'

export function RelatedPages({ pages }: { pages: Page['relatedPages'] }) {
  const docs = (pages || []).filter((p): p is Page => typeof p !== 'string')
  if (docs.length === 0) return null
  return (
    <section className="related block">
      <h2 className="block-title">Read next</h2>
      <ul>
        {docs.map((p) => (
          <li key={p.id}>
            <Link href={p.path}>{p.title}</Link>
            {p.summary && <span className="meta"> — {p.summary.split('. ')[0]}.</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
