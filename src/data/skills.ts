import { Connection } from "@/types";

export interface RawSkillNode {
  id: string;
  name: string;
  category: "programming" | "ml" | "ai" | "dev" | "concepts" | "hub";
  radius: number;
  level: string;
  desc: string;
}

export const colors = {
  programming: "#00BFFF", // sky blue
  ml: "#00FFFF",          // cyan
  ai: "#8B5CF6",          // purple
  dev: "#A7F3D0",          // light green
  concepts: "#FCD34D",     // yellow
  hub: "#FFFFFF",
};

export const rawNodes: RawSkillNode[] = [
  // Central Hub
  { id: "core", name: "Sanyam Rana", category: "hub", radius: 25, level: "AI/ML Core", desc: "IIT Jodhpur Electrical Engineering student building smart AI systems." },
  
  // Programming Hub and skills
  { id: "prog_hub", name: "Programming", category: "programming", radius: 15, level: "Hub", desc: "Core languages used for scripting, engineering, and data manipulation." },
  { id: "python", name: "Python", category: "programming", radius: 10, level: "Advanced", desc: "Main tool for ML/AI. Proficient in OOP, scripting, libraries, and clean coding." },
  { id: "cpp", name: "C++", category: "programming", radius: 10, level: "Intermediate", desc: "Used for competitive programming, OOP design, and performance-critical systems." },
  { id: "sql", name: "SQL", category: "programming", radius: 10, level: "Intermediate", desc: "Database querying, joining tables, data wrangling, and structured schemas." },

  // ML Hub and skills
  { id: "ml_hub", name: "Machine Learning", category: "ml", radius: 15, level: "Hub", desc: "Design and construction of algorithms that learn from data." },
  { id: "sklearn", name: "Scikit-Learn", category: "ml", radius: 10, level: "Advanced", desc: "Building pipelines, classification, regression, clustering, and cross-validation." },
  { id: "numpy", name: "NumPy", category: "ml", radius: 10, level: "Advanced", desc: "Vectorized operations, linear algebra, array manipulation, mathematical computations." },
  { id: "pandas", name: "Pandas", category: "ml", radius: 10, level: "Advanced", desc: "Data cleaning, aggregation, merging datasets, time series, and exploratory analysis." },
  { id: "feature_eng", name: "Feature Eng.", category: "ml", radius: 10, level: "Advanced", desc: "Imputation, encoding categorical variables, scaling, selection, scaling data pipelines." },
  { id: "eval", name: "Model Eval.", category: "ml", radius: 10, level: "Advanced", desc: "Confusion matrix, ROC-AUC, F1-Score, Bias-Variance trade-offs, learning curves." },

  // AI/LLM Hub and skills
  { id: "ai_hub", name: "AI & LLMs", category: "ai", radius: 15, level: "Hub", desc: "Generative AI applications, NLP, and prompt architectures." },
  { id: "prompt", name: "Prompt Eng.", category: "ai", radius: 10, level: "Advanced", desc: "Contextual guidance, system templates, few-shot prompting, and chain of thought." },
  { id: "nlp", name: "NLP", category: "ai", radius: 10, level: "Intermediate", desc: "Text preprocessing, tokenization, embeddings, text representation models." },
  { id: "rag", name: "RAG", category: "ai", radius: 10, level: "Advanced", desc: "Retrieval-Augmented Generation. Connecting LLMs to vector DBs for custom context retrieval." },
  { id: "llm_app", name: "LLM Apps", category: "ai", radius: 10, level: "Advanced", desc: "Orchestrating agents, chains, and building end-to-end user-facing interfaces." },

  // Development Hub and skills
  { id: "dev_hub", name: "Development", category: "dev", radius: 15, level: "Hub", desc: "Tools and practices for shipping software and collaborating." },
  { id: "git", name: "Git", category: "dev", radius: 10, level: "Advanced", desc: "Version control, branching, rebasing, merge conflict resolution." },
  { id: "github", name: "GitHub", category: "dev", radius: 10, level: "Advanced", desc: "Repository management, CI/CD actions, issues, pull requests, collaboration." },
  { id: "apis", name: "REST APIs", category: "dev", radius: 10, level: "Advanced", desc: "Designing endpoints, HTTP requests, serialization, connecting client-server pipelines." },

  // Core Concepts Hub and skills
  { id: "conc_hub", name: "Core Concepts", category: "concepts", radius: 15, level: "Hub", desc: "Underlying academic foundations of computation and analytics." },
  { id: "dsa", name: "DSA", category: "concepts", radius: 10, level: "Intermediate", desc: "Data structures and algorithms. Optimization, searching, sorting, graph traversals." },
  { id: "oop", name: "OOP", category: "concepts", radius: 10, level: "Advanced", desc: "Object-oriented programming, inheritance, polymorphism, encapsulation, abstraction." },
  { id: "stats", name: "Statistics", category: "concepts", radius: 10, level: "Advanced", desc: "Probability, hypothesis testing, distributions, regression coefficients." },
  { id: "problem_solving", name: "Problem Solving", category: "concepts", radius: 10, level: "Advanced", desc: "Analytical breakdown of engineering tasks and edge case handling." },
];

export const connections: Connection[] = [
  // Connect categories to Central Hub
  { from: "core", to: "prog_hub" },
  { from: "core", to: "ml_hub" },
  { from: "core", to: "ai_hub" },
  { from: "core", to: "dev_hub" },
  { from: "core", to: "conc_hub" },

  // Programming connections
  { from: "prog_hub", to: "python" },
  { from: "prog_hub", to: "cpp" },
  { from: "prog_hub", to: "sql" },

  // ML connections
  { from: "ml_hub", to: "sklearn" },
  { from: "ml_hub", to: "numpy" },
  { from: "ml_hub", to: "pandas" },
  { from: "ml_hub", to: "feature_eng" },
  { from: "ml_hub", to: "eval" },

  // AI connections
  { from: "ai_hub", to: "prompt" },
  { from: "ai_hub", to: "nlp" },
  { from: "ai_hub", to: "rag" },
  { from: "ai_hub", to: "llm_app" },

  // Dev connections
  { from: "dev_hub", to: "git" },
  { from: "dev_hub", to: "github" },
  { from: "dev_hub", to: "apis" },

  // Concepts connections
  { from: "conc_hub", to: "dsa" },
  { from: "conc_hub", to: "oop" },
  { from: "conc_hub", to: "stats" },
  { from: "conc_hub", to: "problem_solving" },

  // Cross-category connections (representing neural linkages)
  { from: "python", to: "sklearn" },
  { from: "python", to: "llm_app" },
  { from: "sql", to: "pandas" },
  { from: "numpy", to: "stats" },
  { from: "nlp", to: "rag" },
  { from: "sklearn", to: "stats" },
  { from: "git", to: "github" },
];
