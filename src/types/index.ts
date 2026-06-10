import React from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface TechItem {
  name: string;
  category: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ModelRecord {
  id: string;
  name: string;
  type: string;
  framework: string;
  status: "active" | "offline" | "staging";
  latency: string;
  accuracy: string;
  size: string;
  description: string;
  domain: string;
  techStack: TechItem[];
  skills: SkillItem[];
  architecture: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  icon: React.ReactNode;
  schema: React.ReactNode;
}

export interface Milestone {
  stage: string;
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  bullets: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: "programming" | "ml" | "ai" | "dev" | "concepts" | "hub";
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  level: string;
  desc: string;
}

export interface Connection {
  from: string;
  to: string;
}

export interface ContactCard {
  name: string;
  value: string;
  link: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface Badge {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}
