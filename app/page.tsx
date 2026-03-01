import { GlobalBackground } from "@/components/GlobalBackground"
import { BottomBlur } from "@/components/BottomBlur"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { TechStack } from "@/components/tech-stack"
import { ProjectsSection } from "@/components/projects-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Fondo animado */}
      <GlobalBackground />

      {/* Blur de transición inferior */}
      <BottomBlur />

      <Navigation />

      <main className="relative z-10 min-h-screen pt-16">
        <div className="scan-line">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <section id="inicio">
              <HeroSection />
            </section>

            <section id="proyectos" className="section-box">
              <ProjectsSection />
            </section>

            <section id="arquitectura" className="section-box">
              <ArchitectureSection />
            </section>

            <section id="tecnologias" className="section-box">
              <TechStack />
            </section>

            <section id="experiencia" className="section-box">
              <ExperienceSection />
            </section>

            <section id="formacion" className="section-box">
              <EducationSection />
            </section>

            <CTASection />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
