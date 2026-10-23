/**
 * Seed content: report transfer (brief 9).
 * Facts checked 23 Oct 2026 against: DataFlow's DHP programme page ("Report Transfer Option" wording, 5 days if no
 * additional documents, transfers between Gulf regulators and internationally, DHP report usable in the UAE, KSA, Bahrain,
 * Oman and the UK; "I'm an existing applicant and want to transfer an old report" / TRANSFER NOW); DataFlow's DHP price
 * list (re-issuance QAR 215 for reports previously issued to DHP, QAR 323 for reports previously issued to other
 * authorities; add-ons QAR 300/400; Express for report transfers priced by document count QAR 215/323/430/529; Package J);
 * Circular DHP/2025/20 (QuadraBay report transfer QAR 150; bundle pricing for extra documents); AVS DHP Reference Program
 * Guide (report transfer/re-issuance QAR 250, transfer from another vendor QAR 250, within the same client QAR 150);
 * DataFlow FAQ (appeal within 180 days of an Unable To Verify or Discrepancy report – as used on the status page);
 * QuadraBay's NHRA Bahrain partnership (quadrabay.com press item). No DHP circular addresses reports moved between
 * providers; the page says so. Prices come from the Fees records.
 */

export const reportTransferGuide = {
  title: 'Transferring a DataFlow or QuadraBay report to Qatar DHP: fees, steps and what still needs verifying',
  path: '/qatar/psv/report-transfer',
  section: 'psv' as const,
  summary:
    'If DataFlow has already verified you for another regulator – DHA, DOH, MOHAP, SCFHS, NHRA, Oman’s MOH or another regulator abroad – you can usually transfer that report to Qatar’s DHP instead of paying for a new one: DataFlow charges QAR 323 to re-issue a report made for another authority (QAR 215 if it was already issued to DHP) and quotes a new DHP report “within 5 days if no additional documents are needed”. QuadraBay lists a report transfer at QAR 150. What a transfer does not cover is anything new since the old report – a later employer and licence, a fresh certificate of good standing – which is verified at the source and priced as an add-on, so the more that is new, the smaller the saving. No DHP circular says a report can move from one provider to another. Below: costs, what still needs verifying, two worked examples, the steps, and when a new application is the better choice.',
  meta: {
    title: 'DataFlow Report Transfer to Qatar DHP: Fees & Steps 2026',
    description:
      'Already verified for DHA, DOH, SCFHS or NHRA? How to transfer a DataFlow or QuadraBay report to Qatar DHP, what it costs and when you need new PSV.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DataFlow – DHP programme page (Report Transfer Option)',
      url: 'https://dataflowgroup.com/organization/dhp-moph-qatar/',
    },
    {
      label: 'DataFlow – DHP price list (report re-issuance, add-ons, Express)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages and report transfer',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'AVS – DHP Reference Program Guide (fee schedule)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Transfer fees from DataFlow’s DHP price list, Circular DHP/2025/20 and AVS’s fee schedule; transfer wording from DataFlow’s DHP programme page. Independent fact-check applied: worked examples now count the new licence.',
    },
  ],
  faqs: [
    {
      question: 'Can I use my DHA or SCFHS DataFlow report for Qatar?',
      answer:
        'Yes, through a DataFlow report transfer. DataFlow’s DHP page says it “allows applicants to transfer their reports between Gulf health regulators and internationally”, and its price list charges QAR 323 to re-issue a report previously issued to another authority as a DHP report. DataFlow’s process is to re-issue the report to DHP for that fee; neither DHP nor DataFlow describes DHP accepting a report addressed to another regulator. Anything new since the old report – a later employer and licence, a certificate of good standing – is verified as an add-on.',
    },
    {
      question: 'Can I transfer my DataFlow report to QuadraBay or AVS to save money?',
      answer:
        'Not on any published DHP basis. QuadraBay’s QAR 150 transfer is for its own reports. AVS lists a “report transfer from another vendor” at QAR 250, but no DHP circular and nothing on DHP’s PSV page says DHP accepts a report moved between providers. Ask the DHP registration section in writing before you pay for one; otherwise the choice is a DataFlow transfer or a new application with the other provider.',
    },
    {
      question: 'I already had a DHP report and I am changing employer. Do I need a new one?',
      answer:
        'Usually not a whole new report. DataFlow re-issues a report that was previously issued to DHP for QAR 215 – for example for a re-registration or a new employer – and you add whatever is new – the latest employer, a fresh good-standing certificate – as add-ons or as Package J (one good-standing certificate plus your most recent employment certificate, QAR 550 at DataFlow, QAR 500 at AVS). Check with your new employer which documents DHP wants verified for the new licence.',
    },
    {
      question: 'Can I transfer a QuadraBay report from Bahrain to Qatar?',
      answer:
        'QuadraBay lists a report transfer at QAR 150 in Circular DHP/2025/20 and is a PSV partner of Bahrain’s NHRA, but it does not publish which regulators’ reports it transfers to DHP or how. Ask QuadraBay support (dhp.support@quadrabay.com) before you start a new application.',
    },
    {
      question: 'Is DataFlow Express worth it on a transfer?',
      answer:
        'Usually not. For report transfers DataFlow prices Express by document count – QAR 215 for one document up to QAR 529 for four or more – and the transfer itself is already quoted at five days when nothing new is needed. When something new is needed, most of the wait is the employer or council answering: Express shortens DataFlow’s own handling, not their reply.',
    },
  ],
  markdown: `
## Can you reuse a report from another regulator?

Yes for DataFlow, which publishes a transfer route. DataFlow's DHP page says it "allows applicants to transfer their reports between Gulf health regulators and internationally", and that you can "Apply for a Report Transfer and receive your new DHP – MOPH Qatar report within 5 days if no additional documents are needed". QuadraBay lists a report transfer in its DHP fees (Circular DHP/2025/20), and AVS lists one in its fee schedule, but neither publishes which regulators' reports it re-issues to DHP – ask before you pay.

What a transfer does is re-issue verification that has already been done as a report addressed to DHP. DataFlow's process is to re-issue the report to DHP for a fee; neither DHP nor DataFlow describes DHP accepting a report addressed to the Dubai Health Authority or the Saudi Commission as it is. DHP's PSV page asks you to attach the verification report to the evaluation application.

## How much does a transfer cost?

| Provider | What is transferred | Fee |
| --- | --- | --- |
| DataFlow | A report previously issued to another authority (DHA, DOH, MOHAP, SCFHS, NHRA, Oman and others) | QAR 323 |
| DataFlow | A report previously issued to DHP (for example, re-registration or a new employer) | QAR 215 |
| QuadraBay | A QuadraBay report | QAR 150 |
| AVS | An AVS report (transfer or re-issuance) | QAR 250 |
| AVS | A report "from another vendor" | QAR 250 – DHP has not said it accepts one |

Each is a fraction of a new package – QAR 900 to 1,210 for a standard package, set out in the [PSV fees guide](/qatar/psv/fees). AVS also lists a transfer "within the same client" at QAR 150.

## What still needs fresh verification?

The transfer covers what the old report verified. Anything that came after it, or that DHP's rules need and the other regulator did not, is verified at the source and priced as an extra document:

- **Employment and licences since the old report.** DHP's guidelines ask for the experience that fits your scope and for licences "accompanying the required years of work experience". A job you started after the old report was issued is new – and so is the licence you got for it, such as the DHA licence you received after DataFlow verified you for DHA.
- **A certificate of good standing.** DHP wants it at the licensing stage, no more than six months old, and since 1 August 2025 only as a PSV report (Circular DHP/2025/08). The six months run from the certificate's issue date, so one used for another regulator will usually need replacing – and it comes from the authority that licensed you for your most recent years of work.
- **Documents DHP needs that the other regulator did not** – a second qualification, or an exempting exam certificate (PSV-verified from 1 January 2026 under Circular DHP/2025/19). Surgeons applying for privileges also need a surgical logbook "verified by PSV company" (DHP's Guidelines for Physicians).

Extra documents cost QAR 300 each at DataFlow (QAR 400 for a qualification), QAR 150 to 300 for one to four documents at QuadraBay, and QAR 250 each at AVS (QAR 300 for a qualification). Each one takes as long as that employer or council takes to answer – so "within 5 days" applies only when nothing new is needed.

The results come with the report, too. A re-issued report carries the old results, so expect a Discrepancy or Unable to Verify to carry over unless the document is re-verified. DataFlow allows an appeal within 180 days of the report's completion; for an older report, ask DataFlow support how the result can be re-verified before you transfer. The [status guide](/qatar/psv/status) explains the outcomes.

## Worked examples: a nurse moving from Dubai to Doha

A nurse verified by DataFlow for DHA in 2024 now applies to DHP. The prices below are the published ones; DataFlow does not list a price for adding an employer to a transfer, so its extra-document rate of QAR 300 is assumed – confirm it with DataFlow.

**Little has changed.** She is still with the employer and licence the old report covered, and needs only a certificate of good standing:

| Route | Cost |
| --- | --- |
| DataFlow transfer + good standing | QAR 323 + 300 = **QAR 623** |
| New QuadraBay application (Package E) + good standing | QAR 900 + 150 = **QAR 1,050** |

The transfer is clearly cheaper, and with only one new document it is also the faster route.

**A lot has changed.** Since the report she has taken a new job in Dubai with a DHA licence, so the new employer, the new licence and a good-standing certificate all need verifying:

| Route | Cost |
| --- | --- |
| DataFlow transfer + new employer + new licence + good standing | QAR 323 + 300 + 300 + 300 = **QAR 1,223** |
| New QuadraBay application (Package E, three years of employment) + 2 extra documents | QAR 900 + 200 = **QAR 1,100** |
| New AVS application (five years of employment) + licence + good standing | QAR 900 + 250 + 250 = **QAR 1,400** |
| New DataFlow application (Package E) + licence + good standing | QAR 990 + 300 + 300 = **QAR 1,590** |

Here a new QuadraBay application is slightly cheaper, but it re-verifies the degree and every employer in the package's three-year window – where most of PSV's time goes, as the [timeline guide](/qatar/psv/timeline) explains – while the transfer verifies only the three new documents. If DataFlow lets you combine a transfer with Package J (one good-standing certificate plus your most recent employment certificate, QAR 550), the transfer route drops to QAR 1,173. Each extra licence, employer or certificate narrows the transfer's advantage; a new application also makes sense when the old report has an unresolved problem.

## How do you apply for a DataFlow transfer?

1. **Find your old case number** – in DataFlow's confirmation e-mail, or through its support centre.
2. **Start from DataFlow's DHP page.** Choose *I'm an existing applicant and want to transfer an old report* and select *Transfer now*.
3. **Add what is new** – the later employer, the good-standing certificate, any document DHP needs that the old report did not cover – and pay the transfer fee plus the add-ons.
4. **Check your name.** If your name has changed since the old report, upload the document that links the names – the [name-mismatch guide](/qatar/psv/problems/name-mismatch) explains which.
5. **Track it** like any other case – the [status guide](/qatar/psv/status) shows where.
6. **Attach the new DHP report** to your evaluation application, as DHP's PSV page asks.

For a QuadraBay or AVS transfer, start from that provider's DHP portal ([QuadraBay](/qatar/psv/quadrabay), [AVS](/qatar/psv/avs)) and confirm with its support team, before paying, that your report can be re-issued to DHP.

## Leaving Qatar later?

The same works in the other direction. DataFlow's DHP page says you can "Use your DHP report to apply in countries like the UAE, KSA, Bahrain, Oman, and the UK", through a transfer to that regulator.
`,
}
