import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Vendors: CollectionConfig = {
  slug: 'vendors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'status', 'countries', 'approvedOn', 'sortOrder'],
    group: 'Reference data',
    description:
      'Primary Source Verification providers (DataFlow, QuadraBay, AVS, former providers). Fees live in the Fees collection.',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'shortName', type: 'text', admin: { description: 'Used in tables, e.g. "DataFlow"' } },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      type: 'row',
      fields: [
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'approved',
          options: [
            { label: 'Approved by regulator', value: 'approved' },
            { label: 'Former provider', value: 'former' },
            { label: 'Other / not approved', value: 'other' },
          ],
          admin: { width: '50%' },
        },
        { name: 'sortOrder', type: 'number', defaultValue: 10, admin: { width: '50%' } },
      ],
    },
    {
      name: 'countries',
      type: 'relationship',
      relationTo: 'countries',
      hasMany: true,
      admin: { description: 'Regulators / countries that accept this provider.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'approvedOn', type: 'date', admin: { width: '50%', date: { pickerAppearance: 'dayOnly' } } },
        { name: 'endedOn', type: 'date', admin: { width: '50%', date: { pickerAppearance: 'dayOnly' } } },
      ],
    },
    {
      name: 'approvedUnder',
      type: 'relationship',
      relationTo: 'circulars',
      hasMany: true,
      admin: { description: 'Circular(s) that approved or ended this provider.' },
    },
    { name: 'tagline', type: 'text', admin: { description: 'One line for cards, e.g. "DHP partner since 2009".' } },
    { name: 'description', type: 'richText' },
    {
      type: 'collapsible',
      label: 'Links & contacts',
      fields: [
        { name: 'website', type: 'text' },
        { name: 'applyUrl', type: 'text', admin: { description: 'Applicant portal / start verification URL' } },
        { name: 'trackUrl', type: 'text', admin: { description: 'Status tracking URL' } },
        { name: 'supportUrl', type: 'text' },
        { name: 'supportEmail', type: 'text' },
        {
          type: 'row',
          fields: [
            { name: 'phone', type: 'text', admin: { width: '50%' } },
            { name: 'whatsapp', type: 'text', admin: { width: '50%' } },
          ],
        },
        { name: 'officeAddress', type: 'textarea' },
        { name: 'officeHours', type: 'text' },
      ],
    },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      admin: { description: 'Our guide page for this provider (used for internal links).' },
    },
  ],
}
