import { Globe, Mic, FileText, Wifi, Stethoscope, Languages } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Mic className="h-10 w-10 text-green-600" />,
      title: "Voice + Text Chatbot",
      description:
        "Interact naturally in your local language through voice or text, making it accessible for everyone.",
    },
    {
      icon: <FileText className="h-10 w-10 text-green-600" />,
      title: "Smart Scheme Recommender",
      description: "Get personalized recommendations for healthcare schemes based on your eligibility criteria.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-green-600" />,
      title: "Offline-First Design",
      description: "Use the app without internet and sync your data when connectivity is available.",
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-green-600" />,
      title: "Medical Guidance",
      description: "Access basic medical information, symptom checking, and healthcare tips offline.",
    },
    {
      icon: <Languages className="h-10 w-10 text-green-600" />,
      title: "Multilingual Support",
      description: "Available in multiple Indian languages including Hindi, Bengali, Tamil, Telugu, and more.",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "Digital Integration",
      description: "Seamlessly connects with Aadhaar, ABHA, and DigiLocker for faster application processing.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How SwasthyaSaathi Helps You</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes healthcare schemes accessible to everyone, especially in rural areas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-2 rounded-full bg-green-50">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
