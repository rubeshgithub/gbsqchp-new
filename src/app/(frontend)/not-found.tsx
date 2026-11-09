import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="page container">
      <h1>Page not found</h1>
      <p className="lead">That address does not exist here. Try one of these pages instead.</p>
      <ul>
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
