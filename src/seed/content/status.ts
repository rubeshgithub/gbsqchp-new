/**
 * Seed content: PSV status check (brief 8).
 * Facts checked 23 Oct 2026 against: DataFlow's FAQs (dataflowstatus.com with case number + passport number, search by
 * client reference number, report download, e-mail on completion, confirmation e-mail with the case number, paid SMS
 * alerts, report shared with the regulator), DataFlow's DHP programme page (on/before 31 Aug 2024 → dataflowstatus.com;
 * Track Status links to app.dataflowgroup.com; support centre, WhatsApp +974 44196582, dhpsupport@dataflowgroup.com),
 * DataFlow's support centre (option names), DataFlow's Check a Report page (QR code + Qryptal app), Circular
 * DHP/2025/20 and quadrabay.ts (QuadraBay dashboard, track.quadrabay.com, 30-day window, Unable to Check), avs.ts and
 * DHP's PSV page (AVS dashboard, reference number, helpdesk) and DHP's PSV page (attach the report to evaluation).
 * DataFlow does not publish definitions of its in-progress status labels, so this page does not invent any.
 */

export const statusGuide = {
  title: 'DataFlow status check for Qatar DHP: how to track DataFlow, QuadraBay and AVS applications',
  path: '/qatar/psv/status',
  section: 'psv' as const,
  summary:
    'To check a DataFlow application for Qatar, go to dataflowstatus.com and enter your DataFlow case number and passport number – that is the route DataFlow gives for cases filed on or before 31 August 2024 – or sign in to the DataFlow portal you applied through for newer cases. QuadraBay applicants track in their dashboard or at track.quadrabay.com, and AVS applicants on the avsqatar.com dashboard with their reference number. DataFlow’s tracker and QuadraBay’s show the status of each document, not just the case, and that is where you find which university or employer is holding your report up. Below: where to look for each provider, what the outcomes mean, how to download and authenticate the report, and what to do when nothing moves.',
  meta: {
    title: 'DataFlow Status Check for Qatar: Track Your PSV Report',
    description:
      'How to check DataFlow status for Qatar DHP with your case and passport number, track QuadraBay and AVS, download your report, and act when a case stalls.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DataFlow – FAQs (status, report download, notifications)',
      url: 'https://dataflowgroup.com/faqs/',
    },
    {
      label: 'DataFlow – DHP programme page (trackers, support)',
      url: 'https://dataflowgroup.com/organization/dhp-moph-qatar/',
    },
    {
      label: 'DataFlow – Check a Report (QR authentication)',
      url: 'https://dataflowgroup.com/check-a-report/',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay (30-day window, Unable to Check)',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'DHP – Primary Source Verification (providers, AVS follow-up link)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Tracking routes from each provider’s own pages and DataFlow’s FAQs; no status labels invented.',
    },
  ],
  faqs: [
    {
      question: 'I lost my DataFlow case number. How do I check my status?',
      answer:
        'Look for the confirmation e-mail DataFlow sends from notifications@dataflowgroup.com once your payment is settled – it contains the case number. If you cannot find it, DataFlow’s FAQ says you can search by your client reference number, “your unique number under the regulator you are applying for”. If neither works, raise a request at support.dataflowgroup.com – support cannot reliably find a file by name alone, so include the e-mail address and passport details you applied with.',
    },
    {
      question: 'How do I get the PDF report to attach to my DHP application?',
      answer:
        'From the provider. DataFlow’s FAQ says it e-mails you when the application is complete, shares the final report with your regulator, and lets you download your report at dataflowstatus.com with your case number and passport number – that tracker covers cases filed on or before 31 August 2024; newer reports appear in the DataFlow account you applied through. QuadraBay issues the report through its portal; AVS says the report is “issued/shared in accordance with the applicable authority process”. DHP’s PSV page asks you to attach the report to the online evaluation application, so keep the PDF.',
    },
    {
      question: 'Can my employer see my DataFlow status?',
      answer:
        'Only if they have your details: anyone with your DataFlow case number and passport number can open dataflowstatus.com, so share them only with people you trust. DataFlow’s FAQ says it e-mails you when the application is complete and shares the final report with your regulator. Hospitals can also submit applications for their staff – QuadraBay’s Business Account, for example, gives facilities consolidated tracking of the cases they submit – so ask HR whether your application was filed that way.',
    },
    {
      question: 'My status has not changed for weeks. Is something wrong?',
      answer:
        'Usually one institution has not answered. Look at the status of each document rather than the case as a whole, contact that university or employer yourself with the provider’s reference number, and open a support request if nothing has moved for about three weeks. The [timeline guide](/qatar/psv/timeline) explains what stops the clock at each provider.',
    },
  ],
  markdown: `
## Where do you check your status?

Each provider has its own tracker, and DataFlow has two depending on when you applied:

| Provider | Where to track | What you need |
| --- | --- | --- |
| DataFlow – applied on or before 31 August 2024 | [dataflowstatus.com](https://www.dataflowstatus.com/) | DataFlow case number and passport number (or your client reference number) |
| DataFlow – newer cases | The DataFlow portal you applied through; the DHP page's *Track Status* buttons link to the portal sign-in (dhp.dataflowgroup.com or app.dataflowgroup.com) | Your portal login |
| QuadraBay | Your dashboard on [dhp.quadrabay.com](https://dhp.quadrabay.com/), or [track.quadrabay.com](https://track.quadrabay.com/) | Your QuadraBay reference |
| AVS | [avsqatar.com/avs/dashboard](https://www.avsqatar.com/avs/dashboard) | Your AVS reference number |

DataFlow's FAQ describes dataflowstatus.com as the place to "enter your DataFlow Case Number and Passport Number", and says the page "will give you full visibility on the status of each document" and lets you download the report when it is ready. Its DHP page limits that tracker to applications made "on or before 31 August 2024" and sends newer applicants to the portal sign-in. If one does not find your case, try the other.

Save your case or reference number the day you pay. DataFlow sends it in an automatic confirmation e-mail from notifications@dataflowgroup.com once payment is settled; if you paid and received nothing, its FAQ says to raise a support request.

## What do the statuses mean?

Trackers show a status for the case and for each document – degree, licence, each employer, each good-standing certificate. The providers do not publish a glossary of their in-progress labels, so read them literally and watch for two things: a request for something from you, and a document that has not moved.

The final result for each document is what matters for DHP. In plain terms:

- **A clean result** – the issuer confirmed the document as submitted (providers word this differently).
- **Discrepancy** – in practice, the issuer answered but something differs, such as a date, a title or a name ([Discrepancy guide](/qatar/psv/problems/discrepancy)). DataFlow lets you raise an Appeal "within 180 days of completion of your Unable To Verify or Discrepancy report", and its FAQ says a one-time re-verification through an Appeal is free of charge. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers the commonest cause.
- **Unable to Verify** (DataFlow) – in practice, the issuer did not confirm the document. The same 180-day Appeal window applies; re-verifying an Unable to Verify report costs extra when DataFlow needs documents or details you did not provide. The [Unable to Verify guide](/qatar/psv/problems/unable-to-verify) covers causes and the appeal step by step.
- **Unable to Check** (QuadraBay) – the component was closed because the information QuadraBay asked for was not supplied within 30 days of its request (Circular DHP/2025/20).

A report with a Discrepancy or an unverified document is not a clean report for DHP, and DataFlow shares the final report with the regulator itself. Deal with it at the provider – through an appeal or a corrected document – before you apply for evaluation.

## How do you download and authenticate the report?

- **Download.** DataFlow e-mails you when the application is complete and shares the final report with the regulator; download your copy from dataflowstatus.com (cases filed on or before 31 August 2024) or from the DataFlow account you applied through. QuadraBay issues the report through its portal; AVS says the report is "issued/shared in accordance with the applicable authority process" – download your copy from your AVS account.
- **Attach.** DHP's PSV page asks you to attach the verification report to the online evaluation application – keep the PDF.
- **Authenticate.** A DataFlow report carries a QR code. DataFlow's [Check a Report](https://dataflowgroup.com/check-a-report/) page tells anyone – "an individual applicant, client facility or government regulator" – to scan it with the Qryptal app (no account sign-up needed) and compare the result with the printed report; if they differ, the report is not official.

## What should you do when nothing moves?

1. **Find the stuck document.** Open the per-document view and note which institution has not answered.
2. **Answer anything the provider asked you for.** DataFlow counts its timelines from a complete file, and QuadraBay closes a component after 30 days without your reply.
3. **Contact the institution yourself.** Give the registrar or HR office the provider's name and your reference number, and ask whether it needs a fee or a signed consent – the [follow-up guide](/qatar/psv/problems/university-not-responding) has e-mail templates.
4. **Open a support request after about three weeks without movement.** DataFlow's [support centre](https://support.dataflowgroup.com/) has routes to *Submit Missing Document / Information* and to *Check an existing support request*; DataFlow's DHP page also lists WhatsApp +974 4419 6582 and dhpsupport@dataflowgroup.com. QuadraBay's support address is dhp.support@quadrabay.com; AVS's helpdesk is dhp.helpdesk@avsqatar.com or +974 4464 4490.

The [timeline guide](/qatar/psv/timeline) sets out each provider's published targets and when to escalate, and the provider guides for [DataFlow](/qatar/psv/dataflow), [QuadraBay](/qatar/psv/quadrabay) and [AVS](/qatar/psv/avs) cover each portal in detail.

## Are status alerts worth paying for?

DataFlow sells SMS alerts that keep you informed "at every stage of the application" for an additional fee, and QuadraBay offers SMS alerts at checkout. They save you logging in, nothing more; they do not change how fast anyone answers. If you check the tracker weekly – more often in the first month, when requests for information arrive – you do not need them.
`,
}
