/**
 * Seed content: Qatar licensing hub (brief 23, with the processing-times content of brief 22).
 * Facts checked 23 Oct 2026 against: DHP's Guidelines for Nurses (full text: evaluation process map – employer
 * representative submits, PSV results checked, unable-to-verify/negative → interview → re-verify within 14 days or
 * rejected/blacklisted, Preliminary Evaluation + CID letter; temporary licence; licensing; renewal blocked without CPD;
 * change of place of work issues a new licence with the new facility's name), DHP's Guidelines for Physicians (GP
 * requirements, specialty categories 1–3, preliminary evaluation valid 6 months), DHP's Policy for Temporary Licenses,
 * DHP's CPD Cycle Policy v6.0, DHP's Registration page (sections, portal), Circular DHP/2024/16 (processing times),
 * DHP's PSV page, the Qualifying Examination Policy and Circulars DHP/2025/19, DHP/2025/24 and DHP/2025/08.
 * Licence validity for a full licence is not stated in the sources read, so the page does not give one.
 */

export const licensingGuide = {
  title: 'How to get a DHP licence in Qatar: the full process for doctors, nurses, pharmacists and allied health',
  path: '/qatar/licensing',
  section: 'licensing' as const,
  summary:
    'A Qatar healthcare licence comes from the Department of Healthcare Professions (DHP) at the Ministry of Public Health, formerly the Qatar Council for Healthcare Practitioners (QCHP). Every applicant goes through the same gates: Primary Source Verification of your documents, a DHP evaluation submitted through your employer’s representative, the Prometric qualifying exam unless you are exempt, then licensing – with an optional six-month temporary licence in between – and renewal every cycle once you have met the CPD requirement. This guide walks through each gate with DHP’s own requirements, processing times and links to the detailed guides.',
  meta: {
    title: 'How to Get a DHP (QCHP) Licence in Qatar: 2026 Guide',
    description:
      'Qatar healthcare licensing step by step: PSV, DHP evaluation, Prometric exam, temporary and full licence, renewal and CPD, with DHP’s official processing times.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'DHP – Policy for Temporary Licenses',
      url: 'https://dhp.moph.gov.qa/en/DocumentsAR/Policy%20for%20Temporary%20Licenses.pdf',
    },
    {
      label: 'DHP – CPD Cycle Policy (version 6.0)',
      url: 'https://dhp.moph.gov.qa/en/AccrdDocuments/CPD%20Cycle%20Policy.pdf',
    },
    {
      label: 'DHP – Registration',
      url: 'https://dhp.moph.gov.qa/en/Pages/Registration.aspx',
    },
    {
      label: 'Circular DHP/2024/16 – processing times',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-16-2024-E.pdf',
      circularNumber: 'DHP/2024/16',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Process, temporary licence, licensing and renewal rules from DHP’s guidelines and policies; processing times from Circular DHP/2024/16.',
    },
  ],
  faqs: [
    {
      question: 'Is QCHP the same as DHP?',
      answer:
        'Yes, in practice. Healthcare practitioners in Qatar were registered by the Qatar Council for Healthcare Practitioners (QCHP); that work is now done by the Department of Healthcare Professions (DHP) at the Ministry of Public Health, and some DHP policies still carry the QCHP name. When people search for a “QCHP licence”, they mean the DHP licence.',
    },
    {
      question: 'Can I apply for a Qatar licence without a job offer?',
      answer:
        'Not through the standard route. DHP’s process maps send an evaluation application to the employer representative’s landing page, where the employer must review, approve and submit it, and the licence is issued for a licensed facility. You can, however, start Primary Source Verification on your own before you have an offer, which is usually the slowest step. Consultancies report that Circular DHP/2024/22 allows a preliminary evaluation without an employer; we have not yet confirmed that in the circular itself.',
    },
    {
      question: 'Do nurses need a bachelor’s degree to work in Qatar?',
      answer:
        'No. DHP’s Guidelines for Nurses accept a four-year bachelor’s degree in nursing or a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)” for a Registered General Nurse, each followed by two years of clinical experience after registration and licensing. Associate degree holders need three years.',
    },
    {
      question: 'How much does the whole licensing process cost?',
      answer:
        'The fixed costs are PSV (QAR 900 to 1,210 for a practising clinician’s standard package, depending on profession and provider), the Prometric exam (US$244 if it applies to you) and DHP’s own evaluation and licence fees. The [PSV fees guide](/qatar/psv/fees) adds them up by profession.',
    },
  ],
  markdown: `
## Who licenses healthcare practitioners in Qatar?

The **Department of Healthcare Professions (DHP)** at the Ministry of Public Health. Its Registration section works in teams by profession – physicians, dentists, nurses, pharmacists and allied healthcare practitioners – and handles evaluation, licensing, renewal and withdrawal of licences. Applications go through DHP's online **Registration and Licensing System** at dhpportal.moph.gov.qa. The same work was previously done by the Qatar Council for Healthcare Practitioners (QCHP), which is why "QCHP licence" is still a common search.

## What are the steps to a Qatar licence?

| Step | What happens | Official time (working days) |
| --- | --- | --- |
| 1. Primary Source Verification | An approved provider – DataFlow, QuadraBay or AVS – verifies your qualifications, licences and employment with the issuers | Provider targets of about 14–25 days, longer in practice |
| 2. Evaluation | You apply online; your employer's representative reviews and submits; DHP checks your file and your PSV report | 25 (physicians, dentists) / 15 (others) |
| 3. Qualifying exam | The Prometric exam, unless you hold an exempting exam or another exemption | Booked with Prometric |
| 4. Temporary licence (optional) | Six months, non-renewable, after evaluation | 5 |
| 5. Licensing | Your full licence, issued for a licensed facility | 15 (physicians, dentists) / 10 (others) |
| 6. Renewal | Allowed only once your CPD requirement is met | 7 |

DHP's times come from Circular DHP/2024/16 and run from "a complete application that meets all requirements and includes verified documents"; an application sent back to you is counted again from the day you resubmit. The [timeline guide](/qatar/psv/timeline) adds the PSV stage and shows how the whole journey adds up.

### 1. Primary Source Verification

DHP's PSV page tells every practitioner to apply for verification **before** applying for evaluation, and to attach the report to the evaluation application. Since 1 August 2025 the certificate of good standing also reaches DHP only through PSV (Circular DHP/2025/08). Start here: the [PSV overview](/qatar/psv) compares the three providers, the [documents guide](/qatar/psv/documents) lists what each verifies, and the [fees guide](/qatar/psv/fees) prices it.

### 2. Evaluation

According to DHP's Guidelines for Nurses, after you submit and pay, "The application after submission/payment will go to the Employer Representative's landing page", where the employer representative must review the documents, approve and submit the application – the status shows "Pending with Employer" at that stage. The Registration Section then checks the file and the results of primary source verification:

- **A clean verification** – the application is approved and DHP issues a **Preliminary Evaluation** and a CID letter, printed from the employer representative's page. The physician guidelines say a preliminary evaluation "is only valid for 6 months".
- **Unable to verify or negative** – DHP's process map shows the applicant called for interview; depending on the result, the document is re-verified within 14 days or the applicant is rejected and blacklisted.
- **Not enough experience or a break from practice** – the applicant is told to train or complete experience and re-apply.

DHP returns an incomplete application with comments; the [documents guide](/qatar/psv/documents) covers everything DHP asks for at this stage.

### 3. The qualifying exam

GPs, general dentists, pharmacists, nurses, midwives and most allied health professionals sit DHP's Prometric exam, "at the evaluation stage" according to DHP's Qualifying Examination Policy, unless they hold an exempting exam listed in Circular DHP/2025/19 – which must itself be PSV-verified – or are exempt under Circular DHP/2025/24 (Qataris, offspring of Qatari women, Qatar graduates). Specialists in Categories 1 and 2 do not sit it. The [Prometric exam guide](/qatar/exam/prometric) has the format, pass marks, fees, attempts and the full exemption list.

### 4. The temporary licence

DHP's Policy for Temporary Licenses describes it as "a license granted after the completion of the evaluation process with a validity of six months and is non-renewable". Without a Qatar ID you need a home-country medical report and police clearance, both attested by the Ministry of Foreign Affairs, plus undertaking letters from you and the facility. You must apply for the full licence while the temporary one is valid; otherwise, the nurse guidelines say, you have to apply for evaluation again – and "In case of negative verification reports and proven incidents of fraud, temporary license will be suspended".

### 5. Licensing

The full licence application needs your Qatar ID with the employer as sponsor (or a family-sponsorship QID with the employer's letter of intent), the PSV report, a police clearance certificate, a medical report no more than six months old, a CPR certificate where your guidelines require one, and the verified certificate of good standing. The licence is issued for a licensed facility: if the facility's own licence is not yet in place, DHP sends the request back marked complete but pending the facility licence, and when you change employer DHP issues "a new Medical License with the new facility's name".

### 6. Renewal and CPD

You renew online, and the portal will not let you apply until you meet DHP's continuing professional development requirement. DHP's CPD Cycle Policy (version 6.0) sets a two-year cycle:

| | Credits per two-year cycle | Of which, every year | Of which, Category 1 (accredited group activities) |
| --- | --- | --- | --- |
| Physicians and dentists | 80 | at least 40 | at least 40 |
| Nurses, pharmacists, allied health | 40 | at least 20 | at least 20 |

No qualifying exam is needed at renewal.

## What does each profession need?

| Profession | Qualification | Experience before applying | Exam |
| --- | --- | --- | --- |
| General practitioner | Medical degree of at least six years "or equivalent", from a university in the IMED/FAIMER directory | Five years' clinical experience for overseas applicants | Prometric, unless exempt |
| Specialist, Category 1 or 2 | Postgraduate degree listed in DHP's Category 1 or 2 | One year (Category 1) or two years (Category 2) after the postgraduate degree | Not required |
| Specialist, Category 3 | Structured postgraduate training of at least three years plus an exit or board exam | Three years after the postgraduate degree, in government or training hospitals | Required |
| Registered general nurse | Bachelor's in nursing (4 years) or diploma (3 years after 12 years of school) | Two years after registration and licensing (three with an associate degree) | Prometric, unless exempt (e.g. NCLEX-RN) |
| Midwife | Bachelor's in midwifery or equivalent, or a nursing degree plus post-graduate midwifery | Three years as a midwife | Prometric |
| Allied health | Bachelor's or diploma in the field | Generally two to five years, depending on the scope | Prometric for most scopes |

Dentists and pharmacists have their own DHP guidelines. Country-specific notes for [India](/qatar/psv/countries/india) and the [Philippines](/qatar/psv/countries/philippines) show how local qualifications map onto these rows.

## Common problems that delay a licence

- **A document the issuer will not confirm.** It becomes an Unable to Verify or Discrepancy result and, at evaluation, an interview. The [status-check guide](/qatar/psv/status) explains the outcomes; the [name-mismatch guide](/qatar/psv/problems/name-mismatch) prevents the commonest one.
- **Experience DHP will not count.** The physician guidelines say experience certificates not listed in your CV or submitted with your first evaluation will not be considered in later applications.
- **An expired document.** Preliminary evaluations, temporary licences, medical reports and good-standing certificates all have six-month limits; plan the order so nothing lapses while you wait for the next step.
`,
}
