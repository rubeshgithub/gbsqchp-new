import type { CollectionConfig } from 'payload'
import { addDataAndFileToRequest } from 'payload'

import { authenticated } from '@/access'
import { COUNTRY_CODES } from './Countries'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PROFESSIONS = ['physician', 'dentist', 'nurse', 'pharmacist', 'allied-health', 'employer', 'other']

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'profession', 'country', 'source', 'createdAt'],
    group: 'Audience',
    description: 'Newsletter / DHP circular alerts sign-ups. Created by the public form; only admins can read.',
  },
  access: {
    // The public signs up through the /api/subscribers/subscribe endpoint below, never by creating documents directly.
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  endpoints: [
    {
      path: '/subscribe',
      method: 'post',
      handler: async (req) => {
        await addDataAndFileToRequest(req)
        const data = (req.data || {}) as Record<string, unknown>
        const email = String(data.email || '').trim().toLowerCase()
        const honeypot = String(data.website || '')

        if (honeypot) return Response.json({ ok: false, error: 'rejected' }, { status: 400 })
        if (!EMAIL_RE.test(email)) return Response.json({ ok: false, error: 'invalid-email' }, { status: 400 })

        const existing = await req.payload.find({
          collection: 'subscribers',
          where: { email: { equals: email } },
          limit: 1,
          depth: 0,
        })
        if (existing.totalDocs > 0) return Response.json({ ok: true, duplicate: true })

        const profession = String(data.profession || '')
        const country = String(data.country || '')
        await req.payload.create({
          collection: 'subscribers',
          data: {
            email,
            profession: (PROFESSIONS.includes(profession) ? profession : 'other') as never,
            country: (COUNTRY_CODES.some((c) => c.value === country) ? country : undefined) as never,
            source: String(data.source || '').slice(0, 200),
            consent: true,
          },
        })
        return Response.json({ ok: true }, { status: 201 })
      },
    },
  ],
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'profession',
      type: 'select',
      options: [
        { label: 'Physician', value: 'physician' },
        { label: 'Dentist', value: 'dentist' },
        { label: 'Nurse / Midwife', value: 'nurse' },
        { label: 'Pharmacist', value: 'pharmacist' },
        { label: 'Allied health', value: 'allied-health' },
        { label: 'Employer / HR / PRO', value: 'employer' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'country',
      type: 'select',
      options: [...COUNTRY_CODES],
      admin: { description: 'Country the subscriber is applying to.' },
    },
    { name: 'source', type: 'text', admin: { description: 'Page path the form was submitted from.' } },
    { name: 'consent', type: 'checkbox', defaultValue: true },
    {
      name: 'website',
      type: 'text',
      admin: { hidden: true, description: 'Honeypot – must stay empty.' },
      validate: (value: unknown) => (value ? 'Spam detected' : true),
    },
  ],
}
