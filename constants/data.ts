import { Project, Experience, Skill, Testimonial, SocialLink } from "@/types"

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  // { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sheshkanade", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sheshkanade", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/sheshkanade", icon: "twitter" },
  { name: "Email", url: "mailto:shesh.kanade@email.com", icon: "mail" },
]

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NeuralFlow",
    description: "A production-grade MLOps platform for training, deploying, and monitoring deep learning models at scale. Features automated hyperparameter tuning, model versioning, and real-time inference monitoring.",
    tags: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes", "React"],
    category: "ml",
    githubUrl: "https://github.com/sheshkanade/neuralflow",
    liveUrl: "https://neuralflow.ai",
    image: "/projects/neuralflow.jpg",
    featured: true,
    metrics: [
      { label: "Models Deployed", value: "50+" },
      { label: "Inference Latency", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "2",
    title: "VisionLens",
    description: "Real-time computer vision pipeline for industrial quality inspection using YOLOv8 and custom CNN architectures. Processes 4K video streams at 60fps with sub-millisecond object detection.",
    tags: ["Python", "OpenCV", "YOLO", "TensorRT", "NVIDIA", "FastAPI"],
    category: "ml",
    githubUrl: "https://github.com/sheshkanade/visionlens",
    liveUrl: "https://visionlens.io",
    image: "/projects/visionlens.jpg",
    featured: true,
    metrics: [
      { label: "FPS", value: "60" },
      { label: "mAP", value: "94.2%" },
      { label: "Latency", value: "12ms" },
    ],
  },
  {
    id: "3",
    title: "DocuMind",
    description: "Intelligent document processing system using transformer-based NLP models. Extracts structured data from unstructured documents with 98% accuracy. Supports 15+ document types including invoices, contracts, and medical records.",
    tags: ["Python", "Transformers", "LangChain", "PostgreSQL", "Next.js", "Tailwind"],
    category: "ai",
    githubUrl: "https://github.com/sheshkanade/documind",
    liveUrl: "https://documind.app",
    image: "/projects/documind.jpg",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Documents", value: "1M+" },
      { label: "Languages", value: "12" },
    ],
  },
  {
    id: "4",
    title: "Predicta",
    description: "Time-series forecasting platform for financial markets and supply chain optimization. Uses ensemble methods combining LSTM, Prophet, and XGBoost for highly accurate predictions.",
    tags: ["Python", "Pandas", "XGBoost", "LSTM", "Plotly", "Streamlit"],
    category: "ml",
    githubUrl: "https://github.com/sheshkanade/predicta",
    image: "/projects/predicta.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "ChatGenius",
    description: "Enterprise-grade conversational AI assistant with RAG architecture. Integrates with company knowledge bases to provide accurate, contextual responses with source citations.",
    tags: ["Python", "LangChain", "OpenAI", "Pinecone", "Next.js", "TypeScript"],
    category: "ai",
    githubUrl: "https://github.com/sheshkanade/chatgenius",
    liveUrl: "https://chatgenius.dev",
    image: "/projects/chatgenius.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "DataForge",
    description: "Automated data pipeline framework for ETL operations. Features visual workflow builder, real-time monitoring, and intelligent data quality checks with anomaly detection.",
    tags: ["Python", "Apache Airflow", "dbt", "Snowflake", "React", "D3.js"],
    category: "data",
    githubUrl: "https://github.com/sheshkanade/dataforge",
    image: "/projects/dataforge.jpg",
    featured: false,
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "TechCorp AI",
    role: "AI Engineering Intern",
    period: "Jun 2025 – Present",
    description: "Building production ML pipelines for real-time recommendation systems serving 2M+ daily users. Optimized model inference latency by 40% through quantization and TensorRT optimization. Implemented A/B testing framework for model evaluation.",
    technologies: ["Python", "PyTorch", "Kubernetes", "AWS", "MLflow"],
    current: true,
  },
  {
    id: "2",
    company: "DataVision Labs",
    role: "Machine Learning Engineer (Freelance)",
    period: "Jan 2025 – May 2025",
    description: "Developed computer vision solutions for automated quality inspection in manufacturing. Built custom YOLOv8 models achieving 94.2% mAP. Deployed edge inference on NVIDIA Jetson devices.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorRT", "Docker"],
  },
  {
    id: "3",
    company: "University Research Lab",
    role: "Research Assistant",
    period: "Aug 2024 – Dec 2024",
    description: "Published research on transformer-based medical image analysis. Implemented attention mechanisms for improved diagnostic accuracy. Co-authored paper accepted at IEEE conference.",
    technologies: ["Python", "Transformers", "PyTorch", "WandB", "LaTeX"],
  },
]

