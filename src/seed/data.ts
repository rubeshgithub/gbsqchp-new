/**
 * Reference data for the seed. Every figure carries its source; "verified: false" on a circular means the
 * official PDF has not yet been opened to confirm the number/date — do that before advancing verifiedOn.
 * Last reviewed: 11 Oct 2026 (DataFlow reference kit, AVS fee schedule, DHP circulars list, DHP/2026/36 PDF).
 */

const VERIFIED_ON = '2026-10-11'

/**
 * Circular numbers that were corrected after the first seed. The seed renames existing records in place so a
 * re-run does not leave duplicates behind. Key = old number, value = current number.
 */
export const RENAMED_CIRCULARS: Record<string, string> = {
  'DHP/09/2024': 'DHP/2024/09',
}

export const countries = [
  {
    name: 'Qatar',
    code: 'QA' as const,
    slug: 'qatar',
    regulator: 'Department of Healthcare Professions, Ministry of Public Health',
    regulatorShort: 'DHP',
    regulatorUrl: 'https://dhp.moph.gov.qa/',
    phase: 1,
    active: true,
    summary:
      'The Department of Healthcare Professions (DHP, formerly QCHP) under the Ministry of Public Health licenses every healthcare practitioner in Qatar. Verification by an approved provider comes first, then the qualifying exam or an exemption, then DHP evaluation, then your employer activates the licence.',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE' as const,
    slug: 'uae',
    regulator: 'DHA (Dubai), DOH (Abu Dhabi), MOHAP (other emirates)',
    regulatorShort: 'DHA / DOH / MOHAP',
    regulatorUrl: 'https://www.dha.gov.ae/',
    phase: 2,
    active: false,
    summary: 'Three licensing authorities share a unified Professional Qualification Requirements document; DataFlow is the PSV vendor for all three.',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA' as const,
    slug: 'saudi-arabia',
    regulator: 'Saudi Commission for Health Specialties (Mumaris Plus)',
    regulatorShort: 'SCFHS',
    regulatorUrl: 'https://scfhs.org.sa/',
    phase: 2,
    active: false,
    summary: 'SCFHS classifies and licenses all practitioners through Mumaris Plus; DataFlow verification is attached at classification.',
  },
  {
    name: 'Kuwait',
    code: 'KW' as const,
    slug: 'kuwait',
    regulator: 'Ministry of Health',
    regulatorShort: 'MOH Kuwait',
    regulatorUrl: 'https://www.moh.gov.kw/',
    phase: 3,
    active: false,
    summary: 'The Ministry of Health licenses practitioners; QuadraBay verifies for the private sector, DataFlow is also accepted.',
  },
  {
    name: 'Oman',
    code: 'OM' as const,
    slug: 'oman',
    regulator: 'Ministry of Health',
    regulatorShort: 'MOH Oman',
    regulatorUrl: 'https://www.moh.gov.om/',
    phase: 3,
    active: false,
    summary: 'The Ministry of Health licenses medical, nursing and allied categories under published SOPs.',
  },
  {
    name: 'Bahrain',
    code: 'BH' as const,
    slug: 'bahrain',
    regulator: 'National Health Regulatory Authority (Mehan portal)',
    regulatorShort: 'NHRA',
    regulatorUrl: 'https://www.nhra.bh/',
    phase: 3,
    active: false,
    summary: 'NHRA lists three PSV providers – DataFlow, QuadraBay and Clean Sheet Group – and runs its licensure exam through Prometric.',
  },
]

export const author = {
  name: 'Rubesh Krishnan',
  slug: 'rubesh-krishnan',
  jobTitle: 'MRP Business Consulting',
  bio: 'Twenty years in visa operations, healthcare recruitment and credential verification across the GCC. Writes the licensing guides on this site and checks every fee and date against the official circulars.',
  credentials: ['Credential verification and healthcare licensing in the GCC', 'VFS Global visa operations (Chennai, Dubai)', 'Physician and nurse recruitment for GCC employers'],
  linkedin: 'https://www.linkedin.com/in/rubeshkrishnan-662723133',
}

