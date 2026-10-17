/**
 * Seed content: AVS (Approved Verification Services) guide for Qatar DHP.
 * Facts checked 11 Oct 2026 against the Circular DHP/2026/36 PDF (read in full), the DHP PSV page, the AVS DHP
 * Application Guide PDF and the AVS "DHP Reference Program Guide" PDF, which is the fee schedule. AVS has published
 * no FAQ, so anything not in those four documents is marked as unknown rather than guessed.
 */

export const avsGuide = {
  title: "Approved Verification Services (AVS): Qatar's third PSV provider explained",
  path: '/qatar/psv/avs',
  section: 'psv' as const,
  featuredVendorSlug: 'avs',
  summary:
    "Approved Verification Services (AVS) became the Department of Healthcare Professions' third approved Primary Source Verification provider on 3 September 2026 under Circular DHP/2026/36. It is the only Qatar-based provider, and its published schedule undercuts the others for physicians and dentists (QAR 1,050), matches QuadraBay for nurses, pharmacists and allied health professionals (QAR 900) and verifies more in those three packages than either. The portal shows a 20-day turnaround; Express costs QAR 400 but has no published target. This guide sets out every fee, what is verified, how the avsqatar.com portal works, and what is still unknown about a provider this new.",
  meta: {
    title: 'AVS Qatar: Approved Verification Services for DHP PSV',
    description:
      'Approved Verification Services (AVS) is Qatar DHP’s third PSV provider, approved 3 Sep 2026. Physicians QAR 1,050, nurses QAR 900, trainees QAR 525, express QAR 400 – fees, steps and contacts.',
  },
  showVendorTable: true,
  showCalculator: false,
  verifiedOn: '2026-10-11',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2026/36 – approval of AVS as third PSV provider (3 Sep 2026)',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2036%202026%20E.pdf',
      circularNumber: 'DHP/2026/36',
    },
    {
      label: 'DHP – Primary Source Verification page (AVS office, hours, contacts)',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
    {
      label: 'AVS – DHP Application Guide (portal walkthrough)',
      url: 'https://avsqatar.com/files/AVS_DHP_Application_Guide.pdf',
    },
    {
      label: 'AVS – DHP Reference Program Guide (fee schedule, Aug 2026)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
  ],
  changeLog: [{ date: '2026-10-11', note: 'First published. Fees transcribed from the AVS fee schedule; approval date from the circular PDF.' }],
  faqs: [
    {
      question: 'Is AVS accepted for new DHP applications and renewals?',
      answer:
        'Circular DHP/2026/36 says healthcare practitioners “applying for a licence may submit verification requests through Approved Verification Services from the date of issuance of this Circular, as well as through the other verification companies approved by the Department”. It does not carve out renewals, upgrades or facility submissions, and the DHP Primary Source Verification page lists AVS beside DataFlow and QuadraBay without conditions. For an unusual case – a renewal with a gap, a re-registration – confirm with the DHP registration section before you pay.',
    },
    {
      question: 'Is AVS cheaper or faster than DataFlow?',
      answer:
        'Cheaper, on every published line: QAR 1,050 against QAR 1,210 for physicians and dentists, QAR 900 against QAR 990 for nurses, pharmacists and allied health, QAR 400 against QAR 529 for the express option, and QAR 500 against QAR 550 for a good-standing package. Faster is unproven. The AVS portal shows “20 days turnaround” on the package card without saying whether they are working days, and its express service states that “final turnaround time and service conditions are subject to AVS confirmation”. DataFlow publishes an average of 20 working days and 14 for Express.',
    },
    {
      question: 'Can I switch to AVS if my DataFlow case is stuck?',
      answer:
        'You can start an AVS application at any time, but you pay the full package again, and the institution that is not answering DataFlow is the same institution AVS will write to. AVS lists a “report transfer from another vendor” at QAR 250, yet no DHP circular says the department accepts a report moved between providers, so do not rely on it without asking DHP first. In most stuck cases the faster fix is to chase the university or employer yourself: tell the registrar a request is pending, name a contact, pay any verification fee they charge, and raise a ticket with the provider if nothing moves in 15 working days.',
    },
    {
      question: 'Does AVS verify more documents than the others for the same fee?',
      answer:
        'Yes, for nurses, pharmacists and allied health professionals. Every AVS clinical package covers up to two educational qualifications and the last five years of employment with up to three employers, where DataFlow’s and QuadraBay’s Package E (nurses and pharmacists) covers one qualification and three years. If you hold a diploma and a post-basic qualification, or have worked for more than three years, AVS verifies both within QAR 900 where the others charge for the extra document.',
    },
    {
      question: 'Where is the AVS office and how do I contact them?',
      answer:
        'Abdul Jaleel Business Center, 5th Floor, Office 504, Airport Street, Doha, open Sunday to Thursday from 8 am to 4 pm. The DHP helpdesk address is dhp.helpdesk@avsqatar.com, the office line is +974 4464 4490 and customer care, including WhatsApp, is +974 5054 4490. The site also publishes an Arabic version and a general address, info@avsqatar.com.',
    },
  ],
  markdown: `
## What is AVS and when did DHP approve it?

Approved Verification Services describes itself as a Qatar-based verification company dedicated to Primary Source Verification, with its office at Abdul Jaleel Business Center on Airport Street in Doha. On 3 September 2026 the Department of Healthcare Professions issued Circular DHP/2026/36, "Approval of a Third Provider of Primary Source Verification (PSV) Services: Approved Verification Services (AVS)", addressed to every practitioner and facility in the state. The circular announces "a partnership agreement signed with Approved Verification Services (AVS)", under which AVS "becomes the third approved provider of primary source verification services", and says practitioners "may submit verification requests through Approved Verification Services from the date of issuance of this Circular, as well as through the other verification companies approved by the Department" ([Circular DHP/2026/36](https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2036%202026%20E.pdf)).

That makes AVS the third name on DHP's Primary Source Verification page, after DataFlow (partner since 2009) and QuadraBay (approved 2 December 2025), and the first provider based in Qatar since Gulf Bridge Services' contract ended in February 2024. The DHP page lists the office, the hours (Sunday to Thursday, 8 am to 4 pm), the helpdesk address dhp.helpdesk@avsqatar.com and the phone number +974 4464 4490, and links the two PDFs this guide is built on ([DHP, Primary Source Verification](https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx)).

AVS's own site describes a wider menu – education, employment, identity, criminal-background, licence and reference checks – but the DHP programme uses only the components DHP requires: qualifications, licence, employment and, where asked, good standing and logbooks. The [PSV overview](/qatar/psv) explains how those components work with any provider.

## How much does AVS cost, and what is in each package?

For all three providers' prices side by side, extra-document worked examples and the total cost of a Qatar licence, see [PSV fees for Qatar DHP](/qatar/psv/fees).

AVS prices by profession rather than by DHP's package letters; the table above maps each AVS package to the letter used across this site so you can compare like with like. The headline fees from the AVS schedule:

- **Physicians and dentists: QAR 1,050.** Up to two educational qualifications, one professional licence, the last five years of experience with up to three employers, one cross check.
- **Nurses, pharmacists and allied health practitioners: QAR 900 each**, with the *same* scope – up to two qualifications and five years of employment. This is the point of difference: at DataFlow and QuadraBay a nurse's Package E covers one qualification and three years.
- **Clinical nurse specialists, nurse practitioners and nurse educators: QAR 1,050.**
- **Complementary medicine: QAR 900.**
- **Trainee with no experience: QAR 525** for one qualification and a cross check, in every profession.
- **Good standing: QAR 500** for two to three certificates, or QAR 500 for one certificate plus your most recent employment letter.
- **Visiting physicians and allied health practitioners: QAR 300** for the health licence alone; **single exam certificate: QAR 300**; **non-medical staff: QAR 400**.

Extra documents are QAR 300 for an additional qualification and QAR 250 for an additional licence, good-standing certificate, employment check or logbook. The optional services are **Express / priority verification at QAR 400** ("final turnaround time and service conditions are subject to AVS confirmation" – there is no published day count), **VIP application assistance at QAR 100** (an AVS representative assists with completing the application and following up the case; you remain responsible for the documents), an **express-plus-assistance bundle at QAR 480**, **report transfer or re-issuance at QAR 250**, **report transfer from another vendor at QAR 250** and **report transfer within the same client at QAR 150**. The schedule carries one standard warning worth reading twice: "Issuing Authorities may request additional documents, information or verification fees", and those fees are passed to you.

Payment is by card, Google Pay or Apple Pay inside the portal, according to the application guide's checklist.

## How do you apply and track an AVS application?

AVS publishes two walkthroughs, and the portal follows them. The short version is five phases:

1. **Account.** Register at [avsqatar.com/avs/apply](https://www.avsqatar.com/avs/apply) with your email address and mobile number and confirm the one-time passcode.
2. **Pathway.** Select the destination country (Qatar), the licensing programme (DHP) and your profession from the list: Allied Healthcare Practitioner, Dentist, Non-Medical, Nurse, Pharmacist, Physician, plus *Report Transfer* and *Single Document* for those services.
3. **Package.** The portal shows the packages for your profession with the fee and the "20 days turnaround" label, and offers Express as a value-added service. The estimated total updates as you choose.
4. **File.** Upload a clear, uncut copy of your passport, then your degree or diploma certificates, your health licence and your experience certificates, entering the details of each one as printed on it (the guide labels the sections "Details as per the Passport", "Details as per the Education certificate", and so on). Good standing and logbook are optional components you add if DHP needs them; the [documents guide](/qatar/psv/documents) explains when it does. Fields marked with a red asterisk are mandatory, the portal will not let you move on until they are complete, and extra degrees are added with *Add Another*.
5. **Finish.** Review every section against your passport; download, complete and upload the Letter of Authorization; then pay.

Verification starts after payment and the report is "issued/shared in accordance with the applicable authority process", AVS's phrase for the handover to DHP – download your copy and attach it to the evaluation application on the DHP portal. Track progress at [avsqatar.com/avs/dashboard](https://www.avsqatar.com/avs/dashboard) with your unique reference number; the DHP page gives the same link as the official follow-up route.

## What is the "DHP Reference Program Guide"?

The DHP page links two AVS documents, and the circular points to the first of them. The *AVS DHP Application Guide* is an eighteen-slide walkthrough of the portal, with screenshots of each step. The *DHP Reference Program Guide*, despite its name, is the fee schedule: six pages listing every package, its components, the required documents, the add-on and optional-service prices and a nine-step application summary. The circular itself says to "refer to the Approved Verification Services electronic application guide, which includes the service fee schedule" – so these two PDFs are, for now, the only published terms of the AVS service. There is no separate FAQ, no published refund policy and no statement on how long the report remains valid; where this page says "unknown", that is why.

## AVS vs DataFlow vs QuadraBay: how does it compare?

The comparison table below puts the three providers side by side; the fee calculator on the [PSV overview](/qatar/psv) prices your own profession and add-ons with all three. The honest summary:

- **Price.** AVS is the cheapest published option for physicians and dentists (QAR 1,050 against QuadraBay's 1,100 and DataFlow's 1,210) and ties QuadraBay for nurses, pharmacists and allied health (QAR 900 against DataFlow's 990). Its express fee (QAR 400) sits between QuadraBay's Prestige premium (QAR 300) and DataFlow's Express (QAR 529).
- **Scope.** AVS verifies up to two qualifications and five years of employment in every clinical package; that alone saves a nurse with two qualifications the extra-document fee at the others (QAR 150 at QuadraBay, QAR 400 at DataFlow).
- **Speed.** Unproven. "20 days turnaround" is a portal label, not a circular commitment, and the express service has no published target. DataFlow's 20-working-day average and QuadraBay's 20-business-day Standard target are published, and DataFlow's rests on seventeen years of DHP cases.
- **Reach.** The slowest step in any verification is the university or employer answering. DataFlow has long-standing contacts at institutions across South Asia, the Philippines, Egypt and Nigeria; QuadraBay has been writing to them for Bahrain and Kuwait since 2021; AVS is building that network from September 2026. For a degree from a large, responsive university this will not matter; for a small or closed college, it might.
- **Presence.** AVS and DataFlow both have Doha offices open Sunday to Thursday; QuadraBay works from Dubai, online only.

A reasonable rule: if your file is clean and your institutions are responsive, the AVS saving is real; if you already hold a DataFlow report for another regulator, transfer it instead; if your employer submits in bulk, use the provider HR names.

## What we do not know yet about AVS

A provider approved five weeks before this page was written has gaps that the others do not, and we would rather list them than guess:

- Whether "20 days turnaround" means working days or calendar days.
- The express service's actual target – AVS says it is confirmed case by case.
- Whether DHP accepts a report "transferred from another vendor" for QAR 250; nothing in Circular DHP/2026/36 or on the DHP page says so.
- How AVS handles a document that cannot be verified: the number of re-verification attempts and whether any are free.
- Whether facilities get a business portal with bulk submission, and how the "DHP Reference Program" differs, if at all, from an ordinary application.
- Validity of the report at DHP, which DHP has not published for any provider.

We check the AVS site, the DHP page and the circulars list monthly and update this page when any of these is answered; the change log at the bottom records every revision, and the newsletter below sends the change when it happens.
`,
}
