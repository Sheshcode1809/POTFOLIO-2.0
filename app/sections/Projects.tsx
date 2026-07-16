// app/sections/Projects.tsx

const projects = [
  {
    title: "Air Quality Risk Analysis",
    description:
      "Machine Learning system that predicts air quality trends and analyzes pollution risks using environmental data. Features interactive dashboards and predictive analytics.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Plotly",
      "Streamlit",
    ],
    github: "https://github.com/Sheshcode1809/Air_Quality_Risk_Analysis.git",
    demo: "#",
  },
  {
    title: "RAG PDF Chatbot",
    description:
      "Retrieval-Augmented Generation application that answers questions from PDF documents using vector embeddings and semantic search.",
    technologies: [
      "Python",
      "LangChain",
      "OpenAI",
      "Streamlit",
    ],
    github: "https://github.com/Sheshcode1809",
    demo: "#",
  },
  {
    title: "Steel Defect Detection",
    description:
      "Deep Learning application that detects surface defects in steel using Convolutional Neural Networks with image upload and prediction interface.",
    technologies: [
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Python",
      "Streamlit",
    ],
    github: "https://github.com/Sheshcode1809/Steel_Defect_Streamlit.git",
    demo: "#",
  },
  {
    title: "BrainWave AI",
    description:
      "Generative AI assistant powered by LLMs that supports text generation, summarization, and intelligent conversations.",
    technologies: [
      "OpenAI API",
      "Python",
      "Streamlit",
      "Prompt Engineering",
    ],
    github: "https://github.com/Sheshcode1809/BrainWave-AI.git",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400">
            Selected AI, Machine Learning, Data Science and Full Stack
            projects demonstrating practical problem solving and modern
            development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}