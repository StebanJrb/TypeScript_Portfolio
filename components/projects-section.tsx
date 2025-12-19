"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

type ProjectCategory = "data-engineering" | "ml-engineering"

interface Project {
  id: string
  title: Record<"es" | "en", string>
  description: Record<"es" | "en", string>
  category: ProjectCategory
  tags: string[]
  image: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "de-1",
    title: {
      es: "Pipeline de Datos en Tiempo Real",
      en: "Real-Time Data Pipeline",
    },
    description: {
      es: "Pipeline de procesamiento de datos en tiempo real usando Kafka, Spark Streaming y BigQuery. Procesa más de 1M de eventos por segundo.",
      en: "Real-time data processing pipeline using Kafka, Spark Streaming and BigQuery. Processes more than 1M events per second.",
    },
    category: "data-engineering",
    tags: ["Kafka", "Spark", "BigQuery", "Python"],
    image: "/real-time-data-pipeline-architecture.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "de-2",
    title: {
      es: "Plataforma de Orquestación ETL",
      en: "ETL Orchestration Platform",
    },
    description: {
      es: "Plataforma de orquestación de ETL con Airflow, dbt y Snowflake. Automatiza el procesamiento de datos de múltiples fuentes.",
      en: "ETL orchestration platform with Airflow, dbt and Snowflake. Automates data processing from multiple sources.",
    },
    category: "data-engineering",
    tags: ["Airflow", "dbt", "Snowflake", "Docker"],
    image: "/etl-workflow-orchestration-dashboard.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "de-3",
    title: {
      es: "Arquitectura de Data Lake",
      en: "Data Lake Architecture",
    },
    description: {
      es: "Arquitectura de Data Lake en AWS con S3, Glue y Athena. Almacena y procesa petabytes de datos estructurados y no estructurados.",
      en: "Data Lake architecture in AWS with S3, Glue and Athena. Stores and processes petabytes of structured and unstructured data.",
    },
    category: "data-engineering",
    tags: ["AWS", "S3", "Glue", "Athena"],
    image: "/aws-data-lake-cloud-architecture.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-1",
    title: {
      es: "Predicción de Abandono de Clientes",
      en: "Customer Churn Prediction",
    },
    description: {
      es: "Modelo de predicción de abandono de clientes usando XGBoost y MLflow. Alcanza 92% de precisión en producción.",
      en: "Customer churn prediction model using XGBoost and MLflow. Achieves 92% accuracy in production.",
    },
    category: "ml-engineering",
    tags: ["XGBoost", "MLflow", "Python", "FastAPI"],
    image: "/customer-churn-prediction-model-dashboard.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-2",
    title: {
      es: "Análisis de Sentimientos NLP",
      en: "NLP Sentiment Analysis",
    },
    description: {
      es: "Sistema de análisis de sentimientos usando transformers y Hugging Face. Procesa millones de comentarios diariamente.",
      en: "Sentiment analysis system using transformers and Hugging Face. Processes millions of comments daily.",
    },
    category: "ml-engineering",
    tags: ["Transformers", "Hugging Face", "PyTorch", "FastAPI"],
    image: "/nlp-sentiment-analysis-neural-network.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-3",
    title: {
      es: "Pipeline de Visión Computacional",
      en: "Computer Vision Pipeline",
    },
    description: {
      es: "Pipeline de visión computacional para detección de objetos usando YOLOv8 y TensorFlow en edge devices.",
      en: "Computer vision pipeline for object detection using YOLOv8 and TensorFlow on edge devices.",
    },
    category: "ml-engineering",
    tags: ["TensorFlow", "YOLO", "OpenCV", "Docker"],
    image: "/computer-vision-object-detection.png",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-4",
    title: {
      es: "Sistema de Recomendaciones",
      en: "Recommendation System",
    },
    description: {
      es: "Sistema de recomendación híbrido usando filtrado colaborativo y content-based filtering. Aumentó engagement 40%.",
      en: "Hybrid recommendation system using collaborative filtering and content-based filtering. Increased engagement by 40%.",
    },
    category: "ml-engineering",
    tags: ["Scikit-learn", "Pandas", "Redis", "PostgreSQL"],
    image: "/recommendation-system-algorithm-visualization.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-engineering")
  const { t, language } = useI18n()

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">{t("projects.title")}</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">{t("projects.subtitle")}</p>

          {/* Category Buttons */}
          <div className="inline-flex items-center gap-4 p-2 rounded-lg bg-secondary/50 border border-primary/20">
            <Button
              variant={activeCategory === "data-engineering" ? "default" : "ghost"}
              size="lg"
              onClick={() => setActiveCategory("data-engineering")}
              className={`font-mono transition-all ${
                activeCategory === "data-engineering"
                  ? "bg-primary text-primary-foreground glow-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.de")}
            </Button>
            <Button
              variant={activeCategory === "ml-engineering" ? "default" : "ghost"}
              size="lg"
              onClick={() => setActiveCategory("ml-engineering")}
              className={`font-mono transition-all ${
                activeCategory === "ml-engineering"
                  ? "bg-primary text-primary-foreground glow-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.ml")}
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-primary/20 bg-card/50 hover:border-primary/50 transition-all glow-border"
            >
              <div className="relative h-48 w-full overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse mt-2" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-2 rounded-md hover:bg-primary/10 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("projects.github")}
                      >
                        <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="p-2 rounded-md hover:bg-primary/10 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("projects.demo")}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title[language]}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description[language]}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-md bg-secondary border border-primary/10 text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 font-mono">{t("projects.cta")}</p>
          <Button size="lg" className="glow-border font-mono">
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
