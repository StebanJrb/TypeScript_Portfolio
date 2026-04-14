"use client"

import { useState } from "react"
import { GraduationCap, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface Education {
  institution: string
  degree: string
  period: string
  description: string
  activities: string
  focusAreas: string[]
}

const educationData: { es: Education[]; en: Education[] } = {
  es: [
    {
      institution: "Universidad Piloto de Colombia",
      degree: "Ingeniería de Sistemas",
      period: "Jun 2020 – Dic 2026",
      description:
        "Durante mi formación adquirí sólidos conocimientos en desarrollo de software, bases de datos, redes informáticas y gestión de proyectos tecnológicos. A través de proyectos académicos y prácticos, desarrollé habilidades en programación, arquitectura de software y administración de sistemas.",
      activities:
        "Miembro del grupo de investigación en tecnología y desarrollo de software · Participación en hackathons y competencias de programación · Tutor de programación para estudiantes de semestres inferiores · Voluntario en eventos de tecnología y emprendimiento",
      focusAreas: ["Java / Python / C++", "SQL & NoSQL", "Redes corporativas", "Arquitectura de software", "Scrum & Kanban"],
    },
    {
      institution: "Universidad Piloto de Colombia",
      degree: "Ingeniería de Telecomunicaciones",
      period: "Jun 2020 – Sep 2026",
      description:
        "Durante mi formación adquirí conocimientos en redes informáticas, protocolos de comunicación, infraestructura de telecomunicaciones y seguridad en redes. A través de proyectos prácticos, desarrollé habilidades en configuración de redes, análisis de tráfico y administración de sistemas de comunicación.",
      activities:
        "Miembro de Cisco Networking Academy · Participación en proyectos de redes y telecomunicaciones · Tutor en redes y protocolos de comunicación · Habilidades y certificaciones en redes y seguridad",
      focusAreas: ["LAN / WAN / Wi-Fi", "TCP/IP · MPLS · VoIP", "Firewalls & VPNs", "Linux & Windows Server", "Wireshark & Nagios"],
    },
  ],
  en: [
    {
      institution: "Universidad Piloto de Colombia",
      degree: "Systems Engineering",
      period: "Jun 2020 – Dec 2026",
      description:
        "During my training I acquired solid knowledge in software development, databases, computer networks, and technological project management. Through academic and practical projects, I developed skills in programming, software architecture, and systems administration.",
      activities:
        "Member of the research group on technology and software development · Participation in hackathons and programming competitions · Programming tutor for students in lower semesters · Volunteer at technology and entrepreneurship events",
      focusAreas: ["Java / Python / C++", "SQL & NoSQL", "Corporate networks", "Software architecture", "Scrum & Kanban"],
    },
    {
      institution: "Universidad Piloto de Colombia",
      degree: "Telecommunications Engineering",
      period: "Jun 2020 – Sep 2026",
      description:
        "During my training I acquired knowledge in computer networks, communication protocols, telecommunications infrastructure, and network security. Through hands-on projects, I developed skills in network configuration, traffic analysis, and communication systems administration.",
      activities:
        "Member of Cisco Networking Academy · Participation in networking and telecommunications projects · Tutor in networks and communication protocols · Skills and certifications in networks and security",
      focusAreas: ["LAN / WAN / Wi-Fi", "TCP/IP · MPLS · VoIP", "Firewalls & VPNs", "Linux & Windows Server", "Wireshark & Nagios"],
    },
  ],
}

export function EducationSection() {
  const { t, language } = useI18n()
  const [openActivities, setOpenActivities] = useState<Set<number>>(new Set())

  const education = educationData[language]

  const toggleActivity = (index: number) => {
    setOpenActivities(prev => {
      const next = new Set(prev)
      next.has(index) ? next.delete(index) : next.add(index)
      return next
    })
  }

  return (
    <section id="formacion" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-red-400 mix-blend-plus-lighter">{t("edu.title")}</h2>
          <div className="w-24 h-1 bg-red-400 mx-auto" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border border-white/10 bg-black/50 rounded-2xl p-8 w-full text-white">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-400/20 flex items-center justify-center border border-red-400/40 shadow-inner flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-red-400 drop-shadow-md" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white font-bold">{edu.degree}</h3>
                    <p className="text-red-400 font-mono text-base font-medium">{edu.institution}</p>
                  </div>
                </div>

                <span className="font-mono text-sm text-white px-4 py-2 border border-white/10 bg-white/5 rounded-xl font-medium whitespace-nowrap flex-shrink-0 sm:self-start">
                  {edu.period}
                </span>
              </div>

              <p className="text-white/90 text-sm mb-6 leading-relaxed bg-black/10 p-4 rounded-xl border border-white/10">{edu.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {edu.focusAreas.map((area, i) => (
                  <span key={i} className="text-[11px] font-mono bg-white/5 text-white/60 border border-white/10 px-3 py-1 rounded-full">
                    {area}
                  </span>
                ))}
              </div>

              {edu.activities && (
                <div className="border-t border-white/10 pt-4">
                  <button
                    onClick={() => toggleActivity(index)}
                    className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white/80 transition-colors"
                  >
                    <span className={`transition-transform duration-200 text-[10px] ${openActivities.has(index) ? "rotate-90" : ""}`}>
                      ▶
                    </span>
                    {openActivities.has(index) ? t("edu.activities.hide") : t("edu.activities.show")}
                  </button>
                  {openActivities.has(index) && (
                    <p className="mt-3 text-white/60 text-xs leading-relaxed font-mono">
                      {edu.activities}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 bg-black/50 rounded-3xl text-white">
            <span className="text-white/80 text-sm font-medium">{t("edu.linkedin.notice")}</span>
            <a
              href="https://www.linkedin.com/in/stebanjrb/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm font-bold ml-2 bg-red-400/20 px-3 py-1.5 rounded-lg border border-red-400/40"
            >
              {t("edu.linkedin.link")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
