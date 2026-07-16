// app/sections/Skills.tsx
// import { FadeIn } from "@/components/animations/FadeIn"
const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Streamlit",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Jupyter Notebook",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technical Expertise
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            I build intelligent applications using machine learning,
            generative AI, data science, and modern web technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-5 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-blue-600 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}