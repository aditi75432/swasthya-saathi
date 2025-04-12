import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { SchemeExplorer } from "@/components/scheme-explorer"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { ChatbotDemo } from "@/components/chatbot-demo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <SchemeExplorer />
        <ChatbotDemo />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
