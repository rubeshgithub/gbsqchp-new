/**
 * Country guide: Indonesia (Qatar DHP licensing and PSV for Indonesian doctors, nurses, midwives, pharmacists and allied health).
 * Facts checked 2 Nov 2026 against: Konsil Kesehatan Indonesia's FAQ (STR applications at kki.go.id/registrasi and
 * conversion of old STRs to lifetime STRs through SATUSEHAT SDMK; STR issued within 14 working days of a complete file and
 * payment; Certificate of Good Standing / Sertifikat Kelaikan Praktik: request from the destination's health institution,
 * a valid SKCK police certificate, passport and KTP, payment, a statement for applicants who have moved abroad; old STRs not
 * accepted – an active lifetime STR is required; fees by region – Middle East Rp 800,000 for doctors and dentists (tenaga
 * medis), Rp 500,000 for other health workers (tenaga kesehatan); issued 10 working days after valid payment; valid 3 months
 * from issue; sent by e-mail and/or hard copy to the destination regulator, educational institution or health facility;
 * internship STR and SIP for new doctors; sertifikat kompetensi in STR requirements; data must match Dukcapil and PDDikti);
 * KKI Chair's Decision HK.01.02/KKI/2476/2026 of 11 Aug 2026 as reported by PERSI Jatim (CoG in English, no copy to the
 * applicant; registration verification on a foreign regulator's form in 3 working days); Law 17/2023 art. 260(4) lifetime
 * STR and 5-yearly SIP as reported by Kompas (Kemenkes spokesperson); nursing programme lengths from college pages
 * (D3 Keperawatan 3 years, S1 Keperawatan 4 years, Profesi Ners 2–3 semesters; entry after SMA/MA or SMK); medical stages
 * (S.Ked, clinical stage, UKMPPD, 1-year internship) from medical-education explainers – reported; passport name rules
 * (Ditjen Imigrasi via detik: no titles, 34 characters, endorsement page) and name additions (Dukcapil via Kompas: court
 * decision, Permendagri 73/2022 two-word rule for new records); DHP Guidelines for Nurses (RGN rows) and Physicians
 * (six-year degree and internship rule; GP 5 years and exam; specialty table – Indonesia is not in it, so Category 3);
 * Circular DHP/2025/08. Emigration is only a pointer to KP2MI and SISKOP2MI. Package scopes and add-on prices come from
 * the Fees records.
 */

