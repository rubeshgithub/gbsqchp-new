/**
 * Seed content: DataFlow guide for Qatar DHP.
 * Facts checked 11 Oct 2026 against DataFlow's DHP organisation page, its "Customer Reference Kit for DHP" (2026
 * edition) and the DHP price list PDF (file dated 28 July 2025, still the list DataFlow links to), plus the DHP PSV page.
 * Figures labelled "reported" come from applicant and consultancy accounts, not from DataFlow.
 */

export const dataflowGuide = {
  title: 'DataFlow verification for Qatar DHP: fees, documents, timeline and how to apply',
  path: '/qatar/psv/dataflow',
  section: 'psv' as const,
  featuredVendorSlug: 'dataflow',
  summary:
    "DataFlow has been the Department of Healthcare Professions' verification partner since 2009 and is the longest-established of the three approved providers. A new application costs QAR 1,210 for physicians and dentists (Package A) and QAR 990 for nurses, pharmacists and allied health professionals (Packages E and B), plus QAR 529 if you want the Express target. DataFlow's own reference kit quotes an average of 20 working days once every document is in; real cases run longer when a university is slow to answer. Below: the full price list, what each package verifies, the nine steps on dhp.dataflowgroup.com, how to track a case and when the paid extras are worth it.",
  meta: {
    title: 'DataFlow Qatar (DHP): Fees, Documents & How to Apply 2026',
    description:
      'DataFlow verification for Qatar DHP/QCHP: 2026 package fees in QAR, documents by profession, express and VIP options, status tracking and the Doha office.',
  },
  showVendorTable: true,
  showCalculator: false,
  verifiedOn: '2026-10-16',
  verifiedAgainst: [
    {
      label: 'DataFlow – DHP (MOPH Qatar) organisation page',
      url: 'https://dataflowgroup.com/organization/dhp-moph-qatar/',
    },
    {
      label: 'DataFlow – Customer Reference Kit for DHP (step-by-step guide and package list)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/Customer-Reference-Kit-for-DHP-EN-2.pdf',
    },
    {
      label: 'DataFlow – DHP price list (PDF dated 28 July 2025)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'DHP – Primary Source Verification page',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    { date: '2026-10-11', note: 'First published. Fees from DataFlow’s DHP price list; steps and 20-working-day average from the 2026 reference kit.' },
    { date: '2026-10-16', note: 'Corrected Package D: it is the retrospective package for allied health professionals in Qatar for more than three years (one qualification, one licence), not a physicians’ package. Price list date corrected to 28 July 2025.' },
  ],
  faqs: [
    {
      question: 'How much is DataFlow for nurses in Qatar?',
      answer:
        'QAR 990 for Package E, which covers one nursing qualification, one licence and the last three years of employment with up to three employers. Add QAR 529 for the Express target of 14 working days. Good-standing certificates are not in the package: QAR 300 each, or QAR 550 for Package I (two to three certificates). Any fee your university or nursing council charges to answer DataFlow is added on top.',
    },
    {
      question: 'Can I apply to DataFlow before I have a job offer?',
      answer:
        'Yes. The application is yours, not your employer’s: you register, upload, sign the authorization and pay. Nothing in the DHP process requires a sponsor before verification, and DHP’s preliminary evaluation route (reported under Circular DHP/2024/22) exists precisely so that you can be “licensing-ready” before you sign a contract. The report stays on your DataFlow account and is also shared with DHP.',
    },
    {
      question: 'What is the DataFlow Express service?',
      answer:
        'A paid upgrade (QAR 529 for Packages A, B, C, D, E and G) that moves your file into a prioritised queue with an average turnaround of 14 working days. It shortens DataFlow’s own handling time; it does not make your university answer faster, and the clock still pauses while DataFlow waits for anything from you. For the small packages (F, H to L), transfers and single add-on documents, Express is priced per document: QAR 215, 323, 430 or 529 for one, two, three or four-plus documents.',
    },
    {
      question: 'Does the DataFlow fee include the good standing certificate?',
      answer:
        'No. Packages A, B, E and G verify qualifications, one licence and employment only. A certificate of good standing is QAR 300 as an add-on, QAR 550 for Package I (two to three certificates) or QAR 550 for Package J (one certificate plus your most recent employment letter). Order it late rather than early: DHP asks for it at the licensing stage in most cases, the good-standing policy requires it to be no more than six months old when you apply for the licence, and since 1 August 2025 DHP accepts it only as a PSV report (Circular DHP/2025/08).',
    },
    {
      question: 'Where is the DataFlow office in Doha?',
      answer:
        'Office 49, 6th Floor, Barwa Tower 1, Doha – open Sunday to Thursday, 8 am to 4 pm, according to the DHP Primary Source Verification page. You can also reach DataFlow’s applicant support on WhatsApp at +974 4419 6582 or raise a ticket at support.dataflowgroup.com; most questions never need the office.',
    },
  ],
  markdown: `
## What is DataFlow, and do you still have to use it?

The DataFlow Group is a Dubai-headquartered verification company that has worked with Qatar's healthcare regulator since 2009, under each of the regulator's names since. DataFlow describes itself as DHP's "trusted verification partner since 2009", and its report is what the department has attached to almost every licence it has issued since then ([DataFlow, DHP page](https://dataflowgroup.com/organization/dhp-moph-qatar/)).

It is no longer the only option. DHP endorsed QuadraBay as a second provider on 2 December 2025 (Circular DHP/2025/20) and Approved Verification Services (AVS) as a third on 3 September 2026 (Circular DHP/2026/36). What *is* mandatory is verification itself: DHP's PSV page calls it "one of the mandatory requirements for registration and licensing" and tells every practitioner to apply for it before applying for evaluation. So the question is not whether to verify but which provider to pay. Three reasons applicants still pick DataFlow:

- **Transfers.** If you were verified for DHA, DOH, MOHAP, SCFHS, NHRA or Oman's MOH through DataFlow, a transfer to DHP is cheaper and faster than a fresh application anywhere else (see the last section).
- **Employers.** DataFlow runs a business portal for facilities that submit staff in bulk, and an employer that uses it may simply tell you to use the same provider.
- **Track record.** Universities in India, the Philippines, Pakistan, Egypt and Nigeria have answered DataFlow requests for seventeen years and often have a named contact for them. That matters more than the fee when your degree comes from a small college.

The [PSV overview](/qatar/psv) compares all three providers; the [QuadraBay](/qatar/psv/quadrabay) and [AVS](/qatar/psv/avs) guides cover the alternatives.

## How much does DataFlow cost for Qatar?

For all three providers' prices side by side, extra-document worked examples and the total cost of a Qatar licence, see [PSV fees for Qatar DHP](/qatar/psv/fees).

The table above is DataFlow's published DHP schedule, in Qatari riyals. The numbers to remember:

- **Package A – physicians and dentists: QAR 1,210.** Up to two qualifications, one licence, the last five years of employment with up to three employers.
- **Package E – nurses and pharmacists: QAR 990.** One qualification, one licence, the last three years of employment.
- **Package B – allied health and complementary medicine: QAR 990.** One qualification, one licence, five years of employment.
- **Package G – clinical nurse specialists, nurse practitioners and nurse educators: QAR 1,210**, the same scope as Package A.
- **Package F – trainee with no experience: QAR 600**, one qualification only.
- **Packages C and D – retrospective: QAR 800 / 700.** C is for physicians and dentists who have worked in Qatar for more than five years (up to two qualifications and one licence); D is for allied health professionals who have worked in Qatar for more than three years (one qualification and one licence). Both are for practitioners asked to complete PSV after licensing, and neither includes an employment check.
- **Packages H to L** cover single purposes: a visiting practitioner's licence (QAR 300), two to three good-standing certificates (QAR 550), one good standing plus the latest employment letter (QAR 550), an allied-health qualification on its own (QAR 400) and non-medical staff (QAR 400).

Anything outside your package is charged per document: QAR 400 for an extra qualification, QAR 300 each for an extra licence, good-standing certificate, surgical logbook or employer beyond three. Two more lines matter at checkout. First, DataFlow's reference kit warns that "if your issuing authority applies verification fees, the amount will be added to the total" – Indian universities and some nursing councils charge for answering, and you pay that through DataFlow. Second, you pay when you submit, not when the result is positive, and neither the price list nor the reference kit mentions a refund for a document that comes back *Unable to Verify* – so fix the file before you pay rather than after.

The optional services are Express (QAR 529, see below), VIP Virtual Assistance (QAR 788 for a dedicated relationship manager on WhatsApp, voice or video), Applicant Assist (QAR 157: you upload the documents and a DataFlow associate completes the online form within two working days) and SMS status alerts (QAR 10.18). None of them changes what is verified.

## What does DataFlow verify in each package?

Every package starts with your passport, which DataFlow lists as "mandatory for all documents", and the signed Letter of Authorization that lets it approach your institutions. After that the components are the same across providers, because they follow DHP's registration requirements:

- **Educational qualifications** – the degree or diploma certificate for the qualification you are registering with. Physicians, dentists and advanced-practice nurses get two in the package; everyone else gets one, and the second costs QAR 400. The office that has to reply is the registrar of the institution that awarded it.
- **Professional licence** – your current registration with the council or ministry where you practise now, verified with that regulator.
- **Employment** – letters covering the last five years (three for nurses and pharmacists) from up to three employers. Each letter needs the exact start and end dates, your job title, your employment status and a signatory whom DataFlow can email or call. A relieving letter without dates and a title will come back as a discrepancy.
- **Cross check** – listed in every package. It is DataFlow's own check, not a document you supply.

Not in the standard packages: certificates of good standing, surgical logbooks and any licence other than the current one. Add them at the add-on prices above, or buy Package I or J if the certificate is all you need. Before you upload anything, make sure the name, date of birth and qualification title are identical across every document; the [documents guide](/qatar/psv/documents) lists what each document must show, including the transcripts and both sides of each degree that DataFlow’s checklist asks for.

## How do you apply to DataFlow for DHP, step by step?

DataFlow's reference kit sets out nine steps, and the portal follows them in order:

1. Go to [dhp.dataflowgroup.com](https://dhp.dataflowgroup.com/en/onboarding/signin) and register with a valid email address and mobile number.
2. Enter the one-time passcode sent to your email and phone.
3. Log in.
4. Choose the territory **Qatar** and the regulator **DHP**.
5. Enter your details and upload clear scans of each document: passport, qualification certificates, health licence, experience certificates and, if your package needs it, the logbook.
6. Digitally sign the Letter of Authorization (LOA) that the portal generates.
7. Review the application. Click *Edit* to change anything before you submit.
8. On the payment page, check the total – your package, any add-ons and any issuing-authority fee – and click *Submit Application* to reach the payment gateway.
9. Pay. You receive a receipt by email and verification starts.

When the report is complete it is shared with DHP automatically and a copy appears in your account for download; you attach that copy to the evaluation application on the DHP portal. Two alternatives to the online form exist. DataFlow publishes an [offline application form](https://dataflowgroup.com/wp-content/uploads/2024/09/DF-Offline-Application-Form-DHP-updated-1.pdf) for applicants who cannot complete the portal, and employers submit through a separate business portal at business.dataflowgroup.com.

## How long does DataFlow take for Qatar, and what slows it down?

DataFlow's reference kit says a DHP report takes "an average of 20 working days ... from the day of submission of all documents and information required to process the application". Its general FAQ gives "15 to 25 working days" from payment and a complete set of documents, and warns elsewhere that verification "can take up to 3 months". Applicants and consultancies report 25 to 35 working days for a clean file and 45 to 60 when an institution is slow to respond (reported, for example, by [Allocation Assist](https://www.allocationassist.com/how-long-dataflow-verification-take/)). Express cases average 14 working days. The [timeline guide](/qatar/psv/timeline) compares these figures with QuadraBay's and AVS's and adds DHP's own processing times.

Three things explain most of the gap between the average and the worst cases:

- **The clock starts late.** "All documents and information required" includes anything DataFlow asks for after you submit. Until you answer an *insufficient document* request, the case is not on the clock.
- **The university decides the pace.** DataFlow sends the request, follows up and waits. A registrar who needs a fee, a signed consent or a physical letter can hold a file for weeks. Telling the registrar in advance, naming a contact and paying any verification fee on day one is the single most effective thing you can do; the [PSV overview](/qatar/psv) covers what to do before you pay, and a follow-up playbook with email templates is in preparation.
- **Discrepancies restart the component.** A different spelling of your name, a graduation date that differs from the transcript, or an employer who reports different dates sends that document back to you and, after correction, back to the source. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers the evidence that prevents the first of these, and DataFlow's free one-time Appeal if a report already shows one.

If nothing has moved for 15 working days, raise a ticket: the support centre has separate routes for *Submit Missing Document / Information* and *Check an existing support request*.

## How do you track a DataFlow case and get help?

Where you track depends on when you applied. Cases filed **on or before 31 August 2024** are on the old tracker at [dataflowstatus.com](https://www.dataflowstatus.com/applicationstatus), searched by DataFlow case number or reference number. Cases filed after that date are tracked by logging in to the portal you applied on (dhp.dataflowgroup.com; DataFlow's general tracker for newer cases is app.dataflowgroup.com). Save the case number the day you pay; support cannot find a file by name alone. The [status-check guide](/qatar/psv/status) covers all three providers' trackers, what the outcomes mean and what to do when a case stalls.

For help, DataFlow offers three channels: the applicant support centre at [support.dataflowgroup.com](https://support.dataflowgroup.com/) for tickets, WhatsApp on +974 4419 6582, and the Doha service desk at Office 49, 6th Floor, Barwa Tower 1, open Sunday to Thursday from 8 am to 4 pm. The [PSV overview](/qatar/psv) explains the three outcomes a report can show for each document. When your report is ready, anyone – an employer, another regulator – can confirm it is genuine through DataFlow's [report authentication page](https://dataflowgroup.com/check-a-report/).

## Already verified for the UAE, Saudi Arabia, Bahrain or Oman? Transfer instead

DataFlow reports move between Gulf regulators. If you hold a DataFlow report issued to another authority, apply for a **report transfer** rather than a new package: the re-issuance fee for a report previously issued to another authority is QAR 323, and DataFlow quotes a new DHP report "within 5 days if no additional documents are needed". A report that was already issued to DHP – for a re-registration or a new employer – is re-issued for QAR 215.

"No additional documents" is the condition that catches people. DHP will want employment since the old report and a recent good-standing certificate; each is a separate add-on (QAR 300) and each is verified at the source, so a transfer with new employers takes as long as those employers take to reply. The transfer flow starts from the *existing applicant* option on DataFlow's start page, which opens the legacy gateway at ccp3.dfgateway.com. The [PSV overview](/qatar/psv) sets out the transfer options for all three providers.
`,
}
