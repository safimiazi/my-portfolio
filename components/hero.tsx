"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Typewriter from "typewriter-effect"
import Link from "next/link"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a link to the resume file and trigger download
    const link = document.createElement("a")
    link.href = "/mohebulla-miazi-resume.pdf" // Path to your resume file
    link.download = "Mohebulla-Miazi-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center pt-16 section-padding">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-spaceGrotesk gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Mohebulla Miazi
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.div
            className="text-lg md:text-xl font-medium text-primary h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Typewriter
              options={{
                strings: ["TypeScript", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button className="gap-2" onClick={scrollToContact}>
              <Send className="h-4 w-4" />
              Hire Me
            </Button>
            <Button variant="outline" className="gap-2" onClick={downloadResume}>
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link href="https://github.com/mohebullamiazi" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:scale-110 transition-all"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/mohebullamiazi" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:scale-110 transition-all"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
