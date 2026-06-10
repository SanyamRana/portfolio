"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactCards } from "@/data/contact";
import { useContactForm } from "@/hooks/useContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Contact() {
  const {
    form,
    errors,
    status,
    handleInputChange,
    handleSubmit,
    resetStatus,
  } = useContactForm();

  return (
    <section id="contact" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="CONNECT" title="Let's Connect" />

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-display font-bold text-white mb-2">
                Drop Me a Line
              </h4>
              <p className="text-sm text-muted-text leading-relaxed font-sans mb-6">
                Whether you want to discuss machine learning pipelines, research opportunities, RAG architectures, or just have a chat about engineering mathematics—feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactCards.map((card) => {
                return (
                  <motion.a
                    key={card.name}
                    href={card.link}
                    onClick={card.onClick}
                    download={card.name === "Resume Download" ? "Sanyam_Rana_CV.pdf" : undefined}
                    target={card.link !== "#" && card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link !== "#" && card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full block cursor-pointer"
                  >
                    <GlassCard className="p-5 flex items-center gap-4 border border-white/5 group">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                        {card.icon}
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-muted-text uppercase block">
                          {card.name}
                        </span>
                        <span className="text-sm font-semibold text-white truncate block group-hover:text-primary transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </GlassCard>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <GlassCard glow={false} className="p-8 sm:p-12 border border-primary/30 shadow-[0_0_30px_rgba(0,191,255,0.05)] h-full flex flex-col justify-center items-center text-center space-y-6 rounded-3xl">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h4 className="text-3xl font-display font-bold text-white">
                      Message Sent!
                    </h4>
                    <p className="text-base text-muted-text max-w-md font-sans">
                      Thank you! Your message has been sent successfully. Sanyam will review and get back to you shortly.
                    </p>
                    <button
                      onClick={resetStatus}
                      className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </GlassCard>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full"
                >
                  <GlassCard glow={false} className="p-8 sm:p-10 border border-white/5 h-full flex flex-col justify-between space-y-6 rounded-3xl">
                    <div className="space-y-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-mono font-bold text-muted-text uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-muted-text/40 focus:outline-none focus:border-primary/50 transition-colors ${
                            errors.name ? "border-red-500/40" : "border-white/10"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-red-400 text-xs font-sans flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-muted-text uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-muted-text/40 focus:outline-none focus:border-primary/50 transition-colors ${
                            errors.email ? "border-red-500/40" : "border-white/10"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-red-400 text-xs font-sans flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Message input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-mono font-bold text-muted-text uppercase">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleInputChange}
                          placeholder="Hey Sanyam, let's collaborate on an ML project..."
                          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-muted-text/40 focus:outline-none focus:border-primary/50 transition-colors resize-none ${
                            errors.message ? "border-red-500/40" : "border-white/10"
                          }`}
                        />
                        {errors.message && (
                          <span className="text-red-400 text-xs font-sans flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:scale-100 transition-all text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(0,191,255,0.2)]"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </GlassCard>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
