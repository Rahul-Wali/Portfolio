export const projects = [
  {
    id: "agentlabs-hrms",
    title: "AgentLabs HRMS",
    subtitle: "Multi-tenant HR Platform",
    context: "AgentLabs Technologies",
    description:
      "A multi-tenant HR platform covering the employee lifecycle, built with React, TypeScript, Go and PostgreSQL.",
    highlights: [
      "Built tenant-aware workflows for employees, leave, attendance, recruitment, documents, assets, payroll, audit logs, and AI-assisted self-service.",
      "Implemented permission-aware navigation, OIDC sessions, API validation, lifecycle controls, and Docker-based E2E environments.",
    ],
    tech: ["React", "TypeScript", "Go", "PostgreSQL", "Docker", "OIDC"],
    github: undefined as string | undefined,
    visualization: {
      nodes: [
        { id: "ui", label: "React + TypeScript UI", color: "#818cf8" },
        { id: "oidc", label: "OIDC session", color: "#f472b6" },
        { id: "api", label: "Go API + validation", color: "#34d399" },
        { id: "db", label: "PostgreSQL (tenant data)", color: "#fbbf24" },
        { id: "e2e", label: "Docker E2E environment", color: "#94a3b8" },
      ],
    },
  },
  {
    id: "disease-detection-rag",
    title: "Disease Detection RAG",
    subtitle: "AI Healthcare Diagnostic Assistant",
    context: "VTU Capstone · SuprMentr Technologies",
    description:
      "A retrieval-augmented assistant that turns free-text symptoms into ranked, structured diagnostic suggestions.",
    highlights: [
      "Designed a RAG architecture: symptom datasets as vector knowledge base → FAISS retrieval → ML classifier → LLM-style structured response with confidence scores, severity levels, and precautions.",
      "Built NLP pipeline for symptom extraction from free-text input supporting synonym mapping, fuzzy matching, and intelligent follow-up question generation to refine predictions.",
      "Achieved differential diagnosis output (Top-3 possible diseases with probability percentages) — mimicking production Gen AI application response patterns.",
    ],
    tech: ["Python", "FAISS", "Scikit-learn", "NLP", "Streamlit", "RAG / Gen AI"],
    github: "https://github.com/Rahul-Wali/Disease_detection-RAG-" as string | undefined,
    visualization: {
      nodes: [
        { id: "input", label: "Free-text symptoms", color: "#22d3ee" },
        { id: "nlp", label: "NLP extraction", color: "#818cf8" },
        { id: "faiss", label: "FAISS retrieval", color: "#f472b6" },
        { id: "ml", label: "ML classifier", color: "#34d399" },
        { id: "output", label: "Top-3 + confidence", color: "#fbbf24" },
      ],
    },
  },
];
