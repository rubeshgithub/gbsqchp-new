/**
 * Country guide: Bangladesh (Qatar DHP licensing and PSV for Bangladeshi doctors, nurses, pharmacists and allied health).
 * Facts checked 1 Nov 2026 against: the Bangladesh Medical and Dental Council's Certificate of Good Standing page
 * (documents incl. bio-data, character certificate, valid full registration, performance certificate from the last
 * employer, declaration, MBBS/BDS original, e-TIN, latest tax return acknowledgement, NID; online payment for Bangladeshi
 * doctors; government doctors apply through their controlling officer; documents produced on the day of delivery) and its
 * fee structure (Good Standing Certificate BDT 3,000; renewal of full registration BDT 2,000; an "Urgent Issuance Fee" of
 * BDT 2,000 with no service named); BMDC full-registration page (internship training certificate, e-TIN, NID); the
 * Bangladesh Nursing and Midwifery Council's "Application & Requirements for Good Professional Standing Certificate"
 * (an older form on the "Bangladesh Nursing Council" letterhead: Tk. 4,500 by bank draft or pay order, documents,
 * government nurses through their controlling officer) and its forms list (good standing, verification, registration
 * renewal, English version); the BNMC 2025–26 admission circular as published (3-year Diploma in Nursing Science and
 * Midwifery after SSC and HSC; 4-year BSc in Nursing) and college programme pages (6-month internship after the diploma);
 * DHP Guidelines for Nurses (RGN rows) and Physicians (six-year degree and internship rule; GP 5 years and exam; specialty
 * table – Bangladesh is not in it, so Category 3 applies); Circular DHP/2025/08; Circular DHP/2025/19. Emigration is only a
 * pointer to the Bureau of Manpower, Employment and Training. Package scopes and add-on prices come from the Fees records.
 */

