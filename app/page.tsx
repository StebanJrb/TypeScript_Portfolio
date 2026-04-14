"use client"

import React, { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { TechStack } from "@/components/tech-stack"
import { ProjectsSection } from "@/components/projects-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { Footer } from "@/components/footer"
import { AboutPreviewSection } from "@/components/about-preview-section"
import { ContactSection } from "@/components/contact-section"

// Background Components
import LiquidChrome from "@/components/LiquidChrome"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <>
      <div className="fixed inset-0 z-0">
        {activeTab === "home" && (
          <>
            <LiquidChrome
              baseColor={[0, 0.1, 0.4]}
              speed={0.3}
              amplitude={0.4}
              interactive={false}
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        )}
        {activeTab === "solutions" && (
          <LiquidChrome
            baseColor={[0.0, 0.15, 0.05]}
            speed={0.25}
            amplitude={0.35}
            frequencyX={2.5}
            frequencyY={2}
            interactive={false}
          />
        )}
        {activeTab === "about" && (
          <LiquidChrome
            baseColor={[0.35, 0.04, 0.04]}
            speed={0.25}
            amplitude={0.4}
            frequencyX={2.5}
            frequencyY={2}
            interactive={false}
          />
        )}
      </div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10 min-h-screen pt-20 pb-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          {activeTab === "home" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-16">
              <section id="inicio" className="p-8 md:p-12">
                <HeroSection />
              </section>
              <AboutPreviewSection />
              <ContactSection />
            </div>
          )}

          {activeTab === "solutions" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-16 pt-12" style={{ "--color-accent": "#22c55e" } as React.CSSProperties}>
              <div className="border border-emerald-500/15 bg-black/50 rounded-3xl">
                <section id="tecnologias" className="p-8 md:p-12">
                  <TechStack />
                </section>
              </div>

              <div className="border border-emerald-500/15 bg-black/50 rounded-3xl">
                <section id="arquitectura" className="p-8 md:p-12">
                  <ArchitectureSection />
                </section>
              </div>

              <div className="border border-emerald-500/15 bg-black/50 rounded-3xl">
                <section id="proyectos" className="p-8 md:p-12">
                  <ProjectsSection />
                </section>
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-16 pt-12" style={{ "--color-accent": "#ef4444" } as React.CSSProperties}>
              <div className="border border-red-500/15 bg-black/50 rounded-3xl">
                <section id="experiencia" className="p-8 md:p-12">
                  <ExperienceSection />
                </section>
              </div>

              <div className="border border-red-500/15 bg-black/50 rounded-3xl">
                <section id="formacion" className="p-8 md:p-12">
                  <EducationSection />
                </section>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}
