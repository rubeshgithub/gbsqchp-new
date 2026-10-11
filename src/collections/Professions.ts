import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Professions: CollectionConfig = {
  slug: 'professions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'group', 'psvPackageCode', 'examPassMark', 'sortOrder'],
    group: 'Reference data',
    description: 'Profession categories as the regulator classifies them. Drives the fee calculator and checklists.',
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
    {
      type: 'row',
      fields: [
        {
          name: 'group',
          type: 'select',
          required: true,
          options: [
            { label: 'Physician', value: 'physician' },
            { label: 'Dentist', value: 'dentist' },
            { label: 'Nurse / Midwife', value: 'nurse' },
            { label: 'Pharmacist', value: 'pharmacist' },
            { label: 'Allied health', value: 'allied-health' },
            { label: 'Other', value: 'other' },
          ],
          admin: { width: '50%' },
        },
        { name: 'sortOrder', type: 'number', defaultValue: 10, admin: { width: '50%' } },
      ],
    },
    {
      name: 'psvPackageCode',
      type: 'text',
      admin: {
        description:
          'Package letter the PSV providers use for this profession (A physicians/dentists, B allied health, E nurses/pharmacists, G CNS/NP/educators).',
      },
    },
    {
      type: 'collapsible',
      label: 'Qualifying exam',
      fields: [
        { name: 'examCategory', type: 'text', admin: { description: 'Prometric category name' } },
        {
          type: 'row',
          fields: [
            { name: 'examPassMark', type: 'number', admin: { width: '33%', description: '% to pass' } },
            { name: 'examAttempts', type: 'number', admin: { width: '33%' } },
            { name: 'examQuestions', type: 'number', admin: { width: '33%' } },
          ],
        },
      ],
    },
    {
      name: 'experienceYearsVerified',
      type: 'number',
      admin: { description: 'Years of employment the PSV package verifies (3 for nurses/pharmacists, 5 for physicians/AHP).' },
    },
    { name: 'notes', type: 'textarea' },
  ],
}
