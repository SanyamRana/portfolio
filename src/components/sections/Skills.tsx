"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Terminal, Code2 } from "lucide-react";
import { SkillNode, Connection } from "@/types";
import { rawNodes, connections, colors } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight || 560);

    connectionsRef.current = connections;

    // Position allocation (arrange categories in a circular layout)
    const positionNodes = () => {
      nodesRef.current = rawNodes.map((n) => {
        let x = width / 2;
        let y = height / 2;
        const radiusDist = Math.min(width, height) * 0.28;

        // Spread hubs circularly
        if (n.id === "prog_hub") {
          x = width / 2 - radiusDist;
          y = height / 2 - radiusDist * 0.5;
        } else if (n.id === "ml_hub") {
          x = width / 2;
          y = height / 2 - radiusDist * 0.8;
        } else if (n.id === "ai_hub") {
          x = width / 2 + radiusDist;
          y = height / 2 - radiusDist * 0.5;
        } else if (n.id === "dev_hub") {
          x = width / 2 - radiusDist * 0.7;
          y = height / 2 + radiusDist * 0.7;
        } else if (n.id === "conc_hub") {
          x = width / 2 + radiusDist * 0.7;
          y = height / 2 + radiusDist * 0.7;
        } else if (n.id !== "core") {
          // Leaf nodes clustered around their hubs
          const parentId = rawNodes.find((pn) => pn.id === n.id + "_hub")?.id || 
                         (n.category === "programming" ? "prog_hub" : 
                          n.category === "ml" ? "ml_hub" : 
                          n.category === "ai" ? "ai_hub" : 
                          n.category === "dev" ? "dev_hub" : "conc_hub");
          
          const index = rawNodes.filter((rn) => rn.category === n.category && rn.id !== parentId).indexOf(n);
          const total = rawNodes.filter((rn) => rn.category === n.category && rn.id !== parentId).length;
          
          let parentX = width / 2;
          let parentY = height / 2;
          if (parentId === "prog_hub") { parentX = width / 2 - radiusDist; parentY = height / 2 - radiusDist * 0.5; }
          else if (parentId === "ml_hub") { parentX = width / 2; parentY = height / 2 - radiusDist * 0.8; }
          else if (parentId === "ai_hub") { parentX = width / 2 + radiusDist; parentY = height / 2 - radiusDist * 0.5; }
          else if (parentId === "dev_hub") { parentX = width / 2 - radiusDist * 0.7; parentY = height / 2 + radiusDist * 0.7; }
          else if (parentId === "conc_hub") { parentX = width / 2 + radiusDist * 0.7; parentY = height / 2 + radiusDist * 0.7; }

          let baseAngle = 0;
          if (parentId === "prog_hub") baseAngle = Math.PI;
          else if (parentId === "ml_hub") baseAngle = -Math.PI / 2;
          else if (parentId === "ai_hub") baseAngle = 0;
          else if (parentId === "dev_hub") baseAngle = Math.PI * 0.75;
          else if (parentId === "conc_hub") baseAngle = Math.PI * 0.25;

          const leafOffset = Math.min(75, radiusDist * 0.55);
          const leafAngle = baseAngle + (index - (total - 1) / 2) * (Math.PI / 6);
          x = parentX + Math.cos(leafAngle) * leafOffset;
          y = parentY + Math.sin(leafAngle) * leafOffset;
        }

        return {
          ...n,
          category: n.category as "programming" | "ml" | "ai" | "dev" | "concepts" | "hub",
          x,
          y,
          vx: 0,
          vy: 0,
          baseX: x,
          baseY: y,
          color: colors[n.category as keyof typeof colors],
        };
      });
    };

    positionNodes();

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight || 560;
      positionNodes();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Mousemove Handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation frames
    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      const mouse = mouseRef.current;
      const nodes = nodesRef.current;
      const conns = connectionsRef.current;

      // Find hovered node
      let currentHover: SkillNode | null = null;
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < node.radius + 5) {
          currentHover = node;
          break;
        }
      }
      setHoveredNode(currentHover);

      // Determine illuminated node IDs (the hovered node and all connected ones)
      const illuminatedNodeIds = new Set<string>();
      if (currentHover) {
        illuminatedNodeIds.add(currentHover.id);
        conns.forEach((c) => {
          if (c.from === currentHover?.id) illuminatedNodeIds.add(c.to);
          if (c.to === currentHover?.id) illuminatedNodeIds.add(c.from);
        });
      }

      // Draw connections
      ctx.lineWidth = 1;
      conns.forEach((c) => {
        const fromNode = nodes.find((n) => n.id === c.from);
        const toNode = nodes.find((n) => n.id === c.to);
        if (!fromNode || !toNode) return;

        const isIlluminated = currentHover && 
          (c.from === currentHover.id || c.to === currentHover.id);

        if (isIlluminated) {
          // Glow link
          ctx.strokeStyle = `rgba(0, 255, 255, 0.6)`;
          ctx.lineWidth = 2;
          
          // Dash pulses moving along link
          ctx.setLineDash([4, 12]);
          ctx.lineDashOffset = -time * 30;
        } else {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
          ctx.lineWidth = 1;
          ctx.setLineDash([]);
        }

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash
      });

      // Update and Draw nodes
      nodes.forEach((n) => {
        // Floating wave animation
        const floatX = Math.sin(time + n.radius) * 1.5;
        const floatY = Math.cos(time + n.radius) * 1.5;
        n.x = n.baseX + floatX;
        n.y = n.baseY + floatY;

        const isIlluminated = !currentHover || illuminatedNodeIds.has(n.id);
        const isSelfHover = currentHover && currentHover.id === n.id;

        // Node Glow Ring
        if (isSelfHover) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = n.color;
        } else if (illuminatedNodeIds.has(n.id) && currentHover) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = n.color;
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw node body
        ctx.fillStyle = "#050816";
        ctx.strokeStyle = isIlluminated ? n.color : "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = isSelfHover ? 3 : 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isSelfHover ? n.radius + 3 : n.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Draw inner hub details
        ctx.fillStyle = isIlluminated ? n.color : "rgba(255, 255, 255, 0.15)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Skill Label Text
        ctx.font = `bold ${n.id === "core" ? "12px" : n.radius >= 15 ? "11px" : "10px"} 'Outfit', sans-serif`;
        ctx.fillStyle = isIlluminated ? "#FFFFFF" : "rgba(255, 255, 255, 0.25)";
        ctx.textAlign = "center";
        ctx.fillText(n.name, n.x, n.y - n.radius - (isSelfHover ? 8 : 5));
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="skills" className="relative py-24 bg-dot-pattern border-t border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Title */}
        <SectionHeader label="SKILLS" title="My Skills" />

        {/* Network Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Network Graph */}
          <div ref={containerRef} className="lg:col-span-8 relative h-[560px] glass-panel rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <canvas ref={canvasRef} className="relative z-10 w-full h-full block cursor-pointer" />
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-6 z-20 pointer-events-none flex items-center gap-2 text-xs font-mono text-muted-text">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Hover over nodes to explore connections and details</span>
            </div>

            {/* Corner frames */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/20" />
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between h-[560px]">
            <AnimatePresence mode="wait">
              {hoveredNode ? (
                <motion.div
                  key={hoveredNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <GlassCard glow={false} className="p-8 border border-primary/30 shadow-[0_0_20px_rgba(0,191,255,0.05)] h-full flex flex-col justify-between rounded-3xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: hoveredNode.color }}
                        />
                        <span className="text-xs font-mono tracking-widest text-muted-text uppercase">
                          {hoveredNode.category === "hub" ? "CORE PROFILE" : hoveredNode.category + " module"}
                        </span>
                      </div>

                      <h4 className="text-3xl font-display font-bold text-white tracking-wide">
                        {hoveredNode.name}
                      </h4>

                      {hoveredNode.level !== "Hub" && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary">
                          <Terminal className="w-3.5 h-3.5 text-primary" />
                          <span>Proficiency: {hoveredNode.level}</span>
                        </div>
                      )}

                      <p className="text-base text-muted-text leading-relaxed font-sans">
                        {hoveredNode.desc}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6 flex items-center gap-3 text-xs text-muted-text font-mono">
                      <Brain className="w-4 h-4 text-accent" />
                      <span>Click or hover nodes to see details.</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <GlassCard glow={false} className="p-8 h-full flex flex-col justify-center items-center text-center space-y-4 rounded-3xl">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 text-muted-text">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-display font-semibold text-white">
                      Select a Skill Node
                    </h4>
                    <p className="text-sm text-muted-text max-w-[240px] font-sans">
                      Hover over the network nodes to explore my tech stack and connections.
                    </p>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
