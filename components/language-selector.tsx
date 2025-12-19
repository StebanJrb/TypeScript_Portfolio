"use client"

import { useI18n } from "@/lib/i18n-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-accent/20 bg-card/30">
      <Globe className="w-4 h-4 text-accent" />
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-xs font-mono transition-all ${
          language === "es" ? "text-accent font-bold" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <span className="text-accent/30">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-mono transition-all ${
          language === "en" ? "text-accent font-bold" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
