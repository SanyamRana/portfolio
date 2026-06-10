import React from "react";
import { Project } from "@/types";
import { Cpu, Compass, Database, BarChart3 } from "lucide-react";

export const projects: Project[] = [
  {
    title: "SPAC3D",
    description: "Full-stack web application analyzing room photos using a multi-model machine learning pipeline. Detects furniture objects with bounding boxes and classifies room topologies.",
    tech: ["Machine Learning", "JavaScript", "Computer Vision", "Node.js", "Python"],
    github: "https://github.com/SanyamRana/Spac3D",
    live: "https://github.com/SanyamRana/Spac3D",
    icon: <Database className="w-5 h-5 text-primary" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* Docs */}
        <rect x="15" y="30" width="30" height="40" rx="3" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        <line x1="22" y1="42" x2="38" y2="42" stroke="#00BFFF" strokeWidth="1" />
        <line x1="22" y1="50" x2="38" y2="50" stroke="#00BFFF" strokeWidth="1" />
        <line x1="22" y1="58" x2="32" y2="58" stroke="#00BFFF" strokeWidth="1" />
        {/* Split arrow */}
        <path d="M 50,50 L 80,50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Vector Embeddings */}
        <rect x="85" y="35" width="50" height="30" rx="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="90" y="53" fill="#8B5CF6" fontSize="8" fontFamily="monospace">Vectors</text>
        {/* Arrow */}
        <path d="M 140,50 L 170,50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        {/* LLM */}
        <circle cx="195" cy="50" r="20" fill="none" stroke="#00FFFF" strokeWidth="1.5" />
        <text x="183" y="53" fill="#00FFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Vision</text>
        {/* Output lines */}
        <path d="M 195,70 L 195,90 L 135,90" stroke="#00FFFF" strokeWidth="1" strokeDasharray="2 2" />
        <text x="75" y="94" fill="#00FFFF" fontSize="7" fontFamily="monospace">3D Bounding Boxes</text>
      </svg>
    ),
  },
  {
    title: "Penny AI Agent",
    description: "Penny AI Personal Finance Agent built for the Google Cloud Rapid Agent Hackathon. Orchestrates budget analytics, expense tracking, and savings recommendations.",
    tech: ["TypeScript", "AI Agents", "Financial ML", "Google Cloud", "Node.js"],
    github: "https://github.com/SanyamRana/penny-ai-agent",
    live: "https://github.com/SanyamRana/penny-ai-agent",
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* User Request Node */}
        <circle cx="30" cy="50" r="12" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        <text x="21" y="53" fill="#00BFFF" fontSize="6" fontFamily="monospace">Query</text>
        
        <path d="M 42,50 L 75,50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        
        {/* Penny AI Core */}
        <rect x="75" y="32" width="60" height="36" rx="4" fill="none" stroke="#00FFFF" strokeWidth="1.5" />
        <text x="82" y="50" fill="#00FFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">Penny AI</text>
        <text x="87" y="60" fill="#00FFFF" fontSize="6" fontFamily="monospace">Agent</text>
        
        <path d="M 135,42 L 170,30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <path d="M 135,58 L 170,70" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        
        {/* Tool Nodes */}
        <rect x="170" y="15" width="55" height="25" rx="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="175" y="30" fill="#8B5CF6" fontSize="7" fontFamily="monospace">GCP Vertex</text>
        
        <rect x="170" y="60" width="55" height="25" rx="3" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        <text x="175" y="75" fill="#00BFFF" fontSize="7" fontFamily="monospace">Bank API</text>
        
        {/* Feedback/Output loop */}
        <path d="M 197.5,85 L 197.5,100 L 105,100 L 105,68" fill="none" stroke="#00FFFF" strokeWidth="1" strokeDasharray="2 2" />
        <text x="115" y="108" fill="#00FFFF" fontSize="7" fontFamily="monospace">Budget Recommendation</text>
      </svg>
    ),
  },
  {
    title: "TSA Mechanical Glove GUI",
    description: "GUI-based control system for a motor-driven Twisted String Actuator using Arduino Nano, designed for exoskeletal hand rehabilitation. Enforces real-time control loops and signal tracking.",
    tech: ["Python", "C++ (Arduino)", "Signal Processing", "Serial IO", "GUI Design"],
    github: "https://github.com/SanyamRana/TSA-based-Mechanical-Glove-GUI",
    live: "https://github.com/SanyamRana/TSA-based-Mechanical-Glove-GUI",
    icon: <Cpu className="w-5 h-5 text-secondary" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* Hand Glove Sensors */}
        <rect x="15" y="30" width="45" height="30" rx="3" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        <text x="21" y="48" fill="#00BFFF" fontSize="7" fontFamily="monospace">TSA Glove</text>
        
        <path d="M 60,45 L 85,45" stroke="#00FFFF" strokeWidth="1.5" />
        
        {/* Arduino Controller */}
        <rect x="85" y="30" width="50" height="30" rx="3" fill="none" stroke="#00FFFF" strokeWidth="1.5" />
        <text x="91" y="48" fill="#00FFFF" fontSize="7" fontFamily="monospace">Arduino</text>
        
        {/* Serial Transmission */}
        <path d="M 135,45 L 175,45" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="142" y="38" fill="#8B5CF6" fontSize="6" fontFamily="monospace">Serial IO</text>
        
        {/* GUI Display */}
        <rect x="175" y="25" width="50" height="40" rx="3" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        {/* Mock Rehab plot line */}
        <path d="M 180,55 L 190,40 L 200,50 L 210,35 L 220,45" fill="none" stroke="#00BFFF" strokeWidth="1" />
        <text x="180" y="60" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">GUI Plot</text>
        
        {/* Control Loop line */}
        <path d="M 200,65 L 200,85 L 37.5,85 L 37.5,60" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2 2" />
        <text x="75" y="93" fill="#8B5CF6" fontSize="7" fontFamily="monospace">Feedback Loop</text>
      </svg>
    ),
  },
  {
    title: "EV Route Optimization",
    description: "Data Structures & Algorithms routing engine designed to compute optimal travel paths and battery consumption analytics for Electric Vehicles.",
    tech: ["C++", "DSA", "Graph Theory", "Optimization", "Physics Models"],
    github: "https://github.com/mayanks0ni/ev-route-optimization-system",
    live: "https://github.com/mayanks0ni/ev-route-optimization-system",
    icon: <Compass className="w-5 h-5 text-accent" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* Pipe nodes */}
        <rect x="10" y="40" width="35" height="25" rx="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <text x="17" y="55" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">Map</text>
        <path d="M 45,52.5 L 65,52.5" stroke="#00FFFF" strokeWidth="1.5" />
        
        <rect x="65" y="40" width="45" height="25" rx="3" fill="none" stroke="#00FFFF" strokeWidth="1.5" />
        <text x="70" y="55" fill="#00FFFF" fontSize="7" fontFamily="monospace">Dijkstra</text>
        <path d="M 110,52.5 L 130,52.5" stroke="#8B5CF6" strokeWidth="1.5" />
 
        <rect x="130" y="40" width="40" height="25" rx="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="138" y="55" fill="#8B5CF6" fontSize="7" fontFamily="monospace">Battery</text>
        <path d="M 170,52.5 L 190,52.5" stroke="#00BFFF" strokeWidth="1.5" />
 
        <rect x="190" y="40" width="40" height="25" rx="3" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
        <text x="195" y="55" fill="#00BFFF" fontSize="7" fontFamily="monospace">Optimal</text>
        
        {/* Flow loop */}
        <path d="M 150,65 L 150,85 L 87.5,85 L 87.5,65" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="105" y="93" fill="rgba(139, 92, 246, 0.6)" fontSize="7" fontFamily="monospace">Evaluate</text>
      </svg>
    ),
  },
  {
    title: "AI Agents",
    description: "Research and development of autonomous artificial intelligence agents and game-theoretic decision logic systems.",
    tech: ["Python", "AI Agents", "RL", "Decision Trees", "Simulation"],
    github: "https://github.com/SanyamRana/agents",
    live: "https://github.com/SanyamRana/agents",
    icon: <Compass className="w-5 h-5 text-accent" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* Dot distribution (latent space) */}
        <circle cx="50" cy="80" r="3" fill="#00BFFF" />
        <circle cx="58" cy="72" r="3" fill="#00BFFF" />
        <circle cx="45" cy="90" r="3" fill="#00BFFF" />
        
        <circle cx="180" cy="40" r="3" fill="#8B5CF6" />
        <circle cx="190" cy="45" r="3" fill="#8B5CF6" />
        <circle cx="175" cy="32" r="3" fill="#8B5CF6" />
        
        {/* Queries */}
        <circle cx="115" cy="55" r="4" fill="#00FFFF" />
        <circle cx="120" cy="58" r="14" fill="none" stroke="#00FFFF" strokeWidth="0.8" strokeDasharray="2 2" />
        
        {/* Distance vectors */}
        <line x1="115" y1="55" x2="58" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="115" y1="55" x2="180" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        
        {/* Labels */}
        <text x="35" y="105" fill="#00BFFF" fontSize="7" fontFamily="monospace">State Space</text>
        <text x="165" y="22" fill="#8B5CF6" fontSize="7" fontFamily="monospace">Action Value</text>
        <text x="100" y="45" fill="#00FFFF" fontSize="7" fontFamily="monospace">Agent Policy</text>
      </svg>
    ),
  },
  {
    title: "Matrix Calculator",
    description: "Analytical software engine designed to perform essential multi-dimensional matrix mathematics (adjoints, inverses, determinants) efficiently.",
    tech: ["C", "Linear Algebra", "Matrix Calculus", "Numerical Methods"],
    github: "https://github.com/SanyamRana/matrix-calculator",
    live: "https://github.com/SanyamRana/matrix-calculator",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    schema: (
      <svg viewBox="0 0 240 120" className="w-full h-full opacity-60">
        {/* Grid bars */}
        <rect x="20" y="80" width="12" height="25" fill="#00BFFF" opacity="0.7" />
        <rect x="40" y="60" width="12" height="45" fill="#00FFFF" opacity="0.7" />
        <rect x="60" y="45" width="12" height="60" fill="#8B5CF6" opacity="0.7" />
        <rect x="80" y="70" width="12" height="35" fill="#00BFFF" opacity="0.7" />
 
        {/* Line Chart */}
        <path d="M 120,95 L 145,60 L 170,75 L 195,35 L 220,50" fill="none" stroke="#00FFFF" strokeWidth="2" />
        <circle cx="120" cy="95" r="2.5" fill="#FFFFFF" />
        <circle cx="145" cy="60" r="2.5" fill="#FFFFFF" />
        <circle cx="170" cy="75" r="2.5" fill="#FFFFFF" />
        <circle cx="195" cy="35" r="2.5" fill="#FFFFFF" />
        <circle cx="220" cy="50" r="2.5" fill="#FFFFFF" />
        
        <line x1="10" y1="105" x2="230" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
];
