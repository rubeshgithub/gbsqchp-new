import { gone } from '@/lib/gone'

// Old-site URLs (see src/lib/gone.ts): permanently removed.

export function GET() {
  return gone()
}

export function HEAD() {
  return gone()
}
