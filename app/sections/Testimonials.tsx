"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Harsh Prajapati ",
    role: "Computer Engineer",
    company: "University",
    message:
      "Shesh consistently demonstrated strong problem-solving skills and quickly adapted to new AI technologies. His dedication to building production-quality applications was impressive.",
  },
  {
    name: "Vishal Mondal",
    role: "Agentic AI Engineering",
    company: "AI Community",
    message:
      "Shesh has a solid understanding of machine learning fundamentals and is always eager to learn. His projects reflect both technical depth and practical implementation.",
  },
  {
    name: "Yashkumar Desai",
    role: "Project Partner",
    company: "University",
    message:
      "During his final-year project, Shesh showed excellent analytical thinking and successfully delivered a complete AI solution from data preprocessing to deployment.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Testimonials"
          subtitle="What People Say"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition-all duration-300">
                <Quote
                  size={36}
                  className="text-blue-400 mb-6"
                />

                <p className="text-slate-300 leading-7 mb-8">
                  "{item.message}"
                </p>

                <div className="border-t border-slate-800 pt-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-blue-400 text-sm mt-1">
                    {item.role}
                  </p>

                  <p className="text-slate-500 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}