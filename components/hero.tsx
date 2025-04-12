import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                SwasthyaSaathi
              </h1>
              <p className="text-xl text-green-600 font-semibold">Your AI Health Companion</p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                An AI-powered multilingual chatbot that educates, navigates, and helps rural citizens enroll in
                government healthcare schemes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/chat">Chat with AI</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/schemes">Explore Schemes</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/images/hero.png"
                alt="AI Health Assistant"
                className="relative z-10 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
