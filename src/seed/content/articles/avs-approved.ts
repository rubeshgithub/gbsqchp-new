/**
 * Article (dated update): AVS approved as Qatar's third PSV provider.
 * Facts from Circular DHP/2026/36 (read in full 11 Oct 2026), DHP's PSV page and the AVS fee schedule, as recorded in
 * src/seed/content/avs.ts and src/seed/data.ts.
 */

export const avsApprovedArticle = {
  title: 'AVS becomes Qatar’s third approved PSV provider (Circular DHP/2026/36)',
  path: '/articles/avs-third-psv-provider-qatar',
  section: 'articles' as const,
  publishedAt: '2026-10-17T05:00:00.000Z',
  summary:
    'On 3 September 2026 Qatar’s Department of Healthcare Professions approved Approved Verification Services (AVS) as its third Primary Source Verification provider, alongside DataFlow and QuadraBay. AVS is the only one of the three based in Qatar, and its published fees are the lowest for physicians and dentists (QAR 1,050) and match QuadraBay for nurses, pharmacists and allied health (QAR 900). Here is what the circular says and what it means if you are about to apply.',
  meta: {
    title: 'AVS Approved as Qatar’s Third PSV Provider (DHP/2026/36)',
    description:
      'Circular DHP/2026/36 approved Approved Verification Services (AVS) for Qatar DHP verification on 3 Sep 2026. What it means, fees, and what is still unknown.',
  },
  verifiedOn: '2026-10-17',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2026/36 – approval of Approved Verification Services (AVS)',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2036%202026%20E.pdf',
      circularNumber: 'DHP/2026/36',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
    {
      label: 'AVS – DHP Reference Program Guide (fee schedule)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
  ],
  changeLog: [{ date: '2026-10-17', note: 'Published.' }],
  faqs: [
    {
      question: 'Do I have to switch to AVS?',
      answer:
        'No. The circular says practitioners may submit verification requests through AVS “as well as through the other verification companies approved by the Department”. DataFlow and QuadraBay remain approved, and nothing in DHP’s circulars treats one provider’s report differently from another’s.',
    },
    {
      question: 'Can I move a DataFlow or QuadraBay case to AVS?',
      answer:
        'AVS lists a QAR 250 fee for transferring a report from another vendor, but no DHP circular says DHP accepts a report moved between providers. Ask DHP before paying for a transfer, and do not abandon a case that is already in progress at another provider.',
    },
  ],
  markdown: `
## What does Circular DHP/2026/36 say?

Issued on 3 September 2026 under the title "Approval of a Third Provider of Primary Source Verification (PSV) Services: Approved Verification Services (AVS)", the circular announces "a partnership agreement signed with Approved Verification Services (AVS)", under which AVS "becomes the third approved provider of primary source verification services". Practitioners "may submit verification requests through Approved Verification Services from the date of issuance of this Circular, as well as through the other verification companies approved by the Department".

DHP's Primary Source Verification page now lists all three providers. For AVS it gives an office at Abdul Jaleel Business Center on Airport Street in Doha, open Sunday to Thursday from 8 am to 4 pm, the helpdesk address dhp.helpdesk@avsqatar.com and the phone number +974 4464 4490.

## What does it mean for applicants?

- **A cheaper option for physicians and dentists.** AVS's schedule lists QAR 1,050, against QAR 1,100 at QuadraBay and QAR 1,210 at DataFlow.
- **More covered for nurses, pharmacists and allied health.** At QAR 900, AVS verifies up to two qualifications and five years of employment. DataFlow's and QuadraBay's nurse and pharmacist package covers one qualification and three years; their allied health package already covers five years, so for allied health the difference is the second qualification.
- **A local office.** AVS is the only provider based in Qatar, the first since Gulf Bridge Services' contract ended in February 2024.

## What is still unknown?

AVS is new to the programme, and its published terms are thin. Its Express service (QAR 400) has no published turnaround; the portal's "20 days turnaround" label does not say whether it means working days; and there is no published refund policy, appeal process or statement of how long a report stays valid. Its network of contacts at universities and employers abroad is also newer than DataFlow's (in the programme since 2009) or QuadraBay's (verifying for Bahrain since 2021, and for Kuwait).

The [AVS guide](/qatar/psv/avs) covers the full fee schedule and the application steps, and the [PSV fees guide](/qatar/psv/fees) compares every price with DataFlow's and QuadraBay's.
`,
}
