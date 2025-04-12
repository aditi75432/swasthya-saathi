"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchemeDirectory } from "@/components/scheme-directory"
import { SchemeFilter } from "@/components/scheme-filter"

export default function SchemesPage() {
  const [filters, setFilters] = useState({
    state: "All States",
    category: "all",
    type: "All Types",
    beneficiary: "All",
    searchQuery: "",
  })

  // Update the handleFilterChange function to prevent unnecessary re-renders
  const handleFilterChange = (newFilters: any) => {
    // Only update if filters actually changed
    setFilters((prevFilters) => {
      // Check if filters are actually different
      if (
        prevFilters.state === newFilters.state &&
        prevFilters.category === newFilters.category &&
        prevFilters.type === newFilters.type &&
        prevFilters.beneficiary === newFilters.beneficiary &&
        prevFilters.searchQuery === newFilters.searchQuery
      ) {
        return prevFilters // No change, return previous state
      }
      return newFilters // Filters changed, update state
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Healthcare Schemes Directory</h1>
        <p className="text-lg text-gray-700 mb-8">
          Browse through available healthcare schemes from Central and State governments. Use the filters to find
          schemes that match your eligibility criteria.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <SchemeFilter onFilterChange={handleFilterChange} />
          </div>
          <div className="md:col-span-3">
            <SchemeDirectory filters={filters} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { SchemeDirectory } from "@/components/scheme-directory"
// import { SchemeFilter } from "@/components/scheme-filter"

// export default function SchemesPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1 container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6">Healthcare Schemes Directory</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Browse through available healthcare schemes from Central and State governments. Use the filters to find
//           schemes that match your eligibility criteria.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="md:col-span-1">
//             <SchemeFilter />
//           </div>
//           <div className="md:col-span-3">
//             <SchemeDirectory />
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }
