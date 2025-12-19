"use client"

import { useI18n } from "@/lib/i18n-context"

export function TechStack() {
  const { t } = useI18n()

  const techCategories = [
    {
      key: "cloud",
      emoji: "☁️",
      technologies: [
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
        { name: "GCP", icon: "https://skillicons.dev/icons?i=gcp" },
        { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
      ],
    },
    {
      key: "version",
      emoji: "⚙️",
      technologies: [
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
      ],
    },
    {
      key: "deml",
      emoji: "🐍",
      technologies: [
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
        { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
        { name: "Scikit-learn", icon: "https://skillicons.dev/icons?i=sklearn" },
        { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
        { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
        { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark/E25A1C" },
      ],
    },
    {
      key: "streaming",
      emoji: "🔄",
      technologies: [
        { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20" },
        { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/017CEE" },
      ],
    },
    {
      key: "mlops",
      emoji: "📈",
      technologies: [{ name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow/0194E2" }],
    },
    {
      key: "databases",
      emoji: "🗄️",
      technologies: [
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "Snowflake", icon: "https://cdn.simpleicons.org/snowflake/29B5E8" },
      ],
    },
    {
      key: "os",
      emoji: "🖥️",
      technologies: [
        { name: "Windows", icon: "https://skillicons.dev/icons?i=windows" },
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "Debian", icon: "https://skillicons.dev/icons?i=debian" },
        { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
        { name: "Raspberry Pi", icon: "https://skillicons.dev/icons?i=raspberrypi" },
      ],
    },
    {
      key: "ides",
      emoji: "💻",
      technologies: [
        { name: "IntelliJ IDEA", icon: "https://skillicons.dev/icons?i=idea" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      ],
    },
    {
      key: "backend",
      emoji: "🌐",
      technologies: [
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "Spring", icon: "https://skillicons.dev/icons?i=spring" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      ],
    },
    {
      key: "design",
      emoji: "🎨",
      technologies: [
        { name: "Unreal Engine", icon: "https://skillicons.dev/icons?i=unrealengine" },
        { name: "Blender", icon: "https://skillicons.dev/icons?i=blender" },
      ],
    },
  ]

  return (
    <section id="technologies" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto glow-border-subtle rounded-2xl p-6 md:p-12 bg-card/30">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
            <span className="text-primary">{t("tech.title")}</span> Stack
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">{t("tech.subtitle")}</p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {techCategories.map((category) => (
            <div key={category.key} className="group">
              <div className="relative p-4 md:p-6 rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 glow-border">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <span className="text-xl md:text-2xl">{category.emoji}</span>
                  <h3 className="text-base md:text-lg font-bold text-primary font-mono">
                    {t(`tech.cat.${category.key}`)}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 md:py-3 rounded-md bg-secondary border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                      <span className="text-[10px] md:text-xs font-mono text-center leading-tight">{tech.name}</span>
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
