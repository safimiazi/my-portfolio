"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <Card className="glass-card overflow-hidden border-0">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate Full Stack Developer with over 1 year of professional experience. I thrive on
                    building dynamic, user-centric web applications with modern technologies. My goal is to grow,
                    contribute meaningfully, and unlock my full potential in the world of tech.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With expertise in React, Node.js, and MongoDB, I specialize in creating responsive and performant
                    web applications. Currently working at Softvence Agency as a Full Stack Developer, I'm constantly
                    learning new technologies and approaches to stay at the forefront of web development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 animate-pulse"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Mohebulla Miazi"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
