import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="page container">
      <h1>Page not found</h1>
      <p className="lead">That address does not exist here. If you followed an old link to the GBS PSV portal, start with the page below.</p>
      <ul>
        <li>
          <Link href="/gbs-psv-portal">Looking for the GBS QCHP PSV portal?</Link>
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
