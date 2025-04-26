import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Learning from "@/components/learning"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Learning />
      <Contact />
    </main>
  )
}
