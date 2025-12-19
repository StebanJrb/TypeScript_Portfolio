"use client"

import { Briefcase } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const experiencesData = {
  es: [
    {
      company: "Tech Corp",
      role: "Senior Data Engineer",
      period: "2022 - Presente",
      description:
        "Diseño y desarrollo de pipelines de datos a escala procesando +10TB diarios. Implementación de arquitecturas en AWS usando Spark, Airflow y Redshift.",
      achievements: [
        "Reducción del 60% en costos de infraestructura",
        "Optimización de queries críticos mejorando performance 5x",
        "Migración exitosa de data lake on-premise a cloud",
      ],
    },
    {
      company: "DataFlow Solutions",
      role: "ML Engineer",
      period: "2020 - 2022",
      description:
        "Desarrollo de modelos de machine learning para predicción y clasificación. Deployment de modelos en producción con MLOps.",
      achievements: [
        "Implementación de sistema de recomendaciones con 85% accuracy",
        "Pipeline automatizado de reentrenamiento de modelos",
        "Reducción de 40% en tiempo de inferencia",
      ],
    },
    {
      company: "StartupAI",
      role: "Data Analyst",
      period: "2018 - 2020",
      description:
        "Análisis de datos y creación de dashboards para toma de decisiones. Desarrollo de ETL pipelines y automatización de reportes.",
      achievements: [
        "Automatización de 15+ reportes mensuales",
        "Implementación de data warehouse con dbt",
        "Creación de dashboards interactivos en Tableau",
      ],
    },
  ],
  en: [
    {
      company: "Tech Corp",
      role: "Senior Data Engineer",
      period: "2022 - Present",
      description:
        "Design and development of data pipelines at scale processing +10TB daily. Implementation of AWS architectures using Spark, Airflow and Redshift.",
      achievements: [
        "60% reduction in infrastructure costs",
        "Critical query optimization improving performance 5x",
        "Successful migration of on-premise data lake to cloud",
      ],
    },
    {
      company: "DataFlow Solutions",
      role: "ML Engineer",
      period: "2020 - 2022",
      description:
        "Development of machine learning models for prediction and classification. Deployment of models in production with MLOps.",
      achievements: [
        "Implementation of recommendation system with 85% accuracy",
        "Automated model retraining pipeline",
        "40% reduction in inference time",
      ],
    },
    {
      company: "StartupAI",
      role: "Data Analyst",
      period: "2018 - 2020",
      description:
        "Data analysis and dashboard creation for decision making. Development of ETL pipelines and report automation.",
      achievements: [
        "Automation of 15+ monthly reports",
        "Data warehouse implementation with dbt",
        "Creation of interactive dashboards in Tableau",
      ],
    },
  ],
}

export function ExperienceSection() {
  const { t, language } = useI18n()

  const experiences = experiencesData[language]

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-accent">{t("exp.title")}</h2>
          <div className="w-24 h-1 bg-accent mx-auto shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
        </div>

        {/* Experiencia laboral - 100% width with custom scroll */}
        <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-card/30 border border-accent/20 p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground">{exp.role}</h3>
                      <p className="text-accent font-mono text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground bg-accent/5 px-3 py-1 border border-accent/20">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                      <span className="text-foreground/80 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
