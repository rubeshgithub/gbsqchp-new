/**
 * Country guide: Indian nurses (Qatar DHP licensing – State Nursing Council good standing, NUID, GNM / B.Sc / Post Basic).
 * Facts checked 3 Nov 2026 against: the Indian Nursing Council's NRTS FAQ (INC does not license; registration is by the
 * State Nursing Registration Councils; NUID; reciprocal registration through NRTS, Rs 1,000, about a week; renewal once in
 * five years with 150 hours of CNE), INC Notification 9 of 2023 (nurses working outside India to enrol in NRTS), the INC
 * nursing programmes page (ANM 2 years; GNM "3 and 1/2 years 3 years from 2015-2016"; B.Sc 4 years; Post Basic 2 years
 * regular / 3 distance), INC notification F.NO.1-5/2020-INC of 26 Nov 2020 (GNM phase-out withdrawn), INC verification
 * notice and fee notification (institution verification for abroad councils Rs 2,500; about 15 working days); State
 * councils' own pages: Tamil Nadu (fee structure – foreign verification Rs 5,000, good standing letter Rs 2,000; FAQ –
 * soft copy e-mailed, minimum 7 working days after payment; foreign verification hard copy to the requesting council;
 * one year's experience required; 23 Jul 2026 delay circular), Kerala (guidelines PDF, Malayalam, undated – Rs 2,000 for
 * abroad, by NEFT/RTGS; contact desk for "Good Standing, Verification, Data Flow & Migration Certificate"; renewal notices –
 * the live site was down, archived copy of 17 Oct 2026 used), Karnataka (online Foreign Registration/Goodstanding; DHL
 * tracking lists), Andhra Pradesh (hmis.ap.nic.in closing 15 Mar 2026, services via NRTS), Telangana (foreign verification
 * via NRTS; revised fees from 1 Oct 2024), Delhi (overseas verification procedure, Rs 4,000 + 18% GST, 15–30 days, e-mailed
 * to overseas councils), Punjab (notice of 9 Jul 2020: online, Rs 4,000, speed post), West Bengal (abroad verification:
 * paper only; fee table Rs 6,000 from 1 Aug 2024; procedure page still Rs 5,000 + Rs 200 postage), Gujarat (online "Foreign
 * Verification (Good Standing Certificate)" asking for the foreign authority's name, address and e-mail). Maharashtra: no
 * official page found. DHP Guidelines for Nurses (RGN and Assistant Nurse rows); Circular DHP/2025/08; QCHP good-standing
 * policy (certificates for the years of experience DHP counts). Package prices from the Fees records.
 */

