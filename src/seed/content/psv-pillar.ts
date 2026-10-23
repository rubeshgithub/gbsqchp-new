/**
 * Seed content: PSV pillar page for Qatar.
 * Facts verified 9–11 Oct 2026 against the DHP PSV page, the DHP price list and reference kit published by DataFlow,
 * Circular DHP/2025/20 (QuadraBay), Circular DHP/2026/36 (AVS) and the AVS fee schedule. Circular DHP/2025/24 was read on
 * 11 Oct 2026: it covers experience and exam rules for Qataris, residents' families and Qatar graduates, not PSV. Items marked "reported" come from
 * consultancy guides and must be confirmed against the official PDF before the verified date is advanced.
 */

export const psvPillar = {
  title: 'Primary Source Verification (PSV) for Qatar DHP: DataFlow, QuadraBay and AVS compared',
  path: '/qatar/psv',
  section: 'psv' as const,
  summary:
    "Before Qatar's Department of Healthcare Professions (DHP) will evaluate you, one of its three approved providers – DataFlow, QuadraBay or AVS – must verify your degree, licence and employment (and, at the licensing stage, your good-standing certificates) at the source. DHP lists verification among the mandatory requirements for registration and licensing for every practitioner and will not evaluate an application without the report attached. This guide explains what gets verified, what each provider charges, how long it really takes and how to choose.",
  meta: {
    title: 'PSV for Qatar DHP 2026: DataFlow vs QuadraBay vs AVS',
    description:
      'How Primary Source Verification works for Qatar’s DHP in 2026: the three approved providers, fees, documents, timelines and which one to choose.',
  },
  showVendorTable: true,
  showCalculator: true,
  verifiedOn: '2026-10-11',
  verifiedAgainst: [
    {
      label: 'DHP – Primary Source Verification page (approved providers)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
    {
      label: 'DataFlow – DHP price list (PDF dated 28 July 2025)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'Circular DHP/2026/36 – AVS approved as third provider',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2036%202026%20E.pdf',
      circularNumber: 'DHP/2026/36',
    },
    {
      label: 'AVS – DHP Reference Program Guide (fee schedule)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
  ],
  changeLog: [
    { date: '2026-10-09', note: 'First published. Three-provider comparison, fees and timelines as of this date.' },
    { date: '2026-10-11', note: 'Added AVS fees and approval date (Circular DHP/2026/36, 3 Sep 2026); corrected DataFlow transfer fee (QAR 323 for reports issued to another authority) and the 20-working-day average from DataFlow’s reference kit. Removed the claim that Circular DHP/2025/24 made PSV mandatory from 1 January 2026: the circular, read in full, covers experience and exam rules, not PSV. PSV is mandatory for all applicants under DHP’s standing requirements.' },
    { date: '2026-10-16', note: 'Documents section checked against DHP’s guidelines for physicians, nurses and allied health: surgical logbooks cover the last three years (not two) and are needed for clinical privileges; good-standing certificates are usually needed at licensing, must be no more than six months old then and, under Circular DHP/2025/08, reach DHP only through PSV; certificates need no attestation when verified by PSV. The front-and-back rule for degrees now cites DataFlow’s own checklist.' },
    { date: '2026-10-17', note: 'DHP evaluation time corrected: 25 working days applies to physicians and dentists; nurses, pharmacists and allied health have 15 (Circular DHP/2024/16). DataFlow’s FAQ figures restated: 15–25 working days, with a warning that verification can take up to three months. Real-world range attributed to its single source.' },
  ],
  faqs: [
    {
      question: 'Is DataFlow still mandatory for Qatar?',
      answer:
        'No single provider is mandatory. Verification itself is: DHP’s Primary Source Verification page calls it “one of the mandatory requirements for registration and licensing” and requires the report before it will evaluate you. DHP accepts reports from any of its three approved providers: DataFlow, QuadraBay and Approved Verification Services (AVS).',
    },
    {
      question: 'Can I use my UAE or Saudi DataFlow report for Qatar?',
      answer:
        'You can transfer it instead of starting again. DataFlow re-issues a report previously issued to another authority as a DHP report for QAR 323 and quotes five days if no additional documents are needed (QAR 215 if the report was already issued to DHP); QuadraBay charges QAR 150 to transfer one of its own reports. Any employer or good-standing certificate added since the old report is verified fresh.',
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
        'DHP has not published a fixed validity period for the report itself. What does expire is the certificate of good standing, which must be no more than six months old when you apply for the licence, and DHP can ask for fresh verification of employment added since the report. Check with the DHP registration section for an older report.',
    },
  ],
  markdown: `
## What is Primary Source Verification and why does DHP require it?

Primary Source Verification means the provider writes to the university that issued your degree, the council that licensed you and the employers named in your file, and asks each of them to confirm the document is genuine. DHP's own wording is that PSV "ensures that all healthcare practitioners' credentials are verified as genuine" and lets the department "warn other registration authorities of fraudulent applicants" ([DHP, Primary Source Verification](https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx)).

The order matters. You apply for PSV **first**, then attach the completed report to your online evaluation application on the DHP portal. DHP will not open an evaluation without it, and its PSV page makes no exception for any category of practitioner.

## Who are the three approved providers?

- **DataFlow Group** – DHP's verification partner since 2009. Applications go through [dhp.dataflowgroup.com](https://dhp.dataflowgroup.com/en/onboarding/signin); there is a Doha office at Barwa Tower 1 (Office 49, 6th floor), Sunday to Thursday, 8 am to 4 pm, and WhatsApp support on +974 4419 6582.
- **QuadraBay** – approved on 2 December 2025 under Circular DHP/2025/20 as a second provider. Applications go through [dhp.quadrabay.com](https://dhp.quadrabay.com/); support is dhp.support@quadrabay.com. QuadraBay already verifies for Bahrain's NHRA (since December 2021) and for Kuwait's Ministry of Health private sector.
- **Approved Verification Services (AVS)** – approved on 3 September 2026 under Circular DHP/2026/36 as a third provider, and the only one based in Qatar. Applications go through [avsqatar.com](https://www.avsqatar.com/avs/apply); the Doha office is at Abdul Jaleel Business Center, Airport Street, and the helpdesk is dhp.helpdesk@avsqatar.com or +974 4464 4490. Its fee schedule lists QAR 1,050 for physicians and dentists and QAR 900 for nurses, pharmacists and allied health, each covering up to two qualifications and five years of employment.

Gulf Bridge Services (GBS) was the second approved provider from July 2018 until DHP ended the contract on 7 February 2024 (Circular DHP/2024/09). If you arrived here looking for the GBS portal, read [what to do now](/gbs-psv-portal).

## Which provider should you choose?

Nothing in DHP's rules favours one provider: all three reports are accepted for new applications, renewals, upgrades and re-registration. Choose on your own situation:

1. **You already hold a DataFlow or QuadraBay report for another GCC regulator.** Transfer it rather than restart. DataFlow charges QAR 323 to re-issue a report that was issued to another authority (QAR 215 if it was already issued to DHP) and quotes a new DHP report within five days when nothing new is needed; QuadraBay charges QAR 150 for its own reports.
2. **Price matters and the standard target is fine.** Compare the package for your profession in the table above, or see every package, add-on and the total cost of a licence on the [PSV fees page](/qatar/psv/fees). For nurses and pharmacists (Package E) QuadraBay and AVS list QAR 900 against DataFlow's QAR 990; for physicians and dentists (Package A) AVS lists QAR 1,050, QuadraBay QAR 1,100 and DataFlow QAR 1,210. AVS also verifies two qualifications and five years of employment in every package, where the others' Package E covers one and three.
3. **You need a published fast target.** QuadraBay's Prestige tier targets 14 business days (QAR 1,200 for Package E, QAR 1,400 for Package A); DataFlow's Express service adds QAR 529 for a 14-working-day target. AVS sells Express for QAR 400 but publishes no target.
4. **Your employer has a preference.** Ask HR which provider their corporate account uses. Hospitals that submit in bulk often want every file with the same provider.
5. **Your file is complicated** – a closed university, an institution in Sudan or Syria, a name change, a long break in practice. The provider matters less than your preparation. Fix the file first; the six checks at the end of this page show where to start, and the provider guides linked below explain each portal's rules.

## What documents does the provider verify?

Every provider works from the same DHP package structure, so the document set is the same whichever you choose. The [documents guide](/qatar/psv/documents) covers each one in detail, with the upload rules of each portal:

- **Passport** and a signed **Letter of Authorization** (the provider's own form) allowing it to contact your institutions.
- **Educational certificates** – two for physicians, dentists and advanced-practice nurses (Packages A and G), one for nurses, pharmacists and allied health (Packages B and E) at DataFlow and QuadraBay; AVS includes two in every clinical package. Each comes with its transcript or mark sheets; DataFlow's DHP checklist asks for the front and reverse side of every degree certificate.
- **Professional licence or registration** from the country where you currently practise.
- **Employment certificates** for the last five years (Packages A, B, G) or three years (Package E; five at AVS), up to three employers, each on letterhead with exact start and end dates, job title, full-time status and a signatory the provider can contact.
- **Certificates of good standing**, usually at the licensing stage and no more than six months old when you apply for the licence. Since 1 August 2025 DHP accepts them only as a PSV report (Circular DHP/2025/08), not by email or post from your regulator. DataFlow and QuadraBay price them as Package I: two to three certificates for QAR 550; AVS charges QAR 500.
- **Surgical logbook** for surgeons applying for clinical privileges (the last three years, verified by the PSV provider).

You do not need to attest anything first: DHP's guidelines say verification by an approved provider replaces attestation. Anything not in English or Arabic needs an official translation. On the QuadraBay portal every file name must start with a letter, not a number, or the upload is rejected.

## How long does PSV take?

DataFlow's reference kit quotes an average of 20 working days from the day every document is in, and its FAQ gives 15 to 25 working days while warning that verification can take up to three months; one consultancy reports 25 to 35 working days when the file is complete and 45 to 60 when universities or councils are slow to respond. Circular DHP/2025/20 sets QuadraBay's targets at 20 business days for Standard and 14 for Prestige; the AVS portal shows a 20-day turnaround. The faster tiers shorten the provider's own handling, not your university's response time, and DataFlow counts its time only from a complete file – assume the same of the others. The [timeline guide](/qatar/psv/timeline) compares every target with what applicants report, and adds DHP's own processing times.

The single biggest delay is an institution that ignores the request. Tell the registrar or HR office that a verification request is coming, give the provider a named contact and a direct email, and follow up yourself if the case has not moved in 15 working days.

## What happens after the report?

Each document in the report ends with a result: a clean (verified) result, or – at DataFlow – **Unable to Verify** or **Discrepancy** (QuadraBay closes a component it could not complete as *Unable to Check*). Resolve anything that is not clean with the provider before you apply for evaluation; the [status-check guide](/qatar/psv/status) explains the outcomes and the appeal route. Upload it with your evaluation application; DHP's published processing time for evaluation is 25 working days for physicians and dentists and 15 for nurses, pharmacists and allied health, counted from a complete file (Circular DHP/2024/16), and an application that fails the requirement check is returned to you up to three times before it is rejected. After a promoted evaluation your employer activates the licence: a temporary licence runs for up to six months and is not renewable, a permanent one for two years tied to the sponsoring facility.

## Six things to do before you pay a provider

1. Check your name letter for letter across your passport, degree, licence and employment letters, and have a document ready that links any name that differs. An unexplained difference can come back as a Discrepancy; the [name-mismatch guide](/qatar/psv/problems/name-mismatch) explains the fix.
2. Time your certificates of good standing for the licensing stage, so they are no more than six months old when the licence application goes in.
3. Get every experience letter reissued on letterhead with exact dates in DD/MM/YYYY, your job title, full-time status and a signatory with a phone number and official email.
4. Warn each registrar and HR office that a request is coming, and give the provider a named contact.
5. Scan every page clearly, in colour, and name the files starting with a letter. The [documents guide](/qatar/psv/documents) has the full checklist.
6. Save the case number the day you pay, and check the status weekly rather than waiting for an email.
`,
}
