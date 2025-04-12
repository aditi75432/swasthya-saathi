export interface HealthScheme {
  tag: string
  name: string
  age: string
  income: string
  gender: string
  targetGroup: string
  workerCategory: string
  type: string
  description: string
}

export const healthSchemes: HealthScheme[] = [
  {
    tag: "janani_shishu_suraksha_karyakaram_jssk",
    name: "Janani Shishu Suraksha Karyakaram (JSSK)",
    age: "Pregnant women, newborns",
    income: "All (especially poor)",
    gender: "Female",
    targetGroup: "Mothers & Newborns",
    workerCategory: "NA",
    type: "Maternity and Neonatal Care",
    description: "Janani Shishu Suraksha Karyakaram (JSSK) is a Maternity and Neonatal Care scheme.",
  },
  {
    tag: "rashtriya_kishor_swasthya_karyakram_rksk",
    name: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
    age: "10–19 yrs",
    income: "All",
    gender: "Both",
    targetGroup: "Adolescents",
    workerCategory: "NA",
    type: "Adolescent Health",
    description: "Rashtriya Kishor Swasthya Karyakram (RKSK) is a Adolescent Health scheme.",
  },
  {
    tag: "rashtriya_bal_swasthya_karyakram_rbsk",
    name: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    age: "0–18 yrs",
    income: "All",
    gender: "Both",
    targetGroup: "Children",
    workerCategory: "NA",
    type: "Child Health Screening",
    description: "Rashtriya Bal Swasthya Karyakram (RBSK) is a Child Health Screening scheme.",
  },
  {
    tag: "universal_immunisation_programme",
    name: "Universal Immunisation Programme",
    age: "0–6 yrs",
    income: "All",
    gender: "Both",
    targetGroup: "Infants",
    workerCategory: "NA",
    type: "Immunization",
    description: "Universal Immunisation Programme is a Immunization scheme.",
  },
  {
    tag: "mission_indradhanush",
    name: "Mission Indradhanush",
    age: "0–2 yrs, pregnant women",
    income: "Underserved",
    gender: "Both",
    targetGroup: "Infants & Pregnant Women",
    workerCategory: "NA",
    type: "Immunization",
    description: "Mission Indradhanush is a Immunization scheme.",
  },
  {
    tag: "janani_suraksha_yojana_jsy",
    name: "Janani Suraksha Yojana (JSY)",
    age: "Pregnant women",
    income: "BPL",
    gender: "Female",
    targetGroup: "Pregnant Women",
    workerCategory: "NA",
    type: "Institutional Delivery Promotion",
    description: "Janani Suraksha Yojana (JSY) is a Institutional Delivery Promotion scheme.",
  },
  {
    tag: "pradhan_mantri_surakshit_matritva_abhiyan_pmsma",
    name: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
    age: "Pregnant women",
    income: "All",
    gender: "Female",
    targetGroup: "Pregnant Women",
    workerCategory: "NA",
    type: "Antenatal Checkups",
    description: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) is a Antenatal Checkups scheme.",
  },
  {
    tag: "navjaat_shishu_suraksha_karyakram_nssk",
    name: "Navjaat Shishu Suraksha Karyakram (NSSK)",
    age: "Newborns",
    income: "All",
    gender: "NA",
    targetGroup: "Newborns",
    workerCategory: "NA",
    type: "Neonatal Resuscitation",
    description: "Navjaat Shishu Suraksha Karyakram (NSSK) is a Neonatal Resuscitation scheme.",
  },
  {
    tag: "national_family_planning_programme",
    name: "National Family Planning Programme",
    age: "Adults (15–45 yrs)",
    income: "All",
    gender: "Both",
    targetGroup: "Reproductive Age Group",
    workerCategory: "NA",
    type: "Family Planning",
    description: "National Family Planning Programme is a Family Planning scheme.",
  },
  {
    tag: "laqshya",
    name: "LaQshya",
    age: "Mothers & Newborns",
    income: "All",
    gender: "Female",
    targetGroup: "Pregnant Women, Newborns",
    workerCategory: "Health Workers",
    type: "Labour Room Quality Improvement",
    description: "LaQshya is a Labour Room Quality Improvement scheme.",
  },
  {
    tag: "national_iron_plus_initiative",
    name: "National Iron Plus Initiative",
    age: "6 months to 45 yrs",
    income: "All",
    gender: "Both",
    targetGroup: "Children, Adolescents, Women",
    workerCategory: "NA",
    type: "Nutrition Supplementation",
    description: "National Iron Plus Initiative is a Nutrition Supplementation scheme.",
  },
  {
    tag: "maa_mothers_absolute_affection",
    name: "MAA (Mothers' Absolute Affection)",
    age: "Mothers & infants",
    income: "All",
    gender: "Female",
    targetGroup: "Lactating Mothers",
    workerCategory: "NA",
    type: "Breastfeeding Promotion",
    description: "MAA (Mothers' Absolute Affection) is a Breastfeeding Promotion scheme.",
  },
  {
    tag: "national_iodine_deficiency_disorders_control_programme",
    name: "National Iodine Deficiency Disorders Control Programme",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "NA",
    type: "Micronutrient Deficiency Control",
    description: "National Iodine Deficiency Disorders Control Programme is a Micronutrient Deficiency Control scheme.",
  },
  {
    tag: "national_programme_for_prevention_and_control_of_fluorosis",
    name: "National Programme for Prevention and Control of Fluorosis",
    age: "All",
    income: "Affected",
    gender: "Both",
    targetGroup: "Affected Population",
    workerCategory: "NA",
    type: "Waterborne Disease Control",
    description: "National Programme for Prevention and Control of Fluorosis is a Waterborne Disease Control scheme.",
  },
  {
    tag: "integrated_disease_surveillance_programme_idsp",
    name: "Integrated Disease Surveillance Programme (IDSP)",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Health Workers",
    type: "Surveillance",
    description: "Integrated Disease Surveillance Programme (IDSP) is a Surveillance scheme.",
  },
  {
    tag: "revised_national_tuberculosis_control_programme_rntcp",
    name: "Revised National Tuberculosis Control Programme (RNTCP)",
    age: "All",
    income: "Poor",
    gender: "Both",
    targetGroup: "TB Patients",
    workerCategory: "Health Workers",
    type: "Tuberculosis Control",
    description: "Revised National Tuberculosis Control Programme (RNTCP) is a Tuberculosis Control scheme.",
  },
  {
    tag: "national_leprosy_eradication_programme_nlep",
    name: "National Leprosy Eradication Programme (NLEP)",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "Leprosy Patients",
    workerCategory: "Health Workers",
    type: "Leprosy Eradication",
    description: "National Leprosy Eradication Programme (NLEP) is a Leprosy Eradication scheme.",
  },
  {
    tag: "national_vector_borne_disease_control_programme_nvbdcp",
    name: "National Vector Borne Disease Control Programme (NVBDCP)",
    age: "All",
    income: "Endemic",
    gender: "Both",
    targetGroup: "Endemic Areas",
    workerCategory: "Health Workers",
    type: "Disease Control",
    description: "National Vector Borne Disease Control Programme (NVBDCP) is a Disease Control scheme.",
  },
  {
    tag: "national_aids_control_programme_nacp",
    name: "National AIDS Control Programme (NACP)",
    age: "15–49 yrs",
    income: "High-risk",
    gender: "Both",
    targetGroup: "High-Risk Adults",
    workerCategory: "Health Workers",
    type: "HIV/AIDS Control",
    description: "National AIDS Control Programme (NACP) is a HIV/AIDS Control scheme.",
  },
  {
    tag: "pulse_polio_immunization_programme",
    name: "Pulse Polio Immunization Programme",
    age: "0–5 yrs",
    income: "All",
    gender: "Both",
    targetGroup: "Infants",
    workerCategory: "Health Workers",
    type: "Polio Eradication",
    description: "Pulse Polio Immunization Programme is a Polio Eradication scheme.",
  },
  {
    tag: "national_viral_hepatitis_control_programme",
    name: "National Viral Hepatitis Control Programme",
    age: "All",
    income: "High-risk",
    gender: "Both",
    targetGroup: "At-Risk Groups",
    workerCategory: "Health Workers",
    type: "Hepatitis Control",
    description: "National Viral Hepatitis Control Programme is a Hepatitis Control scheme.",
  },
  {
    tag: "national_rabies_control_programme",
    name: "National Rabies Control Programme",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Health Workers",
    type: "Rabies Control",
    description: "National Rabies Control Programme is a Rabies Control scheme.",
  },
  {
    tag: "national_programme_on_amr_containment",
    name: "National Programme on AMR Containment",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Health Workers",
    type: "Antimicrobial Resistance",
    description: "National Programme on AMR Containment is a Antimicrobial Resistance scheme.",
  },
  {
    tag: "national_tobacco_control_programme_ntcp",
    name: "National Tobacco Control Programme (NTCP)",
    age: "Youth & Adults",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "NA",
    type: "Tobacco Use Reduction",
    description: "National Tobacco Control Programme (NTCP) is a Tobacco Use Reduction scheme.",
  },
  {
    tag: "npcdcs",
    name: "NPCDCS",
    age: "30+ yrs",
    income: "Poor",
    gender: "Both",
    targetGroup: "Adults",
    workerCategory: "Health Workers",
    type: "NCD Control",
    description: "NPCDCS is a NCD Control scheme.",
  },
  {
    tag: "national_programme_for_health_care_of_the_elderly_nphce",
    name: "National Programme for Health Care of the Elderly (NPHCE)",
    age: "60+ yrs",
    income: "Poor",
    gender: "Both",
    targetGroup: "Elderly",
    workerCategory: "Health Workers",
    type: "Elderly Care",
    description: "National Programme for Health Care of the Elderly (NPHCE) is a Elderly Care scheme.",
  },
  {
    tag: "npcb_vi",
    name: "NPCB&VI",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Health Workers",
    type: "Vision Health",
    description: "NPCB&VI is a Vision Health scheme.",
  },
  {
    tag: "national_mental_health_programme",
    name: "National Mental Health Programme",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Mental Health Workers",
    type: "Mental Health",
    description: "National Mental Health Programme is a Mental Health scheme.",
  },
  {
    tag: "nppcd",
    name: "NPPCD",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "ENT Specialists",
    type: "Hearing Health",
    description: "NPPCD is a Hearing Health scheme.",
  },
  {
    tag: "national_oral_health_programme",
    name: "National Oral Health Programme",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "Dentists",
    type: "Oral Health",
    description: "National Oral Health Programme is a Oral Health scheme.",
  },
  {
    tag: "nppmbi",
    name: "NPPMBI",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "Burn Victims",
    workerCategory: "Healthcare Workers",
    type: "Burn Injury Management",
    description: "NPPMBI is a Burn Injury Management scheme.",
  },
  {
    tag: "occupational_disease_programme",
    name: "Occupational Disease Programme",
    age: "Working-age",
    income: "Workers",
    gender: "Both",
    targetGroup: "Industrial Workers",
    workerCategory: "Occupational Health Experts",
    type: "Occupational Disease",
    description: "Occupational Disease Programme is a Occupational Disease scheme.",
  },
  {
    tag: "pm_national_dialysis_programme",
    name: "PM National Dialysis Programme",
    age: "Adults",
    income: "BPL",
    gender: "Both",
    targetGroup: "Kidney Patients",
    workerCategory: "Nephrology Units",
    type: "Dialysis",
    description: "PM National Dialysis Programme is a Dialysis scheme.",
  },
  {
    tag: "ayushman_bharat_health_and_wellness_centres",
    name: "Ayushman Bharat - Health and Wellness Centres",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "CHOs/ASHA/ANMs",
    type: "Primary Healthcare",
    description: "Ayushman Bharat - Health and Wellness Centres is a Primary Healthcare scheme.",
  },
  {
    tag: "ayushman_bharat_pm_jay",
    name: "Ayushman Bharat - PM-JAY",
    age: "All",
    income: "Poor",
    gender: "Both",
    targetGroup: "Low-Income Families",
    workerCategory: "NA",
    type: "Insurance & Hospitalization",
    description: "Ayushman Bharat - PM-JAY is a Insurance & Hospitalization scheme.",
  },
  {
    tag: "strengthening_of_tertiary_cancer_care",
    name: "Strengthening of Tertiary Cancer Care",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "Cancer Patients",
    workerCategory: "Oncology Hospitals",
    type: "Cancer Treatment",
    description: "Strengthening of Tertiary Cancer Care is a Cancer Treatment scheme.",
  },
  {
    tag: "rashtriya_arogya_nidhi",
    name: "Rashtriya Arogya Nidhi",
    age: "All",
    income: "BPL",
    gender: "Both",
    targetGroup: "Critically Ill Patients",
    workerCategory: "Government Hospitals",
    type: "Financial Support",
    description: "Rashtriya Arogya Nidhi is a Financial Support scheme.",
  },
  {
    tag: "health_ministers_cancer_patients_fund",
    name: "Health Minister's Cancer Patients Fund",
    age: "All",
    income: "BPL",
    gender: "Both",
    targetGroup: "Cancer Patients",
    workerCategory: "Government Hospitals",
    type: "Financial Support",
    description: "Health Minister's Cancer Patients Fund is a Financial Support scheme.",
  },
  {
    tag: "health_ministers_discretionary_grant",
    name: "Health Minister's Discretionary Grant",
    age: "All",
    income: "Poor",
    gender: "Both",
    targetGroup: "Any Needy Patient",
    workerCategory: "Government Hospitals",
    type: "Discretionary Support",
    description: "Health Minister's Discretionary Grant is a Discretionary Support scheme.",
  },
  {
    tag: "amrit_pharmacies",
    name: "AMRIT Pharmacies",
    age: "All",
    income: "All",
    gender: "Both",
    targetGroup: "General Population",
    workerCategory: "NA",
    type: "Affordable Medicines",
    description: "AMRIT Pharmacies is a Affordable Medicines scheme.",
  },
]

