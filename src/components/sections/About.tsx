"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { badges, highlights } from "@/data/about";
import { containerVariants, cardVariants } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="ABOUT ME" title="My Background" />

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-muted-text leading-relaxed text-base font-sans"
          >
            <p>
              I am Sanyam Rana, a B.Tech student in Electrical Engineering at{" "}
              <span className="text-white font-semibold">IIT Jodhpur</span>. I am deeply interested in 
              applied machine learning, data structures, and statistical modeling.
            </p>
            <p>
              My background in electrical systems and signal processing built my fundamentals in linear algebra, 
              calculus, and mathematical reasoning. This foundation naturally led me to study machine learning, 
              computer vision, and natural language processing.
            </p>
            <p>
              I like building functional end-to-end applications that solve practical problems, whether it is 
              analyzing room spatial topology, designing intelligent personal finance interfaces, or writing control 
              policies for assistive devices.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Badges Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6"
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.title}
                variants={cardVariants}
              >
                <GlassCard className="p-6 flex gap-5 hover:scale-[1.02] active:scale-[0.98] group cursor-default">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-all self-start">
                    {badge.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-secondary tracking-widest uppercase block mb-1">
                      {badge.subtitle}
                    </span>
                    <h4 className="text-xl font-display font-bold text-white mb-2">
                      {badge.title}
                    </h4>
                    <p className="text-sm text-muted-text font-sans">
                      {badge.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
