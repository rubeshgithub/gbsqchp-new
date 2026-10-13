import type { CollectionConfig, PayloadRequest } from 'payload'
import { addDataAndFileToRequest } from 'payload'

import { authenticated } from '@/access'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const TOPICS = ['psv', 'licensing', 'exam', 'documents', 'employer', 'other'] as const
const TOPIC_LABELS: Record<(typeof TOPICS)[number], string> = {
  psv: 'Primary Source Verification (DataFlow / QuadraBay / AVS)',
  licensing: 'DHP licensing / evaluation',
  exam: 'Qualifying exam (Prometric)',
  documents: 'My documents / a problem with my file',
  employer: 'Employer or recruiter enquiry',
  other: 'Something else',
}

/** Where enquiries are emailed. Server-side only – never rendered on the site. */
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'rubesh@insteadglobal.com'

// Simple in-memory rate limit: 5 messages per IP per 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function clientIp(req: PayloadRequest) {
  const fwd = req.headers.get('x-forwarded-for')
  return (fwd ? fwd.split(',')[0] : req.headers.get('x-real-ip')) || 'unknown'
}

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

function clean(value: unknown, max: number) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, max)
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: { singular: 'Contact message', plural: 'Contact messages' },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'name', 'email', 'topic', 'emailStatus', 'createdAt'],
    group: 'Audience',
    description: 'Every message sent from the /contact form. Also emailed to the enquiries inbox; kept here even if the email fails.',
  },
  access: {
    // The public submits through POST /api/contact-messages/submit, never by creating documents directly.
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-createdAt',
  endpoints: [
    {
      path: '/submit',
      method: 'post',
      handler: async (req) => {
        await addDataAndFileToRequest(req)
        const data = (req.data || {}) as Record<string, unknown>

        if (clean(data.website, 200)) return Response.json({ ok: false, error: 'rejected' }, { status: 400 })
        if (rateLimited(clientIp(req))) return Response.json({ ok: false, error: 'rate-limited' }, { status: 429 })

        const name = clean(data.name, 120)
        const email = clean(data.email, 200).toLowerCase()
        const phone = clean(data.phone, 40)
        const country = clean(data.country, 80)
        const topicRaw = clean(data.topic, 40)
        const topic = (TOPICS as readonly string[]).includes(topicRaw) ? (topicRaw as (typeof TOPICS)[number]) : 'other'
        const message = clean(data.message, 5000)
        const page = clean(data.page, 200)

        const errors: string[] = []
        if (name.length < 2) errors.push('name')
        if (!EMAIL_RE.test(email)) errors.push('email')
        if (message.length < 10) errors.push('message')
        if (errors.length) return Response.json({ ok: false, error: 'invalid', fields: errors }, { status: 400 })

        const subject = `${TOPIC_LABELS[topic]} – ${name}`
        const doc = await req.payload.create({
          collection: 'contact-messages',
          data: { subject, name, email, phone, country, topic, message, page, emailStatus: 'pending' },
          overrideAccess: true,
        })

        let emailStatus: 'sent' | 'failed' | 'not-configured' = 'not-configured'
        let emailError = ''
        if (process.env.SMTP_HOST) {
          try {
            const rows: [string, string][] = [
              ['Name', name],
              ['Email', email],
              ['Phone / WhatsApp', phone || '—'],
              ['Country of training', country || '—'],
              ['Topic', TOPIC_LABELS[topic]],
              ['Sent from page', page || '—'],
            ]
            await req.payload.sendEmail({
              to: CONTACT_TO,
              replyTo: email,
              subject: `[PSV Guide] ${subject}`,
              text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}\n`,
              html: `<table cellpadding="4">${rows
                .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
                .join('')}</table><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
            })
            emailStatus = 'sent'
          } catch (err) {
            emailStatus = 'failed'
            emailError = err instanceof Error ? err.message.slice(0, 500) : 'unknown error'
            req.payload.logger.error({ err, msg: 'Contact form email failed (message is saved in the admin).' })
          }
        }

        await req.payload.update({
          collection: 'contact-messages',
          id: doc.id,
          data: { emailStatus, emailError },
          overrideAccess: true,
        })

        return Response.json({ ok: true }, { status: 201 })
      },
    },
  ],
  fields: [
    { name: 'subject', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'email', type: 'email', required: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text', admin: { width: '50%' } },
        { name: 'country', type: 'text', admin: { width: '50%', description: 'Country of training' } },
      ],
    },
    {
      name: 'topic',
      type: 'select',
      defaultValue: 'other',
      options: TOPICS.map((value) => ({ value, label: TOPIC_LABELS[value] })),
    },
    { name: 'message', type: 'textarea', required: true },
    { name: 'page', type: 'text', admin: { description: 'Page the form was sent from' } },
    {
      type: 'row',
      fields: [
        {
          name: 'emailStatus',
          type: 'select',
          defaultValue: 'pending',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Emailed', value: 'sent' },
            { label: 'Email failed', value: 'failed' },
            { label: 'Email not configured', value: 'not-configured' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'handled',
          type: 'checkbox',
          defaultValue: false,
          admin: { width: '50%', description: 'Tick once replied' },
        },
      ],
    },
    { name: 'emailError', type: 'text', admin: { readOnly: true, condition: (data) => data?.emailStatus === 'failed' } },
  ],
}
