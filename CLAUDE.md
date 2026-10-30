# CLAUDE.md — working notes for gbsqchp.com

## What this is

**Primary Source Verification Guide** (domain gbsqchp.com), published by **MRP Corporate Services**.
Independent information portal for healthcare professionals getting licensed in the GCC, Qatar first.
Branding rules: the site never names Instead Global, 2682736 Alberta Inc. or gulfbridgeservices.com, and never
presents itself as connected to Gulf Bridge Services. GBS appears only as a historical fact (a former DHP-approved
provider, 2018–2024) on the legacy page, the circular tracker, the PSV history paragraph and the homepage's one-line
"looking for the old GBS portal?" pointer to the legacy page. The business is
100% online: no address, phone or office anywhere. The author byline is **Alex Morgan · MRP Corporate Services**, with no
LinkedIn or photo; RK's own name and LinkedIn never appear on the site, in schema or in the public API. Enquiries come through the Crisp chat bubble (Site settings →
Chat & enquiries → Crisp website ID) and the /contact form.
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
   categories → `professions`. Pages reference them through the toggles `showVendorTable`, `showFeeComparison`
   (master fee table: every package × provider, fast-tier totals, US$ at the fixed 3.64 peg, add-ons),
   `showCalculator`, `showCirculars` and the `featuredVendor` relationship (renders that provider's full fee schedule + contact card
   via `VendorPackages`; the comparison table then moves below the body). Never hard-code a fee, a date or a
   circular number in a component or in page prose when a record exists for it.
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
8. Contact form: `POST /api/contact-messages/submit` (validation, honeypot, 5 per IP per 10 min). Every message is
   saved in `contact-messages` and, when `SMTP_*` env vars are set, emailed to `CONTACT_TO_EMAIL` with Reply-To set
   to the sender. Never render the recipient address on the site.
9. Privacy notice (`src/app/(frontend)/privacy/page.tsx`) must describe every way the site handles personal data.
   The Crisp and Google Analytics sections render only when those are enabled in Site settings. Any new data flow
   (ads, sending the alert emails, a new form field, a new processor) means updating that page and `LAST_UPDATED`
   in the same change. It promises: contact messages deleted within 24 months of the last reply, an unsubscribe
   link in every alert email, replies to privacy requests within 30 days.
10. Deploys: `.github/workflows/ci-deploy.yml` type-checks and lints every push/PR and, on `main`, deploys the commit
   over SSH (`gbsqchp-ci` user, forced command `deploy <sha> [--seed]`) to `/usr/local/sbin/gbsqchp-deploy`
   (root-owned copy of `deploy/release.sh` – changes to that file reach the server only when RK re-runs
   `deploy/setup-ci.sh`). Releases build beside the live one and roll back automatically if the health check fails.
   CI must stay green: `npx tsc --noEmit` and `npm run lint` with zero errors before pushing.

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
project doc `GBSQCHP-phase1-content-plan-and-briefs.md`. Published so far: `/qatar/psv` (pillar), `/gbs-psv-portal`
(legacy), `/qatar/psv/dataflow`, `/qatar/psv/quadrabay`, `/qatar/psv/avs` (provider guides), `/qatar/psv/fees`, `/qatar/psv/documents`,
`/qatar/psv/timeline`, `/qatar/psv/problems/name-mismatch`, `/qatar/psv/status`, `/qatar/exam/prometric`, `/qatar/licensing` (hub,
in the header), country guides `/qatar/psv/countries/{india,philippines,pakistan,nepal}`, `/qatar/psv/report-transfer`,
`/qatar/psv/problems/{unable-to-verify,discrepancy,university-not-responding,experience-letter-format,good-standing-certificate}`.
Next in order: the other problem pages under `/qatar/psv/problems/…`, the circular explainers under `/qatar/circulars/…`, and more
country guides. Add nav/footer links (`src/components/Header.tsx`, `Footer.tsx`) only when the
target page is published. Link each new page from the guides that mention its topic when it is published (no dead links).

**Articles (`/articles`)** are dated updates – a new circular, provider or fee change – stored as Pages with
`section: 'articles'`, a `publishedAt` date and a path under `/articles/…`. The `/articles` index lists them newest
first; articles get `NewsArticle` JSON-LD and a "Published" date line. Each article links to the evergreen guide it
affects; the guides stay current and carry the change log. Seed files live in `src/seed/content/articles/`.
Breadcrumbs skip intermediate segments with no page (e.g. `/qatar/psv/problems`) – see `getExistingPaths`.