export const SKILLS: Skill[] = [
  { name: "Python", category: "languages", proficiency: 95 },
  { name: "TypeScript", category: "languages", proficiency: 85 },
  { name: "SQL", category: "languages", proficiency: 80 },
  { name: "PyTorch", category: "frameworks", proficiency: 90 },
  { name: "TensorFlow", category: "frameworks", proficiency: 75 },
  { name: "FastAPI", category: "frameworks", proficiency: 88 },
  { name: "Next.js", category: "frameworks", proficiency: 85 },
  { name: "React", category: "frameworks", proficiency: 82 },
  { name: "Transformers", category: "ml", proficiency: 92 },
  { name: "LangChain", category: "ml", proficiency: 85 },
  { name: "YOLO / CV", category: "ml", proficiency: 88 },
  { name: "NLP", category: "ml", proficiency: 90 },
  { name: "Docker", category: "tools", proficiency: 85 },
  { name: "Kubernetes", category: "tools", proficiency: 70 },
  { name: "Git", category: "tools", proficiency: 90 },
  { name: "AWS", category: "cloud", proficiency: 78 },
  { name: "GCP", category: "cloud", proficiency: 72 },
  { name: "Azure ML", category: "cloud", proficiency: 68 },
]

// export const TESTIMONIALS: Testimonial[] = [
//   {
//     id: "1",
//     name: "Dr. Arun Patel",
//     role: "Principal Scientist",
//     company: "TechCorp AI",
//     content: "Shesh is one of the most talented AI engineers I have worked with. His ability to translate complex research into production-ready systems is exceptional. The recommendation pipeline he built reduced our inference costs by 60%.",
//     avatar: "/avatars/arun.jpg",
//   },
//   {
//     id: "2",
//     name: "Priya Sharma",
//     role: "Engineering Manager",
//     company: "DataVision Labs",
//     content: "Working with Shesh was a game-changer for our quality inspection system. His deep understanding of both computer vision and software engineering delivered results that exceeded our expectations.",
//     avatar: "/avatars/priya.jpg",
//   },
//   {
//     id: "3",
//     name: "Prof. Rajesh Kumar",
//     role: "Department Head",
//     company: "University CS Department",
//     content: "Shesh demonstrates rare combination of theoretical depth and practical implementation skills. His research contributions have been recognized at top-tier conferences. A future leader in AI.",
//     avatar: "/avatars/rajesh.jpg",
//   },
// ]
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Harsh Prajapati ",
    role: "Computer Engineer",
    company: "University",
    content: "Shesh consistently demonstrated strong problem-solving skills and quickly adapted to new AI technologies. His dedication to building production-quality applications was impressive.",
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: "2",
    name: "Vishal Mondal",
    role: "Agentic AI Engineering",
    company: "AI Community",
    content: "Shesh has a solid understanding of machine learning fundamentals and is always eager to learn. His projects reflect both technical depth and practical implementation.",
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: "3",
    name: "Yashkumar Desai",
    role: "Project Partner",
    company: "University",
    content: "During his final-year project, Shesh showed excellent analytical thinking and successfully delivered a complete AI solution from data preprocessing to deployment.",
    avatar: "/avatars/rajesh.jpg",
  },
];
// export const BLOG_POSTS: BlogPost[] = [
//   {
//     id: "1",
//     title: "Building Production-Ready LLM Applications",
//     excerpt: "A comprehensive guide to architecting, deploying, and monitoring large language model applications in production environments with proper observability and cost optimization.",
//     date: "2026-06-15",
//     readTime: "12 min read",
//     tags: ["LLM", "MLOps", "Production"],
//     slug: "building-production-llm-apps",
//   },
//   {
//     id: "2",
//     title: "Optimizing YOLO for Edge Deployment",
//     excerpt: "Techniques for reducing model size and improving inference speed on resource-constrained devices while maintaining detection accuracy for real-world applications.",
//     date: "2026-05-22",
//     readTime: "8 min read",
//     tags: ["Computer Vision", "Edge AI", "Optimization"],
//     slug: "optimizing-yolo-edge",
//   },
//   {
//     id: "3",
//     title: "RAG Architecture: Beyond Basic Implementation",
//     excerpt: "Advanced retrieval-augmented generation patterns including hybrid search, re-ranking strategies, and contextual chunking for enterprise knowledge bases.",
//     date: "2026-04-10",
//     readTime: "10 min read",
//     tags: ["RAG", "NLP", "Architecture"],
//     slug: "rag-architecture-advanced",
//   },
// ]

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Models Deployed", value: 50, suffix: "+" },
  { label: "Lines of Code", value: 100, suffix: "K+" },
]