export const indiaNursesGuide = {
  title: 'Qatar DHP licence for Indian nurses: State Nursing Council good standing, NUID, GNM and B.Sc',
  path: '/qatar/psv/countries/india/nurses',
  section: 'documents' as const,
  summary:
    'If you are an Indian nurse applying for a Qatar DHP licence, your certificate of good standing comes from your State Nursing Council – not from the Indian Nursing Council, which says it does not license nurses. Each council has its own name for it, its own form and its own fee: for example ₹2,000 for a Tamil Nadu Good Standing Letter e-mailed to you, ₹4,000 plus GST for Delhi’s overseas verification e-mailed to the foreign council, and ₹6,000 for West Bengal’s abroad verification, applied for on paper. Your GNM diploma or B.Sc Nursing fits DHP’s Registered General Nurse rules, and if you were registered in more than one state you may need a certificate from each. Below: the process council by council, the NUID, registrations in two states, and how it all reaches DHP through PSV.',
  meta: {
    title: 'Qatar PSV for Indian Nurses: Good Standing by State (2026)',
    description:
      'Indian nurses applying to Qatar DHP: good standing from Kerala, Tamil Nadu, Karnataka, Delhi, Punjab, West Bengal and other councils – fees, forms, NUID, GNM vs B.Sc, PSV.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-11-03',
  verifiedAgainst: [
    {
      label: 'Indian Nursing Council – NRTS FAQ (licensing by State councils, NUID, reciprocal registration, renewal)',
      url: 'https://www.indiannursingcouncil.org/uploads/files/15994810207765.pdf',
    },
    {
      label: 'Indian Nursing Council – Notification 9 of 2023 (nurses working outside India to enrol in NRTS)',
      url: 'https://www.indiannursingcouncil.org/uploads/pdf/16871697359870.pdf',
    },
    {
      label: 'Indian Nursing Council – nursing programmes (durations)',
      url: 'https://indiannursingcouncil.org/nursingprograms',
    },
    {
      label: 'Indian Nursing Council – notification of 26 Nov 2020 withdrawing the GNM phase-out',
      url: 'https://www.indiannursingcouncil.org/uploads/pdf/17217175071902658197669f5303086de.pdf',
    },
    {
      label: 'Tamil Nadu Nurses and Midwives Council – fee structure and FAQ',
      url: 'https://tamilnadunursingcouncil.com/#/home/Feestructure',
    },
    {
      label: 'Tamil Nadu Nurses and Midwives Council – foreign verification and good standing portal',
      url: 'https://noc.onlinetnnmc.org/',
    },
    {
      label: 'Kerala Nurses and Midwives Council – guidelines for good standing and verification certificates',
      url: 'https://www.knmc.org/guidelines.pdf',
    },
    {
      label: 'Karnataka State Nursing Council',
      url: 'https://www.ksnc.karnataka.gov.in/',
    },
    {
      label: 'Andhra Pradesh Nurses and Midwives Council (services moving to NRTS)',
      url: 'https://hmis.ap.nic.in/',
    },
    {
      label: 'Telangana Nurses and Midwives Council (foreign verification via NRTS)',
      url: 'https://hmis.telangana.gov.in/',
    },
    {
      label: 'Delhi Nursing Council – overseas verification procedure',
      url: 'https://delhinursingcouncil.com/OverseasVerificationProcedure',
    },
    {
      label: 'Delhi Nursing Council – fee structure',
      url: 'https://delhinursingcouncil.com/FeeStructure',
    },
    {
      label: 'Punjab Nurses Registration Council – notice on online foreign verification (9 Jul 2020)',
      url: 'https://www.pnrconline.in/Uploads/Media/Original/92b6ed52-ed5d-411d-bae4-1ee08eedb9ea.pdf',
    },
    {
      label: 'West Bengal Nursing Council – abroad verification',
      url: 'https://www.wbnc.in/Main/page/abroad_verification',
    },
    {
      label: 'West Bengal Nursing Council – fee structure (revised from 1 Aug 2024)',
      url: 'https://www.wbnc.in/Main/page/fees_structure',
    },
    {
      label: 'Gujarat Nursing Council – foreign verification (good standing certificate)',
      url: 'https://gncerp.gujaratnursingcouncil.org/ForeignApplication/Index',
    },
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'Circular DHP/2025/08 – certificates of good standing only through PSV',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
  ],
  changeLog: [
    {
      date: '2026-11-03',
      note: 'First published. Council processes and fees from each State Nursing Council’s own pages and notices; NUID, reciprocal registration and programme lengths from the Indian Nursing Council; qualification rules from DHP’s Guidelines for Nurses.',
    },
  ],
  faqs: [
    {
      question: 'Which council gives an Indian nurse the good standing certificate for Qatar?',
      answer:
        'Your State Nursing Council – the one that holds your RN/RM registration. The Indian Nursing Council’s own NRTS FAQ says “INC does not give license to a nurse to practice. It is responsibility of SNRCs” (the State Nursing Registration Councils). If you were registered with more than one state council during the years DHP counts for your experience, ask your PSV provider whether it needs a certificate from each.',
    },
    {
      question: 'How much does the Tamil Nadu Nursing Council charge for a good standing letter?',
      answer:
        'TNNMC’s fee structure lists “Foreign letters to the individual (Good Standing Certificate)” at ₹2,000 and “Foreign Verification to other Councils in the World” at ₹5,000. You apply at noc.onlinetnnmc.org, pay online after the council approves your request, and TNNMC says the good standing letter is e-mailed to you a minimum of seven working days after payment. It also says you need at least one year of work experience; with less, you get only a verification of your registration certificate.',
    },
    {
      question: 'Do I need an NUID to work as a nurse in Qatar?',
      answer:
        'DHP does not ask for one. The NUID is the Indian Nursing Council’s Nurse Unique Identification number under its Nurses Registration and Tracking System (NRTS). INC’s Notification 9 of 2023 asks Indian nurses working outside India to enrol, and some state councils – Andhra Pradesh and Telangana – now run foreign verification through NRTS, so you may need an NRTS account to get your certificate at all.',
    },
    {
      question: 'Is GNM accepted for a Qatar Registered Nurse licence?',
      answer:
        'It fits the wording of DHP’s rule. DHP’s Guidelines for Nurses accept a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)”, and the Indian Nursing Council lists GNM as three and a half years, three years from 2015–2016, with entry after 10+2. You then need two years of clinical experience after registration and the Prometric exam. DHP decides equivalence at evaluation.',
    },
    {
      question: 'Which PSV provider is cheapest for an Indian nurse registered in two states?',
      answer:
        'On published prices, QuadraBay: about QAR 1,100 for one qualification and two registrations, against QAR 1,150 at AVS and QAR 1,690 at DataFlow. With one registration and two qualifications (GNM and Post Basic B.Sc), AVS is cheapest at QAR 900. The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which council issues your good standing certificate?

Your **State Nursing Council**. The Indian Nursing Council (INC) sets education standards and runs the national register, but its NRTS FAQ says "INC does not give license to a nurse to practice. It is responsibility of SNRCs" – the State Nursing Registration Councils – and that "RN/RM number from SNRCs is the legal license to practice." So the certificate DHP needs comes from the council that holds your RN/RM registration, and each council names it differently: good standing letter, foreign verification, overseas verification, abroad verification.

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules. Before you apply to your council, ask your PSV provider two things: whether it needs the certificate sent to you or straight to it, and which e-mail address the council should use.

## How does each State Nursing Council handle it?

Fees and processes as each council publishes them on its own website. Several councils are moving online or to NRTS, so check the council's page on the day you apply.

| Council | What to ask for | How you apply | Fee as published | Delivery and time |
| --- | --- | --- | --- | --- |
| Tamil Nadu (TNNMC) | Good Standing Letter, or Foreign Verification | Online at noc.onlinetnnmc.org; pay after the council approves | ₹2,000 (letter to you); ₹5,000 (verification to a foreign council) | Letter e-mailed to you, minimum 7 working days after payment; verification sent as hard copy to the council named |
| Kerala (KNMC) | Good Standing Certificate, or Verification Certificate | By post to the Registrar, Thiruvananthapuram, under KNMC's guidelines | ₹2,000 for abroad in KNMC's undated guidelines, paid by NEFT/RTGS; a newer fee notice exists – confirm | Not stated; the verification certificate needs the full postal and e-mail address of the body it goes to |
| Karnataka (KSNC) | Foreign Registration / Good Standing | Online, from ksnc.karnataka.gov.in | Not readable on the council's site – ask | Sent by courier; KSNC publishes DHL tracking numbers |
| Andhra Pradesh (APNMC) | Verification / foreign letter | Through NRTS – the council's own site was due to close on 15 March 2026 | Fees revised from 1 January 2024 – ask | Not stated |
| Telangana (TGNMC) | Foreign verification | Through NRTS, linked from hmis.telangana.gov.in | Fees revised from 1 October 2024 – ask | Not stated |
| Delhi (DNC) | Overseas verification (good standing) | Online at delhinursingcouncil.in | ₹4,000 plus 18% GST, plus postage if the overseas council asks for it | E-mailed to the overseas licensing council; 15 to 30 days |
| Punjab (PNRC) | Foreign verification | Online since 10 July 2020 | ₹4,000 (₹2,000 + ₹2,000) from 10 July 2020 | Sent by speed post |
| West Bengal (WBNC) | Abroad verification | On paper only, with originals in person; no fax or e-mail applications | ₹6,000 in the fee table revised from 1 August 2024 (the procedure page still says ₹5,000 plus ₹200 postage) | Not stated |
| Gujarat (GNC) | Foreign Verification (Good Standing Certificate) | Online; the form asks for the foreign authority's name, address and e-mail | Not published – ask | Not stated |
| Maharashtra (MNC) | – | No process published on the council's site | Ask the council | – |

A few councils add conditions worth knowing early:

- **Tamil Nadu** says "A minimum of one year of work experience is mandatory to apply for a Good Standing Letter or Foreign Verification"; with less, you get only a verification of your registration certificate. It checks your experience certificate with the hospital first. A circular of 23 July 2026 warns that foreign-verification queries may take longer while its software is rebuilt.
- **Kerala** has a contact desk for "Good Standing, Verification, Data Flow & Migration Certificate" (registrar.knmc@kerala.gov.in) – the address to use if your PSV provider's request is stuck. KNMC's live site was unavailable when we checked; the details above come from its published PDFs and an archived copy of its home page.
- **West Bengal** asks for an experience letter saying there are "No Allegations or No Adverse Report", and Gazetted-attested copies.
- **Delhi** asks for your 10th and 12th certificates, registration certificate, diploma or degree and mark sheets (both sides), an experience and conduct certificate, your Aadhaar and passport, and the overseas council's form if it has one.

## What do the NUID and NRTS change?

The **NUID** (Nurse Unique Identification number) comes from the INC's **Nurses Registration and Tracking System (NRTS)**. The INC describes it as "a Nurse Unique Identity Number which is verifiable and identifiable across the country", issued automatically alongside your state RN/RM number. NRTS enrolment is "neither license nor registration given by INC", and DHP does not ask for an NUID.

It still matters for three reasons:

- **Some councils now work through NRTS.** Andhra Pradesh and Telangana have moved foreign verification to NRTS, so you need an NRTS account to apply.
- **Nurses abroad are asked to enrol.** INC's Notification 9 of 2023 asks "all those Indian nurses who are working outside india to enroll into NRTS with immediate effect." NRTS also lists a "NOC to work abroad" service and a public NUID status check.
- **Reciprocal registration runs through it.** INC's FAQ says only nurses with an NUID can use NRTS to register with a second state council; the first council issues an NOC online, the fee is ₹1,000, and the whole process "shall take one week" if everyone acts in time.

## Registered in more than one state?

Many Indian nurses train in one state and work in another. DHP counts licences "accompanying the required years of work experience", and its good-standing policy asks for certificates for the years of experience it counts – so if you held registrations in two states during that period, expect a certificate from each, and a PSV package that covers two registrations. Three practical points:

1. **Show a registration for every job.** If you worked in a state without registering with its council, tell your PSV provider before you pay – DHP asks for licences for the years it counts. If you are about to move, use reciprocal registration through NRTS first.
2. **Keep every registration current.** INC's FAQ says renewal is once in five years with 150 hours of continuing nursing education, and Tamil Nadu, Andhra Pradesh and Telangana say the same. Kerala links its services to renewal: certificates issued from 2013 carry a validity date and must be renewed when it expires.
3. **Pay for the right package.** On published prices, one qualification with two registrations costs about QAR 1,100 at QuadraBay, QAR 1,150 at AVS and QAR 1,690 at DataFlow – the [PSV fees guide](/qatar/psv/fees) has the add-ons.

## Do GNM, B.Sc and Post Basic B.Sc meet DHP's rules?

DHP's Guidelines for Nurses accept, for a Registered General Nurse, a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)", each followed by two years of clinical experience after registration and licensing, and the Prometric exam. Against the INC's programme list:

| Qualification | INC duration and entry | DHP fit |
| --- | --- | --- |
| B.Sc Nursing | 4 years, after 10+2 | Registered General Nurse – bachelor's row |
| GNM | "3 and 1/2 years", 3 years from 2015–2016; after 10+2 | Registered General Nurse – diploma row |
| GNM + Post Basic B.Sc | Post Basic: 2 years regular, 3 years distance, after GNM and RN/RM registration | Registered General Nurse; two qualifications for PSV |
| ANM | 2 years | Does not match the RGN rows; DHP's Assistant Nurse row asks for a three-year diploma after nine years of education – ask DHP |

The GNM programme continues: the INC proposed phasing it out by 2020–21, then withdrew that in a notification of 26 November 2020. DHP, not the PSV provider, decides equivalence at evaluation. The [India guide](/qatar/psv/countries/india) covers documents, mark sheets and name problems for all Indian applicants.

## Checklist for Indian nurses

1. Your State Nursing Council's current process, form and fee checked on its own site – or through NRTS for Andhra Pradesh and Telangana.
2. Every state registration you held in the years DHP counts, each renewed and current.
3. NRTS account and NUID ready, especially if you need reciprocal registration or your council works through NRTS.
4. At least one year's experience before applying in Tamil Nadu, with your experience certificate ready.
5. PSV package covering every qualification (GNM and Post Basic count separately) and every registration.
6. The delivery agreed with your PSV provider before you pay the council – to you, or straight to the provider – and the certificate timed for the licensing stage, no more than six months old.
`,
}
