"use client"

import { Chatbot } from "@/components/chatbot"

interface ChatInterfaceProps {
  voiceMode: boolean
  language: string
}

export function ChatInterface({ voiceMode, language }: ChatInterfaceProps) {
  return <Chatbot voiceMode={voiceMode} language={language} />
}
