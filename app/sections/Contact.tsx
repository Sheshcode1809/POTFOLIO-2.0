// app/sections/Contact.tsx
"use client"

import { motion } from "framer-motion"
// import { FadeIn } from "@/components/animations/FadeIn"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MapPin } from "lucide-react"
import { SOCIAL_LINKS } from "@/constants/data"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sheprial007@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sheprial007@gmail.com",
    description: "Best for project inquiries and collaborations",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shesh-kanade",
    href: "https://www.linkedin.com/in/shesh-kanade/",
    description: "Professional networking and opportunities",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sheshcode1809",
    href: "https://github.com/Sheshcode1809",
    description: "Open source contributions and projects",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Contact"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* <FadeIn direction="left"> */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Open to Opportunities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am currently looking for full-time AI Engineering roles starting 2026.
                  Whether you have a challenging ML problem, need a production pipeline built,
                  or want to discuss the latest in AI research — I would love to hear from you.
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Available for relocation and remote work</span>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  Preferred Tech Stack
                </h4>
                <p className="text-sm text-muted-foreground">
                  Python • TesorFlow • Maching Learning • LLM • Agentic AI • RAG • ChromaDb
                </p>
              </div>
            </div>
          {/* </FadeIn> */}

          {/* <FadeIn direction="right" delay={0.2}> */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{method.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-sm text-muted-foreground truncate">{method.value}</div>
                    <div className="text-xs text-muted-foreground/70">{method.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          {/* </FadeIn> */}
        </div>
      </div>
    </section>
  )
}