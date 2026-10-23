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
            {settings.publisherName && <p>Published by {settings.publisherName}.</p>}
            {settings.onlineOnlyNote && <p>{settings.onlineOnlyNote}</p>}
          </div>
          <div>
            <h4>Qatar</h4>
            <ul>
              <li>
                <Link href="/qatar/psv">Primary Source Verification</Link>
              </li>
              <li>
                <Link href="/qatar/licensing">How to get a DHP licence</Link>
              </li>
              <li>
                <Link href="/qatar/psv/fees">PSV fees compared</Link>
              </li>
              <li>
                <Link href="/qatar/psv/documents">Documents required for PSV</Link>
              </li>
              <li>
                <Link href="/qatar/psv/timeline">How long PSV takes</Link>
              </li>
              <li>
                <Link href="/qatar/psv/status">DataFlow status check</Link>
              </li>
              <li>
                <Link href="/qatar/exam/prometric">Qatar Prometric exam</Link>
              </li>
              <li>
                <Link href="/qatar/psv/countries/india">PSV for Indian applicants</Link>
              </li>
              <li>
                <Link href="/qatar/psv/countries/philippines">PSV for Filipino applicants</Link>
              </li>
              <li>
                <Link href="/qatar/psv/countries/pakistan">PSV for Pakistani applicants</Link>
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
                <Link href="/articles">Updates &amp; news</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy notice</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>{settings.disclaimerLong}</p>
          <p>
            © {year} {settings.publisherName || settings.siteName}. Fees and dates are quoted from the official sources linked on
            each page, with the date they were last checked.
          </p>
        </div>
      </div>
    </footer>
  )
}
