/**
 * Reference data for the seed. Every figure carries its source; "verified: false" on a circular means the
 * official PDF has not yet been opened to confirm the number/date — do that before advancing verifiedOn.
 * Last reviewed: 9 Oct 2026.
 */

const VERIFIED_ON = '2026-10-09'

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
  jobTitle: 'Managing Director, Instead Global',
  bio: 'Twenty years in visa operations, healthcare recruitment and credential verification across the GCC, including Gulf Bridge Services, which ran the second QCHP-approved PSV channel in Qatar from 2018 to 2024. Writes the licensing guides on this site and checks every fee and date against the official circulars.',
  credentials: ['Former operator of the GBS primary source verification channel for QCHP (2018–2024)', 'VFS Global visa operations (Chennai, Dubai)', 'Physician and nurse recruitment for GCC employers'],
  linkedin: 'https://www.linkedin.com/in/rubeshkrishnan-662723133',
}

export const professions = [
  { name: 'General practitioner (physician)', slug: 'general-practitioner', group: 'physician' as const, psvPackageCode: 'A', examCategory: 'General Practitioner', examPassMark: 60, examAttempts: 5, examQuestions: 150, experienceYearsVerified: 5, sortOrder: 1, notes: 'Pass mark and attempt limit reported from DHP guidelines and Circular DHP/2024/10 – verify.' },
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
    number: 'DHP/09/2024',
    authority: 'DHP' as const,
    status: 'historical' as const,
    title: 'End of the contract with Gulf Bridge Services (GBS)',
    issuedOn: '2024-02-07',
    topics: ['vendors', 'psv'],
    summary: 'DHP announced the end of the contractual agreement with GBS, one of the two companies approved to verify practitioners’ certificates from the primary source. DataFlow remained the sole provider until December 2025.',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
  },
  {
    number: 'DHP/2024/10',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Qualifying examination attempt limits',
    issuedOn: null,
    topics: ['exam'],
    summary: 'Sets the number of attempts allowed at the qualifying examination: five for general practitioners, three for specialty and assistant-specialty applicants (as reported by consultancies; confirm against the PDF).',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
  },
  {
    number: 'DHP/2024/22',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Preliminary evaluation without an employer',
    issuedOn: null,
    topics: ['evaluation'],
    summary: 'Allows applicants outside Qatar to obtain a preliminary evaluation and an eligibility letter, reported as valid for six months, before securing a sponsoring employer (as reported; confirm against the PDF).',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
  },
  {
    number: 'DHP/2025/19',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Qualifying examination exemptions',
    issuedOn: null,
    topics: ['exam'],
    summary: 'Lists the international qualifications that exempt an applicant from the DHP qualifying exam (reported: USMLE, PLAB, MRCGP AKT, AMC MCQ, MCCQE Part 1, PRES Part 2, Arab Board, NCLEX-RN for nurses). Exemption from the exam never exempts from PSV.',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
  },
  {
    number: 'DHP/2025/20',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'QuadraBay approved as a second primary source verification provider',
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
    title: 'Updated work experience, qualifying exam and verification rules',
    issuedOn: '2025-12-30',
    topics: ['psv', 'experience', 'exam', 'evaluation'],
    summary: 'From 1 January 2026 primary source verification is mandatory for every applicant with no exceptions; the circular also updates work-experience, internship and break-in-practice thresholds and qualifying-exam requirements for graduates inside and outside Qatar (summary reported by MOPH coverage; confirm the thresholds against the PDF).',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
  },
  {
    number: 'DHP/2026/36',
    authority: 'DHP' as const,
    status: 'in-force' as const,
    title: 'Approved Verification Services (AVS) approved as a third primary source verification provider',
    issuedOn: null,
    topics: ['vendors', 'psv'],
    summary: 'Adds Approved Verification Services (avsqatar.com) as a third DHP-approved PSV provider, listed on the DHP Primary Source Verification page with its application guide and reference-programme guide (number from the DHP circulars list; confirm date and content against the PDF).',
    officialUrl: 'https://dhp.moph.gov.qa/en/Pages/AllCirculars.aspx',
    verified: false,
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
    trackUrl: 'https://www.dataflowstatus.com/applicationstatus',
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
    phone: null,
    whatsapp: null,
    officeAddress: null,
    officeHours: 'Live chat 9 am – 9 pm daily (per QuadraBay)',
  },
  {
    name: 'Approved Verification Services (AVS)',
    shortName: 'AVS',
    slug: 'avs',
    status: 'approved' as const,
    sortOrder: 3,
    countryCodes: ['QA'],
    approvedOn: null,
    endedOn: null,
    approvedUnderNumbers: ['DHP/2026/36'],
    tagline: 'Approved in 2026 as DHP’s third provider',
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
    approvedUnderNumbers: ['15/2018', 'DHP/09/2024'],
    tagline: 'QCHP’s second approved provider, July 2018 – February 2024',
    website: 'https://gulfbridgeservices.com/',
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
  sourceLabel: string
  sourceUrl: string
  verifiedOn: string
}

