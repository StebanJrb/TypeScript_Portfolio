"use client"

import { useI18n } from "@/lib/i18n-context"

interface TechItem {
  name: string
  icon: string
  cat: string
}

// Row 1: Cloud/DevOps → Data/ML → Streaming → MLOps → Databases
const rowOne: TechItem[] = [
  { name: "AWS",            icon: "https://skillicons.dev/icons?i=aws",                     cat: "tech.cat.cloud" },
  { name: "GCP",            icon: "https://skillicons.dev/icons?i=gcp",                     cat: "tech.cat.cloud" },
  { name: "Docker",         icon: "https://skillicons.dev/icons?i=docker",                  cat: "tech.cat.cloud" },
  { name: "Kubernetes",     icon: "https://skillicons.dev/icons?i=kubernetes",              cat: "tech.cat.cloud" },
  { name: "Python",         icon: "https://skillicons.dev/icons?i=python",                  cat: "tech.cat.deml" },
  { name: "PyTorch",        icon: "https://skillicons.dev/icons?i=pytorch",                 cat: "tech.cat.deml" },
  { name: "TensorFlow",     icon: "https://skillicons.dev/icons?i=tensorflow",              cat: "tech.cat.deml" },
  { name: "PySpark",        icon: "https://cdn.simpleicons.org/apachespark/E25A1C",         cat: "tech.cat.streaming" },
  { name: "Apache Kafka",   icon: "https://cdn.simpleicons.org/apachekafka/ffffff",         cat: "tech.cat.streaming" },
  { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/017CEE",       cat: "tech.cat.streaming" },
  { name: "MLflow",         icon: "https://cdn.simpleicons.org/mlflow/0194E2",              cat: "tech.cat.mlops" },
  { name: "PostgreSQL",     icon: "https://skillicons.dev/icons?i=postgres",                cat: "tech.cat.databases" },
  { name: "Snowflake",      icon: "https://cdn.simpleicons.org/snowflake/29B5E8",           cat: "tech.cat.databases" },
  { name: "MySQL",          icon: "https://skillicons.dev/icons?i=mysql",                   cat: "tech.cat.databases" },
  { name: "MongoDB",        icon: "https://skillicons.dev/icons?i=mongodb",                 cat: "tech.cat.databases" },
]

// Row 2: OS/Shell → Backend → Data libs → Version Control → IDEs → Design → AI Development
const rowTwo: TechItem[] = [
  { name: "Linux",          icon: "https://skillicons.dev/icons?i=linux",                   cat: "tech.cat.os" },
  { name: "Debian",         icon: "https://skillicons.dev/icons?i=debian",                  cat: "tech.cat.os" },
  { name: "Bash",           icon: "https://skillicons.dev/icons?i=bash",                    cat: "tech.cat.os" },
  { name: "Windows",        icon: "https://skillicons.dev/icons?i=windows",                 cat: "tech.cat.os" },
  { name: "Raspberry Pi",   icon: "https://skillicons.dev/icons?i=raspberrypi",             cat: "tech.cat.os" },
  { name: "Java",           icon: "https://skillicons.dev/icons?i=java",                    cat: "tech.cat.backend" },
  { name: "Spring",         icon: "https://skillicons.dev/icons?i=spring",                  cat: "tech.cat.backend" },
  { name: "Node.js",        icon: "https://skillicons.dev/icons?i=nodejs",                  cat: "tech.cat.backend" },
  { name: "NumPy",          icon: "https://cdn.simpleicons.org/numpy/013243",               cat: "tech.cat.deml" },
  { name: "Pandas",         icon: "https://cdn.simpleicons.org/pandas/150458",              cat: "tech.cat.deml" },
  { name: "Git",            icon: "https://skillicons.dev/icons?i=git",                     cat: "tech.cat.version" },
  { name: "GitHub",         icon: "https://skillicons.dev/icons?i=github",                  cat: "tech.cat.version" },
  { name: "Claude Code",    icon: "/Claude.png",            cat: "tech.cat.ai" },
  { name: "Antigravity",    icon: "/Antigravity.png",        cat: "tech.cat.ai" },
]

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: TechItem[]
  direction: "left" | "right"
  duration: number
}) {
  const { t } = useI18n()
  const doubled = [...items, ...items]

  const animClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse"

  return (
    <div className="overflow-hidden w-full relative rounded-2xl">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none rounded-l-2xl" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none rounded-r-2xl" />

      <div
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((tech, i) => {
          const prevCat = i > 0 ? doubled[i - 1].cat : null
          const showSeparator = prevCat !== null && prevCat !== tech.cat

          return (
            <div key={`${tech.name}-${i}`} className="flex items-center flex-shrink-0">
              {showSeparator && (
                <div className="flex items-center mx-3 gap-2.5 flex-shrink-0">
                  <div className="h-8 w-px bg-white/10" />
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">
                    {t(tech.cat)}
                  </span>
                </div>
              )}
              <div className="group flex flex-col items-center gap-2 px-4 py-3 cursor-default flex-shrink-0">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="text-[10px] md:text-xs font-mono text-center leading-tight text-white/60 group-hover:text-white/90 transition-colors duration-200 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TechStack() {
  const { t } = useI18n()

  return (
    <div id="tecnologias" className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance text-white/90">
            <span className="text-white font-black">{t("tech.title")}</span>
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={rowOne} direction="left"  duration={55} />
          <MarqueeRow items={rowTwo} direction="right" duration={50} />
        </div>
      </div>
    </div>
  )
}