To add a page from a brief: write the Markdown in `src/seed/content/<slug>.ts` following `psv-pillar.ts`, register
it in `src/seed/index.ts`, run `npm run seed`, then review in `/admin`. Markdown tables work (the editor has
`EXPERIMENTAL_TableFeature`; the seed converts with the Pages `content` field's own editor config). On production,
new or changed seed content goes live only after a deploy with the seed (GitHub → Actions → CI / Deploy → Run
workflow → tick "seed"). Editors can also create pages directly in
the admin panel.

## Search Console data

`.github/workflows/gsc-export.yml` (dispatch only, input `days`; run by the weekly SEO review – see the project doc `claude/GBSQCHP-seo-weekly-playbook.md`) runs `scripts/gsc-export.py` with a
read-only service account (secret `GSC_SERVICE_ACCOUNT_JSON`, property `sc-domain:gbsqchp.com`): search analytics by
date/query/page/country/device, sitemaps, and URL Inspection for every sitemap URL. The repo is public, so the script
logs counts only and the output is encrypted (AES key wrapped with `.github/gsc-export-public-key.pem`) and
force-pushed to the `gsc-data` branch. To read it: clone that branch, unwrap `key.bin.enc` with the private key
(`openssl pkeyutl -decrypt … -pkeyopt rsa_padding_mode:oaep -pkeyopt rsa_oaep_md:sha256`), then
`openssl enc -d -aes-256-cbc -pbkdf2 -pass file:key.bin`. The private key lives only in Claude's session workspace
(`/home/claude/.gsc/gsc_key.pem`); if it is lost, generate a new pair and commit the new public key – old exports
become unreadable, new ones work. Actions log and artifact downloads are blocked from Claude's workspace, hence the branch.

## Known gaps / to verify

- Read and verified on 11 Oct 2026: DHP/2026/36 (AVS, 3 Sep 2026) and DHP/2025/24. **DHP/2025/24 does not mention
  PSV** – it sets experience/exam rules for Qataris, residents' families and Qatar graduates. The widely reported
  "PSV mandatory for all from 1 Jan 2026" and the break-in-practice thresholds in briefs 16 and 18 are NOT in that
  circular; re-source them (DHP guidelines PDFs or another circular) before writing those pages. PSV is mandatory
  for everyone under DHP's standing PSV page wording – cite that, not a circular.
- Read 16 Oct 2026: DHP Guidelines for Physicians, Nurses and AHP (documents, attestation, translation, good standing
  at licensing); QCHP good-standing policy v2.0 ("not more than 6 months old" at licensing). Pages cite these.
- Read 16 Oct 2026: DHP/2024/10 (exam fee US$244 from 1 Jan 2026; cancel/reschedule US$25 / US$40 / full fee).
- Read 16 Oct 2026: DHP/2025/08 (scanned PDF, OCR): from 1 Aug 2025 good-standing certificates reach DHP only as a
  PSV report – this overrides the "sent directly by the registration authority" wording in the profession guidelines.
- Read 17 Oct 2026: DHP/2024/16 (5 Jun 2024): DHP processing times in working days from a complete application with
  verified documents – evaluation 25 (physicians/dentists) / 15 (others), licensing 15 / 10, temporary licence 5.
- Read 23 Oct 2026 (scanned PDFs, OCR): DHP/2025/19 (26 Nov 2025; exempting exams; exempting exams must be valid and PSV-verified
  from 1 Jan 2026) and the Qualifying Examination Policy v04 (evaluation stage, 3-year validity, 5 attempts per scope,
  rounding rule; degree-based exemptions not repeated in DHP/2025/19 – treat as 'confirm with DHP'). Also read: Policy for
  Temporary Licenses (6 months, non-renewable, after evaluation), CPD Cycle Policy v6.0 (2-year cycle; 80 credits
  physicians/dentists, 40 others; ≥50% yearly and ≥50% Category 1), full text of the Nurses and Physicians guidelines
  (evaluation goes through the employer representative; negative/UTV → interview → re-verify in 14 days or blacklisted).
  The physician guidelines mention "the 2 years license cycle"; no source states a full licence's validity in so many words.
- Read 23 Oct 2026 for the Pakistan guide: PM&DC FAQ (good standing via portal, PKR 7,000) and Registration Regulations
  2023 (regs 25–26: six months, one certificate per named foreign authority; fee schedule says Rs 5,000); PNMC verification
  page (PKR 10,000 foreign); PNMC programme pages (Post RN BSN 2 yrs; MSN Cat I = 10 yrs school + 3-yr diploma).
  Pakistan is NOT in DHP's specialty qualification table → FCPS/MS/MD are Category 3; MCPS is 2 years. pnmc.gov.pk,
  pcsindh.com and beoe.gov.pk are blocked from the shell proxy – use WebFetch/Nimble.
- Still to open: DHP/2024/22 (preliminary evaluation without employer – the guidelines' process map requires the
  employer representative), DHP/2024/09. Set `verified: true` on each record after reading.
- WebFetch now needs user approval for URLs not already in the conversation; for official PDFs use Nimble extract
  (base64 PDF in the saved result → decode → pdftotext, or pdftoppm + tesseract for scans).
- DHP publishes no current evaluation/licence fee schedule; the fees page uses the last published table (QCHP FAQ,
  Nov 2014: evaluation QAR 100; licence QAR 600 nurses/pharmacists/AHP, 1,000 general physicians/dentists, 1,200
  specialists) and says so. Replace with an official source when one appears.
- Official circular numbers use the form DHP/YYYY/NN (the GBS-end circular is DHP/2024/09, not DHP/09/2024; the seed
  renames old records via `RENAMED_CIRCULARS`).
- DataFlow prices are from its DHP price list PDF (URL path says 2024/09, file dated 28 Jul 2025), re-read in full on
  16 Oct 2026; re-check quarterly.
- No email adapter configured (Payload warns at start); add one before enabling password resets or newsletters.
- Media uploads are local-disk; move to S3-compatible storage before production scale.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
