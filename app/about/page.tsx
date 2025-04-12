import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Target, Award, Lightbulb, Smartphone, Globe, Database, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About SwasthyaSaathi</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your AI-powered health companion designed to bridge the healthcare gap in rural India
                </p>
              </div>
              <div className="w-full max-w-sm">
                <img src="/images/logo.png" alt="SwasthyaSaathi Logo" className="mx-auto h-32 w-auto animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1">
                  <Heart className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Bridging Healthcare Gaps</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  To improve access to healthcare in underserved communities by leveraging AI and digital public
                  infrastructure. We aim to increase awareness of government healthcare schemes, simplify the
                  application process, and provide basic medical guidance to those who need it most.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1">
                  <Target className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Our Vision</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Healthcare for All</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  A future where every Indian citizen, regardless of location, literacy, or economic status, has equal
                  access to healthcare benefits and services. We envision a digitally empowered rural India where health
                  information and scheme benefits are just a conversation away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="problem" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="problem">The Problem</TabsTrigger>
                  <TabsTrigger value="solution">Our Solution</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="problem" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold">Low Coverage</h3>
                      <p className="text-gray-500">
                        Only 14.1% of the rural population had health insurance coverage as of 2017-2018
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Database className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold">Scheme Complexity</h3>
                      <p className="text-gray-500">
                        15+ schemes available but complex eligibility criteria and application processes
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold">Awareness Gap</h3>
                      <p className="text-gray-500">
                        Lack of awareness about schemes, applicability, and application process is the major hurdle
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="max-w-3xl text-center">
                    <p className="text-gray-500">
                      Despite numerous government initiatives, millions of Indians still lack access to essential
                      healthcare services due to information barriers, complex processes, and digital divides.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="solution" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">AI-Powered Chatbot</h3>
                      <p className="text-gray-500">
                        Conversational interface that understands queries in multiple languages and guides users to
                        relevant schemes
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">Offline-First Design</h3>
                      <p className="text-gray-500">
                        Works without internet and syncs data when connectivity is available, ideal for rural areas
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="p-2 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">Multilingual Support</h3>
                      <p className="text-gray-500">
                        Available in multiple Indian languages including Hindi, Bengali, Tamil, Telugu, and more
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="max-w-3xl text-center">
                    <p className="text-gray-500">
                      SwasthyaSaathi uses a question-based approach via voice and text to determine and suggest scheme
                      applicability based on state, income group, age, gender, health concerns, and other factors.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Impact Goals Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                  Impact Goals
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Making a Difference</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aligned with UN Sustainable Development Goal 3: Good Health and Well-being
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-green-100 rounded-full">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">15+</h3>
                <p className="text-center text-gray-500">Increase awareness and access to health schemes</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-green-100 rounded-full">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">10,000+</h3>
                <p className="text-center text-gray-500">Rural families assisted with healthcare enrollment</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-green-100 rounded-full">
                  <Heart className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">Preventive Care</h3>
                <p className="text-center text-gray-500">Improve preventive care and reduce OPD burden</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-green-100 rounded-full">
                  <Globe className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center">Bridge Gap</h3>
                <p className="text-center text-gray-500">Bridge urban-rural health gap using AI + DPI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The People Behind SwasthyaSaathi</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A dedicated team of technologists, healthcare experts, and social impact enthusiasts
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Aditi Mehta</h3>
                  {/* <p className="text-gray-500">Healthcare Policy Expert</p> */}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Kopal Garg</h3>
                  {/* <p className="text-gray-500">AI & Technology Lead</p> */}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Tannu Rawat</h3>
                  {/* <p className="text-gray-500">Rural Outreach Coordinator</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try our AI-powered chatbot to find healthcare schemes you're eligible for
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/chatbot">Chat with SwasthyaSaathi</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/schemes">Explore Schemes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
