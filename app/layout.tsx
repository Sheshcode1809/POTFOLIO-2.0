import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
// Ignore missing type declarations for this global CSS side-effect import
// TypeScript may require a global declaration file (e.g. global.d.ts) for .css modules
// @ts-ignore
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shesh Kanade | AI Engineer & ML Specialist",
  description:
    "Final-year Computer Science student specializing in AI, Machine Learning, and Python development. Building production-grade intelligent systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "PyTorch",
    "Computer Vision",
    "NLP",
    "Full Stack",
    "Next.js",
  ],
  authors: [{ name: "Shesh Kanade" }],
  openGraph: {
    title: "Shesh Kanade | AI Engineer & ML Specialist",
    description:
      "Final-year Computer Science student building production-grade AI systems.",
    type: "website",
    locale: "en_US",
    url: "https://sheshkanade.dev",
    siteName: "Shesh Kanade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shesh Kanade | AI Engineer",
    description: "Building intelligent systems with AI and ML",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body
    className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`} 
  >
        {children}
      </body>
    </html>
  )
}