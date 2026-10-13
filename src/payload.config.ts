import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Authors } from './collections/Authors'
import { Circulars } from './collections/Circulars'
import { ContactMessages } from './collections/ContactMessages'
import { Countries } from './collections/Countries'
import { Fees } from './collections/Fees'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Professions } from './collections/Professions'
import { Subscribers } from './collections/Subscribers'
import { Users } from './collections/Users'
import { Vendors } from './collections/Vendors'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// Outgoing email (contact form). Only configured when SMTP_HOST is set; otherwise Payload logs emails to the console
// and contact messages are still saved in the admin under Audience → Contact messages.
const smtpPort = Number(process.env.SMTP_PORT || 587)
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: process.env.SMTP_FROM || process.env.SMTP_USER || '',
      defaultFromName: process.env.SMTP_FROM_NAME || 'Primary Source Verification Guide',
      skipVerify: true,
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      },
    })
  : undefined

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' · PSV Guide admin',
    },
  },
  collections: [Pages, Authors, Vendors, Fees, Circulars, Professions, Countries, Subscribers, ContactMessages, Media, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
    // Set DB_TRANSACTIONS=false when running against a MongoDB-compatible server without replica-set
    // transactions (e.g. a standalone test instance). Leave unset in production.
    transactionOptions: process.env.DB_TRANSACTIONS === 'false' ? false : undefined,
  }),
  email,
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => (doc?.title ? `${doc.title}` : ''),
      generateDescription: ({ doc }) => (doc?.summary ? String(doc.summary).slice(0, 155) : ''),
      generateURL: ({ doc }) => `${serverURL}${doc?.path || ''}`,
    }),
  ],
})
