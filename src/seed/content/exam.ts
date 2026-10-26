/**
 * Seed content: the DHP qualifying (Prometric) exam (brief 24, with the exemption list of brief 20).
 * Facts checked 23 Oct 2026 against: DHP's Qualifying Examination page (categories, 150 MCQs / 3 hours, cut scores,
 * five consecutive attempts, sequence wording, Doha test centre, Circular 19/2025 link); Prometric's DHP programme page
 * (exam list, 160 MCQs for dietitians, cut scores, remote testing for dietitians, content updates, customer service
 * hours); Circular DHP/2024/10 (fees, cancellation/rescheduling, read in full 16 Oct); Circular DHP/2025/19 (26 Nov 2025,
 * scanned – read by OCR on 23 Oct: exempting exams, "must be valid", verification report required after 1 Jan 2026);
 * DHP's Qualifying Examination Policy v04 (PDF created Nov 2024, QCHP wording – scanned, read by OCR: evaluation stage,
 * 3-year validity, five attempts per scope, extra attempt on justification, rounding rule, notes); Circular DHP/2025/24
 * (exam exemptions for Qataris, offspring of Qatari women, Qatar graduates); DHP Guidelines for Nurses (NCLEX within
 * five years). The policy's degree-based exemptions are reported as such, with a caution, because the newer circular
 * does not repeat them.
 */

