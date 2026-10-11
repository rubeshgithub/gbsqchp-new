import type { Metadata } from 'next'
import React from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { getSiteSettings, SITE_URL } from '@/lib/data'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'

import './globals.css'

// Every frontend route renders per request for now (no DB access at build time).
// Switch to ISR (`export const revalidate = 600`) once the production database is reachable during `next build`.
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    metadataBase: new URL(settings.siteUrl || SITE_URL),
    title: {
      default: settings.siteName,
      template: `%s · ${settings.siteName}`,
    },
    description: settings.tagline || undefined,
    openGraph: { siteName: settings.siteName, type: 'website' },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd(settings)} />
        <JsonLd data={websiteJsonLd(settings)} />
        <Header settings={settings} />
        <main id="main">{children}</main>
        <Footer settings={settings} />
        {settings.ga4Id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.ga4Id}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.ga4Id}',{anonymize_ip:true});`,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
