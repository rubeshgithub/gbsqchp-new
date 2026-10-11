import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const FEE_TIERS = [
  { label: 'Standard package', value: 'standard' },
  { label: 'Express / Prestige package', value: 'express' },
  { label: 'Add-on (per document / employer)', value: 'addon' },
  { label: 'Optional service (VIP, SMS, concierge…)', value: 'optional' },
] as const

export const ADDON_KEYS = [
  { label: 'Extra educational qualification', value: 'extra-education' },
  { label: 'Good standing certificate', value: 'good-standing' },
  { label: 'Surgical logbook', value: 'logbook' },
  { label: 'Extra professional licence', value: 'extra-licence' },
  { label: 'Extra employer / employment check', value: 'extra-employer' },
  { label: 'Report transfer', value: 'report-transfer' },
  { label: 'Report re-issuance', value: 'report-reissue' },
  { label: 'Express upgrade', value: 'express-upgrade' },
  { label: 'VIP / virtual assistance', value: 'vip' },
  { label: 'Concierge', value: 'concierge' },
  { label: 'Applicant assist (form filling)', value: 'applicant-assist' },
  { label: 'SMS notifications', value: 'sms' },
  { label: 'Other', value: 'other' },
] as const

export const Fees: CollectionConfig = {
  slug: 'fees',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'vendor', 'country', 'packageCode', 'tier', 'amount', 'targetDays', 'verifiedOn'],
    group: 'Reference data',
    description:
      'Every published price point. The comparison table and the calculator read from here, so one edit updates every page.',
    listSearchableFields: ['label', 'packageCode', 'packageName'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "DataFlow – Package A (Physicians & Dentists) – Standard"' },
    },
    {
      type: 'row',
      fields: [
        { name: 'vendor', type: 'relationship', relationTo: 'vendors', required: true, admin: { width: '50%' } },
        { name: 'country', type: 'relationship', relationTo: 'countries', required: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'tier',
          type: 'select',
          required: true,
          defaultValue: 'standard',
          options: [...FEE_TIERS],
          admin: { width: '34%' },
        },
        {
          name: 'packageCode',
          type: 'text',
          admin: { width: '33%', description: 'A, B, E, G, I … (leave empty for vendor-wide add-ons)' },
        },
        {
          name: 'addonKey',
          type: 'select',
          options: [...ADDON_KEYS],
          admin: { width: '33%', condition: (data) => data?.tier === 'addon' || data?.tier === 'optional' },
        },
      ],
    },
    { name: 'packageName', type: 'text', admin: { description: 'e.g. "Physicians & Dentists"' } },
    {
      name: 'professions',
      type: 'relationship',
      relationTo: 'professions',
      hasMany: true,
      admin: { description: 'Professions this package applies to (used by the calculator).' },
    },
    {
      type: 'row',
      fields: [
        { name: 'amount', type: 'number', required: true, admin: { width: '34%' } },
        {
          name: 'currency',
          type: 'select',
          defaultValue: 'QAR',
          options: [
            { label: 'QAR', value: 'QAR' },
            { label: 'USD', value: 'USD' },
            { label: 'AED', value: 'AED' },
            { label: 'SAR', value: 'SAR' },
            { label: 'KWD', value: 'KWD' },
            { label: 'OMR', value: 'OMR' },
            { label: 'BHD', value: 'BHD' },
          ],
          admin: { width: '33%' },
        },
        { name: 'targetDays', type: 'number', admin: { width: '33%', description: 'Published turnaround target' } },
      ],
    },
    {
      name: 'daysUnit',
      type: 'select',
      defaultValue: 'working',
      options: [
        { label: 'Working days', value: 'working' },
        { label: 'Business days', value: 'business' },
        { label: 'Calendar days', value: 'calendar' },
      ],
    },
    {
      name: 'includes',
      type: 'array',
      labels: { singular: 'Included item', plural: 'Included items' },
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    { name: 'notes', type: 'textarea' },
    {
      type: 'collapsible',
      label: 'Source & verification',
      fields: [
        { name: 'sourceLabel', type: 'text', admin: { description: 'e.g. "DHP price list PDF (Sept 2024)"' } },
        { name: 'sourceUrl', type: 'text' },
        {
          type: 'row',
          fields: [
            { name: 'verifiedOn', type: 'date', admin: { width: '50%', date: { pickerAppearance: 'dayOnly' } } },
            { name: 'active', type: 'checkbox', defaultValue: true, admin: { width: '50%' } },
          ],
        },
      ],
    },
  ],
}
