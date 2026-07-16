"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TextReveal } from "@/components/animations/TextReveal"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={cn("mb-16", alignments[align], className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-4"
      >
        <span className="h-px w-8 bg-primary" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          {subtitle}
        </span>
        <span className="h-px w-8 bg-primary" />
      </motion.div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        <TextReveal text={title} />
      </h2>
    </div>
  )
}