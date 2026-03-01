"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context"
import GradualBlur from "@/components/GradualBlur"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* CONTENIDO */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Columna izquierda: Foto y Nombre */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/30 glow-border overflow-hidden bg-secondary">
                <img
                  src="/professional-data-engineer-portrait.jpg"
                  alt="Julian Steban Ruiz Benavides"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-background animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left glow-text leading-tight px-4 lg:px-0">
              Julian Steban Ruiz Benavides
            </h2>
          </div>

          {/* Columna derecha: Título principal */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold glow-text text-center lg:text-left leading-tight">
              <span className="text-foreground">{t("hero.title1")}</span>
              <br />
              <span className="text-primary">&</span>
              <br />
              <span className="text-foreground">{t("hero.title2")}</span>
            </h1>
          </div>
        </div>

        {/* Contenido central */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 glow-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-primary">
              {t("hero.badge")}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            {t("hero.description")}
          </p>

          {/* Botones */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 px-4">
            <Button size="lg" className="glow-border font-mono text-sm md:text-base">
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t("hero.contact")}
            </Button>

            <Button size="lg" className="glow-border font-mono text-sm md:text-base" asChild>
              <a href="https://linkedin.com/in/julianruiz" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 font-mono bg-transparent text-sm md:text-base"
              asChild
            >
              <a href="https://github.com/julianruiz" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 font-mono bg-transparent text-sm md:text-base"
              asChild
            >
              <a href="https://kaggle.com/julianruiz" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                </svg>
                Kaggle
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 font-mono bg-transparent text-sm md:text-base"
              asChild
            >
              <a href="https://huggingface.co/julianruiz" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm-2-8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                </svg>
                Hugging Face
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
