"use client"

import { Briefcase } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface Experience {
  company: string
  role: string
  period: string
  location: string
  type: string
  description: string
  achievements: string[]
}

const experiencesData: { es: Experience[]; en: Experience[] } = {
  es: [
    {
      company: "BBVA Colombia",
      role: "Data Engineer Intern",
      period: "Mar 2025 – Sep 2025 · 7 meses",
      location: "Bogotá, Colombia · Híbrido",
      type: "Práctica",
      description:
        "Participé en la gestión operativa del portafolio de proyectos de datos de BBVA Holding, logrando una mejora del 30% en la trazabilidad y consistencia de la información. Apoyé los procesos de ingesta y validación de tablas de múltiples fuentes, soportando la integración de datos con un 80% de precisión en los flujos analíticos del banco. Además, gestioné licencias y el uso interno de herramientas de inteligencia artificial como ChatGPT y Gemini, optimizando el tiempo de procesamiento y lectura de datos relacionados con su uso en un 70% mediante la creación de reportes automatizados, fortaleciendo el control interno y la toma de decisiones basada en datos.",
      achievements: [
        "30% de mejora en trazabilidad y consistencia de información",
        "80% de precisión en integración de datos en flujos analíticos",
        "70% de optimización en tiempo de procesamiento mediante reportes automatizados",
      ],
    },
    {
      company: "Cisco",
      role: "Business Analyst Intern",
      period: "Jun 2024 – Ene 2025 · 8 meses",
      location: "Bogotá, Colombia · Híbrido",
      type: "Práctica",
      description:
        "Apoyé la identificación de oportunidades de mejora y la optimización de procesos de negocio mediante análisis de datos e indicadores clave de rendimiento, logrando una reducción del 20% en los tiempos de generación de reportes. Diseñé dashboards e informes analíticos para equipos internos, garantizando una precisión superior al 95% en indicadores de negocio críticos. Colaboré con áreas técnicas de Cloud e IA para alinear requerimientos tecnológicos con objetivos estratégicos, lo que derivó en una mejora de eficiencia operativa superior al 15%. Me encargué de comunicar hallazgos y recomendaciones a líderes regionales, contribuyendo a decisiones más informadas alineadas con la estrategia global.",
      achievements: [
        "20% de reducción en tiempos de generación de reportes",
        "Precisión mayor al 95% en indicadores de negocio críticos",
        "Mejora de eficiencia operativa superior al 15%",
      ],
    },
  ],
  en: [
    {
      company: "BBVA Colombia",
      role: "Data Engineer Intern",
      period: "Mar 2025 – Sep 2025 · 7 mos",
      location: "Bogotá, Colombia · Hybrid",
      type: "Internship",
      description:
        "I participated in the operational management of BBVA Holding's data project portfolio, achieving a 30% improvement in information traceability and consistency. I supported the ingestion and validation processes of tables from multiple sources, supporting data integration with 80% accuracy in the bank's analytical workflows. Additionally, I managed licenses and internal use of artificial intelligence tools such as ChatGPT and Gemini, optimizing the processing and reading time of data related to their use by 70% through the creation of automated reports, strengthening internal control and data-driven decision-making.",
      achievements: [
        "30% improvement in information traceability and consistency",
        "80% accuracy in data integration within analytical workflows",
        "70% optimization in processing time through automated reports",
      ],
    },
    {
      company: "Cisco",
      role: "Business Analyst Intern",
      period: "Jun 2024 – Jan 2025 · 8 mos",
      location: "Bogotá, Colombia · Hybrid",
      type: "Internship",
      description:
        "I supported the identification of improvement opportunities and the optimization of business processes through data analysis and key performance indicators, achieving a 20% reduction in report generation times. I designed dashboards and analytical reports for internal teams, ensuring greater than 95% accuracy on critical business indicators. I collaborated with technical areas of Cloud and AI to align technological requirements with strategic objectives, which led to an improvement in operational efficiency of more than 15%. I was responsible for communicating findings and recommendations to regional leaders, contributing to more informed decisions aligned with the global strategy.",
      achievements: [
        "20% reduction in report generation times",
        "Greater than 95% accuracy on critical business indicators",
        "More than 15% improvement in operational efficiency",
      ],
    },
  ],
}

export function ExperienceSection() {
  const { t, language } = useI18n()

  const experiences = experiencesData[language]

  return (
    <section id="experiencia" className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-red-400 mix-blend-plus-lighter">{t("exp.title")}</h2>
          <div className="w-24 h-1 bg-red-400 mx-auto" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-white/10 bg-black/50 rounded-2xl p-8 w-full text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-400/20 flex items-center justify-center border border-red-400/40 shadow-inner">
                    <Briefcase className="w-6 h-6 text-red-400 drop-shadow-md" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white font-bold">{exp.role}</h3>
                    <p className="text-red-400 font-mono text-base font-medium">{exp.company}</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      {exp.location && (
                        <span className="text-white/50 text-xs font-mono flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
                          {exp.location}
                        </span>
                      )}
                      {exp.type && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md border border-white/15 bg-white/5 text-white/60">
                          {exp.type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <span className="font-mono text-sm text-white px-4 py-2 border border-white/10 bg-white/5 rounded-xl font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-white/90 text-sm mb-6 leading-relaxed bg-black/10 p-4 rounded-xl border border-white/10">{exp.description}</p>

              <div className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    <span className="text-white/90 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
