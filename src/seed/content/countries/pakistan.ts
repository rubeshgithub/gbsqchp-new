/**
 * Country guide: Pakistan (Qatar DHP licensing and PSV for Pakistani doctors, nurses, pharmacists and allied health).
 * Facts checked 23 Oct 2026 against: PM&DC's FAQ (good standing applied for on the portal dashboard, PKR 7,000; one-year
 * house job for a full licence; completion certificate from the teaching hospital); PM&DC Registration Regulations 2023
 * (regulations 9 and 12 – one-year house job before full/permanent registration; 25 – good standing "for six months",
 * at least six months of good standing, no professional-misconduct conviction; 26 – one certificate per foreign regulatory
 * authority, specified by the applicant; renewal of licence 5 years); PNMC's Verification of Registration/Good Standing page
 * (form, letter with the receiving body's address, PKR 1,000 in Pakistan / PKR 10,000 for foreign countries) and its
 * admission-criteria and degree-programme pages (Post RN BSN/BSM 2 years after a diploma; Generic BSN 4 years after FSc;
 * MSN Category I "10 Years of schooling" + "03 Years Diploma in Nursing"); Pharmacy Council of Sindh (registers Category A
 * pharmacists under section 25(a) of the Pharmacy Act 1967 and issues letters of good standing); DHP Guidelines for
 * Nurses (RGN and Midwife rows), Physicians (six-year degree or equivalent and internship rule; GP 5 years; specialty
 * categories – Pakistan is not in the approved specialty qualification table, so Category 3 applies; Category 3 experience
 * in governmental/semi-governmental or training hospitals) and AHP; Circular DHP/2025/08; Circular DHP/2025/19; BE&OE's
 * emigrant-protection page; CLEAR (4 Feb 2026) on the Allied Health Professionals Council registration directive.
 * Independent fact-check 23 Oct 2026: 13 findings applied (UK row/CCST, MCPS 2 years, exam replaces the exam not the
 * experience, Assistant Nurse diploma row, fee-schedule discrepancy, BE&OE NOC wording). Package scopes and add-on prices
 * come from the Fees records.
 */

