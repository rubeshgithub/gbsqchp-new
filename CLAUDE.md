# CLAUDE.md — working notes for gbsqchp.com

## What this is

Independent information portal for healthcare professionals getting licensed in the GCC, Qatar first.
Positioning: *the neutral, always-current pre-submission guide — read this before you pay a verifier.*
It is **not** a PSV provider and must never look like one: no application forms, no payments, no regulator logos,
the independence disclaimer on every page.

Stack: Next.js 16 (App Router, Turbopack) + Payload CMS 3.90 + MongoDB (mongoose adapter) + `@payloadcms/plugin-seo`.
Payload skill for this repo: `.claude/skills/payload/SKILL.md` (read it before touching collections, hooks or access).

## Commands

- `npm run dev` — dev server (needs `DATABASE_URL` in `.env`); admin at `/admin`
- `npm run seed` — idempotent reference data + first pages (`src/seed/`)
- `npm run generate:types` — after any collection/global change (commit `src/payload-types.ts`)
- `npm run typecheck && npm run lint && npm run build` — must pass before a commit
- `DB_TRANSACTIONS=false` — only for a standalone test MongoDB (no replica set)

## Architecture rules

1. **Structured data over prose.** Fees → `fees`; providers → `vendors`; rule changes → `circulars`; profession
   categories → `professions`. Pages reference them through the toggles `showVendorTable`, `showCalculator`,
   `showCirculars`. Never hard-code a fee, a date or a circular number in a component or in page prose when a
   record exists for it.
2. **Pages are routed by `path`.** `src/app/(frontend)/[...segments]/page.tsx` resolves any published page.
   Dedicated routes exist only for `/`, `/qatar`, `/qatar/circulars`, `/tools/psv-fee-calculator`. A static route
   always wins over a CMS page at the same path.
3. **Public reads only see published docs** (`publishedOrAuthenticated` in `src/access`). Local-API calls in
   `src/lib/data.ts` filter `_status: published` explicitly because the Local API bypasses access control.
4. **Frontend is `force-dynamic`** (no DB access at build time). Switch to ISR only when the production DB is
   reachable during `next build`.
5. **Every page component gets its data through `src/lib/data.ts`**; add a helper there rather than calling
   `getPayload` inside components.
6. **Legacy GBS URLs** redirect in `next.config.ts` → `/gbs-psv-portal`. Keep that page published forever.
7. Newsletter sign-ups go through the custom endpoint `POST /api/subscribers/subscribe` (validation + honeypot);
   direct creates on `subscribers` are admin-only.

## Writing rules (applies to seed content and CMS content)

- Answer-first `summary`: the direct answer in the first two sentences.
- H2s phrased as the questions people search; at least three per page. FAQs: 3–5 real questions.
- Every fee, date and rule names its source; anything taken from a consultancy blog rather than an official PDF is
  marked "reported" until verified, and `verifiedOn` is only advanced after checking the official source.
- Plain, procedural, second person, short sentences. No hype, no guarantees, no "fast-track" promises, no
  "in today's fast-paced world", "delve", "game-changer".
- Never target the bare keyword "dataflow" (polluted by Google Cloud Dataflow) — always "DataFlow verification /
  DataFlow PSV / DataFlow report".
- Vendors are compared factually from their own price lists; no opinions about their service quality.

## Content plan

The 25 Phase-1 page briefs (slug, title tag, meta, outline, facts with sources, FAQs, internal links) are in the
project doc `GBSQCHP-phase1-content-plan-and-briefs.md`. Published so far: `/qatar/psv` (pillar) and
`/gbs-psv-portal` (legacy). Next in order: `/qatar/psv/dataflow`, `/qatar/psv/quadrabay`, `/qatar/psv/avs`,
`/qatar/psv/fees`, `/qatar/psv/documents`, `/qatar/psv/timeline`, `/qatar/psv/status`, `/qatar/psv/report-transfer`,
then the problem pages under `/qatar/psv/problems/…`, the circular explainers under `/qatar/circulars/…`, and the
licensing hub `/qatar/licensing`. Add nav/footer links (`src/components/Header.tsx`, `Footer.tsx`) only when the
target page is published.

To add a page from a brief: write the Markdown in `src/seed/content/<slug>.ts` following `psv-pillar.ts`, register
it in `src/seed/index.ts`, run `npm run seed`, then review in `/admin`. Editors can also create pages directly in
the admin panel.

## Known gaps / to verify

- AVS fees and the exact date/content of Circular DHP/2026/36, DHP/2025/24 thresholds, DHP/2025/19 exemption list,
  DHP/2024/22 and DHP/2024/10 details: open the official PDFs and set `verified: true` on the circular records.
- DataFlow prices are from the Sept 2024 DHP price list; re-check quarterly.
- No email adapter configured (Payload warns at start); add one before enabling password resets or newsletters.
- Media uploads are local-disk; move to S3-compatible storage before production scale.
