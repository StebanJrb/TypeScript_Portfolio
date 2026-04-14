"use client"

import { User } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function AboutPreviewSection() {
  const { t } = useI18n()

  return (
    <section className="relative">
      <div className="border border-white/15 bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 transition-all hover:border-white/25">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">

          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />
              {/* Border ring */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-primary/40 p-1 bg-white/5">
                {/* Placeholder — always rendered below the image */}
                <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center bg-white/5">
                  <User className="w-14 h-14 text-white/30" />
                  <span className="text-xs text-white/30 mt-2 font-mono">profile.jpg</span>
                </div>
                {/* Image — covers placeholder when it loads; hidden via onError when 404 */}
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="absolute inset-0 w-full h-full rounded-full object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
            </div>
            {/* Availability badge below photo */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono text-white">{t("about.badge")}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {t("about.title")}
            </h2>

            <p className="text-base md:text-lg text-white leading-relaxed mb-8 max-w-2xl">
              {t("about.description")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0">
              {[
                { value: "1+", label: t("about.stat1") },
                { value: "42+", label: t("about.stat2") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center border border-white/10 bg-white/5 rounded-2xl p-4 hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-white mt-1 font-mono leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
