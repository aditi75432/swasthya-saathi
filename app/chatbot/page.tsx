"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

export default function ChatbotPage() {
  const [voiceMode, setVoiceMode] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">SwasthyaSaathi Health Scheme Chatbot</h1>
          <div className="flex items-center gap-4">
            <LanguageSelector selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
            <Button
              variant={voiceMode ? "default" : "outline"}
              size="icon"
              onClick={() => setVoiceMode(!voiceMode)}
              aria-label={voiceMode ? "Disable voice mode" : "Enable voice mode"}
            >
              {voiceMode ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Chatbot voiceMode={voiceMode} language={selectedLanguage} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">How to Use the Chatbot</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-green-700">Ask about schemes</h3>
                <p className="text-sm text-gray-600">
                  "What schemes are available for pregnant women?" "Tell me about Ayushman Bharat"
                </p>
              </div>
              <div>
                <h3 className="font-medium text-green-700">Filter by criteria</h3>
                <p className="text-sm text-gray-600">
                  "Schemes for BPL families" "Healthcare for children in rural areas"
                </p>
              </div>
              <div>
                <h3 className="font-medium text-green-700">Get application help</h3>
                <p className="text-sm text-gray-600">
                  "How to apply for JSSK?" "Documents required for Ayushman Bharat"
                </p>
              </div>
              <div>
                <h3 className="font-medium text-green-700">Check eligibility</h3>
                <p className="text-sm text-gray-600">
                  "Am I eligible for PM-JAY?" "Eligibility criteria for maternity schemes"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