export const examGuide = {
  title: 'Qatar Prometric exam (DHP qualifying exam) 2026: fees, format, pass marks, attempts and exemptions',
  path: '/qatar/exam/prometric',
  section: 'exam' as const,
  summary:
    'The DHP qualifying exam is a computer-based Prometric test – 150 multiple-choice questions in three hours for most professions – that general practitioners, general dentists, pharmacists, registered nurses, midwives, Category 3 specialists and several allied health scopes must pass for a Qatar licence. It costs US$244 for anyone registering from 1 January 2026, the pass mark is 50% for nurses and most allied health, 60% for GPs, general dentists and pharmacists and 65% for most specialists, and you have five attempts. Certain foreign licensing exams – USMLE Step 2, PLAB 1, NCLEX-RN and others listed in Circular DHP/2025/19 – exempt you, but since 1 January 2026 only if the exam itself has been primary-source verified. Below: format, pass marks, fees, attempts, validity, exemptions and booking.',
  meta: {
    title: 'Qatar Prometric Exam 2026: US$244 Fee, Validity, Pass Marks',
    description:
      'Qatar Prometric test for the DHP licence: US$244 fee from 1 Jan 2026, 150 MCQs, pass marks by profession, five attempts, 3-year validity and exemptions.',
  },
  showVendorTable: false,
  showCalculator: false,
  showCirculars: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DHP – Qualifying Examination',
      url: 'https://dhp.moph.gov.qa/en/Pages/QualifyingExamination.aspx',
    },
    {
      label: 'Prometric – DHP (MOPH Qatar) examinations',
      url: 'https://www.prometric.com/exams/schq2',
    },
    {
      label: 'Circular DHP/2024/10 – qualifying examination fee',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-10%20E.pdf',
      circularNumber: 'DHP/2024/10',
    },
    {
      label: 'Circular DHP/2025/19 – exams that exempt from the qualifying exam',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2019%202025%20E.pdf',
      circularNumber: 'DHP/2025/19',
    },
    {
      label: 'DHP – Qualifying Examination Policy (version 04)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Qualifying%20Examination%20Policy.pdf',
    },
    {
      label: 'Circular DHP/2025/24 – experience and exam rules for Qataris and Qatar graduates',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2024%202025%20E.pdf',
      circularNumber: 'DHP/2025/24',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Fees from Circular DHP/2024/10; exemptions from Circular DHP/2025/19 (read in full); format and pass marks from DHP’s and Prometric’s exam pages; attempts and validity from DHP’s Qualifying Examination Policy.',
    },
    { date: '2026-10-26', note: 'Added an FAQ on the 2026 exam fee (Circular DHP/2024/10, as in the fee section) and reworded the search title and description. No facts changed.' },
  ],
  faqs: [
    {
      question: 'How much is the Qatar Prometric exam fee in 2026?',
      answer:
        'US$244 for anyone registering for the exam from 1 January 2026, under Circular DHP/2024/10 (it was US$238 for registrations from 19 January 2024). Cancelling or rescheduling costs US$25 if you do it 30 or more days before the exam and US$40 between 5 and 29 days before. The [PSV fees guide](/qatar/psv/fees) puts the exam fee alongside PSV and DHP’s own fees.',
    },
    {
      question: 'Can I take the Prometric exam before my DataFlow report is ready?',
      answer:
        'Plan on doing PSV first. DHP’s Qualifying Examination Policy says practitioners sit the exam “at the evaluation stage”, and DHP’s PSV page asks you to attach the verification report to the evaluation application. Start PSV early, because it is usually the slowest step; the [timeline guide](/qatar/psv/timeline) shows how the stages fit together.',
    },
    {
      question: 'What score do nurses need to pass the Qatar Prometric exam?',
      answer:
        '50%. DHP’s Qualifying Examination page and Prometric’s programme page both list a 50% cut score for nursing and midwifery and for most allied health exams, against 60% for general practitioners, general dentists and pharmacists and 65% for most specialist exams.',
    },
    {
      question: 'I passed NCLEX-RN. Do I still need the Prometric exam?',
      answer:
        'No, if your NCLEX result is valid and verified. Circular DHP/2025/19 lists NCLEX-RN as the exempting exam for nurses, says “The qualifying examination must be valid”, and requires every exempting exam to be verified by a verification company – “No exam will be accepted without a verification report after the date 01-01-2026.” DHP’s Guidelines for Nurses add that NCLEX holders are exempt “provided that the applicant successfully completed the exam within the previous five years”. Add the exam certificate to your PSV application.',
    },
    {
      question: 'How long is a Prometric pass valid for Qatar?',
      answer:
        'Three years, according to DHP’s Qualifying Examination Policy; an exempting exam is valid for the period printed on its certificate, or three years if none is stated. The policy also says you do not sit the exam again at licence renewal, and that a practitioner who left Qatar and can have the licence restored or renewed within five years does not have to sit it again.',
    },
    {
      question: 'What happens if I cancel or miss my exam?',
      answer:
        'Circular DHP/2024/10 sets the charges, collected by Prometric: US$25 to cancel or reschedule 30 or more days before the exam, US$40 between 5 and 29 days before, and the full exam fee if you cancel or reschedule less than 5 days before, do not turn up, or arrive more than 30 minutes late and are refused entry.',
    },
  ],
  markdown: `
## What is the DHP qualifying exam?

It is the licensing exam the Department of Healthcare Professions requires, delivered by Prometric as a computer-based test. DHP's Qualifying Examination page lists the exams it runs – general categories such as general practitioner, general dentist, pharmacist, nurse, midwife, laboratory, radiology, physiotherapy, paramedic, dental support, dietetics and others, plus separate exams for medical and dental specialties – and says scopes not listed are assessed case by case.

DHP's Qualifying Examination Policy says practitioners in these scopes sit the exam "at the evaluation stage", and DHP's exam page says applicants must pass it "to get a license to practice after fulfilling all other registration and licensing requirements". In practice that means your Primary Source Verification comes first – the [PSV overview](/qatar/psv) explains why.

## What is the format, and what are the pass marks?

| | General practitioner, general dentist, pharmacist | Nurses, midwives and most allied health | Most medical and dental specialties |
| --- | --- | --- | --- |
| Questions | 150 MCQs | 150 MCQs | 150 MCQs |
| Time | 3 hours | 3 hours | 3 hours |
| Pass mark | 60% | 50% | 65% |

The two official pages differ in a few places, so check your category on both before you book: Prometric lists the dietitian exam as 160 questions in 3 hours 10 minutes (DHP lists 150 in 3 hours) and offers it by remote testing; Prometric lists some dental specialty exams at 151–158 questions (DHP lists 150); and DHP gives sports medicine a 55% cut score where Prometric lists 65%. DHP's exam page links an exam blueprint and reference list for each category – read yours before you book. Prometric notes updated content for the pharmacist exam from 1 May 2025 and the general dentist exam from 17 June 2025.

## How much does the exam cost?

Circular DHP/2024/10 sets the fee by the date you register for the exam:

| Registered for the exam from | Fee |
| --- | --- |
| 19 January 2024 | US$238 |
| 1 January 2025 | US$238 |
| 1 January 2026 | US$244 |

Cancelling or rescheduling costs US$25 if you do it 30 or more days before the exam and US$40 between 5 and 29 days before. Inside 5 days, if you do not turn up, or if you arrive more than 30 minutes late and are refused entry, you lose the full fee. The [PSV fees guide](/qatar/psv/fees) puts the exam fee alongside PSV and DHP's own fees.

## How many attempts do you get, and how long does a pass last?

- **Five attempts.** DHP's exam page: "Applicants can sit for the qualifying exam for 5 consecutive times whatever the gap between each attempt." The Qualifying Examination Policy counts the five attempts per scope – a technologist who failed the technician exam still has five attempts at the technologist exam – and allows an additional attempt "if a clear justification is provided".
- **Three attempts for specialty exams.** DHP's Guidelines for Physicians note for the specialty scope: "3 exam trials are only allowed".
- **Rounding after five attempts.** The policy allows a score to be rounded up if you are no more than 3 marks short of the pass mark, on condition that you have sat all five attempts; your highest mark counts.
- **Three years' validity.** The policy sets the validity of the qualifying exam at three years. It also says you do not need to sit the exam again if you submit your evaluation application within one month of the result expiring.
- **No exam at renewal.** "A healthcare practitioner is not required to take a qualifying examination at the time of license renewal."

## Which exams exempt you from the Prometric exam?

Circular DHP/2025/19 (26 November 2025) lists the qualifications that replace the Prometric exam:

| Profession | Exams or registrations that exempt you |
| --- | --- |
| General practitioners | IFOM Clinical Science Exam; USMLE Step 2; PLAB Part 1; MCCQE Part 1; AMC MCQ; MRCGP Part 1 Applied Knowledge Test; PRES (MCQ) Part 2 |
| General dentists | NJCE II; all parts of the National Dental Examining Board of Canada exam; all parts of the Irish Dental Council exam (I and II); all parts of NZDREX; the UK Overseas Registration Exam (ORE) for non-UK graduates, not older than 5 years; registration with the Australian Dental Board, the Irish Dental Council, the NZ Dental Board or the UK General Dental Council for graduates of accredited programmes in those countries |
| Pharmacists | NAPLEX; PEBC; OSPAP; OPRA; CAOP |
| Nurses | NCLEX-RN |
| Allied health | NBDHE (dental hygienists) |

Two conditions sit under the list: "The qualifying examination must be valid", and "Any exam must be verified by a verification company. No exam will be accepted without a verification report after the date 01-01-2026." So add the exempting exam certificate to your PSV application – AVS, for example, sells a single exam-certificate verification – rather than uploading it to DHP on its own.

Other exemptions:

- **By nationality or place of study.** Circular DHP/2025/24 exempts Qataris, the offspring of Qatari women and graduates of Qatar institutions from the qualifying exam.
- **By degree (check first).** DHP's older Qualifying Examination Policy also exempts dentists with a postgraduate degree of at least two years that includes accredited clinical training, and pharmacists, nurses and allied health professionals with a clinical master's or PhD in their field. The newer circular does not repeat these exemptions, and its list of exempting exams also differs from the policy's (for example, the policy names USMLE Step 3 where the circular names Step 2), so follow the circular and confirm with DHP (DHPRegistration@moph.gov.qa) before relying on a degree-based exemption.

## How do you book the exam?

Book through Prometric's online scheduler for the DHP programme, where you can schedule, reschedule, cancel and confirm an appointment and find a test centre. Prometric's customer service for the programme works Sunday to Thursday, 8 am to 5 pm Qatar time (GMT+3). DHP's exam page gives the Doha test centre as Al Emadi Business Center, C Ring Road, Building C-16, first floor, Office 5A, and the enquiry e-mail Pnl-mena@prometric.com.

Before you book, make sure the name on your Prometric account matches your passport exactly – the same rule as for PSV, covered in the [name-mismatch guide](/qatar/psv/problems/name-mismatch).
`,
}
