"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSelectorProps {
  selectedLanguage: string
  onSelectLanguage: (language: string) => void
}

export function LanguageSelector({ selectedLanguage, onSelectLanguage }: LanguageSelectorProps) {
  const languages = [
    { code: "english", name: "English" },
    { code: "hindi", name: "हिंदी (Hindi)" },
    { code: "bengali", name: "বাংলা (Bengali)" },
    { code: "tamil", name: "தமிழ் (Tamil)" },
    { code: "telugu", name: "తెలుగు (Telugu)" },
  ]

  const getLanguageName = (code: string) => {
    return languages.find((lang) => lang.code === code)?.name || code
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>{getLanguageName(selectedLanguage)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onSelectLanguage(language.code)}
            className={selectedLanguage === language.code ? "bg-green-50" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
