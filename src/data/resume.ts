export const personalInfo = {
  name: "Rahul Anand Wali",
  title: "Python Engineer · Data & GenAI Engineering · Vector Databases & RAG Pipelines",
  email: "rahulrah834@gmail.com",
  phone: "+91-6362662037",
  linkedin: "https://linkedin.com/in/rahul-wali",
  github: "https://github.com/Rahul-Wali",
  location: "Belagavi, Karnataka",
  availability: {
    type: "Hybrid / Onsite",
    cities: ["Pune", "Bangalore", "Mumbai", "Hyderabad", "Noida"],
    relocation: true,
    usEstOverlap: true,
  },
};

export const summary = `Fresher Python / Data Engineering aspirant (BE CSE, 2022–2026, CGPA 8.2) with hands-on internship and project experience building RAG pipelines, vector search systems, and data-driven applications in Python. Practical experience with FAISS vector databases, ETL pipelines, SQL, and Power BI dashboarding. Comfortable across the data lifecycle — from data cleaning and pipeline design to embeddings and vector-based retrieval — and eager to grow into cloud-based data engineering (AWS, Snowflake) through structured mentorship. Strong fundamentals, fast learner, and proactive problem-solver.`;

export const philosophy = "I work across the data lifecycle — from cleaning and transformation to embeddings, retrieval, machine learning and AI-powered applications.";

export const engineeringPipeline = [
  { id: "raw-data", label: "RAW DATA", description: "Unstructured documents, logs, sensor data, user inputs", tech: ["JSON", "CSV", "PDF", "APIs"] },
  { id: "processing", label: "DATA PROCESSING", description: "Cleaning, transformation, normalization, feature extraction", tech: ["Pandas", "NumPy", "SQL", "Regex"] },
  { id: "embeddings", label: "EMBEDDINGS", description: "Vector representations capturing semantic meaning", tech: ["Sentence Transformers", "OpenAI Embeddings", "HuggingFace"] },
  { id: "vector-db", label: "VECTOR DATABASE", description: "High-dimensional similarity search at scale", tech: ["FAISS", "ChromaDB", "Pinecone", "Redis"] },
  { id: "retrieval", label: "RETRIEVAL", description: "Semantic search, hybrid search, re-ranking", tech: ["ANN", "HNSW", "IVF", "BM25"] },
  { id: "ml-llm", label: "ML / LLM", description: "Classification, generation, reasoning, agentic workflows", tech: ["Scikit-learn", "Random Forest", "LLMs", "LangChain"] },
  { id: "response", label: "INTELLIGENT RESPONSE", description: "Structured outputs, confidence scores, citations", tech: ["FastAPI", "Streamlit", "JSON", "WebSockets"] },
];

export const experience = [
  {
    id: "suprmentr",
    role: "Python / Gen AI Engineering Intern",
    company: "SuprMentr Technologies Pvt Ltd",
    period: "Feb 2026 – May 2026",
    duration: "15 Weeks",
    domain: "AI with Cloud Computing",
    type: "VTU-Partnered Program",
    highlights: [
      "Engineered a complete RAG pipeline for an AI Healthcare Diagnosis Assistant",
      "Worked on document processing, symptom-vector creation, FAISS-based vector retrieval and LLM-based response generation",
      "Built a free-text symptom extraction pipeline with synonym mapping and fuzzy matching",
      "Integrated Random Forest classification with confidence scores and Top-3 predictions",
      "Implemented severity scoring, dynamic follow-up logic and recommendation generation",
      "Delivered a production-ready Streamlit application with custom UI, interactive dashboards and data management",
      "Commended for technical proficiency and problem-solving by the company's Director",
    ],
    workflow: [
      { step: "Documents", description: "Medical knowledge base ingestion" },
      { step: "Symptom Extraction", description: "Free-text parsing with NLP" },
      { step: "Vectorization", description: "Embeddings generation for symptoms" },
      { step: "FAISS Retrieval", description: "Semantic vector search" },
      { step: "Random Forest", description: "Classification with probabilities" },
      { step: "Confidence + Severity", description: "Scoring and risk assessment" },
      { step: "Response", description: "Structured diagnostic output" },
    ],
    tech: ["Python", "FAISS", "Scikit-learn", "NLP", "Streamlit", "RAG", "Random Forest", "Fuzzy Matching"],
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
    details: ["All 8 semesters completed", "Degree certificate awaited"],
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
    institution: "KRCE Society's English Medium School",
    period: "2020",
    percentage: "86.56%",
  },
];

export const certifications = [
  {
    id: "vtc-internship",
    name: "AI & Cloud Computing Internship",
    issuer: "SuprMentr Technologies / VTU",
    year: "2026",
  },
  {
    id: "infosys",
    name: "Python Web Developer",
    issuer: "Infosys Springboard",
    year: "2024",
  },
  {
    id: "google",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "In Progress",
    status: "in-progress",
  },
];

export const learningRoadmap = {
  foundation: ["Python", "SQL", "Pandas", "NumPy", "FAISS", "RAG", "Scikit-learn"],
  next: ["FastAPI", "LangChain", "LlamaIndex", "Redis", "Pinecone"],
  cloud: ["AWS", "Snowflake", "Azure OpenAI"],
  engineering: ["CI/CD", "GitHub Actions", "Agentic AI Workflows"],
};

export const socialLinks = [
  { name: "Email", href: "mailto:rahulrah834@gmail.com", icon: "mail" },
  { name: "LinkedIn", href: "https://linkedin.com/in/rahul-wali", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/Rahul-Wali", icon: "github" },
  { name: "Phone", href: "tel:+916362662037", icon: "phone" },
];