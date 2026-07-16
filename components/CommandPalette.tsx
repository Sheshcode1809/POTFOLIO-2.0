"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Github, Linkedin, Twitter, Mail, ExternalLink, Download, Home, User, Briefcase, FolderOpen, Wrench, BookOpen, MessageSquare } from "lucide-react"
import { PROJECTS, NAV_LINKS } from "@/constants/data"
import { cn } from "@/lib/utils"

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

const commands = [
  { id: "home", name: "Go to Home", icon: Home, action: "#", category: "Navigation" },
  { id: "about", name: "Go to About", icon: User, action: "#about", category: "Navigation" },
  { id: "experience", name: "Go to Experience", icon: Briefcase, action: "#experience", category: "Navigation" },
  { id: "projects", name: "Go to Projects", icon: FolderOpen, action: "#projects", category: "Navigation" },
  { id: "skills", name: "Go to Skills", icon: Wrench, action: "#skills", category: "Navigation" },
  { id: "blog", name: "Go to Blog", icon: BookOpen, action: "#blog", category: "Navigation" },
  { id: "contact", name: "Go to Contact", icon: MessageSquare, action: "#contact", category: "Navigation" },
  { id: "github", name: "Open GitHub", icon: Github, action: "https://github.com/sheshkanade", category: "Social", external: true },
  { id: "linkedin", name: "Open LinkedIn", icon: Linkedin, action: "https://linkedin.com/in/sheshkanade", category: "Social", external: true },
  { id: "twitter", name: "Open Twitter", icon: Twitter, action: "https://twitter.com/sheshkanade", category: "Social", external: true },
  { id: "email", name: "Send Email", icon: Mail, action: "mailto:shesh.kanade@email.com", category: "Social", external: true },
  { id: "resume", name: "Download Resume", icon: Download, action: "#", category: "Actions" },
]

PROJECTS.forEach((project) => {
  commands.push({
    id: `project-${project.id}`,
    name: `Project: ${project.title}`,
    icon: FolderOpen,
    action: project.githubUrl || "#",
    category: "Projects",
    external: true,
  })
})

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = useMemo(() => {
    if (!query) return commands
    const lowerQuery = query.toLowerCase()
    return commands.filter(
      (cmd) =>
        cmd.name.toLowerCase().includes(lowerQuery) ||
        cmd.category.toLowerCase().includes(lowerQuery)
    )
  }, [query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        const cmd = filteredCommands[selectedIndex]
        if (cmd) executeCommand(cmd)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex])

  const executeCommand = (cmd: typeof commands[0]) => {
    if (cmd.external) {
      window.open(cmd.action, "_blank")
    } else if (cmd.action === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (cmd.action.startsWith("#")) {
      const element = document.querySelector(cmd.action)
      if (element) element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
    setQuery("")
  }

  const groupedCommands = useMemo(() => {
    const groups: Record<string, typeof commands> = {}
    filteredCommands.forEach((cmd) => {
      if (!groups[cmd.category]) groups[cmd.category] = []
      groups[cmd.category].push(cmd)
    })
    return groups
  }, [filteredCommands])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-2xl mx-4 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands, projects, navigation..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                autoFocus
              />
              <kbd className="px-2 py-1 text-xs bg-muted rounded border border-border text-muted-foreground">
                ESC
              </kbd>
            </div>

            <div className="max-h-[400px] overflow-y-auto py-2">
              {Object.entries(groupedCommands).map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((cmd, idx) => {
                    const globalIndex = filteredCommands.indexOf(cmd)
                    const Icon = cmd.icon
                    return (
                      <motion.button
                        key={cmd.id}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                          globalIndex === selectedIndex
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        )}
                        onClick={() => executeCommand(cmd)}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="flex-1 text-left">{cmd.name}</span>
                        {cmd.external && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
                      </motion.button>
                    )
                  })}
                </div>
              ))}

              {filteredCommands.length === 0 && (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  No commands found for &quot;{query}&quot;
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 px-4 py-3 border-t border-border text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↵</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">ESC</kbd>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}