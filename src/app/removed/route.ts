import { gone } from '@/lib/gone'

// Target of the next.config.ts rewrites for URL families from an earlier website on this domain: 410 Gone.

export function GET() {
  return gone()
}

export function HEAD() {
  return gone()
}
