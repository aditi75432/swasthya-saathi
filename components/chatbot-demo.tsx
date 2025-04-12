"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, Send, User, Bot } from "lucide-react"
import Link from "next/link"

export function ChatbotDemo() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "नमस्ते! मैं स्वास्थ्य साथी हूँ। आपकी क्या मदद कर सकता हूँ?" },
    { role: "bot", content: "Hello! I am SwasthyaSaathi. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [demoStep, setDemoStep] = useState(0)

  // Demo conversation flow
  const demoFlow = [
    {
      user: "What healthcare schemes are available for pregnant women?",
      bot: "There are several schemes for pregnant women including: 1) Janani Shishu Suraksha Karyakaram (JSSK) - for all pregnant women, 2) Janani Suraksha Yojana (JSY) - for BPL pregnant women, 3) Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) - for all pregnant women. Would you like details about any specific scheme?",
    },
    {
      user: "Tell me more about JSSK",
      bot: "Janani Shishu Suraksha Karyakaram (JSSK) is a scheme that provides completely free and cashless services to pregnant women including normal deliveries and caesarean operations and sick newborn up to 30 days in Government health institutions. Benefits include free delivery, free C-section, free drugs and consumables, free diagnostics, free diet during stay, free transport, and free blood transfusion if needed.",
    },
    {
      user: "How do I apply for this scheme?",
      bot: "To avail benefits under JSSK, you don't need to apply formally. Simply visit your nearest government health facility (PHC, CHC, District Hospital) with your identity proof. The ASHA worker in your area can also guide you. All services are provided free of cost at government facilities. Would you like me to help you locate the nearest health facility?",
    },
  ]

  const runDemo = () => {
    if (demoStep < demoFlow.length) {
      setInput(demoFlow[demoStep].user)

      setTimeout(() => {
        // Add user message
        setMessages((prev) => [...prev, { role: "user", content: demoFlow[demoStep].user }])

        // Add bot response after a delay
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", content: demoFlow[demoStep].bot }])
          setInput("")
          setDemoStep((prev) => prev + 1)
        }, 1000)
      }, 1000)
    }
  }

  // Run the demo automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      runDemo()
    }, 2000)

    return () => clearTimeout(timer)
  }, [demoStep])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Demo</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try Our AI Chatbot</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience how SwasthyaSaathi can help you find and apply for healthcare schemes.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-md mt-12">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <span className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center mr-2">
                  <span className="text-white font-bold">SS</span>
                </span>
                SwasthyaSaathi Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] overflow-y-auto space-y-4 p-4 rounded-lg bg-gray-50">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
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
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center space-x-2">
                <Button size="icon" variant="outline" className="flex-shrink-0">
                  <Mic className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled
                  className="flex-grow"
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="mt-4 text-center">
            <Button asChild>
              <Link href="/chatbot">Try the Full Chatbot</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
