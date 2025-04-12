"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { filterSchemes, type Scheme } from "@/lib/schemes-data"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface SchemeDirectoryProps {
  filters: {
    state?: string
    category?: string
    type?: string
    beneficiary?: string
    searchQuery?: string
  }
}

export function SchemeDirectory({ filters }: SchemeDirectoryProps) {
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([])
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    // Apply filters
    const schemes = filterSchemes(filters)
    setFilteredSchemes(schemes)
  }, [filters])

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // Filter schemes based on active tab
  const getTabSchemes = (tab: string) => {
    if (tab === "all") return filteredSchemes
    return filteredSchemes.filter((scheme) => scheme.category === tab)
  }

  const tabSchemes = getTabSchemes(activeTab)

  return (
    <div>
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Schemes ({filteredSchemes.length})</TabsTrigger>
          <TabsTrigger value="central">
            Central Govt ({filteredSchemes.filter((s) => s.category === "central").length})
          </TabsTrigger>
          <TabsTrigger value="state">
            State Govt ({filteredSchemes.filter((s) => s.category === "state").length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {tabSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabSchemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No schemes found matching your filters.</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="central">
          {tabSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabSchemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No central government schemes found matching your filters.</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="state">
          {tabSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabSchemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No state government schemes found matching your filters.</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface SchemeCardProps {
  scheme: Scheme
}

function SchemeCard({ scheme }: SchemeCardProps) {
  const isExternalLink = scheme.link.startsWith("http")

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {scheme.title}
          <Badge variant={scheme.category === "central" ? "default" : "outline"} className="ml-2">
            {scheme.category === "central" ? "Central" : "State"}
          </Badge>
        </CardTitle>
        <CardDescription>
          {scheme.eligibility.map((tag, i) => (
            <Badge key={i} variant="secondary" className="mr-2 mb-2">
              {tag}
            </Badge>
          ))}
          {scheme.state && (
            <Badge variant="secondary" className="mr-2 mb-2 bg-green-100 text-green-800">
              {scheme.state}
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-500">{scheme.description}</p>
        <div className="mt-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
            {scheme.type}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          {isExternalLink ? (
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              Details <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <Link href={scheme.link}>Details</Link>
          )}
        </Button>
        <Button asChild>
          <Link href={`/chatbot?scheme=${scheme.id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


// "use client"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Link from "next/link"

// export function SchemeDirectory() {
//   const schemes = [
//     {
//       id: 1,
//       title: "Ayushman Bharat - PMJAY",
//       description:
//         "Provides health insurance coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
//       eligibility: ["Low Income", "All States"],
//       category: "central",
//       type: "Insurance & Hospitalization",
//       link: "/schemes/ayushman-bharat",
//     },
//     {
//       id: 2,
//       title: "Pradhan Mantri Suraksha Bima Yojana",
//       description: "Accident insurance scheme offering coverage for death or disability due to accidents.",
//       eligibility: ["All Citizens", "Age 18-70"],
//       category: "central",
//       type: "Accident Insurance",
//       link: "/schemes/pmsby",
//     },
//     {
//       id: 3,
//       title: "Rashtriya Swasthya Bima Yojana",
//       description: "Health insurance scheme for BPL families providing coverage for hospitalization expenses.",
//       eligibility: ["BPL Families", "All States"],
//       category: "central",
//       type: "Insurance & Hospitalization",
//       link: "/schemes/rsby",
//     },
//     {
//       id: 4,
//       title: "Chief Minister's Comprehensive Health Insurance",
//       description: "State-specific health insurance schemes providing coverage for various medical procedures.",
//       eligibility: ["State Residents", "Income Based"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "/schemes/cm-health-insurance",
//       state: "Tamil Nadu"
//     },
//     {
//       id: 5,
//       title: "Aarogyasri Health Care Trust",
//       description: "Health insurance scheme for BPL families in Telangana and Andhra Pradesh.",
//       eligibility: ["BPL Families", "Telangana", "Andhra Pradesh"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "/schemes/aarogyasri",
//       state: "Telangana, Andhra Pradesh"
//     },
//     {
//       id: 6,
//       title: "Karunya Health Scheme",
//       description: "Financial assistance for treatment of specific diseases in Kerala.",
//       eligibility: ["Kerala Residents", "Specific Diseases"],
//       category: "state",
//       type: "Financial Support",
//       link: "/schemes/karunya",
//       state: "Kerala"
//     },
//     {
//       id: 7,
//       title: "Janani Shishu Suraksha Karyakaram (JSSK)",
//       description: "Covers pregnancy and newborn care with free delivery, drugs, diagnostics, and transport.",
//       eligibility: ["Pregnant Women", "Newborns", "All (especially poor)"],
//       category: "central",
//       type: "Maternity and Neonatal Care",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=842&lid=309",
//     },
//     {
//       id: 8,
//       title: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
//       description: "Focused on adolescent health with interventions in nutrition, mental health, and reproductive health.",
//       eligibility: ["10–19 yrs", "All"],
//       category: "central",
//       type: "Adolescent Health",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1143&lid=365",
//     },
//     {
//       id: 9,
//       title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
//       description: "Early detection and management of health conditions in children 0-18 years.",
//       eligibility: ["0–18 yrs", "All"],
//       category: "central",
//       type: "Child Health Screening",
//       link: "https://rbsk.gov.in/",
//     },
//     {
//       id: 10,
//       title: "Universal Immunisation Programme",
//       description: "Provides vaccines to all children to protect against life-threatening diseases.",
//       eligibility: ["0–6 yrs", "All"],
//       category: "central",
//       type: "Immunization",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=824&lid=220",
//     },
//     {
//       id: 11,
//       title: "Mission Indradhanush",
//       description: "Targeted immunization drive for children under 2 years and pregnant women.",
//       eligibility: ["0–2 yrs", "Pregnant Women", "Underserved"],
//       category: "central",
//       type: "Immunization",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=932&lid=391",
//     },
//     {
//       id: 12,
//       title: "Janani Suraksha Yojana (JSY)",
//       description: "Promotes institutional delivery among poor pregnant women by providing financial assistance.",
//       eligibility: ["Pregnant Women", "BPL"],
//       category: "central",
//       type: "Institutional Delivery Promotion",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
//     },
//     {
//       id: 13,
//       title: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
//       description: "Ensures comprehensive and quality antenatal checkups on the 9th of every month.",
//       eligibility: ["Pregnant Women", "All"],
//       category: "central",
//       type: "Antenatal Checkups",
//       link: "https://pmsma.nhp.gov.in/",
//     },
//     {
//       id: 14,
//       title: "Navjaat Shishu Suraksha Karyakram (NSSK)",
//       description: "Training of healthcare providers in basic newborn care and resuscitation.",
//       eligibility: ["Newborns", "All"],
//       category: "central",
//       type: "Neonatal Resuscitation",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1034&lid=380",
//     },
//     {
//       id: 15,
//       title: "National Family Planning Programme",
//       description: "Promotes adoption of contraceptive methods to control population growth.",
//       eligibility: ["Adults (15–45 yrs)", "All"],
//       category: "central",
//       type: "Family Planning",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1091&lid=365",
//     },
//     {
//       id: 16,
//       title: "LaQshya",
//       description: "Improves quality of care in labor rooms and maternity operation theatres.",
//       eligibility: ["Pregnant Women", "Newborns", "All"],
//       category: "central",
//       type: "Labour Room Quality Improvement",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1048&lid=402",
//     },
//     {
//       id: 17,
//       title: "National Iron Plus Initiative (NIPI)",
//       description: "Addresses iron deficiency anemia across life stages via IFA supplementation.",
//       eligibility: ["6 months to 45 yrs", "All"],
//       category: "central",
//       type: "Nutrition Supplementation",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1031&lid=383",
//     },
//     {
//       id: 18,
//       title: "MAA (Mothers’ Absolute Affection)",
//       description: "Promotes breastfeeding practices through counseling and support.",
//       eligibility: ["Lactating Mothers", "All"],
//       category: "central",
//       type: "Breastfeeding Promotion",
//       link: "https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Maa/Operational_Guidelines_for_MAA_Programme.pdf",
//     },
//     {
//       id: 19,
//       title: "National Iodine Deficiency Disorders Control Programme",
//       description: "Reduces iodine deficiency disorders via iodized salt usage and awareness.",
//       eligibility: ["All"],
//       category: "central",
//       type: "Micronutrient Deficiency Control",
//       link: "https://main.mohfw.gov.in/Organisation/Departments-of-Health-and-Family-Welfare/national-iodine-deficiency-disorders-control-programme",
//     },
//     {
//       id: 20,
//       title: "National Programme for Prevention and Control of Fluorosis",
//       description: "Prevents and controls fluorosis through safe drinking water and awareness.",
//       eligibility: ["Affected Populations"],
//       category: "central",
//       type: "Waterborne Disease Control",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1062&lid=412",
//     },
//     {
//       id: 21,
//       title: "Mukhyamantri Amrutum (MA) Yojana",
//       description: "Provides tertiary care treatment for BPL families in Gujarat.",
//       eligibility: ["BPL Families", "Gujarat Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.magujarat.com/",
//       state: "Gujarat"
//     },
//     {
//       id: 22,
//       title: "Biju Swasthya Kalyan Yojana (BSKY)",
//       description: "Offers free healthcare services up to ₹5 lakhs per family in Odisha.",
//       eligibility: ["Odisha Residents", "Low-Income"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://bsky.odisha.gov.in/",
//       state: "Odisha"
//     },
//     {
//       id: 23,
//       title: "Dr. YSR Aarogyasri",
//       description: "Health coverage up to ₹5 lakhs per family for poor in Andhra Pradesh.",
//       eligibility: ["Andhra Pradesh Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.ysraarogyasri.ap.gov.in/",
//       state: "Andhra Pradesh"
//     },
//     {
//       id: 24,
//       title: "Mahatma Jyotiba Phule Jan Arogya Yojana",
//       description: "Covers medical treatments for Below Poverty Line families in Maharashtra.",
//       eligibility: ["BPL Families", "Maharashtra Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.jeevandayee.gov.in/",
//       state: "Maharashtra"
//     },
//     {
//       id: 25,
//       title: "Swasthya Sathi",
//       description: "Provides basic health coverage to all residents of West Bengal.",
//       eligibility: ["West Bengal Residents", "All Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://swasthyasathi.gov.in/",
//       state: "West Bengal"
//     },
//     {
//       id: 26,
//       title: "Mukhya Mantri Swasthya Bima Yojana",
//       description: "Provides cashless health insurance to poor and middle-income families in Jharkhand.",
//       eligibility: ["Jharkhand Residents", "Low & Middle-Income Groups"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://jharkhand.gov.in/",
//       state: "Jharkhand"
//     },
//     {
//       id: 27,
//       title: "Mizoram State Health Care Scheme",
//       description: "Offers financial health assistance to residents of Mizoram.",
//       eligibility: ["Mizoram Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.mizoram.gov.in/page/mizoram-state-health-care-scheme",
//       state: "Mizoram"
//     },
//     {
//       id: 28,
//       title: "Sikkim Free Health Care Scheme",
//       description: "Provides free medical treatment and referral services to Sikkim residents.",
//       eligibility: ["Sikkim Residents"],
//       category: "state",
//       type: "Free Medical Services",
//       link: "https://sikkim.gov.in/",
//       state: "Sikkim"
//     },
//     {
//       id: 29,
//       title: "CMCHIS - Chief Minister’s Comprehensive Health Insurance Scheme",
//       description: "Health insurance coverage for low-income families in Tamil Nadu.",
//       eligibility: ["Tamil Nadu Residents", "Annual Income < ₹72,000"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.cmchistn.com/",
//       state: "Tamil Nadu"
//     },
//     {
//       id: 30,
//       title: "Deen Dayal Swasthya Seva Yojana (DDSSY)",
//       description: "Health insurance for residents of Goa not covered under Ayushman Bharat.",
//       eligibility: ["Goa Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://goaonline.gov.in/",
//       state: "Goa"
//     },
//     {
//       id: 31,
//       title: "Mukhya Mantri Chikitsa Sahayata Kosh",
//       description: "Provides financial aid for critical illness treatment in Madhya Pradesh.",
//       eligibility: ["Madhya Pradesh Residents", "Below Poverty Line", "Critical Illness"],
//       category: "state",
//       type: "Financial Support",
//       link: "https://mp.gov.in/",
//       state: "Madhya Pradesh"
//     },
//     {
//       id: 32,
//       title: "Assam Arogya Nidhi",
//       description: "Financial support for expensive treatment not covered under other schemes.",
//       eligibility: ["Assam Residents", "Low-Income", "Critical Illness"],
//       category: "state",
//       type: "Financial Support",
//       link: "https://nhm.assam.gov.in/",
//       state: "Assam"
//     },
//     {
//       id: 33,
//       title: "Meghalaya Health Insurance Scheme (MHIS)",
//       description: "Universal health coverage for all residents of Meghalaya.",
//       eligibility: ["Meghalaya Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://mhis.org.in/",
//       state: "Meghalaya"
//     },
//     {
//       id: 34,
//       title: "Chief Minister's Free Diagnostic Scheme",
//       description: "Free diagnostics including CT, MRI, and lab tests for Telangana residents.",
//       eligibility: ["Telangana Residents", "All"],
//       category: "state",
//       type: "Diagnostic Services",
//       link: "https://chfw.telangana.gov.in/",
//       state: "Telangana"
//     },
//     {
//       id: 35,
//       title: "Mukhyamantri Nidan Yojana",
//       description: "Free diagnostic services for all in Bihar through public health facilities.",
//       eligibility: ["Bihar Residents", "All"],
//       category: "state",
//       type: "Diagnostic Services",
//       link: "https://state.bihar.gov.in/health/",
//       state: "Bihar"
//     },
//     {
//       id: 36,
//       title: "Chief Minister’s Relief Fund – Tripura",
//       description: "Provides financial support for major surgeries and treatments.",
//       eligibility: ["Tripura Residents", "Low-Income"],
//       category: "state",
//       type: "Financial Support",
//       link: "https://cmrf.tripura.gov.in/",
//       state: "Tripura"
//     },
//     {
//       id: 37,
//       title: "Ayushman CAPF",
//       description: "Extends Ayushman Bharat benefits to Central Armed Police Forces personnel.",
//       eligibility: ["CAPF Personnel", "Families"],
//       category: "central",
//       type: "Insurance & Hospitalization",
//       link: "https://pmjay.gov.in/",
//       state: "All States"
//     },
//     {
//       id: 38,
//       title: "ESIC – Employee State Insurance Scheme",
//       description: "Healthcare for employees earning less than ₹21,000/month in organized sector.",
//       eligibility: ["Salaried Employees", "Income-based"],
//       category: "central",
//       type: "Insurance & Medical Care",
//       link: "https://www.esic.nic.in/",
//       state: "All States"
//     },
//     {
//       id: 39,
//       title: "Central Government Health Scheme (CGHS)",
//       description: "Comprehensive health care for central govt employees, pensioners and dependents.",
//       eligibility: ["Central Government Employees", "Pensioners"],
//       category: "central",
//       type: "Healthcare Access",
//       link: "https://cghs.gov.in/",
//       state: "Major Cities"
//     },
//     {
//       id: 40,
//       title: "National Programme for Health Care of the Elderly (NPHCE)",
//       description: "Provides dedicated elderly healthcare services at primary and tertiary levels.",
//       eligibility: ["Citizens 60+ years", "All States"],
//       category: "central",
//       type: "Elderly Care",
//       link: "https://main.mohfw.gov.in/",
//       state: "All States"
//     },
//     {
//       id: 41,
//       title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
//       description: "Maternity benefit scheme providing ₹5,000 to pregnant and lactating women.",
//       eligibility: ["Pregnant Women", "Lactating Women", "All States"],
//       category: "central",
//       type: "Maternity Support",
//       link: "https://wcd.nic.in/",
//       state: "All States"
//     },
//     {
//       id: 42,
//       title: "Bihar Health Insurance Scheme",
//       description: "Insurance coverage for BPL families in Bihar, including treatment for critical illnesses.",
//       eligibility: ["BPL Families", "Bihar Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://state.bihar.gov.in/health/",
//       state: "Bihar"
//     },
//     {
//       id: 43,
//       title: "Haryana State Health Insurance Scheme",
//       description: "Free health insurance for families in Haryana under the State Health Scheme.",
//       eligibility: ["Haryana Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.haryanahealth.nic.in/",
//       state: "Haryana"
//     },
//     {
//       id: 44,
//       title: "Gujarat State Health Scheme",
//       description: "Provides cashless medical treatment for poor families in Gujarat.",
//       eligibility: ["Gujarat Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.gujarat.gov.in/",
//       state: "Gujarat"
//     },
//     {
//       id: 45,
//       title: "Delhi Arogya Kosh",
//       description: "Provides financial aid for the treatment of major ailments in Delhi.",
//       eligibility: ["Delhi Residents", "Low-Income"],
//       category: "state",
//       type: "Financial Support",
//       link: "https://health.delhigovt.nic.in/",
//       state: "Delhi"
//     },
//     {
//       id: 46,
//       title: "Maharashtra Jeevan Arogya Yojana",
//       description: "Comprehensive health insurance scheme for the economically weaker sections of Maharashtra.",
//       eligibility: ["Low-Income", "Maharashtra Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.mahahealth.gov.in/",
//       state: "Maharashtra"
//     },
//     {
//       id: 47,
//       title: "Rajasthan Chief Minister's Chiranjeevi Yojana",
//       description: "Free health insurance coverage for families in Rajasthan under this scheme.",
//       eligibility: ["Rajasthan Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.rajswasthya.nic.in/",
//       state: "Rajasthan"
//     },
//     {
//       id: 48,
//       title: "Madhya Pradesh Mukhyamantri Swasthya Bima Yojana",
//       description: "Provides health insurance for low-income families in Madhya Pradesh.",
//       eligibility: ["Madhya Pradesh Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.mpswasthya.nic.in/",
//       state: "Madhya Pradesh"
//     },
//     {
//       id: 49,
//       title: "National Leprosy Eradication Programme (NLEP)",
//       description: "Program aimed at the eradication of leprosy through early diagnosis and treatment.",
//       eligibility: ["All", "Leprosy Affected"],
//       category: "central",
//       type: "Disease-Specific",
//       link: "https://nlep.nic.in/",
//       state: "All States"
//     },
//     {
//       id: 50,
//       title: "National Tuberculosis Elimination Program (NTEP)",
//       description: "Aimed at eliminating tuberculosis through treatment, awareness, and prevention programs.",
//       eligibility: ["All", "TB Patients"],
//       category: "central",
//       type: "Disease-Specific",
//       link: "https://tbcindia.gov.in/",
//       state: "All States"
//     },
//     {
//       id: 51,
//       title: "National Health Mission (NHM)",
//       description: "Aims to provide accessible, affordable, and quality healthcare services to rural populations.",
//       eligibility: ["Rural Population", "All States"],
//       category: "central",
//       type: "Healthcare Access",
//       link: "https://nhm.gov.in/",
//       state: "All States"
//     },
//     {
//       id: 52,
//       title: "Swasthya Sathi Scheme",
//       description: "Health insurance scheme for families in West Bengal providing cashless treatment.",
//       eligibility: ["West Bengal Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://wbhealth.gov.in/swasthya_sathi",
//       state: "West Bengal"
//     },
//     {
//       id: 53,
//       title: "Uttarakhand State Health Scheme",
//       description: "Free medical treatment for families living below the poverty line in Uttarakhand.",
//       eligibility: ["BPL Families", "Uttarakhand Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.uk.gov.in/",
//       state: "Uttarakhand"
//     },
//     {
//       id: 54,
//       title: "Odisha Health Assurance Scheme",
//       description: "Cashless healthcare for economically weaker sections of Odisha.",
//       eligibility: ["Low-Income Families", "Odisha Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.odisha.gov.in/",
//       state: "Odisha"
//     },
//     {
//       id: 55,
//       title: "Karnataka Health Scheme",
//       description: "Health insurance for families in Karnataka to access free medical treatment.",
//       eligibility: ["Karnataka Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.kar.nic.in/",
//       state: "Karnataka"
//     },
//     {
//       id: 56,
//       title: "Rajasthan Mukhyamantri Nishulk Bima Yojana",
//       description: "Provides free health insurance to residents of Rajasthan for treatment of serious illnesses.",
//       eligibility: ["Rajasthan Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.rajswasthya.nic.in/",
//       state: "Rajasthan"
//     },
//     {
//       id: 57,
//       title: "Andhra Pradesh Arogya Raksha Scheme",
//       description: "Financial support for families to cover medical expenses in Andhra Pradesh.",
//       eligibility: ["Andhra Pradesh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.ap.gov.in/",
//       state: "Andhra Pradesh"
//     },
//     {
//       id: 58,
//       title: "Chhattisgarh Mukhyamantri Swasthya Bima Yojana",
//       description: "Health insurance scheme covering hospitalization and surgeries in Chhattisgarh.",
//       eligibility: ["Chhattisgarh Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://cghealth.nic.in/",
//       state: "Chhattisgarh"
//     },
//     {
//       id: 59,
//       title: "Goa Universal Health Scheme",
//       description: "Provides medical treatment and financial assistance to families in Goa.",
//       eligibility: ["Goa Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.goa.gov.in/",
//       state: "Goa"
//     },
//     {
//       id: 60,
//       title: "Madhya Pradesh Maternity Benefit Scheme",
//       description: "Offers financial assistance to women in Madhya Pradesh during pregnancy and childbirth.",
//       eligibility: ["Pregnant Women", "Madhya Pradesh Residents"],
//       category: "state",
//       type: "Maternity Support",
//       link: "https://www.mpswasthya.nic.in/",
//       state: "Madhya Pradesh"
//     },
//     {
//       id: 61,
//       title: "Punjab Health Insurance Scheme",
//       description: "Provides financial assistance for medical treatment in Punjab, covering various diseases and hospitalization.",
//       eligibility: ["Punjab Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.punjab.gov.in/",
//       state: "Punjab"
//     },
//     {
//       id: 62,
//       title: "Bihar State Health Scheme",
//       description: "Free healthcare services to residents of Bihar, including hospitalization and surgery.",
//       eligibility: ["Bihar Residents", "BPL Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.bih.nic.in/",
//       state: "Bihar"
//     },
//     {
//       id: 63,
//       title: "Maharashtra Jeevan Arogya Yojana",
//       description: "Insurance scheme for families in Maharashtra, providing coverage for medical expenses.",
//       eligibility: ["Maharashtra Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://jeevanaroagyama.in/",
//       state: "Maharashtra"
//     },
//     {
//       id: 64,
//       title: "Himachal Pradesh Health Scheme",
//       description: "Provides cashless health insurance for residents of Himachal Pradesh for hospitalization and surgeries.",
//       eligibility: ["Himachal Pradesh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://hpsbos.hp.gov.in/",
//       state: "Himachal Pradesh"
//     },
//     {
//       id: 65,
//       title: "Jammu & Kashmir Health Insurance Scheme",
//       description: "Free health insurance scheme covering medical treatments for J&K residents.",
//       eligibility: ["Jammu & Kashmir Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.jkhealth.org/",
//       state: "Jammu & Kashmir"
//     },
//     {
//       id: 66,
//       title: "Uttar Pradesh Swasthya Bima Yojana",
//       description: "Health insurance for economically weaker sections in Uttar Pradesh.",
//       eligibility: ["Uttar Pradesh Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.up.gov.in/",
//       state: "Uttar Pradesh"
//     },
//     {
//       id: 67,
//       title: "Assam Arogya Nidhi",
//       description: "Financial aid for medical treatment of serious illnesses for residents of Assam.",
//       eligibility: ["Assam Residents"],
//       category: "state",
//       type: "Financial Support",
//       link: "https://health.assam.gov.in/",
//       state: "Assam"
//     },
//     {
//       id: 68,
//       title: "Tamil Nadu Maternity Assistance Scheme",
//       description: "Provides financial aid to pregnant women for medical expenses in Tamil Nadu.",
//       eligibility: ["Pregnant Women", "Tamil Nadu Residents"],
//       category: "state",
//       type: "Maternity Support",
//       link: "https://health.tn.gov.in/",
//       state: "Tamil Nadu"
//     },
//     {
//       id: 69,
//       title: "Chandigarh Health Assistance Scheme",
//       description: "Provides health insurance for residents of Chandigarh, covering hospitalization expenses.",
//       eligibility: ["Chandigarh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.chd.gov.in/",
//       state: "Chandigarh"
//     },
//     {
//       id: 70,
//       title: "Nagaland Health Insurance Scheme",
//       description: "Health insurance scheme for residents of Nagaland, ensuring financial coverage for medical expenses.",
//       eligibility: ["Nagaland Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.nagaland.gov.in/",
//       state: "Nagaland"
//     },
//     {
//       id: 71,
//       title: "Karnataka Health Insurance Scheme",
//       description: "A scheme to provide financial assistance for medical treatment to the residents of Karnataka, especially those from economically weaker sections.",
//       eligibility: ["Karnataka Residents", "Low-Income Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.kar.nic.in/",
//       state: "Karnataka"
//     },
//     {
//       id: 72,
//       title: "Madhya Pradesh Health Scheme",
//       description: "State-level health scheme offering financial support for hospitalization, surgeries, and critical care to the residents of Madhya Pradesh.",
//       eligibility: ["Madhya Pradesh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://mphealth.org/",
//       state: "Madhya Pradesh"
//     },
//     {
//       id: 73,
//       title: "Odisha Health Assurance Scheme",
//       description: "Provides free healthcare services for hospitalization and surgeries to low-income families in Odisha.",
//       eligibility: ["Odisha Residents", "BPL Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.odisha.gov.in/",
//       state: "Odisha"
//     },
//     {
//       id: 74,
//       title: "Chhattisgarh Health Insurance Scheme",
//       description: "Health insurance program covering the hospitalization and treatment of residents of Chhattisgarh.",
//       eligibility: ["Chhattisgarh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.cg.gov.in/",
//       state: "Chhattisgarh"
//     },
//     {
//       id: 75,
//       title: "Rajasthan Swasthya Bima Yojana",
//       description: "Provides health insurance for families in Rajasthan, offering coverage for medical expenses and treatments.",
//       eligibility: ["Rajasthan Residents", "BPL Families"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://www.swasthya.rajasthan.gov.in/",
//       state: "Rajasthan"
//     },
//     {
//       id: 76,
//       title: "Gujarat Health Scheme",
//       description: "Health insurance scheme for Gujarat residents that covers hospitalization expenses and critical illnesses.",
//       eligibility: ["Gujarat Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.gujarat.gov.in/",
//       state: "Gujarat"
//     },
//     {
//       id: 77,
//       title: "Goa Health Scheme",
//       description: "Offers health insurance for residents of Goa, covering medical treatment and hospitalization.",
//       eligibility: ["Goa Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.goa.gov.in/",
//       state: "Goa"
//     },
//     {
//       id: 78,
//       title: "Uttarakhand Health Scheme",
//       description: "Provides free or subsidized healthcare for Uttarakhand residents, focusing on medical treatments and surgeries.",
//       eligibility: ["Uttarakhand Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.uk.gov.in/",
//       state: "Uttarakhand"
//     },
//     {
//       id: 79,
//       title: "Arunachal Pradesh Health Scheme",
//       description: "A healthcare program for residents of Arunachal Pradesh offering insurance coverage for hospitalization and medical treatment.",
//       eligibility: ["Arunachal Pradesh Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.arunachal.gov.in/",
//       state: "Arunachal Pradesh"
//     },
//     {
//       id: 80,
//       title: "Tripura Health Scheme",
//       description: "State-specific health insurance scheme providing coverage for medical treatments for the residents of Tripura.",
//       eligibility: ["Tripura Residents"],
//       category: "state",
//       type: "Insurance & Hospitalization",
//       link: "https://health.tripura.gov.in/",
//       state: "Tripura"
//     },
//     {
//       id: 81,
//       title: "National Iron Plus Initiative (NIPI)",
//       description: "Addresses iron deficiency anemia across life stages via IFA supplementation.",
//       eligibility: ["6 months to 45 yrs", "All"],
//       category: "central",
//       type: "Nutrition Supplementation",
//       link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1031&lid=383"
//    },
//    {
//     id: 82,
//     title: "MAA (Mothers’ Absolute Affection)",
//     description: "Promotes breastfeeding practices through counseling and support.",
//     eligibility: ["Lactating Mothers", "All"],
//     category: "central",
//     type: "Breastfeeding Promotion",
//     link: "https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Maa/Operational_Guidelines_for_MAA_Programme.pdf"
//  },
            
    
//   ];
  

//   return (
//     <div>
//       <Tabs defaultValue="all" className="mb-6">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="all">All Schemes</TabsTrigger>
//           <TabsTrigger value="central">Central Govt</TabsTrigger>
//           <TabsTrigger value="state">State Govt</TabsTrigger>
//         </TabsList>
//         <TabsContent value="all">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {schemes.map((scheme) => (
//               <SchemeCard key={scheme.id} scheme={scheme} />
//             ))}
//           </div>
//         </TabsContent>
//         <TabsContent value="central">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {schemes
//               .filter((scheme) => scheme.category === "central")
//               .map((scheme) => (
//                 <SchemeCard key={scheme.id} scheme={scheme} />
//               ))}
//           </div>
//         </TabsContent>
//         <TabsContent value="state">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {schemes
//               .filter((scheme) => scheme.category === "state")
//               .map((scheme) => (
//                 <SchemeCard key={scheme.id} scheme={scheme} />
//               ))}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }

// interface SchemeCardProps {
//   scheme: {
//     id: number
//     title: string
//     description: string
//     eligibility: string[]
//     category: string
//     link: string
//   }
// }

// function SchemeCard({ scheme }: SchemeCardProps) {
//   return (
//     <Card className="h-full flex flex-col">
//       <CardHeader>
//         <CardTitle className="flex items-center justify-between">
//           {scheme.title}
//           <Badge variant={scheme.category === "central" ? "default" : "outline"} className="ml-2">
//             {scheme.category === "central" ? "Central" : "State"}
//           </Badge>
//         </CardTitle>
//         <CardDescription>
//           {scheme.eligibility.map((tag, i) => (
//             <Badge key={i} variant="secondary" className="mr-2 mb-2">
//               {tag}
//             </Badge>
//           ))}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1">
//         <p className="text-sm text-gray-500">{scheme.description}</p>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button asChild variant="outline">
//           <Link href={scheme.link}>Details</Link>
//         </Button>
//         <Button asChild>
//           <Link href={`${scheme.link}/apply`}>Apply Now</Link>
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
