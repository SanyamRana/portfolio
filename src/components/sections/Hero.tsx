"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Award, BookOpen, BrainCircuit, GraduationCap } from "lucide-react";
import HeroPipeline from "../ui/HeroPipeline";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function Hero() {

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Transition Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary w-fit mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span>IIT Jodhpur Student</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight mb-4 text-gradient-primary leading-none"
            >
              SANYAM RANA
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-display font-semibold tracking-wide mb-6 text-gradient-accent"
            >
              Electrical Engineering & Machine Learning Student
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-text max-w-xl mb-8 leading-relaxed font-sans"
            >
              I&apos;m an Electrical Engineering student at IIT Jodhpur. I build practical machine learning applications, deep learning solutions, and explore generative AI integrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollTo("#projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-105 active:scale-95 transition-all text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(0,191,255,0.3)]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                download="Sanyam_Rana_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:scale-105 active:scale-95 transition-all text-sm font-semibold tracking-wide text-white cursor-pointer"
              >
                <Download className="w-4 h-4 text-secondary" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-sm font-semibold tracking-wide text-muted-text hover:text-white"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-wider">EDUCATION</span>
                </div>
                <span className="text-sm font-semibold text-white">IIT Jodhpur</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-secondary">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-wider">FOCUS</span>
                </div>
                <span className="text-sm font-semibold text-white">AI/ML Enthusiast</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-accent">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-wider">SPECIALTY</span>
                </div>
                <span className="text-sm font-semibold text-white">Data Science</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white/50">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-wider">METHOD</span>
                </div>
                <span className="text-sm font-semibold text-white">Open Source Learner</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="w-full max-w-[480px]">
              <HeroPipeline />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
    </section>
  );
}
