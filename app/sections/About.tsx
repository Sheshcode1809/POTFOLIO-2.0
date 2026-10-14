"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Introduction"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Avatar Card */}
          <div className="relative">
            <div className="aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

                <div className="relative z-10 text-center p-6 sm:p-8">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-6 rounded-full p-1 bg-gradient-to-br from-primary to-accent shadow-lg ring-4 ring-primary/10">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/profile.jpg"
                        alt="Shesh Kanade"
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    Shesh Kanade
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base mt-1">
                    AI Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-snug">
              Building AI-powered solutions.
            </h3>

            <p className="text-muted-foreground leading-8 text-sm sm:text-base">
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