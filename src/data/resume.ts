export const personalInfo = {
  name: "Rahul Anand Wali",
  title: "Full Stack Web Developer · React / TypeScript · Go / Python · AI Applications",
  email: "rahulrah834@gmail.com",
  phone: "+91-6362662037",
  linkedin: "https://linkedin.com/in/rahul-wali",
  github: "https://github.com/Rahul-Wali",
  location: "Belagavi, Karnataka",
  availability: {
    type: "Flexible for Hybrid Work",
    mode: "Hybrid",
    cities: ["Pune", "Bangalore", "Mumbai", "Hyderabad", "Noida"],
    usEstOverlap: true,
  },
};

export const summary = `Full Stack Web Developer with experience building multi-tenant HR platforms and AI-enabled applications using React, TypeScript, Go, Python, PostgreSQL, REST APIs, OIDC, and Docker. Strong foundation in frontend architecture, backend services, database design, authentication, authorization, automated testing, and production-focused problem solving.`;

export const philosophy =
  "I build across the stack — from accessible React interfaces and secure Go services to PostgreSQL schemas and AI-assisted features.";

export const engineeringPipeline = [
  {
    id: "frontend",
    label: "FRONTEND",
    description: "Responsive, accessible interfaces with permission-aware navigation and clean server-state handling.",
    tech: ["React", "TypeScript", "Vite", "React Query", "HTML5", "CSS3", "Accessibility"],
  },
  {
    id: "auth",
    label: "AUTH & SECURITY",
    description: "OIDC-based sessions, token handling, role-based access and tenant-level authorization.",
    tech: ["OIDC / OAuth2", "JWT", "RBAC", "Tenant authorization", "Session handling"],
  },
  {
    id: "backend",
    label: "BACKEND SERVICES",
    description: "Go services and REST APIs with request validation and background workflows.",
    tech: ["Go", "FastAPI", "REST APIs", "Request validation", "Background workflows"],
  },
  {
    id: "data",
    label: "DATA LAYER",
    description: "Relational schemas with SQL migrations, row-level security and seeded environments.",
    tech: ["PostgreSQL", "SQL migrations", "RLS", "Database seeding", "Redis fundamentals"],
  },
  {
    id: "quality",
    label: "TESTING & DEVOPS",
    description: "Containerised environments with unit and end-to-end tests to keep releases dependable.",
    tech: ["Docker", "Docker Compose", "Vitest", "Playwright", "CI/CD", "Git / GitHub", "Linux / WSL"],
  },
  {
    id: "ai",
    label: "AI & RAG",
    description: "LLM integrations and retrieval pipelines that power AI-assisted features and assistants.",
    tech: ["RAG", "LLM integrations", "Prompt workflows", "FAISS", "Pandas", "NumPy"],
  },
];

export const experience = [
  {
    id: "agentlabs",
    role: "Software Engineering Intern",
    company: "AgentLabs Technologies Pvt Ltd",
    location: "Bengaluru, India",
    period: undefined as string | undefined,
    duration: undefined as string | undefined,
    highlights: [
      "Contributed to the multi-tenant AgentLabs HRMS across employee, leave, attendance, recruitment, documents, asset, payroll, audit, and AI-assisted self-service workflows.",
      "Built and validated React/TypeScript UI and Go/PostgreSQL services with OIDC, tenant authorization, Docker, automated tests, and AI Assistant integrations.",
    ],
    groups: [
      {
        label: "Modules worked on",
        items: [
          "Employee",
          "Leave",
          "Attendance",
          "Recruitment",
          "Documents",
          "Assets",
          "Payroll",
          "Audit",
          "AI-assisted self-service",
        ],
      },
      {
        label: "Stack",
        items: ["React", "TypeScript", "Go", "PostgreSQL", "OIDC", "Docker"],
      },
    ],
  },
  {
    id: "suprmentr",
    role: "Python / Gen AI Engineering Intern",
    company: "SuprMentr Technologies Pvt Ltd",
    location: undefined as string | undefined,
    period: "Feb 2026 – May 2026",
    duration: "15 Weeks",
    highlights: [
      "Built a RAG pipeline with FAISS retrieval and LLM-style responses for a healthcare assistant.",
      "Developed NLP symptom extraction, disease classification, and a Streamlit diagnostic interface.",
    ],
    groups: [
      {
        label: "Stack",
        items: ["Python", "FAISS", "Scikit-learn", "NLP", "Streamlit", "RAG"],
      },
    ],
  },
];

export const education = [
  {
    id: "be",
    degree: "BE – Computer Science & Engineering",
    institution: "KLS Gogte Institute of Technology, Belagavi",
    board: "VTU",
    period: "2022–2026",
    cgpa: "8.2 / 10",
    details: ["All 8 semesters completed"],
  },
  {
    id: "pu",
    degree: "Pre-University (Science)",
    institution: "GGD Arts & SVS Science PU College",
    period: "2022",
    percentage: "85.33%",
  },
  {
    id: "sslc",
    degree: "High School (SSLC)",
    institution: "KRCE Society English Medium School",
    period: "2020",
    percentage: "86.56%",
  },
];

export const certifications = [
  {
    id: "vtu-internship",
    name: "AI & Cloud Computing Internship",
    issuer: "SuprMentr / VTU",
  },
  {
    id: "infosys",
    name: "Python Web Developer",
    issuer: "Infosys Springboard",
  },
  {
    id: "google",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    status: "in-progress",
  },
];

export const socialLinks = [
  { name: "Email", href: "mailto:rahulrah834@gmail.com", icon: "mail" },
  { name: "LinkedIn", href: "https://linkedin.com/in/rahul-wali", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/Rahul-Wali", icon: "github" },
  { name: "Phone", href: "tel:+916362662037", icon: "phone" },
];
