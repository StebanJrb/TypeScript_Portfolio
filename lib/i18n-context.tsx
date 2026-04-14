"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.technologies": "Tecnologías",
    "nav.projects": "Soluciones",
    "nav.architecture": "Arquitectura",

    // Hero
    "hero.title1": "Data Engineer",
    "hero.title2": "ML Engineer",
    "hero.badge": "Disponible para oportunidades",
    "hero.description":
      "Transformando datos en insights accionables y construyendo sistemas de inteligencia artificial escalables. Especializado en pipelines de datos, arquitecturas cloud y modelos de ML en producción.",
    "hero.contact": "Contactar",
    "hero.stat1": "Años de experiencia",
    "hero.stat2": "Proyectos completados",
    "hero.stat3": "Datos procesados",

    // Experience
    "exp.title": "Experiencia Laboral",
    "exp.present": "Presente",
    "exp.linkedin.notice": "Para más detalles sobre mi experiencia y certificaciones, visita mi perfil de",
    "exp.linkedin.link": "LinkedIn",

    // Tech Stack
    "tech.title": "Stack Tecnológico",
    "tech.subtitle": "Herramientas y tecnologías que domino para crear soluciones de datos y ML",
    "tech.cat.cloud": "Computación en Nube & DevOps",
    "tech.cat.version": "Control de Versiones & Contenedores",
    "tech.cat.deml": "Ingeniería de Datos & Machine Learning",
    "tech.cat.streaming": "Pipelines de Datos & Streaming",
    "tech.cat.mlops": "MLOps & Ciclo de Vida de Modelos",
    "tech.cat.databases": "Bases de Datos & Data Warehouses",
    "tech.cat.os": "Sistemas Operativos & Shell",
    "tech.cat.backend": "Backend & Desarrollo Web",
    "tech.cat.ai": "Desarrollo con IA",

    // Projects
    "projects.title": "Destacados",
    "projects.subtitle": "Explora mis proyectos en Data Engineering y Machine Learning",
    "projects.de": "Ingeniería de Datos",
    "projects.ml": "Ingeniería de ML",
    "projects.cta": "¿Interesado en colaborar?",
    "projects.viewAll": "Ver todos los proyectos →",
    "projects.github": "Código GitHub",
    "projects.demo": "Demostración",

    // Architecture
    "arch.title": "Diseño de Arquitecturas",
    "arch.subtitle": "Cómo diseñaría sistemas complejos: decisiones técnicas, trade-offs y escalabilidad",
    "arch.decisions": "Decisiones Técnicas",
    "arch.tradeoffs": "Trade-offs",
    "arch.scalability": "Escalabilidad",
    "arch.note": "Pensamiento de arquitectura senior: decisiones basadas en contexto, no en hype",
    "arch.cta.title": "¿Listo para construir algo increíble juntos?",
    "arch.cta.description":
      "Si estás buscando un Data Engineer o ML Engineer que pueda diseñar sistemas escalables, optimizar pipelines de datos y llevar modelos de ML a producción, hablemos. Estoy disponible para nuevos proyectos y colaboraciones.",
    "arch.cta.button": "Volver al inicio y contactar",

    // Architecture systems
    "arch.system1": "Sistema de Recomendaciones a Escala",
    "arch.system2": "Pipeline de Datos a Escala (PB/día)",
    "arch.system3": "Sistema de Detección de Fraude en Tiempo Real",

    // Education
    "edu.title": "Formación",
    "edu.linkedin.notice": "Para más detalles sobre mi formación y certificaciones, visita mi perfil de",
    "edu.linkedin.link": "LinkedIn",
    "edu.activities.show": "Ver actividades y sociedades",
    "edu.activities.hide": "Ocultar actividades",

    // About preview
    "about.badge": "Sobre mí",
    "about.title": "Sobre mí",
    "about.description":
      "Soy Ingeniero de Sistemas y Telecomunicaciones formado en Colombia, pero mi verdadera formación ha sido la curiosidad. Pasé de entender cómo se mueven los datos por una red, a diseñar los sistemas que los transforman en inteligencia. Hoy trabajo en la intersección entre ingeniería de datos, machine learning y los sistemas de IA que están redefiniendo cómo las organizaciones toman decisiones. Siempre aprendiendo, siempre construyendo.",
    "about.stat1": "Años exp.",
    "about.stat2": "Proyectos",
    "about.stat3": "Datos proc.",

    // Contact
    "contact.title": "Hablemos",
    "contact.subtitle": "stebanruiz98@outlook.com · Respondo en menos de 72h",
    "contact.name": "Tu nombre",
    "contact.email": "Tu email",
    "contact.message": "Escribe tu mensaje aquí...",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.success.title": "¡Mensaje enviado!",
    "contact.success.message": "Gracias por escribirme. Te responderé pronto.",
    "contact.success.again": "Enviar otro mensaje",
    "contact.error.name": "Por favor ingresa tu nombre.",
    "contact.error.email": "Por favor ingresa tu email.",
    "contact.error.invalidEmail": "Ingresa un email válido.",
    "contact.error.message": "Por favor escribe un mensaje.",
    "contact.error.general": "No se pudo enviar el mensaje. Intenta nuevamente más tarde.",

    // Footer
    "footer.description":"Ingeniero en Sistemas y Telecomunicaciones de la Universidad Piloto de Colombia",
    "footer.copyright": "© 2026 Steban Ruiz Benavides. Todos los derechos reservados.",
    "footer.built": "Construido con",
    "footer.privacy":
      "Este sitio respeta tu privacidad. No se recopilan datos personales sin consentimiento explícito.",
    "footer.ventures.title": "Emprendimientos",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.technologies": "Technologies",
    "nav.projects": "Solutions",
    "nav.architecture": "Architecture",

    // Hero
    "hero.title1": "Data Engineer",
    "hero.title2": "ML Engineer",
    "hero.badge": "Available for opportunities",
    "hero.description":
      "Transforming data into actionable insights and building scalable artificial intelligence systems. Specialized in data pipelines, cloud architectures, and ML models in production.",
    "hero.contact": "Contact",
    "hero.stat1": "Years of experience",
    "hero.stat2": "Completed projects",
    "hero.stat3": "Data processed",

    // Experience
    "exp.title": "Work Experience",
    "exp.present": "Present",
    "exp.linkedin.notice": "For more details about my experience and certifications, visit my",
    "exp.linkedin.link": "LinkedIn profile",

    // Tech Stack
    "tech.title": "Tech Stack",
    "tech.subtitle": "Tools and technologies I master to create data and ML solutions",
    "tech.cat.cloud": "Cloud Computing & DevOps",
    "tech.cat.version": "Version Control & Containerization",
    "tech.cat.deml": "Data Engineering & Machine Learning",
    "tech.cat.streaming": "Data Pipelines & Streaming",
    "tech.cat.mlops": "MLOps & Model Lifecycle",
    "tech.cat.databases": "Databases & Data Warehouses",
    "tech.cat.os": "Operating Systems & Shell",
    "tech.cat.backend": "Backend & Web Development",
    "tech.cat.ai": "AI Development",

    // Projects
    "projects.title": "Featured",
    "projects.subtitle": "Explore my Data Engineering and Machine Learning projects",
    "projects.de": "Data Engineering",
    "projects.ml": "ML Engineering",
    "projects.cta": "Interested in collaborating?",
    "projects.viewAll": "View all projects →",
    "projects.github": "GitHub Code",
    "projects.demo": "Demo",

    // Architecture
    "arch.title": "Architecture Design",
    "arch.subtitle": "How I would design complex systems: technical decisions, trade-offs and scalability",
    "arch.decisions": "Technical Decisions",
    "arch.tradeoffs": "Trade-offs",
    "arch.scalability": "Scalability",
    "arch.note": "Senior architecture thinking: context-based decisions, not hype-driven",
    "arch.cta.title": "Ready to build something amazing together?",
    "arch.cta.description":
      "If you're looking for a Data Engineer or ML Engineer who can design scalable systems, optimize data pipelines, and take ML models to production, let's talk. I'm available for new projects and collaborations.",
    "arch.cta.button": "Back to top and contact",

    // Architecture systems
    "arch.system1": "Recommendation System at Scale",
    "arch.system2": "Data Pipeline at Scale (PB/day)",
    "arch.system3": "Real-Time Fraud Detection System",

    // Education
    "edu.title": "Education",
    "edu.linkedin.notice": "For more details about my education and certifications, visit my",
    "edu.linkedin.link": "LinkedIn profile",
    "edu.activities.show": "Show activities & societies",
    "edu.activities.hide": "Hide activities",

    // About preview
    "about.badge": "About me",
    "about.title": "About me",
    "about.description": "I am a Systems and Telecommunications Engineer trained in Colombia, but my true education has been curiosity. I went from understanding how data moves across a network to designing the systems that transform it into intelligence. Today I work at the intersection of data engineering, machine learning, and AI systems that are redefining how organizations make decisions. Always learning, always building.",
    "about.stat1": "Yrs exp.",
    "about.stat2": "Projects",
    "about.stat3": "Data proc.",

    // Contact
    "contact.title": "Let's Talk",
    "contact.subtitle": "stebanruiz98@outlook.com · I reply within 72h",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.message": "Write your message here...",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success.title": "Message sent!",
    "contact.success.message": "Thanks for reaching out. I'll get back to you soon.",
    "contact.success.again": "Send another message",
    "contact.error.name": "Please enter your name.",
    "contact.error.email": "Please enter your email.",
    "contact.error.invalidEmail": "Enter a valid email.",
    "contact.error.message": "Please write a message.",
    "contact.error.general": "Unable to send the message. Please try again later.",

    // Footer
    "footer.description":"Systems and Telecommunications Engineer from Universidad Piloto de Colombia",
    "footer.copyright": "© 2026 Steban Ruiz Benavides. All rights reserved.",
    "footer.built": "Built with",
    "footer.privacy": "This site respects your privacy. No personal data is collected without explicit consent.",
    "footer.ventures.title": "Ventures",
  },
}
