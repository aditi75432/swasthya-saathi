import { MessageSquare, FileCheck, Upload, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Chat with AI",
      description: "Start a conversation with our AI in your preferred language through voice or text.",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Answer Simple Questions",
      description: "Tell us about your age, location, income, and health concerns.",
    },
    {
      icon: <Upload className="h-8 w-8 text-white" />,
      title: "Get Scheme Recommendations",
      description: "Receive personalized healthcare scheme suggestions based on your eligibility.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Apply with Assistance",
      description: "Get help filling out applications and submitting required documents.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple, step-by-step process to find and apply for healthcare schemes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600">{step.icon}</div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-16 hidden h-0.5 w-full bg-green-200 lg:block"></div>
                )}
                <div className="absolute top-0 left-0 -ml-2 -mt-2 flex h-20 w-20 items-center justify-center rounded-full border border-green-200 bg-white">
                  <span className="text-xl font-bold text-green-600">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
