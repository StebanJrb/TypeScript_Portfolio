"use client"

import { GraduationCap, Award, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const educationData = {
  es: [
    {
      institution: "Universidad Nacional",
      degree: "Maestría en Ciencia de Datos",
      period: "2020 - 2022",
      description:
        "Especialización en Machine Learning, Deep Learning y procesamiento de datos a gran escala. Tesis sobre sistemas de recomendación en tiempo real.",
      achievements: [
        "Tesis: 'Arquitecturas distribuidas para ML en producción'",
        "Promedio: 4.8/5.0",
        "Publicación en conferencia internacional de IA",
      ],
    },
    {
      institution: "Universidad Técnica",
      degree: "Ingeniería de Sistemas",
      period: "2014 - 2018",
      description:
        "Fundamentos sólidos en programación, algoritmos, bases de datos y arquitectura de software. Especialización en inteligencia artificial.",
      achievements: [
        "Proyecto de grado: Pipeline de datos para análisis predictivo",
        "Promedio: 4.5/5.0",
        "Mención de honor en desarrollo de software",
      ],
    },
    {
      institution: "Platzi",
      degree: "Ruta de Data Science & ML",
      period: "2019 - 2020",
      description:
        "Formación intensiva en ciencia de datos, machine learning y MLOps. Más de 50 cursos completados en tecnologías de datos modernas.",
      achievements: [
        "Certificado en Data Engineering con AWS",
        "Certificado en Deep Learning con TensorFlow",
        "Top 5% en proyectos de la comunidad",
      ],
    },
  ],
  en: [
    {
      institution: "National University",
      degree: "Master's in Data Science",
      period: "2020 - 2022",
      description:
        "Specialization in Machine Learning, Deep Learning and large-scale data processing. Thesis on real-time recommendation systems.",
      achievements: [
        "Thesis: 'Distributed architectures for ML in production'",
        "GPA: 4.8/5.0",
        "Publication in international AI conference",
      ],
    },
    {
      institution: "Technical University",
      degree: "Systems Engineering",
      period: "2014 - 2018",
      description:
        "Strong foundations in programming, algorithms, databases and software architecture. Specialization in artificial intelligence.",
      achievements: [
        "Graduation project: Data pipeline for predictive analysis",
        "GPA: 4.5/5.0",
        "Honors mention in software development",
      ],
    },
    {
      institution: "Platzi",
      degree: "Data Science & ML Track",
      period: "2019 - 2020",
      description:
        "Intensive training in data science, machine learning and MLOps. Over 50 courses completed in modern data technologies.",
      achievements: [
        "Certified in Data Engineering with AWS",
        "Certified in Deep Learning with TensorFlow",
        "Top 5% in community projects",
      ],
    },
  ],
}

const certificationsData = {
  es: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🔷",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🧠",
    },
    {
      title: "Apache Spark Certified",
      issuer: "Databricks",
      year: "2022",
      icon: "⚡",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      year: "2021",
      icon: "⎈",
    },
  ],
  en: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🔷",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🧠",
    },
    {
      title: "Apache Spark Certified",
      issuer: "Databricks",
      year: "2022",
      icon: "⚡",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      year: "2021",
      icon: "⎈",
    },
  ],
}

export function EducationSection() {
  const { t, language } = useI18n()

  const education = educationData[language]
  const certifications = certificationsData[language]

  return (
    <section id="formacion" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-accent">{t("edu.title")}</h2>
          <div className="w-24 h-1 bg-accent mx-auto shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
        </div>

        <div className="grid grid-cols-[70%_30%] gap-8 h-[600px]">
          {/* Formación académica - 70% with custom scroll */}
          <div className="space-y-6 overflow-y-auto pr-4 custom-scrollbar">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-card/30 border border-accent/20 p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30">
                        <GraduationCap className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-foreground">{edu.degree}</h3>
                        <p className="text-accent font-mono text-sm">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-accent/5 px-3 py-1 border border-accent/20">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{edu.description}</p>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
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

          {/* Certificaciones - 30% with custom scroll */}
          <div className="space-y-4 overflow-y-auto pr-4 custom-scrollbar">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-card/30 border border-accent/20 p-4 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
              >
                <div className="relative">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-heading text-sm text-foreground mb-1 leading-tight">{cert.title}</h4>
                      <p className="text-accent font-mono text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30 group-hover:bg-accent/20 transition-colors">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn notice at the bottom */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/30 border border-accent/20 hover:border-accent/50 transition-all duration-300 group">
            <span className="text-muted-foreground text-sm">{t("edu.linkedin.notice")}</span>
            <a
              href="https://www.linkedin.com/in/julianruizbenavides/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-mono text-sm"
            >
              {t("edu.linkedin.link")}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
