"use client"

import { ArrowUp } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const { t } = useI18n()

  const scrollToHome = () => {
    const homeSection = document.getElementById("inicio")
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4 glow-text">{t("arch.cta.title")}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t("arch.cta.description")}</p>
        </div>

        <Button
          size="lg"
          onClick={scrollToHome}
          className="glow-border font-mono group hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all"
        >
          <ArrowUp className="mr-2 h-5 w-5 group-hover:animate-bounce" />
          {t("arch.cta.button")}
        </Button>
      </div>
    </section>
  )
}