export interface Intent {
  tag: string
  patterns: string[]
  responses: string[]
}

export const intents: Intent[] = [
  {
    tag: "janani_shishu_suraksha_karyakaram_jssk",
    patterns: [
      "What is Janani Shishu Suraksha Karyakaram (JSSK)?",
      "Tell me about Janani Shishu Suraksha Karyakaram (JSSK)",
      "Janani Shishu Suraksha Karyakaram (JSSK) scheme info",
    ],
    responses: [
      "Janani Shishu Suraksha Karyakaram (JSSK) is a Maternity and Neonatal Care scheme. Target Age: Pregnant women, newborns, Income: All (especially poor), Gender: Female, Target Group: Mothers & Newborns, Worker Category: nan.",
    ],
  },
  {
    tag: "rashtriya_kishor_swasthya_karyakram_rksk",
    patterns: [
      "What is Rashtriya Kishor Swasthya Karyakram (RKSK)?",
      "Tell me about Rashtriya Kishor Swasthya Karyakram (RKSK)",
      "Rashtriya Kishor Swasthya Karyakram (RKSK) scheme info",
    ],
    responses: [
      "Rashtriya Kishor Swasthya Karyakram (RKSK) is a Adolescent Health scheme. Target Age: 10–19 yrs, Income: All, Gender: Both, Target Group: Adolescents, Worker Category: nan.",
    ],
  },
  {
    tag: "greeting",
    patterns: ["Hi", "Hello", "Hey", "Greetings", "Good morning", "Good afternoon", "Good evening", "How are you"],
    responses: [
      "Hello! I'm SwasthyaSaathi, your AI health companion. How can I help you today?",
      "Hi there! I'm here to help you find healthcare schemes you may be eligible for. What would you like to know?",
      "Namaste! I'm SwasthyaSaathi. I can help you learn about government healthcare schemes. How may I assist you?",
    ],
  },
  {
    tag: "goodbye",
    patterns: ["Bye", "Goodbye", "See you later", "Take care", "Exit", "Quit", "End"],
    responses: [
      "Goodbye! Take care of your health!",
      "Thank you for using SwasthyaSaathi. Have a healthy day!",
      "Bye! Feel free to return if you have more questions about healthcare schemes.",
    ],
  },
  {
    tag: "thanks",
    patterns: ["Thank you", "Thanks", "Thanks a lot", "I appreciate it", "That's helpful"],
    responses: [
      "You're welcome! I'm happy to help.",
      "Glad I could assist you!",
      "It's my pleasure to help you navigate healthcare schemes.",
    ],
  },
  {
    tag: "about",
    patterns: [
      "What is SwasthyaSaathi",
      "Tell me about this app",
      "Who are you",
      "What can you do",
      "How can you help me",
    ],
    responses: [
      "I am SwasthyaSaathi, an AI-powered health companion designed to help you find and enroll in government healthcare schemes. I can answer questions about various schemes, check your eligibility, and guide you through the application process.",
      "SwasthyaSaathi is your AI health companion that helps rural citizens access healthcare schemes. I can provide information about schemes, check eligibility, and assist with applications in multiple languages.",
      "I'm your AI assistant for healthcare schemes. I can help you discover schemes you're eligible for, explain benefits, and guide you through the application process.",
    ],
  },
  {
    tag: "schemes_for_pregnant",
    patterns: [
      "Schemes for pregnant women",
      "Healthcare for pregnancy",
      "Maternity schemes",
      "Government benefits for pregnant women",
      "Pregnancy related schemes",
    ],
    responses: [
      "There are several schemes for pregnant women including: 1) Janani Shishu Suraksha Karyakaram (JSSK) - for all pregnant women, 2) Janani Suraksha Yojana (JSY) - for BPL pregnant women, 3) Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) - for all pregnant women, and 4) LaQshya - for improving quality of care during delivery. Would you like details about any specific scheme?",
    ],
  },
  {
    tag: "schemes_for_children",
    patterns: [
      "Schemes for children",
      "Child healthcare programs",
      "Government benefits for kids",
      "Health schemes for infants",
      "Child health initiatives",
    ],
    responses: [
      "For children, these schemes are available: 1) Rashtriya Bal Swasthya Karyakram (RBSK) - for children 0-18 years, 2) Universal Immunisation Programme - for children 0-6 years, 3) Mission Indradhanush - for children 0-2 years, 4) Pulse Polio Immunization Programme - for children 0-5 years. Would you like more information about any of these?",
    ],
  },
  {
    tag: "schemes_for_elderly",
    patterns: [
      "Schemes for senior citizens",
      "Healthcare for elderly",
      "Old age health benefits",
      "Government schemes for old people",
      "Elderly care programs",
    ],
    responses: [
      "For elderly citizens, the main scheme is the National Programme for Health Care of the Elderly (NPHCE), which targets people aged 60+ years, especially those from poor backgrounds. It provides specialized geriatric care through district hospitals and community-based services. Would you like more details about this scheme?",
    ],
  },
  {
    tag: "schemes_for_poor",
    patterns: [
      "Schemes for poor families",
      "Healthcare for BPL",
      "Low income health benefits",
      "Government schemes for poor",
      "Health insurance for poor",
    ],
    responses: [
      "For low-income and BPL families, these schemes are available: 1) Ayushman Bharat - PM-JAY - comprehensive health insurance, 2) Rashtriya Arogya Nidhi - financial assistance for major illnesses, 3) Janani Suraksha Yojana (JSY) - for pregnant women, 4) PM National Dialysis Programme - for kidney patients. Would you like more information about any of these?",
    ],
  },
  {
    tag: "application_process",
    patterns: [
      "How to apply",
      "Application process",
      "How to enroll",
      "Registration for schemes",
      "How to get benefits",
      "Documents required",
    ],
    responses: [
      "The application process varies by scheme. Generally, you'll need: 1) Identity proof (Aadhaar/Voter ID), 2) Income certificate for BPL schemes, 3) Age proof for age-specific schemes, 4) Residence proof. Applications can be submitted at local health centers, hospitals, or online through scheme portals. Would you like help with a specific scheme's application process?",
    ],
  },
  {
    tag: "eligibility_check",
    patterns: [
      "Am I eligible",
      "Eligibility criteria",
      "Who can apply",
      "Check if I qualify",
      "Eligibility requirements",
    ],
    responses: [
      "Eligibility depends on factors like age, income, gender, and location. To check your eligibility, I need to know: 1) Your age group, 2) Income category (BPL/APL), 3) Gender, 4) State of residence, 5) Any specific health conditions. Would you like to provide these details so I can suggest suitable schemes?",
    ],
  },
]

