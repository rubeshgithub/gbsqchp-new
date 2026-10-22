/**
 * Country guide: India (Qatar DHP licensing and PSV for Indian nurses, doctors and allied health).
 * Facts checked 22 Oct 2026 against: DHP Guidelines for Nurses (RGN qualification and experience rows) and for
 * Physicians (six-year degree "or equivalent", internship rule, GP experience for overseas applicants, IMED/FAIMER);
 * the National Medical Commission's Certificate of Good Standing application form (issuer, routing through the State
 * Medical Council, fees, e-mail delivery, six-month validity) and its doctor portal; the Kerala Nurses and Midwives
 * Council website (good standing / verification guidelines and fee notice); DataFlow's DHP offline form and reference
 * kit; Circular DHP/2025/08; the AHP guidelines ("if applicable" licence wording). Package scopes and add-on prices
 * come from the Fees records. Emigration is mentioned only as a pointer to eMigrate – the rules for nurses have changed
 * since 2015 and are not summarised here.
 */

export const indiaGuide = {
  title: 'Qatar DHP licence from India: PSV, good standing and documents for Indian nurses and doctors',
  path: '/qatar/psv/countries/india',
  section: 'documents' as const,
  summary:
    'If you trained or worked in India, your Qatar DHP application runs on the same three steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – but the Indian parts of your file decide how smoothly it goes: which council issues your certificate of good standing, how your university handles verification requests, and whether the names on your mark sheets match your passport. Doctors can get a certificate of good standing from the National Medical Commission, applied for through their State Medical Council; nurses usually get theirs from their State Nursing Council. Below: the package that fits each Indian qualification, where each certificate comes from, the Indian documents to upload, and the problems Indian files most often run into.',
  meta: {
    title: 'Qatar PSV for Indian Nurses & Doctors: DataFlow Guide 2026',
    description:
      'Indian nurses, doctors and allied health applying to Qatar DHP: NMC and nursing council good standing, mark sheets, initials, and which PSV package fits.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-22',
  verifiedAgainst: [
    {
      label: 'National Medical Commission – Certificate of Good Standing application form',
      url: 'https://nmc.org.in/storage/various-forms/FT6mp5HT5PjbUq0Mfv2gHhLzcBEMtwxctn4OBDST.pdf',
    },
    {
      label: 'National Medical Commission – doctor portal (good standing certificates)',
      url: 'https://application.nmc.org.in/login',
    },
    {
      label: 'Kerala Nurses and Midwives Council',
      url: 'https://knmc.org/',
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
      label: 'DHP – Guidelines for Allied Health Professions',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20AHP.pdf',
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
      note: 'First published. Good-standing process for doctors from the NMC application form; nursing qualification rules from DHP’s Guidelines for Nurses.',
    },
  ],
  faqs: [
    {
      question: 'Do my Indian certificates need MEA or embassy attestation for the DHP licence?',
      answer:
        'Not for DHP licensing. DHP’s guidelines for physicians, nurses and allied health all say that verification by an approved PSV provider replaces attestation of certificates. Your employer or the visa process may ask for attested copies for other purposes – that is separate from the licence, so ask your recruiter in writing exactly which documents need it before you pay an attestation agent.',
    },
    {
      question: 'Is a GNM diploma accepted for a Qatar nursing licence?',
      answer:
        'DHP’s Guidelines for Nurses accept a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)” for a Registered General Nurse, as well as a four-year bachelor’s degree, each followed by two years of clinical experience after registration and licensing. Check that your GNM certificate or transcript shows a programme that meets that length; DHP decides equivalence at evaluation, not the PSV provider.',
    },
    {
      question: 'How do I send my NMC good standing certificate for Qatar?',
      answer:
        'Through PSV. Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08), so do not have it sent to DHP. The NMC form offers delivery by e-mail to you (₹2,360 including GST) or to a foreign authority (₹8,900 including GST). Ask your PSV provider which it needs before you pay the NMC.',
    },
    {
      question: 'Which PSV provider is cheapest for an Indian nurse with GNM and Post Basic B.Sc?',
      answer:
        'With one council registration, AVS, on published prices: its QAR 900 nurse package covers up to two qualifications and five years of employment, so both are included – against QAR 1,050 at QuadraBay (QAR 900 plus QAR 150 for the second qualification) and QAR 1,390 at DataFlow (QAR 990 plus QAR 400). Add a second state registration and QuadraBay becomes cheapest: about QAR 1,100, against QAR 1,150 at AVS and QAR 1,690 at DataFlow. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Indian qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Indian qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| B.Sc Nursing | Registered General Nurse | E – nurses, midwives, pharmacists | DHP wants 2 years' clinical experience after registration |
| GNM diploma | Registered General Nurse | E | DHP's diploma rule is 3 years after 12 years of school |
| GNM + Post Basic B.Sc Nursing | Registered General Nurse | E | Two qualifications: included at AVS, an add-on at DataFlow and QuadraBay |
| MBBS | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience |
| MBBS + MD / MS / DNB | Specialist | A | Package A covers up to two qualifications |
| BDS / MDS | Dentist | A | Good standing: usually your State Dental Council – confirm |
| B.Pharm / Pharm.D | Pharmacist | E | Good standing: usually your State Pharmacy Council – confirm |
| BPT, BMLT, B.Sc radiology and similar | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Package A and the AVS nurse and allied health packages cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table, and the [PSV fees guide](/qatar/psv/fees) every price.

Two DHP rules matter for Indian degrees. For nurses, DHP's Guidelines for Nurses accept a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)". For doctors, the Guidelines for Physicians ask for a degree from a university listed in the IMED/FAIMER directory and a minimum six-year undergraduate degree "or equivalent", and say "The internship program can be considered for completion of the required undergraduate study years" when the programme is shorter – so keep your internship completion certificate with your MBBS degree.

## Where does your certificate of good standing come from?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). You obtain the certificate in India; your PSV provider verifies it; DHP sees the verified report. It is usually needed at the licensing stage and must be no more than six months old then – the [documents guide](/qatar/psv/documents) explains the timing.

**Doctors (MBBS and above):** one route is a certificate from the **National Medical Commission (NMC)**, issued on the recommendation of your State Medical Council; some State Medical Councils also issue certificates of their own. Ask your council and your PSV provider which one to use. The NMC's application form says:

- the application "is to be forwarded to this office through the Registrar of the State Medical Council", which certifies that you hold current registration and that no disciplinary proceedings were taken or are in progress;
- you attach attested copies of your permanent registration certificate and your MBBS degree;
- doctors registered with the erstwhile Medical Council of India can also apply online, through the NMC's [doctor portal](https://application.nmc.org.in/login);
- the fee is ₹2,000 + 18% GST; ₹2,360 including GST for a certificate e-mailed to you, or ₹8,900 including GST for one sent to a foreign authority;
- "The digitally signed certificates would be sent by e-mail", and the certificate is "valid upto six months".

Because DHP no longer takes certificates directly, ask your PSV provider which delivery it needs before you pay the NMC.

**Nurses and midwives:** usually your **State Nursing Council** – the council you are registered with – issues good-standing and verification certificates. The Kerala Nurses and Midwives Council, for example, publishes guidelines for obtaining a good-standing certificate and a verification certificate, and a fee notice, on [knmc.org](https://knmc.org/). If you were registered in more than one state during the years DHP counts, ask your PSV provider whether it needs a certificate from each council.

**Dentists and pharmacists:** ask the State Dental Council or State Pharmacy Council you are registered with for its good-standing process.

**Allied health:** DHP's allied health guidelines ask for licences "(if applicable)". If your profession had no council registration where you worked, say so to your PSV provider before you pay, and ask what it will verify instead.

## Which Indian documents should you upload?

The names on Indian certificates differ from the generic lists, so match them carefully:

- **Degree or diploma certificate** – the final certificate, front and back. DataFlow's DHP checklist asks for the "Front and reverse side of degree certificates". If you hold only a provisional certificate, ask the provider whether it will accept it before you pay.
- **Mark sheets or consolidated transcript** – DataFlow's checklist asks for "mark sheets/Transcript of Records" with every qualification. We suggest uploading all years in the same file as the degree.
- **Internship completion certificate** – doctors, with the MBBS degree (see above).
- **Council registration certificate** – and the latest renewal if your council registers for a fixed period. DHP asks for licences "accompanying the required years of work experience", so include each state registration you held in that period.
- **Experience certificates** – one per employer, on letterhead, with your exact dates, designation and an issue date. A relieving letter alone often lacks these; ask HR for an experience certificate as well.
- **Passport** – a clear, uncut copy, with any name-change document (see below).

You do not need MEA or embassy attestation for these: DHP's guidelines say PSV replaces attestation. Anything not in English or Arabic – a certificate in Hindi, Malayalam, Tamil or another language – needs an official translation attached to a copy of the original.

## Initials, surnames and other name problems

Name differences are among the most common PSV queries for Indian applicants. The usual cases:

- **Initials** on certificates ("K. Rajan") and the full name in the passport ("Kumar Rajan").
- **Passports with an empty surname field**, so the given name and surname are split differently from the certificates.
- **Father's or husband's name** added on some documents and not on others.
- **A married name** on the passport and the maiden name on the degree.

Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name (DataFlow's form asks you to "give your name in full (as per your Passport/ National ID) and recognized alternatives"), and upload a document that links the names – a marriage certificate, a gazette notification of a name change or an affidavit. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case and what to do if a report already shows a discrepancy.

## How do Indian universities handle verification requests?

The provider writes to your university, council and employers and waits for each to answer – that wait is most of the time PSV takes. Three things help with Indian institutions:

1. **Tell the university first.** Find the office that answers verification requests (often the examination or verification section of the university, or of the health-sciences university your college was affiliated to) and warn them a request is coming.
2. **Pay any verification fee quickly.** DataFlow's reference kit says "If your issuing authority applies verification fees, the amount will be added to the total."
3. **Name both institutions in full.** DataFlow's form asks for the full name of the institution attended and says "Do not use abbreviated terms or initials". If your college was affiliated to a university, write the college's full name and make sure the awarding university also appears in full.

The [timeline guide](/qatar/psv/timeline) sets out how long each step takes and when to escalate.

## Before you travel

Emigration from India is a separate process from DHP licensing. Rules for Indian nurses and other workers going to Gulf countries are set by India's Ministry of External Affairs and handled through the [eMigrate portal](https://www.emigrate.gov.in); check what applies to you with your recruiter and on that portal, and deal only with recruiting agents registered there.

## Checklist for Indian applicants

1. Package chosen to cover every qualification and the experience years DHP will count.
2. Final degree certificate, front and back, with all mark sheets in one file; internship certificate for doctors.
3. Council registration (and renewals) for every state you practised in during those years.
4. Experience certificates – not only relieving letters – with exact dates and an issue date.
5. Every name variant listed, with a document linking them.
6. University and employers told to expect the request; any verification fee ready.
7. Good standing planned for the licensing stage – from the NMC or your State Medical Council for doctors, usually the State Nursing Council for nurses – and delivered the way your PSV provider asks.
`,
}
