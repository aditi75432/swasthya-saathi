import { schemes, type Scheme } from "@/lib/schemes-data"
import { generateHealthRecommendation } from "@/lib/health-tips"

// Types for user context and conversation
export interface UserContext {
  age?: string
  gender?: string
  state?: string
  income?: string
  healthConditions?: string[]
  language: string
}

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  schemes?: Scheme[]
  isHealthTip?: boolean
}

// Language support
export type SupportedLanguage = "english" | "hindi" | "bengali" | "tamil" | "telugu"

const translations = {
  welcomeMessage: {
    english: "Hello! I'm SwasthyaSaathi, your AI health companion. How can I help you today?",
    hindi: "नमस्ते! मैं स्वास्थ्य साथी हूँ, आपका AI स्वास्थ्य साथी। आज मैं आपकी कैसे मदद कर सकता हूँ?",
    bengali: "হ্যালো! আমি স্বাস্থ্যসাথী, আপনার AI স্বাস্থ্য সঙ্গী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
    tamil: "வணக்கம்! நான் ஸ்வஸ்த்யசாதி, உங்கள் AI சுகாதார தோழன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    telugu: "హలో! నేను స్వస్థ్యసాథి, మీ AI ఆరోగ్య సహచరుడు. నేడు నేను మీకు ఎలా సహాయం చేయగలను?",
  },
  noSchemesFound: {
    english: "I couldn't find any schemes matching your criteria. Please try with different parameters.",
    hindi: "मुझे आपके मापदंडों से मेल खाने वाली कोई योजना नहीं मिली। कृपया अलग-अलग पैरामीटर के साथ प्रयास करें।",
    bengali: "আমি আপনার মানদণ্ড মেলে এমন কোন প্রকল্প খুঁজে পাইনি। অনুগ্রহ করে ভিন্ন পরামিতি দিয়ে চেষ্টা করুন।",
    tamil: "உங்கள் அளவுகோல்களுக்கு பொருந்தும் எந்த திட்டங்களையும் என்னால் கண்டுபிடிக்க முடியவில்லை. வேறு அளவுருக்களுடன் முயற்சிக்கவும்.",
    telugu: "మీ ప్రమాణాలకు సరిపోలే ఏ పథకాలను నేను కనుగొనలేకపోయాను. దయచేసి వేరే పారామీటర్లతో ప్రయత్నించండి.",
  },
  schemesFound: {
    english: "I found {count} schemes that match your criteria. Here are the details:",
    hindi: "मुझे आपके मापदंडों से मेल खाने वाली {count} योजनाएँ मिलीं। यहां विवरण दिया गया है:",
    bengali: "আমি আপনার মানদণ্ড মেলে এমন {count}টি প্রকল্প খুঁজে পেয়েছি। এখানে বিবরণ রয়েছে:",
    tamil: "உங்கள் அளவுகோல்களுக்கு பொருந்தும் {count} திட்டங்களை நான் கண்டுபிடித்துள்ளேன். விவரங்கள் இங்கே:",
    telugu: "మీ ప్రమాణాలకు సరిపోలే {count} పథకాలను నేను కనుగొన్నాను. వివరాలు ఇక్కడ ఉన్నాయి:",
  },
  askMoreInfo: {
    english: "To help you find the most relevant schemes, could you please tell me more about:",
    hindi: "आपको सबसे प्रासंगिक योजनाएँ खोजने में मदद करने के लिए, क्या आप मुझे इनके बारे में अधिक बता सकते हैं:",
    bengali: "আপনাকে সবচেয়ে প্রাসঙ্গিক প্রকল্পগুলি খুঁজে পেতে সাহায্য করার জন্য, আপনি কি আমাকে এই বিষয়ে আরও বলতে পারেন:",
    tamil: "மிகவும் பொருத்தமான திட்டங்களைக் கண்டறிய உங்களுக்கு உதவ, இவை பற்றி மேலும் சொல்ல முடியுமா:",
    telugu: "మీకు అత్యంత సంబంధిత పథకాలను కనుగొనడంలో సహాయపడటానికి, దయచేసి వీటి గురించి మరింత చెప్పగలరా:",
  },
  healthTipIntro: {
    english: "Here are some health recommendations for you:",
    hindi: "आपके लिए कुछ स्वास्थ्य सिफारिशें यहां दी गई हैं:",
    bengali: "আপনার জন্য কিছু স্বাস্থ্য সংক্রান্ত সুপারিশ এখানে রয়েছে:",
    tamil: "இங்கே உங்களுக்கான சில சுகாதார பரிந்துரைகள் உள்ளன:",
    telugu: "ఇక్కడ మీ కోసం కొన్ని ఆరోగ్య సిఫార్సులు ఉన్నాయి:",
  },
}

