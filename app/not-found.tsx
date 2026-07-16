"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            404
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-foreground mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <Button href="/" icon={<Home className="w-4 h-4" />}>
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  )
}