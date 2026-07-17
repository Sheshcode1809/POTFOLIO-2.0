// app/sections/Experience.tsx

const experiences = [
  {
    role: "AI & Machine Learning Projects",
    company: "Personal Portfolio",
    duration: "2025 - Present",
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
    duration: "2024 - Present",
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
    duration: "2023 - Present",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative border-l border-slate-700 ml-3 sm:ml-4 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-10 sm:mb-12 last:mb-0"
            >
              <div className="absolute -left-[13px] top-1 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-950 shrink-0" />

              <span className="text-xs sm:text-sm text-blue-400">
                {exp.duration}
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold mt-2 leading-snug">
                {exp.role}
              </h3>

              <p className="text-slate-300 mb-3 text-sm sm:text-base">
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
          ))}
        </div>
      </div>
    </section>
  );
}