export const pakistanGuide = {
  title: 'Qatar DHP licence from Pakistan: PSV, PMDC and PNMC good standing for Pakistani doctors and nurses',
  path: '/qatar/psv/countries/pakistan',
  section: 'documents' as const,
  summary:
    'If you trained or worked in Pakistan, your Qatar DHP application follows the same steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – but a few Pakistani details decide how it goes. Doctors and dentists get their certificate of good standing from the Pakistan Medical and Dental Council (PM&DC) through its online portal; nurses get theirs from the Pakistan Nursing and Midwifery Council (PNMC); pharmacists from the provincial pharmacy council that registered them. Pakistani specialist qualifications such as FCPS are not on DHP’s approved specialty list, so they are assessed under DHP’s Category 3, with its experience and exam rules. Below: the package that fits each Pakistani qualification, where each certificate comes from, which documents to upload, and the problems Pakistani files most often run into.',
  meta: {
    title: 'Qatar PSV for Pakistani Doctors & Nurses: PMDC, PNMC 2026',
    description:
      'Pakistani doctors, nurses and pharmacists applying to Qatar DHP: PMDC and PNMC good standing, house job, FCPS Category 3, diploma nurses, and PSV packages.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'Pakistan Medical and Dental Council – FAQs (good standing, house job, fees)',
      url: 'https://pmdc.pk/Home/FAQs',
    },
    {
      label: 'PM&DC – Registration Regulations 2023',
      url: 'https://pmdc.pk/Documents/law/Registration%20Regulations%202023.pdf',
    },
    {
      label: 'PNMC – Verification of Registration / Good Standing Certificate',
      url: 'https://pnmc.gov.pk/verification-registration-2/',
    },
    {
      label: 'PNMC – degree programmes (Generic BSN, Post RN BSN, MSN)',
      url: 'https://pnmc.gov.pk/degree-programs/',
    },
    {
      label: 'Pharmacy Council of Sindh (registration and letters of good standing)',
      url: 'https://pcsindh.com/',
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
      label: 'DHP – Guidelines for Allied Health Professions',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20AHP.pdf',
    },
    {
      label: 'Circular DHP/2025/08 – certificates of good standing only through PSV',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'Bureau of Emigration & Overseas Employment – emigrant protection',
      url: 'https://beoe.gov.pk/how-to-get-emigrants-protection',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Good-standing rules from PM&DC’s Registration Regulations 2023 and FAQ and from PNMC’s verification page; qualification rules from DHP’s Guidelines for Physicians and Nurses.',
    },
    { date: '2026-10-27', note: 'Linked the new certificate of good standing guide. No facts changed.' },
  ],
  faqs: [
    {
      question: 'Is FCPS accepted for a specialist licence in Qatar?',
      answer:
        'It can be, but under DHP’s Category 3. DHP’s Guidelines for Physicians say qualifications “from countries other than the below mentioned table will be considered under Category 3”, and Pakistan is not in that table. Category 3 asks for completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a training hospital, and a pass in the DHP qualifying exam. A UK Royal College membership or fellowship moves you to Category 1 only with a UK certificate of completion of specialist training (CCST/CCT) – for GPs, MRCGP with the UK certificate of completion of training and GMC registration as a GP – or to Category 2 if it was awarded before 1996; otherwise it is assessed under Category 3 too. MCPS, a two-year programme, may not meet Category 3’s three-year training minimum – ask DHP.',
    },
    {
      question: 'Do my Pakistani certificates need HEC, IBCC or Ministry of Foreign Affairs attestation for the DHP licence?',
      answer:
        'Not for DHP licensing. DHP’s guidelines for physicians, nurses and allied health say that verification by an approved PSV provider replaces attestation of certificates. Your employer or the visa process may ask for attested copies for their own purposes – ask your recruiter in writing exactly which documents need it before you pay for attestation.',
    },
    {
      question: 'How do I get my PMDC good standing certificate for Qatar?',
      answer:
        'Apply on the PM&DC online portal: its FAQ says to go to your dashboard, select the good-standing application, attach the documents and pay; the fee it lists is PKR 7,000 (the fee schedule in the 2023 Regulations says PKR 5,000), and the portal shows the current fee when you pay. PM&DC’s Registration Regulations 2023 say a certificate is issued “for six months”, only to a practitioner with at least six months of good standing, and that “One certificate of good standing shall be issued for one foreign regulatory authority only, which shall be specified by the applicant” – so name Qatar’s DHP. Since 1 August 2025 DHP accepts good standing only through PSV (Circular DHP/2025/08), so ask your PSV provider how it wants the certificate delivered before you apply.',
    },
    {
      question: 'Which PSV provider is cheapest for a Pakistani nurse with a nursing diploma, a midwifery diploma and a Post RN BSN?',
      answer:
        'On published prices, QuadraBay, if all three qualifications go through PSV and your registration and the last three years of employment are all that need verifying: QAR 900 plus QAR 200 for two extra documents, so about QAR 1,100. AVS covers two qualifications in its QAR 900 nurse package and charges QAR 300 for the third (QAR 1,200); DataFlow’s Package E covers one, so it is QAR 990 plus QAR 400 for each extra qualification (QAR 1,790). AVS’s nurse package covers five years of employment against three at the other two, which can change the answer if DHP needs older experience verified. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Pakistani qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Pakistani qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| MBBS (with house job) | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience and the qualifying exam |
| MBBS + FCPS / MS / MD | Specialist | A | Pakistani specialty degrees are assessed under DHP's Category 3 |
| BDS / MDS | Dentist | A | Good standing from PM&DC, the same as doctors |
| Generic BSN (4 years) | Registered General Nurse | E – nurses, midwives, pharmacists | DHP wants 2 years' clinical experience after registration |
| Diploma in Nursing + Diploma in Midwifery | Registered General Nurse or Assistant Nurse – DHP decides | E | Check the diploma against DHP's rule of 3 years after 12 years of school |
| Diploma(s) + Post RN BSN | Registered General Nurse or Assistant Nurse – DHP decides | E | Three qualifications need an add-on at every provider; two fit inside AVS's package |
| Pharm-D / B.Pharm | Pharmacist | E | Good standing from your provincial pharmacy council |
| BS in allied health (physiotherapy, medical lab, radiology and others) | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Packages A and B at all three providers, and AVS's nurse package, cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table, and the [PSV fees guide](/qatar/psv/fees) every price.

## What DHP's rules mean for Pakistani degrees

**Doctors.** DHP's Guidelines for Physicians ask general practitioners for a degree from a university in the IMED/FAIMER directory and a minimum six-year undergraduate medical degree (MBBS or equivalent), and say "The internship program can be considered for completion of the required undergraduate study years" when the programme is shorter. PM&DC requires a one-year house job before full registration (its Registration Regulations 2023 and its FAQ), so keep the house-job completion certificate from the teaching hospital with your MBBS degree – it is part of how your training is counted. Overseas GPs need five years of experience and must pass the DHP qualifying exam; an exempting exam – PLAB Part 1, USMLE Step 2 and the others in Circular DHP/2025/19, verified through PSV – replaces the exam but not the experience. The [Prometric exam guide](/qatar/exam/prometric) lists them.

**Specialists.** DHP's approved specialty qualification list sorts qualifications into Categories 1 and 2 by country, and Pakistan is not on it, so FCPS and Pakistani MS and MD degrees are assessed under **Category 3**:

- a certificate of completion of structured postgraduate training of at least three years, with a passed exit or board exam;
- three years of clinical experience after the postgraduate degree, from a governmental or semi-governmental hospital or a hospital that runs postgraduate training programmes – DHP's guidelines say overseas physicians whose experience is "not from Governmental Institutions/Hospitals or training hospitals (for category 3)" are not eligible;
- a pass in the DHP qualifying exam.

MCPS is a two-year programme, so it may not meet Category 3's three-year training minimum – ask DHP before you apply on it.

A membership or fellowship of a UK Royal College is assessed under DHP's UK row instead, where Category 1 also needs the UK certificate of completion of specialist training (CCST or equivalent) and Category 2 covers memberships and fellowships awarded before 1996. A membership or fellowship without the UK completion certificate, awarded after 1996, matches neither row and is assessed under Category 3 as well – and DHP's guidelines add that a Category 1 or 2 qualification granted on the strength of an equivalence to a qualification outside those categories is also treated as Category 3.

**Nurses.** DHP's Guidelines for Nurses accept, for a Registered General Nurse, a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)", each followed by two years of clinical experience after registration and licensing. PNMC's Generic BSN is a four-year degree after FSc, which matches the first. The older three-year diploma route is the one to check: PNMC's own MSN entry criteria describe it as "10 Years of schooling (Matric/FA/F.Sc.)" followed by "03 Years Diploma in Nursing", and DHP's diploma rule counts from 12 years of school. A Post RN BSN is a two-year degree on top of the diploma, not the four years DHP's bachelor's row states. DHP's Assistant Nurse scope, for its part, lists a "Diploma in nursing with course duration of 3 years, after completion of 9 years of general education". DHP, not the PSV provider, decides equivalence at evaluation, so if you trained through the diploma route ask DHP or your employer which scope your diploma and Post RN BSN will be assessed under before you pay for PSV.

**Midwives.** DHP's Midwife scope asks for a bachelor's degree in midwifery or equivalent, or a bachelor's degree in nursing plus a recognised postgraduate midwifery programme, with three years as a midwife after registration. A one-year diploma in midwifery on its own may not meet that – ask before you apply in that scope.

## Where does your certificate of good standing come from?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). You obtain the certificate in Pakistan; your PSV provider verifies it; DHP sees the verified report. It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules and timing, and the [good-standing article](/articles/qatar-good-standing-certificates-through-psv) explains the August 2025 change.

**Doctors and dentists – PM&DC.** Apply through the PM&DC online portal: its FAQ says to go to your dashboard, select the good-standing application form, attach the documents and pay, and lists the fee as PKR 7,000 (the fee schedule in the 2023 Regulations says PKR 5,000; the portal shows the current fee when you pay). PM&DC's Registration Regulations 2023 add three rules:

- the certificate is issued "for six months";
- you must have "at least six months of good standing with the Council" and no conviction for professional misconduct;
- "One certificate of good standing shall be issued for one foreign regulatory authority only, which shall be specified by the applicant" – name Qatar's Department of Healthcare Professions, and do not reuse a certificate issued for another country.

Make sure your PM&DC licence itself is current: the Regulations' fee schedule lists a first full licence for two years and renewals for five, and the certificate shows the date your registration is valid until – renew first if it is close.

**Nurses and midwives – PNMC.** PNMC's Verification of Registration / Good Standing page lists what to send: the application form, a letter, verification form or e-mail print showing the full address of the council, regulatory body or organisation that is to receive it, and copies of your PNMC registration card and all your nursing and midwifery diplomas and degrees. The processing fee is PKR 10,000 for foreign countries (PKR 1,000 within Pakistan). Because the certificate now reaches DHP only through PSV, ask your PSV provider which address and request letter to give PNMC before you apply.

**Pharmacists – your provincial pharmacy council.** Pharmacists are registered by provincial pharmacy councils: the Pharmacy Council of Sindh, for example, says it registers Category A pharmacists under section 25(a) of the Pharmacy Act 1967, verifies registration certificates and "issues Letter of Good Standing for the registered Pharmacists". Ask the council that registered you – for example Punjab, Sindh, Khyber Pakhtunkhwa or Balochistan – for its process.

**Allied health.** DHP's allied health guidelines ask for licences "(if applicable)". Registration with Pakistan's Allied Health Professionals Council is new – CLEAR reported in February 2026 a government directive requiring allied health workers to register by 30 June 2026 – so if you are still working in Pakistan, check your registration status, and expect that your earlier years of work may not be covered by any registration. If they are not, say so to your PSV provider before you pay, and ask what it will verify instead.

## Which Pakistani documents should you upload?

- **Degree or diploma certificate** – the final certificate, front and back. DataFlow's DHP checklist asks for the "Front and reverse side of degree certificates"; a provisional certificate may not be accepted, so ask first.
- **Transcripts or detailed marks certificates** – DataFlow's checklist asks for "mark sheets/Transcript of Records" with every qualification. We suggest uploading all years in the same file as the degree.
- **House-job completion certificate** – doctors, with the MBBS degree (see above).
- **Postgraduate training and exit-exam certificates** – specialists, including the certificate of completion of structured training that Category 3 asks for.
- **Council registration** – your PM&DC licence, PNMC registration card or pharmacy council registration, with the latest renewal. DHP asks for licences "accompanying the required years of work experience".
- **Experience certificates** – one per employer, on letterhead, with exact dates, designation and an issue date. For specialists, the letter should make clear that the hospital is governmental, semi-governmental or a training hospital.
- **Passport** – a clear, uncut copy, with any name-change document.

You do not need HEC, IBCC or Ministry of Foreign Affairs attestation for these: DHP's guidelines say PSV replaces attestation. Anything in Urdu must be officially translated into English or Arabic and attached to a copy of the original.

## Names: "son of", "daughter of" and spellings

Common name problems in Pakistani files:

- **A father's or husband's name** ("S/O", "D/O", "W/O") on certificates and not in the passport, or the other way round.
- **Different transliterations** of the same name – Muhammad, Mohammad, Mohammed – between school, university, council and passport records.
- **A married name** in the passport and the maiden name on the degree.

Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name (DataFlow's form asks you to "give your name in full (as per your Passport/ National ID) and recognized alternatives where applicable"), and upload a document that links them – a marriage certificate, a NADRA record or an affidavit. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case.

## How do Pakistani institutions handle verification requests?

The provider writes to your university, council and employers and waits for each to answer – that wait is most of the time PSV takes. Three things help:

1. **Tell the university and hospitals first.** Find the office that answers verification requests – usually the university's examinations or verification section – and warn them a request is coming. Ask the HR office of each hospital the same.
2. **Pay any verification fee quickly.** DataFlow's reference kit says "If your issuing authority applies verification fees, the amount will be added to the total."
3. **Name both institutions in full.** If your college was affiliated to a university, give the college's full name and the awarding university's; DataFlow's form says "Do not use abbreviated terms or initials".

The [timeline guide](/qatar/psv/timeline) sets out how long each step takes and when to escalate, and the [status guide](/qatar/psv/status) shows where to find the document holding things up.

## Before you travel

Emigration from Pakistan is a separate process from DHP licensing. The Bureau of Emigration & Overseas Employment registers emigrants with the Protector of Emigrants, either directly or through a licensed Overseas Employment Promoter; for direct registration, its document list includes a copy of an NOC for ex-servicemen, government servants and nurses, from the relevant federal or provincial health authority. Check what applies to you on [beoe.gov.pk](https://beoe.gov.pk/how-to-get-emigrants-protection) and with your employer, and deal only with licensed promoters.

## Checklist for Pakistani applicants

1. Package chosen to cover every qualification and the experience years DHP will count.
2. Final degree certificate, front and back, with transcripts in one file; house-job certificate for doctors.
3. Specialists: category checked – for FCPS, MS or MD that is Category 3: structured training certificate, exit exam, three years in a governmental or training hospital, qualifying exam.
4. Nurses on the diploma route: equivalence asked about before paying.
5. PM&DC, PNMC or pharmacy council registration current, with every renewal for the years DHP counts.
6. Experience certificates with exact dates, designation and an issue date.
7. Every name variant listed, with a document linking them.
8. Good standing planned for the licensing stage – PM&DC (issued for one named authority), PNMC or your provincial pharmacy council – and delivered the way your PSV provider asks.
`,
}
