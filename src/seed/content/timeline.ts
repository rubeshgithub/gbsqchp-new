/**
 * Seed content: how long PSV and the Qatar licence take (brief 7).
 * Facts checked 17 Oct 2026 against: DataFlow's FAQ (15–25 working days from payment and a complete document set;
 * causes of delay; "up to 3 months" in the TrueProfile licensing answer), DataFlow's Customer Reference Kit for DHP
 * (average 20 working days), DataFlow's DHP price list (Express: average 14 working days), Circular DHP/2025/20
 * (QuadraBay 20/14 business days and the 30-day window, as read on 11 Oct 2026), the AVS portal and fee schedule
 * ("20 days turnaround" label; Express with no published target), Circular DHP/2024/16 (DHP processing times, read
 * in full) and DHP's PSV page. Real-world ranges are from consultancies and labelled "reported".
 */

export const timelineGuide = {
  title: 'How long does PSV take for Qatar? DataFlow, QuadraBay and AVS timelines, official and real',
  path: '/qatar/psv/timeline',
  section: 'psv' as const,
  summary:
    'On paper, Primary Source Verification for Qatar takes about four weeks: DataFlow quotes 15 to 25 working days from a complete file, QuadraBay targets 20 business days (14 on its Prestige tier) and the AVS portal shows a 20-day turnaround. In practice 25 to 35 working days is commonly reported for a clean file, and 45 to 60 when a university or former employer is slow to answer. After that, DHP’s own published time for evaluating your application is 25 working days for physicians and dentists and 15 for nurses, pharmacists and allied health. This guide sets out every published target, what stops the clock, what applicants report, and what you can do before you pay to save weeks.',
  meta: {
    title: 'How Long Does DataFlow Take for Qatar? Real PSV Timelines',
    description:
      'Official vs real PSV timelines for Qatar DHP: DataFlow, QuadraBay and AVS targets, express tiers, what pauses the clock and DHP’s own processing times.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-17',
  verifiedAgainst: [
    {
      label: 'DataFlow – FAQs (processing time and causes of delay)',
      url: 'https://dataflowgroup.com/faqs/',
    },
    {
      label: 'DataFlow – Customer Reference Kit for DHP',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/Customer-Reference-Kit-for-DHP-EN-2.pdf',
    },
    {
      label: 'DataFlow – DHP price list (Express service)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages, targets and the 30-day window',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'AVS – DHP Reference Program Guide (Express service)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
    {
      label: 'Circular DHP/2024/16 – processing times of registration and licensing requests',
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
      date: '2026-10-17',
      note: 'First published. Provider targets from each provider’s own documents and Circular DHP/2025/20; DHP times from Circular DHP/2024/16, read in full.',
    },
  ],
  faqs: [
    {
      question: 'Does DataFlow Express guarantee 14 days?',
      answer:
        'No. DataFlow’s price list describes Express as a prioritised service with “an average turn-around time of 14 working days”, and an average is not a deadline. QuadraBay’s Prestige tier publishes a 14-business-day target and AVS publishes no target for its Express service at all. All three speed up the provider’s own handling; none of them makes your university or former employer reply faster.',
    },
    {
      question: 'Why has my case been pending for 40 days?',
      answer:
        'Almost always because one institution has not answered. Look at the status of each component rather than the case as a whole: one university or employer usually holds up an otherwise finished report. DataFlow’s FAQ names the usual causes – “an incomplete submission with missing documents from an applicant, a late response from the issuing authorities” – and its targets run from a complete file, so any day spent waiting for something from you does not count. Answer every request within a day or two, and if nothing has moved for about three weeks, open a ticket with the provider and contact the institution yourself.',
    },
    {
      question: 'Can I apply for DHP evaluation before my PSV report is ready?',
      answer:
        'No. DHP’s PSV page tells practitioners to apply for verification before applying for registration or evaluation, and to “attach the verification report to the online evaluation application”. Circular DHP/2024/16 also counts DHP’s own processing time only from a complete application with verified documents. Use the waiting time to prepare everything else DHP asks for: photo, CV, licences and, if it applies to you, the qualifying exam.',
    },
    {
      question: 'How long does a report transfer take?',
      answer:
        'Much less than a new report, if nothing new needs verifying. DataFlow quotes a new DHP report “within 5 days if no additional documents are needed” when it re-issues a report it made for another authority. Any employer or good-standing certificate added since the old report is verified at the source, so it takes as long as that institution takes to reply.',
    },
  ],
  markdown: `
## How long does PSV take for Qatar?

Each provider publishes a target. Read them as averages or targets from the day your file is complete, not as promises:

| Provider | Standard target | Faster tier | Where it is published |
| --- | --- | --- | --- |
| DataFlow | 15 to 25 working days; DHP reference kit average 20 working days | Express (QAR 529): average 14 working days | DataFlow FAQ, DHP reference kit, DHP price list |
| QuadraBay | 20 business days (Standard) | Prestige: 14 business days | Circular DHP/2025/20 |
| AVS | "20 days turnaround" on the portal's package card | Express (QAR 400): no published target | AVS portal and fee schedule |

Twenty working days is about four calendar weeks once weekends are counted; fourteen is about three. AVS does not say whether its 20 days are working or calendar days. DataFlow's general FAQ sets the outer edge: in an answer about licensing through its TrueProfile service it says verification "can take up to 3 months".

## When does the clock start, and what stops it?

Every target runs from a **complete** file, and "complete" is the provider's call:

- **DataFlow** counts its 15 to 25 working days "from the date of payment and submission of a complete set of documents", and its reference kit counts its 20-day average "from the day of submission of all documents and information required to process the application". Anything you add later "will be subject to additional fees and will delay your final report".
- **QuadraBay** gives you 30 days to supply anything it asks for after you submit. If the window closes, that component is closed as *Unable to Check*, which leaves the report incomplete for DHP.
- **AVS** warns that "Issuing Authorities may request additional documents or information during verification" but publishes no window.

DataFlow's FAQ lists the causes of delay plainly: "an incomplete submission with missing documents from an applicant, a late response from the issuing authorities", or "unavoidable incidents such as conflicts, strikes, natural disasters". Only the first is in your hands, and it is the one that most often turns four weeks into eight. The [documents guide](/qatar/psv/documents) covers what each document must show so the provider does not have to come back to you.

## What do applicants actually report?

Published targets describe a file where every institution answers promptly. Consultancies that follow many cases report longer times:

- **25 to 35 working days** for a clean DataFlow file, and **45 to 60 working days** "when universities or councils respond slowly" (reported by [Allocation Assist](https://www.allocationassist.com/how-long-dataflow-verification-take/), updated October 2026).
- **By country**, one guide reports these ranges for DataFlow verification in general, not for DHP specifically (reported by [Neelim](https://www.neelim.com/blog/dataflow-verification-complete-guide), August 2025):

| Where your documents were issued | Reported range |
| --- | --- |
| Philippines | 15–25 working days |
| India | 15–30 working days |
| UK and Ireland | 20–35 working days |
| Pakistan | 20–40 working days |
| Egypt | 25–45 working days |
| Other European countries | 25–45 working days |
| Jordan, Syria, Iraq | 25–50 working days |
| African countries | 30–60 working days |

Treat these as a guide to the order of magnitude, not a forecast for your file. What decides your timeline is your slowest institution: one closed college or one former employer with no HR office can double it. QuadraBay (approved for DHP in December 2025) and AVS (September 2026) are too new for anyone to have published comparable real-world figures.

## Is Express or Prestige worth paying for?

The faster tiers buy priority in the provider's own queue: DataFlow Express costs QAR 529 for an average of 14 working days, QuadraBay Prestige adds QAR 300 for a 14-business-day target, and AVS Express costs QAR 400 with no published target. None of them changes how quickly your university or employer replies, and that is where most of the time goes.

They are worth it when two things are true: your institutions are known to answer quickly (a large university with a verification office, employers with a working HR email), and a start date depends on the report. If a slow institution is your problem, spend the time on the steps below instead. Prices for every tier are in the [PSV fees guide](/qatar/psv/fees).

## How long does the rest of the Qatar licence take?

PSV is the first stage. Circular DHP/2024/16 sets DHP's own processing times, in working days, counted from "a complete application that meets all requirements and includes verified documents"; an application sent back to you restarts the count from the day you resubmit:

| DHP request | Physicians and dentists | Nurses, pharmacists, allied health |
| --- | --- | --- |
| Evaluation | 25 | 15 |
| Licensing | 15 | 10 |
| Temporary licence | 5 | 5 |

Adding the published targets gives a floor for planning, not an estimate. A nurse with a clean file is looking at roughly 20 working days of PSV, 15 of evaluation and 10 of licensing – about nine weeks of official processing time – before any days waiting on documents, the qualifying exam if it applies, or the employer's own steps. A physician's equivalent is about twelve weeks.

One more verification sits inside that period. Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08), and it is usually needed at the licensing stage. Order it while your evaluation is in progress, so the verified certificate is ready when the licence application goes in, while still being under six months old.

## What can you do before you pay to save weeks?

Most of the time you can save is saved before you submit:

1. **Tell every institution a request is coming.** Ask the registrar and each HR office who handles verification requests, whether they charge, and how they want to be contacted. Give the provider that named contact.
2. **Pay institution fees on day one.** Universities and councils that charge for verification wait until they are paid; DataFlow and AVS pass these fees on to you.
3. **Fix names and dates first.** A name that differs from your passport or a graduation date that differs from the transcript sends the component back to you. The [documents guide](/qatar/psv/documents) lists what to check.
4. **Submit everything in one go.** DataFlow says anything submitted later "will be subject to additional fees and will delay your final report", and a late addition waits for its own institution's reply at every provider.
5. **Watch the portal and your email daily for the first month.** Answer any request within a day or two – QuadraBay's 30-day window is a hard limit.
6. **Plan the good-standing verification** for the evaluation stage, not after it.

## When should you escalate?

If a component has not moved for about three weeks, act on it rather than waiting:

- **DataFlow:** raise a ticket at the [applicant support centre](https://support.dataflowgroup.com/), which has separate routes for *Submit Missing Document / Information* and *Check an existing support request*, or message +974 4419 6582 on WhatsApp.
- **QuadraBay:** email dhp.support@quadrabay.com with your reference; status is on the [tracker](https://track.quadrabay.com/).
- **AVS:** email dhp.helpdesk@avsqatar.com or call +974 4464 4490 (Sunday to Thursday, 8 am to 4 pm); status is on the [AVS dashboard](https://www.avsqatar.com/avs/dashboard).
- **The institution itself:** a polite email to the registrar or HR office with the provider's reference number often moves a stuck request faster than the provider's own reminders.

Once the report is with DHP, the times in Circular DHP/2024/16 apply. If an evaluation runs well past them, DHP's registration section is reachable at dhpregistration@moph.gov.qa. The [PSV overview](/qatar/psv) explains how the report moves into evaluation, and the provider guides for [DataFlow](/qatar/psv/dataflow), [QuadraBay](/qatar/psv/quadrabay) and [AVS](/qatar/psv/avs) cover each portal's tracking in detail.
`,
}