export const indonesiaGuide = {
  title: 'Qatar DHP licence from Indonesia: PSV, STR and the KKI Certificate of Good Standing for Indonesian doctors and nurses',
  path: '/qatar/psv/countries/indonesia',
  section: 'documents' as const,
  summary:
    'If you trained or worked in Indonesia, your Qatar DHP application follows the same steps as everyone else’s – Primary Source Verification, DHP evaluation, then licensing – and a few Indonesian details decide how it goes. One body now covers every profession: Konsil Kesehatan Indonesia (KKI) issues the STR, which is valid for life, and the Certificate of Good Standing (Sertifikat Kelaikan Praktik). KKI’s FAQ lists the certificate at Rp 800,000 for doctors and dentists and Rp 500,000 for nurses and other health workers for the Middle East, issued in 10 working days and valid for only three months – so time it for the licensing stage. A D3 Keperawatan diploma after SMA matches DHP’s nursing-diploma rule, and Indonesian specialist qualifications are assessed under DHP’s Category 3. Below: the package that fits each qualification, the good-standing process, which documents to upload, and single-name passports.',
  meta: {
    title: 'Qatar PSV for Indonesian Doctors & Nurses: STR, KKI CoG 2026',
    description:
      'Indonesian doctors and nurses applying to Qatar DHP: KKI Certificate of Good Standing (Rp 500,000–800,000, valid 3 months), lifetime STR, D3 and Ners, Category 3, PSV packages.',
  },
  showVendorTable: false,
  showCalculator: false,
  verifiedOn: '2026-11-02',
  verifiedAgainst: [
    {
      label: 'Konsil Kesehatan Indonesia – FAQ (STR and Certificate of Good Standing)',
      url: 'https://www.kki.go.id/faq',
    },
    {
      label: 'PERSI Jatim – KKI Chair’s Decision HK.01.02/KKI/2476/2026 on the Certificate of Good Standing and registration verification – reported',
      url: 'https://persijatim.id/2026/09/01/penerbitan-sertifikat-kelaikan-praktik-dan-verifikasi-registrasi-tenaga-medis-dan-tenaga-kesehatan/',
    },
    {
      label: 'Kompas – Law 17/2023 makes the STR valid for life; SIP renewed every 5 years (Ministry of Health) – reported',
      url: 'https://www.kompas.com/tren/read/2023/07/12/171500065/uu-kesehatan-baru-atur-str-nakes-berlaku-seumur-hidup-bagaimana-yang?page=all',
    },
    {
      label: 'STIKes Istara Nusantara – D3 Keperawatan, S1 Keperawatan and Profesi Ners compared',
      url: 'https://stikes-istara.ac.id/perbedaan-prodi-d3-s1-keperawatan-profesi-ners/',
    },
    {
      label: 'detikNews – passport name rules from the Directorate General of Immigration – reported',
      url: 'https://news.detik.com/berita/d-8341953/aturan-penulisan-nama-di-paspor-sesuai-standar-internasional-cek-di-sini',
    },
    {
      label: 'Kompas – adding a name to a single-word name (Dukcapil) – reported',
      url: 'https://www.kompas.com/tren/read/2025/11/04/070000365/nama-hanya-1-kata-bisakah-ditambah-di-dukcapil-untuk-urus-paspor-',
    },
    {
      label: 'DHP – Guidelines for Nurses',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Nurses.pdf',
    },
    {
      label: 'DHP – Guidelines for Physicians',
      url: 'https://dhp.moph.gov.qa/en/Documents/Guidelines%20for%20Physicians.pdf',
    },
    {
      label: 'Circular DHP/2025/08 – certificates of good standing only through PSV',
      url: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
      circularNumber: 'DHP/2025/08',
    },
    {
      label: 'Ministry for the Protection of Indonesian Migrant Workers (KP2MI) – SISKOP2MI',
      url: 'https://siskop2mi.bp2mi.go.id/',
    },
  ],
  changeLog: [
    {
      date: '2026-11-02',
      note: 'First published. Certificate of Good Standing requirements, fees, timing and validity from Konsil Kesehatan Indonesia’s FAQ; qualification rules from DHP’s Guidelines for Nurses and Physicians.',
    },
  ],
  faqs: [
    {
      question: 'How do I get a Certificate of Good Standing from KKI for Qatar?',
      answer:
        'Apply online at kki.go.id, logging in with your STR registration account. KKI’s FAQ lists the requirements: proof that a health institution in the destination country has asked for the certificate, a valid police certificate (SKCK) issued in Indonesia, your passport and KTP, payment, and – if you already live abroad – a signed statement of when you moved. You need an active lifetime STR; an old STR is not accepted. Once your file is checked you receive a billing code by e-mail; KKI issues the certificate within 10 working days of valid payment and sends it to the destination regulator or institution. Since 1 August 2025 DHP accepts good standing only through PSV (Circular DHP/2025/08), so ask your PSV provider to send the request and receive the certificate before you apply.',
    },
    {
      question: 'How much does the KKI Certificate of Good Standing cost, and how long is it valid?',
      answer:
        'KKI’s FAQ prices it by destination region. For the Middle East it is Rp 800,000 for doctors and dentists (tenaga medis) and Rp 500,000 for nurses, midwives, pharmacists and other health workers (tenaga kesehatan). The certificate is valid for three months from its issue date and cannot be used after that. DHP accepts good standing up to six months old at licensing, so KKI’s three months is the limit that matters: apply when your PSV provider and employer say the licensing stage is close.',
    },
    {
      question: 'Is D3 Keperawatan accepted for a Qatar Registered Nurse licence?',
      answer:
        'It is the kind of diploma DHP’s rule describes, but DHP decides at evaluation. DHP’s Guidelines for Nurses accept a “Diploma in nursing (duration: 3 years after graduation from 12 years of high school)”, and D3 Keperawatan is a three-year (six-semester) diploma taken after SMA, MA or SMK. S1 Keperawatan with the Ners profession programme matches DHP’s four-year bachelor’s row. Either way DHP wants two years of clinical experience after registration and the Prometric exam.',
    },
    {
      question: 'Is an Indonesian specialist qualification (Sp.) accepted for a specialist licence in Qatar?',
      answer:
        'It is assessed under DHP’s Category 3, because Indonesia is not in DHP’s approved specialty qualification table. Category 3 asks for completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a training hospital, and a pass in the DHP qualifying exam.',
    },
    {
      question: 'Which PSV provider is cheapest for an Indonesian nurse with S1 Keperawatan and Ners?',
      answer:
        'The S.Kep degree and the Ners profession certificate are usually two separate documents, so plan for two qualifications. With one registration, AVS is cheapest on published prices: its QAR 900 nurse package covers up to two qualifications and five years of employment, against QAR 1,050 at QuadraBay (QAR 900 plus QAR 150 for the second qualification) and QAR 1,390 at DataFlow (QAR 990 plus QAR 400). The [PSV fees guide](/qatar/psv/fees) has every price side by side.',
    },
  ],
  markdown: `
## Which PSV package fits your Indonesian qualification?

DHP's approved providers – DataFlow, QuadraBay and AVS – sell packages by profession. This is how the common Indonesian qualifications map onto them:

| Your qualification | DHP category | Package | What to watch |
| --- | --- | --- | --- |
| D3 Keperawatan (A.Md.Kep, 3 years) | Registered General Nurse | E – nurses, midwives, pharmacists | Entry after SMA, MA or SMK; DHP wants 2 years' experience after registration, and the Prometric exam |
| S1 Keperawatan (S.Kep) + Profesi Ners (Ns.) | Registered General Nurse | E | Usually two documents: included at AVS, an add-on at DataFlow and QuadraBay |
| D3 + S1 (alih jenjang) + Ners | Registered General Nurse | E | Three qualifications – ask each provider for a quote |
| D3 Kebidanan or Bidan profession | Midwife | E | Check DHP's midwife requirements before you pay |
| Pendidikan Dokter (S.Ked + dr.) with internship | General Practitioner | A – physicians and dentists | DHP asks overseas GPs for 5 years' clinical experience and the qualifying exam |
| Dokter spesialis (Sp.) | Specialist | A | Indonesian specialty qualifications are assessed under DHP's Category 3 |
| Dokter gigi (drg.) | Dentist | A | Good standing from KKI, the same as doctors |
| Apoteker (S.Farm + Apt.) | Pharmacist | E | Degree and profession certificate are usually two documents |
| Allied health (laboratory, radiography, physiotherapy and others) | Allied health | B | One qualification at DataFlow and QuadraBay, two at AVS |

Packages A and B at all three providers, and AVS's nurse package, cover the last five years of employment with up to three employers; DataFlow's and QuadraBay's Package E covers three years. The [documents guide](/qatar/psv/documents) has the full scope table, and the [PSV fees guide](/qatar/psv/fees) every price.

## What DHP's rules mean for Indonesian qualifications

**Nurses.** DHP's Guidelines for Nurses accept, for a Registered General Nurse, a "Bachelor's Degree in nursing (duration: 4 years)" or a "Diploma in nursing (duration: 3 years after graduation from 12 years of high school)" – or an associate degree with RGN licensure in the country of origin or graduation – followed by two years of clinical experience after registration and licensing, and the Prometric exam. Indonesian nursing colleges describe D3 Keperawatan as a six-semester (three-year) diploma taken after SMA, MA or SMK, S1 Keperawatan as four years, and Profesi Ners as two to three further semesters. D3 matches DHP's diploma row and S1 with Ners its bachelor's row; if your transcript does not show your entry qualification, keep your SMA or SMK certificate ready. DHP, not the PSV provider, decides equivalence at evaluation.

**Doctors.** DHP's Guidelines for Physicians ask general practitioners for a degree from a university in the IMED/FAIMER directory and a minimum six-year undergraduate medical degree (MBBS or equivalent), and say "The internship program can be considered for completion of the required undergraduate study years" when the programme is shorter. Indonesian medical education has an academic stage leading to the S.Ked and a clinical stage leading to the title dr. – reported as about five and a half to six years together – followed by a one-year internship with its own STR and practice permit. Keep your internship completion certificate with your degree, because it may be what brings you to six years. Overseas GPs need five years of experience and must pass the DHP qualifying exam; an exempting exam such as PLAB Part 1 or USMLE Step 2, verified through PSV under Circular DHP/2025/19, replaces the exam but not the experience. The [Prometric exam guide](/qatar/exam/prometric) lists the exempting exams.

**Specialists.** Indonesia is not in DHP's approved specialty qualification table, so Indonesian specialist qualifications (Sp.) are assessed under **Category 3**: completion of structured postgraduate training of at least three years with a passed exit or board exam, three years of clinical experience after the postgraduate degree in a governmental or semi-governmental hospital or a hospital that runs postgraduate training, and a pass in the DHP qualifying exam. The three years need not be the most recent, provided there is no break in practice. Upload your specialist diploma together with the specialist competency certificate (sertifikat kompetensi), which KKI itself asks for when it registers a specialist; whether that certificate counts as the exit exam is DHP's decision at evaluation.

## Where does your certificate of good standing come from?

Since 1 August 2025 DHP accepts a certificate of good standing only as a PSV report (Circular DHP/2025/08). It is usually needed at the licensing stage and must be no more than six months old then – the [good-standing guide](/qatar/psv/problems/good-standing-certificate) explains the rules.

In Indonesia one body issues it for every profession. Since the 2023 Health Law (Law 17/2023), **Konsil Kesehatan Indonesia (KKI)** registers doctors, dentists, nurses, midwives, pharmacists and other health workers, and issues the **Certificate of Good Standing** (Sertifikat Kelaikan Praktik). KKI's FAQ sets out the process:

- **Where:** online at [kki.go.id](https://kki.go.id/), logging in with the account you use for STR registration.
- **What you need:** proof that a health institution in the destination country has asked for the certificate; a valid police certificate (SKCK) from the Indonesian police; your passport and KTP; payment; and, if you have already moved abroad, a signed statement saying since when.
- **Your STR:** it must be an active lifetime STR. KKI's FAQ says an old STR cannot be used, so convert yours first (KKI points to SATUSEHAT SDMK for that).
- **Fee for the Middle East:** **Rp 800,000** for doctors and dentists (tenaga medis) and **Rp 500,000** for nurses, midwives, pharmacists and other health workers (tenaga kesehatan). You pay with a billing code KKI e-mails after checking your file.
- **Time:** 10 working days after your payment is confirmed.
- **Validity:** **three months** from the issue date; it cannot be used after that.
- **Delivery:** KKI sends the certificate, signed electronically, by e-mail and/or as a hard copy to the regulator, educational institution or health facility in the destination country. A KKI decision of August 2026, as reported by PERSI Jatim, adds that the certificate is written in English and that KKI does not give the applicant a copy.

Two things follow for Qatar. First, the request and the recipient: because KKI sends the certificate to an institution, not to you, ask your PSV provider to issue the request (or name who should) and to confirm the e-mail address KKI should send it to, before you apply. Second, timing: KKI's three-month validity is shorter than DHP's six months, so apply only when your PSV provider and employer say the licensing stage is close. The same reported decision describes a separate registration verification – KKI confirms your STR on a foreign regulator's own form within three working days – which your provider may ask for instead of, or as well as, the certificate.

## Which Indonesian documents should you upload?

- **Ijazah and transkrip** – the final certificate, front and back, with the full transcript, in one file. For nurses with S1 and Ners, and for pharmacists, upload both the degree and the profession certificate.
- **Competency certificate (sertifikat kompetensi)** – from your national competency exam, with the qualification it belongs to.
- **Internship certificate** – doctors, with the medical degree.
- **STR** – your current lifetime STR, and the earlier STRs that covered the years DHP will count.
- **Practice permits (SIP)** – for each workplace in the years you are claiming. DHP asks for licences "accompanying the required years of work experience", and in Indonesia the SIP, renewed every five years, is the permit tied to each workplace.
- **Experience certificates (surat keterangan kerja)** – one per employer, on letterhead, with exact start and end dates, your designation and an issue date. The [experience certificate guide](/qatar/psv/problems/experience-letter-format) has a sample.
- **Passport** – a clear, uncut copy, including the endorsement page if it carries part of your name.

You do not need attestation or legalisation for these: DHP's guidelines say PSV replaces attestation. Documents in Bahasa Indonesia must be officially translated into English or Arabic and attached to a copy of the original – a sworn translator (penerjemah tersumpah) is the usual choice; ask your PSV provider which translations it accepts.

## Single names, titles and spellings

Name differences to check for in Indonesian files:

- **A single-word name.** Many Indonesians have one name. Your passport, KTP, ijazah and STR may all show it correctly, while foreign forms ask for a first and a last name. The Directorate General of Immigration, as reported by detikNews, says some destinations require at least two words and that a passport name follows your civil documents. Adding a name is a court process (a district court decision, then Dukcapil, as Dukcapil's director-general told Kompas), and it creates a new mismatch with every certificate you already hold – so do not change your name in the middle of an application. Tell your PSV provider you have a single name and agree how it will be entered.
- **Academic and professional titles** – dr., drg., Ns., S.Kep, A.Md.Kep, Sp.PD – appear on certificates and in the STR but never in the passport, which carries no titles.
- **Long names.** Immigration's reported rule is 34 characters including spaces on the data page; a longer name continues on the endorsement page (page 4). Upload that page too.
- **A married name** in one record and the birth name in another.

Type your name exactly as in your passport wherever a portal asks for your own name, list every other version as an alternative name, and upload a document that links them, such as your KTP, Kartu Keluarga or birth certificate. Before you start, check that your degree record on PDDikti matches your KTP: KKI's FAQ says mismatches there must be corrected at the source – the campus PDDikti officer or Dukcapil. The [name-mismatch guide](/qatar/psv/problems/name-mismatch) covers which evidence suits which case.

## How do Indonesian institutions handle verification requests?

The provider writes to your university, poltekkes or STIKes, to KKI and to your employers, and waits for each to answer. Tell the academic office (bagian akademik) and each hospital's HR department that a request is coming; pay any fee they charge quickly; and give the provider a named contact with an official e-mail address. Name each institution in full, as on the certificate – many nursing schools have changed names or merged, so give the former name too. The [follow-up guide](/qatar/psv/problems/university-not-responding) has a schedule and e-mail templates.

## Before you travel

Indonesian migrant-worker registration is a separate process from DHP licensing. Workers going abroad register in [SISKOP2MI](https://siskop2mi.bp2mi.go.id/), the system of the Ministry for the Protection of Indonesian Migrant Workers (KP2MI, formerly BP2MI), and receive an electronic migrant-worker card before departure. Check what applies to you with KP2MI and your employer, and deal only with licensed placement companies (P3MI).

## Checklist for Indonesian applicants

1. Package chosen to cover every qualification – degree and profession certificate count separately – and the experience years DHP will count.
2. Ijazah, transkrip and competency certificate for each qualification; internship certificate for doctors.
3. Lifetime STR in hand, with earlier STRs and the SIPs for each workplace you are claiming.
4. Specialists: Category 3 checked – structured training, exit exam, three years in a governmental or training hospital, qualifying exam.
5. Experience certificates with exact dates, designation and an issue date.
6. Single name or name variants agreed with your provider, with a document linking them; PDDikti record checked.
7. KKI Certificate of Good Standing planned for the licensing stage – SKCK ready, the request and the recipient agreed with your PSV provider, and no earlier than three months before DHP will need it.
`,
}
