/**
 * Seed content: certificate of good standing for Qatar DHP (brief 14).
 * Facts checked 27 Oct 2026 against: Circular DHP/2025/08 (14 Jul 2025, scanned PDF read by OCR on 16 Oct 2026 – good
 * standing reaches DHP only as a PSV report from 1 Aug 2025); QCHP Policy for Issuing Certificates of Good Standing
 * (v2.0, reviewed 25 May 2016, re-read in full 27 Oct 2026 – definitions, 6-month validity, years covered by profession,
 * employer reference where no regulator exists, disciplinary history, conditions for Qatar-issued certificates); DHP's
 * Guidelines for Physicians and Nurses (good standing at licensing; locum/non-resident renewals); provider fee records
 * in src/seed/data.ts (Packages I and J, add-ons); the India, Philippines and Pakistan guides for the regulators' own
 * processes (NMC form, PRC Citizen's Charter, PM&DC FAQ and Regulations 2023, PNMC verification page).
 */

export const goodStandingGuide = {
  title: 'Certificate of good standing for Qatar DHP: who issues it, the six-month rule and PSV',
  path: '/qatar/psv/problems/good-standing-certificate',
  section: 'psv' as const,
  summary:
    'A certificate of good standing is a letter from the regulator that licensed you, confirming you are registered and free to practise without restriction. Qatar’s Department of Healthcare Professions usually asks for it at the licensing stage; it must be no more than six months old when you apply for the licence (QCHP good-standing policy), and since 1 August 2025 it reaches DHP only as a Primary Source Verification report (Circular DHP/2025/08), not by email or post. All three approved providers verify it: two to three certificates cost QAR 550 at DataFlow and QuadraBay and QAR 500 at AVS. Below: what the certificate is, which years it must cover, when to order it, how each provider verifies it, and where to get one in India, the Philippines and Pakistan.',
  meta: {
    title: 'Certificate of Good Standing for Qatar DHP: Rules & Fees',
    description:
      'Who issues a good standing certificate for Qatar DHP, the 6-month rule, which years it must cover, and how DataFlow, QuadraBay and AVS verify it.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-27',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2025/08 – updated procedure for submitting certificates of good standing',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'QCHP – Policy for Issuing Certificates of Good Standing (v2.0, reviewed May 2016)',
      url: 'https://dhp.moph.gov.qa/en/DocumentsAR/Policy%20for%20Issuing%20Certificates%20of%20Good%20Standing.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Allied Health Professionals',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20AHP.pdf',
    },
  ],
  changeLog: [
    {
      date: '2026-10-27',
      note: 'First published. Rules from Circular DHP/2025/08 and the QCHP good-standing policy (re-read in full); package prices from the providers’ fee schedules; regulator processes from the India, Philippines and Pakistan guides. Independent fact-check applied (10 findings).',
    },
  ],
  faqs: [
    {
      question: 'Do I need a certificate from every country I worked in?',
      answer:
        'Probably from every regulator that licensed you during the years DHP counts for your profession. The QCHP good-standing policy asks for certificates “in accordance to the required years of work experience for their profession” – for example the last five years for a physician and the last three for a dentist – and lets DHP ask for a certificate covering any other period if needed. If you held licences in two countries in that window, plan on two certificates and confirm with your PSV provider; Package I at each provider covers two to three.',
    },
    {
      question: 'Can a good standing letter be addressed “To whom it may concern”?',
      answer:
        'Follow your regulator and your PSV provider. Some regulators issue a certificate only for a named authority – Pakistan’s PM&DC issues one certificate per foreign regulator, which you specify – so name Qatar’s Department of Healthcare Professions when the form asks. Before you pay the regulator, ask your provider whether it wants the certificate addressed to DHP, to the provider, or sent to it directly.',
    },
    {
      question: 'My regulator takes weeks to issue a certificate. Should I start PSV first?',
      answer:
        'Yes. Your main PSV report – qualifications, licence and employment – comes first, because DHP will not evaluate you without it, and the certificate is usually needed only at the licensing stage. Ask your regulator now how long it takes, then order the certificate so it is still under six months old when the licence application goes in.',
    },
    {
      question: 'What if my profession has no regulator in the country where I worked?',
      answer:
        'The QCHP good-standing policy covers this: when no registration authority issues certificates in that jurisdiction, the applicant provides an employer reference letter that also states their standing, and DHP staff confirm that no authority exists. The policy predates the August 2025 move to PSV-only delivery, so ask DHP and your PSV provider how the reference should be verified before you pay.',
    },
    {
      question: 'Will an old warning on my record stop my licence?',
      answer:
        'Not necessarily. QCHP’s 2016 good-standing policy says the application is approved if the certificate mentions past disciplinary action but you are allowed to practise in that country without restrictions, including after a warning letter; a current restriction or suspension is decided case by case. We have found no later rule, but DHP decides each file.',
    },
  ],
  markdown: `
## What is a certificate of good standing?

It is a document one regulator sends to another to show that you are legally registered, allowed to practise without restriction and in good standing. The good-standing policy of the Qatar Council for Healthcare Practitioners (QCHP), DHP's predecessor, defines it that way and explains its purpose: to show there is "no legal impediment" to registering you and that you can "reasonably be regarded as safe to practice" under the licensing law of the country that issued it.

Where a regulator cannot issue a clean certificate – because an investigation is under way or your practice is restricted – it may issue a **letter of standing** instead. The policy lists both among the documents DHP receives; one that shows a current restriction or suspension is decided case by case.

## When does DHP need it, and how old can it be?

Usually at the **licensing stage**, after your evaluation, not with your first PSV application. DHP's profession guidelines list it among the licensing documents, and the QCHP policy sets the age limit: a certificate "not more than 6 months old" when you apply for the licence. We have found no later DHP rule that changes it.

Some applicants need one at other points:

- **Restoration** of a registration also needs a certificate no more than six months old.
- **Locum and non-resident physicians** renew with a certificate covering the last two years, verified by the PSV company (DHP's Guidelines for Physicians). Standard renewals do not need one.

## Which years must it cover?

The years of experience your profession needs. The policy asks for certificates "in accordance to the required years of work experience for their profession" – its examples are the last five years for a physician and the last three for a dentist – and lets DHP ask for a certificate covering any other period. So if you were licensed in more than one country during that window, you will probably need a certificate from each regulator – confirm with your PSV provider.

If no regulator issues certificates where you worked, the policy accepts an **employer reference** that also states your standing, once DHP has confirmed that no registration authority exists there. The policy predates Circular DHP/2025/08, so ask DHP and your PSV provider how that reference should be verified now.

## How does it reach DHP now?

Only through PSV. Circular DHP/2025/08 (14 July 2025) ended the old route, in which your regulator emailed or posted the certificate to DHP's good-standing address, and requires every practitioner "to submit a primary source verification report for the good standing certificate"; certificates sent by email or post after 1 August 2025 "will no longer be accepted". DHP's nurse and allied health guidelines still describe the old route, so follow the circular. Our [article on the change](/articles/qatar-good-standing-certificates-through-psv) quotes it in full.

In practice: you obtain the certificate from your regulator, your PSV provider verifies it with that regulator, and DHP receives the verified report. Ask your provider before you apply to the regulator whether it needs a copy uploaded or the certificate sent to it directly.

## What does verification cost?

| | DataFlow | QuadraBay | AVS |
| --- | --- | --- | --- |
| Package I – 2 to 3 certificates | QAR 550 | QAR 550 | QAR 500 |
| Package J – 1 certificate + latest employment letter | QAR 550 | – | QAR 500 |
| One certificate added to another package | QAR 300 | QAR 150 | QAR 250 |

Prices from each provider's DHP price list or fee schedule, as recorded in our [fees guide](/qatar/psv/fees). QuadraBay's add-on price falls per document when you add several.

If you still need your main verification, adding the certificate to that application is usually cheapest – but only if the certificate will still be under six months old when you apply for the licence. Otherwise order Package I or J later, on its own. The [PSV fees guide](/qatar/psv/fees) has every package and add-on side by side, and the [documents guide](/qatar/psv/documents) covers the rest of your file.

## Where do you get one in India, the Philippines or Pakistan?

- **India.** Doctors: a certificate from the National Medical Commission, with the application forwarded through your State Medical Council's Registrar (₹2,360 including GST e-mailed to you, ₹8,900 to a foreign authority; valid up to six months); some State Medical Councils issue their own. Nurses and midwives: usually your State Nursing Council. Details in the [India guide](/qatar/psv/countries/india).
- **Philippines.** A PRC Certificate of Good Standing, booked through your LERIS account and handled at the PRC regional office where you book (PHP 75 per copy plus PHP 30 documentary stamp tax); your PRC ID must be valid. Details in the [Philippines guide](/qatar/psv/countries/philippines).
- **Pakistan.** Doctors and dentists apply on the PM&DC portal; the certificate lasts six months and is issued for one named foreign authority. Nurses apply to PNMC (PKR 10,000 for a foreign country); pharmacists to their provincial pharmacy council. Details in the [Pakistan guide](/qatar/psv/countries/pakistan).
- **Nepal.** Nurses apply online to the Nepal Nursing Council and e-mail the documents to verification@nnc.org.np once the fee shows as paid; doctors and dentists use the Nepal Medical Council's registration-status (good standing) form; pharmacists apply online to the Nepal Pharmacy Council. Details in the [Nepal guide](/qatar/psv/countries/nepal).
- **Sri Lanka.** Nurses apply to the Sri Lanka Nursing Council for a good standing of registration; doctors, dentists and pharmacists ask the Sri Lanka Medical Council for a verification of registration for a foreign regulator (USD 55 or Rs. 17,000). Details in the [Sri Lanka guide](/qatar/psv/countries/sri-lanka).

For any other country, ask the regulator that licensed you how it issues certificates to foreign authorities and how long it takes, and check the delivery your PSV provider needs before you pay.

## Leaving Qatar: how do you get a certificate from DHP?

DHP issues certificates of good standing to practitioners it has licensed. QCHP's 2016 policy, which DHP still publishes, describes the process: you apply online through the registration system with your passport (and QID, if you have one), a good-standing letter from your current or last workplace in Qatar, the address of the receiving regulator and your academic qualifications. DHP checks with its fitness-to-practise department, and the certificate goes by post or email to the receiving regulator – you can ask for a copy. It is valid for six months.

The policy lists cases where DHP does not issue a standard certificate: you were licensed but never practised in Qatar (it issues a registration certificate instead), you have an open case or an active disciplinary action (a letter of standing instead), your employer has reported a negative standing, you are blacklisted, or you left Qatar more than ten years ago (a "To whom it may concern" letter instead). Check the current steps on DHP's registration system before you apply.
`,
}
