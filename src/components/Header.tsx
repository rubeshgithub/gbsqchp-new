import Link from 'next/link'
import React from 'react'

import type { SiteSetting } from '@/payload-types'

// Add Licensing / Exam entries here once those pages are published (see CLAUDE.md → content plan).
const NAV = [
  { href: '/qatar', label: 'Qatar' },
  { href: '/qatar/psv', label: 'PSV guide' },
  { href: '/qatar/circulars', label: 'Circulars' },
  { href: '/tools/psv-fee-calculator', label: 'Fee calculator' },
]

export function Header({ settings }: { settings: SiteSetting }) {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand" aria-label={`${settings.siteName} home`}>
            <span className="brand-mark" aria-hidden="true" />
            {settings.siteName}
          </Link>
          <nav className="site-nav" aria-label="Main">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="disclaimer-strip" role="note">
        <div className="container">{settings.disclaimerShort}</div>
      </div>
    </>
  )
}
