import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Authors } from './collections/Authors'
import { Circulars } from './collections/Circulars'
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

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' · gbsqchp.com admin',
    },
  },
  collections: [Pages, Authors, Vendors, Fees, Circulars, Professions, Countries, Subscribers, Media, Users],
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
