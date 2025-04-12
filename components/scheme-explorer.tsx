import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function SchemeExplorer() {
  const schemes = [
    {
      id: 1,
      title: "Ayushman Bharat",
      description:
        "Provides health insurance coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
      eligibility: ["Low Income", "All States"],
      link: "/schemes/ayushman-bharat",
    },
    {
      id: 2,
      title: "PM Jan Arogya Yojana",
      description:
        "Provides financial protection to poor, deprived rural families and identified occupational categories.",
      eligibility: ["BPL Families", "All States"],
      link: "/schemes/pmjay",
    },
    {
      id: 3,
      title: "Chief Minister's Comprehensive Health Insurance",
      description: "State-specific health insurance schemes providing coverage for various medical procedures.",
      eligibility: ["State Residents", "Income Based"],
      link: "/schemes/cm-health-insurance",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Schemes</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Healthcare Schemes</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of the most beneficial healthcare schemes available across India.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{scheme.title}</CardTitle>
                <CardDescription>
                  {scheme.eligibility.map((tag, i) => (
                    <Badge key={i} variant="outline" className="mr-2 mb-2">
                      {tag}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-500">{scheme.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={scheme.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/schemes">View All Schemes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
