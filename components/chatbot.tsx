"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, Send, User, Bot, MicOff, Loader2, Volume2, VolumeX } from "lucide-react"
import { filterSchemes, type Scheme } from "@/lib/schemes-data"
import { generateHealthRecommendation } from "@/lib/health-tips"
import { useSearchParams } from "next/navigation"

interface Message {
  role: "user" | "bot"
  content: string
  schemes?: Scheme[]
  isHealthTip?: boolean
}

interface ChatbotProps {
  voiceMode?: boolean
  language?: string
}

export function Chatbot({ voiceMode = true, language = "english" }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isOffline, setIsOffline] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const schemeId = searchParams.get("scheme")

  // Check if online
  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine)
    }

    window.addEventListener("online", handleOnlineStatus)
    window.addEventListener("offline", handleOnlineStatus)

    // Initial check
    setIsOffline(!navigator.onLine)

    return () => {
      window.removeEventListener("online", handleOnlineStatus)
      window.removeEventListener("offline", handleOnlineStatus)
    }
  }, [])

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessages: Record<string, string> = {
      english:
        "Hello! I'm SwasthyaSaathi, your AI health companion. How can I help you today? You can ask me about healthcare schemes, check eligibility, or get health recommendations.",
      hindi:
        "नमस्ते! मैं स्वास्थ्य साथी हूँ, आपका AI स्वास्थ्य साथी। आज मैं आपकी कैसे मदद कर सकता हूँ? आप मुझसे स्वास्थ्य योजनाओं के बारे में पूछ सकते हैं, पात्रता जांच सकते हैं, या स्वास्थ्य सिफारिशें प्राप्त कर सकते हैं।",
      bengali:
        "হ্যালো! আমি স্বাস্থ্যসাথী, আপনার AI স্বাস্থ্য সঙ্গী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি? আপনি আমাকে স্বাস্থ্য প্রকল্প সম্পর্কে জিজ্ঞাসা করতে পারেন, যোগ্যতা পরীক্ষা করতে পারেন, বা স্বাস্থ্য সংক্রান্ত পরামর্শ পেতে পারেন।",
      tamil:
        "வணக்கம்! நான் ஸ்வஸ்த்யசாதி, உங்கள் AI சுகாதார தோழன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்? நீங்கள் என்னிடம் சுகாதாரத் திட்டங்கள் பற்றி கேட்கலாம், தகுதியை சரிபார்க்கலாம், அல்லது சுகாதார பரிந்துரைகளைப் பெறலாம்.",
      telugu:
        "హలో! నేను స్వస్థ్యసాథి, మీ AI ఆరోగ్య సహచరుడు. నేడు నేను మీకు ఎలా సహాయం చేయగలను? మీరు నన్ను ఆరోగ్య పథకాల గురించి అడగవచ్చు, అర్హతను తనిఖీ చేయవచ్చు, లేదా ఆరోగ్య సిఫార్సులను పొందవచ్చు.",
    }

    const initialMessage = welcomeMessages[language] || welcomeMessages.english

    setMessages([{ role: "bot", content: initialMessage }])

    // If scheme ID is provided, show scheme details
    if (schemeId) {
      setTimeout(() => {
        handleSchemeQuery(schemeId)
      }, 1000)
    }
  }, [language, schemeId])

  // Speech synthesis setup
  const speak = (text: string) => {
    if (!isSpeaking && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      // Set language based on selected language
      switch (language) {
        case "hindi":
          utterance.lang = "hi-IN"
          break
        case "bengali":
          utterance.lang = "bn-IN"
          break
        case "tamil":
          utterance.lang = "ta-IN"
          break
        case "telugu":
          utterance.lang = "te-IN"
          break
        default:
          utterance.lang = "en-IN"
      }

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  // Handle scheme query by ID
  const handleSchemeQuery = (id: string) => {
    const schemes = filterSchemes({})
    const scheme = schemes.find((s) => s.id.toString() === id)

    if (scheme) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: `You've selected ${scheme.title}. Here are the details:`,
          schemes: [scheme],
        },
      ])
    }
  }

  // Process user message
  const processUserMessage = (userInput: string) => {
    setIsProcessing(true)

    setTimeout(() => {
      // Check for health recommendation request
      if (
        userInput.toLowerCase().includes("recommend") ||
        userInput.toLowerCase().includes("advice") ||
        userInput.toLowerCase().includes("tip") ||
        userInput.toLowerCase().includes("suggestion")
      ) {
        // Extract the health issue from the query
        const healthIssue = userInput.replace(/recommend|advice|tip|suggestion/gi, "").trim()
        const recommendation = generateHealthRecommendation(healthIssue)

        setMessages((prev) => [...prev, { role: "bot", content: recommendation, isHealthTip: true }])

        // Speak the recommendation if voice mode is on
        if (voiceMode) {
          speak(recommendation.replace(/\*\*/g, ""))
        }
      }
      // Check for scheme-related queries
      else if (
        userInput.toLowerCase().includes("scheme") ||
        userInput.toLowerCase().includes("insurance") ||
        userInput.toLowerCase().includes("benefit") ||
        userInput.toLowerCase().includes("program") ||
        userInput.toLowerCase().includes("yojana")
      ) {
        // Extract filters from the query
        const filters: any = {}

        // Check for state mentions
        const states = [
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

        for (const state of states) {
          if (userInput.toLowerCase().includes(state)) {
            filters.state = state
            break
          }
        }

        // Check for beneficiary mentions
        const beneficiaries = [
          { keywords: ["pregnant", "pregnancy", "maternity"], value: "Pregnant Women" },
          { keywords: ["child", "children", "kid"], value: "Children" },
          { keywords: ["elderly", "senior", "old age"], value: "Elderly" },
          { keywords: ["bpl", "poor", "low income"], value: "BPL Families" },
          { keywords: ["woman", "women", "female"], value: "Women" },
          { keywords: ["newborn", "infant", "baby"], value: "Newborns" },
          { keywords: ["adult"], value: "Adults" },
        ]

        for (const beneficiary of beneficiaries) {
          if (beneficiary.keywords.some((keyword) => userInput.toLowerCase().includes(keyword))) {
            filters.beneficiary = beneficiary.value
            break
          }
        }

        // Check for scheme type mentions
        const schemeTypes = [
          { keywords: ["insurance", "hospitalization"], value: "Insurance & Hospitalization" },
          { keywords: ["maternity", "pregnancy"], value: "Maternity and Neonatal Care" },
          { keywords: ["child", "children"], value: "Child Health Screening" },
          { keywords: ["immunization", "vaccine"], value: "Immunization" },
          { keywords: ["financial", "support", "assistance"], value: "Financial Support" },
        ]

        for (const type of schemeTypes) {
          if (type.keywords.some((keyword) => userInput.toLowerCase().includes(keyword))) {
            filters.type = type.value
            break
          }
        }

        // Get matching schemes
        const matchedSchemes = filterSchemes(filters)

        if (matchedSchemes.length > 0) {
          // Limit to 3 schemes for better UI
          const displaySchemes = matchedSchemes.slice(0, 3)

          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: `I found ${matchedSchemes.length} schemes that match your query. Here are some options:`,
              schemes: displaySchemes,
            },
          ])

          // Speak the response if voice mode is on
          if (voiceMode) {
            speak(`I found ${matchedSchemes.length} schemes that match your query.`)
          }
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content:
                "I couldn't find any schemes matching your criteria. Please try with different parameters or ask about specific schemes by name.",
            },
          ])

          // Speak the response if voice mode is on
          if (voiceMode) {
            speak(
              "I couldn't find any schemes matching your criteria. Please try with different parameters or ask about specific schemes by name.",
            )
          }
        }
      }
      // General queries
      else {
        const generalResponses = [
          "I'm here to help you find healthcare schemes and provide health recommendations. Could you please specify what kind of information you're looking for?",
          "I can help you find government healthcare schemes you may be eligible for. Try asking about schemes for specific groups like pregnant women, children, or the elderly.",
          "For personalized health recommendations, you can ask me for advice on specific health issues or concerns.",
          "If you're looking for healthcare schemes, try mentioning your state, income level, or specific health needs so I can provide more relevant information.",
        ]

        const randomResponse = generalResponses[Math.floor(Math.random() * generalResponses.length)]

        setMessages((prev) => [...prev, { role: "bot", content: randomResponse }])

        // Speak the response if voice mode is on
        if (voiceMode) {
          speak(randomResponse)
        }
      }

      setIsProcessing(false)
    }, 1000)
  }

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Process the message
    processUserMessage(input)

    setInput("")
  }

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      return
    }

    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in your browser. Please use Chrome or Edge.")
      return
    }

    setIsRecording(true)

    // Use the Web Speech API for voice recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    // Set language based on selected language
    switch (language) {
      case "hindi":
        recognition.lang = "hi-IN"
        break
      case "bengali":
        recognition.lang = "bn-IN"
        break
      case "tamil":
        recognition.lang = "ta-IN"
        break
      case "telugu":
        recognition.lang = "te-IN"
        break
      default:
        recognition.lang = "en-IN"
    }

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      setIsRecording(false)
    }

    recognition.onerror = () => {
      setIsRecording(false)
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognition.start()
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Card className="w-full h-[70vh] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center">
          <img src="/images/logo.png" alt="SwasthyaSaathi Logo" className="h-6 w-auto mr-2" />
          SwasthyaSaathi Chatbot
        </CardTitle>
        {isOffline && (
          <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span>Offline Mode</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-start gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-green-600" : "bg-gray-200"}`}
              >
                {message.role === "user" ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-gray-700" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg ${message.role === "user" ? "bg-green-600 text-white" : "bg-white border"}`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>

                {message.schemes && message.schemes.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {message.schemes.map((scheme, schemeIndex) => (
                      <div key={schemeIndex} className="border rounded-md p-3 bg-gray-50">
                        <h4 className="font-bold text-green-700">{scheme.title}</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                          <div>
                            <span className="font-semibold">Type:</span> {scheme.type}
                          </div>
                          {scheme.state && (
                            <div>
                              <span className="font-semibold">State:</span> {scheme.state}
                            </div>
                          )}
                          <div className="col-span-2">
                            <span className="font-semibold">Eligibility:</span> {scheme.eligibility.join(", ")}
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{scheme.description}</p>
                        <div className="mt-2 flex justify-end">
                          <Button variant="outline" size="sm" className="text-xs">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {message.role === "bot" && voiceMode && (
                  <div className="mt-2 flex justify-end">
                    {isSpeaking ? (
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={stopSpeaking}>
                        <VolumeX className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => speak(message.content)}>
                        <Volume2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <Bot className="h-4 w-4 text-gray-700" />
              </div>
              <div className="p-3 rounded-lg bg-white border">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex items-center space-x-2 w-full">
          {voiceMode && (
            <Button
              size="icon"
              variant={isRecording ? "default" : "outline"}
              className={isRecording ? "bg-red-500 hover:bg-red-600" : ""}
              onClick={toggleRecording}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
          )}
          <Input
            placeholder={language === "hindi" ? "अपना संदेश टाइप करें..." : "Type your message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isRecording}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSend} disabled={input.trim() === "" || isRecording}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
