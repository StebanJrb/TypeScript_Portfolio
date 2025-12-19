"use client"

import { useI18n } from "@/lib/i18n-context"
import { ExternalLink } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex-[7] space-y-6">
            <div className="space-y-4">
              <h3 className="font-orbitron text-lg font-bold text-[#00ff41]">Julian Steban Ruiz Benavides</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{t("footer.description")}</p>
            </div>

            <div className="space-y-3 text-sm text-gray-500">
              <p>{t("footer.copyright")}</p>
              <p className="flex items-center gap-2">
                {t("footer.built")}{" "}
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#00ff41] hover:text-[#00ff41]/80 transition-colors"
                >
                  v0
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
              <p>{t("footer.privacy")}</p>
            </div>
          </div>

          <div className="flex-[3] space-y-4">
            <h4 className="font-orbitron text-sm font-bold text-white/80 uppercase tracking-wider">
              {t("footer.ventures.title")}
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-lg border border-[#00ff41]/30 bg-[#00ff41]/5 px-4 py-3 transition-all hover:border-[#00ff41] hover:bg-[#00ff41]/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]"
              >
                <span className="font-mono text-sm text-white">Nexengi</span>
                <ExternalLink className="h-4 w-4 text-[#00ff41] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 transition-all hover:border-white/40 hover:bg-white/10"
              >
                <span className="font-mono text-sm text-white">Emprendimiento1</span>
                <ExternalLink className="h-4 w-4 text-white/60 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
