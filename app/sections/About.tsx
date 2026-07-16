"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
// import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Introduction"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

                  <div className="relative z-10 text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                       SK
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground">
                      Shesh Kanade
                    </h3>

                    <p className="text-muted-foreground">
                      AI Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Building AI-powered solutions.
              </h3>

              <p className="text-muted-foreground leading-8">
                I am a Computer Science Engineering Graduate,
                specializing in Artificial Intelligence, Machine Learning,
                Data Science, and Full-Stack Development. I enjoy building
                intelligent applications that solve real-world problems.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}