import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import BotpressChat from "@/components/BotpressChat";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SwasthyaSaathi - Your AI Health Companion",
  description: "AI-powered multilingual chatbot that helps rural citizens access healthcare schemes"
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <BotpressChat />
        </ThemeProvider>
      </body>
    </html>
  )
}

// For Pages Router (e.g., pages/_app.tsx or pages/index.tsx)




import './globals.css'

