/**
 * Seed content: university or employer not responding (brief 12).
 * Facts checked 23 Oct 2026 against: DataFlow's FAQs (15–25 working days from payment and a complete document set;
 * delays from "a late response from the issuing authorities"; issuing authorities may charge a fee "to release the
 * verification", shown on screen with whether it is paid through the portal or directly; LOA mandatory, some issuing
 * authorities require a manually signed LOA and DataFlow contacts you to arrange one; documents submitted later cost extra;
 * support requests quoting the case or reference number); DataFlow's support centre (option labels incl. "Submit Missing
 * Document / Information", "Check an existing support request"); DataFlow's reference kit (issuer fees added to the total,
 * as quoted on the timeline page); Circular DHP/2025/20 (QuadraBay 30-day window, Unable to Check); provider support
 * contacts as on the timeline and status pages; DHP's PSV page (what PSV is). The e-mail templates are this site's own
 * suggestions, not provider forms.
 */

export const universityNotRespondingGuide = {
  title: 'University or employer not responding to DataFlow: a follow-up plan for Qatar PSV',
  path: '/qatar/psv/problems/university-not-responding',
  section: 'psv' as const,
  summary:
    'When your PSV report is stuck, it is often one institution – a university, a council or a former employer – that has not answered the provider’s request. You can move it yourself: find the office that handles verification, tell it the request is coming or already waiting, pay any fee it charges, give the provider a named contact with an official e-mail address, and follow up on a fixed schedule. DataFlow’s FAQ names “a late response from the issuing authorities” as a cause of delay and says some issuers charge a fee “to release the verification”. Below: why requests go unanswered, a day-by-day follow-up plan, who to escalate to, and three e-mail templates you can adapt.',
  meta: {
    title: 'University Not Responding to DataFlow? Follow-Up Plan',
    description:
      'PSV stuck because a university or former employer won’t reply? A follow-up schedule, escalation routes and three e-mail templates for Qatar DHP applicants.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-10-23',
  verifiedAgainst: [
    {
      label: 'DataFlow – FAQs (timeline, issuer fees, Letter of Authorization)',
      url: 'https://dataflowgroup.com/faqs/',
    },
    {
      label: 'DataFlow – Customer Reference Kit for DHP (issuer fees added to the total)',
      url: 'https://dataflowgroup.com/wp-content/uploads/2024/09/Customer-Reference-Kit-for-DHP-EN-2.pdf',
    },
    {
      label: 'DataFlow – applicant support centre',
      url: 'https://support.dataflowgroup.com/',
    },
    {
      label: 'Circular DHP/2025/20 – QuadraBay (30-day window, Unable to Check)',
      url: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
      circularNumber: 'DHP/2025/20',
    },
    {
      label: 'DHP – Primary Source Verification',
      url: 'https://dhp.moph.gov.qa/en/Pages/PrimarysourceVerification.aspx',
    },
  ],
  changeLog: [
    {
      date: '2026-10-23',
      note: 'First published. Provider rules from DataFlow’s FAQs and support centre and Circular DHP/2025/20; the follow-up plan and templates are this site’s own suggestions. Independent fact-check applied (13 findings).',
    },
  ],
  faqs: [
    {
      question: 'Can I pay my university’s verification fee myself?',
      answer:
        'Sometimes. DataFlow’s FAQ says that if your issuing authority requires payment, “you will find the details on the screen” when you select the institution, together with whether it is paid through the DataFlow portal or directly to the issuing authority; its reference kit says that otherwise “the amount will be added to the total”. Pay it the way the provider tells you, keep the receipt, and tell the institution the reference number so it can match the payment to the request.',
    },
    {
      question: 'Can my university e-mail the verification to me, and I upload it?',
      answer:
        'That does not replace the provider’s check. Primary Source Verification means the provider gets the confirmation from the issuer itself – a letter sent to you is just another document you submitted. Ask the university to answer the provider’s request directly, quoting the provider’s reference number; a letter addressed to you can still help as a supporting document if the provider asks for one. Certificates of good standing are different – some councils issue them to you, and the provider then verifies them – so ask the provider which delivery it needs.',
    },
    {
      question: 'What if the hospital I worked for has closed?',
      answer:
        'Tell the provider at once, before the component is closed as unverified. Give it any body that holds the hospital’s staff records – a parent group, a successor hospital, the health ministry or the council that licensed the facility – and ask what alternative evidence it will try. DHP publishes no rule on alternative evidence for a closed employer, so the [Unable to Verify guide](/qatar/psv/problems/unable-to-verify) explains what happens if the result comes back unconfirmed.',
    },
    {
      question: 'How long should I wait before chasing?',
      answer:
        'Not long. Contact the institution before you pay, so the request is expected, and follow up about ten working days after submission if the document has not moved. DataFlow’s FAQ says verification usually takes 15 to 25 working days from payment and a complete document set for the whole report, so a document that has not moved after about 15 working days (three weeks) needs a support request as well as a call to the institution.',
    },
  ],
  markdown: `
## Why do institutions not answer verification requests?

The provider writes to each issuer in your file and waits. DataFlow's FAQ says verification "usually" takes 15 to 25 working days "from the date of payment and submission of a complete set of documents", and names "a late response from the issuing authorities" among the causes of delay. The usual reasons a request sits unanswered:

- **It reached the wrong place** – a general inbox, an old e-mail address, a department that does not handle verification.
- **The issuer wants a fee first.** DataFlow's FAQ: "Some issuing authorities may require an additional fee to release the verification to you."
- **The issuer wants a signed consent.** DataFlow's FAQ says some issuing authorities "may require a manually signed LOA" (Letter of Authorization) – the portal shows this when you select the institution – and that if you do not provide one, DataFlow will contact you to arrange the signing.
- **The details do not match its records** – an abbreviated institution name, a college named without its awarding university, a name or date that differs.
- **Nobody is responsible** – staff turnover, a closed or merged institution, an HR office that does not know what a PSV request is.

Most of these are easier to fix from your side than from the provider's.

## What should you do before you pay?

1. **Find the right office.** For a degree, it is usually the university's examinations, records or verification section – of the awarding university, not only your college. For employment, the HR office. For a licence or good standing, the council's registration desk.
2. **Ask four questions:** who answers verification requests, which e-mail address they use, whether they charge, and whether they need your signed consent.
3. **Give the provider that contact.** Use an official e-mail address on the institution's own domain, never a personal address.
4. **Name institutions in full.** DataFlow's form asks for full names and says not to use abbreviations or initials.
5. **Submit everything at once.** DataFlow's FAQ: "All relevant details and documents must be submitted at the time of application", and anything later "will be subject to additional fees and will delay your final report".

## What is the follow-up schedule?

This is our suggested schedule, not a provider rule. Working days are counted from the day you submit:

| When | What to do |
| --- | --- |
| Day 0 | Tell each institution the request is coming, with the provider's name and your reference number. |
| Days 1–10 | Check the tracker every few days. Answer any request for a fee, a consent form or a document the same day – QuadraBay closes a component as Unable to Check if what it asked for is not supplied within 30 days of its request – not of your submission (Circular DHP/2025/20). |
| Day 10 | Any document still showing no progress: e-mail the institution (template 1 or 2 below) and ask it to confirm it has received the request. |
| Day 15 | Still nothing: call the office, ask for the name of the person handling it, and raise a support request with the provider (template 3), naming the institution, the contact and what it told you. |
| Day 30 onwards | Escalate at the institution (next section) and update the provider each time something changes. |

The [status guide](/qatar/psv/status) shows where to see the status of each document, and the [timeline guide](/qatar/psv/timeline) sets out each provider's published targets.

## Who do you escalate to?

Go one level up at a time, and copy the provider's reference number into every message:

- **Universities:** the verification or examinations section → the registrar or controller of examinations → the dean's office or alumni office → the body that regulates the university (a higher-education commission or ministry).
- **Employers:** HR → the hospital's medical, nursing or quality director → the group head office if the hospital is part of a chain.
- **Councils:** the registration desk → the registrar.

At the provider: DataFlow's [support centre](https://support.dataflowgroup.com/) has *Submit a support request*, *Check an existing support request* and *Submit Missing Document / Information*; DataFlow's DHP page also lists WhatsApp +974 4419 6582 and dhpsupport@dataflowgroup.com. QuadraBay: dhp.support@quadrabay.com. AVS: dhp.helpdesk@avsqatar.com or +974 4464 4490.

## Three e-mail templates

Adapt these; keep them short, and send from the e-mail address you used for the application.

**1. To a university's verification or examinations section**

> Subject: Verification request from [DataFlow / QuadraBay / AVS] – [your full name], [degree], [year]
>
> Dear Sir or Madam,
>
> I graduated with a [degree] in [year] (registration / roll number [number]). [Provider] has sent your office a request to verify my degree for the Department of Healthcare Professions, Ministry of Public Health, Qatar (reference [number]), on [date].
>
> Could you confirm that you have received the request, and tell me whether a fee or a signed authorization is needed so that it can be answered – and, if there is a fee, how [Provider] should pay it? I can send a copy of my degree or ID if you need it.
>
> Thank you,
> [Name, phone, e-mail]

**2. To a former employer's HR office**

> Subject: Employment verification for [your full name], [job title], [start date] – [end date]
>
> Dear [HR manager's name],
>
> I worked at [hospital] as [job title] from [start date] to [end date] (employee number [number]). [Provider] has sent a request to verify my employment for the Department of Healthcare Professions, Ministry of Public Health, Qatar (reference [number]).
>
> Could you let me know who is handling it and when it can be answered? The provider needs the dates and job title confirmed exactly as in your records. I have attached my experience certificate.
>
> Thank you,
> [Name, phone, e-mail]

**3. To the provider's support team**

> Subject: Case [number] – [institution] not yet responded
>
> Hello,
>
> My case [number] has been waiting on [institution] since [date]. I contacted [name, title, official e-mail] on [date], who [confirmed receipt / asked for X / has not replied]. Could you please send the request again to that contact, and tell me whether anything is needed from me?
>
> Thank you,
> [Name, passport number as registered]

## What if nothing works?

If the institution still has not answered when the provider closes the document, at DataFlow the result is usually Unable to Verify – the [Unable to Verify guide](/qatar/psv/problems/unable-to-verify) covers DataFlow's 180-day appeal and how DHP handles the result. Switching provider rarely helps: as the [AVS guide](/qatar/psv/avs) notes, the institution that is not answering one provider is the same institution the next will write to.

Country notes: the guides for [Indian](/qatar/psv/countries/india), [Filipino](/qatar/psv/countries/philippines) and [Pakistani](/qatar/psv/countries/pakistan) applicants say which offices usually handle verification in those countries.
`,
}
