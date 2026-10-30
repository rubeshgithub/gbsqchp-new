/**
 * Country guide: Nepal (Qatar DHP licensing and PSV for Nepali nurses, doctors, pharmacists and allied health).
 * Facts checked 30 Oct 2026 against: the Nepal Nursing Council's Verification Letter page (online application, NNC
 * approval, "Pay Additional Fee", non-refundable payment, documents incl. police report within 6 months, e-mail to
 * verification@nnc.org.np with the subject "License No - Applicant Name - Program"); the Nepal Medical Council's
 * "Application for Registration Status (Certificate of Goodstanding)" form (fields incl. dates of birth in AD and BS,
 * "Organization intended to submit registration status", scholarship/bond release letters; checklist incl. copy of
 * registration and payment voucher – the NMC site could not be opened directly on 30 Oct, so the form fields were read
 * from published copies of it and are described, not quoted at length); the Nepal Pharmacy Council's online Good Standing
 * Letter service (notice effective 2081/10/04 BS, as reported by CollegeNP); DHP Guidelines for Nurses (RGN, Assistant
 * Nurse and Midwife rows) and Physicians (six-year degree or equivalent and internship rule; GP 5 years and exam; specialty
 * categories – Nepal is not in the approved specialty qualification table, so Category 3 applies); Circular DHP/2025/08;
 * Circular DHP/2025/19. PCL Nursing's length and entry point (three years, after SEE) are reported from CTEVT admission
 * guides (Edusanjal, CollegeNP) and labelled as such. Emigration is only a pointer to the Department of Foreign Employment.
 * Package scopes and add-on prices come from the Fees records.
 */

