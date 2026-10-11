import type { CollectionConfig } from 'payload'

import { authenticated, publishedOrAuthenticated } from '@/access'

export const PAGE_SECTIONS = [
  { label: 'PSV / verification', value: 'psv' },
  { label: 'Licensing & registration', value: 'licensing' },
  { label: 'Qualifying exam', value: 'exam' },
  { label: 'Circulars', value: 'circulars' },
  { label: 'Documents by country', value: 'documents' },
  { label: 'Careers (how to become …)', value: 'careers' },
  { label: 'Tools', value: 'tools' },
  { label: 'Legacy / about', value: 'legacy' },
  { label: 'General', value: 'general' },
] as const

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'path', 'section', 'country', 'verifiedOn', '_status', 'updatedAt'],
    group: 'Content',
    description:
      'Every public article/guide. The URL is the "path" field. Fees, circulars and vendors are NOT typed here — reference them and the components render live data.',
    listSearchableFields: ['title', 'path', 'summary'],
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}${data?.path || '/'}`,
    },
  },
  versions: {
    drafts: {
      autosave: { interval: 1500 },
    },
    maxPerDoc: 20,
  },
  access: {
    read: publishedOrAuthenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
    readVersions: authenticated,
  },
  fields: [
    { name: 'title', type: 'text', required: true, admin: { description: 'H1. Keep the target keyword in it.' } },
    {
      name: 'path',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Full URL path, lowercase, e.g. /qatar/psv/dataflow' },
      validate: (value: unknown) => {
        if (typeof value !== 'string' || !/^\/[a-z0-9\-\/]*$/.test(value) || value.endsWith('/') && value !== '/') {
          return 'Path must start with "/", use lowercase letters, numbers and hyphens, and not end with "/".'
        }
        return true
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'section',
          type: 'select',
          required: true,
          defaultValue: 'psv',
          options: [...PAGE_SECTIONS],
          admin: { width: '50%' },
        },
        { name: 'country', type: 'relationship', relationTo: 'countries', admin: { width: '50%' } },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description:
          'Answer-first intro (2–4 sentences). Answers the query in the first two sentences. Also the meta-description fallback.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: { description: 'Body. Use H2 questions people actually search. Tables come from the blocks below, not from here.' },
    },
    {
      type: 'collapsible',
      label: 'Live data blocks',
      fields: [
        {
          name: 'showVendorTable',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Render the PSV provider comparison table (reads Vendors + Fees for this page\'s country).' },
        },
        {
          name: 'showCalculator',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Embed the fee & timeline calculator.' },
        },
        {
          name: 'showCirculars',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Render the circular tracker table for this page\'s country.' },
        },
        {
          name: 'featuredVendor',
          type: 'relationship',
          relationTo: 'vendors',
          admin: {
            description:
              'Provider guide pages: render this provider\'s full package, add-on and optional-service tables plus its contact card (reads Vendors + Fees). The comparison table, if enabled, then moves below the body.',
          },
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      labels: { singular: 'FAQ', plural: 'FAQs' },
      admin: { description: '3–5 real questions. Rendered on the page and as FAQPage schema.' },
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
    {
      type: 'collapsible',
      label: 'Verification & trust',
      fields: [
        {
          name: 'verifiedOn',
          type: 'date',
          admin: { date: { pickerAppearance: 'dayOnly' }, description: 'Date the facts were last checked against the official sources.' },
        },
        {
          name: 'verifiedAgainst',
          type: 'array',
          labels: { singular: 'Source', plural: 'Sources' },
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text' },
            { name: 'circular', type: 'relationship', relationTo: 'circulars' },
          ],
        },
        {
          name: 'changeLog',
          type: 'array',
          labels: { singular: 'Change', plural: 'Change log' },
          fields: [
            { name: 'date', type: 'date', required: true, admin: { date: { pickerAppearance: 'dayOnly' } } },
            { name: 'note', type: 'text', required: true },
          ],
        },
        { name: 'author', type: 'relationship', relationTo: 'authors' },
      ],
    },
    {
      name: 'relatedPages',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true,
      admin: { description: 'Internal links shown at the end of the page.' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData?._status === 'published' && !value) return new Date()
            return value
          },
        ],
      },
    },
  ],
}

