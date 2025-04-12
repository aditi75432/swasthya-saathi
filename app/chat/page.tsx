"use client"

import { useState, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

export default function ChatPage() {
  const [voiceMode, setVoiceMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">SwasthyaSaathi Chat</h1>
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
        {/* Add Suspense here to fix the error */}
        <Suspense fallback={<div>Loading chat...</div>}>
          <ChatInterface voiceMode={voiceMode} language={selectedLanguage} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

