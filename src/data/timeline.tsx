import React from "react";
import { Milestone } from "@/types";
import { Cpu, Terminal, Compass, BrainCircuit, GraduationCap, ArrowUpRight } from "lucide-react";

export const milestones: Milestone[] = [
  {
    stage: "Milestone 1",
    title: "Foundation",
    subtitle: "Entry & Analytical Core",
    date: "2022 - 2023",
    icon: <GraduationCap className="w-5 h-5" />,
    bullets: [
      "Admitted to IIT Jodhpur via JEE Advanced",
      "Rigorous coursework in Calculus, Linear Algebra, and Mathematical logic",
      "Physics foundations and problem-solving methodologies",
    ],
  },
  {
    stage: "Milestone 2",
    title: "Electrical Engineering",
    subtitle: "Circuits & Signal Processing",
    date: "2023 - 2024",
    icon: <Cpu className="w-5 h-5" />,
    bullets: [
      "Familiarized with electrical circuits, circuit laws, and hardware design",
      "Signal processing, frequency analysis, Fourier transforms, and wave equations",
      "Studying logic gates, microcontrollers, and low-level computer systems",
    ],
  },
  {
    stage: "Milestone 3",
    title: "Programming Foundations",
    subtitle: "Algorithms & Object-Oriented Logic",
    date: "2024",
    icon: <Terminal className="w-5 h-5" />,
    bullets: [
      "Advanced programming with Python and object-oriented C++",
      "Learned core Data Structures and Algorithms (DSA) optimization",
      "Data wrangling and querying with SQL and structural databases",
    ],
  },
  {
    stage: "Milestone 4",
    title: "Machine Learning Integration",
    subtitle: "Statistical Modeling & Predictive Pipelines",
    date: "2024 - 2025",
    icon: <Compass className="w-5 h-5" />,
    bullets: [
      "Building predictive workflows with Scikit-Learn, Pandas, and NumPy",
      "Feature engineering pipelines, model evaluation metrics, and hyperparameter tuning",
      "Understanding core statistical learning models (SVMs, trees, regressions)",
    ],
  },
  {
    stage: "Milestone 5",
    title: "Applied AI & Large Language Models",
    subtitle: "Generative Architectures & Retrieval systems",
    date: "2025 - 2026",
    icon: <BrainCircuit className="w-5 h-5" />,
    bullets: [
      "Designing Retrieval-Augmented Generation (RAG) context engines",
      "Prompt engineering, system constraints, token optimizations, and AI chains",
      "Building LLM-backed applications and custom AI agents",
    ],
  },
  {
    stage: "Milestone 6",
    title: "Future ML Engineer",
    subtitle: "Production ML Systems",
    date: "2026 & Beyond",
    icon: <ArrowUpRight className="w-5 h-5" />,
    bullets: [
      "Deploying model endpoints at scale, monitoring pipelines, and model registry",
      "Diving into research-oriented architectures and optimization algorithms",
      "Building reliable systems that bridge hardware and artificial cognitive models",
    ],
  },
];
