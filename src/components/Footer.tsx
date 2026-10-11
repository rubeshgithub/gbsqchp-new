import Link from 'next/link'
import React from 'react'

import type { SiteSetting } from '@/payload-types'

export function Footer({ settings }: { settings: SiteSetting }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{settings.siteName}</h4>
            <p>{settings.tagline}</p>
            {settings.parentBrand && (
              <p>
                A service of{' '}
                {settings.parentUrl ? <a href={settings.parentUrl}>{settings.parentBrand}</a> : settings.parentBrand}
                {settings.legalName ? ` · ${settings.legalName}` : ''}
              </p>
            )}
          </div>
          <div>
            <h4>Qatar</h4>
            <ul>
              <li>
                <Link href="/qatar/psv">Primary Source Verification</Link>
              </li>
              <li>
                <Link href="/qatar">Qatar hub – all guides</Link>
              </li>
              <li>
                <Link href="/qatar/circulars">Circular tracker</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>
                <Link href="/tools/psv-fee-calculator">PSV fee &amp; timeline calculator</Link>
              </li>
              <li>
                <Link href="/#newsletter">DHP circular alerts</Link>
              </li>
              <li>
                <Link href="/gbs-psv-portal">Looking for the GBS portal?</Link>
              </li>
              {settings.contactEmail && (
                <li>
                  <a href={`mailto:${settings.contactEmail}`}>Contact</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>{settings.disclaimerLong}</p>
          <p>
            © {year} {settings.legalName || settings.siteName}. Fees and dates are quoted from the official sources linked on
            each page, with the date they were last checked.
          </p>
        </div>
      </div>
    </footer>
  )
}
