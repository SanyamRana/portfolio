import React from "react";
import { Badge } from "@/types";
import { GraduationCap, Brain, Lightbulb } from "lucide-react";

export const badges: Badge[] = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "IIT Jodhpur",
    subtitle: "B.Tech Electrical Engineering",
    description: "Rigorous analytical training in circuits, signals, systems, mathematics, and problem-solving methodologies.",
  },
  {
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: "AI/ML Focus",
    subtitle: "Intelligent Systems",
    description: "Dedicated to designing intelligent applications, statistical learning models, neural networks, and NLP workflows.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Problem Solver",
    subtitle: "Applied Engineering",
    description: "Translating complex mathematical concepts and data models into functional, real-world solutions and architectures.",
  },
];

export const highlights = [
  "Mathematical Optimization",
  "Statistical Machine Learning",
  "Retrieval-Augmented Gen (RAG)",
  "Signal Processing & Filtering",
];
