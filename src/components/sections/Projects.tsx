"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Projects() {
  const { onMouseMove, onMouseLeave } = useTiltEffect();

  return (
    <section id="projects" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="PROJECTS" title="My Work" />

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              style={{
                transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                transformStyle: "preserve-3d",
              }}
              className="w-full flex"
            >
              <GlassCard className="group relative rounded-3xl p-6 border border-white/5 overflow-hidden hover:scale-[1.01] hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,191,255,0.03)] cursor-default w-full flex flex-col justify-between">
                {/* Radial Glow Sweep Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 191, 255, 0.08), transparent 80%)`,
                  }}
                />

                {/* Light reflection sweep */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%] pointer-events-none" />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Card Header Schema Layout */}
                    <div className="w-full h-36 rounded-2xl bg-[#050816]/75 border border-white/5 flex items-center justify-center p-4 mb-6 group-hover:border-primary/20 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
                      {project.schema}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        {project.icon}
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white tracking-wide">
                        {project.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-text mb-6 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech & Links */}
                  <div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-muted-text hover:text-white transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Link buttons */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono font-bold text-muted-text hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
