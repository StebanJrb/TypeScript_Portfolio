"use client"

import { useI18n } from "@/lib/i18n-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 bg-card/30">
      <Globe className="w-4 h-4 text-white/70" />
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-xs font-mono transition-all ${
          language === "es"
            ? "text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            : "text-white/40 hover:text-white/70"
        }`}
      >
        ES
      </button>
      <span className="text-white/20">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-mono transition-all ${
          language === "en"
            ? "text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            : "text-white/40 hover:text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  )
}
