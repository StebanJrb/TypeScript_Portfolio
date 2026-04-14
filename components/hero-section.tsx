"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative pt-8 pb-12 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Nombres y Título Globales (Fuera de la caja) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Steban Ruiz Benavides
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
          {t("hero.title1")} <span className="text-primary">&</span> {t("hero.title2")}
        </h2>
      </div>

      {/* Contenedor central acristalado con el resto de la información */}
      <div className="relative z-10 w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
        <div className="p-8 md:p-12 lg:p-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,171,228,0.8)]" />
            <span className="text-sm md:text-base font-medium text-primary/90">
              {t("hero.badge")}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-lg md:text-2xl lg:text-3xl text-white font-medium max-w-4xl mx-auto mb-12 leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Botones */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
            >
              <div className="flex items-center px-6 py-2.5 font-mono text-sm md:text-base text-white border border-white/20 bg-black/50 hover:bg-black/70 hover:border-white/40 backdrop-blur-md rounded-full transition-all">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:text-primary transition-colors" />
                {t("hero.contact")}
              </div>
            </button>

            <a href="https://www.linkedin.com/in/stebanjrb" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center px-6 py-2.5 font-mono text-sm md:text-base text-white border border-white/20 bg-black/50 hover:bg-black/70 hover:border-white/40 backdrop-blur-md rounded-full transition-all">
                <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:text-primary transition-colors" />
                LinkedIn
              </div>
            </a>

            <a href="https://github.com/StebanJrb" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center px-6 py-2.5 font-mono text-sm md:text-base text-white border border-white/20 bg-black/50 hover:bg-black/70 hover:border-white/40 backdrop-blur-md rounded-full transition-all">
                <Github className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:text-primary transition-colors" />
                GitHub
              </div>
            </a>

            <a href="https://www.kaggle.com/stebanjrb" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center px-6 py-2.5 font-mono text-sm md:text-base text-white border border-white/20 bg-black/50 hover:bg-black/70 hover:border-white/40 backdrop-blur-md rounded-full transition-all">
                <svg className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                </svg>
                Kaggle
              </div>
            </a>

            <a href="https://huggingface.co/Stebanjrb" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center px-6 py-2.5 font-mono text-sm md:text-base text-white border border-white/20 bg-black/50 hover:bg-black/70 hover:border-white/40 backdrop-blur-md rounded-full transition-all">
                <svg className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm-2-8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                </svg>
                Hugging Face
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
