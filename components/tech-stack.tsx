"use client"

import { useI18n } from "@/lib/i18n-context"

export function TechStack() {
  const { t } = useI18n()

  const technologies = {
    dataEngineering: [
      {
        name: "Apache Spark",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
      },
      {
        name: "Apache Kafka",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
      },
      {
        name: "Airflow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
      },
      { name: "dbt", icon: "/dbt-logo.png" },
      { name: "Snowflake", icon: "/abstract-geometric-snowflake.png" },
      {
        name: "BigQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      },
    ],
    machineLearning: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      {
        name: "Scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
      { name: "XGBoost", icon: "/xgboost-logo.jpg" },
      { name: "MLflow", icon: "/mlflow-logo.png" },
      { name: "Kubeflow", icon: "/kubeflow-logo.jpg" },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "LangChain", icon: "/langchain-logo.png" },
      { name: "Hugging Face", icon: "/hugging-face-logo.png" },
      { name: "OpenAI", icon: "/abstract-geometric-logo.png" },
    ],
  }

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">{t("tech.title")}</span> Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("tech.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Data Engineering */}
          <div className="group">
            <div className="relative p-8 rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-primary font-mono">{t("tech.de")}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {technologies.dataEngineering.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 px-4 py-3 rounded-md bg-secondary border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 object-contain" />
                    <span className="text-xs font-mono text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="group">
            <div className="relative p-8 rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-primary font-mono">{t("tech.ml")}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {technologies.machineLearning.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 px-4 py-3 rounded-md bg-secondary border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 object-contain" />
                    <span className="text-xs font-mono text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
