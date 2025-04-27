"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, user authentication, and payment processing.",
    image: "/e-commerce.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Mongoose",
      "Zod",
      "MongoDB",
      "Redux",
      "SSLCommerce",
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/safimiazi/e-commerce-backend",
    haveGithub: true,
    haveLiveLink: false,
  },
  {
    title: "Property Buy & Sell Platform (Frontend)",
    description:
      "This is a sleek, user-friendly frontend for a property buy and sell platform. Designed with modern UI/UX principles, it allows users to browse, filter, and explore property listings seamlessly. The interface is responsive, ensuring smooth navigation across all devices. Whether you’re buying or selling, this platform provides an intuitive experience for users to find their dream property with ease.",
    image: "/property-rent-sell-project-photo.png",
    technologies: ["React", "Tailwind CSS", "Axios", "React Router"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/safimiazi/ecommerce",
    haveGithub: false,
    haveLiveLink: false,
  },
  {
    title: "Video Conferencing App",
    description:
      "Real-time video conferencing application with features like screen sharing, chat, and room creation.",
    image: "/talk.png",
    technologies: ["React", "WebRTC", "Socket.io", "Node.js", "Express"],
    liveLink: "https://talk-tan.vercel.app",
    githubLink: "https://github.com/safimiazi/talk-main",
    haveGithub: true,
    haveLiveLink: true,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
              My Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card overflow-hidden border-0 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.haveGithub && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                    )}
                    {project.haveLiveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
