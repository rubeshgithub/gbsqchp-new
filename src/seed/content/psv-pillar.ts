/**
 * Seed content: PSV pillar page for Qatar.
 * Facts verified 9 Oct 2026 against the DHP PSV page, the DHP price list published by DataFlow (Sept 2024),
 * Circular DHP/2025/20 (QuadraBay) and reporting on Circular DHP/2025/24. Items marked "reported" come from
 * consultancy guides and must be confirmed against the official PDF before the verified date is advanced.
 */

export const psvPillar = {
  title: 'Primary Source Verification (PSV) for Qatar DHP: DataFlow, QuadraBay and AVS compared',
  path: '/qatar/psv',
  section: 'psv' as const,
  summary:
    "Before Qatar's Department of Healthcare Professions (DHP) will evaluate you, one of its three approved providers – DataFlow, QuadraBay or AVS – must verify your degree, licence, employment and good-standing certificates at the source. Since 1 January 2026 that applies to every applicant, with no exceptions (Circular DHP/2025/24). This guide explains what gets verified, what each provider charges, how long it really takes and how to choose.",
  meta: {
    title: 'PSV for Qatar DHP 2026: DataFlow vs QuadraBay vs AVS',
    description:
      'How Primary Source Verification works for Qatar’s DHP in 2026: the three approved providers, fees, documents, timelines and which one to choose.',
  },
  showVendorTable: true,
  showCalculator: true,
  verifiedOn: '2026-10-09',
  verifiedAgainst: [
    {
      label: 'DHP – Primary Source Verification page (approved providers)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
    {
      label: 'DataFlow – DHP price list (Sept 2024)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'Circular DHP/2025/24 – PSV mandatory for all applicants',
      circularNumber: 'DHP/2025/24',
    },
  ],
  changeLog: [{ date: '2026-10-09', note: 'First published. Three-provider comparison, fees and timelines as of this date.' }],
  faqs: [
    {
      question: 'Is DataFlow still mandatory for Qatar?',
      answer:
        'No single provider is mandatory. Verification itself is mandatory for every applicant from 1 January 2026 under Circular DHP/2025/24, and DHP accepts reports from any of its three approved providers: DataFlow, QuadraBay and Approved Verification Services (AVS).',
    },
    {
      question: 'Can I use my UAE or Saudi DataFlow report for Qatar?',
      answer:
        'You can transfer it instead of starting again. DataFlow issues a new DHP report for QAR 215 and quotes five days if no additional documents are needed; QuadraBay charges QAR 150 for a transfer. Any employer or good-standing certificate added since the old report is verified fresh.',
    },
    {
      question: 'Do I need PSV if I am exempt from the Prometric exam?',
      answer:
        'Yes. Exam exemptions for USMLE, PLAB, MRCGP, NCLEX-RN and the other qualifications listed in Circular DHP/2025/19 never exempt you from verification. The report must be attached to your evaluation application regardless.',
    },
    {
      question: 'Can my employer apply for PSV on my behalf?',
      answer:
        'Yes. All three providers run corporate or facility accounts with bulk submission, and many Qatari hospitals use them. You still sign the authorization letter, the report is issued in your name, and you can track the case yourself.',
    },
    {
      question: 'How long is a PSV report valid?',
      answer:
        'DHP has not published a fixed validity period for the report itself. What does expire is the good-standing certificate inside it, which must be under six months old when you submit, and DHP can ask for fresh verification of employment added since the report. Check with the DHP registration section for an older report.',
    },
  ],
  markdown: `
## What is Primary Source Verification and why does DHP require it?

Primary Source Verification means the provider writes to the university that issued your degree, the council that licensed you and the employers named in your file, and asks each of them to confirm the document is genuine. DHP's own wording is that PSV "ensures that all healthcare practitioners' credentials are verified as genuine" and lets the department "warn other registration authorities of fraudulent applicants" ([DHP, Primary Source Verification](https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx)).

The order matters. You apply for PSV **first**, then attach the completed report to your online evaluation application on the DHP portal. DHP will not open an evaluation without it, and since 1 January 2026 there are no exempt categories (Circular DHP/2025/24).

## Who are the three approved providers?

- **DataFlow Group** – DHP's verification partner since 2009. Applications go through [dhp.dataflowgroup.com](https://dhp.dataflowgroup.com/en/onboarding/signin); there is a Doha office at Barwa Tower 1 (Office 49, 6th floor), Sunday to Thursday, 8 am to 4 pm, and WhatsApp support on +974 4419 6582.
- **QuadraBay** – approved on 2 December 2025 under Circular DHP/2025/20 as a second provider. Applications go through [dhp.quadrabay.com](https://dhp.quadrabay.com/); support is dhp.support@quadrabay.com. QuadraBay already verifies for Bahrain's NHRA (since December 2021) and for Kuwait's Ministry of Health private sector.
- **Approved Verification Services (AVS)** – approved in 2026 under Circular DHP/2026/36 as a third provider. Applications go through [avsqatar.com](https://www.avsqatar.com/avs/apply); the Doha office is at Abdul Jaleel Business Center, Airport Street, and the helpdesk is dhp.helpdesk@avsqatar.com or +974 4464 4490. AVS has not yet published a public fee list; the table above updates the moment it does.

Gulf Bridge Services (GBS) was the second approved provider from July 2018 until DHP ended the contract on 7 February 2024 (Circular DHP/09/2024). If you arrived here looking for the GBS portal, read [what to do now](/gbs-psv-portal).

## Which provider should you choose?

Nothing in DHP's rules favours one provider: all three reports are accepted for new applications, renewals, upgrades and re-registration. Choose on your own situation:

1. **You already hold a DataFlow or QuadraBay report for another GCC regulator.** Transfer it rather than restart. DataFlow charges QAR 215 and quotes a new DHP report within five days when nothing new is needed; QuadraBay charges QAR 150.
2. **Price matters and the standard target is fine.** Compare the package for your profession in the table above. For nurses and pharmacists (Package E) QuadraBay lists QAR 900 against DataFlow's QAR 990; for physicians and dentists (Package A) it is QAR 1,100 against QAR 1,210.
3. **You need a published fast target.** QuadraBay's Prestige tier targets 14 business days (QAR 1,200 for Package E, QAR 1,400 for Package A); DataFlow's Express service adds QAR 529 for a 14-working-day target.
4. **Your employer has a preference.** Ask HR which provider their corporate account uses. Hospitals that submit in bulk often want every file with the same provider.
5. **Your file is complicated** – a closed university, an institution in Sudan or Syria, a name change, a long break in practice. The provider matters less than your preparation. Fix the file first; the problem guides linked below show how.

## What documents does the provider verify?

Every provider works from the same DHP package structure, so the document set is the same whichever you choose:

- **Passport** and a signed **Letter of Authorization** (the provider's own form) allowing it to contact your institutions.
- **Educational certificates** – two for physicians, dentists and advanced-practice nurses (Packages A and G), one for nurses, pharmacists and allied health (Packages B and E). Degrees issued in India, Pakistan, Egypt and Afghanistan are requested front and back (reported by applicants; confirm on the provider's checklist).
- **Professional licence or registration** from the country where you currently practise.
- **Employment certificates** for the last five years (Packages A, B, G) or three years (Package E), up to three employers, each on letterhead with exact start and end dates, job title, full-time status and a signatory the provider can contact.
- **Certificates of good standing**, less than six months old at submission. Both DataFlow and QuadraBay price them as Package I: two to three certificates for QAR 550.
- **Surgical logbook** for surgical specialties (last two years).

Anything not in English or Arabic needs a certified translation. On the QuadraBay portal every file name must start with a letter, not a number, or the upload is rejected.

## How long does PSV take?

DataFlow's FAQ allows up to three months; applicants and consultancies consistently report 25 to 35 working days when the file is complete and 45 to 60 when a university or former employer is slow to reply. QuadraBay publishes 20 business days for its Standard tier and 14 for Prestige. The faster tiers shorten the provider's own handling, not your university's response time, and every provider stops the clock while it waits for information from you.

The single biggest delay is an institution that ignores the request. Tell the registrar or HR office that a verification request is coming, give the provider a named contact and a direct email, and follow up yourself if the case has not moved in 15 working days.

## What happens after the report?

The report comes back with one of three outcomes per document: **Positive**, **Unable to Verify** or **Discrepancy**. Only a fully positive report moves to DHP. Upload it with your evaluation application; DHP's published service time for evaluation is 25 working days from a complete file, and an application that fails the requirement check is returned to you up to three times before it is rejected. After a promoted evaluation your employer activates the licence: a temporary licence runs for up to six months and is not renewable, a permanent one for two years tied to the sponsoring facility.

## Six things to do before you pay a provider

1. Make your name identical, letter for letter, across your passport, degree, licence and employment letters. A single spelling difference is a Discrepancy.
2. Order fresh certificates of good standing so they are under six months old on the day you submit.
3. Get every experience letter reissued on letterhead with exact dates in DD/MM/YYYY, your job title, full-time status and a signatory with a phone number and official email.
4. Warn each registrar and HR office that a request is coming, and give the provider a named contact.
5. Scan every page clearly, in colour, and name the files starting with a letter.
6. Save the case number the day you pay, and check the status weekly rather than waiting for an email.
`,
}
