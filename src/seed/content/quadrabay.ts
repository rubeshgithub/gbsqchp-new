/**
 * Seed content: QuadraBay guide for Qatar DHP.
 * Facts checked 11 Oct 2026 against Circular DHP/2025/20 (packages, fees, targets, portal rules), the DHP PSV page
 * (portal and support address) and quadrabay.com (company background, accounts, tracker, payment methods).
 * Items labelled "reported" come from applicant accounts or third-party summaries.
 */

export const quadrabayGuide = {
  title: 'QuadraBay verification for Qatar DHP: packages, fees and how to apply',
  path: '/qatar/psv/quadrabay',
  section: 'psv' as const,
  featuredVendorSlug: 'quadrabay',
  summary:
    "QuadraBay became Qatar's second approved Primary Source Verification provider on 2 December 2025 under Circular DHP/2025/20, ending the period since February 2024 in which DataFlow had been the only route. Its Standard packages cost QAR 900 for nurses, pharmacists and allied health professionals and QAR 1,100 for physicians and dentists, with a 20-business-day target; the Prestige tier (QAR 1,200 and 1,400) targets 14. DHP accepts QuadraBay reports for every licensing category and every application type. This guide covers the packages, the dhp.quadrabay.com portal, the 30-day rule that turns a slow file into an 'Unable to Check' result, and how QuadraBay compares with DataFlow and AVS.",
  meta: {
    title: 'QuadraBay Qatar: DHP PSV Packages, Fees & Steps (2026)',
    description:
      'QuadraBay was approved as a Qatar DHP PSV provider on 2 Dec 2025. Package fees from QAR 900, 20- or 14-day targets, and a step-by-step application guide.',
  },
  showVendorTable: true,
  showCalculator: false,
  verifiedOn: '2026-10-11',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2025/20 – endorsement of QuadraBay, packages and fees',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'DHP – Primary Source Verification page (QuadraBay portal and support contact)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
    {
      label: 'QuadraBay – company site, application hub and tracker',
      url: 'https://quadrabay.com/',
    },
  ],
  changeLog: [{ date: '2026-10-11', note: 'First published. Packages and fees as published in Circular DHP/2025/20.' }],
  faqs: [
    {
      question: 'Is QuadraBay accepted by DHP for all professions?',
      answer:
        'Yes. Circular DHP/2025/20 endorses QuadraBay for all licensing categories and for every application type – new registration, renewal, upgrade, re-registration and submissions made by healthcare facilities. The DHP Primary Source Verification page lists it alongside DataFlow and AVS as an approved provider.',
    },
    {
      question: 'Is QuadraBay cheaper than DataFlow?',
      answer:
        'For a standard application, yes: QAR 900 against QAR 990 for nurses, pharmacists and allied health, and QAR 1,100 against QAR 1,210 for physicians and dentists. The gap widens if you want speed – Prestige adds QAR 300 for a 14-business-day target, DataFlow Express adds QAR 529 for 14 working days. Add-ons are cheaper too (QAR 150 for one extra document against QAR 300 to 400). AVS, approved in September 2026, undercuts both for physicians at QAR 1,050 and matches QuadraBay’s QAR 900 for nurses.',
    },
    {
      question: 'How long does QuadraBay take?',
      answer:
        'The published targets are 20 business days for Standard and 14 for Prestige, counted from the day your file is complete. They are targets, not guarantees: QuadraBay cannot make a university or a former employer answer faster, and the clock stops whenever it is waiting for something from you.',
    },
    {
      question: 'What happens if I miss the 30-day document window?',
      answer:
        'Circular DHP/2025/20 gives you 30 days to supply anything QuadraBay asks for after submission. If the window closes, that component is closed as “Unable to Check”. An Unable to Check component is not a verified document, so the report is incomplete for DHP; the circular does not say what follows, so expect to resubmit that component. Watch the portal and your email during the first month rather than waiting for a phone call.',
    },
    {
      question: 'Can hospitals submit in bulk?',
      answer:
        'Yes. QuadraBay runs a Business Account for facilities, with a dashboard for multiple applications, a dedicated account manager and consolidated tracking, and the circular expressly covers submissions by healthcare facilities. The verification is still of your documents, with your authorization, and the report is about you.',
    },
  ],
  markdown: `
## What is QuadraBay and who approved it?

QuadraBay is a Dubai-based verification and credential-evaluation company. It has verified for Bahrain's National Health Regulatory Authority since December 2021 and for Kuwait's Ministry of Health private sector, and it holds ISO 9001, 27001 and 22301 certifications according to its site. On 2 December 2025 the Department of Healthcare Professions issued Circular DHP/2025/20, "Endorsement of a Second Provider for Primary Source Verification Services (Quadrabay)", which approved it for all licensing categories and every application type: new registration, renewal, upgrade, re-registration and submissions made by healthcare facilities ([DHP circular PDF](https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf)).

The circular doubles as the price list – DHP published QuadraBay's packages, fees, processing targets and portal rules inside it, which is why every figure on this page can be checked against a government document rather than a vendor brochure. QuadraBay built a dedicated portal for the programme at [dhp.quadrabay.com](https://dhp.quadrabay.com/); support is by email at dhp.support@quadrabay.com, and the company's general line is +971 600 566 777 in Dubai ([DHP, Primary Source Verification](https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx)). There is no Doha office listed, so everything happens online.

Nothing in DHP's rules favours one provider over another. The [PSV overview](/qatar/psv) explains the three options; the [DataFlow guide](/qatar/psv/dataflow) and the [AVS guide](/qatar/psv/avs) cover the alternatives in the same detail.

## How much does QuadraBay cost for Qatar?

For all three providers' prices side by side, extra-document worked examples and the total cost of a Qatar licence, see [PSV fees for Qatar DHP](/qatar/psv/fees).

The table above lists every line in the circular. In summary:

- **Package A – physicians and dentists: QAR 1,100 Standard, QAR 1,400 Prestige.** Up to two qualifications, one licence, the last five years of employment with up to three employers.
- **Package E – nurses and pharmacists: QAR 900 / 1,200.** One qualification, one licence, the last three years of employment.
- **Package B – allied health professionals: QAR 900 / 1,200.** One qualification, one licence, five years of employment.
- **Package G – clinical nurse specialists, nurse practitioners and nurse educators: QAR 1,100 / 1,400.**
- **Package I – two to three certificates of good standing: QAR 550.**

Every package includes a GlobeX global database check, QuadraBay's screening of your documents against its records. Documents outside the package are priced as a bundle rather than per item: QAR 150 for one additional document, QAR 200 for two, QAR 250 for three and QAR 300 for four, whatever the document type. A report transfer costs QAR 150. The optional extras are a concierge service (QAR 150, QuadraBay submits the application for you), VIP virtual assistance (QAR 500) and SMS status alerts (QAR 10), which you can switch on at checkout.

Against DataFlow the saving is QAR 90 to 110 on the package and QAR 229 on the fast tier; AVS, the third provider, lists QAR 900 for nurses and QAR 1,050 for physicians with a QAR 400 express option. Fees are paid on submission, not on a positive result, so the cheapest provider is the one you do not have to pay twice.

## How do you apply on dhp.quadrabay.com?

QuadraBay has not published a step-by-step guide for the DHP portal, so the stages below are what its site, the circular and the general PSV process tell you to expect:

1. **Create a Personal Account** at [dhp.quadrabay.com](https://dhp.quadrabay.com/). Facilities submitting staff use a Business Account instead; QuadraBay says registration is free in both cases.
2. **Select the programme and package.** Choose DHP – MOPH Qatar, your profession, the package the portal maps to it, and Standard or Prestige. The profession you select must match the category you will apply for at DHP.
3. **Upload your documents**: passport, degree or diploma certificates, your current professional licence, employment letters for the period the package covers, and any optional good-standing certificate or logbook. Scan in colour, keep each document in one file, and name every file so that it **starts with a letter** – the circular requires it, and a file name that begins with a number is rejected.
4. **Complete the Letter of Authorization.** Every provider needs your signed authorization before it can approach your university or employers; expect to sign QuadraBay's version inside the application.
5. **Review and pay.** Check every name and date against your passport before you confirm. Payment is by card – the site shows Visa, Mastercard and UnionPay – and you can add SMS alerts at this step.
6. **Track and respond.** Your dashboard and the public tracker at [track.quadrabay.com](https://track.quadrabay.com/) show each component's status. Answer any request for information within 30 days (see below). When every component is complete the report is issued through the portal; download it and attach it to your evaluation application on the DHP portal.

QuadraBay's concierge service (QAR 150) does steps 2 to 5 for you after you send the documents. It is worth paying for if you are uncomfortable with online forms; it does not change what is verified or how fast institutions reply.

## How long does QuadraBay take, and what is the 30-day rule?

The circular publishes two targets: **20 business days for Standard and 14 for Prestige**. Like every provider's target, assume it is counted from a complete file. Prestige buys priority in QuadraBay's own queue; it cannot buy a faster reply from a registrar in Kerala or an HR department in Riyadh, and the time QuadraBay spends waiting for your answer is not counted. Treat the targets as what a clean file achieves when every institution answers promptly; the [timeline guide](/qatar/psv/timeline) compares them with DataFlow's and AVS's.

Two rules in the circular decide whether your file is clean:

- **The 30-day window.** When QuadraBay needs something more – a clearer scan, a missing page, a corrected employment letter, a fee the university charges – you have 30 days to provide it. After that the component is closed as *Unable to Check*. That is not a verified document, so the report is incomplete for DHP – check the portal and your email weekly during the first month.
- **File names start with a letter.** A small rule that rejects uploads and costs applicants days before anyone notices.

The avoidable delays are the same ones that slow every provider: names that differ between passport and certificate, employment letters without exact dates and a reachable signatory, universities that need to be told a request is coming. The [documents guide](/qatar/psv/documents) sets out what each document must show and a checklist to run before you pay.

## QuadraBay vs DataFlow for Qatar: which should you choose?

The comparison table below puts the three providers side by side. The decision usually turns on four questions:

1. **Do you already hold a report?** A DataFlow report issued for another Gulf regulator transfers to DHP through DataFlow for QAR 323 and is reissued within days if nothing new is needed; a QuadraBay report issued to NHRA Bahrain or Kuwait's MOH transfers through QuadraBay for QAR 150. Transferring is almost always cheaper than starting again with the other provider.
2. **Does your employer have a preference?** Hospitals that submit in bulk want every file with one provider. Ask HR before you pay.
3. **Is the price difference worth more than the track record?** QuadraBay is QAR 90 to 110 cheaper on the package and much cheaper on the fast tier. DataFlow has seventeen years of contacts at the universities that answer slowly. For a degree from a large, responsive university the saving is free money; for a small college that has never heard of QuadraBay, DataFlow's existing relationship may save weeks.
4. **Do you want a published fast target?** QuadraBay's Prestige tier is the only published 14-business-day target that is a package in its own right; DataFlow sells Express as an upgrade; AVS has an express fee but no stated target.

Whichever you choose, the file you upload matters more than the logo on the report: the published targets assume a complete file, and a file with a name mismatch is a discrepancy with all three.

## Can you transfer an old DataFlow report to QuadraBay?

QuadraBay's QAR 150 transfer fee is for QuadraBay's own reports moving between regulators – a Bahrain or Kuwait report reissued to DHP. No DHP circular says that a report can be moved from one approved provider to another, and neither DataFlow nor QuadraBay publishes a procedure for it. If your existing report is from DataFlow, the practical routes are a DataFlow transfer (QAR 323) or a fresh QuadraBay application at full price. AVS lists a "report transfer from another vendor" service at QAR 250, but DHP has not stated that it accepts such a report; ask the DHP registration section before paying for one. The [PSV overview](/qatar/psv) sets out the transfer options for all three providers.
`,
}
