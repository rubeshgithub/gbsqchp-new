# gbsqchp.com — Primary Source Verification Guide

Published by MRP Business Consulting. Independent information portal for internationally trained healthcare professionals applying to Qatar's
Department of Healthcare Professions (DHP), expanding to the rest of the GCC. Built with **Next.js 16 (App Router)**
and **Payload CMS 3** on **MongoDB**.

- Market assessment and 6-month plan: see the project docs (`GBSQCHP-market-assessment-and-6-month-plan.md`).
- The 25 Phase-1 page briefs: `GBSQCHP-phase1-content-plan-and-briefs.md`.
- Working notes for the coding assistant: [`CLAUDE.md`](./CLAUDE.md).

## Quick start (Windows, macOS or Linux)

Requirements: Node.js ≥ 20.18 (22 recommended), npm ≥ 10, a MongoDB you can reach (local install, Docker, or the
server's instance).

```bash
npm install                 # installs dependencies (first run takes a minute)
cp .env.example .env        # then edit DATABASE_URL, PAYLOAD_SECRET, NEXT_PUBLIC_SERVER_URL
npm run seed                # idempotent: countries, professions, circulars, vendors, fees, author, settings, 2 pages
npm run dev                 # http://localhost:3000  — admin at http://localhost:3000/admin
```

On first visit to `/admin` Payload asks you to create the first admin user. Alternatively set
`SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` in `.env` before running `npm run seed`.

A quick local MongoDB with Docker: `docker compose up -d` (see `docker-compose.yml`, service `mongo`).

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Next.js dev server with Payload admin |
| `npm run build` / `npm start` | Production build / serve |
| `npm run seed` | Create-or-update reference data and the first pages (safe to re-run) |
| `npm run generate:types` | Regenerate `src/payload-types.ts` after changing collections |
| `npm run generate:importmap` | Regenerate the admin import map after adding custom admin components |
| `npm run typecheck` / `npm run lint` | TypeScript / ESLint |
| `npm run payload` | Payload CLI (`npm run payload -- migrate:status` etc.) |

## How the site is organised

```
src/
  payload.config.ts          collections, globals, plugins (SEO), MongoDB adapter
  collections/               Pages, Authors, Vendors, Fees, Circulars, Professions, Countries, Subscribers, Media, Users
  globals/SiteSettings.ts    site name, disclaimer, newsletter copy, analytics
  app/(frontend)/            public site: layout, home, /qatar, /qatar/circulars, /tools/psv-fee-calculator,
                             [...segments] (renders any published Page by its path), sitemap, robots
  app/(payload)/             Payload admin + REST/GraphQL (generated, do not edit)
  components/                Header/Footer, PageTemplate, VendorTable, FeeCalculator, CircularTable, NewsletterForm…
  lib/                       data access (Payload Local API), SEO/JSON-LD helpers
  seed/                      seed runner, reference data, page content (Markdown → Lexical)
```

### Content model in one paragraph

A **Page** is any public article; its URL is the `path` field (e.g. `/qatar/psv/dataflow`). Pages carry an
answer-first `summary`, a Lexical rich-text body, FAQs (rendered + FAQPage schema), a *verified on* date with the
official sources it was checked against, a change log and an author. Fees, providers and circulars are **never typed
into prose**: they live in the **Fees**, **Vendors** and **Circulars** collections and the page toggles
(`showVendorTable`, `showCalculator`, `showCirculars`) render them live, so a price change is one edit.

### Legacy URLs

The domain hosted a former DHP-approved PSV portal (2018–2024). `/Home/*`, `/AppPDFFiles/*`, `/Account/*`,
`/Applicant/*` and `/Employer/*` are 301-redirected to `/gbs-psv-portal` in `next.config.ts`.

## Contact form and chat

- `/contact` saves every message in the admin (Audience → Contact messages). To also email it, set `SMTP_HOST`,
  `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` and `CONTACT_TO_EMAIL` in `.env` (see `.env.example`).
- Crisp chat: paste the Crisp website ID into Admin → Site settings → Chat & enquiries. Empty = no chat bubble.

## Deployment notes

- **Production server (OVH):** see [`deploy/README.md`](deploy/README.md) — one script installs the site as a
  systemd service behind nginx, `deploy/update.sh` deploys new commits, `deploy/enable-https.sh` adds Let's Encrypt.
- Set `NEXT_PUBLIC_SERVER_URL=https://gbsqchp.com` and a strong `PAYLOAD_SECRET` in production.
- Frontend routes are server-rendered per request (`dynamic = 'force-dynamic'` in the frontend layout). Once the
  production MongoDB is reachable during `next build`, switch to ISR (`export const revalidate = 600`) for speed.
- `DB_TRANSACTIONS=false` disables MongoDB transactions; only needed against a standalone/test server.
- Uploads are stored on disk in `/media` by default; switch to an S3-compatible adapter before scaling.

## Editorial rules (enforced by the templates)

Every page shows the independence disclaimer, a verified-on stamp, and links only to official sources. The site never
takes PSV applications or payments. See `CLAUDE.md` for the writing rules and the content plan.