const DF_SRC = {
  sourceLabel: 'DataFlow – DHP price list (Sept 2024)',
  sourceUrl: 'https://dataflowgroup.com/wp-content/uploads/2024/09/DHP-Price-List-Google-Docs.pdf',
  verifiedOn: VERIFIED_ON,
}
const QB_SRC = {
  sourceLabel: 'Circular DHP/2025/20 – QuadraBay packages',
  sourceUrl: 'https://dhp.moph.gov.qa/en/Documents/DHP%2020%202025%20E.pdf',
  verifiedOn: VERIFIED_ON,
}

const DF_STANDARD_NOTE = 'DataFlow quotes 25–35 working days in practice and allows up to three months in its FAQ; Express (+QAR 529) targets 14 working days.'

export const fees: SeedFee[] = [
  // ---------- DataFlow – standard packages ----------
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'A', packageName: 'Physicians & Dentists', professionSlugs: ['general-practitioner', 'specialist-physician', 'dentist'], amount: 1210, targetDays: 25, daysUnit: 'working', includes: ['2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'B', packageName: 'Allied Health Practitioners / Complementary Medicine', professionSlugs: ['physiotherapist', 'medical-laboratory-technologist', 'radiographer', 'dietitian', 'paramedic', 'allied-health-other'], amount: 990, targetDays: 25, daysUnit: 'working', includes: ['1 educational qualification', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'E', packageName: 'Nurses & Pharmacists', professionSlugs: ['registered-nurse', 'midwife', 'pharmacist'], amount: 990, targetDays: 25, daysUnit: 'working', includes: ['1 educational qualification', '1 professional licence', 'Last 3 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'F', packageName: 'Trainee (no experience)', amount: 600, targetDays: 25, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'G', packageName: 'Clinical Nurse Specialist / Nurse Practitioner / Nurse Educator', professionSlugs: ['advanced-practice-nurse'], amount: 1210, targetDays: 25, daysUnit: 'working', includes: ['2 educational qualifications', '1 professional licence', 'Last 5 years of experience (up to 3 employers)', 'Cross check'], notes: DF_STANDARD_NOTE, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'H', packageName: 'Visiting Physicians & AHP', amount: 300, targetDays: 25, daysUnit: 'working', includes: ['1 professional licence', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'I', packageName: 'Good Standing Certificates (2–3)', amount: 550, targetDays: 25, daysUnit: 'working', includes: ['2–3 good standing certificates', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'J', packageName: 'Good Standing + Employment Certificate', amount: 550, targetDays: 25, daysUnit: 'working', includes: ['1 good standing certificate', '1 employment certificate (most recent)', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'K', packageName: 'AHP education only', amount: 400, targetDays: 25, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'standard', packageCode: 'L', packageName: 'Non-medical staff', amount: 400, targetDays: 25, daysUnit: 'working', includes: ['1 educational qualification', 'Cross check'], ...DF_SRC },
  // ---------- DataFlow – add-ons and optional services ----------
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'express-upgrade', packageName: 'Express service (14 working days)', amount: 529, targetDays: 14, daysUnit: 'working', notes: 'Applies to packages A, B, C, D, E and G. Packages F and H–L: QAR 215 / 323 / 430 / 529 for 1 / 2 / 3 / 4+ documents.', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-education', packageName: 'Additional educational qualification', amount: 400, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'good-standing', packageName: 'Additional good standing certificate', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'logbook', packageName: 'Surgical logbook', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-licence', packageName: 'Additional professional licence', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'extra-employer', packageName: 'Additional employment check (beyond 3 employers)', amount: 300, ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'report-transfer', packageName: 'Report transfer to DHP', amount: 215, targetDays: 5, daysUnit: 'calendar', notes: 'New DHP report within 5 days if no additional documents are needed (DataFlow DHP page).', ...DF_SRC },
  { vendorSlug: 'dataflow', countryCode: 'QA', tier: 'addon', addonKey: 'report-reissue', packageName: 'Report re-issuance to another authority', amount: 323, ...DF_SRC },
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
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'standard', packageCode: 'I', packageName: 'Good Standing Certificates (2–3)', amount: 550, targetDays: 20, daysUnit: 'business', ...QB_SRC },
  // ---------- QuadraBay – add-ons ----------
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'report-transfer', packageName: 'Report transfer', amount: 150, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-education', packageName: 'Additional document (educational)', amount: 150, notes: 'QuadraBay prices additional documents as a bundle: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300. The calculator uses the single-document price.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'good-standing', packageName: 'Additional document (good standing)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-licence', packageName: 'Additional document (licence)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'extra-employer', packageName: 'Additional document (employment)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'addon', addonKey: 'logbook', packageName: 'Additional document (logbook)', amount: 150, notes: 'Bundle pricing: 1 = QAR 150, 2 = 200, 3 = 250, 4 = 300.', ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'concierge', packageName: 'Concierge service', amount: 150, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'vip', packageName: 'VIP virtual assistance', amount: 500, ...QB_SRC },
  { vendorSlug: 'quadrabay', countryCode: 'QA', tier: 'optional', addonKey: 'sms', packageName: 'SMS notifications', amount: 10, ...QB_SRC },
]
