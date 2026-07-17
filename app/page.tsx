"use client"

import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { ScrollProgress } from "@/components/ScrollProgress"
// import { LoadingScreen } from "@/components/LoadingScreen"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
// import { Testimonials } from "./sections/Testimonials"
// import { Blog } from "./sections/Blog"
import { Contact } from "./sections/Contact"
// import { Footer } from "./sections/Footer"

export default function Home() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
      
      {/* <Footer /> */}
    </>
  )
}