// Intent categories for classification
export enum IntentCategory {
  Greeting = "greeting",
  SchemeQuery = "scheme_query",
  EligibilityCheck = "eligibility_check",
  HealthAdvice = "health_advice",
  ApplicationHelp = "application_help",
  GeneralInfo = "general_info",
  Farewell = "farewell",
  Unknown = "unknown",
}

// Keywords for intent classification
const intentKeywords = {
  [IntentCategory.Greeting]: [
    "hello",
    "hi",
    "hey",
    "greetings",
    "good morning",
    "good afternoon",
    "good evening",
    "namaste",
    "how are you",
  ],
  [IntentCategory.SchemeQuery]: [
    "scheme",
    "schemes",
    "program",
    "programs",
    "yojana",
    "benefits",
    "insurance",
    "healthcare scheme",
    "health scheme",
    "government scheme",
    "tell me about",
    "what is",
    "information on",
  ],
  [IntentCategory.EligibilityCheck]: [
    "eligible",
    "eligibility",
    "qualify",
    "qualification",
    "can i get",
    "am i eligible",
    "do i qualify",
    "requirements",
    "criteria",
  ],
  [IntentCategory.HealthAdvice]: [
    "advice",
    "recommend",
    "suggestion",
    "tip",
    "health tip",
    "healthy",
    "lifestyle",
    "diet",
    "exercise",
    "nutrition",
    "mental health",
    "sleep",
    "stress",
  ],
  [IntentCategory.ApplicationHelp]: [
    "apply",
    "application",
    "form",
    "register",
    "registration",
    "enroll",
    "enrollment",
    "how to apply",
    "documents",
    "required documents",
    "process",
  ],
  [IntentCategory.Farewell]: ["bye", "goodbye", "see you", "farewell", "thanks", "thank you", "exit"],
}

// Demographic keywords for extracting user context
const demographicKeywords = {
  age: {
    child: ["child", "children", "kid", "kids", "young", "infant", "baby", "toddler", "0-18", "under 18"],
    adult: ["adult", "grown-up", "grown up", "18-60", "working age"],
    elderly: ["elderly", "senior", "old", "aged", "60+", "above 60", "retirement"],
    pregnant: ["pregnant", "pregnancy", "expecting", "maternity"],
  },
  gender: {
    male: ["male", "man", "men", "boy", "boys", "father", "husband"],
    female: ["female", "woman", "women", "girl", "girls", "mother", "wife"],
  },
  income: {
    low: ["poor", "bpl", "below poverty", "low income", "economically weak", "financial assistance"],
    middle: ["middle income", "middle class", "average income"],
    high: ["high income", "rich", "wealthy", "affluent"],
  },
  healthConditions: [
    "diabetes",
    "hypertension",
    "blood pressure",
    "heart disease",
    "cancer",
    "tuberculosis",
    "tb",
    "pregnancy",
    "maternity",
    "disability",
    "disabled",
    "mental health",
    "depression",
    "anxiety",
    "chronic",
    "kidney",
    "dialysis",
    "hiv",
    "aids",
  ],
}

// State names for location extraction
const stateNames = [
  "andhra pradesh",
  "arunachal pradesh",
  "assam",
  "bihar",
  "chhattisgarh",
  "goa",
  "gujarat",
  "haryana",
  "himachal pradesh",
  "jharkhand",
  "karnataka",
  "kerala",
  "madhya pradesh",
  "maharashtra",
  "manipur",
  "meghalaya",
  "mizoram",
  "nagaland",
  "odisha",
  "punjab",
  "rajasthan",
  "sikkim",
  "tamil nadu",
  "telangana",
  "tripura",
  "uttar pradesh",
  "uttarakhand",
  "west bengal",
  "delhi",
]

// Function to classify user intent
export function classifyIntent(message: string): IntentCategory {
  const lowerMessage = message.toLowerCase()

  // Check each intent category
  for (const [category, keywords] of Object.entries(intentKeywords)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        return category as IntentCategory
      }
    }
  }

  return IntentCategory.Unknown
}

// Function to extract user context from message
export function extractUserContext(message: string, currentContext: UserContext): UserContext {
  const lowerMessage = message.toLowerCase()
  const newContext: Partial<UserContext> = {}

  // Extract age
  for (const [ageGroup, keywords] of Object.entries(demographicKeywords.age)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        newContext.age = ageGroup
        break
      }
    }
    if (newContext.age) break
  }

  // Extract gender
  for (const [gender, keywords] of Object.entries(demographicKeywords.gender)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        newContext.gender = gender
        break
      }
    }
    if (newContext.gender) break
  }

  // Extract income level
  for (const [incomeLevel, keywords] of Object.entries(demographicKeywords.income)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        newContext.income = incomeLevel
        break
      }
    }
    if (newContext.income) break
  }

  // Extract health conditions
  const healthConditions: string[] = []
  for (const condition of demographicKeywords.healthConditions) {
    if (lowerMessage.includes(condition)) {
      healthConditions.push(condition)
    }
  }
  if (healthConditions.length > 0) {
    newContext.healthConditions = healthConditions
  }

  // Extract state
  for (const state of stateNames) {
    if (lowerMessage.includes(state)) {
      newContext.state = state
      break
    }
  }

  // Merge with current context
  return { ...currentContext, ...newContext }
}

