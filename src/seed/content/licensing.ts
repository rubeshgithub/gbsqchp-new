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
    'A Qatar healthcare licence comes from the Department of Healthcare Professions (DHP) at the Ministry of Public Health, formerly the Qatar Council for Healthcare Practitioners (QCHP). Every applicant goes through the same gates: Primary Source Verification of your documents, a DHP evaluation submitted through your employer’s representative, the Prometric qualifying exam if your scope requires it, then licensing – with an optional six-month temporary licence in between – and renewal, which requires meeting DHP’s two-year CPD cycle. This guide walks through each gate with DHP’s own requirements, processing times and links to the detailed guides.',
  meta: {
    title: 'How to Get a DHP (QCHP) Licence in Qatar: 2026 Guide',
    description:
      'DHP (Department of Healthcare Professions) licensing in Qatar step by step: PSV, evaluation, Prometric exam, temporary and full licence, renewal and CPD.',
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
    { date: '2026-10-26', note: 'Added an FAQ on what DHP stands for, from the “Who licenses” section, and reworded the search description. No facts changed.' },
  ],
  faqs: [
    {
      question: 'What does DHP stand for in Qatar?',
      answer:
        'DHP is the Department of Healthcare Professions at Qatar’s Ministry of Public Health. It evaluates, licenses and renews the licences of physicians, dentists, nurses, pharmacists and allied healthcare practitioners, through its online Registration and Licensing System at dhpportal.moph.gov.qa. It took over this work from the Qatar Council for Healthcare Practitioners (QCHP).',
    },
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
| 2. Evaluation, including the qualifying exam where your scope requires it | You apply online; your employer's representative reviews and submits; DHP checks your file and your PSV report | 25 (physicians, dentists) / 15 (others) |
| 3. Temporary licence (optional) | Six months, non-renewable, after evaluation | 5 |
| 4. Licensing | Your full licence, issued for a licensed facility | 15 (physicians, dentists) / 10 (others) |
| 5. Renewal | Allowed only once your CPD requirement is met | 7 |

DHP's times come from Circular DHP/2024/16 and run from "a complete application that meets all requirements and includes verified documents"; an application sent back to you is counted again from the day you resubmit. The [timeline guide](/qatar/psv/timeline) adds the PSV stage and shows how the whole journey adds up.

### 1. Primary Source Verification

DHP's PSV page tells every practitioner to apply for verification **before** applying for evaluation, and to attach the report to the evaluation application. Since 1 August 2025 the certificate of good standing also reaches DHP only through PSV (Circular DHP/2025/08). Start here: the [PSV overview](/qatar/psv) compares the three providers, the [documents guide](/qatar/psv/documents) lists what each verifies, and the [fees guide](/qatar/psv/fees) prices it.

### 2. Evaluation and the qualifying exam

According to DHP's Guidelines for Nurses, after you submit and pay, "The application after submission/payment will go to the Employer Representative's landing page", where the employer representative must review the documents, approve and submit the application – the status shows "Pending with Employer" at that stage. The Registration Section then checks the file and the results of primary source verification:

- **A clean verification** – the application is approved and DHP issues a **Preliminary Evaluation** and a CID letter, printed from the employer representative's page. The physician guidelines say a preliminary evaluation "is only valid for 6 months".
- **Unable to verify or negative** – DHP's process maps show the applicant called for interview; depending on the result, the application proceeds to approval, the document is re-verified within 14 days, or the applicant is rejected and blacklisted.
- **Not enough experience or a break from practice** – on the nurses' process map, the applicant is told to train or complete the experience and re-apply. On the physicians' map, overseas applicants who are not eligible, have a break of practice or lack experience are rejected; only Qatari and family-sponsored doctors are offered supervised or assistant-specialty routes.

Physicians' applications that do not meet the requirements are sent back "maximum for 3 times" before rejection; the [documents guide](/qatar/psv/documents) covers everything DHP asks for at this stage.

**The exam sits inside evaluation.** DHP's Qualifying Examination Policy has practitioners sit it "at the evaluation stage", and the nurses' evaluation document list includes the exam pass certificate. The scopes that sit it include general practitioners, general dentists, pharmacists, registered general nurses, registered midwives, laboratory and radiology technologists and technicians, physiotherapists, paramedics, dental assistants, hygienists and dental lab technicians, and Category 3 specialists. Category 1 and 2 specialists do not, and DHP's nursing table marks it "Not required" for clinical nurse specialists, nurse practitioners and nurse educators among others. You are also exempt if you hold an exempting exam listed in Circular DHP/2025/19 – which must itself be PSV-verified – or under Circular DHP/2025/24 (Qataris, offspring of Qatari women, Qatar graduates). The [Prometric exam guide](/qatar/exam/prometric) has the format, pass marks, fees, attempts and the full exemption list.

### 3. The temporary licence

DHP's Policy for Temporary Licenses describes it as "a license granted after the completion of the evaluation process with a validity of six months and is non-renewable". Without a Qatar ID you need a home-country medical report and police clearance, both attested by the Ministry of Foreign Affairs, plus undertaking letters from you and the facility. You must apply for the full licence while the temporary one is valid; otherwise, the nurse guidelines say, you have to apply for evaluation again – and "In case of negative verification reports and proven incidents of fraud, temporary license will be suspended".

### 4. Licensing

The full licence application needs your Qatar ID with the employer as sponsor (or a family-sponsorship QID with the employer's letter of intent), the PSV report, a police clearance certificate from Qatar's Ministry of Interior, a medical report no more than six months old, the verified certificate of good standing and, for nurses, a recognised CPR certificate (some categories are exempted by circular 12/2023). For physicians, DHP's guidelines refer to Circular DHP/2024/06, which makes the healthcare facility responsible for checking CPR. The licence is issued for a licensed facility: if the facility's own licence is not yet in place, DHP sends the request back marked complete but pending the facility licence, and when you change employer DHP issues "a new Medical License with the new facility's name".

### 5. Renewal and CPD

You renew online, and the portal will not let you apply until you meet DHP's continuing professional development requirement. DHP's physician guidelines refer to "the 2 years license cycle", and DHP's CPD Cycle Policy (version 6.0) sets a two-year CPD cycle:

| | Credits per two-year cycle | Of which, every year | Of which, Category 1 (accredited group activities) |
| --- | --- | --- | --- |
| Physicians and dentists | 80 | at least 40 | at least 40 |
| Nurses, pharmacists, allied health | 40 | at least 20 | at least 20 |

No qualifying exam is needed at renewal.

## What does each profession need?

| Profession | Qualification | Experience before applying | Exam |
| --- | --- | --- | --- |
| General practitioner | Medical degree of at least six years "or equivalent", from a university in the IMED/FAIMER directory | Five years' clinical experience for overseas applicants | Prometric, unless exempt |
| Specialist, Category 1 or 2 | Postgraduate degree listed in DHP's Category 1 or 2 | "5 years' experience in total plus the required experience post-specialty degree": one year (Category 1) or two years (Category 2) after the postgraduate degree | Not required |
| Specialist, Category 3 | Structured postgraduate training of at least three years plus an exit or board exam | Five years in total plus three years after the postgraduate degree, in government or semi-government hospitals or hospitals that run postgraduate training programmes | Required (three attempts for specialty exams) |
| Registered general nurse | Bachelor's in nursing (4 years) or diploma (3 years after 12 years of school) | Two years after registration and licensing (three with an associate degree) | Prometric, unless exempt (e.g. NCLEX-RN passed within five years) |
| Midwife | Bachelor's in midwifery or equivalent, or a nursing degree plus post-graduate midwifery | Three years as a midwife | Prometric |
| Allied health | Bachelor's (therapists, technologists) or diploma (technicians) in the field | In general two to five years after graduation for therapists and technologists, at least two for technicians, depending on the scope | Prometric for the scopes listed above |

Dentists and pharmacists have their own DHP guidelines. Country-specific notes for [India](/qatar/psv/countries/india), the [Philippines](/qatar/psv/countries/philippines), [Pakistan](/qatar/psv/countries/pakistan) and [Nepal](/qatar/psv/countries/nepal) show how local qualifications map onto these rows.

## Common problems that delay a licence

- **A document the issuer will not confirm.** It becomes an Unable to Verify or Discrepancy result and, at evaluation, an interview. The [Unable to Verify guide](/qatar/psv/problems/unable-to-verify) explains how to resolve it first; the [name-mismatch guide](/qatar/psv/problems/name-mismatch) prevents the commonest one.
- **Experience DHP will not count.** The physician guidelines say experience certificates not listed in your CV or submitted with your first evaluation will not be considered in later applications.
- **An expired document.** Preliminary evaluations, temporary licences, medical reports and good-standing certificates all have six-month limits; plan the order so nothing lapses while you wait for the next step.
`,
}
