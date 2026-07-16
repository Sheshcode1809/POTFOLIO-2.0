"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "primary" | "accent" | "outline"
  className?: string
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary/10 text-primary border border-primary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "border border-border text-muted-foreground",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}