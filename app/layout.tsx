import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n-context"

/* Fuentes futuristas para el portfolio */
const _orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Data & ML Engineer Portfolio",
  description: "Portfolio de Data Engineer y ML Engineer",
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 0.5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
