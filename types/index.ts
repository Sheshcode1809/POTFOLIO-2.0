export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  image: string
  featured: boolean
  metrics?: { label: string; value: string }[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
}

export interface Skill {
  name: string
  category: "languages" | "frameworks" | "ml" | "tools" | "cloud"
  proficiency: number
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}