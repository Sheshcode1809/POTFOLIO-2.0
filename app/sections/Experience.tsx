// app/sections/Experience.tsx

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    role: "AI & Machine Learning Projects",
    company: "Personal Portfolio",
    duration: "2025 – Present",
    description:
      "Designed and developed end-to-end AI applications using Machine Learning, Deep Learning, and Generative AI. Built production-ready interfaces with Streamlit and modern web technologies.",
    achievements: [
      "Developed Air Quality Risk Analysis using Machine Learning",
      "Built a RAG-based PDF Question Answering System using LangChain and FAISS",
      "Created CNN-based Steel Defect Detection application",
      "Integrated OpenAI APIs into Generative AI applications",
    ],
  },
  {
    role: "Data Science & AI Developer",
    company: "Academic Projects",
    duration: "2024 – Present",
    description:
      "Worked on real-world data science problems involving predictive analytics, data visualization, feature engineering, and model evaluation.",
    achievements: [
      "Performed data preprocessing and exploratory data analysis",
      "Trained and evaluated regression and classification models",
      "Developed interactive dashboards using Plotly and Streamlit",
      "Implemented model optimization and performance evaluation",
    ],
  },
  {
    role: "Computer Science Engineering Student",
    company: "Final Year Engineering",
    duration: "2023 – Present",
    description:
      "Focused on Artificial Intelligence, Machine Learning, Data Science, Python, and Full Stack Development while building multiple portfolio-ready projects.",
    achievements: [
      "Completed several AI and Machine Learning projects",
      "Practiced Data Structures and Algorithms",
      "Learned modern React and Next.js development",
      "Worked with Git, GitHub, Docker, and SQL databases",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-400 uppercase tracking-widest font-semibold text-sm">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            My Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Practical experience gained through AI, Machine Learning, Data
            Science, and Full Stack development projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-0 sm:gap-4">

              {/* ── Centre: dot + vertical line ── */}
              <div className="flex flex-col items-center shrink-0">
                {/* Dot */}
                <div className="mt-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-950 shrink-0 z-10" />
                {/* Vertical line below dot, except last item */}
                {index < experiences.length - 1 && (
                  <div className="flex-1 w-px bg-slate-700 mt-1" />
                )}
              </div>

              {/* ── Right column: content ── */}
              <div className={`pl-4 sm:pl-6 pb-10 sm:pb-12 ${index === experiences.length - 1 ? "pb-0" : ""}`}>
                {/* Year shown only on mobile (xs) above the title */}
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-xs font-semibold">
                  {exp.duration}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                  {exp.role}
                </h3>

                <p className="text-blue-400/80 text-sm sm:text-base mt-0.5 mb-3">
                  {exp.company}
                </p>

                <p className="text-slate-400 leading-7 mb-4 text-sm sm:text-base">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}