// Function to find relevant schemes based on user context
export function findRelevantSchemes(context: UserContext): Scheme[] {
  let filteredSchemes = [...schemes]

  // Filter by age
  if (context.age) {
    if (context.age === "child") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some(
            (e) =>
              e.toLowerCase().includes("child") ||
              e.toLowerCase().includes("children") ||
              e.toLowerCase().includes("0-") ||
              e.toLowerCase().includes("infant") ||
              e.toLowerCase().includes("newborn"),
          ) || scheme.type.toLowerCase().includes("child"),
      )
    } else if (context.age === "adult") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some(
            (e) =>
              e.toLowerCase().includes("adult") ||
              e.toLowerCase().includes("18-") ||
              e.toLowerCase().includes("all citizens"),
          ) && !scheme.eligibility.some((e) => e.toLowerCase().includes("elderly")),
      )
    } else if (context.age === "elderly") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some(
            (e) =>
              e.toLowerCase().includes("elderly") ||
              e.toLowerCase().includes("senior") ||
              e.toLowerCase().includes("60+") ||
              e.toLowerCase().includes("old age"),
          ) || scheme.type.toLowerCase().includes("elderly"),
      )
    } else if (context.age === "pregnant") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some(
            (e) => e.toLowerCase().includes("pregnant") || e.toLowerCase().includes("maternity"),
          ) ||
          scheme.type.toLowerCase().includes("maternity") ||
          scheme.type.toLowerCase().includes("neonatal"),
      )
    }
  }

  // Filter by gender
  if (context.gender) {
    if (context.gender === "female") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some((e) => e.toLowerCase().includes("women") || e.toLowerCase().includes("female")) ||
          scheme.eligibility.includes("All") ||
          scheme.eligibility.includes("All Citizens"),
      )
    } else if (context.gender === "male") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          !scheme.eligibility.some(
            (e) =>
              e.toLowerCase().includes("women only") ||
              e.toLowerCase().includes("female only") ||
              e.toLowerCase().includes("mothers only"),
          ),
      )
    }
  }

  // Filter by income
  if (context.income) {
    if (context.income === "low") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some(
            (e) =>
              e.toLowerCase().includes("bpl") ||
              e.toLowerCase().includes("poor") ||
              e.toLowerCase().includes("low income") ||
              e.toLowerCase().includes("economically weak"),
          ) ||
          scheme.eligibility.includes("All") ||
          scheme.eligibility.includes("All Citizens"),
      )
    } else if (context.income === "middle") {
      filteredSchemes = filteredSchemes.filter((scheme) =>
        scheme.eligibility.some(
          (e) =>
            e.toLowerCase().includes("middle") ||
            e.toLowerCase().includes("all") ||
            !e.toLowerCase().includes("bpl only"),
        ),
      )
    } else if (context.income === "high") {
      filteredSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.eligibility.some((e) => e.toLowerCase().includes("all") || e.toLowerCase().includes("all citizens")) &&
          !scheme.eligibility.some((e) => e.toLowerCase().includes("bpl only")),
      )
    }
  }

  // Filter by state
  if (context.state) {
    filteredSchemes = filteredSchemes.filter(
      (scheme) =>
        scheme.category === "central" ||
        (scheme.state && scheme.state.toLowerCase().includes(context.state!.toLowerCase())),
    )
  }

  // Filter by health conditions
  if (context.healthConditions && context.healthConditions.length > 0) {
    const relevantSchemes: Scheme[] = []

    for (const condition of context.healthConditions) {
      const conditionSchemes = filteredSchemes.filter(
        (scheme) =>
          scheme.type.toLowerCase().includes(condition) ||
          scheme.description.toLowerCase().includes(condition) ||
          scheme.eligibility.some((e) => e.toLowerCase().includes(condition)),
      )
      relevantSchemes.push(...conditionSchemes)
    }

    // Remove duplicates
    filteredSchemes = Array.from(new Set(relevantSchemes))
  }

  return filteredSchemes
}

