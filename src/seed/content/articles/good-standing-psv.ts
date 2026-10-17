/**
 * Article (dated update): good-standing certificates reach DHP only through PSV.
 * Facts from Circular DHP/2025/08 (14 Jul 2025, scanned PDF read by OCR on 16 Oct 2026), DHP's Guidelines for
 * Physicians, Nurses and AHP, the QCHP good-standing policy v2.0 and the providers' fee records (src/seed/data.ts).
 */

export const goodStandingArticle = {
  title: 'Qatar DHP accepts good-standing certificates only through PSV: what changed and what to do',
  path: '/articles/qatar-good-standing-certificates-through-psv',
  section: 'articles' as const,
  publishedAt: '2026-10-17T06:00:00.000Z',
  summary:
    'Since 1 August 2025, Qatar’s Department of Healthcare Professions no longer accepts a certificate of good standing that your regulator emails or posts to it. Under Circular DHP/2025/08 the certificate must reach DHP as a Primary Source Verification report from one of the approved providers. DHP’s nurse and allied health guidelines still describe the old route, so the change is easy to miss. Here is what the circular says, who it affects and what to do if a licence application is coming up.',
  meta: {
    title: 'Qatar DHP: Good Standing Certificates Now Only via PSV',
    description:
      'Circular DHP/2025/08: from 1 Aug 2025 DHP accepts certificates of good standing only as a PSV report, not by email or post. What changed and what to do.',
  },
  verifiedOn: '2026-10-17',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2025/08 – updated procedure for submitting certificates of good standing',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'QCHP – Policy for Issuing Certificates of Good Standing (v2.0)',
      url: 'https://dhp.moph.gov.qa/en/DocumentsAR/Policy%20for%20Issuing%20Certificates%20of%20Good%20Standing.pdf',
    },
  ],
  changeLog: [{ date: '2026-10-17', note: 'Published.' }],
  faqs: [
    {
      question: 'My regulator already emailed my certificate to DHP. Is that enough?',
      answer:
        'Not if it was sent on or after 1 August 2025: the circular says certificates sent by email or post after that date “will no longer be accepted”. A certificate sent earlier is also unlikely to help now, because DHP’s good-standing rule asks for one no more than six months old when you apply for the licence. Order a fresh certificate and have it verified.',
    },
    {
      question: 'Which provider should verify my certificate of good standing?',
      answer:
        'Any of DHP’s three approved providers. DataFlow and QuadraBay verify two to three certificates for QAR 550 (Package I) and AVS for QAR 500; for a single certificate, add it to your application as an extra document. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
    {
      question: 'Does this apply to licence renewals?',
      answer:
        'The renewal requirements in DHP’s guidelines do not include a certificate of good standing. The circular applies whenever DHP does ask for one – most often at the licensing stage of a new registration.',
    },
  ],
  markdown: `
## What did Circular DHP/2025/08 change?

The circular, dated 14 July 2025 and addressed to all healthcare professionals and facilities in Qatar, ends the old route in one paragraph: DHP decided "to discontinue the acceptance of certificates of good standing submitted via the department's official good standing email and PO Box, effective 01 August 2025". It replaces that route with PSV: "all healthcare practitioners are required to submit a primary source verification report for the good standing certificate as the approved alternative". And it closes the door on late arrivals: "any certificates of good standing sent via email or postal mail after the stated date will no longer be accepted."

In practice, your regulator now sends the certificate to the verification provider, not to DHP, and DHP sees it as part of a verified report.

## Why is the change easy to miss?

Because DHP's own guidelines have not caught up. The Guidelines for Nurses still say that at licensing the original certificate "must be sent directly from the registration authority", and the allied health guidelines say much the same. The physician guidelines already describe the new route: the certificate is verified by the PSV company and the final report uploaded. Where a guideline and a later circular disagree, follow the circular – it is the newer rule and says so expressly.

## What should you do if you are applying now?

1. **Plan the certificate for the licensing stage.** DHP's guidelines ask for it at licensing in most cases, and the QCHP good-standing policy requires it to be "not more than 6 months old" when you apply for the licence. Order it while your evaluation is in progress.
2. **Ask every regulator that covers your recent experience.** If you were licensed in more than one country during the years DHP counts, you may need a certificate from each.
3. **Have it verified by one of the approved providers.** Each sells a good-standing package and a single-certificate add-on; the [PSV fees guide](/qatar/psv/fees) compares the prices.
4. **Give your regulator the provider's details, not DHP's.** A certificate emailed to DHP's old good-standing address after 1 August 2025 will not be accepted.

## What has not changed?

DHP still issues its own certificates of good standing to practitioners licensed in Qatar who move abroad, sent to the receiving regulator's official email. The six-month age limit is unchanged. And the evaluation stage still needs the main PSV report – qualifications, licence and employment – before DHP will look at your file.

For everything a good-standing certificate and the rest of your file must show, see the [documents guide](/qatar/psv/documents); for how this fits into the overall timeline, see [how long PSV takes](/qatar/psv/timeline).
`,
}
