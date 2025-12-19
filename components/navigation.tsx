"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n-context"
import { LanguageSelector } from "./language-selector"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio")
  const { t } = useI18n()

  const sections = [
    { id: "inicio", label: t("nav.home") },
    { id: "proyectos", label: t("nav.projects") },
    { id: "arquitectura", label: t("nav.architecture") },
    { id: "tecnologias", label: t("nav.technologies") },
    { id: "experiencia", label: t("nav.experience") },
    { id: "formacion", label: t("nav.education") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-accent/20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-center justify-between h-16 min-w-[1280px]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-heading text-lg text-accent">JSR</span>
          </div>

          <div className="flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-mono transition-all duration-300 relative group ${
                  activeSection === section.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                )}
                <span className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 transition-all duration-300" />
              </button>
            ))}
          </div>

          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
