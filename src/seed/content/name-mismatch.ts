/**
 * Seed content: name mismatch between passport and certificates (brief 15).
 * Facts checked 17 Oct 2026 against: DataFlow's FAQs (name change certificate; one free re-verification through an
 * Appeal for a Discrepancy report, extra charges for Unable to Verify, 180-day window), DataFlow's offline
 * application form for DHP (name "as per your Passport/ National ID) and recognized alternatives"; name change
 * document examples), the AVS DHP Application Guide ("Details as per the Education certificate" etc.), DHP's Guidelines for
 * Physicians ("misleading information" wording) and Gulf News, 11 Aug 2026 (MoPH permanently barred 27 people for
 * falsified experience certificates). Examples of name differences are illustrative, not from a source.
 */

export const nameMismatchGuide = {
  title: 'Name mismatch between passport and certificates: how to fix it before PSV for Qatar',
  path: '/qatar/psv/problems/name-mismatch',
  section: 'psv' as const,
  summary:
    'If the name on a certificate differs from your passport, enter your passport name wherever a portal asks for your own name, the certificate’s version wherever it asks for the name on the certificate, and upload a document that links the two – a marriage certificate, a legal name-change document or an affidavit. DataFlow’s own list asks for “a name change certificate (if your name on any of the documents differs from the name on your passport)”. A difference you explain when you apply is routine; one the provider finds on its own can come back as a Discrepancy, and DHP reviews every report. This guide covers which differences count, what evidence works, how to type your name in each portal and what to do if a report already shows a discrepancy.',
  meta: {
    title: 'Name Mismatch on Passport vs Certificates: Fix It Before PSV',
    description:
      'Spelling, order, married or missing names that differ between passport and certificates: the evidence DataFlow, QuadraBay and AVS need, and how to appeal.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-17',
  verifiedAgainst: [
    {
      label: 'DataFlow – FAQs (documents required; appeals and re-verification)',
      url: 'https://dataflowgroup.com/faqs/',
    },
    {
      label: 'DataFlow – offline application form for DHP (name fields and name change documents)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DF-Offline-Application-Form-DHP-updated-1.pdf',
    },
    {
      label: 'AVS – DHP Application Guide',
      url: 'https://avsqatar.com/files/AVS_DHP_Application_Guide.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'Gulf News – Qatar detects 27 individuals who submitted false certificates (11 Aug 2026)',
      url: 'https://gulfnews.com/world/gulf/qatar/qatar-detects-27-individuals-who-submitted-false-certificates-for-healthcare-licences-1.500637814',
    },
  ],
  changeLog: [
    {
      date: '2026-10-17',
      note: 'First published. Evidence and appeal rules from DataFlow’s FAQs and DHP application form; portal entry rule for AVS from its application guide.',
    },
  ],
  faqs: [
    {
      question: 'Will an affidavit alone satisfy DataFlow?',
      answer:
        'It can. DataFlow’s DHP form gives an affidavit as one example of a name-change document, alongside a marriage certificate and “any legal document”. An affidavit links the names; it does not change what the university or employer confirms, so the institution still has to recognise you under the name on its own record. Where the issuer made the error, a corrected certificate or a letter from the issuer is stronger evidence than your own sworn statement.',
    },
    {
      question: 'Should I get my degree reissued in my married name?',
      answer:
        'Usually not. A certificate shows the name you held when it was issued, and the university confirms it under that name. Upload the certificate as it is, with your marriage certificate as the document that links it to your passport. Ask for a reissued or corrected certificate only when the issuer made a mistake – a misspelling, a wrong date of birth – because that is something no linking document can fix.',
    },
    {
      question: 'My names are in a different order on my passport and my degree. Is that a mismatch?',
      answer:
        'Treat it as one. Family name first on one document and last on another, or a father’s name included on one and missing on the other, is exactly the kind of difference that makes a reviewer stop. DataFlow’s form asks for your full name as in your passport “and recognized alternatives”, so list every version that appears on your documents there, and keep the linking document ready.',
    },
    {
      question: 'What happens if my report already says Discrepancy?',
      answer:
        'At DataFlow you can raise an Appeal within 180 days of the report’s completion; its FAQ says a one-time re-verification is free, though re-verifying an Unable to Verify result costs extra when DataFlow needs documents or details you did not provide. Send the document that explains the difference with the appeal. We found no published appeal terms for QuadraBay or AVS, so ask their support teams before you pay for anything new.',
    },
  ],
  markdown: `
## Why does a small name difference matter?

A verification provider does two comparisons: the details you typed against each document, and each document against what the issuing university, regulator or employer confirms. A name that is spelled, ordered or completed differently on one document breaks the chain between you and that document. If nothing in your file explains it, the provider reports what it found, and the document can come back as a *Discrepancy* or *Unable to Verify* report instead of a clean result.

DHP then reads the report. Its Guidelines for Physicians warn that verification reports are reviewed and that "any misleading information provided will result in further investigations". Most name differences are innocent, but an unexplained one looks the same as a real problem until someone investigates, and DHP does act on real problems: in August 2026 the Ministry of Public Health reported that it had permanently barred 27 people from Qatar's healthcare sector for submitting falsified experience certificates ([Gulf News](https://gulfnews.com/world/gulf/qatar/qatar-detects-27-individuals-who-submitted-false-certificates-for-healthcare-licences-1.500637814)). The point of fixing a mismatch before you pay is that your file never has to be investigated at all.

## Which differences count?

Check your passport against every document you will upload – degree, transcript, licence, each experience letter – letter by letter. These are the differences that most often appear (examples for illustration):

- **Spelling and transliteration:** Mohammed and Muhammad, Joseph and Jose, a name transliterated differently from Arabic, Urdu or Malayalam.
- **Order:** family name first on one document and last on another.
- **Missing or extra names:** a middle name, father's name or grandfather's name on the passport but not on the certificate, or the other way round.
- **Initials:** "K. Rajan" on a certificate, the full name on the passport – common on Indian certificates; the [guide for Indian applicants](/qatar/psv/countries/india) covers the Indian cases.
- **Married and maiden names:** a degree in the name you had at graduation, a passport in your married name. Filipino applicants also meet middle-name and "Ma." differences – see the [guide for Filipino applicants](/qatar/psv/countries/philippines).
- **A legal change of name** made after a certificate was issued.

Check your date of birth the same way. A different date of birth is not a name problem, but expect it to be handled like one – and only the issuer can correct it.

## What evidence links two names?

DataFlow's DHP form asks for a "Name change certificate, if applicable (Marriage certificate, affidavit, any legal document, etc.)", and its FAQ lists "a name change certificate (if your name on any of the documents differs from the name on your passport)" among the documents for every application. QuadraBay and AVS publish no list of their own, but they verify the same documents, so the same evidence is the sensible choice for them too. The table below is our suggestion of what usually works, not a provider's list:

| Situation | Evidence that links the names |
| --- | --- |
| Married or divorced since the certificate was issued | Marriage certificate (or divorce decree) showing both names |
| Legal change of name | The official name-change document, such as a deed, court order or gazette notification |
| Spelling, order, initials or a missing name | An affidavit stating that both names belong to the same person, sworn before a notary or other official |
| The issuer got your name or date of birth wrong | A corrected certificate, or a letter from the issuer confirming the correct details |

Anything not in Arabic or English needs a translation, attached to a copy of the original, as for every other document. Upload the linking document as its own file, named so it is obvious which certificate it explains – for example *Name-change-marriage-certificate.pdf* – starting with a letter, as QuadraBay requires.

## How should you type your name in each portal?

- **Use your passport name, in full, everywhere you are asked for your own name** – the provider's portal and DHP's. A shortened or "usual" name is the most common self-inflicted mismatch.
- **DataFlow** asks for your name "in full (as per your Passport/ National ID) and recognized alternatives" – its form gives a maiden name as an example – and has a separate *Name as per Certificate* field for each qualification. Its form also says that if the certificate name is different from the name as per passport, you should submit the relevant name change document. Put every version that appears on your documents in the alternatives.
- **AVS's** application guide labels each section by its document – "Details as per the Passport", "Details as per the Education certificate", "Details as per the Health License" – so type what each document says, and let the linking document explain the difference rather than "correcting" a certificate's details to match your passport.
- **QuadraBay** publishes no specific rule; follow the same approach and upload the linking document beside the certificate it explains.

## What if your report already shows a discrepancy?

Do not take a report with an unexplained discrepancy to DHP and hope. Deal with it at the provider first:

- **DataFlow** lets you raise an *Appeal* "within 180 days of completion of your Unable To Verify or Discrepancy report". Its FAQ says a one-time re-verification through an Appeal is free of charge, but that there are additional charges for re-verifying an Unable to Verify report when DataFlow needs documents or details you did not originally provide. Attach the evidence that links the names; DataFlow's FAQ allows appeals "by uploading the supporting document or by adding information".
- **QuadraBay and AVS:** we found no published appeal terms for DHP reports. Contact their support teams with your reference number and the linking document, and ask in writing what a correction costs before you pay for it.

If the difference came from the issuer – a misspelled name on a degree, a wrong date on an experience letter – ask the issuer for a corrected document first, then appeal with it. The [timeline guide](/qatar/psv/timeline) explains what stops the clock.

## Checklist before you pay

1. Passport name written out in full, exactly as printed, ready to paste into every form.
2. Every document checked letter by letter against it, including date of birth.
3. A linking document for every difference, translated if needed, as its own file.
4. Issuer errors corrected at the source before you submit, not after.
5. All name variants listed as "alternatives" in DataFlow's form, or raised with your provider's support team before you submit.

The [documents guide](/qatar/psv/documents) covers everything else each document must show, and the [PSV overview](/qatar/psv) explains how the report moves into DHP's evaluation.
`,
}