export const bangladeshGuide = {
  title: 'Qatar DHP licence from Bangladesh: PSV, BMDC and BNMC good standing for Bangladeshi doctors and nurses',
  path: '/qatar/psv/countries/bangladesh',
  section: 'documents' as const,
  summary:
    'If you trained or worked in Bangladesh, your Qatar DHP application follows the same steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – and a few Bangladeshi details decide how it goes. Doctors and dentists get a Certificate of Good Standing from the Bangladesh Medical and Dental Council (BMDC) for BDT 3,000, with a document list that includes your e-TIN and latest tax return; nurses and midwives apply to the Bangladesh Nursing and Midwifery Council (BNMC) for a certificate of good professional standing. The three-year Diploma in Nursing Science and Midwifery starts after HSC, which matches DHP’s diploma rule. Bangladeshi specialist degrees such as FCPS are not on DHP’s approved specialty list, so they are assessed under DHP’s Category 3. Below: the package that fits each qualification, where each certificate comes from, which documents to upload, and the usual problems.',
  meta: {
    title: 'Qatar PSV for Bangladeshi Doctors & Nurses: BMDC, BNMC 2026',
    description:
      'Bangladeshi doctors and nurses applying to Qatar DHP: BMDC good standing (BDT 3,000), BNMC good professional standing, FCPS Category 3, nursing diploma, PSV packages.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-11-01',
  verifiedAgainst: [
    {
      label: 'Bangladesh Medical and Dental Council – Certificate of Good Standing',
      url: 'https://www.bmdc.org.bd/reg-goodstand',
    },
    {
      label: 'Bangladesh Medical and Dental Council – fee structure',
      url: 'https://payment.bmdc.org.bd/home/page/fee-structure',
    },
    {
      label: 'Bangladesh Medical and Dental Council – full registration (MBBS, BDS)',
      url: 'https://www.bmdc.org.bd/reg-registration',
    },
    {
      label: 'Bangladesh Nursing and Midwifery Council – Application & Requirements for Good Professional Standing Certificate',
      url: 'https://bnmc.portal.gov.bd/sites/default/files/files/bnmc.portal.gov.bd/page/e73d4fde_b214_4f07_90f1_1c978320c91a/Application%20&%20Requirements%20for%20Good%20Professional%20Standing%20Certificate.pdf',
    },
    {
      label: 'Nursing & Midwifery Admission Circular 2025–26, as published by Admission Notice – reported',
      url: 'https://admissionnotice.com/en/nursing-admission-circular-2024/',
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
      label: 'Bureau of Manpower, Employment and Training (BMET)',
      url: 'http://www.bmet.gov.bd/',
    },
  ],
  changeLog: [
    {
      date: '2026-11-01',
      note: 'First published. BMDC good-standing documents and fee from its own pages; BNMC requirements from its published form; qualification rules from DHP’s Guidelines for Nurses and Physicians.',
    },
  ],
  faqs: [
    {
      question: 'How do I get a BMDC good standing certificate for Qatar?',
      answer:
        'BMDC’s Certificate of Good Standing page lists the documents: an application stating the reason, your bio-data with places and dates of work, a character certificate from a registered physician or a first-class gazetted officer, a copy of your valid full registration certificate, two attested photographs, a performance certificate from your last employer (in Bangladesh or abroad), the signed declaration, your MBBS or BDS original with a copy, your e-TIN certificate, the latest tax-return acknowledgement and your NID. Bangladeshi doctors pay online; BMDC’s fee structure lists BDT 3,000. If you work for the government, apply through your controlling officer. Since 1 August 2025 DHP accepts good standing only through PSV (Circular DHP/2025/08), so ask your PSV provider how it should be delivered before you apply.',
    },
    {
      question: 'Is the Diploma in Nursing Science and Midwifery accepted for a Qatar Registered Nurse licence?',
      answer:
        'It is the kind of diploma DHP’s rule describes, but DHP decides at evaluation. DHP’s Guidelines for Nurses accept a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)”, and the BNMC admission circular, as published, describes a three-year Diploma in Nursing Science and Midwifery for applicants who have passed SSC and HSC. Keep your internship completion record with the diploma and transcript.',
    },
    {
      question: 'Is FCPS from Bangladesh accepted for a specialist licence in Qatar?',
      answer:
        'It is assessed under DHP’s Category 3, because Bangladesh is not in DHP’s approved specialty qualification table. Category 3 asks for completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a training hospital, and a pass in the DHP qualifying exam.',
    },
    {
      question: 'Which PSV provider is cheapest for a Bangladeshi nurse with a diploma and a post-basic BSc?',
      answer:
        'With one council registration, AVS, on published prices: its QAR 900 nurse package covers up to two qualifications and five years of employment, against QAR 1,050 at QuadraBay (QAR 900 plus QAR 150 for the second qualification) and QAR 1,390 at DataFlow (QAR 990 plus QAR 400). The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Bangladeshi qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Bangladeshi qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| Diploma in Nursing Science and Midwifery (3 years) | Registered General Nurse | E – nurses, midwives, pharmacists | Starts after HSC; DHP wants 2 years' experience after registration, and the Prometric exam |
| BSc in Nursing (4 years) | Registered General Nurse | E | DHP wants 2 years' experience after registration, and the Prometric exam |
| Diploma + post-basic BSc in Nursing | Registered General Nurse | E | Two qualifications: included at AVS, an add-on at DataFlow and QuadraBay |
| MBBS (with internship) | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience and the qualifying exam |
| MBBS + FCPS / MD / MS | Specialist | A | Bangladeshi specialty degrees are assessed under DHP's Category 3 |
| BDS | Dentist | A | Good standing from BMDC, the same as doctors |
| B.Pharm / M.Pharm | Pharmacist | E | Ask the Pharmacy Council of Bangladesh for its good-standing process |
| Allied health (laboratory, radiography, physiotherapy and others) | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Packages A and B at all three providers, and AVS's nurse package, cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table, and the [PSV fees guide](/qatar/psv/fees) every price.

## What DHP's rules mean for Bangladeshi qualifications

**Nurses.** DHP's Guidelines for Nurses accept, for a Registered General Nurse, a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)" – or an associate degree with RGN licensure in the country of origin or graduation – followed by two years of clinical experience after registration and licensing, and the Prometric exam. The BNMC admission circular for 2025–26, as published, offers a four-year BSc in Nursing and a three-year Diploma in Nursing Science and Midwifery to applicants who have passed SSC and HSC, and college programme pages add a six-month internship after the diploma. Both match DHP's rows. DHP, not the PSV provider, decides equivalence at evaluation.

**Doctors.** DHP's Guidelines for Physicians ask general practitioners for a degree from a university in the IMED/FAIMER directory and a minimum six-year undergraduate medical degree (MBBS or equivalent), and say "The internship program can be considered for completion of the required undergraduate study years" when the programme is shorter. BMDC asks for your internship training certificate for full registration, so keep it with your MBBS degree. Overseas GPs need five years of experience and must pass the DHP qualifying exam; an exempting exam such as PLAB Part 1 or USMLE Step 2, verified through PSV under Circular DHP/2025/19, replaces the exam but not the experience. The [Prometric exam guide](/qatar/exam/prometric) lists the exempting exams.

**Specialists.** Bangladesh is not in DHP's approved specialty qualification table, so FCPS and Bangladeshi MD and MS degrees are assessed under **Category 3**: completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a hospital that runs postgraduate training, and a pass in the DHP qualifying exam. A UK Royal College membership or fellowship moves you to Category 1 only with a UK certificate of completion of specialist training (CCST/CCT), or to Category 2 if it was awarded before 1996; otherwise it is assessed under Category 3 too.

## Where does your certificate of good standing come from?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). You obtain the certificate in Bangladesh; your PSV provider verifies it; DHP sees the verified report. It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules.

**Doctors and dentists – BMDC.** BMDC's Certificate of Good Standing page lists what to bring:

- an application stating the reason, on BMDC's form, and the signed "Declaration by a Medical Practitioner / Dentist";
- your bio-data, with the places and duration of your work;
- a character certificate from a registered physician or a first-class gazetted officer;
- a copy of your valid BMDC full registration certificate;
- two recent passport photographs, attested on the back;
- a performance certificate from your last employer, in Bangladesh or abroad;
- your MBBS or BDS original certificate with a copy;
- your twelve-digit e-TIN certificate (with the QR code) and the acknowledgement of your latest tax return;
- your NID.

Bangladeshi doctors pay online, and BMDC's fee structure lists the Good Standing Certificate at **BDT 3,000** (it also lists a BDT 2,000 "Urgent Issuance Fee" without saying which services it applies to). If you are in government service, apply through your controlling officer. The page says you must bring the documents on the day the certificate is delivered. Make sure your full registration is current first – BMDC's fee structure lists renewal at BDT 2,000.

**Nurses and midwives – BNMC.** BNMC publishes "Application & Requirements for Good Professional Standing Certificate" in its forms list. That document, on the older Bangladesh Nursing Council letterhead, asks for:

- an application stating the reason, with documentary evidence, and your bio-data with places and duration of work;
- a character certificate from a registered nurse, giving the certifying nurse's registration number;
- a copy of your valid full registration certificate;
- two passport photographs attested on the back by the nursing superintendent or hospital authority;
- a performance certificate from your last employer, in Bangladesh or abroad;
- a fee of **Tk. 4,500** by bank draft or pay order payable to the Council.

Nurses in government service apply through their controlling officer. Because the document predates the Council's current name, confirm the current fee and form with BNMC (info@bnmc.gov.bd) before you pay, and ask your PSV provider how the certificate should reach it. BNMC's forms list also includes a verification form, a registration renewal form and an English-version application.

**Pharmacists.** Ask the Pharmacy Council of Bangladesh for its good-standing or verification process. **Allied health:** ask the body that registered you, and tell your PSV provider if any years of your work were not covered by a registration.

## Which Bangladeshi documents should you upload?

- **Degree or diploma certificate** – the final certificate, front and back.
- **Transcripts or mark sheets** – for every year, in the same file as the certificate.
- **Internship certificate** – doctors, with the MBBS degree; nurses, the internship record with the diploma.
- **Council registration** – your BMDC or BNMC registration certificate, with the latest renewal. DHP asks for licences "accompanying the required years of work experience".
- **Experience certificates** – one per employer, on letterhead, with exact start and end dates, your designation and an issue date. The [experience certificate guide](/qatar/psv/problems/experience-letter-format) has a sample.
- **Passport** – a clear, uncut copy.

You do not need attestation for these: DHP's guidelines say PSV replaces attestation. Anything in Bangla must be officially translated into English or Arabic and attached to a copy of the original.

## Names and spellings

Common name problems in Bangladeshi files:

- **Different transliterations** of the same name between SSC, HSC, university, council and passport records – for example Mohammad, Md., Muhammad.
- **"Md." or other abbreviations** on certificates and the full form in the passport.
- **A married name** in the passport and the maiden name on the degree.

Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name, and upload a document that links them, such as your NID or a marriage certificate. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case.

## How do Bangladeshi institutions handle verification requests?

The provider writes to your university or nursing institute, the council and your employers, and waits for each to answer. Tell the registrar's or examinations office, and each hospital's administration, that a request is coming; pay any fee they charge quickly; and give the provider a named contact with an official e-mail address. Name each institution in full, as on the certificate – including the awarding university if your college is affiliated to one. The [follow-up guide](/qatar/psv/problems/university-not-responding) has a schedule and e-mail templates.

## Before you travel

Emigration clearance is a separate process from DHP licensing. Check what applies to you with the [Bureau of Manpower, Employment and Training](http://www.bmet.gov.bd/) and with your employer, and deal only with licensed recruiting agencies.

## Checklist for Bangladeshi applicants

1. Package chosen to cover every qualification and the experience years DHP will count.
2. Final certificates, front and back, with transcripts in one file; internship certificate.
3. BMDC or BNMC registration current, with every renewal for the years DHP counts.
4. Specialists: Category 3 checked – structured training, exit exam, three years in a governmental or training hospital, qualifying exam.
5. Experience certificates with exact dates, designation and an issue date.
6. Every name variant listed, with a document linking them.
7. Good standing planned for the licensing stage – BMDC for doctors and dentists, BNMC for nurses – with the e-TIN and tax documents ready, and delivered the way your PSV provider asks.
`,
}
