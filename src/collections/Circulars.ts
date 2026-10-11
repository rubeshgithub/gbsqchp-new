import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Circulars: CollectionConfig = {
  slug: 'circulars',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title', 'issuedOn', 'authority', 'status'],
    group: 'Reference data',
    description: 'Regulator circulars. The circular tracker page and the "verified against" stamps read from here.',
    listSearchableFields: ['number', 'title', 'summary'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-issuedOn',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'number', type: 'text', required: true, unique: true, admin: { width: '40%', description: 'e.g. DHP/2025/24' } },
        {
          name: 'authority',
          type: 'select',
          required: true,
          defaultValue: 'DHP',
          options: [
            { label: 'DHP – Department of Healthcare Professions (Qatar)', value: 'DHP' },
            { label: 'MOPH Qatar', value: 'MOPH' },
            { label: 'QCHP (historical)', value: 'QCHP' },
            { label: 'Other regulator', value: 'OTHER' },
          ],
          admin: { width: '30%' },
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'in-force',
          options: [
            { label: 'In force', value: 'in-force' },
            { label: 'Superseded', value: 'superseded' },
            { label: 'Historical', value: 'historical' },
          ],
          admin: { width: '30%' },
        },
      ],
    },
    { name: 'title', type: 'text', required: true },
    { name: 'issuedOn', type: 'date', admin: { date: { pickerAppearance: 'dayOnly' } } },
    { name: 'country', type: 'relationship', relationTo: 'countries' },
    {
      name: 'topics',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'PSV / verification', value: 'psv' },
        { label: 'Qualifying exam', value: 'exam' },
        { label: 'Experience & gaps', value: 'experience' },
        { label: 'Evaluation & eligibility', value: 'evaluation' },
        { label: 'Fees', value: 'fees' },
        { label: 'Providers / vendors', value: 'vendors' },
        { label: 'Renewal & CPD', value: 'renewal' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      admin: { description: 'Plain-English summary, two to four sentences. What changed and for whom.' },
    },
    { name: 'officialUrl', type: 'text', admin: { description: 'Link to the PDF on dhp.moph.gov.qa' } },
    {
      name: 'explainer',
      type: 'relationship',
      relationTo: 'pages',
      admin: { description: 'Our explainer page for this circular, if written.' },
    },
    {
      name: 'verified',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Tick once someone has read the official PDF and confirmed number, date and summary.' },
    },
  ],
}
