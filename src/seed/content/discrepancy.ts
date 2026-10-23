/**
 * Seed content: Discrepancy / negative report (brief 11).
 * Facts checked 23 Oct 2026 against: DataFlow's FAQs (Appeal = disagreeing with a Discrepancy/Unable To Verify outcome;
 * one-time free re-verification; within 180 days of completion; dataflowstatus.com "File an Appeal" with a supporting
 * document or information; support request for eligibility questions); DataFlow's DHP programme page (tracker cut-off
 * 31 Aug 2024, as on the status page); DHP Guidelines for Nurses and Physicians (process map "Unable to verify/ Negative"
 * → interview → proceed / "Re-verify within 14 days" / "rejected/blacklisted"; temporary licence suspended for "negative
 * verification reports and proven incidents of fraud"; case-by-case assessment); DHP's PSV page ("warn other registration
 * authorities of fraudulent applicants"); DataFlow FAQ (final report shared with the regulator – as on the status page).
 * DHP publishes no separate appeal route for a PSV result; the page says so.
 */

export const discrepancyGuide = {
  title: 'DataFlow Discrepancy or negative report for Qatar DHP: what happens next',
  path: '/qatar/psv/problems/discrepancy',
  section: 'psv' as const,
  summary:
    'In practice, a Discrepancy means the issuer answered the verification request but something it confirmed differs from what you submitted – a date, a job title, a qualification name, a spelling. A negative result (DHP does not define the term) is generally taken to mean the issuer said the document or its details are not genuine. DHP checks PSV results before it approves an evaluation, and its process maps send an applicant with an unable-to-verify or negative result to an interview that ends in approval, re-verification within 14 days, or rejection and blacklisting. DataFlow lets you appeal a Discrepancy once, free of charge, within 180 days of the report’s completion. Below: what triggers a Discrepancy, how to get a genuine error corrected, how the appeal works, and what never to do.',
  meta: {
    title: 'DataFlow Discrepancy or Negative Report: Qatar DHP Guide',
    description:
      'What a Discrepancy or negative PSV result means for your Qatar DHP application, the usual triggers, DataFlow’s 180-day appeal and how to get an error corrected.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DataFlow – FAQs (Appeal, re-verification, 180 days)',
      url: 'https://dataflowgroup.com/faqs/',
    },
    {
      label: 'DHP – Guidelines for Nurses (evaluation process map, temporary licence)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians (evaluation process map, interviews)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Appeal rules from DataFlow’s FAQs; DHP’s handling from the process maps and notes in its Guidelines for Nurses and Physicians. Independent fact-check applied (13 findings).',
    },
  ],
  faqs: [
    {
      question: 'Can a typo in my graduation date cause a Discrepancy?',
      answer:
        'It can. The provider compares what you submitted with what the issuer confirms, so a graduation date, a joining date or a job title that differs from the issuer’s record can be reported as a Discrepancy even when everything else is right. Copy dates and titles from the certificate itself, not from memory or your CV.',
    },
    {
      question: 'Can I reapply with a different provider after a Discrepancy or negative result?',
      answer:
        'Nothing in DHP’s guidelines says a second report from another provider replaces the first, and DataFlow’s FAQ says it shares the final report with the regulator. Changing provider does not change what the issuer will confirm. Correct the record with the issuer, appeal at DataFlow within 180 days, and if you are unsure how DHP will treat an earlier report, ask the DHP registration section through your employer’s representative before you pay for a new one.',
    },
    {
      question: 'How long does an appeal take?',
      answer:
        'DataFlow’s FAQ gives no timeline for appeals. Because an appeal re-verifies the same document, expect it to depend largely on how quickly the issuer answers – the [timeline guide](/qatar/psv/timeline) shows the published targets for a full report.',
    },
    {
      question: 'Is a Discrepancy the same as fraud?',
      answer:
        'Not necessarily. A Discrepancy can be purely clerical: a date, a title or a spelling that does not match. DHP’s PSV page describes PSV as letting the department “warn other registration authorities of fraudulent applicants”, and its guidelines say a temporary licence will be suspended in case of “negative verification reports and proven incidents of fraud”; they do not apply that wording to a Discrepancy. A negative result goes to interview on DHP’s process maps, which can end in rejection or blacklisting.',
    },
  ],
  markdown: `
## What is a Discrepancy?

A PSV provider sends your documents to the issuer – the university, the council, the employer – and records what the issuer confirms. In practice, when the issuer answers but something differs from what you submitted, that document is reported as a **Discrepancy**. Common causes, for illustration:

- **Dates** – a graduation, registration or employment date that differs from the issuer's record.
- **Titles** – "Staff Nurse" on your letter, "Nursing Officer" in the hospital's HR system; a degree named differently from the university's official title.
- **Names** – a spelling, a missing middle name, initials, or a married name that does not match the record. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers the evidence that links names.
- **Status or scope** – part-time employment submitted as full-time, a temporary registration submitted as permanent.

A Discrepancy is different from **Unable to Verify**, where the issuer did not confirm anything – the [Unable to Verify guide](/qatar/psv/problems/unable-to-verify) covers that.

## What is a negative result, and how serious is it?

Neither DHP's guidelines nor DataFlow's FAQ defines "Negative". It is generally taken to mean the issuer said the document or its details are not genuine – for example, that it has no such record. DHP's guidelines attach their most serious consequences to it:

- its process maps send an applicant with an "Unable to verify/ Negative" result to an interview, which ends in approval, the "Re-verify within 14 days" branch, or the applicant being "rejected/blacklisted";
- its guidelines say a temporary licence will be suspended "In case of negative verification reports and proven incidents of fraud", with the practitioner "banned from practicing immediately";
- DHP's PSV page describes PSV as letting the department "warn other registration authorities of fraudulent applicants".

If a document you know to be genuine comes back negative, act at once: get written confirmation from the issuer that it issued the document, and ask the provider whether the result can be appealed – DataFlow's FAQ describes appeals for Discrepancy and Unable To Verify reports.

## What happens at DHP?

DHP checks the PSV results before it approves an evaluation, and DataFlow shares the final report with the regulator itself. A Discrepancy is not a clean result. The process maps show only two outcomes – "Unable to verify/ Negative" and "Positive" – and do not mention a Discrepancy, so expect DHP to ask about it, and expect it to be assessed case by case ("A case-by-case assessment may be implemented", in both sets of guidelines). DHP's Guidelines for Nurses and Physicians set out no appeal route for a PSV result (the only appeal they mention is for clinical privileges): the correction happens at the provider, with the issuer. Resolve it before the evaluation application is submitted.

## How do you get a genuine error corrected?

1. **Find out exactly what differs.** Read the status and any remarks on the document in the report or tracker, and ask the provider's support team what the issuer confirmed.
2. **Decide whose error it is.** If you typed the wrong date or title, the issuer's version is right: your appeal supplies the correct information. If the issuer's record is wrong – a misspelled name in the university's register, wrong dates in an HR system – the issuer has to correct its record.
3. **Ask the issuer for a correction in writing** – a letter on letterhead, or a corrected certificate, stating the right details and confirming that it issued the document.
4. **Ask the issuer to answer the re-verification with the corrected details**, and give it the provider's reference number.
5. **File the appeal** with the supporting document (below).

## How does the DataFlow appeal work?

DataFlow's FAQ describes an appeal as the route for an applicant who "disagrees with the outcome of the report (i.e., Discrepancy/Unable To Verify)":

- **Deadline:** "within 180 days of completion of your Unable To Verify or Discrepancy report".
- **Cost:** "a one-time re-verification of your document free of charge".
- **Where:** dataflowstatus.com – enter your DataFlow case number and registered passport number, click *File an Appeal*, and upload the supporting document or add the information. DataFlow's DHP page limits that tracker to cases filed on or before 31 August 2024; for a later case, sign in to the DataFlow portal you applied through and look for the appeal option there, and if you cannot find one, submit a support request at [support.dataflowgroup.com](https://support.dataflowgroup.com/).
- **What it re-verifies:** "the same documents that they submitted in their application" – it is not a way to swap in a different document.

If you are not eligible, the screen shows the reason; DataFlow's FAQ says to submit a support request if you are unsure. For QuadraBay and AVS, ask their support teams how a result is challenged before you pay for anything new.

## What should you never do?

- **Never alter a document** – a date, a name, a stamp – to make it match. The issuer's record is what the provider checks, and DHP's guidelines say the verification report is reviewed at evaluation and that "any misleading information provided will result in further investigations and may lead to a disciplinary action".
- **Never submit a "corrected" certificate the issuer did not issue.** Ask the issuer to issue it.
- **Do not ignore the result.** It stays on the report, DataFlow shares the report with the regulator, and the 180-day appeal window closes.

## How do you prevent a Discrepancy?

- Copy every date, title and qualification name from the certificate, not from your CV.
- Use experience certificates with exact start and end dates, your job title as HR records it, and full-time or part-time status.
- Enter your name exactly as in your passport and list every other version as an alternative name.
- Check each upload against the form before you pay – the [documents guide](/qatar/psv/documents) has the checklist.
`,
}
