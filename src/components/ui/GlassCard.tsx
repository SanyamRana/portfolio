import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GlassCard({
  glow = true,
  className = "",
  children,
  ...props
}: GlassCardProps) {
  const baseClasses = "glass-panel rounded-2xl transition-all duration-300";
  const glowClasses = glow ? "hover:glass-panel-glow" : "";

  return (
    <div className={`${baseClasses} ${glowClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
