// app/sections/Footer.tsx
"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { NAV_LINKS } from "@/constants/data"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              <span className="text-primary">S</span>K
            </span>
            <span className="text-muted-foreground">Shesh Kanade</span>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shesh Kanade
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}