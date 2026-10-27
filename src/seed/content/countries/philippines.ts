/**
 * Country guide: Philippines (Qatar DHP licensing and PSV for Filipino nurses, doctors and allied health).
 * Facts checked 22 Oct 2026 against: the PRC Citizen's Charter 2025 (1st edition) as published by the PRC Koronadal
 * regional office (Certificate of Good Standing, Certification of Passing / Board Rating, authenticated PIC/COR copies:
 * who may avail, requirements, fees, LERIS appointment + window); the PRC Citizen's Charter 2026 (COGS handled by the
 * Regional Office Licensure and Registration Division; "Stateboard verification" for foreign agencies); PRC Resolution
 * No. 1957 s. 2025 (11 Feb 2025, full text: AIPO COGS discontinued for PIC renewal except Pharmacy, Criminology and
 * Interior Design); DHP Guidelines for Nurses and for
 * Physicians; Circular DHP/2025/08; DataFlow's DHP offline form and reference kit. Filipino name patterns are
 * illustrative. The Department of Migrant Workers is mentioned only as a pointer.
 */

export const philippinesGuide = {
  title: 'Qatar DHP licence from the Philippines: PSV, PRC good standing and documents for Filipino nurses and doctors',
  path: '/qatar/psv/countries/philippines',
  section: 'documents' as const,
  summary:
    'If you trained or worked in the Philippines, your Qatar DHP application follows the same steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – and the Philippine parts of your file decide how smoothly it goes. Your certificate of good standing comes from the Professional Regulation Commission (PRC), booked through your LERIS account; your school answers the provider’s request about your diploma and Transcript of Records; and your middle name, married name or “Ma.” on certificates must be explained against your passport. Below: the package that fits each Philippine qualification, how to get the PRC certificate, the documents to upload, and the problems Filipino files most often run into.',
  meta: {
    title: 'Qatar PSV for Filipino Nurses & Doctors: PRC & DataFlow Guide',
    description:
      'Filipino nurses, doctors and allied health applying to Qatar DHP: PRC certificate of good standing via LERIS, TOR, PRC ID, name issues and which PSV package fits.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-22',
  verifiedAgainst: [
    {
      label: 'PRC – Citizen’s Charter 2025 (1st edition), Koronadal regional office',
      url: 'https://koronadal.prc.gov.ph/sites/default/files/PRC_CC_03312025.pdf',
    },
    {
      label: 'PRC – Citizen’s Charter 2026 (1st edition)',
      url: 'https://prc.gov.ph/sites/default/files/Professional_Regulation_Commission_2026_1st_Edition_Citizens_Charter.pdf',
    },
    {
      label: 'PRC Resolution No. 1957, s. 2025',
      url: 'https://prc.gov.ph/node/7683',
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
      label: 'Circular DHP/2025/08 – certificates of good standing only through PSV',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'DataFlow – offline application form for DHP (document checklist)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DF-Offline-Application-Form-DHP-updated-1.pdf',
    },
  ],
  changeLog: [
    {
      date: '2026-10-22',
      note: 'First published. PRC good-standing process and fees from the PRC Citizen’s Charter; nursing and physician rules from DHP’s guidelines.',
    },
    { date: '2026-10-27', note: 'Linked the new certificate of good standing guide. No facts changed.' },
  ],
  faqs: [
    {
      question: 'Do I need a CHED CAV or a DFA apostille for the Qatar DHP licence?',
      answer:
        'Not for DHP licensing. DHP’s guidelines for physicians, nurses and allied health all say that verification by an approved PSV provider replaces attestation of certificates. Your employer, recruitment agency or the visa process may ask for authenticated documents for other purposes – that is separate from the licence, so ask in writing which documents need it before you pay for authentication.',
    },
    {
      question: 'Which certificate of good standing does DHP want – PRC or my professional organisation?',
      answer:
        'The regulator’s. DHP’s guidelines ask for the certificate from the registration authority, which in the Philippines is the Professional Regulation Commission. The PRC issues a Certificate of Good Standing to registered professionals with a valid PRC ID. Since 1 August 2025 DHP accepts it only as a PSV report (Circular DHP/2025/08), so have it verified by your PSV provider rather than sending it to DHP.',
    },
    {
      question: 'My PRC ID has expired. Can I still get a certificate of good standing?',
      answer:
        'Renew first. The PRC’s Citizen’s Charter lists the Certificate of Good Standing as a service for “Registered professionals with valid Professional Identification Card/ Electronic-PIC (e-PIC)”, and DHP asks for valid licences for the years of experience it counts. PRC Resolution No. 1957, s. 2025 discontinued the requirement for a good-standing certificate from your accredited professional organisation when renewing the PRC ID – except for pharmacists (and criminologists and interior designers), who still need it to renew.',
    },
    {
      question: 'Which PSV provider is cheapest for a Filipino nurse with a BSN?',
      answer:
        'For one qualification and one PRC licence, QuadraBay and AVS both list QAR 900 and DataFlow QAR 990. The usual extra for a Filipino nurse is a second licence – a Saudi, UAE or other Gulf licence held in the years DHP counts – which adds QAR 150 at QuadraBay, QAR 250 at AVS and QAR 300 at DataFlow. If you already have a DataFlow report issued to another Gulf regulator, DataFlow re-issues it to DHP for QAR 323 when nothing new needs verifying. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Philippine qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Philippine qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| BS Nursing (BSN) | Registered General Nurse | E – nurses and pharmacists | DHP wants 2 years' clinical experience after registration and licensing |
| BS Midwifery | Midwife | E (midwives apply under it) | DHP asks for a bachelor's in midwifery "or equivalent" (or BSN plus a post-graduate midwifery programme) and 3 years as a midwife after registration; a midwifery diploma rather than a BS may not meet it – DHP decides |
| Doctor of Medicine (MD) | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience |
| MD + residency / specialty training | Specialist | A | Package A covers up to two qualifications |
| Doctor of Dental Medicine (DMD) | Dentist | A | |
| BS Pharmacy | Pharmacist | E | |
| BS Medical Technology, BS Physical Therapy, BS Radiologic Technology and similar | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Packages A and B at all three providers, and AVS's nurse package, cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table and the [PSV fees guide](/qatar/psv/fees) every price.

Two DHP rules matter for Philippine degrees. For nurses, DHP's Guidelines for Nurses accept a "Bachelor's Degree in nursing (duration: 4 years)" for a Registered General Nurse, followed by two years' clinical experience "after registration and licensing" – so experience counts from your PRC registration, not from graduation. For doctors, the Guidelines for Physicians ask for a degree from a university listed in the IMED/FAIMER directory and a minimum six-year undergraduate medical degree "(MBChB/MBBS/MBBCh/ Northern American MD or equivalent)", and say "The internship program can be considered for completion of the required undergraduate study years". The Philippine MD follows a separate bachelor's degree, on the North American model, so keep your pre-medical degree and your post-graduate internship certificate with your MD diploma; DHP decides equivalence at evaluation, not the PSV provider. If the provider has to verify the pre-medical degree as well as the MD and your specialty training, that is a third qualification and an extra fee (QAR 400 at DataFlow, QAR 150 at QuadraBay, QAR 300 at AVS).

## How do you get your PRC certificate of good standing?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). You obtain the certificate from the PRC; your PSV provider verifies it; DHP sees the verified report. It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules and timing.

The PRC's Citizen's Charter (2025, 1st edition, as published by its Koronadal regional office) describes the service, "Request for the Issuance of Certificate of Good Standing (COGS)":

- **Who may apply:** "Registered professionals with valid Professional Identification Card/ Electronic-PIC (e-PIC)" – renew an expired ID first.
- **How:** book an appointment through your **LERIS** account, then present your documents at the PRC window. A representative can go for you: a registered professional with their valid PRC ID and your signed original authorisation letter, anyone else with a valid government ID and an original Special Power of Attorney.
- **What to bring:** a screenshot of the system-generated action sheet, your valid PRC ID or e-PIC, and one documentary stamp per copy.
- **Fee:** PHP 75 per copy plus PHP 30 documentary stamp tax.

The 2026 charter places the service with the PRC Regional Office's Licensure and Registration Division, so use the regional office where you book the appointment. Ask your PSV provider before you go whether it wants the original certificate uploaded, or a particular number of copies.

The same charter lists a **Certification of Passing / Board Rating** (also PHP 75 plus PHP 30 documentary stamp) and authenticated copies of your PRC ID and Certificate of Registration. DHP's guidelines and DataFlow's checklist do not list them, but some employers ask for the board rating.

## Which Philippine documents should you upload?

Match the Philippine names to what the providers ask for:

- **Diploma** – front and back. DataFlow's DHP checklist asks for the "Front and reverse side of degree certificates".
- **Transcript of Records (TOR)** – DataFlow's checklist asks for "mark sheets/Transcript of Records" with every qualification. Ask your school's registrar for a TOR that shows your full name, degree, date of graduation and any Special Order number your school prints on it.
- **Post-graduate internship certificate** – doctors, with the MD diploma.
- **PRC licence** – your PRC ID (front and back) and Certificate of Registration. DHP asks for licences "accompanying the required years of work experience", so also include any licence you held abroad during those years – the Saudi, UAE or other Gulf licence if you worked there.
- **Certificates of employment** – one per employer, on letterhead, with exact dates, position, department and an issue date. Hospitals abroad count too.
- **Passport** – a clear, uncut copy, with your PSA birth or marriage certificate if a name differs (see below).

You do not need a CHED CAV, DFA authentication or apostille for these: DHP's guidelines say PSV replaces attestation. Documents in English need no translation.

## Middle names, married names and "Ma."

Filipino naming conventions are one of the commonest reasons for a PSV query. Typical cases:

- **Middle name:** the passport's middle name (usually the mother's maiden surname) is missing from a certificate, or shown only as an initial.
- **Married name:** the passport is in a married name, the diploma and TOR in the maiden name – often with the maiden surname moved into the middle-name field.
- **Abbreviations and spacing:** "Ma." for Maria, "Jr." or "III" present on some documents and not others, "Dela Cruz" against "De la Cruz".

Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name (DataFlow's form asks you to "give your name in full (as per your Passport/ National ID) and recognized alternatives where applicable"), and upload a document that links the names – usually your PSA marriage certificate, or your PSA birth certificate for middle-name and spelling questions. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case and what to do if a report already shows a discrepancy.

## How do Philippine schools and employers handle verification requests?

The provider writes to your school, the PRC and your employers and waits for each to answer – that wait is most of the time PSV takes. Three things help:

1. **Tell the registrar first.** Let your school's registrar know a verification request is coming, and ask whether it charges a fee and how it prefers to be contacted. DataFlow's reference kit says "If your issuing authority applies verification fees, the amount will be added to the total."
2. **Plan for closed schools early.** If your nursing school has closed or merged, find out who now holds its records before you pay for PSV, and tell the provider.
3. **Warn HR abroad too.** Hospitals in Saudi Arabia, the UAE or elsewhere that you name as employers are contacted in the same way; give the provider a named HR contact and an official e-mail address for each.

The [timeline guide](/qatar/psv/timeline) sets out how long each step takes and when to escalate.

## Before you travel

Overseas employment from the Philippines is processed through the [Department of Migrant Workers](https://dmw.gov.ph), separately from DHP licensing. Check with your agency or employer which DMW steps apply to you, and deal only with agencies licensed by the DMW.

## Checklist for Filipino applicants

1. Package chosen to cover every qualification and the experience years DHP will count.
2. Diploma front and back with the TOR; pre-medical degree and internship certificate for doctors.
3. PRC ID and Certificate of Registration, plus any Gulf or other foreign licence held in those years.
4. Certificates of employment with exact dates and an issue date, from every employer in the period.
5. Every name variant listed, with a PSA document linking them.
6. Registrar and HR offices told to expect the request; any verification fee ready.
7. PRC ID valid, and the PRC certificate of good standing booked through LERIS for the licensing stage.
`,
}