export const nepalGuide = {
  title: 'Qatar DHP licence from Nepal: PSV and good standing for Nepali nurses, doctors and pharmacists',
  path: '/qatar/psv/countries/nepal',
  section: 'documents' as const,
  summary:
    'If you trained or worked in Nepal, your Qatar DHP application follows the same steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – and a few Nepali details decide how it goes. Nurses get a Verification Letter from the Nepal Nursing Council (NNC) through its online application and an e-mail to verification@nnc.org.np; doctors and dentists apply to the Nepal Medical Council (NMC); pharmacists apply online to the Nepal Pharmacy Council. Two Nepali details to check: PCL Nursing – reported to be a three-year Proficiency Certificate Level programme that starts after SEE (grade 10) – may not be assessed as a Registered General Nurse qualification, and dates in Bikram Sambat (BS) on Nepali documents have to be matched to the AD dates you enter. Below: the package that fits each qualification, where each certificate comes from, which documents to upload, and how to avoid the usual problems.',
  meta: {
    title: 'Qatar PSV for Nepali Nurses & Doctors: NNC, NMC Guide 2026',
    description:
      'Nepali nurses, doctors and pharmacists applying to Qatar DHP: NNC verification letter, NMC good standing, PCL vs BSc Nursing, BS dates and PSV packages.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-30',
  verifiedAgainst: [
    {
      label: 'Nepal Nursing Council – Verification Letter',
      url: 'https://nnc.org.np/page/verification',
    },
    {
      label: 'Nepal Medical Council – Application for Registration Status (Certificate of Good Standing)',
      url: 'https://www.nmc.org.np/uploads/downloads/7iUhi9IxDJ39OOKerB5hCQYk6_Good%20standing%20form%202024%20October.pdf',
    },
    {
      label: 'CollegeNP – Nepal Pharmacy Council online Good Standing Letter and NOC services',
      url: 'https://www.collegenp.com/news/online-services-for-good-standing-letter-and-noc-nepal-pharmacy-council',
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
      label: 'Department of Foreign Employment, Nepal',
      url: 'https://dofe.gov.np/',
    },
  ],
  changeLog: [
    {
      date: '2026-10-30',
      note: 'First published. Nursing verification process from the Nepal Nursing Council’s own page; qualification rules from DHP’s Guidelines for Nurses and Physicians. Independent fact-check applied (9 findings).',
    },
  ],
  faqs: [
    {
      question: 'Is PCL Nursing accepted for a Qatar Registered Nurse licence?',
      answer:
        'DHP decides at evaluation. Its Guidelines for Nurses accept, for a Registered General Nurse, a four-year bachelor’s degree in nursing, a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)”, or an associate degree with RGN licensure in the country of origin or graduation. PCL Nursing is reported to be a three-year programme that starts after SEE (grade 10), and DHP’s Assistant Nurse scope lists a “Diploma in nursing with course duration of 3 years, after completion of 9 years of general education”. If PCL is your only nursing qualification, ask DHP or your employer which scope it will be assessed under before you pay for PSV. A BSc Nursing, or a Bachelor of Nursing on top of PCL, is the safer route to the Registered General Nurse scope – but DHP still decides.',
    },
    {
      question: 'How do I get my Nepal Nursing Council verification letter for Qatar?',
      answer:
        'Apply online at application.nnc.org.np, wait for NNC’s approval, pay the fee through “Pay Additional Fee”, and once “Payment Completed” shows in your payment history, e-mail the documents to verification@nnc.org.np with the subject “License No - Applicant Name - Program”. Since 1 August 2025 DHP accepts good standing only through PSV (Circular DHP/2025/08), so ask your PSV provider which destination address to give NNC – and confirm that NNC’s Verification Letter is what DHP needs as good standing – before you apply.',
    },
    {
      question: 'My certificates show dates in Bikram Sambat. What do I enter?',
      answer:
        'Enter the AD (Gregorian) date wherever a portal asks for a date, converted carefully from the BS date on the document – a date that is a day or a month out can be reported as a Discrepancy. If a certificate shows only the BS date, keep a note of the conversion and use the same AD date in your CV, the PSV form and DHP’s application. The Nepal Medical Council’s own good-standing form asks for your date of birth in both AD and BS.',
    },
    {
      question: 'Which PSV provider is cheapest for a nurse with PCL Nursing and a Bachelor of Nursing?',
      answer:
        'With one council licence, AVS, on published prices: its QAR 900 nurse package covers up to two qualifications and five years of employment, against QAR 1,050 at QuadraBay (QAR 900 plus QAR 150 for the second qualification) and QAR 1,390 at DataFlow (QAR 990 plus QAR 400). NNC appears to issue a licence per programme, so if you hold separate PCL and BN licences, QuadraBay becomes cheapest: about QAR 1,100, against QAR 1,150 at AVS and QAR 1,690 at DataFlow. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Nepali qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Nepali qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| BSc Nursing (4 years) | Registered General Nurse | E – nurses, midwives, pharmacists | DHP wants 2 years' clinical experience after registration, and the Prometric exam |
| PCL Nursing | Registered General Nurse or Assistant Nurse – DHP decides | E | PCL is reported to start after grade 10; DHP's diploma rule counts from 12 years of school |
| PCL Nursing + Bachelor of Nursing (BN / BNS) | Registered General Nurse or Assistant Nurse – DHP decides | E | Check the BN's length; two qualifications are included at AVS, an add-on at DataFlow and QuadraBay |
| MBBS (with internship) | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience and the qualifying exam |
| MBBS + MD / MS | Specialist | A | Nepali specialty degrees are assessed under DHP's Category 3 |
| BDS / MDS | Dentist | A | Good standing from the Nepal Medical Council |
| B.Pharm | Pharmacist | E | Good-standing letter from the Nepal Pharmacy Council |
| Allied health (laboratory, radiography, physiotherapy and others) | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Packages A and B at all three providers, and AVS's nurse package, cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table, and the [PSV fees guide](/qatar/psv/fees) every price.

## What DHP's rules mean for Nepali qualifications

**Nurses.** DHP's Guidelines for Nurses accept, for a Registered General Nurse, a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)" – or an associate degree with RGN licensure in the country of origin or graduation – followed by two years of clinical experience after registration and licensing, and the Prometric exam. A BSc Nursing matches the first. PCL Nursing is the one to check: college and admission guides describe it as a three-year CTEVT programme that students join after SEE (grade 10), and DHP's Assistant Nurse scope lists a "Diploma in nursing with course duration of 3 years, after completion of 9 years of general education". A post-basic Bachelor of Nursing on top of PCL adds a degree, but DHP's bachelor's row names a four-year degree – check the length of yours. DHP, not the PSV provider, decides equivalence at evaluation – so if you trained through PCL, ask DHP or your employer which scope your qualifications will be assessed under before you pay for PSV.

**Midwives.** DHP's Midwife scope asks for a bachelor's degree in midwifery or equivalent, or a bachelor's degree in nursing plus a recognised postgraduate midwifery programme, with three years as a midwife after registration.

**Doctors.** DHP's Guidelines for Physicians ask general practitioners for a degree from a university in the IMED/FAIMER directory and a minimum six-year undergraduate medical degree (MBBS or equivalent), and say "The internship program can be considered for completion of the required undergraduate study years" when the programme is shorter – so keep your internship completion certificate with your MBBS degree. Overseas GPs need five years of experience and must pass the DHP qualifying exam; an exempting exam such as PLAB Part 1 or USMLE Step 2, verified through PSV under Circular DHP/2025/19, replaces the exam but not the experience. The [Prometric exam guide](/qatar/exam/prometric) lists the exempting exams.

**Specialists.** Nepal is not in DHP's approved specialty qualification table, so Nepali MD and MS degrees are assessed under **Category 3**: completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a hospital that runs postgraduate training, and a pass in the DHP qualifying exam.

## Where does your certificate of good standing come from?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). You obtain the certificate in Nepal; your PSV provider verifies it; DHP sees the verified report. It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules.

**Nurses – Nepal Nursing Council.** NNC's Verification Letter page sets out an online process:

1. Sign up at [application.nnc.org.np](https://application.nnc.org.np/Account/Login), link your licence under *My License*, complete your profile – a photo, your signature and colour scans of your citizenship certificate and licence, front and back – and submit; then wait for NNC's approval. If you already have an online account, go straight to *My License* and *Pay Additional Fee*.
2. Pay the fee online through *Pay Additional Fee* once the application is approved. Only a payment that shows "Payment Completed" counts, physical vouchers are not valid, and payments are not refunded.
3. E-mail all the documents, clearly scanned, in a single message to **verification@nnc.org.np**, with the subject "License No - Applicant Name - Program".

The documents NNC lists are: an application to the Registrar with your current address and the full details of the destination (institution, address, country) and the purpose; the requesting institution's verification form, if it has one; your licence certificate, front and back, valid, as a colour copy; your Registered Nursing level transcript and character certificate; your passport bio-data page; and a police report issued within the last six months. The page calls this a Verification Letter; because good standing now reaches DHP only through PSV, ask your PSV provider which destination and form to give NNC, and confirm the letter is what DHP needs as good standing, before you apply.

**Doctors and dentists – Nepal Medical Council.** NMC issues the certificate on its "Application for Registration Status (Certificate of Goodstanding)" form. The form asks for your NMC registration number, the dates of your temporary and permanent registration, your highest qualification and specialty, your current employer, the reason for the application, the organisation you will submit it to, and whether you hold any study scholarship or bond (if so, you attach the release letters); its checklist includes a copy of your registration and the bank payment voucher. Download the current form from [nmc.org.np](https://www.nmc.org.np/), and ask your PSV provider what to write as the organisation (normally DHP, Qatar).

**Pharmacists – Nepal Pharmacy Council.** CollegeNP reports that the Council runs an online Good Standing Letter service: choose *Apply for Good Standing Letter* on its website, register with your mobile number and a one-time password, complete the form on your dashboard and submit it for review. Pay only into the Council's official bank account.

**Allied health – Nepal Health Professional Council.** Ask the council you are registered with for its good-standing or verification letter process, and tell your PSV provider if any years of your work were not covered by a registration.

## Which Nepali documents should you upload?

- **Degree or diploma certificate** – the final certificate, front and back.
- **Transcripts or mark sheets** – for every year of the programme, in the same file as the certificate.
- **Internship completion certificate** – doctors, with the MBBS degree.
- **Council registration** – your NNC licence (front and back), NMC registration or Pharmacy Council registration, with the latest renewal. DHP asks for licences "accompanying the required years of work experience".
- **Experience certificates** – one per employer, on letterhead, with exact start and end dates, your job title and an issue date. The [experience certificate guide](/qatar/psv/problems/experience-letter-format) has a sample.
- **Passport** – a clear, uncut copy.

You do not need attestation for these: DHP's guidelines say PSV replaces attestation. Anything in Nepali must be officially translated into English or Arabic and attached to a copy of the original.

## Bikram Sambat dates and name differences

Two things trip up Nepali files:

- **BS and AD dates.** Many Nepali certificates and council documents carry Bikram Sambat dates. Provider forms and DHP's application ask for dates in the Gregorian (AD) calendar, as far as we have seen. Convert each one carefully, and use the same AD date everywhere – on the PSV form, in your CV and in DHP's application. A converted date that is off by a day or a month may be queried, or reported as a Discrepancy.
- **Names.** For example, a middle name such as "Kumari" or "Bahadur" on some documents and not others, a surname spelled differently, or a married name in the passport. Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name, and upload a document that links them. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case.

## How do Nepali institutions handle verification requests?

The provider writes to your college or university, council and employers and waits for each to answer – that wait is most of the time PSV takes. Tell the examinations or records section of the awarding university (and your college, if it is affiliated) that a request is coming, and ask each hospital's HR office the same. Pay any fee they charge quickly, and give the provider a named contact with an official e-mail address. The [follow-up guide](/qatar/psv/problems/university-not-responding) has a schedule and e-mail templates.

## Before you travel

Working abroad from Nepal is a separate process from DHP licensing. Labour permits for foreign employment are handled by Nepal's [Department of Foreign Employment](https://dofe.gov.np/); check what applies to you there and with your employer, and deal only with licensed recruiting agencies.

## Checklist for Nepali applicants

1. Package chosen to cover every qualification and the experience years DHP will count.
2. Nurses on PCL: the scope DHP will assess you under asked about before paying.
3. Final certificates, front and back, with transcripts in one file; internship certificate for doctors.
4. Council registration current, with every renewal for the years DHP counts.
5. Experience certificates with exact dates, title and an issue date.
6. Every BS date converted once, carefully, and used the same way everywhere.
7. Every name variant listed, with a document linking them.
8. Good standing planned for the licensing stage – NNC Verification Letter, NMC certificate or Pharmacy Council letter – and delivered the way your PSV provider asks.
`,
}
