import Link from 'next/link'
import React from 'react'

import { formatDate, rel } from '@/lib/data'
import type { Circular, Page } from '@/payload-types'

const TOPIC_LABELS: Record<string, string> = {
  psv: 'PSV',
  exam: 'Exam',
  experience: 'Experience',
  evaluation: 'Evaluation',
  fees: 'Fees',
  vendors: 'Providers',
  renewal: 'Renewal',
  other: 'Other',
}

export function CircularTable({ circulars, title }: { circulars: Circular[]; title?: string }) {
  if (circulars.length === 0) return <p>No circulars recorded yet.</p>
  return (
    <section className="block" aria-label="Circular tracker">
      {title && <h2 className="block-title">{title}</h2>}
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Circular</th>
              <th>Issued</th>
              <th>What it changed</th>
              <th>Topics</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {circulars.map((c) => {
              const explainer = rel<Page>(c.explainer)
              return (
                <tr key={c.id}>
                  <td>
                    <strong>{c.number}</strong>
                    <br />
                    <span className="meta">{c.title}</span>
                    {c.status !== 'in-force' && (
                      <>
                        <br />
                        <span className="badge badge-muted">{c.status}</span>
                      </>
                    )}
                  </td>
                  <td>{formatDate(c.issuedOn) || '—'}</td>
                  <td>{c.summary}</td>
                  <td>{(c.topics || []).map((t) => TOPIC_LABELS[t] || t).join(', ')}</td>
                  <td>
                    {explainer && (
                      <>
                        <Link href={explainer.path}>Explainer</Link>
                        <br />
                      </>
                    )}
                    {c.officialUrl && (
                      <a href={c.officialUrl} rel="noopener noreferrer" target="_blank">
                        Official PDF
                      </a>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
