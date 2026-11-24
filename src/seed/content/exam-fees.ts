/**
 * Seed content: Qatar Prometric (DHP qualifying exam) fees – the fee-first companion to /qatar/exam/prometric.
 * Approved by RK on 23 Nov 2026 (weekly SEO review proposal 3). No new facts: every figure is already verified on the
 * site – Circular DHP/2024/10 (exam fee and cancellation/rescheduling charges, read in full 16 Oct 2026); Prometric's
 * DHP programme page (test-centre delivery, Locate tool, remote dietitian exam, contact table – re-read 23 Nov 2026);
 * the QCHP registration & licensing FAQ (Nov 2014, evaluation and licence fees, labelled as the last published table);
 * Circular DHP/2025/19 (exempting exams). QAR conversions use the fixed peg of 3.64 riyals per US dollar.
 * PSV package prices are not repeated here: the page links the fees guide, whose table comes from the Fees collection.
 */

export const examFeesGuide = {
  title: 'Qatar Prometric exam fee 2026: US$244, reschedule and cancellation charges',
  path: '/qatar/exam/prometric/fees',
  section: 'exam' as const,
  summary:
    'The Qatar Prometric exam (the DHP qualifying exam) costs US$244 for anyone who registers from 1 January 2026, about QAR 888. Circular DHP/2024/10 sets one fee for every profession – nurses, pharmacists, general practitioners, dentists, specialists and allied health – and Prometric collects it in US dollars wherever you sit the exam. Rescheduling or cancelling costs US$25 at 30 days or more before the exam and US$40 at 5–29 days; inside 5 days, or if you miss it, you lose the whole fee. Below: the fee history, the change charges, what the exam adds to the total cost of a Qatar licence, and who does not have to pay it at all.',
  meta: {
    title: 'Qatar Prometric Exam Fee 2026: US$244 (QAR 888) for DHP',
    description:
      'Qatar Prometric exam fee from 1 Jan 2026: US$244 (about QAR 888) for every profession, US$25 or US$40 to reschedule, and the total licence cost.',
  },
  showVendorTable: false,
  showCalculator: false,
  showCirculars: false,
  verifiedOn: '2026-11-23',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2024/10 – qualifying examination fee',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-10%20E.pdf',
      circularNumber: 'DHP/2024/10',
    },
    {
      label: 'Prometric – DHP (MOPH Qatar) examinations',
      url: 'https://www.prometric.com/exams/schq2',
    },
    {
      label: 'Circular DHP/2025/19 – exams that exempt from the qualifying exam',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2019%202025%20E.pdf',
      circularNumber: 'DHP/2025/19',
    },
    {
      label: 'DHP – Qualifying Examination',
      url: 'https://dhp.moph.gov.qa/en/Pages/QualifyingExamination.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-11-23',
      note: 'First published, split out of the Prometric exam guide. Fees from Circular DHP/2024/10; contact details and test-centre delivery from Prometric’s DHP programme page (re-read 23 Nov 2026); evaluation and licence fees as on the PSV fees guide.',
    },
  ],
  faqs: [
    {
      question: 'How much is the Qatar Prometric exam fee in 2026?',
      answer:
        'US$244 for anyone who registers for the exam from 1 January 2026, under Circular DHP/2024/10 – about QAR 888 at the fixed rate of 3.64 riyals to the dollar. It was US$238 for registrations from 19 January 2024 and from 1 January 2025.',
    },
    {
      question: 'Is the Prometric fee different for nurses, pharmacists or doctors?',
      answer:
        'No. Circular DHP/2024/10 sets one qualifying-exam fee, so a nurse, a pharmacist, a general practitioner, a dentist, a specialist and an allied health professional all pay US$244 from 1 January 2026. The pass marks differ by profession; the [Prometric exam guide](/qatar/exam/prometric) lists them.',
    },
    {
      question: 'Is the Qatar Prometric fee different in India, Pakistan or the Philippines?',
      answer:
        'The circular sets the fee in US dollars and does not list a different price by country. Prometric collects it when you book, so your card or bank converts the US$244 into rupees or pesos at its own rate on the day. Check the amount on Prometric’s payment page before you confirm.',
    },
    {
      question: 'How much does it cost to reschedule or cancel the Qatar Prometric exam?',
      answer:
        'US$25 if you reschedule or cancel 30 or more days before the exam, and US$40 between 5 and 29 days before. Less than 5 days before, if you do not turn up, or if you arrive more than 30 minutes late and are refused entry, you lose the full exam fee. Prometric collects these charges, under Circular DHP/2024/10.',
    },
    {
      question: 'Who does not have to pay for the Prometric exam?',
      answer:
        'Anyone exempt from the exam. Circular DHP/2025/19 lists the foreign exams that replace it – for example USMLE Step 2 or PLAB Part 1 for general practitioners, NCLEX-RN for nurses and NAPLEX for pharmacists – provided the exam is valid and has been verified through PSV. Circular DHP/2025/24 exempts Qataris, the offspring of Qatari women and graduates of Qatar institutions.',
    },
  ],
  markdown: `
## How much is the Qatar Prometric exam fee?

**US$244** for anyone who registers for the exam from 1 January 2026. Circular DHP/2024/10 sets the fee by the date you register, not the date you sit the exam:

| Registered for the exam from | Fee | About, in riyals |
| --- | --- | --- |
| 19 January 2024 | US$238 | QAR 866 |
| 1 January 2025 | US$238 | QAR 866 |
| 1 January 2026 | US$244 | QAR 888 |

The riyal figures use the fixed rate of 3.64 riyals to the US dollar. The circular sets one fee for every exam category, so it is the same for nurses, midwives, pharmacists, general practitioners, general dentists, specialists and allied health. The exam itself – format, pass marks, attempts and booking – is covered in the [Prometric exam guide](/qatar/exam/prometric).

## What does it cost to reschedule, cancel or miss the exam?

Circular DHP/2024/10 also sets the change charges, which Prometric collects:

| When you change or cancel | Charge |
| --- | --- |
| 30 days or more before the exam | US$25 (about QAR 91) |
| 5 to 29 days before the exam | US$40 (about QAR 146) |
| Less than 5 days before the exam | The full exam fee |
| You do not turn up | The full exam fee |
| You arrive more than 30 minutes late and are refused entry | The full exam fee |

So book a date you can keep. If your PSV report or your employer's approval is still pending, wait to book rather than paying to move the date later.

## Is the fee different in India, Pakistan or the Philippines?

No country prices are listed. The circular sets the fee in US dollars, and Prometric collects it when you book through its scheduler for the DHP programme, wherever the test centre is. Your card or bank converts the US$244 at its own rate, so the amount in rupees or pesos moves with the exchange rate – check it on the payment page before you confirm.

Prometric's DHP programme page delivers the exam "in the Prometric test centres" and has a **Locate** option to find centres with seats in your country. Its contact table lists an India helpline (+91-124-4147700, Monday to Friday, 9 am to 5:30 pm IST) and one regional number for Australia, Indonesia, Malaysia, New Zealand, the Philippines, Singapore, Taiwan and Thailand (+603-76283333, Monday to Friday, 8 am to 6 pm Malaysia time). The DHP programme team works Sunday to Thursday, 8 am to 5 pm Qatar time. The dietitian exam can also be taken by remote testing.

## How much does a Qatar licence cost with the exam?

The exam is one of four fixed costs. The others are the PSV report and DHP's evaluation and licence fees:

| Cost | Nurses, pharmacists, allied health | General physicians and dentists | Specialist physicians and dentists |
|---|---|---|---|
| PSV, standard package | QAR 900–990 | QAR 1,050–1,210 | QAR 1,050–1,210 |
| Qualifying exam (Prometric) | US$244 (about QAR 888) | US$244 (about QAR 888) | US$244 (about QAR 888) |
| DHP evaluation | QAR 100 | QAR 100 | QAR 100 |
| DHP licence | QAR 600 | QAR 1,000 | QAR 1,200 |
| **Approximate total** | **QAR 2,488–2,578** | **QAR 3,038–3,198** | **QAR 3,238–3,398** |

The PSV range covers the standard packages of the three DHP-approved providers; extra documents or a faster tier add to it. DHP does not publish a current evaluation and licence fee schedule, so those two rows come from the last table its predecessor, the Qatar Council for Healthcare Practitioners, published (November 2014) – the portal shows the exact fee at payment. The [PSV fees guide](/qatar/psv/fees) breaks down every provider's packages and add-ons.

## Who does not have to pay the exam fee?

Anyone exempt from the exam:

- **Holders of an exempting foreign exam.** Circular DHP/2025/19 lists them – for example IFOM, USMLE Step 2, PLAB Part 1 and MCCQE Part 1 for general practitioners, NCLEX-RN for nurses, NAPLEX and PEBC for pharmacists, and NBDHE for dental hygienists. The exam must be valid, and from 1 January 2026 it must be verified by a PSV provider, so add the certificate to your PSV application. The [Prometric exam guide](/qatar/exam/prometric) has the full list.
- **By nationality or place of study.** Circular DHP/2025/24 exempts Qataris, the offspring of Qatari women and graduates of Qatar institutions.

## When should you pay for the exam?

After PSV has started. DHP's Qualifying Examination Policy places the exam "at the evaluation stage", and DHP asks for the verification report with the evaluation application. Paying for the exam first and then moving the date because PSV is late costs US$25 or US$40 each time. The [timeline guide](/qatar/psv/timeline) shows how the stages fit together, and the [licensing guide](/qatar/licensing) covers the whole route to a licence.
`,
}
