/**
 * Seed content: documents required for PSV in Qatar (brief 6).
 * Facts checked 16 Oct 2026 against: DHP Guidelines for Physicians, Guidelines for Nurses and Guidelines for Allied
 * Health Professions (DHP PDFs, undated; latest circulars cited DHP/2024/15, 2023 and 2019 respectively); the QCHP
 * Policy for Issuing Certificates of Good Standing (v2.0, reviewed May 2016 – the source of the six-month rule);
 * Circular DHP/2025/08 (14 Jul 2025, scanned PDF read by OCR: good standing only via a PSV report from 1 Aug 2025);
 * DataFlow's offline application form for DHP (document checklist and the fields asked for each document) and its
 * Customer Reference Kit for DHP; the AVS DHP Application Guide and "DHP Reference Program Guide" (required documents
 * per package); and
 * Circular DHP/2025/20 (QuadraBay upload rules, as read on 11 Oct 2026 – the PDF did not load on 16 Oct).
 * Package scopes come from the Fees records (src/seed/data.ts), which the fees guide renders.
 */

export const documentsGuide = {
  title: 'Documents required for PSV in Qatar: DataFlow, QuadraBay and AVS, by profession',
  path: '/qatar/psv/documents',
  section: 'psv' as const,
  summary:
    'For a Qatar DHP verification you upload your passport, a signed Letter of Authorization, your degree or diploma with its transcript, your current health licence and experience letters covering the last three or five years, depending on your profession and provider. Certificates of good standing, which since August 2025 must also come through PSV, and surgical logbooks come in at the licensing or privileging stage. Nothing has to be attested first: DHP’s guidelines say verification by an approved provider replaces attestation. This guide sets out what each provider verifies for your profession, what every document must show, each portal’s upload rules and a checklist to run before you pay.',
  meta: {
    title: 'Documents Required for DataFlow & PSV in Qatar (2026)',
    description:
      'What Qatar’s PSV providers verify for each profession, plus DHP’s rules on transcripts, experience letters, good standing, translation and scans.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-16',
  verifiedAgainst: [
    {
      label: 'Circular DHP/2025/08 – updated procedure for submitting certificates of good standing',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Allied Health Professions',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20AHP.pdf',
    },
    {
      label: 'QCHP – Policy for Issuing Certificates of Good Standing (v2.0)',
      url: 'https://dhp.moph.gov.qa/en/DocumentsAR/Policy%20for%20Issuing%20Certificates%20of%20Good%20Standing.pdf',
    },
    {
      label: 'DataFlow – offline application form for DHP (document checklist)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DF-Offline-Application-Form-DHP-updated-1.pdf',
    },
    {
      label: 'DataFlow – Customer Reference Kit for DHP',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/Customer-Reference-Kit-for-DHP-EN-2.pdf',
    },
    {
      label: 'AVS – DHP Application Guide (portal walkthrough)',
      url: 'https://avsqatar.com/files/AVS_DHP_Application_Guide.pdf',
    },
    {
      label: 'AVS – DHP Reference Program Guide (required documents per package)',
      url: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay packages and portal rules',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
  ],
  changeLog: [
    {
      date: '2026-10-16',
      note: 'First published. Document rules taken from DHP’s three profession guidelines, the good-standing policy and each provider’s own checklist.',
    },
    { date: '2026-10-27', note: 'Linked the new certificate of good standing guide. No facts changed.' },
  ],
  faqs: [
    {
      question: 'Do I need transcripts for DataFlow verification in Qatar?',
      answer:
        'Yes. DHP’s guidelines for physicians, nurses and allied health all ask for your academic certificates “with official transcripts”, and DataFlow’s own DHP checklist lists copies of “mark sheets/Transcript of Records” and the front and reverse side of each degree certificate. Upload the transcript in the same file as the degree it belongs to, every page, so the reviewer sees one complete record.',
    },
    {
      question: 'Do my certificates need attestation before PSV?',
      answer:
        'No. DHP’s Guidelines for Physicians say “the verification process done by the verification companies replaces attestation of certificates”, and the nurse and allied health guidelines say the same. You still need an official translation of anything not in Arabic or English, and DHP may ask to see an original on a case-by-case basis. Attestation by the Ministry of Foreign Affairs is needed only for some licensing papers, such as the home-country police clearance and medical test for a temporary licence without a Qatar ID.',
    },
    {
      question: 'Should I get my certificate of good standing before applying for PSV?',
      answer:
        'Usually not with your first PSV application. DHP’s guidelines ask for the certificate at the licensing stage in most cases, and the QCHP good-standing policy says it must be “not more than 6 months old” when you apply for licensing. Since 1 August 2025 it must also reach DHP as a PSV report – Circular DHP/2025/08 stopped DHP accepting certificates by email or post – so you will order a good-standing verification (Package I or J, or an add-on) when your evaluation is close to approval.',
    },
    {
      question: 'My name on my degree is different from my passport. What do I upload?',
      answer:
        'Enter your name exactly as it appears in your passport and upload the document that links the two names. DataFlow’s DHP checklist asks for a “name change certificate, if applicable” and gives a marriage certificate, an affidavit or “any legal document” as examples. Add it as its own file next to the certificate that carries the other name, so the provider does not mark that component as a discrepancy.',
    },
    {
      question: 'Can I add an experience letter after my evaluation?',
      answer:
        'Do not plan on it. DHP’s Guidelines for Physicians say experience certificates that are not listed in your CV, or were not submitted with your first evaluation, will not be considered in later applications. List every job in your CV and have every period you rely on verified in the first PSV report, even if it means paying for an extra employer.',
    },
  ],
  markdown: `
## Which documents are verified for your profession?

The three providers follow DHP's package structure – this site uses DHP's package letters for all of them, although AVS names its packages by profession – and each package verifies a fixed number of documents. The scope differs between providers only for nurses, pharmacists and allied health, where AVS covers more:

| Profession (DHP package) | DataFlow | QuadraBay | AVS |
| --- | --- | --- | --- |
| Physicians and dentists (A) | Up to 2 qualifications, 1 licence, last 5 years of employment (up to 3 employers) | Same as DataFlow | Same as DataFlow |
| Clinical nurse specialists, nurse practitioners, nurse educators (G) | Up to 2 qualifications, 1 licence, last 5 years (up to 3 employers) | Same as DataFlow | Same as DataFlow |
| Nurses, midwives, pharmacists (E) | 1 qualification, 1 licence, last 3 years (up to 3 employers) | Same as DataFlow | Up to 2 qualifications, 1 licence, last 5 years (up to 3 employers) |
| Allied health professionals (B) | 1 qualification, 1 licence, last 5 years (up to 3 employers) | Same as DataFlow | Up to 2 qualifications, 1 licence, last 5 years (up to 3 employers) |
| Trainees with no experience (F) | 1 qualification | No trainee package | 1 qualification |
| Good standing only (I) | 2 to 3 certificates | 2 to 3 certificates | 2 to 3 certificates |

Every clinical package also includes a database cross-check (DataFlow and AVS call it *Cross check*, QuadraBay *GlobeX*). It is the provider's own search, not a document you supply.

Anything beyond your package is an add-on: a second licence, a fourth employer, a second qualification in Packages B and E at DataFlow and QuadraBay, a good-standing certificate or a surgical logbook. Prices are in the [PSV fees guide](/qatar/psv/fees). Before you pick a package, compare it with what DHP will evaluate. DHP asks physicians for experience certificates for "the recent last 5 years", and every profession for valid licences "accompanying the required years of work experience" – so if you held a licence in two countries during that period, both need verifying. The minimum experience for each nursing grade is set in DHP's Guidelines for Nurses: for example, two years after registration for a registered nurse with a bachelor's degree or diploma, three for one with an associate degree, and three years as a midwife for a registered midwife.

One rule in the physician guidelines makes completeness more important than price: experience certificates that are not listed in your CV, or were not submitted with your first evaluation, will not be considered in later applications. Verify every period you rely on the first time.

## What does every provider need before it starts?

Three items open every file, whatever the package:

- **Your passport.** DataFlow lists it as "mandatory for all documents"; AVS's application guide asks for a clear, uncut copy. Type your name in every portal exactly as it appears in the passport, in full, including middle names.
- **A signed Letter of Authorization.** It gives the provider your consent to contact your university, regulator and employers. DataFlow's portal generates it for you to sign digitally; AVS's application guide tells you to download, complete and upload it; expect to sign QuadraBay's inside its online application.
- **Proof of any change of name.** If a certificate carries a different name – a maiden name, a different spelling or word order – DataFlow's DHP checklist asks for the "name change certificate, if applicable (Marriage certificate, affidavit, any legal document, etc.)". Upload it beside the certificate that carries the other name; the [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which difference.

DataFlow's offline form also asks for the full name of each institution, with no "abbreviated terms or initials", and for employers to be listed from your current one backwards. The online portals ask for the same details, so have them written out before you start.

## What should your degree and transcript copies show?

DHP's guidelines ask for "all academic certificates relevant to applicant's scope with official transcript". DataFlow's checklist spells out what that means in practice:

- the qualification certificate, and a translated copy if it is not in English or Arabic;
- copies of the "mark sheets/Transcript of Records";
- the "front and reverse side of degree certificates";
- "clear and legible copies of the documents including the University logo".

For each qualification you will be asked for the institution, its country, the qualification title, the graduation or issue date, the mode of study and the length of the programme. Take those from the certificate itself, not from memory: a graduation date that differs from the transcript is one of the commonest reasons a component comes back as a discrepancy. Trained in India, the Philippines, Pakistan or Nepal? The guides for [Indian](/qatar/psv/countries/india), [Filipino](/qatar/psv/countries/philippines), [Pakistani](/qatar/psv/countries/pakistan) and [Nepali](/qatar/psv/countries/nepal) applicants map local degrees, transcripts and registrations onto these requirements.

Physicians whose medical programme was shorter than six years should know that DHP can count the internship towards the required undergraduate years, so keep the internship completion certificate with the degree. For nurses, DHP's minimum experience is counted after registration, and for allied health after graduation, so an internship completed before registration or graduation is unlikely to count towards it; ask DHP before relying on one.

## What must an experience letter include?

DHP wants "work experience certificates (with an issue date)" for the years your scope requires, and the provider then confirms each one with the employer. DataFlow's DHP form asks for the employer's name and country, your start and end dates, and your job title and department for every employer. A letter that shows all of that, plus the issue date DHP asks for, is the one most likely to verify without a query. In practice that means:

- the employer's full name and country, on the employer's letterhead;
- your exact start date and end date (or a statement that you are still employed, for your current job);
- your job title and department;
- the date the letter was issued, and a named signatory the provider can contact (our advice: it makes the employer's confirmation quicker).

The [experience certificate guide](/qatar/psv/problems/experience-letter-format) has a sample letter to give your HR office.

The packages cover the last five years (three in DataFlow's and QuadraBay's Package E) with up to three employers. A fourth employer is an add-on, and so is any period outside the window that you need DHP to count. A long gap between jobs is a separate question for DHP: its allied health guidelines describe a supervised training approval for applicants with a break from practice or a lack of experience.

Your **health licence** is the third component. The package verifies one; if DHP needs the licences that accompany each period of your experience, add the others before you pay rather than when DHP returns the file.

## When do you need a certificate of good standing?

Since 1 August 2025 a certificate of good standing reaches DHP only through PSV. Circular DHP/2025/08 (14 July 2025) ended the old route, in which your regulator emailed or posted the certificate to DHP, and requires every practitioner "to submit a primary source verification report for the good standing certificate" instead; certificates sent by email or post after that date "will no longer be accepted". DHP's nurse and allied health guidelines still describe the old route, a certificate sent directly by the registration authority, so follow the circular ([our update on the change](/articles/qatar-good-standing-certificates-through-psv)). The [good-standing guide](/qatar/psv/problems/good-standing-certificate) covers which years the certificates must cover and how to get one.

When you need it depends on the stage:

- **At licensing, for most applicants.** DHP's physician and nurse guidelines say the certificate "will be required in the licensing phase unless the case requires otherwise", and the allied health guidelines also place it at licensing. For physicians, the certificate "should cover the experience of the applicant" and is verified by the PSV provider, with the final report uploaded at licensing.
- **From every authority that covers your recent experience.** The allied health guidelines ask for certificates from the authority or authorities covering your most recent required years; if you were licensed in two countries in that period, plan for two.

Age matters too. The good-standing policy of QCHP, DHP's predecessor, requires a certificate "not more than 6 months old" when you apply for licensing, and we have found no later DHP rule that changes it. So order it when your evaluation is close to approval, then have it verified: all three providers sell Package I (two to three certificates), DataFlow and AVS also sell Package J (one certificate plus your latest employment letter), and all three verify a single certificate as an add-on. If your regulator is slow to issue certificates, ask it early how long it takes, so you can time the request.

## Do you need a surgical logbook?

Only if you are a surgeon applying for clinical privileges. DHP's Guidelines for Physicians ask for an "official surgical logbook for the last 3 years verified by PSV company", and a logbook from outside Qatar must be verified before DHP issues the final privileges letter. Add it as a component of your PSV application; it is not part of any standard package.

## Do documents need attestation or translation?

**Attestation: no.** DHP's Guidelines for Physicians say "the verification process done by the verification companies replaces attestation of certificates", and the allied health guidelines that "certificates do not have to be attested if it is verified by PSV companies". The nurses' guidelines say the same. Do not pay an attestation agent for documents that are going through PSV.

**Translation: yes, for anything not in Arabic or English.** All three guidelines require a translation into Arabic or English (the nurse guidelines say an official one), attached to a copy of the original. DataFlow's checklist asks for the "original & translated copy" of each qualification. Upload both in the same file, original first.

DHP may also ask to see an original "on a case-by-case basis", so keep the originals where you can reach them. The only attested documents in the standard route are licensing papers, not PSV documents: an applicant without a Qatar ID who needs a temporary licence provides a home-country medical test and police clearance attested by the Ministry of Foreign Affairs.

## How should you scan and upload each document?

Each provider publishes only a few rules, but breaking one costs you a query and time:

| Rule | DataFlow | QuadraBay | AVS |
| --- | --- | --- | --- |
| Copies | "Clear and legible", including the university logo; front and reverse of each degree | Colour scans, each document in one file | "Clear scanned copies"; passport uncut |
| File names | No published rule | Must start with a letter – a name beginning with a number is rejected | No published rule |
| Details you type | Name as in passport; institution names in full | As on the documents | Details "as per" each document (e.g. "Details as per the Education certificate") |
| Requests after you submit | "A member of the DataFlow Group team will contact you to address any additional requirements" | 30 days to reply, then the component closes as *Unable to Check* | Issuing authorities "may request additional documents or information" |

Rules that suit all three: scan at a resolution where small print and stamps are readable, keep every page of a document in one PDF, include both sides when anything is printed on the back, and name files plainly – for example *Passport.pdf*, *BSc-Nursing-degree-and-transcript.pdf*, *Employer-1-letter.pdf* – starting with a letter so the same files work in every portal.

## What does DHP ask for that the provider does not verify?

The PSV report is one item in DHP's own evaluation application. DHP's guidelines also ask for:

- a recent photo meeting the criteria in Circular 04-2014;
- an up-to-date CV (physicians: on DHP's CV template), listing every job you want counted;
- your Qatar ID (front and back) or your national ID;
- the qualifying exam pass certificate, where the exam applies to you – or a verified exempting exam such as NCLEX-RN (see the [Prometric exam guide](/qatar/exam/prometric)).

At licensing, DHP adds a police clearance certificate from Qatar's Ministry of Interior, a medical report no more than six months old, a CPR certificate where your guidelines require one (nurses and allied health; for physicians the facility checks CPR under Circular DHP/2024/06), and the verified certificate of good standing described above. The [PSV overview](/qatar/psv) explains how the PSV report moves into evaluation.

## Checklist before you pay

1. Passport valid, scanned uncut, and your name typed exactly as it appears there.
2. Name-change document for every certificate that carries a different name.
3. Each qualification with its transcript or mark sheets, front and back, in one file, with an official translation if needed.
4. Experience letters on letterhead with exact start and end dates, job title, department, issue date and a reachable signatory, for every period DHP will count.
5. A licence for each period of experience you rely on, not only your current one.
6. Your package covers everything above; extras (second licence, fourth employer, logbook) added before payment.
7. CV lists every job you are verifying, in the same order and with the same dates as the letters.
8. University and employers told to expect the request, with a named contact and any verification fee they charge ready to pay.
9. Good standing planned for the licensing stage and ordered through a PSV provider, so it is under six months old when the licence application goes in.
10. File names start with a letter, and each document is in a single file.

For prices, see the [PSV fees guide](/qatar/psv/fees); for each portal's steps, the guides to [DataFlow](/qatar/psv/dataflow), [QuadraBay](/qatar/psv/quadrabay) and [AVS](/qatar/psv/avs).
`,
}
