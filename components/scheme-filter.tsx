"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getUniqueStates, getUniqueTypes, getUniqueBeneficiaries } from "@/lib/schemes-data"
import { Search } from "lucide-react"

interface SchemeFilterProps {
  onFilterChange: (filters: {
    state?: string
    category?: string
    type?: string
    beneficiary?: string
    searchQuery?: string
  }) => void
}

export function SchemeFilter({ onFilterChange }: SchemeFilterProps) {
  const [state, setState] = useState<string>("All States")
  const [category, setCategory] = useState<string>("all")
  const [type, setType] = useState<string>("All Types")
  const [beneficiary, setBeneficiary] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const states = getUniqueStates()
  const types = getUniqueTypes()
  const beneficiaries = getUniqueBeneficiaries()

  // Apply filters when any filter changes
  useEffect(() => {
    onFilterChange({
      state,
      category,
      type,
      beneficiary,
      searchQuery,
    })
  }, [state, category, type, beneficiary, searchQuery, onFilterChange])

  // Update the handleSearch function to apply filters directly
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // No need to call onFilterChange here as it will be triggered by the searchQuery state change
  }

  // Update the resetFilters function to apply filters after resetting
  const resetFilters = () => {
    setState("All States")
    setCategory("all")
    setType("All Types")
    setBeneficiary("All")
    setSearchQuery("")
    // Apply the reset filters
    onFilterChange({
      state: "All States",
      category: "all",
      type: "All Types",
      beneficiary: "All",
      searchQuery: "",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filter Schemes</h3>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <Input
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          {/* State Filter */}
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger id="state">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((stateOption) => (
                  <SelectItem key={stateOption} value={stateOption}>
                    {stateOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Scheme Type Filter */}
          <div className="space-y-2">
            <Label htmlFor="type">Scheme Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((typeOption) => (
                  <SelectItem key={typeOption} value={typeOption}>
                    {typeOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Beneficiary Filter */}
          <div className="space-y-2">
            <Label htmlFor="beneficiary">Beneficiary</Label>
            <Select value={beneficiary} onValueChange={setBeneficiary}>
              <SelectTrigger id="beneficiary">
                <SelectValue placeholder="Select beneficiary" />
              </SelectTrigger>
              <SelectContent>
                {beneficiaries.map((beneficiaryOption) => (
                  <SelectItem key={beneficiaryOption} value={beneficiaryOption}>
                    {beneficiaryOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <Label>Category</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="all" checked={category === "all"} onCheckedChange={() => setCategory("all")} />
                <Label htmlFor="all" className="text-sm font-normal">
                  All Schemes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="central"
                  checked={category === "central"}
                  onCheckedChange={() => setCategory("central")}
                />
                <Label htmlFor="central" className="text-sm font-normal">
                  Central Government
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="state" checked={category === "state"} onCheckedChange={() => setCategory("state")} />
                <Label htmlFor="state" className="text-sm font-normal">
                  State Government
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button onClick={resetFilters} variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  )
}


// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Slider } from "@/components/ui/slider"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export function SchemeFilter() {
//   const [state, setState] = useState("")
//   const [incomeRange, setIncomeRange] = useState([0])
//   const [categories, setCategories] = useState<string[]>([])

//   const states = [
//     "All States",
//     "Andhra Pradesh",
//     "Assam",
//     "Bihar",
//     "Gujarat",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Tamil Nadu",
//     "Telangana",
//     "Uttar Pradesh",
//     "West Bengal",
//   ]

//   const categoryOptions = [
//     { id: "general", label: "General Healthcare" },
//     { id: "maternal", label: "Maternal & Child Health" },
//     { id: "senior", label: "Senior Citizens" },
//     { id: "disability", label: "Disability Support" },
//     { id: "critical", label: "Critical Illness" },
//   ]

//   const formatIncome = (value: number) => {
//     if (value === 0) return "₹0"
//     if (value < 100000) return `₹${value / 1000}K`
//     return `₹${value / 100000}L`
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium mb-4">Filter Schemes</h3>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="state">State</Label>
//             <Select value={state} onValueChange={setState}>
//               <SelectTrigger id="state">
//                 <SelectValue placeholder="Select state" />
//               </SelectTrigger>
//               <SelectContent>
//                 {states.map((state) => (
//                   <SelectItem key={state} value={state.toLowerCase()}>
//                     {state}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label>Annual Family Income</Label>
//             <div className="pt-2">
//               <Slider
//                 defaultValue={[0]}
//                 max={1000000}
//                 step={50000}
//                 value={incomeRange}
//                 onValueChange={setIncomeRange}
//               />
//               <div className="flex justify-between mt-2">
//                 <span className="text-sm text-gray-500">₹0</span>
//                 <span className="text-sm font-medium">{formatIncome(incomeRange[0])}</span>
//                 <span className="text-sm text-gray-500">₹10L+</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label>Category</Label>
//             <div className="space-y-2">
//               {categoryOptions.map((option) => (
//                 <div key={option.id} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={option.id}
//                     checked={categories.includes(option.id)}
//                     onCheckedChange={(checked) => {
//                       if (checked) {
//                         setCategories([...categories, option.id])
//                       } else {
//                         setCategories(categories.filter((id) => id !== option.id))
//                       }
//                     }}
//                   />
//                   <Label htmlFor={option.id} className="text-sm font-normal">
//                     {option.label}
//                   </Label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label>Eligibility</Label>
//             <RadioGroup defaultValue="all">
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="all" id="all" />
//                 <Label htmlFor="all" className="text-sm font-normal">
//                   All Schemes
//                 </Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="eligible" id="eligible" />
//                 <Label htmlFor="eligible" className="text-sm font-normal">
//                   Only Eligible Schemes
//                 </Label>
//               </div>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       <Button className="w-full">Apply Filters</Button>
//     </div>
//   )
// }
