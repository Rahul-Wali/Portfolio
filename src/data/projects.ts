export const projects = [
  {
    id: "disease-detection-rag",
    title: "Disease Detection RAG",
    subtitle: "AI Healthcare Diagnostic Assistant",
    description: "An end-to-end retrieval-augmented generation system that processes free-text symptom inputs, performs semantic vector search over a medical knowledge base, and generates structured differential diagnoses with confidence scores and severity assessments.",
    problem: "Traditional symptom checkers rely on rigid decision trees. This project demonstrates how vector-based retrieval combined with ML classification can provide more nuanced, probability-ranked diagnostic suggestions from unstructured symptom descriptions.",
    architecture: [
      "Symptom datasets → Vector knowledge base via embeddings",
      "FAISS-powered approximate nearest neighbor search",
      "Random Forest classifier for differential diagnosis ranking",
      "Confidence scoring, severity levels, and dynamic follow-up generation",
      "Streamlit frontend with interactive dashboards",
    ],
    implementation: [
      "Built data processing pipeline for free-text symptom extraction with synonym mapping",
      "Implemented fuzzy matching for robust symptom recognition",
      "Designed vector knowledge base with FAISS for sub-millisecond retrieval",
      "Integrated Random Forest with Top-3 predictions and probability percentages",
      "Added severity scoring and dynamic follow-up question logic",
      "Delivered production-ready Streamlit application with custom UI",
    ],
    outcome: "Demonstrates an end-to-end retrieval and ranking workflow for structured diagnostic-style outputs. The system processes natural language symptoms, retrieves relevant medical context, and returns ranked predictions with confidence intervals — showcasing practical RAG architecture for domain-specific QA.",
    tech: ["Python", "FAISS", "Scikit-learn", "NLP", "Streamlit", "RAG", "Random Forest", "Fuzzy Matching"],
    github: "https://github.com/Rahul-Wali/Disease_detection-RAG-",
    visualization: {
      nodes: [
        { id: "symptoms", label: "Symptoms", position: [0, 0, 0], color: "#06b6d4" },
        { id: "embeddings", label: "Embeddings", position: [2, 0.5, 0], color: "#8b5cf6" },
        { id: "vector-search", label: "Vector Search", position: [4, 0, 0], color: "#ec4899" },
        { id: "classification", label: "ML Classification", position: [6, -0.5, 0], color: "#22c55e" },
        { id: "predictions", label: "Top-3 Predictions", position: [8, 0, 0], color: "#f59e0b" },
      ],
      edges: [
        { from: "symptoms", to: "embeddings" },
        { from: "embeddings", to: "vector-search" },
        { from: "vector-search", to: "classification" },
        { from: "classification", to: "predictions" },
      ],
    },
  },
  {
    id: "customer-behavior-analytics",
    title: "Customer Behavior Data Analytics",
    subtitle: "Retail Analytics & ETL Pipeline",
    description: "An end-to-end data engineering and analytics solution for retail customer behavior analysis. Built a complete ETL pipeline, performed cohort analysis and customer segmentation, and delivered actionable insights through interactive Power BI dashboards.",
    problem: "Retail businesses generate vast amounts of transactional data but struggle to extract actionable customer insights. This project demonstrates how structured data engineering pipelines can transform raw transaction logs into strategic business intelligence.",
    architecture: [
      "Raw transaction data → ETL pipeline (extraction, cleaning, transformation)",
      "Cohort analysis for retention and lifetime value modeling",
      "RFM-based customer segmentation using SQL and Pandas",
      "Power BI dashboards for stakeholder decision-making",
      "Revenue attribution by product category and customer segment",
    ],
    implementation: [
      "Built end-to-end ETL pipeline with Python and SQL",
      "Applied cohort analysis to track customer retention patterns",
      "Implemented customer segmentation (RFM analysis) using SQL and Pandas",
      "Created interactive Power BI dashboards with drill-down capabilities",
      "Identified top revenue-driving product categories for stakeholders",
      "Automated data refresh and dashboard update schedules",
    ],
    outcome: "Delivered a complete analytics solution enabling retail stakeholders to understand customer behavior, optimize inventory by category, and target high-value segments. The pipeline processes transaction data into actionable dashboards with automated refresh cycles.",
    tech: ["Python", "SQL", "Pandas", "Power BI", "ETL", "Cohort Analysis", "RFM Segmentation"],
    github: "https://github.com/Rahul-Wali/trend-analysis",
    visualization: {
      nodes: [
        { id: "raw-data", label: "Raw Data", position: [0, 0, 0], color: "#06b6d4" },
        { id: "etl", label: "ETL Pipeline", position: [2, 0.5, 0], color: "#8b5cf6" },
        { id: "cohort", label: "Cohort Analysis", position: [4, 0, 0], color: "#ec4899" },
        { id: "segmentation", label: "Segmentation", position: [6, -0.5, 0], color: "#22c55e" },
        { id: "dashboard", label: "Power BI Dashboard", position: [8, 0, 0], color: "#f59e0b" },
      ],
      edges: [
        { from: "raw-data", to: "etl" },
        { from: "etl", to: "cohort" },
        { from: "cohort", to: "segmentation" },
        { from: "segmentation", to: "dashboard" },
      ],
    },
  },
];

export const projectTags = {
  "disease-detection-rag": ["Python", "FAISS", "Scikit-learn", "NLP", "Streamlit", "RAG"],
  "customer-behavior-analytics": ["Python", "SQL", "Pandas", "Power BI", "ETL"],
};