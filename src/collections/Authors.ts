import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    description: 'Author names shown in author boxes and in Person schema.',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'jobTitle', type: 'text', admin: { description: 'e.g. "MRP Corporate Services"' } },
    { name: 'bio', type: 'textarea', admin: { description: 'Three to five sentences. Lead with the licensing / verification experience.' } },
    {
      name: 'credentials',
      type: 'array',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'linkedin', type: 'text' },
    {
      name: 'sameAs',
      type: 'array',
      admin: { description: 'Other profile URLs for Person schema.' },
      fields: [{ name: 'url', type: 'text', required: true }],
    },
  ],
}
