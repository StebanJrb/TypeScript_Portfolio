"use client"

import { Box, GitBranch, Shield, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const architecturesData = {
  es: [
    {
      title: "Sistema de Recomendaciones a Escala",
      icon: Box,
      color: "accent",
      sections: [
        {
          subtitle: "Decisiones Técnicas",
          points: [
            "Collaborative filtering híbrido (user-based + item-based) para maximizar relevancia",
            "Feature store centralizado usando Feast para consistencia entre training/serving",
            "Vector database (Pinecone/Milvus) para búsqueda de similitud en <50ms",
            "A/B testing framework integrado para evaluación continua de modelos",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "Real-time vs Batch: Batch para cold-start users (costo), real-time para usuarios activos (latencia)",
            "Precision vs Coverage: Priorizar precision (top-10) sacrificando cobertura del catálogo largo",
            "Model complexity: Modelos simples (matrix factorization) vs deep learning basado en volumen de datos",
          ],
        },
        {
          subtitle: "Escalabilidad",
          points: [
            "Particionamiento horizontal por user_id para distribución de carga",
            "Cache distribuido (Redis) multi-tier: L1 (hot users) + L2 (warm users)",
            "Event streaming (Kafka) para captura de interacciones en tiempo real",
            "Reentrenamiento incremental nocturno + full retrain semanal",
          ],
        },
      ],
    },
    {
      title: "Pipeline de Datos a Escala (PB/día)",
      icon: GitBranch,
      color: "accent",
      sections: [
        {
          subtitle: "Decisiones Técnicas",
          points: [
            "Lambda architecture: Batch (Spark) para histórico + Stream (Flink) para tiempo real",
            "Data lakehouse (Delta Lake) para ACID transactions sobre object storage",
            "Schema evolution con Avro/Protobuf para backward compatibility",
            "Orchestration con Airflow + dbt para transformaciones SQL declarativas",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "Storage: S3 (costo) vs HDFS (performance) → Hybrid con caching inteligente",
            "Processing: Spark vs Presto → Spark para ETL batch, Presto para queries ad-hoc",
            "Consistency vs Availability: Eventually consistent para analytics, strong para transaccional",
          ],
        },
        {
          subtitle: "Escalabilidad",
          points: [
            "Auto-scaling de clusters basado en queue depth y SLAs",
            "Particionamiento por fecha + bucketing por ID para pruning eficiente",
            "Compaction y Z-ordering automático en Delta Lake para optimizar lectura",
            "Tiered storage: Hot (últimos 7 días) en SSD, Warm en HDD, Cold en Glacier",
          ],
        },
      ],
    },
    {
      title: "Sistema de Detección de Fraude en Tiempo Real",
      icon: Shield,
      color: "accent",
      sections: [
        {
          subtitle: "Decisiones Técnicas",
          points: [
            "Ensemble de modelos: XGBoost (patrones) + Isolation Forest (anomalías) + Rules engine",
            "Feature engineering en tiempo real: aggregaciones sliding window (últimos 5min, 1h, 24h)",
            "Graph database (Neo4j) para detección de redes fraudulentas",
            "Stream processing (Kafka Streams) con exactly-once semantics",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "False positives vs False negatives: Optimizar para minimizar FN (fraude real) aunque aumente FP",
            "Latency vs Accuracy: Modelo rápido (<100ms) para tiempo real + modelo complejo async para revisión",
            "Online learning vs Batch: Batch diario para estabilidad + online para adaptation rápida",
          ],
        },
        {
          subtitle: "Escalabilidad",
          points: [
            "Sharding por región geográfica para compliance y baja latencia",
            "Replicas read-only del modelo en edge locations (CDN)",
            "Circuit breaker para degradation: rules-based fallback si ML falla",
            "Monitoring exhaustivo: data drift detection + model performance en tiempo real",
          ],
        },
      ],
    },
  ],
  en: [
    {
      title: "Recommendation System at Scale",
      icon: Box,
      color: "accent",
      sections: [
        {
          subtitle: "Technical Decisions",
          points: [
            "Hybrid collaborative filtering (user-based + item-based) to maximize relevance",
            "Centralized feature store using Feast for consistency between training/serving",
            "Vector database (Pinecone/Milvus) for similarity search in <50ms",
            "Integrated A/B testing framework for continuous model evaluation",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "Real-time vs Batch: Batch for cold-start users (cost), real-time for active users (latency)",
            "Precision vs Coverage: Prioritize precision (top-10) sacrificing long tail catalog coverage",
            "Model complexity: Simple models (matrix factorization) vs deep learning based on data volume",
          ],
        },
        {
          subtitle: "Scalability",
          points: [
            "Horizontal partitioning by user_id for load distribution",
            "Multi-tier distributed cache (Redis): L1 (hot users) + L2 (warm users)",
            "Event streaming (Kafka) for real-time interaction capture",
            "Incremental nightly retraining + weekly full retrain",
          ],
        },
      ],
    },
    {
      title: "Data Pipeline at Scale (PB/day)",
      icon: GitBranch,
      color: "accent",
      sections: [
        {
          subtitle: "Technical Decisions",
          points: [
            "Lambda architecture: Batch (Spark) for historical + Stream (Flink) for real-time",
            "Data lakehouse (Delta Lake) for ACID transactions over object storage",
            "Schema evolution with Avro/Protobuf for backward compatibility",
            "Orchestration with Airflow + dbt for declarative SQL transformations",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "Storage: S3 (cost) vs HDFS (performance) → Hybrid with intelligent caching",
            "Processing: Spark vs Presto → Spark for batch ETL, Presto for ad-hoc queries",
            "Consistency vs Availability: Eventually consistent for analytics, strong for transactional",
          ],
        },
        {
          subtitle: "Scalability",
          points: [
            "Auto-scaling clusters based on queue depth and SLAs",
            "Date partitioning + ID bucketing for efficient pruning",
            "Automatic compaction and Z-ordering in Delta Lake to optimize reads",
            "Tiered storage: Hot (last 7 days) on SSD, Warm on HDD, Cold on Glacier",
          ],
        },
      ],
    },
    {
      title: "Real-Time Fraud Detection System",
      icon: Shield,
      color: "accent",
      sections: [
        {
          subtitle: "Technical Decisions",
          points: [
            "Model ensemble: XGBoost (patterns) + Isolation Forest (anomalies) + Rules engine",
            "Real-time feature engineering: sliding window aggregations (last 5min, 1h, 24h)",
            "Graph database (Neo4j) for fraudulent network detection",
            "Stream processing (Kafka Streams) with exactly-once semantics",
          ],
        },
        {
          subtitle: "Trade-offs",
          points: [
            "False positives vs False negatives: Optimize to minimize FN (real fraud) even if FP increases",
            "Latency vs Accuracy: Fast model (<100ms) for real-time + complex model async for review",
            "Online learning vs Batch: Daily batch for stability + online for rapid adaptation",
          ],
        },
        {
          subtitle: "Scalability",
          points: [
            "Sharding by geographic region for compliance and low latency",
            "Read-only model replicas at edge locations (CDN)",
            "Circuit breaker for degradation: rules-based fallback if ML fails",
            "Comprehensive monitoring: data drift detection + real-time model performance",
          ],
        },
      ],
    },
  ],
}

export function ArchitectureSection() {
  const { t, language } = useI18n()

  const architectures = architecturesData[language]

  return (
    <section id="arquitectura" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-accent">{t("arch.title")}</h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto mb-4">{t("arch.subtitle")}</p>
          <div className="w-24 h-1 bg-accent mx-auto shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
        </div>

        <div className="space-y-12">
          {architectures.map((arch, index) => {
            const Icon = arch.icon
            return (
              <div
                key={index}
                className="group relative bg-card/20 border border-accent/20 p-8 hover:border-accent/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-shadow">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl text-foreground">{arch.title}</h3>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {arch.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="w-4 h-4 text-accent" />
                          <h4 className="font-heading text-lg text-accent">{section.subtitle}</h4>
                        </div>

                        <div className="space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-3 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shadow-[0_0_6px_rgba(34,197,94,0.6)] group-hover/item:shadow-[0_0_12px_rgba(34,197,94,0.8)] transition-shadow" />
                              <p className="text-foreground/90 text-sm leading-relaxed flex-1">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
