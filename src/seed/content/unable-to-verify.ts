/**
 * Seed content: Unable to Verify (brief 10).
 * Facts checked 23 Oct 2026 against: DataFlow's FAQs (one-time free re-verification by Appeal for a Discrepancy or Unable
 * to Verify report; additional charges for an Unable to Verify re-verification when the applicant did not provide what was
 * needed; Appeal "within 180 days of completion"; steps at dataflowstatus.com – case number, passport number, "File an
 * Appeal"; ineligibility message; support request; causes of delay); Circular DHP/2025/20 (QuadraBay 30-day window, Unable
 * to Check – as quoted on the QuadraBay and status pages); DHP Guidelines for Nurses and for Physicians (process map:
 * "Unable to verify/ Negative" → interview → proceed / re-verify within 14 days / rejected/blacklisted; temporary licence
 * suspended on negative reports and proven fraud; originals on a case-by-case basis; "A case-by-case assessment may be
 * implemented"; DHP may conduct interviews); DHP's PSV page ("warn other registration authorities of fraudulent
 * applicants"). DHP publishes no rule on alternative evidence for closed institutions; the page says so.
 */

export const unableToVerifyGuide = {
  title: 'DataFlow “Unable to Verify” for Qatar DHP: what it means and what to do',
  path: '/qatar/psv/problems/unable-to-verify',
  section: 'psv' as const,
  summary:
    'An Unable to Verify (UTV) result means the provider could not get the issuer – your university, council or employer – to confirm a document; it is not a finding that the document is false. It still matters: DHP’s process maps send an applicant with an unable-to-verify or negative result to an interview, after which the application proceeds, goes to re-verification within 14 days, or is rejected. DataFlow lets you appeal a UTV once, free of charge, within 180 days of the report’s completion – with an extra charge if the UTV happened because you had not supplied what DataFlow needed. QuadraBay’s equivalent is Unable to Check, after 30 days without your reply. Below: what causes a UTV, how to appeal, and how to stop it happening on the next document.',
  meta: {
    title: 'DataFlow Unable to Verify (UTV) for Qatar: Causes & Fixes',
    description:
      'What an Unable to Verify result means for your Qatar DHP application, the usual causes, DataFlow’s 180-day appeal, QuadraBay’s Unable to Check, and the fix.',
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
      label: 'DHP – Guidelines for Nurses (evaluation process map)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians (evaluation process map, interviews)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay (30-day window, Unable to Check)',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Appeal rules from DataFlow’s FAQs; DHP’s handling of unable-to-verify results from the process maps in its Guidelines for Nurses and Physicians. Independent fact-check applied (13 findings).',
    },
  ],
  faqs: [
    {
      question: 'Is Unable to Verify the same as a negative report?',
      answer:
        'No. In practice, Unable to Verify means the issuer did not confirm the document, and a negative result means the issuer said the document or its details are not genuine; DHP does not define “Negative”, and it does not match a named DataFlow label. DHP’s process maps treat them together at evaluation – “Unable to verify/ Negative” leads to an interview, which leads to approval, re-verification within 14 days, or rejection/blacklisting. DHP’s guidelines suspend a temporary licence for “negative verification reports and proven incidents of fraud”; a UTV on its own is neither.',
    },
    {
      question: 'How much does a DataFlow appeal cost?',
      answer:
        'DataFlow’s FAQ says you can request “a one-time re-verification of your document free of charge by raising an ‘Appeal’”, within 180 days of completion of your Unable To Verify or Discrepancy report. It adds that “There are additional charges if the re-verification is requested for an Unable to Verify report due to additional information requirements needing to be fulfilled” – for example, if you had not provided the documents or details DataFlow needed.',
    },
    {
      question: 'My university has closed. What can I do?',
      answer:
        'Tell the provider at once, with the name of any body that took over the university’s records – a successor university, the national examinations board or the ministry of higher education may hold them. DHP publishes no rule on alternative evidence for a closed institution; its guidelines say originals may be requested and that “A case-by-case assessment may be implemented”, so ask the DHP registration section, through your employer’s representative, what it will accept before you apply for evaluation.',
    },
    {
      question: 'Will a UTV follow me to other GCC regulators?',
      answer:
        'It stays on that report, and DataFlow shares the final report with the regulator itself. Expect a report re-issued to another regulator to carry the old results unless the document is re-verified – ask DataFlow before you transfer – which is why it is worth appealing within DataFlow’s 180-day window rather than leaving the result in place. The [report-transfer guide](/qatar/psv/report-transfer) explains transfers.',
    },
  ],
  markdown: `
## What does "Unable to Verify" mean?

Every document in a PSV report ends with a result. A clean result means the issuer confirmed it. **Unable to Verify** means the provider could not get a confirmation – the university, council or employer did not answer, could not be reached, or could not find the record. On its own it is not a finding that the document is false. A **Discrepancy** is different: the issuer answered, but something differs from what you submitted – a date, a title, a name. The [Discrepancy guide](/qatar/psv/problems/discrepancy) covers that.

The providers use different labels:

| Provider | Label | When it is used |
| --- | --- | --- |
| DataFlow | Unable to Verify | In practice, the issuer did not confirm the document |
| QuadraBay | Unable to Check | The information QuadraBay asked you for was not supplied within 30 days of its request (Circular DHP/2025/20) |
| AVS | – | We found no published AVS result labels; ask AVS how an unconfirmed document is reported |

## What does DHP do with a UTV?

DHP checks the PSV results before it approves an evaluation. The process maps in its Guidelines for Nurses and for Physicians show what follows an "Unable to verify/ Negative" result: the applicant is called for interview, and the result of the interview is one of three outcomes – the application proceeds to approval, it goes down the map's "Re-verify within 14 days" branch (the map does not say who re-verifies or how), or the applicant is "rejected/blacklisted". DHP's Guidelines for Physicians say it "reserves the right to conduct interviews as part of the evaluation process if required", and both sets of guidelines say original documents may be requested on a case-by-case basis and that "A case-by-case assessment may be implemented".

So a UTV does not end an application by itself, but it adds an interview and possibly a 14-day re-verification at the point where you least want one. Resolve it at the provider before your employer submits the evaluation.

## Why does it happen?

DataFlow's FAQ names the causes of delay as "an incomplete submission with missing documents from an applicant, a late response from the issuing authorities, or unavoidable incidents such as conflicts, strikes, natural disasters". If a delay is not resolved, the result is often a UTV. Common reasons include:

- **The issuer never answered** – the request went to a general mailbox, the verification office changed, or the issuer charges a fee that was not paid.
- **Wrong or incomplete contact details** – an abbreviated institution name, a college named without its awarding university, an HR e-mail that no longer works.
- **Something the provider asked you for was not supplied** – a consent form, a clearer scan, a missing page, a registration number. At QuadraBay that closes the component as Unable to Check after 30 days.
- **The institution has closed or merged**, or is in a conflict area, and nobody is answering for its records.
- **The record cannot be found** under the details you gave – often a name or date mismatch.

## How do you appeal a DataFlow UTV?

DataFlow's FAQ describes the appeal:

1. **Check the deadline.** You can submit an appeal "within 180 days of completion of your Unable To Verify or Discrepancy report".
2. **Open the tracker.** Visit dataflowstatus.com and enter your DataFlow case number and registered passport number. If your case is newer – DataFlow's DHP page limits that tracker to cases filed on or before 31 August 2024 – sign in to the DataFlow portal you applied through and look for the appeal option there; if you cannot find one, submit a support request.
3. **File the appeal.** Click *File an Appeal* and upload the supporting document or add the information that was missing. If you are not eligible, the screen shows the reason.
4. **Know the cost.** One re-verification through an appeal is free, but a UTV re-verification costs extra when it is needed because you had not provided what DataFlow asked for.
5. **Ask for help if needed.** If you are unsure whether you are eligible, DataFlow's FAQ says to submit a support request at [support.dataflowgroup.com](https://support.dataflowgroup.com/).

An appeal re-verifies "the same documents that they submitted in their application" – it is not a way to add a new document. It is more likely to succeed once something has changed: the issuer knows to expect the request, its fee is paid, the right contact is named. Supplying missing documents or details can make the re-verification chargeable. Do that groundwork before you file.

## What should you do before you appeal?

1. **Find out why.** Read the status and any remarks on the document in the report or tracker, and ask support what the issuer said, if anything.
2. **Call the issuer yourself** ([follow-up guide and templates](/qatar/psv/problems/university-not-responding)). Find the office that handles verification – a university's examinations or verification section, a council's registration desk, a hospital's HR – and ask what it needs.
3. **Pay any fee the issuer charges** and keep the receipt.
4. **Give a named contact** with an official e-mail address on the institution's own domain, not a personal address.
5. **Fix name and date problems** with the document that links the names or a corrected letter – the [name-mismatch guide](/qatar/psv/problems/name-mismatch) explains which.
6. **Then file the appeal** with that information, inside the 180 days.

For QuadraBay, answer every request inside the 30-day window – once a component is closed as Unable to Check, the circular does not say how it reopens, so ask QuadraBay support (dhp.support@quadrabay.com) before you pay for anything new.

## How do you prevent a UTV on the next document?

- Tell your university and employers before you apply, and confirm they will answer requests from the provider you chose.
- Name institutions in full, never by initials, and give the awarding university as well as the college.
- Use experience certificates with exact dates, your job title and a signatory with an official e-mail.
- Watch the tracker weekly in the first month, when requests for information can arrive – the [status guide](/qatar/psv/status) shows where.
- Allow for the issuer's own time: the [timeline guide](/qatar/psv/timeline) shows when to escalate.

The [documents guide](/qatar/psv/documents) lists what each package verifies and what to upload.
`,
}
