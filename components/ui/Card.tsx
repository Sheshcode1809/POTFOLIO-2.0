"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className = "", hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl bg-card border border-border overflow-hidden",
        hover && "group cursor-pointer",
        glow && "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/20 before:via-accent/20 before:to-primary/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>
}

export function CardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}