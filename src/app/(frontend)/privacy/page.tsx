import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { isCrispEnabled } from '@/components/CrispChat'
import { JsonLd } from '@/components/JsonLd'
import { getSiteSettings } from '@/lib/data'
import { breadcrumbJsonLd } from '@/lib/seo'

/**
 * Privacy notice. Describes what the site actually does: the Crisp and Google Analytics sections only appear when
 * those services are switched on in Site settings, so the notice and the site cannot drift apart.
 * Change LAST_UPDATED whenever the wording changes.
 */
const LAST_UPDATED = '2026-10-16'

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'What personal information the Primary Source Verification Guide collects through its contact form and alert sign-up, why, who processes it, how long it is kept and how to have it deleted.',
  alternates: { canonical: '/privacy' },
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default async function PrivacyPage() {
  const settings = await getSiteSettings()
  const publisher = settings.publisherName || 'MRP Business Consulting'
  const siteName = settings.siteName || 'Primary Source Verification Guide'
  const crisp = isCrispEnabled(settings.crispWebsiteId)
  const analytics = Boolean(settings.ga4Id?.trim())

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Privacy notice', path: '/privacy' },
  ]

  const processors: [string, string][] = [
    ['Cloudflare', 'Delivers the site to your browser and protects it from attacks; it sees your IP address and the pages you request.'],
    ['OVHcloud', 'Hosts the web server that runs this site.'],
    ['MongoDB Atlas (MongoDB, Inc.)', 'Hosts the database where contact messages and alert sign-ups are stored.'],
    ['Amazon Web Services (Amazon SES)', 'Delivers the email that forwards your contact message to our inbox, and our replies.'],
    ['Microsoft 365', 'Our email inbox, where we read and answer your message.'],
  ]
  if (crisp) processors.push(['Crisp', 'Runs the live chat window and stores chat conversations.'])
  if (analytics) processors.push(['Google (Google Analytics)', 'Measures how many people visit which pages.'])

  return (
    <div className="page container">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>Privacy notice</h1>
      <p className="lead">
        {siteName} is an information website. We collect very little about you, and only what you choose to send us.
      </p>
      <p>
        <em>Last updated {formatDate(LAST_UPDATED)}.</em>
      </p>

      <div className="prose">
        <h2>In short</h2>
        <ul>
          <li>You can read every page without giving us any personal information.</li>
          <li>
            If you use the contact form{crisp ? ', the chat' : ''} or sign up for circular alerts, we keep what you send so we can
            answer you or send the alerts – nothing else.
          </li>
          <li>We do not sell your information, and we do not share it with the DHP, the Ministry of Public Health or any PSV provider.</li>
          <li>You can ask us at any time to show, correct or delete what we hold about you.</li>
        </ul>

        <h2>Who we are</h2>
        <p>
          This website, gbsqchp.com, is published by {publisher} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). We decide how the
          information described here is used. We are an independent information service: we are not the Department of Healthcare
          Professions, the Ministry of Public Health, or DataFlow, QuadraBay, AVS or any other verification provider.
        </p>

        <h2>What we collect and why</h2>

        <h3>When you send a message through the contact form</h3>
        <p>
          We collect your name, email address, and – if you choose to give them – your phone or WhatsApp number, the country you
          trained in, the topic you pick and your message. We also record which page of the site you came from. We use this only
          to understand your question and reply to you. The message is saved in our database and forwarded to our email inbox.
        </p>
        <p className="callout">
          Please do not send passport copies, certificates, medical information or other documents through the form or chat. We
          do not need them to answer your question, and we cannot process a verification for you.
        </p>

        <h3>When you sign up for DHP circular alerts</h3>
        <p>
          We collect your email address, the profession you select and the page you signed up from. We use them only to email
          you when a DHP rule, fee or timeline we track changes, and to understand which professions the alerts are useful for.
          You sign up by choice and can leave at any time.
        </p>

        {crisp && (
          <>
            <h3>When you use the live chat</h3>
            <p>
              The chat window is provided by Crisp. Whatever you type, and any name or email you give in the chat, is stored by
              Crisp so that we can read and answer it. Crisp also records technical details such as your browser and approximate
              location (from your IP address) to run the chat.
            </p>
          </>
        )}

        {analytics && (
          <>
            <h3>Visitor statistics</h3>
            <p>
              We use Google Analytics to count visits and see which pages are read, so we know which guides to improve. Your IP
              address is shortened before it is stored, and we do not use the data to identify you or to show you advertising.
            </p>
          </>
        )}

        <h3>Technical information when you visit</h3>
        <p>
          Like every website, our server and Cloudflare, which delivers the site, record basic technical information about each request – IP address, browser type, the
          page asked for and the time – to keep the site running and secure. To stop the contact form being abused we briefly
          keep a count of messages per IP address; that count is held in memory for ten minutes and never stored.
        </p>

        <h2>Cookies</h2>
        <p>
          The site itself sets no cookies for visitors.{' '}
          {crisp && analytics
            ? 'The live chat (Crisp) and visitor statistics (Google Analytics) use cookies and similar browser storage to work; you can block or delete them in your browser settings, and the guides will still work.'
            : crisp
              ? 'The live chat (Crisp) uses cookies and similar browser storage to keep your conversation open between pages; if you block them the chat may not work, but the guides will.'
              : analytics
                ? 'Visitor statistics (Google Analytics) use cookies; you can block or delete them in your browser settings and the guides will still work.'
                : 'We do not use advertising or tracking cookies.'}{' '}
          A login cookie is used only by our own staff when they sign in to edit the site.
        </p>

        <h2>Who processes your information for us</h2>
        <p>We use these service providers to run the site. They handle your information only on our behalf:</p>
        <table>
          <thead>
            <tr>
              <th scope="col">Provider</th>
              <th scope="col">What it does for us</th>
            </tr>
          </thead>
          <tbody>
            {processors.map(([name, role]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          We do not sell, rent or trade personal information. The site does not show advertising; if that ever changes, this
          notice will be updated first. We would disclose information to a public authority only where the law requires us to.
        </p>

        <h2>Where your information is stored</h2>
        <p>
          We work online only, and our service providers operate data centres in several countries, so your information may be
          stored or processed outside the country you live in. We choose established providers that protect the data they hold for
          us.
        </p>

        <h2>How long we keep it</h2>
        <ul>
          <li>
            <strong>Contact messages{crisp ? ' and chat conversations' : ''}:</strong> as long as we need to answer you and deal with
            any follow-up, and no longer than 24 months after our last reply.
          </li>
          <li>
            <strong>Alert sign-ups:</strong> until you ask to be removed. Every alert email will include a way to unsubscribe.
          </li>
          <li>
            <strong>Server logs:</strong> a short period, normally about two weeks, after which they are deleted automatically.
          </li>
        </ul>

        <h2>How we protect it</h2>
        <p>
          The whole site runs over an encrypted (HTTPS) connection. Contact messages and sign-ups can be read only by signed-in
          staff accounts, access to the database is restricted and password-protected, and staff passwords are stored in hashed
          form.
        </p>

        <h2>Your choices and rights</h2>
        <p>Wherever you live, you can ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you and give you a copy;</li>
          <li>correct anything that is wrong;</li>
          <li>delete your information, or remove you from the circular alerts;</li>
          <li>stop using your information for a purpose you previously agreed to.</li>
        </ul>
        <p>
          Send your request through the <Link href="/contact">contact page</Link> using the same email address you gave us, so we
          can confirm it is you. We reply within 30 days. If you are not satisfied with our answer, you can complain to the data
          protection authority in your country.
        </p>

        <h2>Children</h2>
        <p>
          This site is written for healthcare professionals and employers. It is not aimed at children, and we do not knowingly
          collect information from anyone under 18.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          When we change how we handle personal information we update this page and the date at the top. If a change is
          significant we will say so on this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this notice or about your information: use the <Link href="/contact">contact page</Link>
          {crisp ? ' or the chat window' : ''}.
        </p>
      </div>
    </div>
  )
}
