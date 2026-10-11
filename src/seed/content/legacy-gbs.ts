/**
 * Seed content: legacy page for traffic arriving from old Gulf Bridge Services PSV portal links.
 */

export const legacyGbs = {
  title: 'Looking for the GBS QCHP PSV portal? The service ended in February 2024 – here is what to do now',
  path: '/gbs-psv-portal',
  section: 'legacy' as const,
  summary:
    "Gulf Bridge Services (GBS) operated gbsqchp.com as the Qatar Council for Healthcare Practitioners' second approved Primary Source Verification channel from July 2018 until the Department of Healthcare Professions ended the contract on 7 February 2024 (Circular DHP/2024/09). GBS no longer accepts or processes PSV applications. If you need verification for a DHP licence today, apply through DataFlow, QuadraBay or AVS – the three providers DHP currently approves.",
  meta: {
    title: 'GBS QCHP PSV Portal: Service Ended – What to Do Now',
    description:
      "Gulf Bridge Services' DHP primary source verification contract ended on 7 Feb 2024 (Circular DHP/2024/09). Where to apply for PSV in Qatar now.",
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-09',
  verifiedAgainst: [
    {
      label: 'Circular 15/2018 – QCHP contract with Gulf Bridge Services',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(15-2018)%20-%20Eng.pdf',
      circularNumber: '15/2018',
    },
    {
      label: 'Circular DHP/2024/09 – end of the GBS contract',
      url: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
      circularNumber: 'DHP/2024/09',
    },
    {
      label: 'DHP – Primary Source Verification page (current providers)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [{ date: '2026-10-09', note: 'First published.' }],
  faqs: [
    {
      question: 'Is my old GBS PSV report still valid?',
      answer:
        'A report that DHP already accepted into a completed evaluation stands; your licence is unaffected. For a new application, re-registration or upgrade you need a current report from an approved provider, and DHP has not published any guidance that treats historical GBS reports differently. Ask the DHP registration section before paying for a new verification.',
    },
    {
      question: 'Who do I contact about an unfinished GBS case?',
      answer:
        'The DHP Registration and Licensing section, through the contact details on dhp.moph.gov.qa. This website has no access to GBS case records and cannot trace an application or a payment.',
    },
    {
      question: 'Is this website Gulf Bridge Services?',
      answer:
        'No. This is an independent information service published by Instead Global, which now holds the gbsqchp.com domain. It is not a PSV provider, it does not take applications or payments, and it has no connection with the Ministry of Public Health or the DHP.',
    },
  ],
  markdown: `
## What happened to the GBS QCHP PSV portal?

- **July 2018** – the Qatar Council for Healthcare Practitioners (QCHP, since renamed the Department of Healthcare Professions) signed a contract with Gulf Bridge Services to run primary source verification alongside DataFlow. The announcement was Circular 15/2018 and was reported by Gulf Times, The Peninsula and Qatar Tribune on 21 July 2018.
- **2018 to 2024** – applicants and employers submitted PSV applications through gbsqchp.com. The applicant and employer user manuals for that portal are still hosted on dhp.moph.gov.qa, which is why older guides and search results still point here.
- **7 February 2024** – DHP announced the end of the contractual agreement with GBS in Circular DHP/2024/09. The portal's login, status-check and document pages were taken down; any old link to them now lands on this page.

## I have an old GBS application or report – what now?

- If your DHP evaluation was completed before February 2024, nothing changes for your current licence. Renewals follow today's rules, and DHP requires verification for every applicant, so expect fresh verification of any employment or good-standing certificate issued since your original report.
- If you paid GBS and never received a report, contact the DHP Registration and Licensing section. This website has no access to GBS case records.
- Do not send documents or money to anyone who claims to process "GBS PSV" today. No such service exists.

## Where do you apply for PSV now?

DHP currently approves three providers:

- **DataFlow Group** – DHP's partner since 2009, at [dhp.dataflowgroup.com](https://dhp.dataflowgroup.com/en/onboarding/signin); [our DataFlow guide](/qatar/psv/dataflow).
- **QuadraBay** – approved 2 December 2025 (Circular DHP/2025/20), at [dhp.quadrabay.com](https://dhp.quadrabay.com/); [our QuadraBay guide](/qatar/psv/quadrabay).
- **Approved Verification Services (AVS)** – approved on 3 September 2026 (Circular DHP/2026/36), at [avsqatar.com](https://www.avsqatar.com/avs/apply); [our AVS guide](/qatar/psv/avs).

Start with the [Primary Source Verification guide for Qatar](/qatar/psv), which compares the three on fees, documents and timelines, and use the [fee and timeline calculator](/tools/psv-fee-calculator) to see what your profession's package costs with each.

## About this website

The domain kept its name because thousands of applicants, employers and official documents still refer to it. The site itself is an independent information service: it explains the rules, quotes fees and dates from official sources with the date they were last checked, and links you to the provider and the regulator. It does not verify documents, take applications or accept payments.
`,
}