export function findSchemesByFilters(filters: {
  age?: string
  income?: string
  gender?: string
  targetGroup?: string
  workerCategory?: string
  type?: string
}): HealthScheme[] {
  return healthSchemes.filter((scheme) => {
    let match = true

    if (filters.age && !scheme.age.toLowerCase().includes(filters.age.toLowerCase())) {
      match = false
    }

    if (filters.income && !scheme.income.toLowerCase().includes(filters.income.toLowerCase())) {
      match = false
    }

    if (
      filters.gender &&
      scheme.gender !== "Both" &&
      !scheme.gender.toLowerCase().includes(filters.gender.toLowerCase())
    ) {
      match = false
    }

    if (filters.targetGroup && !scheme.targetGroup.toLowerCase().includes(filters.targetGroup.toLowerCase())) {
      match = false
    }

    if (
      filters.workerCategory &&
      scheme.workerCategory !== "NA" &&
      !scheme.workerCategory.toLowerCase().includes(filters.workerCategory.toLowerCase())
    ) {
      match = false
    }

    if (filters.type && !scheme.type.toLowerCase().includes(filters.type.toLowerCase())) {
      match = false
    }

    return match
  })
}

export function findSchemeByTag(tag: string): HealthScheme | undefined {
  return healthSchemes.find((scheme) => scheme.tag === tag)
}

export function findIntentByPattern(input: string): Intent | undefined {
  // Convert input to lowercase for case-insensitive matching
  const lowerInput = input.toLowerCase()

  // First, check for exact matches in patterns
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (pattern.toLowerCase() === lowerInput) {
        return intent
      }
    }
  }

  // If no exact match, look for partial matches
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (lowerInput.includes(pattern.toLowerCase())) {
        return intent
      }
    }
  }

  // Check for keyword matches
  const keywords = lowerInput.split(/\s+/)
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const patternWords = pattern.toLowerCase().split(/\s+/)
      const matchCount = keywords.filter((word) =>
        patternWords.some((patternWord) => patternWord.includes(word) || word.includes(patternWord)),
      ).length

      // If more than 50% of keywords match, consider it a match
      if (matchCount > 0 && matchCount / keywords.length > 0.5) {
        return intent
      }
    }
  }

  return undefined
}

export function extractFilters(input: string): {
  age?: string
  income?: string
  gender?: string
  targetGroup?: string
  workerCategory?: string
  type?: string
} {
  const filters: any = {}

  // Age patterns
  if (input.match(/\b(pregnant|newborn|infant|child|adolescent|adult|elderly|senior)\b/i)) {
    const ageMatch = input.match(/\b(pregnant|newborn|infant|child|adolescent|adult|elderly|senior)\b/i)
    if (ageMatch) filters.age = ageMatch[0]
  }

  // Income patterns
  if (input.match(/\b(bpl|poor|low income|middle income|high income|all income)\b/i)) {
    const incomeMatch = input.match(/\b(bpl|poor|low income|middle income|high income|all income)\b/i)
    if (incomeMatch) filters.income = incomeMatch[0]
  }

  // Gender patterns
  if (input.match(/\b(male|female|men|women|boy|girl)\b/i)) {
    const genderMatch = input.match(/\b(male|female|men|women|boy|girl)\b/i)
    if (genderMatch) {
      const gender = genderMatch[0].toLowerCase()
      if (gender === "men" || gender === "boy" || gender === "male") {
        filters.gender = "Male"
      } else {
        filters.gender = "Female"
      }
    }
  }

  // Target group patterns
  if (input.match(/\b(mother|newborn|infant|child|adolescent|adult|elderly|patient|worker|family)\b/i)) {
    const targetMatch = input.match(/\b(mother|newborn|infant|child|adolescent|adult|elderly|patient|worker|family)\b/i)
    if (targetMatch) filters.targetGroup = targetMatch[0]
  }

  // Worker category patterns
  if (input.match(/\b(health worker|asha|anm|doctor|nurse|specialist)\b/i)) {
    const workerMatch = input.match(/\b(health worker|asha|anm|doctor|nurse|specialist)\b/i)
    if (workerMatch) filters.workerCategory = workerMatch[0]
  }

  // Scheme type patterns
  if (input.match(/\b(insurance|maternity|immunization|nutrition|disease control|treatment|support|care)\b/i)) {
    const typeMatch = input.match(
      /\b(insurance|maternity|immunization|nutrition|disease control|treatment|support|care)\b/i,
    )
    if (typeMatch) filters.type = typeMatch[0]
  }

  return filters
}

export interface Scheme {
  id: number
  title: string
  description: string
  eligibility: string[]
  category: string
  type: string
  link: string
  state?: string
}

