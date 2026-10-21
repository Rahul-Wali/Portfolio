export const skillCategories = [
  {
    id: "languages",
    label: "LANGUAGES",
    color: "#22d3ee",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "C++"],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    color: "#818cf8",
    skills: ["React", "Vite", "HTML5", "CSS3", "Responsive UI", "React Query", "Accessibility"],
  },
  {
    id: "backend",
    label: "BACKEND",
    color: "#34d399",
    skills: ["Go services", "FastAPI", "REST APIs", "Request validation", "Background workflows"],
  },
  {
    id: "data",
    label: "DATA",
    color: "#fbbf24",
    skills: ["PostgreSQL", "SQL migrations", "RLS", "Database seeding", "Redis fundamentals"],
  },
  {
    id: "security",
    label: "SECURITY",
    color: "#f472b6",
    skills: ["OIDC / OAuth2", "JWT", "RBAC", "Tenant authorization", "Session handling"],
  },
  {
    id: "devops-qa",
    label: "DEVOPS / QA",
    color: "#94a3b8",
    skills: ["Docker", "Docker Compose", "Git / GitHub", "Linux / WSL", "Vitest", "Playwright", "CI/CD"],
  },
  {
    id: "ai",
    label: "AI / OTHER",
    color: "#c084fc",
    skills: ["RAG", "LLM integrations", "Prompt workflows", "FAISS", "Pandas", "NumPy"],
  },
  {
    id: "learning",
    label: "CURRENTLY LEARNING",
    color: "#71717a",
    skills: ["LangChain", "LlamaIndex", "Azure OpenAI", "FastAPI", "Redis", "Pinecone", "Agentic AI", "REST APIs"],
  },
];

export const aboutCards = [
  {
    id: "frontend",
    number: "01",
    label: "FRONTEND",
    description: "React · TypeScript · Vite · React Query · Accessibility",
    icon: "monitor",
    color: "#818cf8",
    details: [
      "Responsive, accessible interfaces in React and TypeScript",
      "Permission-aware navigation tied to user roles",
      "Server state managed with React Query",
    ],
  },
  {
    id: "backend",
    number: "02",
    label: "BACKEND & SECURITY",
    description: "Go · REST APIs · OIDC · JWT · RBAC",
    icon: "shield",
    color: "#34d399",
    details: [
      "Go services and REST APIs with request validation",
      "OIDC sessions and JWT-based authentication",
      "RBAC and tenant-level authorization",
    ],
  },
  {
    id: "data",
    number: "03",
    label: "DATA & DEVOPS",
    description: "PostgreSQL · Docker · Vitest · Playwright",
    icon: "database",
    color: "#fbbf24",
    details: [
      "PostgreSQL schemas, SQL migrations and row-level security",
      "Repeatable environments with Docker Compose and seeding",
      "Automated tests with Vitest and Playwright",
    ],
  },
  {
    id: "ai",
    number: "04",
    label: "AI APPLICATIONS",
    description: "RAG · LLM integrations · FAISS · Python",
    icon: "brain",
    color: "#c084fc",
    details: [
      "RAG pipelines with FAISS retrieval",
      "LLM integrations and prompt workflows",
      "NLP extraction and ML classification in Python",
    ],
  },
];
