"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is SwasthyaSaathi?",
      answer:
        "SwasthyaSaathi is an AI-powered multilingual chatbot that helps rural citizens learn about, navigate, and enroll in Central and State government healthcare schemes. It works through voice and text in multiple Indian languages.",
    },
    {
      question: "Does it work without internet?",
      answer:
        "Yes, SwasthyaSaathi is designed to work offline. You can access basic information, chat with the AI, and even fill out application forms without an internet connection. When you connect to the internet, your data will sync automatically.",
    },
    {
      question: "Which languages are supported?",
      answer:
        "SwasthyaSaathi currently supports Hindi, Bengali, Tamil, Telugu, and English. We're continuously adding more languages to make healthcare information accessible to everyone across India.",
    },
    {
      question: "How does the eligibility check work?",
      answer:
        "Our AI asks you simple questions about your age, location, income, and health concerns. Based on your answers, it matches you with healthcare schemes you're eligible for, saving you time and confusion.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security very seriously. Your personal information is encrypted and only used to help you find and apply for healthcare schemes. We comply with all relevant data protection regulations.",
    },
    {
      question: "How can I apply for schemes through SwasthyaSaathi?",
      answer:
        "Once the AI identifies schemes you're eligible for, it can guide you through the application process step by step. You can even fill out forms using voice commands, and the app will submit them when you're connected to the internet.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about SwasthyaSaathi.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