export const professions = [
  { name: 'General practitioner (physician)', slug: 'general-practitioner', group: 'physician' as const, psvPackageCode: 'A', examCategory: 'General Practitioner', examPassMark: 60, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 1, notes: 'Pass mark and attempt limit as reported by consultancy guides – verify against the DHP qualifying-exam page and guidelines.' },
  { name: 'Specialist / consultant physician', slug: 'specialist-physician', group: 'physician' as const, psvPackageCode: 'A', examCategory: 'Specialty exam (by specialty)', examPassMark: 65, examAttempts: 3, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 2, notes: 'Category 1 and 2 qualifications are exempt from the qualifying exam per DHP Guidelines for Physicians – verify per case.' },
  { name: 'Dentist', slug: 'dentist', group: 'dentist' as const, psvPackageCode: 'A', examCategory: 'General Dentist', examPassMark: 60, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 3 },
  { name: 'Registered nurse', slug: 'registered-nurse', group: 'nurse' as const, psvPackageCode: 'E', examCategory: 'Registered Nurse', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 3, sortOrder: 4 },
  { name: 'Midwife', slug: 'midwife', group: 'nurse' as const, psvPackageCode: 'E', examCategory: 'Midwife', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 3, sortOrder: 5 },
  { name: 'Clinical nurse specialist / nurse practitioner / nurse educator', slug: 'advanced-practice-nurse', group: 'nurse' as const, psvPackageCode: 'G', examCategory: 'Registered Nurse (advanced practice)', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 6 },
  { name: 'Pharmacist', slug: 'pharmacist', group: 'pharmacist' as const, psvPackageCode: 'E', examCategory: 'Pharmacist', examPassMark: 60, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 3, sortOrder: 7, notes: 'Pharmacist exam content updated from 1 May 2025 (Prometric programme page).' },
  { name: 'Physiotherapist', slug: 'physiotherapist', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Physiotherapist', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 8 },
  { name: 'Medical laboratory technologist', slug: 'medical-laboratory-technologist', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Laboratory Technologist', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 9 },
  { name: 'Radiographer / radiology technologist', slug: 'radiographer', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Radiology Technologist', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 10 },
  { name: 'Dietitian', slug: 'dietitian', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Dietitian', examPassMark: 50, examAttempts: 5, examQuestions: 160, experienceYearsVerified: 5, sortOrder: 11 },
  { name: 'Paramedic', slug: 'paramedic', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Paramedic', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 12 },
  { name: 'Other allied health professional', slug: 'allied-health-other', group: 'allied-health' as const, psvPackageCode: 'B', examCategory: 'Allied health (by category)', examPassMark: 50, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 13 },
]

export const circulars = [
  {
    number: '15/2018',
    authority: 'QCHP' as const,
    status: 'historical' as const,
    title: 'Contract with Gulf Bridge Services (GBS) as a second primary source verification provider',
    issuedOn: null,
    topics: ['vendors', 'psv'],
    summary: 'QCHP announced a contract with Gulf Bridge Services to conduct primary source verification for registration and licensing alongside DataFlow. Announced to the press on 21 July 2018.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(15-2018)%20-%20Eng.pdf',
    verified: true,
  },
  {
    number: 'DHP/2024/09',
    authority: 'DHP' as const,
    status: 'historical' as const,
    title: 'End of the contract with Gulf Bridge Services (GBS) as one of the approved companies for Primary Source Verification (PSV)',
    issuedOn: '2024-02-07',
    topics: ['vendors', 'psv'],
    summary: 'DHP announced the end of the contractual agreement with GBS, one of the two companies approved to verify practitioners’ certificates from the primary source. DataFlow remained the sole provider until December 2025.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-09-E.pdf',
    verified: false,
  },
  {
    number: 'DHP/2024/10',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Modification on the qualifying examination fee',
    issuedOn: '2024-04-18',
    topics: ['exam', 'fees'],
    summary: 'Sets the Prometric fee for the DHP qualifying exam: US$238 from 19 Jan 2024 and 1 Jan 2025, US$244 from 1 Jan 2026. Cancelling or rescheduling costs US$25 at 30 or more days before the exam, US$40 at 5–29 days, and the full exam fee at under 5 days, for a no-show, or for arriving more than 30 minutes late.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-10%20E.pdf',
    verified: true,
  },
  {
    number: 'DHP/2024/16',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Updates to the processing time of registration/licensing requests',
    issuedOn: '2024-06-05',
    topics: ['evaluation'],
    summary: 'Sets DHP’s processing times in working days, counted from a complete application with verified documents (a returned application restarts the count on resubmission). Evaluation: 25 for physicians and dentists, 15 for nurses, pharmacists and allied health. Licensing: 15 and 10. Temporary licence: 5. Renewal: 7. Change of workplace: 10 and 7. Restoration: 20 and 15.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-16-2024-E.pdf',
    verified: true,
  },
  {
    number: 'DHP/2024/22',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Updates on the Electronic Registration System',
    issuedOn: null,
    topics: ['evaluation'],
    summary: 'Updates to the DHP electronic registration system. Consultancies report this is the circular that lets applicants outside Qatar obtain a preliminary evaluation and an eligibility letter (reported as valid for six months) before securing a sponsoring employer – confirm against the PDF.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP-2024-22-Eng.pdf',
    verified: false,
  },
  {
    number: 'DHP/2025/08',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Updated procedure for submitting Certificates of Good Standing',
    issuedOn: '2025-07-14',
    topics: ['psv', 'evaluation'],
    summary: 'From 1 August 2025 DHP no longer accepts certificates of good standing sent to its good-standing email address or PO Box. Every practitioner must instead submit a primary source verification report for the good standing certificate; certificates sent by email or post after that date are not accepted.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/Circular%20(DHP-08-2025)En.pdf',
    verified: true,
  },
  {
    number: 'DHP/2025/19',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'List of qualifying exams that exempt from the qualifying exam (Prometric) required for licensing purposes',
    issuedOn: '2025-11-26',
    topics: ['exam', 'psv'],
    summary: 'Lists the exams that exempt from the DHP qualifying (Prometric) exam. GPs: IFOM Clinical Science Exam, USMLE Step 2, PLAB Part 1, MCCQE Part 1, AMC MCQ, MRCGP Part 1 AKT, PRES (MCQ) Part 2. General dentists: NJCE II, NDEB Canada, Irish Dental Council exams, NZDREX, UK ORE (not older than 5 years), or registration in Australia, Ireland, New Zealand or the UK for graduates of accredited programmes there. Pharmacists: NAPLEX, PEBC, OSPAP, OPRA, CAOP. Nurses: NCLEX-RN. Allied health: NBDHE. The exam must be valid, and from 1 January 2026 no exempting exam is accepted without a verification report from a PSV company.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2019%202025%20E.pdf',
    verified: true,
  },
  {
    number: 'DHP/2025/20',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Endorsement of a Second Provider for Primary Source Verification Services (Quadrabay)',
    issuedOn: '2025-12-02',
    topics: ['vendors', 'psv', 'fees'],
    summary: 'Endorses QuadraBay as a second PSV provider alongside DataFlow for all licensing categories, new applications, renewals, upgrades, re-registration and facility submissions, and publishes its package fees and processing targets.',
    officialUrl: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
    verified: true,
  },
  {
    number: 'DHP/2025/24',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Update on Circular No. (13/2023) on the Registration and Licensing Policy of Healthcare Practitioners',
    issuedOn: '2025-12-30',
    topics: ['experience', 'exam', 'evaluation'],
    summary: 'Sets the work-experience and qualifying-exam rules for Qatari nationals, offspring of Qatari women, residents’ offspring and spouses, and graduates of Qatar institutions. GPs from Qatar universities need a one-year internship; Qatar-graduate dentists, pharmacists, nurses and AHPs are exempt from experience. For foreign graduates: GPs and dentists need an internship year (plus one year of practice for spouses of residents); pharmacy, nursing and AHP need one year (Qataris and offspring of Qatari women exempt). Exam exemptions: Qataris, offspring of Qatari women, graduates of Qatar institutions. Annuls circulars 01/2016, 11/2018, 19/2020, 24/2020, 15/2022 and 13/2023. Despite press coverage, the circular says nothing about primary source verification.',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2024%202025%20E.pdf',
    verified: true,
  },
  {
    number: 'DHP/2026/36',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Approval of a Third Provider of Primary Source Verification (PSV) Services: Approved Verification Services (AVS)',
    issuedOn: '2026-09-03',
    topics: ['vendors', 'psv'],
    summary: 'Announces a partnership agreement with Approved Verification Services (AVS), which becomes the third approved PSV provider. Practitioners may submit verification requests through AVS from the date of the circular, as well as through the other approved companies. The circular points to the AVS electronic application guide for the service fee schedule (portal: avsqatar.com).',
    officialUrl: 'https://dhp.moph.gov.qa/en/QCHPCirculars/DHP%2036%202026%20E.pdf',
    verified: true,
  },
]

export const vendors = [
  {
    name: 'DataFlow Group',
    shortName: 'DataFlow',
    slug: 'dataflow',
    status: 'approved' as const,
    sortOrder: 1,
    countryCodes: ['QA', 'AE', 'SA', 'KW', 'OM', 'BH'],
    approvedOn: null,
    endedOn: null,
    approvedUnderNumbers: [],
    tagline: 'DHP verification partner since 2009',
    website: 'https://dataflowgroup.com/organization/dhp-moph-qatar/',
    applyUrl: 'https://dhp.dataflowgroup.com/en/onboarding/signin',
    trackUrl: 'https://app.dataflowgroup.com/en/onboarding/signin',
    supportUrl: 'https://support.dataflowgroup.com/',
    supportEmail: null,
    phone: null,
    whatsapp: '+974 4419 6582',
    officeAddress: 'Office 49, 6th Floor, Barwa Tower 1, Doha',
    officeHours: 'Sunday to Thursday, 8 am – 4 pm',
  },
  {
    name: 'QuadraBay',
    shortName: 'QuadraBay',
    slug: 'quadrabay',
    status: 'approved' as const,
    sortOrder: 2,
    countryCodes: ['QA', 'KW', 'BH'],
    approvedOn: '2025-12-02',
    endedOn: null,
    approvedUnderNumbers: ['DHP/2025/20'],
    tagline: 'Approved 2 Dec 2025 as DHP’s second provider',
    website: 'https://quadrabay.com/',
    applyUrl: 'https://dhp.quadrabay.com/',
    trackUrl: 'https://track.quadrabay.com/',
    supportUrl: null,
    supportEmail: 'dhp.support@quadrabay.com',
    phone: '+971 600 566 777',
    whatsapp: null,
    officeAddress: null,
    officeHours: null,
  },
  {
    name: 'Approved Verification Services (AVS)',
    shortName: 'AVS',
    slug: 'avs',
    status: 'approved' as const,
    sortOrder: 3,
    countryCodes: ['QA'],
    approvedOn: '2026-09-03',
    endedOn: null,
    approvedUnderNumbers: ['DHP/2026/36'],
    tagline: 'Approved 3 Sept 2026 as DHP’s third provider',
    website: 'https://avsqatar.com/',
    applyUrl: 'https://www.avsqatar.com/avs/apply',
    trackUrl: 'https://www.avsqatar.com/avs/dashboard',
    supportUrl: null,
    supportEmail: 'dhp.helpdesk@avsqatar.com',
    phone: '+974 4464 4490',
    whatsapp: '+974 5054 4490',
    officeAddress: 'Abdul Jaleel Business Center, 5th Floor, Office 504, Airport Street, Doha',
    officeHours: 'Sunday to Thursday, 8 am – 4 pm',
  },
  {
    name: 'Gulf Bridge Services (GBS)',
    shortName: 'GBS',
    slug: 'gbs',
    status: 'former' as const,
    sortOrder: 9,
    countryCodes: ['QA'],
    approvedOn: '2018-07-21',
    endedOn: '2024-02-07',
    approvedUnderNumbers: ['15/2018', 'DHP/2024/09'],
    tagline: 'QCHP’s second approved provider, July 2018 – February 2024',
    website: null,
    applyUrl: null,
    trackUrl: null,
    supportUrl: null,
    supportEmail: null,
    phone: null,
    whatsapp: null,
    officeAddress: null,
    officeHours: null,
  },
]

type SeedFee = {
  vendorSlug: string
  countryCode: string
  tier: 'standard' | 'express' | 'addon' | 'optional'
  packageCode?: string
  packageName?: string
  addonKey?: string
  professionSlugs?: string[]
  amount: number
  currency?: string
  targetDays?: number
  daysUnit?: 'working' | 'business' | 'calendar'
  includes?: string[]
  notes?: string
  /** false hides a retired price line everywhere (the seed never deletes records). */
  active?: boolean
  sourceLabel: string
  sourceUrl: string
  verifiedOn: string
}

const DF_SRC = {
  sourceLabel: 'DataFlow – DHP price list (PDF dated 28 Jul 2025) and Customer Reference Kit for DHP',
  sourceUrl: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
  verifiedOn: '2026-10-16',
}
const QB_SRC = {
  sourceLabel: 'Circular DHP/2025/20 – QuadraBay packages',
  sourceUrl: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
  verifiedOn: VERIFIED_ON,
}
const AVS_SRC = {
  sourceLabel: 'AVS – DHP Reference Program Guide (fee schedule, Aug 2026)',
  sourceUrl: 'https://avsqatar.com/files/DHP%20Reference%20Program%20Guide.pdf',
  verifiedOn: VERIFIED_ON,
}

const DF_STANDARD_NOTE = 'DataFlow’s reference kit quotes an average of 20 working days from the day all documents are submitted; its FAQ gives 15 to 25 working days and warns that verification can take up to three months. Express (+QAR 529) averages 14 working days.'
const AVS_STANDARD_NOTE = 'The 20-day turnaround is shown on the AVS portal’s package card, not in AVS’s PDFs; AVS does not say whether these are working days. Every AVS clinical package covers up to two qualifications and five years of employment.'

export const fees: SeedFee[] = [
  // ---------- DataFlow – standard packages ----------
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'A', packageName: 'Physicians & Dentists', professionSlugs: ['general-practitioner', 'specialist-physician', 'dentist'], amount: 1210, targetDays: 20, daysUnit: 'working', includes: ['2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'B', packageName: 'Allied Health Practitioners & Complementary Medicine', professionSlugs: ['physiotherapist', 'medical-laboratory-technologist', 'radiographer', 'dietitian', 'paramedic', 'allied-health-other'], amount: 990, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'C', packageName: 'Retrospective – physicians & dentists working in Qatar for more than 5 years', amount: 800, targetDays: 20, daysUnit: 'working', includes: ['Up to 2 educational qualifications', '1 professional licence', 'Cross check'], notes: 'Retrospective packages are for practitioners already licensed in Qatar who are asked to complete PSV; no employment verification is included.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'D', packageName: 'Retrospective – allied health professionals (other than physicians & dentists) working in Qatar for more than 3 years', amount: 700, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', '1 professional licence', 'Cross check'], notes: 'Retrospective packages are for practitioners already licensed in Qatar who are asked to complete PSV; no employment verification is included.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'E', packageName: 'Nurses & Pharmacists', professionSlugs: ['registered-nurse', 'midwife', 'pharmacist'], amount: 990, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', '1 professional licence', 'Last 3 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'F', packageName: 'Trainee (no experience)', amount: 600, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'G', packageName: 'Clinical Nurse Specialist / Nurse Practitioner / Nurse Educator', professionSlugs: ['advanced-practice-nurse'], amount: 1210, targetDays: 20, daysUnit: 'working', includes: ['2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'H', packageName: 'Visiting Physicians & AHP', amount: 300, targetDays: 20, daysUnit: 'working', includes: ['1 professional licence', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'I', packageName: 'Good Standing Certificates (2–3)', amount: 550, targetDays: 20, daysUnit: 'working', includes: ['2–3 good standing certificates', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'J', packageName: 'Good Standing + Employment Certificate', amount: 550, targetDays: 20, daysUnit: 'working', includes: ['1 good standing certificate', '1 employment certificate (most recent)', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'K', packageName: 'AHP education only', amount: 400, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'L', packageName: 'Non-medical staff', amount: 400, targetDays: 20, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  // ---------- DataFlow – add-ons and optional services ----------
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'express-upgrade', packageName: 'Express service (14 working days)', amount: 529, targetDays: 14, daysUnit: 'working', notes: 'Applies to packages A, B, C, D, E and G. For packages F and H–L, report transfers and additional documents, express is priced by document count: QAR 215 / 323 / 430 / 529 for 1 / 2 / 3 / 4+ documents.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-education', packageName: 'Additional educational qualification', amount: 400, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'good-standing', packageName: 'Additional good standing certificate', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'logbook', packageName: 'Surgical logbook', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-licence', packageName: 'Additional professional licence', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-employer', packageName: 'Additional employment check (beyond 3 employers)', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'report-transfer', packageName: 'Report transfer to DHP (report previously issued to another authority)', amount: 323, targetDays: 5, daysUnit: 'calendar', notes: 'Re-issuance fee for a DataFlow report previously issued to DHA, DOH, MOHAP, SCFHS, NHRA or another authority. DataFlow quotes a new DHP report within 5 days if no additional documents are needed.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'report-reissue', packageName: 'Report re-issuance (report previously issued to DHP)', amount: 215, notes: 'For a DataFlow report that was already issued to DHP, e.g. re-registration or a new employer.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'optional', addonKey: 'applicant-assist', packageName: 'Applicant Assist (DataFlow fills the application)', amount: 157, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'optional', addonKey: 'vip', packageName: 'VIP Virtual Assistance (dedicated relationship manager)', amount: 788, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'optional', addonKey: 'sms', packageName: 'SMS notifications', amount: 10, notes: 'Listed as QAR 10.18.', ...DF_SRC },
  // ---------- QuadraBay – standard & prestige ----------
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'A', packageName: 'Physicians & Dentists', professionSlugs: ['general-practitioner', 'specialist-physician', 'dentist'], amount: 1100, targetDays: 20, daysUnit: 'business', includes: ['Up to 2 educational certificates', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'GlobeX global database check'], ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'express', packageCode: 'A', packageName: 'Physicians & Dentists – Prestige', professionSlugs: ['general-practitioner', 'specialist-physician', 'dentist'], amount: 1400, targetDays: 14, daysUnit: 'business', includes: ['Same scope as Standard', '14 business-day target'], ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'B', packageName: 'Allied Health Professionals', professionSlugs: ['physiotherapist', 'medical-laboratory-technologist', 'radiographer', 'dietitian', 'paramedic', 'allied-health-other'], amount: 900, targetDays: 20, daysUnit: 'business', includes: ['1 educational certificate', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'GlobeX check'], ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'express', packageCode: 'B', packageName: 'Allied Health Professionals – Prestige', professionSlugs: ['physiotherapist', 'medical-laboratory-technologist', 'radiographer', 'dietitian', 'paramedic', 'allied-health-other'], amount: 1200, targetDays: 14, daysUnit: 'business', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'E', packageName: 'Nurses & Pharmacists', professionSlugs: ['registered-nurse', 'midwife', 'pharmacist'], amount: 900, targetDays: 20, daysUnit: 'business', includes: ['1 educational certificate', '1 professional licence', 'Last 3 years of experience (up to 3 employers)', 'GlobeX check'], ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'express', packageCode: 'E', packageName: 'Nurses & Pharmacists – Prestige', professionSlugs: ['registered-nurse', 'midwife', 'pharmacist'], amount: 1200, targetDays: 14, daysUnit: 'business', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'G', packageName: 'Clinical Nurse Specialist / Nurse Practitioner / Nurse Educator', professionSlugs: ['advanced-practice-nurse'], amount: 1100, targetDays: 20, daysUnit: 'business', includes: ['Up to 2 educational certificates', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'GlobeX check'], ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'express', packageCode: 'G', packageName: 'CNS / NP / Nurse Educator – Prestige', professionSlugs: ['advanced-practice-nurse'], amount: 1400, targetDays: 14, daysUnit: 'business', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'I', packageName: 'Good Standing Certificates (2–3)', amount: 550, targetDays: 20, daysUnit: 'business', includes: ['2–3 good standing certificates', 'GlobeX check'], ...QB_SRC },
  // ---------- QuadraBay – add-ons ----------
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'report-transfer', packageName: 'Report transfer', amount: 150, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-education', packageName: 'Additional document (educational)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'good-standing', packageName: 'Additional document (good standing)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-licence', packageName: 'Additional document (licence)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-employer', packageName: 'Additional document (employment)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'logbook', packageName: 'Additional document (logbook)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'concierge', packageName: 'Concierge service', amount: 150, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'vip', packageName: 'VIP virtual assistance', amount: 500, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'sms', packageName: 'SMS notifications', amount: 10, ...QB_SRC },
  // ---------- AVS – packages (AVS names them by profession; mapped to the DHP package letters used site-wide) ----------
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'A', packageName: 'Physicians / Dentists', professionSlugs: ['general-practitioner', 'specialist-physician', 'dentist'], amount: 1050, targetDays: 20, daysUnit: 'calendar', includes: ['Up to 2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: AVS_STANDARD_NOTE, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'B', packageName: 'Allied Health Practitioners / Complementary Medicine', professionSlugs: ['physiotherapist', 'medical-laboratory-technologist', 'radiographer', 'dietitian', 'paramedic', 'allied-health-other'], amount: 900, targetDays: 20, daysUnit: 'calendar', includes: ['Up to 2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: AVS_STANDARD_NOTE, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'E', packageName: 'Nurses / Pharmacists', professionSlugs: ['registered-nurse', 'midwife', 'pharmacist'], amount: 900, targetDays: 20, daysUnit: 'calendar', includes: ['Up to 2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: AVS_STANDARD_NOTE, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'F', packageName: 'Trainee with no experience (any profession)', amount: 525, targetDays: 20, daysUnit: 'calendar', includes: ['1 educational qualification', 'Cross check'], ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'G', packageName: 'Clinical Nurse Specialist / Nurse Practitioner / Nurse Educator', professionSlugs: ['advanced-practice-nurse'], amount: 1050, targetDays: 20, daysUnit: 'calendar', includes: ['Up to 2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: 'AVS labels this package “(Qatar to Qatar)”; confirm with AVS that the price applies to applicants coming from abroad.', ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'H', packageName: 'Visiting Physicians & AHP (health licence only)', amount: 300, includes: ['1 health licence', 'Cross check'], ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'I', packageName: 'Good Standing Certificates (2–3)', amount: 500, includes: ['2–3 good standing certificates'], ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'J', packageName: 'Good Standing + Employment Certificate', amount: 500, includes: ['1 good standing certificate', '1 employment certificate (most recent)'], ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'standard', packageCode: 'L', packageName: 'Non-medical staff', amount: 400, includes: ['1 educational qualification'], ...AVS_SRC },
  // ---------- AVS – add-ons and optional services ----------
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'express-upgrade', packageName: 'Express / priority verification', amount: 400, notes: 'AVS: “final turnaround time and service conditions are subject to AVS confirmation” – no published day target.', ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'extra-education', packageName: 'Additional educational qualification', amount: 300, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'extra-licence', packageName: 'Additional health licence', amount: 250, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'good-standing', packageName: 'Additional good standing certificate', amount: 250, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'extra-employer', packageName: 'Additional employment check', amount: 250, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'logbook', packageName: 'Additional logbook', amount: 250, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'report-transfer', packageName: 'Report transfer / re-issuance (an AVS report)', amount: 250, notes: 'AVS’s “Report Transfer / Re-Issuance”: re-issuance or transfer of a previously completed AVS verification report. AVS also lists “report transfer from another vendor” at QAR 250 and “report transfer within the same client” at QAR 150; no DHP circular says DHP accepts a report moved between providers – ask DHP first.', ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'addon', addonKey: 'report-reissue', packageName: 'Report transfer / re-issuance', amount: 250, active: false, notes: 'Retired 16 Oct 2026: the same AVS service is now listed once, under report transfer.', ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'optional', addonKey: 'applicant-assist', packageName: 'VIP application assistance (help completing and following up the application)', amount: 100, ...AVS_SRC },
  { vendorSlug: 'avs', countryCode: 'QA', tier: 'optional', addonKey: 'other', packageName: 'Express + applicant assist bundle', amount: 480, ...AVS_SRC },
]
