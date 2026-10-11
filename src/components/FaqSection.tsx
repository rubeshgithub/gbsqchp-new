import React from 'react'

import type { Page } from '@/payload-types'

export function FaqSection({ faqs }: { faqs: Page['faqs'] }) {
  if (!faqs?.length) return null
  return (
    <section className="faq block" id="faq">
      <h2 className="block-title">Frequently asked questions</h2>
      {faqs.map((f, i) => (
        <details key={f.id || i}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </section>
  )
}
