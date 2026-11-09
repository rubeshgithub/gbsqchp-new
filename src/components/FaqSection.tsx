import Link from 'next/link'
import React from 'react'

import { parseInlineLinks } from '@/lib/inline-links'
import type { Page } from '@/payload-types'

function Answer({ text }: { text: string }) {
  return (
    <p>
      {parseInlineLinks(text).map((s, i) => {
        if (s.type === 'text') return <React.Fragment key={i}>{s.text}</React.Fragment>
        if (s.external)
          return (
            <a key={i} href={s.href} rel="noopener noreferrer" target="_blank">
              {s.text}
            </a>
          )
        return (
          <Link key={i} href={s.href}>
            {s.text}
          </Link>
        )
      })}
    </p>
  )
}

export function FaqSection({ faqs }: { faqs: Page['faqs'] }) {
  if (!faqs?.length) return null
  return (
    <section className="faq block" id="faq">
      <h2 className="block-title">Frequently asked questions</h2>
      {faqs.map((f, i) => (
        <details key={f.id || i}>
          <summary>{f.question}</summary>
          <Answer text={f.answer} />
        </details>
      ))}
    </section>
  )
}
