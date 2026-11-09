import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="page container">
      <h1>Page not found</h1>
      <p className="lead">That address does not exist here. If you were looking for GBS verification, which ended in 2024, start with the page below.</p>
      <ul>
        <li>
          <Link href="/gbs-psv-portal">GBS verification ended – where to apply now</Link>
        </li>
        <li>
          <Link href="/qatar/psv">Primary Source Verification for Qatar</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}
