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
        <footer className="relative">
            {/* Back to top */}
            <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
            >
                <ArrowUp className="w-4 h-4" />
            </motion.button>

            <div className="mb-4 pt-2 border-t border-border text-center">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
                    Designed &amp; Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shesh Kanade
                </p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    )
}