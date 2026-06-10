"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Cpu, Network, Layers, GitBranch, Sparkles, Award } from "lucide-react";
import { ModelRecord, TechItem } from "@/types";
import { models } from "@/data/models";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function ModelRegistry() {
  const [selectedModel, setSelectedModel] = useState<ModelRecord>(models[0]);
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const handleModelChange = (model: ModelRecord) => {
    setSelectedModel(model);
    setHoveredTech(null);
  };

  return (
    <section id="registry" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="MODEL REGISTRY" title="Model Technical Matrix" />

        {/* Model Selection Registry Table */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Model Table Registry */}
          <div className="xl:col-span-6 flex flex-col gap-6">
            <GlassCard glow={false} className="p-6 rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Server className="w-5 h-5 text-secondary" />
                  <h4 className="text-lg font-display font-bold text-white">Active Model Registry</h4>
                </div>
                
                {/* Table Header */}
                <div className="hidden sm:grid grid-cols-12 gap-4 pb-3 border-b border-white/5 text-[10px] font-mono tracking-wider text-muted-text font-bold uppercase">
                  <div className="col-span-5">Model Name</div>
                  <div className="col-span-3">Framework</div>
                  <div className="col-span-2">Latency</div>
                  <div className="col-span-2 text-right">Accuracy</div>
                </div>

                {/* Table Rows */}
                <div className="space-y-3 sm:mt-3">
                  {models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => handleModelChange(model)}
                      className={`w-full grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedModel.id === model.id
                          ? "bg-primary/10 border-primary/40 text-white shadow-[0_0_20px_rgba(0,191,255,0.04)]"
                          : "bg-white/3 border-white/5 text-muted-text hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className="col-span-1 sm:col-span-5 flex flex-col justify-center">
                        <span className="text-sm font-semibold font-sans text-white block">
                          {model.name}
                        </span>
                        <span className="text-[10px] font-mono text-muted-text mt-0.5">
                          {model.type}
                        </span>
                      </div>
                      <div className="col-span-1 sm:col-span-3 flex items-center text-xs font-mono">
                        <span className="sm:hidden text-[9px] text-muted-text mr-1.5 uppercase font-bold">Framework:</span>
                        {model.framework}
                      </div>
                      <div className="col-span-1 sm:col-span-2 flex items-center text-xs font-mono text-secondary">
                        <span className="sm:hidden text-[9px] text-muted-text mr-1.5 uppercase font-bold">Latency:</span>
                        {model.latency}
                      </div>
                      <div className="col-span-1 sm:col-span-2 flex items-center justify-start sm:justify-end text-xs font-mono font-bold text-green-400">
                        <span className="sm:hidden text-[9px] text-muted-text mr-1.5 uppercase font-bold">Accuracy:</span>
                        {model.accuracy}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Model Description */}
              <div className="mt-6 p-4 rounded-2xl bg-white/3 border border-white/5 text-xs text-muted-text font-sans leading-relaxed">
                <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[9px] font-mono">Model Overview</span>
                {selectedModel.description}
              </div>
            </GlassCard>
          </div>

          {/* Right Side: Tech Stack & Skill Matrix */}
          <div className="xl:col-span-6 flex flex-col gap-6">
            <GlassCard glow={false} className="p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/3 rounded-full blur-[80px] pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="text-lg font-display font-bold text-white leading-tight">Tech Stack & Skill Matrix</h4>
                      <p className="text-[10px] font-mono text-muted-text mt-0.5 uppercase tracking-wider">{selectedModel.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>PRODUCTION ACTIVE</span>
                  </div>
                </div>

                {/* 1. Tech Stack Orbital Visualization */}
                <div className="mb-8 relative h-[210px] flex items-center justify-center rounded-2xl bg-[#050816]/60 border border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                  
                  {/* Outer Orbit Ring */}
                  <div className="absolute w-[150px] h-[150px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute w-[150px] h-[150px] rounded-full border border-dashed border-primary/10 animate-[spin_20s_linear_infinite]" />

                  {/* Core Center Node */}
                  <motion.div 
                    key={`core-${selectedModel.id}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-[#050816] border border-primary/30 shadow-[0_0_25px_rgba(0,191,255,0.15)] text-center p-2"
                  >
                    <Network className="w-5 h-5 text-primary mb-1 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-white tracking-tight">{selectedModel.framework}</span>
                    <span className="text-[8px] font-mono text-muted-text mt-0.5">Pipeline Core</span>
                  </motion.div>

                  {/* Satellite Nodes */}
                  <AnimatePresence>
                    {selectedModel.techStack.map((tech, idx) => {
                      const total = selectedModel.techStack.length;
                      const angle = (idx * 2 * Math.PI) / total;
                      const radius = 75; // Orbit radius
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <motion.button
                          key={`${selectedModel.id}-${tech.name}`}
                          initial={{ x: 0, y: 0, opacity: 0 }}
                          animate={{ 
                            x, 
                            y, 
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 12,
                              delay: idx * 0.05
                            }
                          }}
                          exit={{ x: 0, y: 0, opacity: 0 }}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-[9px] font-mono font-bold border cursor-pointer transition-all ${
                            hoveredTech?.name === tech.name
                              ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,191,255,0.3)] scale-110 z-20"
                              : "bg-[#050816] border-white/10 text-muted-text hover:border-primary/40 hover:text-white"
                          }`}
                        >
                          <div className="text-center px-1 truncate max-w-full">
                            {tech.name}
                          </div>
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>

                  {/* Visual Hint */}
                  <div className="absolute bottom-2.5 left-4 text-[9px] font-mono text-muted-text/70 flex items-center gap-1.5 pointer-events-none">
                    <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                    <span>Hover nodes for pipeline details</span>
                  </div>
                </div>

                {/* 2. Interactive Tooltip Panel */}
                <div className="mb-6 h-[72px] rounded-2xl bg-white/3 border border-white/5 p-3.5 flex flex-col justify-center transition-all">
                  <AnimatePresence mode="wait">
                    {hoveredTech ? (
                      <motion.div
                        key={hoveredTech.name}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="text-[9px] font-mono font-bold text-secondary tracking-wider uppercase block">{hoveredTech.category}</span>
                        <p className="text-[11px] text-white/90 font-sans leading-normal mt-0.5">{hoveredTech.desc}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default-tooltip"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-[11px] text-muted-text italic"
                      >
                        Select or hover over any tech stack satellite node above to see its direct function in this system&apos;s runtime pipeline.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Skill Proficiency Meters */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-1 text-xs font-mono font-bold text-muted-text uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Specialized Engineering Competency</span>
                  </div>

                  {selectedModel.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="font-semibold text-white/80">{skill.name}</span>
                        <span className="font-mono text-secondary font-bold">{skill.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          key={`${selectedModel.id}-${skill.name}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4. Model Architecture Data Flow Pipeline */}
                <div className="border-t border-white/5 pt-6 mt-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-muted-text uppercase tracking-wider mb-4">
                    <Layers className="w-4 h-4 text-accent" />
                    <span>Inference Architecture Flow</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {selectedModel.architecture.map((layer, index) => (
                      <motion.div
                        key={`${selectedModel.id}-layer-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col gap-1 p-2 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-all text-left"
                      >
                        <div className="flex items-center gap-1 text-[9px] font-mono text-muted-text">
                          <GitBranch className="w-2.5 h-2.5 text-accent" />
                          <span>STAGE 0{index + 1}</span>
                        </div>
                        <span className="text-[10px] font-sans font-semibold text-white/90 leading-tight">
                          {layer}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
