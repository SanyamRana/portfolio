import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import ModelRegistry from "@/components/sections/ModelRegistry";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative z-10">
      {/* 1. Cinematic Landing & Pipeline visualization */}
      <Hero />
      
      {/* 2. Transition Narrative details */}
      <About />
      
      {/* 3. Skill Node graph */}
      <Skills />
      
      {/* 4. Projects holographic showcase */}
      <Projects />
      
      {/* 5. Deployed Systems Model Registry */}
      <ModelRegistry />

      {/* 6. Progressive vertical timeline */}
      <Timeline />
      
      {/* 7. Verified form submission channel */}
      <Contact />
    </div>
  );
}
