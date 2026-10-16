import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

/**
 * Legacy URLs from the former PSV portal on this domain (2018–2024) still receive traffic and are still
 * linked from PDFs on dhp.moph.gov.qa. Send all of them to the explainer page.
 */
const LEGACY_PREFIXES = ['Home', 'home', 'AppPDFFiles', 'apppdffiles', 'Account', 'account', 'Applicant', 'applicant', 'Employer', 'employer']

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  async redirects() {
    return [
      // One canonical host for search engines: www.gbsqchp.com → gbsqchp.com (same path and query).
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'www.gbsqchp.com' }],
        destination: 'https://gbsqchp.com/:path*',
        permanent: true,
      },
      // Behind Cloudflare (Full strict) a plain-http visit still reaches the server over HTTPS, so the server's own
      // http→https redirect never fires; Cloudflare's CF-Visitor header tells us what the visitor actually used.
      {
        source: '/:path*',
        has: [{ type: 'header' as const, key: 'cf-visitor', value: '.*"scheme":"http".*' }],
        destination: 'https://gbsqchp.com/:path*',
        permanent: true,
      },
      ...LEGACY_PREFIXES.map((prefix) => ({
        source: `/${prefix}/:path*`,
        destination: '/gbs-psv-portal',
        permanent: true,
      })),
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
