import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: {
    group: 'Admin',
  },
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Identity',
      fields: [
        { name: 'siteName', type: 'text', required: true, defaultValue: 'Primary Source Verification Guide' },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'The independent pre-submission guide to GCC healthcare licensing. Qatar first.',
        },
        { name: 'siteUrl', type: 'text', defaultValue: 'https://gbsqchp.com' },
        {
          name: 'publisherName',
          type: 'text',
          defaultValue: 'MRP Corporate Services',
          admin: { description: 'Shown in the footer and as the publisher in structured data.' },
        },
        {
          name: 'onlineOnlyNote',
          type: 'text',
          defaultValue: 'A 100% online service – no office visits. Ask us through the chat or the contact form.',
          admin: { description: 'One line in the footer and on the contact page.' },
        },
        { name: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'defaultOgImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Disclaimer (shown on every page)',
      fields: [
        {
          name: 'disclaimerShort',
          type: 'text',
          required: true,
          defaultValue:
            'Independent information portal. Not affiliated with the Ministry of Public Health or the DHP. Not an approved PSV provider.',
        },
        {
          name: 'disclaimerLong',
          type: 'textarea',
          defaultValue:
            'This website is an independent information service. It is not affiliated with, endorsed by, or acting on behalf of the Ministry of Public Health (MOPH) of Qatar, the Department of Healthcare Professions (DHP), or any other regulator, and it is not an approved Primary Source Verification provider. We do not accept PSV applications or payments. Fees, timelines and rules are quoted from official sources with the date they were last checked; the regulator and the provider you choose remain the only authorities for your case.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Newsletter',
      fields: [
        { name: 'newsletterTitle', type: 'text', defaultValue: 'DHP circular alerts' },
        {
          name: 'newsletterBlurb',
          type: 'textarea',
          defaultValue:
            'One short email when the DHP, DataFlow, QuadraBay or AVS change a rule, a fee or a timeline. No marketing, no spam.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Chat & enquiries',
      fields: [
        {
          name: 'crispWebsiteId',
          type: 'text',
          admin: {
            description:
              'Crisp → Settings → Website Settings → Setup instructions → the CRISP_WEBSITE_ID value (a UUID). Leave empty to hide the chat bubble.',
          },
        },
        {
          name: 'contactIntro',
          type: 'textarea',
          defaultValue:
            'Questions about Primary Source Verification, DHP licensing or your documents? Send them here and we reply by email. For a quick question, use the chat bubble at the bottom right.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Analytics & social',
      fields: [
        { name: 'ga4Id', type: 'text', admin: { description: 'G-XXXXXXXXXX (leave empty to disable)' } },
        {
          name: 'social',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
