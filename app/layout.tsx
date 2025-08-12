import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Breyner Pinto - Junior Full-Stack Developer",
  description:
    "Portfolio de Breyner Pinto, desarrollador Full-Stack junior de Colombia. Especializado en React, TypeScript, Node.js y tecnologías web modernas.",
  keywords: ["Breyner Pinto", "desarrollador", "full-stack", "React", "TypeScript", "Colombia"],
  authors: [{ name: "Breyner Pinto" }],
  creator: "Breyner Pinto",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Breyner Pinto - Junior Full-Stack Developer",
    description: "Portfolio de Breyner Pinto, desarrollador Full-Stack junior de Colombia.",
    siteName: "Breyner Pinto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breyner Pinto - Junior Full-Stack Developer",
    description: "Portfolio de Breyner Pinto, desarrollador Full-Stack junior de Colombia.",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
