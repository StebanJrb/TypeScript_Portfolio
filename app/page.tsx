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
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <div className="scan-line">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div id="inicio">
              <HeroSection />
            </div>
            <div id="proyectos" className="border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 glow-border-subtle">
              <ProjectsSection />
            </div>
            <div id="arquitectura" className="border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 glow-border-subtle">
              <ArchitectureSection />
            </div>
            <div id="tecnologias" className="border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 glow-border-subtle">
              <TechStack />
            </div>
            <div id="experiencia" className="border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 glow-border-subtle">
              <ExperienceSection />
            </div>
            <div id="formacion" className="border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 glow-border-subtle">
              <EducationSection />
            </div>
            <CTASection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