// Function to generate response based on intent and context
export function generateResponse(
  message: string,
  context: UserContext,
  conversationHistory: ChatMessage[],
): ChatMessage {
  const intent = classifyIntent(message)
  const updatedContext = extractUserContext(message, context)

  switch (intent) {
    case IntentCategory.Greeting:
      return {
        role: "assistant",
        content:
          translations.welcomeMessage[context.language as SupportedLanguage] || translations.welcomeMessage.english,
      }

    case IntentCategory.SchemeQuery:
      const schemes = findRelevantSchemes(updatedContext)
      if (schemes.length === 0) {
        return {
          role: "assistant",
          content:
            translations.noSchemesFound[context.language as SupportedLanguage] || translations.noSchemesFound.english,
        }
      } else {
        const schemeCount = Math.min(schemes.length, 3) // Limit to 3 schemes for better UI
        const displaySchemes = schemes.slice(0, schemeCount)
        const responseText = (
          translations.schemesFound[context.language as SupportedLanguage] || translations.schemesFound.english
        ).replace("{count}", schemes.length.toString())
        return {
          role: "assistant",
          content: responseText,
          schemes: displaySchemes,
        }
      }

    case IntentCategory.EligibilityCheck:
      // Check if we have enough context to determine eligibility
      const missingInfo = []
      if (!updatedContext.age) missingInfo.push("your age group")
      if (!updatedContext.income) missingInfo.push("your income level")
      if (!updatedContext.state) missingInfo.push("your state of residence")

      if (missingInfo.length > 0) {
        return {
          role: "assistant",
          content: `${translations.askMoreInfo[context.language as SupportedLanguage] || translations.askMoreInfo.english} ${missingInfo.join(", ")}`,
        }
      } else {
        const eligibleSchemes = findRelevantSchemes(updatedContext)
        if (eligibleSchemes.length === 0) {
          return {
            role: "assistant",
            content:
              translations.noSchemesFound[context.language as SupportedLanguage] || translations.noSchemesFound.english,
          }
        } else {
          const schemeCount = Math.min(eligibleSchemes.length, 3)
          const displaySchemes = eligibleSchemes.slice(0, schemeCount)
          const responseText = (
            translations.schemesFound[context.language as SupportedLanguage] || translations.schemesFound.english
          ).replace("{count}", eligibleSchemes.length.toString())
          return {
            role: "assistant",
            content: responseText,
            schemes: displaySchemes,
          }
        }
      }

    case IntentCategory.HealthAdvice:
      // Extract health issue from message
      const healthIssue = message
        .toLowerCase()
        .replace(/recommend|advice|tip|suggestion|healthy|lifestyle/gi, "")
        .trim()
      const recommendation = generateHealthRecommendation(healthIssue)
      return {
        role: "assistant",
        content: `${translations.healthTipIntro[context.language as SupportedLanguage] || translations.healthTipIntro.english}\n\n${recommendation}`,
        isHealthTip: true,
      }

    case IntentCategory.ApplicationHelp:
      return {
        role: "assistant",
        content: `To apply for healthcare schemes, you typically need these documents:
        
1. Identity proof (Aadhaar card, voter ID, or PAN card)
2. Address proof (utility bills, ration card)
3. Income certificate (for income-based schemes)
4. Passport-sized photographs
5. Bank account details

The application process varies by scheme. You can apply:
- Online through the official scheme website
- At your nearest Common Service Center (CSC)
- At government hospitals or health centers
- Through ASHA workers in your village

Would you like information about applying for a specific scheme?`,
      }

    case IntentCategory.Farewell:
      return {
        role: "assistant",
        content:
          "Thank you for using SwasthyaSaathi. Take care of your health and visit us again when you need assistance!",
      }

    default:
      // Generate a contextual response for unknown intents
      return {
        role: "assistant",
        content: `I'm here to help you with healthcare schemes and health advice. You can:
        
1. Ask about healthcare schemes you might be eligible for
2. Get health tips and recommendations
3. Learn about the application process for schemes
4. Check your eligibility for specific programs

How can I assist you today?`,
      }
  }
}

// Function to translate text to the selected language
export function translateText(text: string, language: SupportedLanguage): string {
  // In a real implementation, this would use a translation API
  // For now, we'll return the original text for languages other than those we have translations for
  return text
}

// Function to get speech synthesis voice for a language
export function getVoiceForLanguage(language: SupportedLanguage): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null

  const voices = window.speechSynthesis.getVoices()

  // Map languages to BCP 47 language tags
  const languageMap: Record<SupportedLanguage, string> = {
    english: "en-IN",
    hindi: "hi-IN",
    bengali: "bn-IN",
    tamil: "ta-IN",
    telugu: "te-IN",
  }

  const langCode = languageMap[language]

  // Try to find a voice for the specific language
  let voice = voices.find((v) => v.lang === langCode)

  // Fallback to any voice that includes the language code
  if (!voice) {
    voice = voices.find((v) => v.lang.startsWith(langCode.split("-")[0]))
  }

  // Final fallback to any English voice
  if (!voice) {
    voice = voices.find((v) => v.lang.startsWith("en"))
  }

  return voice || null
}
