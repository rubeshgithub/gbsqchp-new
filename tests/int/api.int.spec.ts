import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('Payload Local API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('exposes every collection of the content model', async () => {
    const slugs = payload.config.collections.map((c) => c.slug)
    for (const slug of ['pages', 'authors', 'vendors', 'fees', 'circulars', 'professions', 'countries', 'subscribers', 'contact-messages', 'media', 'users']) {
      expect(slugs).toContain(slug)
    }
  })

  it('only returns published pages to anonymous readers', async () => {
    const result = await payload.find({
      collection: 'pages',
      overrideAccess: false,
      limit: 100,
    })
    for (const doc of result.docs) {
      expect(doc._status).toBe('published')
    }
  })

  it('rejects anonymous direct creates on subscribers', async () => {
    await expect(
      payload.create({
        collection: 'subscribers',
        data: { email: `anon-${Date.now()}@example.com` },
        overrideAccess: false,
      }),
    ).rejects.toThrow()
  })
})