export const schemes: Scheme[] = [
  {
    id: 1,
    title: "Ayushman Bharat - PMJAY",
    description:
      "Provides health insurance coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
    eligibility: ["Low Income", "All States"],
    category: "central",
    type: "Insurance & Hospitalization",
    link: "/schemes/ayushman-bharat",
  },
  {
    id: 2,
    title: "Pradhan Mantri Suraksha Bima Yojana",
    description: "Accident insurance scheme offering coverage for death or disability due to accidents.",
    eligibility: ["All Citizens", "Age 18-70"],
    category: "central",
    type: "Accident Insurance",
    link: "/schemes/pmsby",
  },
  {
    id: 3,
    title: "Rashtriya Swasthya Bima Yojana",
    description: "Health insurance scheme for BPL families providing coverage for hospitalization expenses.",
    eligibility: ["BPL Families", "All States"],
    category: "central",
    type: "Insurance & Hospitalization",
    link: "/schemes/rsby",
  },
  {
    id: 4,
    title: "Chief Minister's Comprehensive Health Insurance",
    description: "State-specific health insurance schemes providing coverage for various medical procedures.",
    eligibility: ["State Residents", "Income Based"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "/schemes/cm-health-insurance",
    state: "Tamil Nadu",
  },
  {
    id: 5,
    title: "Aarogyasri Health Care Trust",
    description: "Health insurance scheme for BPL families in Telangana and Andhra Pradesh.",
    eligibility: ["BPL Families", "Telangana", "Andhra Pradesh"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "/schemes/aarogyasri",
    state: "Telangana, Andhra Pradesh",
  },
  {
    id: 6,
    title: "Karunya Health Scheme",
    description: "Financial assistance for treatment of specific diseases in Kerala.",
    eligibility: ["Kerala Residents", "Specific Diseases"],
    category: "state",
    type: "Financial Support",
    link: "/schemes/karunya",
    state: "Kerala",
  },
  {
    id: 7,
    title: "Janani Shishu Suraksha Karyakaram (JSSK)",
    description: "Covers pregnancy and newborn care with free delivery, drugs, diagnostics, and transport.",
    eligibility: ["Pregnant Women", "Newborns", "All (especially poor)"],
    category: "central",
    type: "Maternity and Neonatal Care",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=842&lid=309",
  },
  {
    id: 8,
    title: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
    description:
      "Focused on adolescent health with interventions in nutrition, mental health, and reproductive health.",
    eligibility: ["10–19 yrs", "All"],
    category: "central",
    type: "Adolescent Health",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1143&lid=365",
  },
  {
    id: 9,
    title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    description: "Early detection and management of health conditions in children 0-18 years.",
    eligibility: ["0–18 yrs", "All"],
    category: "central",
    type: "Child Health Screening",
    link: "https://rbsk.gov.in/",
  },
  {
    id: 10,
    title: "Universal Immunisation Programme",
    description: "Provides vaccines to all children to protect against life-threatening diseases.",
    eligibility: ["0–6 yrs", "All"],
    category: "central",
    type: "Immunization",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=824&lid=220",
  },
  {
    id: 11,
    title: "Mission Indradhanush",
    description: "Targeted immunization drive for children under 2 years and pregnant women.",
    eligibility: ["0–2 yrs", "Pregnant Women", "Underserved"],
    category: "central",
    type: "Immunization",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=932&lid=391",
  },
  {
    id: 12,
    title: "Janani Suraksha Yojana (JSY)",
    description: "Promotes institutional delivery among poor pregnant women by providing financial assistance.",
    eligibility: ["Pregnant Women", "BPL"],
    category: "central",
    type: "Institutional Delivery Promotion",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
  },
  {
    id: 13,
    title: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
    description: "Ensures comprehensive and quality antenatal checkups on the 9th of every month.",
    eligibility: ["Pregnant Women", "All"],
    category: "central",
    type: "Antenatal Checkups",
    link: "https://pmsma.nhp.gov.in/",
  },
  {
    id: 14,
    title: "Navjaat Shishu Suraksha Karyakram (NSSK)",
    description: "Training of healthcare providers in basic newborn care and resuscitation.",
    eligibility: ["Newborns", "All"],
    category: "central",
    type: "Neonatal Resuscitation",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1034&lid=380",
  },
  {
    id: 15,
    title: "National Family Planning Programme",
    description: "Promotes adoption of contraceptive methods to control population growth.",
    eligibility: ["Adults (15–45 yrs)", "All"],
    category: "central",
    type: "Family Planning",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1091&lid=365",
  },
  {
    id: 16,
    title: "LaQshya",
    description: "Improves quality of care in labor rooms and maternity operation theatres.",
    eligibility: ["Pregnant Women", "Newborns", "All"],
    category: "central",
    type: "Labour Room Quality Improvement",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1048&lid=402",
  },
  {
    id: 17,
    title: "National Iron Plus Initiative (NIPI)",
    description: "Addresses iron deficiency anemia across life stages via IFA supplementation.",
    eligibility: ["6 months to 45 yrs", "All"],
    category: "central",
    type: "Nutrition Supplementation",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1031&lid=383",
  },
  {
    id: 18,
    title: "MAA (Mothers' Absolute Affection)",
    description: "Promotes breastfeeding practices through counseling and support.",
    eligibility: ["Lactating Mothers", "All"],
    category: "central",
    type: "Breastfeeding Promotion",
    link: "https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Maa/Operational_Guidelines_for_MAA_Programme.pdf",
  },
  {
    id: 19,
    title: "National Iodine Deficiency Disorders Control Programme",
    description: "Reduces iodine deficiency disorders via iodized salt usage and awareness.",
    eligibility: ["All"],
    category: "central",
    type: "Micronutrient Deficiency Control",
    link: "https://main.mohfw.gov.in/Organisation/Departments-of-Health-and-Family-Welfare/national-iodine-deficiency-disorders-control-programme",
  },
  {
    id: 20,
    title: "National Programme for Prevention and Control of Fluorosis",
    description: "Prevents and controls fluorosis through safe drinking water and awareness.",
    eligibility: ["Affected Populations"],
    category: "central",
    type: "Waterborne Disease Control",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1062&lid=412",
  },
  {
    id: 21,
    title: "Mukhyamantri Amrutum (MA) Yojana",
    description: "Provides tertiary care treatment for BPL families in Gujarat.",
    eligibility: ["BPL Families", "Gujarat Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.magujarat.com/",
    state: "Gujarat",
  },
  {
    id: 22,
    title: "Biju Swasthya Kalyan Yojana (BSKY)",
    description: "Offers free healthcare services up to ₹5 lakhs per family in Odisha.",
    eligibility: ["Odisha Residents", "Low-Income"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://bsky.odisha.gov.in/",
    state: "Odisha",
  },
  {
    id: 23,
    title: "Dr. YSR Aarogyasri",
    description: "Health coverage up to ₹5 lakhs per family for poor in Andhra Pradesh.",
    eligibility: ["Andhra Pradesh Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.ysraarogyasri.ap.gov.in/",
    state: "Andhra Pradesh",
  },
  {
    id: 24,
    title: "Mahatma Jyotiba Phule Jan Arogya Yojana",
    description: "Covers medical treatments for Below Poverty Line families in Maharashtra.",
    eligibility: ["BPL Families", "Maharashtra Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.jeevandayee.gov.in/",
    state: "Maharashtra",
  },
  {
    id: 25,
    title: "Swasthya Sathi",
    description: "Provides basic health coverage to all residents of West Bengal.",
    eligibility: ["West Bengal Residents", "All Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://swasthyasathi.gov.in/",
    state: "West Bengal",
  },
  {
    id: 26,
    title: "Mukhya Mantri Swasthya Bima Yojana",
    description: "Provides cashless health insurance to poor and middle-income families in Jharkhand.",
    eligibility: ["Jharkhand Residents", "Low & Middle-Income Groups"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://jharkhand.gov.in/",
    state: "Jharkhand",
  },
  {
    id: 27,
    title: "Mizoram State Health Care Scheme",
    description: "Offers financial health assistance to residents of Mizoram.",
    eligibility: ["Mizoram Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.mizoram.gov.in/page/mizoram-state-health-care-scheme",
    state: "Mizoram",
  },
  {
    id: 28,
    title: "Sikkim Free Health Care Scheme",
    description: "Provides free medical treatment and referral services to Sikkim residents.",
    eligibility: ["Sikkim Residents"],
    category: "state",
    type: "Free Medical Services",
    link: "https://sikkim.gov.in/",
    state: "Sikkim",
  },
  {
    id: 29,
    title: "CMCHIS - Chief Minister's Comprehensive Health Insurance Scheme",
    description: "Health insurance coverage for low-income families in Tamil Nadu.",
    eligibility: ["Tamil Nadu Residents", "Annual Income < ₹72,000"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.cmchistn.com/",
    state: "Tamil Nadu",
  },
  {
    id: 30,
    title: "Deen Dayal Swasthya Seva Yojana (DDSSY)",
    description: "Health insurance for residents of Goa not covered under Ayushman Bharat.",
    eligibility: ["Goa Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://goaonline.gov.in/",
    state: "Goa",
  },
  {
    id: 31,
    title: "Mukhya Mantri Chikitsa Sahayata Kosh",
    description: "Provides financial aid for critical illness treatment in Madhya Pradesh.",
    eligibility: ["Madhya Pradesh Residents", "Below Poverty Line", "Critical Illness"],
    category: "state",
    type: "Financial Support",
    link: "https://mp.gov.in/",
    state: "Madhya Pradesh"
  },
  {
    id: 32,
    title: "Assam Arogya Nidhi",
    description: "Financial support for expensive treatment not covered under other schemes.",
    eligibility: ["Assam Residents", "Low-Income", "Critical Illness"],
    category: "state",
    type: "Financial Support",
    link: "https://nhm.assam.gov.in/",
    state: "Assam"
  },
  {
    id: 33,
    title: "Meghalaya Health Insurance Scheme (MHIS)",
    description: "Universal health coverage for all residents of Meghalaya.",
    eligibility: ["Meghalaya Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://mhis.org.in/",
    state: "Meghalaya"
  },
  {
    id: 34,
    title: "Chief Minister's Free Diagnostic Scheme",
    description: "Free diagnostics including CT, MRI, and lab tests for Telangana residents.",
    eligibility: ["Telangana Residents", "All"],
    category: "state",
    type: "Diagnostic Services",
    link: "https://chfw.telangana.gov.in/",
    state: "Telangana"
  },
  {
    id: 35,
    title: "Mukhyamantri Nidan Yojana",
    description: "Free diagnostic services for all in Bihar through public health facilities.",
    eligibility: ["Bihar Residents", "All"],
    category: "state",
    type: "Diagnostic Services",
    link: "https://state.bihar.gov.in/health/",
    state: "Bihar"
  },
  {
    id: 36,
    title: "Chief Minister’s Relief Fund – Tripura",
    description: "Provides financial support for major surgeries and treatments.",
    eligibility: ["Tripura Residents", "Low-Income"],
    category: "state",
    type: "Financial Support",
    link: "https://cmrf.tripura.gov.in/",
    state: "Tripura"
  },
  {
    id: 37,
    title: "Ayushman CAPF",
    description: "Extends Ayushman Bharat benefits to Central Armed Police Forces personnel.",
    eligibility: ["CAPF Personnel", "Families"],
    category: "central",
    type: "Insurance & Hospitalization",
    link: "https://pmjay.gov.in/",
    state: "All States"
  },
  {
    id: 38,
    title: "ESIC – Employee State Insurance Scheme",
    description: "Healthcare for employees earning less than ₹21,000/month in organized sector.",
    eligibility: ["Salaried Employees", "Income-based"],
    category: "central",
    type: "Insurance & Medical Care",
    link: "https://www.esic.nic.in/",
    state: "All States"
  },
  {
    id: 39,
    title: "Central Government Health Scheme (CGHS)",
    description: "Comprehensive health care for central govt employees, pensioners and dependents.",
    eligibility: ["Central Government Employees", "Pensioners"],
    category: "central",
    type: "Healthcare Access",
    link: "https://cghs.gov.in/",
    state: "Major Cities"
  },
  {
    id: 40,
    title: "National Programme for Health Care of the Elderly (NPHCE)",
    description: "Provides dedicated elderly healthcare services at primary and tertiary levels.",
    eligibility: ["Citizens 60+ years", "All States"],
    category: "central",
    type: "Elderly Care",
    link: "https://main.mohfw.gov.in/",
    state: "All States"
  },
  {
    id: 41,
    title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    description: "Maternity benefit scheme providing ₹5,000 to pregnant and lactating women.",
    eligibility: ["Pregnant Women", "Lactating Women", "All States"],
    category: "central",
    type: "Maternity Support",
    link: "https://wcd.nic.in/",
    state: "All States"
  },
  {
    id: 42,
    title: "Bihar Health Insurance Scheme",
    description: "Insurance coverage for BPL families in Bihar, including treatment for critical illnesses.",
    eligibility: ["BPL Families", "Bihar Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://state.bihar.gov.in/health/",
    state: "Bihar"
  },
  {
    id: 43,
    title: "Haryana State Health Insurance Scheme",
    description: "Free health insurance for families in Haryana under the State Health Scheme.",
    eligibility: ["Haryana Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.haryanahealth.nic.in/",
    state: "Haryana"
  },
  {
    id: 44,
    title: "Gujarat State Health Scheme",
    description: "Provides cashless medical treatment for poor families in Gujarat.",
    eligibility: ["Gujarat Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.gujarat.gov.in/",
    state: "Gujarat"
  },
  {
    id: 45,
    title: "Delhi Arogya Kosh",
    description: "Provides financial aid for the treatment of major ailments in Delhi.",
    eligibility: ["Delhi Residents", "Low-Income"],
    category: "state",
    type: "Financial Support",
    link: "https://health.delhigovt.nic.in/",
    state: "Delhi"
  },
  {
    id: 46,
    title: "Maharashtra Jeevan Arogya Yojana",
    description: "Comprehensive health insurance scheme for the economically weaker sections of Maharashtra.",
    eligibility: ["Low-Income", "Maharashtra Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.mahahealth.gov.in/",
    state: "Maharashtra"
  },
  {
    id: 47,
    title: "Rajasthan Chief Minister's Chiranjeevi Yojana",
    description: "Free health insurance coverage for families in Rajasthan under this scheme.",
    eligibility: ["Rajasthan Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.rajswasthya.nic.in/",
    state: "Rajasthan"
  },
  {
    id: 48,
    title: "Madhya Pradesh Mukhyamantri Swasthya Bima Yojana",
    description: "Provides health insurance for low-income families in Madhya Pradesh.",
    eligibility: ["Madhya Pradesh Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.mpswasthya.nic.in/",
    state: "Madhya Pradesh"
  },
  {
    id: 49,
    title: "National Leprosy Eradication Programme (NLEP)",
    description: "Program aimed at the eradication of leprosy through early diagnosis and treatment.",
    eligibility: ["All", "Leprosy Affected"],
    category: "central",
    type: "Disease-Specific",
    link: "https://nlep.nic.in/",
    state: "All States"
  },
  {
    id: 50,
    title: "National Tuberculosis Elimination Program (NTEP)",
    description: "Aimed at eliminating tuberculosis through treatment, awareness, and prevention programs.",
    eligibility: ["All", "TB Patients"],
    category: "central",
    type: "Disease-Specific",
    link: "https://tbcindia.gov.in/",
    state: "All States"
  },
  {
    id: 51,
    title: "National Health Mission (NHM)",
    description: "Aims to provide accessible, affordable, and quality healthcare services to rural populations.",
    eligibility: ["Rural Population", "All States"],
    category: "central",
    type: "Healthcare Access",
    link: "https://nhm.gov.in/",
    state: "All States"
  },
  {
    id: 52,
    title: "Swasthya Sathi Scheme",
    description: "Health insurance scheme for families in West Bengal providing cashless treatment.",
    eligibility: ["West Bengal Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://wbhealth.gov.in/swasthya_sathi",
    state: "West Bengal"
  },
  {
    id: 53,
    title: "Uttarakhand State Health Scheme",
    description: "Free medical treatment for families living below the poverty line in Uttarakhand.",
    eligibility: ["BPL Families", "Uttarakhand Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.uk.gov.in/",
    state: "Uttarakhand"
  },
  {
    id: 54,
    title: "Odisha Health Assurance Scheme",
    description: "Cashless healthcare for economically weaker sections of Odisha.",
    eligibility: ["Low-Income Families", "Odisha Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.odisha.gov.in/",
    state: "Odisha"
  },
  {
    id: 55,
    title: "Karnataka Health Scheme",
    description: "Health insurance for families in Karnataka to access free medical treatment.",
    eligibility: ["Karnataka Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.kar.nic.in/",
    state: "Karnataka"
  },
  {
    id: 56,
    title: "Rajasthan Mukhyamantri Nishulk Bima Yojana",
    description: "Provides free health insurance to residents of Rajasthan for treatment of serious illnesses.",
    eligibility: ["Rajasthan Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.rajswasthya.nic.in/",
    state: "Rajasthan"
  },
  {
    id: 57,
    title: "Andhra Pradesh Arogya Raksha Scheme",
    description: "Financial support for families to cover medical expenses in Andhra Pradesh.",
    eligibility: ["Andhra Pradesh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.ap.gov.in/",
    state: "Andhra Pradesh"
  },
  {
    id: 58,
    title: "Chhattisgarh Mukhyamantri Swasthya Bima Yojana",
    description: "Health insurance scheme covering hospitalization and surgeries in Chhattisgarh.",
    eligibility: ["Chhattisgarh Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://cghealth.nic.in/",
    state: "Chhattisgarh"
  },
  {
    id: 59,
    title: "Goa Universal Health Scheme",
    description: "Provides medical treatment and financial assistance to families in Goa.",
    eligibility: ["Goa Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.goa.gov.in/",
    state: "Goa"
  },
  {
    id: 60,
    title: "Madhya Pradesh Maternity Benefit Scheme",
    description: "Offers financial assistance to women in Madhya Pradesh during pregnancy and childbirth.",
    eligibility: ["Pregnant Women", "Madhya Pradesh Residents"],
    category: "state",
    type: "Maternity Support",
    link: "https://www.mpswasthya.nic.in/",
    state: "Madhya Pradesh"
  },
  {
    id: 61,
    title: "Punjab Health Insurance Scheme",
    description: "Provides financial assistance for medical treatment in Punjab, covering various diseases and hospitalization.",
    eligibility: ["Punjab Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.punjab.gov.in/",
    state: "Punjab"
  },
  {
    id: 62,
    title: "Bihar State Health Scheme",
    description: "Free healthcare services to residents of Bihar, including hospitalization and surgery.",
    eligibility: ["Bihar Residents", "BPL Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.bih.nic.in/",
    state: "Bihar"
  },
  {
    id: 63,
    title: "Maharashtra Jeevan Arogya Yojana",
    description: "Insurance scheme for families in Maharashtra, providing coverage for medical expenses.",
    eligibility: ["Maharashtra Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://jeevanaroagyama.in/",
    state: "Maharashtra"
  },
  {
    id: 64,
    title: "Himachal Pradesh Health Scheme",
    description: "Provides cashless health insurance for residents of Himachal Pradesh for hospitalization and surgeries.",
    eligibility: ["Himachal Pradesh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://hpsbos.hp.gov.in/",
    state: "Himachal Pradesh"
  },
  {
    id: 65,
    title: "Jammu & Kashmir Health Insurance Scheme",
    description: "Free health insurance scheme covering medical treatments for J&K residents.",
    eligibility: ["Jammu & Kashmir Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.jkhealth.org/",
    state: "Jammu & Kashmir"
  },
  {
    id: 66,
    title: "Uttar Pradesh Swasthya Bima Yojana",
    description: "Health insurance for economically weaker sections in Uttar Pradesh.",
    eligibility: ["Uttar Pradesh Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.up.gov.in/",
    state: "Uttar Pradesh"
  },
  {
    id: 67,
    title: "Assam Arogya Nidhi",
    description: "Financial aid for medical treatment of serious illnesses for residents of Assam.",
    eligibility: ["Assam Residents"],
    category: "state",
    type: "Financial Support",
    link: "https://health.assam.gov.in/",
    state: "Assam"
  },
  {
    id: 68,
    title: "Tamil Nadu Maternity Assistance Scheme",
    description: "Provides financial aid to pregnant women for medical expenses in Tamil Nadu.",
    eligibility: ["Pregnant Women", "Tamil Nadu Residents"],
    category: "state",
    type: "Maternity Support",
    link: "https://health.tn.gov.in/",
    state: "Tamil Nadu"
  },
  {
    id: 69,
    title: "Chandigarh Health Assistance Scheme",
    description: "Provides health insurance for residents of Chandigarh, covering hospitalization expenses.",
    eligibility: ["Chandigarh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.chd.gov.in/",
    state: "Chandigarh"
  },
  {
    id: 70,
    title: "Nagaland Health Insurance Scheme",
    description: "Health insurance scheme for residents of Nagaland, ensuring financial coverage for medical expenses.",
    eligibility: ["Nagaland Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.nagaland.gov.in/",
    state: "Nagaland"
  },
  {
    id: 71,
    title: "Karnataka Health Insurance Scheme",
    description: "A scheme to provide financial assistance for medical treatment to the residents of Karnataka, especially those from economically weaker sections.",
    eligibility: ["Karnataka Residents", "Low-Income Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.kar.nic.in/",
    state: "Karnataka"
  },
  {
    id: 72,
    title: "Madhya Pradesh Health Scheme",
    description: "State-level health scheme offering financial support for hospitalization, surgeries, and critical care to the residents of Madhya Pradesh.",
    eligibility: ["Madhya Pradesh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://mphealth.org/",
    state: "Madhya Pradesh"
  },
  {
    id: 73,
    title: "Odisha Health Assurance Scheme",
    description: "Provides free healthcare services for hospitalization and surgeries to low-income families in Odisha.",
    eligibility: ["Odisha Residents", "BPL Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.odisha.gov.in/",
    state: "Odisha"
  },
  {
    id: 74,
    title: "Chhattisgarh Health Insurance Scheme",
    description: "Health insurance program covering the hospitalization and treatment of residents of Chhattisgarh.",
    eligibility: ["Chhattisgarh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.cg.gov.in/",
    state: "Chhattisgarh"
  },
  {
    id: 75,
    title: "Rajasthan Swasthya Bima Yojana",
    description: "Provides health insurance for families in Rajasthan, offering coverage for medical expenses and treatments.",
    eligibility: ["Rajasthan Residents", "BPL Families"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://www.swasthya.rajasthan.gov.in/",
    state: "Rajasthan"
  },
  {
    id: 76,
    title: "Gujarat Health Scheme",
    description: "Health insurance scheme for Gujarat residents that covers hospitalization expenses and critical illnesses.",
    eligibility: ["Gujarat Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.gujarat.gov.in/",
    state: "Gujarat"
  },
  {
    id: 77,
    title: "Goa Health Scheme",
    description: "Offers health insurance for residents of Goa, covering medical treatment and hospitalization.",
    eligibility: ["Goa Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.goa.gov.in/",
    state: "Goa"
  },
  {
    id: 78,
    title: "Uttarakhand Health Scheme",
    description: "Provides free or subsidized healthcare for Uttarakhand residents, focusing on medical treatments and surgeries.",
    eligibility: ["Uttarakhand Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.uk.gov.in/",
    state: "Uttarakhand"
  },
  {
    id: 79,
    title: "Arunachal Pradesh Health Scheme",
    description: "A healthcare program for residents of Arunachal Pradesh offering insurance coverage for hospitalization and medical treatment.",
    eligibility: ["Arunachal Pradesh Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.arunachal.gov.in/",
    state: "Arunachal Pradesh"
  },
  {
    id: 80,
    title: "Tripura Health Scheme",
    description: "State-specific health insurance scheme providing coverage for medical treatments for the residents of Tripura.",
    eligibility: ["Tripura Residents"],
    category: "state",
    type: "Insurance & Hospitalization",
    link: "https://health.tripura.gov.in/",
    state: "Tripura"
  },
  {
    id: 81,
    title: "National Iron Plus Initiative (NIPI)",
    description: "Addresses iron deficiency anemia across life stages via IFA supplementation.",
    eligibility: ["6 months to 45 yrs", "All"],
    category: "central",
    type: "Nutrition Supplementation",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1031&lid=383"
 },
 {
  id: 82,
  title: "MAA (Mothers’ Absolute Affection)",
  description: "Promotes breastfeeding practices through counseling and support.",
  eligibility: ["Lactating Mothers", "All"],
  category: "central",
  type: "Breastfeeding Promotion",
  link: "https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Maa/Operational_Guidelines_for_MAA_Programme.pdf"
},
         
]

// Helper functions to filter schemes
export function filterSchemes({
  state,
  category,
  type,
  beneficiary,
  searchQuery,
}: {
  state?: string
  category?: string
  type?: string
  beneficiary?: string
  searchQuery?: string
}): Scheme[] {
  return schemes.filter((scheme) => {
    // Filter by state
    if (state && state !== "All States") {
      if (!scheme.state && scheme.category !== "central") return false
      if (scheme.state && !scheme.state.toLowerCase().includes(state.toLowerCase())) return false
    }

    // Filter by category
    if (category && category !== "all") {
      if (scheme.category !== category) return false
    }

    // Filter by type
    if (type && type !== "All Types") {
      if (scheme.type !== type) return false
    }

    // Filter by beneficiary
    if (beneficiary && beneficiary !== "All") {
      const beneficiaryLower = beneficiary.toLowerCase()
      const hasMatch = scheme.eligibility.some((eligibility) => eligibility.toLowerCase().includes(beneficiaryLower))
      if (!hasMatch) return false
    }

    // Filter by search query
    if (searchQuery && searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      const titleMatch = scheme.title.toLowerCase().includes(query)
      const descriptionMatch = scheme.description.toLowerCase().includes(query)
      const eligibilityMatch = scheme.eligibility.some((e) => e.toLowerCase().includes(query))
      const typeMatch = scheme.type.toLowerCase().includes(query)

      if (!(titleMatch || descriptionMatch || eligibilityMatch || typeMatch)) {
        return false
      }
    }

    return true
  })
}

// Get unique states from schemes
export function getUniqueStates(): string[] {
  const states = new Set<string>()

  // Add "All States" as the first option
  states.add("All States")

  // Add central as a pseudo-state
  states.add("Central Government")

  // Add all states from the schemes
  schemes.forEach((scheme) => {
    if (scheme.state) {
      const stateList = scheme.state.split(",").map((s) => s.trim())
      stateList.forEach((state) => states.add(state))
    }
  })

  return Array.from(states)
}

// Get unique scheme types
export function getUniqueTypes(): string[] {
  const types = new Set<string>()

  // Add "All Types" as the first option
  types.add("All Types")

  // Add all types from the schemes
  schemes.forEach((scheme) => {
    if (scheme.type) {
      types.add(scheme.type)
    }
  })

  return Array.from(types)
}

// Get unique beneficiary categories
export function getUniqueBeneficiaries(): string[] {
  const beneficiaries = new Set<string>()

  // Add "All" as the first option
  beneficiaries.add("All")

  // Add common beneficiary categories
  beneficiaries.add("Pregnant Women")
  beneficiaries.add("Children")
  beneficiaries.add("Elderly")
  beneficiaries.add("BPL Families")
  beneficiaries.add("Women")
  beneficiaries.add("Newborns")
  beneficiaries.add("Adults")

  return Array.from(beneficiaries)
}



// export interface HealthScheme {
//   tag: string
//   name: string
//   age: string
//   income: string
//   gender: string
//   targetGroup: string
//   workerCategory: string
//   type: string
//   description: string
// }

// export const healthSchemes: HealthScheme[] = [
//   {
//     tag: "janani_shishu_suraksha_karyakaram_jssk",
//     name: "Janani Shishu Suraksha Karyakaram (JSSK)",
//     age: "Pregnant women, newborns",
//     income: "All (especially poor)",
//     gender: "Female",
//     targetGroup: "Mothers & Newborns",
//     workerCategory: "NA",
//     type: "Maternity and Neonatal Care",
//     description: "Janani Shishu Suraksha Karyakaram (JSSK) is a Maternity and Neonatal Care scheme.",
//   },
//   {
//     tag: "rashtriya_kishor_swasthya_karyakram_rksk",
//     name: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
//     age: "10–19 yrs",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Adolescents",
//     workerCategory: "NA",
//     type: "Adolescent Health",
//     description: "Rashtriya Kishor Swasthya Karyakram (RKSK) is a Adolescent Health scheme.",
//   },
//   {
//     tag: "rashtriya_bal_swasthya_karyakram_rbsk",
//     name: "Rashtriya Bal Swasthya Karyakram (RBSK)",
//     age: "0–18 yrs",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Children",
//     workerCategory: "NA",
//     type: "Child Health Screening",
//     description: "Rashtriya Bal Swasthya Karyakram (RBSK) is a Child Health Screening scheme.",
//   },
//   {
//     tag: "universal_immunisation_programme",
//     name: "Universal Immunisation Programme",
//     age: "0–6 yrs",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Infants",
//     workerCategory: "NA",
//     type: "Immunization",
//     description: "Universal Immunisation Programme is a Immunization scheme.",
//   },
//   {
//     tag: "mission_indradhanush",
//     name: "Mission Indradhanush",
//     age: "0–2 yrs, pregnant women",
//     income: "Underserved",
//     gender: "Both",
//     targetGroup: "Infants & Pregnant Women",
//     workerCategory: "NA",
//     type: "Immunization",
//     description: "Mission Indradhanush is a Immunization scheme.",
//   },
//   {
//     tag: "janani_suraksha_yojana_jsy",
//     name: "Janani Suraksha Yojana (JSY)",
//     age: "Pregnant women",
//     income: "BPL",
//     gender: "Female",
//     targetGroup: "Pregnant Women",
//     workerCategory: "NA",
//     type: "Institutional Delivery Promotion",
//     description: "Janani Suraksha Yojana (JSY) is a Institutional Delivery Promotion scheme.",
//   },
//   {
//     tag: "pradhan_mantri_surakshit_matritva_abhiyan_pmsma",
//     name: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
//     age: "Pregnant women",
//     income: "All",
//     gender: "Female",
//     targetGroup: "Pregnant Women",
//     workerCategory: "NA",
//     type: "Antenatal Checkups",
//     description: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) is a Antenatal Checkups scheme.",
//   },
//   {
//     tag: "navjaat_shishu_suraksha_karyakram_nssk",
//     name: "Navjaat Shishu Suraksha Karyakram (NSSK)",
//     age: "Newborns",
//     income: "All",
//     gender: "NA",
//     targetGroup: "Newborns",
//     workerCategory: "NA",
//     type: "Neonatal Resuscitation",
//     description: "Navjaat Shishu Suraksha Karyakram (NSSK) is a Neonatal Resuscitation scheme.",
//   },
//   {
//     tag: "national_family_planning_programme",
//     name: "National Family Planning Programme",
//     age: "Adults (15–45 yrs)",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Reproductive Age Group",
//     workerCategory: "NA",
//     type: "Family Planning",
//     description: "National Family Planning Programme is a Family Planning scheme.",
//   },
//   {
//     tag: "laqshya",
//     name: "LaQshya",
//     age: "Mothers & Newborns",
//     income: "All",
//     gender: "Female",
//     targetGroup: "Pregnant Women, Newborns",
//     workerCategory: "Health Workers",
//     type: "Labour Room Quality Improvement",
//     description: "LaQshya is a Labour Room Quality Improvement scheme.",
//   },
//   {
//     tag: "national_iron_plus_initiative",
//     name: "National Iron Plus Initiative",
//     age: "6 months to 45 yrs",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Children, Adolescents, Women",
//     workerCategory: "NA",
//     type: "Nutrition Supplementation",
//     description: "National Iron Plus Initiative is a Nutrition Supplementation scheme.",
//   },
//   {
//     tag: "maa_mothers_absolute_affection",
//     name: "MAA (Mothers' Absolute Affection)",
//     age: "Mothers & infants",
//     income: "All",
//     gender: "Female",
//     targetGroup: "Lactating Mothers",
//     workerCategory: "NA",
//     type: "Breastfeeding Promotion",
//     description: "MAA (Mothers' Absolute Affection) is a Breastfeeding Promotion scheme.",
//   },
//   {
//     tag: "national_iodine_deficiency_disorders_control_programme",
//     name: "National Iodine Deficiency Disorders Control Programme",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "NA",
//     type: "Micronutrient Deficiency Control",
//     description: "National Iodine Deficiency Disorders Control Programme is a Micronutrient Deficiency Control scheme.",
//   },
//   {
//     tag: "national_programme_for_prevention_and_control_of_fluorosis",
//     name: "National Programme for Prevention and Control of Fluorosis",
//     age: "All",
//     income: "Affected",
//     gender: "Both",
//     targetGroup: "Affected Population",
//     workerCategory: "NA",
//     type: "Waterborne Disease Control",
//     description: "National Programme for Prevention and Control of Fluorosis is a Waterborne Disease Control scheme.",
//   },
//   {
//     tag: "integrated_disease_surveillance_programme_idsp",
//     name: "Integrated Disease Surveillance Programme (IDSP)",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Health Workers",
//     type: "Surveillance",
//     description: "Integrated Disease Surveillance Programme (IDSP) is a Surveillance scheme.",
//   },
//   {
//     tag: "revised_national_tuberculosis_control_programme_rntcp",
//     name: "Revised National Tuberculosis Control Programme (RNTCP)",
//     age: "All",
//     income: "Poor",
//     gender: "Both",
//     targetGroup: "TB Patients",
//     workerCategory: "Health Workers",
//     type: "Tuberculosis Control",
//     description: "Revised National Tuberculosis Control Programme (RNTCP) is a Tuberculosis Control scheme.",
//   },
//   {
//     tag: "national_leprosy_eradication_programme_nlep",
//     name: "National Leprosy Eradication Programme (NLEP)",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Leprosy Patients",
//     workerCategory: "Health Workers",
//     type: "Leprosy Eradication",
//     description: "National Leprosy Eradication Programme (NLEP) is a Leprosy Eradication scheme.",
//   },
//   {
//     tag: "national_vector_borne_disease_control_programme_nvbdcp",
//     name: "National Vector Borne Disease Control Programme (NVBDCP)",
//     age: "All",
//     income: "Endemic",
//     gender: "Both",
//     targetGroup: "Endemic Areas",
//     workerCategory: "Health Workers",
//     type: "Disease Control",
//     description: "National Vector Borne Disease Control Programme (NVBDCP) is a Disease Control scheme.",
//   },
//   {
//     tag: "national_aids_control_programme_nacp",
//     name: "National AIDS Control Programme (NACP)",
//     age: "15–49 yrs",
//     income: "High-risk",
//     gender: "Both",
//     targetGroup: "High-Risk Adults",
//     workerCategory: "Health Workers",
//     type: "HIV/AIDS Control",
//     description: "National AIDS Control Programme (NACP) is a HIV/AIDS Control scheme.",
//   },
//   {
//     tag: "pulse_polio_immunization_programme",
//     name: "Pulse Polio Immunization Programme",
//     age: "0–5 yrs",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Infants",
//     workerCategory: "Health Workers",
//     type: "Polio Eradication",
//     description: "Pulse Polio Immunization Programme is a Polio Eradication scheme.",
//   },
//   {
//     tag: "national_viral_hepatitis_control_programme",
//     name: "National Viral Hepatitis Control Programme",
//     age: "All",
//     income: "High-risk",
//     gender: "Both",
//     targetGroup: "At-Risk Groups",
//     workerCategory: "Health Workers",
//     type: "Hepatitis Control",
//     description: "National Viral Hepatitis Control Programme is a Hepatitis Control scheme.",
//   },
//   {
//     tag: "national_rabies_control_programme",
//     name: "National Rabies Control Programme",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Health Workers",
//     type: "Rabies Control",
//     description: "National Rabies Control Programme is a Rabies Control scheme.",
//   },
//   {
//     tag: "national_programme_on_amr_containment",
//     name: "National Programme on AMR Containment",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Health Workers",
//     type: "Antimicrobial Resistance",
//     description: "National Programme on AMR Containment is a Antimicrobial Resistance scheme.",
//   },
//   {
//     tag: "national_tobacco_control_programme_ntcp",
//     name: "National Tobacco Control Programme (NTCP)",
//     age: "Youth & Adults",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "NA",
//     type: "Tobacco Use Reduction",
//     description: "National Tobacco Control Programme (NTCP) is a Tobacco Use Reduction scheme.",
//   },
//   {
//     tag: "npcdcs",
//     name: "NPCDCS",
//     age: "30+ yrs",
//     income: "Poor",
//     gender: "Both",
//     targetGroup: "Adults",
//     workerCategory: "Health Workers",
//     type: "NCD Control",
//     description: "NPCDCS is a NCD Control scheme.",
//   },
//   {
//     tag: "national_programme_for_health_care_of_the_elderly_nphce",
//     name: "National Programme for Health Care of the Elderly (NPHCE)",
//     age: "60+ yrs",
//     income: "Poor",
//     gender: "Both",
//     targetGroup: "Elderly",
//     workerCategory: "Health Workers",
//     type: "Elderly Care",
//     description: "National Programme for Health Care of the Elderly (NPHCE) is a Elderly Care scheme.",
//   },
//   {
//     tag: "npcb_vi",
//     name: "NPCB&VI",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Health Workers",
//     type: "Vision Health",
//     description: "NPCB&VI is a Vision Health scheme.",
//   },
//   {
//     tag: "national_mental_health_programme",
//     name: "National Mental Health Programme",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Mental Health Workers",
//     type: "Mental Health",
//     description: "National Mental Health Programme is a Mental Health scheme.",
//   },
//   {
//     tag: "nppcd",
//     name: "NPPCD",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "ENT Specialists",
//     type: "Hearing Health",
//     description: "NPPCD is a Hearing Health scheme.",
//   },
//   {
//     tag: "national_oral_health_programme",
//     name: "National Oral Health Programme",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "Dentists",
//     type: "Oral Health",
//     description: "National Oral Health Programme is a Oral Health scheme.",
//   },
//   {
//     tag: "nppmbi",
//     name: "NPPMBI",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Burn Victims",
//     workerCategory: "Healthcare Workers",
//     type: "Burn Injury Management",
//     description: "NPPMBI is a Burn Injury Management scheme.",
//   },
//   {
//     tag: "occupational_disease_programme",
//     name: "Occupational Disease Programme",
//     age: "Working-age",
//     income: "Workers",
//     gender: "Both",
//     targetGroup: "Industrial Workers",
//     workerCategory: "Occupational Health Experts",
//     type: "Occupational Disease",
//     description: "Occupational Disease Programme is a Occupational Disease scheme.",
//   },
//   {
//     tag: "pm_national_dialysis_programme",
//     name: "PM National Dialysis Programme",
//     age: "Adults",
//     income: "BPL",
//     gender: "Both",
//     targetGroup: "Kidney Patients",
//     workerCategory: "Nephrology Units",
//     type: "Dialysis",
//     description: "PM National Dialysis Programme is a Dialysis scheme.",
//   },
//   {
//     tag: "ayushman_bharat_health_and_wellness_centres",
//     name: "Ayushman Bharat - Health and Wellness Centres",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "CHOs/ASHA/ANMs",
//     type: "Primary Healthcare",
//     description: "Ayushman Bharat - Health and Wellness Centres is a Primary Healthcare scheme.",
//   },
//   {
//     tag: "ayushman_bharat_pm_jay",
//     name: "Ayushman Bharat - PM-JAY",
//     age: "All",
//     income: "Poor",
//     gender: "Both",
//     targetGroup: "Low-Income Families",
//     workerCategory: "NA",
//     type: "Insurance & Hospitalization",
//     description: "Ayushman Bharat - PM-JAY is a Insurance & Hospitalization scheme.",
//   },
//   {
//     tag: "strengthening_of_tertiary_cancer_care",
//     name: "Strengthening of Tertiary Cancer Care",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "Cancer Patients",
//     workerCategory: "Oncology Hospitals",
//     type: "Cancer Treatment",
//     description: "Strengthening of Tertiary Cancer Care is a Cancer Treatment scheme.",
//   },
//   {
//     tag: "rashtriya_arogya_nidhi",
//     name: "Rashtriya Arogya Nidhi",
//     age: "All",
//     income: "BPL",
//     gender: "Both",
//     targetGroup: "Critically Ill Patients",
//     workerCategory: "Government Hospitals",
//     type: "Financial Support",
//     description: "Rashtriya Arogya Nidhi is a Financial Support scheme.",
//   },
//   {
//     tag: "health_ministers_cancer_patients_fund",
//     name: "Health Minister's Cancer Patients Fund",
//     age: "All",
//     income: "BPL",
//     gender: "Both",
//     targetGroup: "Cancer Patients",
//     workerCategory: "Government Hospitals",
//     type: "Financial Support",
//     description: "Health Minister's Cancer Patients Fund is a Financial Support scheme.",
//   },
//   {
//     tag: "health_ministers_discretionary_grant",
//     name: "Health Minister's Discretionary Grant",
//     age: "All",
//     income: "Poor",
//     gender: "Both",
//     targetGroup: "Any Needy Patient",
//     workerCategory: "Government Hospitals",
//     type: "Discretionary Support",
//     description: "Health Minister's Discretionary Grant is a Discretionary Support scheme.",
//   },
//   {
//     tag: "amrit_pharmacies",
//     name: "AMRIT Pharmacies",
//     age: "All",
//     income: "All",
//     gender: "Both",
//     targetGroup: "General Population",
//     workerCategory: "NA",
//     type: "Affordable Medicines",
//     description: "AMRIT Pharmacies is a Affordable Medicines scheme.",
//   },
// ]

// export interface Intent {
//   tag: string
//   patterns: string[]
//   responses: string[]
// }

// export const intents: Intent[] = [
//   {
//     tag: "janani_shishu_suraksha_karyakaram_jssk",
//     patterns: [
//       "What is Janani Shishu Suraksha Karyakaram (JSSK)?",
//       "Tell me about Janani Shishu Suraksha Karyakaram (JSSK)",
//       "Janani Shishu Suraksha Karyakaram (JSSK) scheme info",
//     ],
//     responses: [
//       "Janani Shishu Suraksha Karyakaram (JSSK) is a Maternity and Neonatal Care scheme. Target Age: Pregnant women, newborns, Income: All (especially poor), Gender: Female, Target Group: Mothers & Newborns, Worker Category: nan.",
//     ],
//   },
//   {
//     tag: "rashtriya_kishor_swasthya_karyakram_rksk",
//     patterns: [
//       "What is Rashtriya Kishor Swasthya Karyakram (RKSK)?",
//       "Tell me about Rashtriya Kishor Swasthya Karyakram (RKSK)",
//       "Rashtriya Kishor Swasthya Karyakram (RKSK) scheme info",
//     ],
//     responses: [
//       "Rashtriya Kishor Swasthya Karyakram (RKSK) is a Adolescent Health scheme. Target Age: 10–19 yrs, Income: All, Gender: Both, Target Group: Adolescents, Worker Category: nan.",
//     ],
//   },
//   {
//     tag: "greeting",
//     patterns: ["Hi", "Hello", "Hey", "Greetings", "Good morning", "Good afternoon", "Good evening", "How are you"],
//     responses: [
//       "Hello! I'm SwasthyaSaathi, your AI health companion. How can I help you today?",
//       "Hi there! I'm here to help you find healthcare schemes you may be eligible for. What would you like to know?",
//       "Namaste! I'm SwasthyaSaathi. I can help you learn about government healthcare schemes. How may I assist you?",
//     ],
//   },
//   {
//     tag: "goodbye",
//     patterns: ["Bye", "Goodbye", "See you later", "Take care", "Exit", "Quit", "End"],
//     responses: [
//       "Goodbye! Take care of your health!",
//       "Thank you for using SwasthyaSaathi. Have a healthy day!",
//       "Bye! Feel free to return if you have more questions about healthcare schemes.",
//     ],
//   },
//   {
//     tag: "thanks",
//     patterns: ["Thank you", "Thanks", "Thanks a lot", "I appreciate it", "That's helpful"],
//     responses: [
//       "You're welcome! I'm happy to help.",
//       "Glad I could assist you!",
//       "It's my pleasure to help you navigate healthcare schemes.",
//     ],
//   },
//   {
//     tag: "about",
//     patterns: [
//       "What is SwasthyaSaathi",
//       "Tell me about this app",
//       "Who are you",
//       "What can you do",
//       "How can you help me",
//     ],
//     responses: [
//       "I am SwasthyaSaathi, an AI-powered health companion designed to help you find and enroll in government healthcare schemes. I can answer questions about various schemes, check your eligibility, and guide you through the application process.",
//       "SwasthyaSaathi is your AI health companion that helps rural citizens access healthcare schemes. I can provide information about schemes, check eligibility, and assist with applications in multiple languages.",
//       "I'm your AI assistant for healthcare schemes. I can help you discover schemes you're eligible for, explain benefits, and guide you through the application process.",
//     ],
//   },
//   {
//     tag: "schemes_for_pregnant",
//     patterns: [
//       "Schemes for pregnant women",
//       "Healthcare for pregnancy",
//       "Maternity schemes",
//       "Government benefits for pregnant women",
//       "Pregnancy related schemes",
//     ],
//     responses: [
//       "There are several schemes for pregnant women including: 1) Janani Shishu Suraksha Karyakaram (JSSK) - for all pregnant women, 2) Janani Suraksha Yojana (JSY) - for BPL pregnant women, 3) Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) - for all pregnant women, and 4) LaQshya - for improving quality of care during delivery. Would you like details about any specific scheme?",
//     ],
//   },
//   {
//     tag: "schemes_for_children",
//     patterns: [
//       "Schemes for children",
//       "Child healthcare programs",
//       "Government benefits for kids",
//       "Health schemes for infants",
//       "Child health initiatives",
//     ],
//     responses: [
//       "For children, these schemes are available: 1) Rashtriya Bal Swasthya Karyakram (RBSK) - for children 0-18 years, 2) Universal Immunisation Programme - for children 0-6 years, 3) Mission Indradhanush - for children 0-2 years, 4) Pulse Polio Immunization Programme - for children 0-5 years. Would you like more information about any of these?",
//     ],
//   },
//   {
//     tag: "schemes_for_elderly",
//     patterns: [
//       "Schemes for senior citizens",
//       "Healthcare for elderly",
//       "Old age health benefits",
//       "Government schemes for old people",
//       "Elderly care programs",
//     ],
//     responses: [
//       "For elderly citizens, the main scheme is the National Programme for Health Care of the Elderly (NPHCE), which targets people aged 60+ years, especially those from poor backgrounds. It provides specialized geriatric care through district hospitals and community-based services. Would you like more details about this scheme?",
//     ],
//   },
//   {
//     tag: "schemes_for_poor",
//     patterns: [
//       "Schemes for poor families",
//       "Healthcare for BPL",
//       "Low income health benefits",
//       "Government schemes for poor",
//       "Health insurance for poor",
//     ],
//     responses: [
//       "For low-income and BPL families, these schemes are available: 1) Ayushman Bharat - PM-JAY - comprehensive health insurance, 2) Rashtriya Arogya Nidhi - financial assistance for major illnesses, 3) Janani Suraksha Yojana (JSY) - for pregnant women, 4) PM National Dialysis Programme - for kidney patients. Would you like more information about any of these?",
//     ],
//   },
//   {
//     tag: "application_process",
//     patterns: [
//       "How to apply",
//       "Application process",
//       "How to enroll",
//       "Registration for schemes",
//       "How to get benefits",
//       "Documents required",
//     ],
//     responses: [
//       "The application process varies by scheme. Generally, you'll need: 1) Identity proof (Aadhaar/Voter ID), 2) Income certificate for BPL schemes, 3) Age proof for age-specific schemes, 4) Residence proof. Applications can be submitted at local health centers, hospitals, or online through scheme portals. Would you like help with a specific scheme's application process?",
//     ],
//   },
//   {
//     tag: "eligibility_check",
//     patterns: [
//       "Am I eligible",
//       "Eligibility criteria",
//       "Who can apply",
//       "Check if I qualify",
//       "Eligibility requirements",
//     ],
//     responses: [
//       "Eligibility depends on factors like age, income, gender, and location. To check your eligibility, I need to know: 1) Your age group, 2) Income category (BPL/APL), 3) Gender, 4) State of residence, 5) Any specific health conditions. Would you like to provide these details so I can suggest suitable schemes?",
//     ],
//   },
// ]

// export function findSchemesByFilters(filters: {
//   age?: string
//   income?: string
//   gender?: string
//   targetGroup?: string
//   workerCategory?: string
//   type?: string
// }): HealthScheme[] {
//   return healthSchemes.filter((scheme) => {
//     let match = true

//     if (filters.age && !scheme.age.toLowerCase().includes(filters.age.toLowerCase())) {
//       match = false
//     }

//     if (filters.income && !scheme.income.toLowerCase().includes(filters.income.toLowerCase())) {
//       match = false
//     }

//     if (
//       filters.gender &&
//       scheme.gender !== "Both" &&
//       !scheme.gender.toLowerCase().includes(filters.gender.toLowerCase())
//     ) {
//       match = false
//     }

//     if (filters.targetGroup && !scheme.targetGroup.toLowerCase().includes(filters.targetGroup.toLowerCase())) {
//       match = false
//     }

//     if (
//       filters.workerCategory &&
//       scheme.workerCategory !== "NA" &&
//       !scheme.workerCategory.toLowerCase().includes(filters.workerCategory.toLowerCase())
//     ) {
//       match = false
//     }

//     if (filters.type && !scheme.type.toLowerCase().includes(filters.type.toLowerCase())) {
//       match = false
//     }

//     return match
//   })
// }

// export function findSchemeByTag(tag: string): HealthScheme | undefined {
//   return healthSchemes.find((scheme) => scheme.tag === tag)
// }

// export function findIntentByPattern(input: string): Intent | undefined {
//   // Convert input to lowercase for case-insensitive matching
//   const lowerInput = input.toLowerCase()

//   // First, check for exact matches in patterns
//   for (const intent of intents) {
//     for (const pattern of intent.patterns) {
//       if (pattern.toLowerCase() === lowerInput) {
//         return intent
//       }
//     }
//   }

//   // If no exact match, look for partial matches
//   for (const intent of intents) {
//     for (const pattern of intent.patterns) {
//       if (lowerInput.includes(pattern.toLowerCase())) {
//         return intent
//       }
//     }
//   }

//   // Check for keyword matches
//   const keywords = lowerInput.split(/\s+/)
//   for (const intent of intents) {
//     for (const pattern of intent.patterns) {
//       const patternWords = pattern.toLowerCase().split(/\s+/)
//       const matchCount = keywords.filter((word) =>
//         patternWords.some((patternWord) => patternWord.includes(word) || word.includes(patternWord)),
//       ).length

//       // If more than 50% of keywords match, consider it a match
//       if (matchCount > 0 && matchCount / keywords.length > 0.5) {
//         return intent
//       }
//     }
//   }

//   return undefined
// }

// export function extractFilters(input: string): {
//   age?: string
//   income?: string
//   gender?: string
//   targetGroup?: string
//   workerCategory?: string
//   type?: string
// } {
//   const filters: any = {}

//   // Age patterns
//   if (input.match(/\b(pregnant|newborn|infant|child|adolescent|adult|elderly|senior)\b/i)) {
//     const ageMatch = input.match(/\b(pregnant|newborn|infant|child|adolescent|adult|elderly|senior)\b/i)
//     if (ageMatch) filters.age = ageMatch[0]
//   }

//   // Income patterns
//   if (input.match(/\b(bpl|poor|low income|middle income|high income|all income)\b/i)) {
//     const incomeMatch = input.match(/\b(bpl|poor|low income|middle income|high income|all income)\b/i)
//     if (incomeMatch) filters.income = incomeMatch[0]
//   }

//   // Gender patterns
//   if (input.match(/\b(male|female|men|women|boy|girl)\b/i)) {
//     const genderMatch = input.match(/\b(male|female|men|women|boy|girl)\b/i)
//     if (genderMatch) {
//       const gender = genderMatch[0].toLowerCase()
//       if (gender === "men" || gender === "boy" || gender === "male") {
//         filters.gender = "Male"
//       } else {
//         filters.gender = "Female"
//       }
//     }
//   }

//   // Target group patterns
//   if (input.match(/\b(mother|newborn|infant|child|adolescent|adult|elderly|patient|worker|family)\b/i)) {
//     const targetMatch = input.match(/\b(mother|newborn|infant|child|adolescent|adult|elderly|patient|worker|family)\b/i)
//     if (targetMatch) filters.targetGroup = targetMatch[0]
//   }

//   // Worker category patterns
//   if (input.match(/\b(health worker|asha|anm|doctor|nurse|specialist)\b/i)) {
//     const workerMatch = input.match(/\b(health worker|asha|anm|doctor|nurse|specialist)\b/i)
//     if (workerMatch) filters.workerCategory = workerMatch[0]
//   }

//   // Scheme type patterns
//   if (input.match(/\b(insurance|maternity|immunization|nutrition|disease control|treatment|support|care)\b/i)) {
//     const typeMatch = input.match(
//       /\b(insurance|maternity|immunization|nutrition|disease control|treatment|support|care)\b/i,
//     )
//     if (typeMatch) filters.type = typeMatch[0]
//   }

//   return filters
// }
