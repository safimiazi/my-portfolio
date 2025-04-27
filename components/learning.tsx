"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaCode, FaRobot, FaBrain } from "react-icons/fa"
import { SiLeetcode, SiHackerrank, SiCodeforces } from "react-icons/si"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Learning() {
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

  const codingProfiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="h-6 w-6" />,
      url: "https://leetcode.com/u/IwpQKDJgQB/",
      username: "mohebullamiazi",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank className="h-6 w-6" />,
      url: "https://www.hackerrank.com/profile/mohibullamiazi",
      username: "mohibullamiazi",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces className="h-6 w-6" />,
      url: "https://codeforces.com/profile/mohebullamiazi",
      username: "mohebullamiazi",
    },
  ]

  return (
    <section id="learning" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Learning & Goals</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400">What I'm currently learning and where I'm headed</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden border-0 h-full">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <FaCode className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Current Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problem Solving with C/C++</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Currently focusing on improving algorithmic thinking and problem-solving skills using C and C++.
                      Working through data structures, algorithms, and competitive programming challenges.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Data Structures</Badge>
                      <Badge variant="secondary">Algorithms</Badge>
                      <Badge variant="secondary">C</Badge>
                      <Badge variant="secondary">C++</Badge>
                      <Badge variant="secondary">Competitive Programming</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Coding Profiles</h3>
                    <div className="space-y-3">
                      {codingProfiles.map((profile, index) => (
                        <Link
                          key={index}
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
                        >
                          <div className="text-primary">{profile.icon}</div>
                          <div>
                            <p className="font-medium">{profile.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">@{profile.username}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden border-0 h-full">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <FaRobot className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Future Goals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI Product Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Working towards developing AI-powered products that solve real-world problems. Learning machine
                      learning fundamentals and exploring AI frameworks to build innovative solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">AI Integration</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">TensorFlow</Badge>
                      <Badge variant="secondary">Product Development</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Advanced Full Stack Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Continuously improving my full stack development skills with a focus on scalable architecture,
                      microservices, and cloud infrastructure. Aiming to build enterprise-level applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Microservices</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Kubernetes</Badge>
                      <Badge variant="secondary">System Design</Badge>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      <FaBrain className="mr-2 h-4 w-4" />
                      Follow My Learning Journey
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
