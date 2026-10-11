import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const COUNTRY_CODES = [
  { label: 'Qatar', value: 'QA' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'Kuwait', value: 'KW' },
  { label: 'Oman', value: 'OM' },
  { label: 'Bahrain', value: 'BH' },
] as const

export const Countries: CollectionConfig = {
  slug: 'countries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'code', 'regulatorShort', 'phase', 'active'],
    group: 'Reference data',
    description: 'One record per GCC country: who regulates, which phase of the roll-out it belongs to.',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'code',
      type: 'select',
      required: true,
      unique: true,
      options: [...COUNTRY_CODES],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL segment, e.g. "qatar" → /qatar/...' },
    },
    {
      type: 'row',
      fields: [
        { name: 'regulator', type: 'text', admin: { width: '60%' } },
        { name: 'regulatorShort', type: 'text', admin: { width: '40%', description: 'e.g. DHP' } },
      ],
    },
    { name: 'regulatorUrl', type: 'text' },
    {
      type: 'row',
      fields: [
        {
          name: 'phase',
          type: 'number',
          min: 1,
          max: 3,
          defaultValue: 2,
          admin: { width: '50%', description: '1 = Qatar launch, 2 = UAE/KSA, 3 = Kuwait/Oman/Bahrain' },
        },
        { name: 'active', type: 'checkbox', defaultValue: false, admin: { width: '50%' } },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      admin: { description: 'Two or three sentences shown on the country hub.' },
    },
  ],
}
