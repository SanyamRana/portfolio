"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { milestones } from "@/data/timeline";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  // Scale height of the active/glowing progress line
  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="JOURNEY" title="From Circuits to Intelligence" className="text-center mb-20" />

        {/* Timeline Container */}
        <div ref={targetRef} className="relative max-w-4xl mx-auto">
          
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/5" />

          {/* Active Animated Glow Line */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_8px_rgba(0,191,255,0.4)]"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.title}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1.5 md:-translate-x-4 top-2 z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
                      className="w-8 h-8 rounded-full bg-[#050816] border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_10px_rgba(0,191,255,0.2)] group-hover:border-white transition-colors"
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Left spacing for layout (desktop only) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, type: "tween" }}
                      className="w-full relative"
                    >
                      <GlassCard className="p-6 border border-white/5 cursor-default">
                        {/* Arrow tail (desktop) */}
                        <div
                          className={`hidden md:block absolute top-[18px] w-3 h-3 bg-[#050816] border-t border-r border-white/5 rotate-45 z-10 ${
                            isEven
                              ? "right-[-7px] border-l border-b border-transparent"
                              : "left-[-7px] border-r border-t border-transparent border-l border-b"
                          }`}
                        />

                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase">
                            {milestone.stage}
                          </span>
                          <span className="text-xs font-mono text-muted-text font-bold">
                            {milestone.date}
                          </span>
                        </div>

                        <h4 className="text-xl font-display font-bold text-white mb-1">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-gradient-accent font-semibold mb-4">
                          {milestone.subtitle}
                        </p>

                        <ul className="space-y-2 text-xs text-muted-text font-sans">
                          {milestone.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1 flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
