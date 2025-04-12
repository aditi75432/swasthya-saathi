import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "SwasthyaSaathi helped me find a healthcare scheme that covered my mother's treatment. The voice chat made it easy to use even though I'm not tech-savvy.",
      name: "Ramesh Kumar",
      location: "Bihar",
      avatar: "RK",
    },
    {
      quote:
        "I didn't know I was eligible for Ayushman Bharat until the app guided me through the process. Now my whole family has health coverage.",
      name: "Lakshmi Devi",
      location: "Tamil Nadu",
      avatar: "LD",
    },
    {
      quote:
        "The offline feature is a lifesaver in our village where internet is unreliable. I could still get information about healthcare schemes.",
      name: "Arjun Singh",
      location: "Rajasthan",
      avatar: "AS",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from people who have benefited from using SwasthyaSaathi.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-gray-50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-green-100 text-green-800">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
