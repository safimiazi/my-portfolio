"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({ type: null, message: null })

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

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })
  
    // Collect form data using FormData API
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
  
    console.log("Form data:", formData)
  
    try {
      // Send the form data to the API using a POST request
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const result = await response.json()
  
      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon.",
        })
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
      } else {
        throw new Error(result.error || "Something went wrong.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
  
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Let's work together!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden border-0 h-full">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <a
                          href="mailto:mohibullamiazi@gmail.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          mohibullamiazi@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                        <a href="tel:+8801958687166" className="font-medium hover:text-primary transition-colors">
                          +880 1958 687166
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      I'm currently available for freelance work. If you have a project that you want to get started,
                      think you need my help with something, or just want to say hello, then get in touch.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden border-0">
                <CardContent className="p-6">
                  <form
                    onSubmit={handleSubmit}
                    
                    className="space-y-4"
                  >
                    {/* FormSubmit configuration */}
                    <input type="hidden" name="_subject" value="New message from portfolio website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://mohebulla-portfolio.vercel.app/thank-you" />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/50 dark:bg-gray-800/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-white/50 dark:bg-gray-800/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        className="bg-white/50 dark:bg-gray-800/50"
                      />
                    </div>

                    {formStatus.type && (
                      <div
                        className={`p-3 rounded-md ${
                          formStatus.type === "success"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                            : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                        } flex items-start gap-2`}
                      >
                        {formStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        )}
                        <span>{formStatus.message}</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                     
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {isSubmitting && (
                      //  give me spiner
                      <svg
                        className="animate-spin h-4 w-4 ml-2 text-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      > 
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1h9a2.5 2.5 0 1 0-9 0z"
                        ></path>
                      </svg>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
