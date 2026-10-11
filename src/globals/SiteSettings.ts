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
        { name: 'siteName', type: 'text', required: true, defaultValue: 'Gulf Bridge Licensing Guide' },
        {
          name: 'tagline',
          type: 'text',
          defaultValue: 'The independent pre-submission guide to GCC healthcare licensing. Qatar first.',
        },
        { name: 'siteUrl', type: 'text', defaultValue: 'https://gbsqchp.com' },
        { name: 'legalName', type: 'text', defaultValue: 'Instead Global (2682736 Alberta Inc.)' },
        { name: 'parentBrand', type: 'text', defaultValue: 'Gulf Bridge Services' },
        { name: 'parentUrl', type: 'text', defaultValue: 'https://gulfbridgeservices.com' },
        { name: 'contactEmail', type: 'email' },
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
