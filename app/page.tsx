import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { TechStack } from "@/components/tech-stack"
import { ProjectsSection } from "@/components/projects-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background overflow-x-auto pt-16">
        <div className="scan-line min-w-[1280px]">
          <div className="mx-auto max-w-7xl px-8">
            <div id="inicio">
              <HeroSection />
            </div>
            <div id="proyectos">
              <ProjectsSection />
            </div>
            <ArchitectureSection />
            <div id="tecnologias">
              <TechStack />
            </div>
            <ExperienceSection />
            <EducationSection />
            <CTASection />
          </div>
        </div>
      </main>
    </>
  )
}
