/**
 * Seed content: PSV fees for Qatar DHP (brief 5).
 * Facts checked 16 Oct 2026 against: DataFlow's DHP price list PDF (file dated 28 Jul 2025, read in full) and its
 * Customer Reference Kit for DHP; Circular DHP/2025/20 (QuadraBay packages and fees); the AVS "DHP Reference Program
 * Guide" PDF; Circular DHP/2024/10 (Prometric exam fee, read in full); the QCHP registration & licensing FAQ
 * (Nov 2014, the last fee table DHP's predecessor published – used only for evaluation and licence fees, labelled
 * as such). The master table on the page is rendered from the Fees collection (showFeeComparison), so the prose
 * quotes only the figures needed for the worked examples.
 */

export const feesGuide = {
  title: 'PSV fees for Qatar DHP in 2026: DataFlow, QuadraBay and AVS compared',
  path: '/qatar/psv/fees',
  section: 'psv' as const,
  summary:
    'Primary Source Verification for a Qatar DHP licence costs QAR 900 to 1,210 for a practising clinician’s standard package: QAR 900 for nurses, pharmacists and allied health at QuadraBay and AVS (QAR 990 at DataFlow), and QAR 1,050 to 1,210 for physicians and dentists. Extra documents, a faster tier and the provider you pick can move the total by several hundred riyals. This page puts the main PSV packages from the three DHP-approved providers in one table, shows what each package covers, and adds the other costs of a Qatar licence: the US$244 qualifying exam and DHP’s evaluation and licence fees.',
  meta: {
    title: 'PSV Fees in Qatar 2026: DataFlow, QuadraBay & AVS Prices',
    description:
      'Every Qatar DHP PSV fee in one table: DataFlow, QuadraBay and AVS packages for doctors, nurses and allied health, add-ons, express, and total licence cost.',
  },
  showFeeComparison: true,
  showVendorTable: false,
  showCalculator: true,
  verifiedOn: '2026-10-16',
  verifiedAgainst: [
    {
      label: 'DataFlow – DHP price list (PDF dated 28 July 2025)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages and fees',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'AVS – DHP Reference Program Guide (fee schedule)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
    {
      label: 'Circular DHP/2024/10 – qualifying examination fee',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-10%20E.pdf',
      circularNumber: 'DHP/2024/10',
    },
    {
      label: 'QCHP registration & licensing FAQ (Nov 2014) – last published evaluation and licence fees',
      url: 'https://www.hamad.qa/EN/Join-Us/Recruitment/Documents/QCHP-English-FAQs.PDF',
    },
  ],
  changeLog: [{ date: '2026-10-16', note: 'First published. All provider prices re-checked against the three providers’ current lists; exam fee from Circular DHP/2024/10.' }],
  faqs: [
    {
      question: 'Which PSV provider is cheapest for nurses in Qatar?',
      answer:
        'QuadraBay and AVS both list QAR 900 for nurses and pharmacists, against QAR 990 at DataFlow. AVS covers the most within that price – up to two qualifications and five years of employment, where QuadraBay’s and DataFlow’s nurse package covers one qualification and three years – so a nurse with a diploma and a degree pays QAR 900 at AVS, QAR 1,050 at QuadraBay and QAR 1,390 at DataFlow. For a published 14-day target, QuadraBay Prestige at QAR 1,200 is the cheapest fast option.',
    },
    {
      question: 'Are PSV fees refundable?',
      answer:
        'Plan as if they are not. You pay the provider when you submit, not when the result comes back positive, and none of the three providers’ published fees mentions a refund for a document that ends as Unable to Verify or Unable to Check. The qualifying exam is different: Circular DHP/2024/10 lets you cancel or reschedule for US$25 at 30 days or more before the exam and US$40 at 5–29 days; inside 5 days, or if you miss it, you lose the full fee.',
    },
    {
      question: 'Does my employer pay for PSV?',
      answer:
        'It depends on your contract. The PSV application is yours – you register, sign the authorization and pay – although providers also run business accounts for facilities that submit staff in bulk. Licence applications are submitted by the employing facility’s focal point in the DHP portal, and the last fee FAQ, published in 2014 by DHP’s predecessor QCHP, describes the focal point paying the evaluation and licence fees. A preliminary evaluation can reportedly now be filed without an employer (Circular DHP/2024/22). Ask your recruiter in writing which costs the employer covers or reimburses before you pay anything.',
    },
    {
      question: 'How much is PSV in US dollars or Indian rupees?',
      answer:
        'The Qatari riyal is pegged to the US dollar at QAR 3.64, so dollar figures are stable: QAR 900 is about US$247, QAR 990 about US$272, QAR 1,050 about US$288 and QAR 1,210 about US$332. For rupees, pesos and other currencies, convert the dollar figure at your bank’s rate on the day, and allow for the card fee your bank adds to foreign payments.',
    },
    {
      question: 'Is it cheaper to transfer an existing report than to start again?',
      answer:
        'Almost always. DataFlow re-issues a report it made for another authority (DHA, DOH, SCFHS, NHRA and others) for QAR 323, and one already issued to DHP for QAR 215; QuadraBay transfers its own reports for QAR 150. That is a fraction of a new package, provided nothing new needs verifying. AVS lists QAR 250 to transfer a report from another vendor, but no DHP circular says DHP accepts reports moved between providers – ask DHP first.',
    },
  ],
  markdown: `
## How much does PSV cost for a Qatar DHP licence?

The table above lists the main packages each of DHP's three approved providers publishes for healthcare practitioners, with the standard price, the total if you pay for the faster tier, and the US dollar equivalent. In short:

- **Nurses, midwives and pharmacists:** QAR 900 at QuadraBay and AVS, QAR 990 at DataFlow.
- **Allied health professionals:** QAR 900 at QuadraBay and AVS, QAR 990 at DataFlow.
- **Physicians and dentists:** QAR 1,050 at AVS, QAR 1,100 at QuadraBay, QAR 1,210 at DataFlow.
- **Clinical nurse specialists, nurse practitioners and nurse educators:** the same as physicians – QAR 1,050, 1,100 and 1,210. AVS labels its package for these roles "Qatar to Qatar", so confirm with AVS that the price applies if you are coming from abroad.
- **Trainees with no experience:** QAR 525 at AVS and QAR 600 at DataFlow; QuadraBay's circular lists no trainee package.

All three providers are accepted for every DHP licensing category and application type, so nothing in DHP's rules makes the dearer provider the safer choice. The [PSV overview](/qatar/psv) explains the process; the provider guides for [DataFlow](/qatar/psv/dataflow), [QuadraBay](/qatar/psv/quadrabay) and [AVS](/qatar/psv/avs) cover each portal in detail. To price your own file, use the [fee calculator](/tools/psv-fee-calculator) below the FAQ.

## What does each package include?

The headline price only compares like with like if the package covers your documents. The packages differ most for nurses:

- **DataFlow and QuadraBay, nurses and pharmacists (Package E):** one educational qualification, one professional licence and the last three years of employment.
- **DataFlow and QuadraBay, allied health (Package B):** one qualification, one licence and the last five years of employment.
- **DataFlow and QuadraBay, physicians and dentists (Package A):** up to two qualifications, one licence and the last five years, with up to three employers.
- **AVS, every clinical package:** up to two qualifications, one licence and the last five years with up to three employers – for nurses and allied health as well as physicians.

Each provider also runs its own background check within the package: DataFlow and AVS call it a cross check, QuadraBay a GlobeX database check. Good-standing certificates and surgical logbooks are not part of any standard clinical package; you add them, or buy the good-standing package (Package I, two to three certificates) if certificates are all you need.

## What do extra documents cost?

Anything outside your package is charged as an add-on, and this is where the totals drift apart:

- **DataFlow** charges per document: QAR 400 for an extra qualification and QAR 300 each for an extra licence, good-standing certificate, surgical logbook or employer beyond three.
- **QuadraBay** charges by the number of extra documents, whatever their type: QAR 150 for one, 200 for two, 250 for three and 300 for four (Circular DHP/2025/20).
- **AVS** charges QAR 300 for an extra qualification and QAR 250 for an extra licence, good-standing certificate, employment check or logbook.

**Worked example – a nurse with a diploma and a BSc.** That is two qualifications. At DataFlow it is Package E plus one extra qualification: QAR 990 + 400 = **QAR 1,390**. At QuadraBay: QAR 900 + 150 = **QAR 1,050**. At AVS both qualifications sit inside the package: **QAR 900**.

**Worked example – a specialist physician who also needs a good-standing certificate verified.** Package A covers the degree, the specialist qualification, the licence and five years. Adding the certificate: DataFlow QAR 1,210 + 300 = **QAR 1,510**; QuadraBay QAR 1,100 + 150 = **QAR 1,250**; AVS QAR 1,050 + 250 = **QAR 1,300**.

One cost appears on no price list. DataFlow's reference kit warns that if the institution that issued your document charges for answering a verification request, "the amount will be added to the total" – some universities and nursing councils do. Expect the same at any provider, and budget for it if your university charges.

## Is Express, Prestige or VIP worth paying for?

The faster tiers buy priority in the provider's own queue. They cannot make a registrar or a former employer answer sooner, and the clock stops whenever the provider is waiting for something from you.

- **QuadraBay Prestige** is a separate package with a published target of 14 business days: QAR 1,200 for nurses, pharmacists and allied health, QAR 1,400 for physicians, dentists and advanced nursing roles. It is the cheapest published fast target.
- **DataFlow Express** adds QAR 529 to packages A to E and G for an average of 14 working days – QAR 1,519 in total for a nurse, QAR 1,739 for a physician. For the trainee, good-standing and other small packages, and for report transfers and extra documents, Express is priced by document count instead (QAR 215 for one document up to 529 for four or more).
- **AVS Express** adds QAR 400, but AVS says that "final turnaround time and service conditions are subject to AVS confirmation" – there is no published target to hold it to.

Pay for speed when your institutions are known to answer quickly and a start date depends on it. When the delay is a slow university, a faster tier mostly buys a faster wait.

The concierge-style services change who fills in the form, not what is verified or how fast: DataFlow Applicant Assist (QAR 157) and VIP Virtual Assistance (QAR 788), QuadraBay's concierge (QAR 150) and VIP assistance (QAR 500), and AVS application assistance (QAR 100). SMS status alerts cost about QAR 10 at DataFlow and QuadraBay.

## What does a Qatar healthcare licence cost in total?

PSV is one of four costs. The other three are DHP's and Prometric's, not the provider's:

| Cost | Nurses, pharmacists, allied health | General physicians and dentists | Specialist physicians and dentists |
|---|---|---|---|
| PSV, standard package | QAR 900–990 | QAR 1,050–1,210 | QAR 1,050–1,210 |
| Qualifying exam (Prometric) | US$244 (about QAR 888) | US$244 (about QAR 888) | US$244 (about QAR 888) |
| DHP evaluation | QAR 100 | QAR 100 | QAR 100 |
| DHP licence | QAR 600 | QAR 1,000 | QAR 1,200 |
| **Approximate total** | **QAR 2,488–2,578** | **QAR 3,038–3,198** | **QAR 3,238–3,398** |

The exam fee is official: Circular DHP/2024/10 set it at US$244 for exam bookings made from 1 January 2026, with US$25 to reschedule 30 or more days ahead and US$40 at 5–29 days. Holders of certain certificates are exempt from the exam altogether; the list is in Circular DHP/2025/19, linked from DHP's qualifying-exam page.

The evaluation and licence fees are less certain. DHP does not publish a current fee schedule on its website; the figures above are from the last table its predecessor, the Qatar Council for Healthcare Practitioners, published (November 2014). The portal shows the exact fee at payment – confirm it there. The same FAQ lists licence renewal at the same price as the licence.

## How do you pay, and what happens if a document fails?

Each provider takes payment in its own portal when you submit: QuadraBay shows Visa, Mastercard and UnionPay; AVS lists card, Google Pay and Apple Pay; DataFlow takes payment through its payment gateway at the end of the application. Check the total on the payment page – package, add-ons and any issuing-authority fee – before you confirm.

You pay for verification, not for a positive result. If a university does not reply, or a document comes back Unable to Verify, the fee has been spent: DataFlow's price list and reference kit mention no refund for that outcome, and we found no refund terms in QuadraBay's or AVS's published fees either. That is why the cheapest provider is the one you only have to pay once: fix name mismatches, missing dates and unreachable signatories before you submit. The [PSV overview](/qatar/psv) lists the six checks to make first.
`,
}
