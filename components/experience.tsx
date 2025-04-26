"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Softvence Agency",
    period: "Apr 2025 - Present",
    location: "Mohakhali, Dhaka",
    description:
      "Working as a Full Stack Developer, building complete web applications using the MERN stack. Responsible for both frontend and backend development, database design, and API integration.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux", "TypeScript", "REST API"],
  },
  {
    title: "Frontend Developer",
    company: "Soft Task Ltd.",
    period: "Apr 2024 - Mar 2025",
    location: "Bashabo, Dhaka",
    description:
      "Worked on frontend development using React.js, Redux, and Tailwind CSS. Built responsive user interfaces and implemented new features for various client projects.",
    skills: ["React", "Redux", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    title: "Full Stack Developer",
    company: "Systech Digital Limited",
    period: "Feb 2024 - Apr 2024",
    location: "Remote",
    description:
      "Developed full-stack web applications using the MERN stack. Implemented RESTful APIs and integrated third-party services.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Work Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400">My professional journey as a developer</p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <Card className="glass-card overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                        <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
