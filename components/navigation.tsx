"use client"

import { useState, useEffect, useMemo } from "react"
import { useI18n } from "@/lib/i18n-context"
import { LanguageSelector } from "./language-selector" // Reincorporado
import PillNav from "./PillNav"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio")
  const { t } = useI18n()

  const sections = useMemo(() => [
    { id: "inicio", label: t("nav.home") },
    { id: "proyectos", label: t("nav.projects") },
    { id: "arquitectura", label: t("nav.architecture") },
    { id: "tecnologias", label: t("nav.technologies") },
    { id: "experiencia", label: t("nav.experience") },
    { id: "formacion", label: t("nav.education") },
  ], [t])

  const navItems = useMemo(() => sections.map(s => ({
    label: s.label,
    href: `#${s.id}`
  })), [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY < 100) { setActiveSection("inicio"); return; }
        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                const scrollPos = window.scrollY + 120;
                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      {/* Contenedor del selector de idioma (Igual que antes) */}
      <div className="fixed top-6 right-6 z-[120]">
        <LanguageSelector />
      </div>

      <PillNav 
        items={navItems}
        activeHref={`#${activeSection}`}
        onItemClick={scrollToSection}
        logo={<span className="font-bold text-white text-lg">JSR</span>}
        baseColor="#000000" 
        pillColor="#ffffff" 
        pillTextColor="#000000"
        hoveredPillTextColor="#ffffff"
      />
    </>
  )
}