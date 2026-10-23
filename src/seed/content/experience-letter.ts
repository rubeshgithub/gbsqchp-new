/**
 * Seed content: experience certificate format (brief 13).
 * Facts checked 23 Oct 2026 against: DHP Guidelines for Nurses ("recent work experience certificates with issue date";
 * licences "accompanying the required years of work experience") and for Physicians ("the recent last 5 years work
 * experience certificates (with an issue date)"; CV "as per DHP C.V template"; experience not in the CV or the first
 * evaluation "will not be considered"; working in a facility without a licence makes the practitioner ineligible;
 * supervision letter "full time 8 hours per day 5 days a week"; locum certificates "signed by the medical director";
 * "any misleading information provided will result in further investigations"); DataFlow's DHP offline application form
 * (employers listed "starting in order from the last current employer"; fields: Issuing Authority Name and Country,
 * Start Date, End Date, Job Title / Designation Department; checklist "Experience letters from previous employers");
 * AVS DHP application guide (employment "Details as per the experience" certificate); package scopes from the Fees
 * records; Gulf News, 11 Aug 2026 (27 people barred for falsified experience certificates – reported). The sample
 * letter is this site's own suggestion, not a DHP or provider template.
 */

export const experienceLetterGuide = {
  title: 'Experience certificate format for Qatar DHP and PSV: what the letter must show, with a sample',
  path: '/qatar/psv/problems/experience-letter-format',
  section: 'psv' as const,
  summary:
    'An experience certificate for a Qatar DHP application should be on the employer’s letterhead and show your exact start and end dates, your job title and department, the date the letter was issued, and who signed it. DHP asks for work experience certificates “with an issue date” for the years your scope requires, and the PSV provider then asks each employer to confirm the dates and title – so the letter has to match the employer’s own records and your CV exactly. DataFlow’s form asks for each employer’s name and country, start date, end date and job title or department, listed from your current employer backwards. Below: the elements that matter, a sample letter you can hand to HR, and the mistakes that send a file back.',
  meta: {
    title: 'Experience Certificate Format for Qatar DHP & DataFlow',
    description:
      'What an experience letter must show for Qatar DHP and PSV – letterhead, exact dates, title, issue date, signatory – with a sample letter for your HR office.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DHP – Guidelines for Nurses (evaluation documents)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians (experience certificates, CV, supervision and locum letters)',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'DataFlow – offline application form for DHP (employer details)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DF-Offline-Application-Form-DHP-updated-1.pdf',
    },
    {
      label: 'AVS – DHP application guide (employment details)',
      url: 'https://avsqatar.com/files/AVS_DHP_Application_Guide.pdf',
    },
    {
      label: 'Gulf News – Qatar detects 27 individuals who submitted false certificates (11 Aug 2026)',
      url: 'https://gulfnews.com/world/gulf/qatar/qatar-detects-27-individuals-who-submitted-false-certificates-for-healthcare-licences-1.500637814',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Requirements from DHP’s Guidelines for Nurses and Physicians and DataFlow’s DHP form; the sample letter is this site’s own suggestion. Independent fact-check applied (12 findings).',
    },
  ],
  faqs: [
    {
      question: 'Is a relieving letter or an appointment letter enough?',
      answer:
        'In our experience, usually not on its own. An appointment letter shows when you started, not that you worked there; a relieving letter often shows only the last day. DHP asks for work experience certificates “with an issue date” covering the years your scope requires, so ask HR for an experience certificate that shows both dates and your title, and keep the others as supporting documents.',
    },
    {
      question: 'I am still working there. What should the end date say?',
      answer:
        'That you are still employed – for example “from 1 March 2021 to date” or “is currently employed with us since 1 March 2021” – with an issue date close to when you apply. DataFlow’s form asks for your current employer first, and DHP asks for recent certificates with an issue date, so an old letter for your current job leaves the most recent months unaccounted for.',
    },
    {
      question: 'Does the letter need to be attested?',
      answer:
        'Not for PSV or DHP evaluation. DHP’s guidelines say “the verification process done by the verification companies replaces attestation of certificates”: the provider confirms the letter with the employer directly. An employer or visa process may ask for attested copies for its own purposes.',
    },
    {
      question: 'My job title changed during my employment. What should the letter show?',
      answer:
        'Each title with its own dates, as in the employer’s records – for example “Staff Nurse, 1 March 2019 to 31 August 2021; Senior Staff Nurse, 1 September 2021 to date”. Enter the same in the provider’s form and your CV. A single title for the whole period, when HR’s records show two, can lead to a query or a Discrepancy.',
    },
  ],
  markdown: `
## What must an experience certificate show?

DHP's Guidelines for Nurses ask for "recent work experience certificates with issue date, required as per the applicant's scope of practice"; its Guidelines for Physicians ask for "the recent last 5 years work experience certificates (with an issue date)". The PSV provider then asks each employer to confirm what the letter says. DataFlow's DHP form asks, for every employer, the employer's name and country, your start date, end date, and job title or department; AVS asks for employment "Details as per the experience" certificate.

So a letter that verifies cleanly shows the following. The issue date comes from DHP and the employer, dates and title from DataFlow's form; the rest is our advice, to make the employer's confirmation straightforward:

| Element | What to check | Source |
| --- | --- | --- |
| Letterhead | The employer's full name and country, plus its address and contact details | Name and country: DataFlow form; the rest: our advice |
| Your name | Exactly as in your passport, or with the document that links the names | Our advice |
| Start and end dates | Day, month and year – not "2019 to 2022" – and "to date" if you still work there | Dates: DataFlow form; full dates: our advice |
| Job title and department | As in HR's records; each title with its own dates if it changed | DataFlow form |
| Employment status | Full-time or part-time, permanent or temporary – as in HR's records | Our advice |
| Issue date | DHP asks for certificates "with an issue date" | DHP |
| Signatory | Name, title, signature and stamp, with an official e-mail address the provider can use | Our advice |

Licences matter too. DHP's Guidelines for Physicians say a "Practitioner working in a healthcare facility without a license will not be eligible for registration/licensing in the state of Qatar" – make sure both you and the facility were licensed for the period. Both sets of guidelines ask for your licences "accompanying the required years of work experience" (for nurses, "if applicable").

## A sample experience certificate

Hand this to your HR office as a starting point. It is our suggestion, not a DHP or provider template – HR should use its own letterhead and wording, as long as the facts match its records.

> **[Hospital letterhead – full name, address, phone, official e-mail]**
>
> Date of issue: [DD Month YYYY]
>
> **Experience Certificate**
>
> This is to certify that [full name as in passport], holder of passport number [number], has been employed by [hospital full name], [city, country], as follows:
>
> – [Job title], [Department], from [DD Month YYYY] to [DD Month YYYY], full-time, permanent.
>
> – [Second title, if any], [Department], from [DD Month YYYY] to [DD Month YYYY / to date], full-time, permanent.
>
> During this period [he/she] held [council] registration number [number].
>
> This certificate is issued at [his/her] request for the purpose of licensing with the Department of Healthcare Professions, Ministry of Public Health, Qatar.
>
> [Name], [Title – HR Manager / Medical Director / Director of Nursing]
> [Signature and official stamp] · [official e-mail] · [phone]

## Which mistakes send a file back?

- **Years only, or month and year only.** The provider confirms dates with the employer; a vague letter can lead to a query or a Discrepancy.
- **Dates that differ from your CV.** Physicians submit a CV "as per DHP C.V template", and DHP's Guidelines for Physicians say any experience certificate "that was not submitted/mentioned in the C.V in the first evaluation application will not be considered" later. Make the CV, the form and every letter say the same thing.
- **A title HR does not use.** "Charge Nurse" on the letter, "Staff Nurse" in the HR system: the provider reports what HR confirms.
- **No issue date**, or an old letter for a job you still hold.
- **A personal e-mail for the signatory**, or a signatory who has left – the provider cannot get a confirmation.
- **Missing employers.** Every period DHP counts needs a letter. Packages cover the last five years with up to three employers (three years in DataFlow's and QuadraBay's Package E), and DataFlow's form lists employers "starting in order from the last current employer". A fourth employer is an add-on – the [PSV fees guide](/qatar/psv/fees) has the prices.

## Special cases

- **Locum and supervised physicians.** At renewal, DHP's Guidelines for Physicians ask locum physicians for a work experience certificate from the Qatar facility, "signed by the medical director, showing the visit details of the locum doctor over the last 2 years". When a GP (supervised) or Assistant Specialty physician applies to change scope, they ask for an experience certificate signed by the medical director "showing the start and end dates of the supervision period (full time 8 hours per day 5 days a week)".
- **Agency or outsourced staff.** If an agency employed you and placed you at a hospital, ask both for letters: the agency confirms employment, the hospital confirms where and what you worked. Tell the provider which one held your contract. For physicians already licensed in Qatar through a healthcare agency, DHP's Guidelines for Physicians add that work in homes, schools and nurseries beyond six months in the two-year licence cycle "will not be counted by DHP for renewal or change place of work to a licensed healthcare facility".
- **A closed employer.** Tell the provider before you pay, and give it any body that holds the records – see the [follow-up guide](/qatar/psv/problems/university-not-responding).
- **Gaps between jobs.** A long gap is a DHP question, not a PSV one; DHP's guidelines refer to a break-from-practice policy, with training (nurses) or a supervised practice period (physicians).

## Never adjust a letter

Ask HR to correct a wrong date or title; never correct it yourself. DHP's guidelines say the verification report is reviewed at evaluation and that "any misleading information provided will result in further investigations", and in August 2026 [Gulf News](https://gulfnews.com/world/gulf/qatar/qatar-detects-27-individuals-who-submitted-false-certificates-for-healthcare-licences-1.500637814) reported that the Ministry of Public Health had permanently barred 27 people from Qatar's healthcare sector for submitting falsified experience certificates. The [Discrepancy guide](/qatar/psv/problems/discrepancy) explains how a genuine error is corrected, and the [documents guide](/qatar/psv/documents) lists everything else you upload.
`,
}
