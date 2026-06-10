"use client";

import React from "react";
import { Folder, FileCode, Terminal, ChevronRight, Play } from "lucide-react";

export default function HeroPipeline() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#080c1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans h-[430px] w-full">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#04060f] border-b border-white/5 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        
        {/* Active Breadcrumbs */}
        <span className="text-[11px] font-mono tracking-wide text-muted-text">
          src &gt; models &gt; spac3d.py
        </span>
        
        {/* Action icons */}
        <div className="flex items-center gap-2 text-muted-text">
          <Play className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-44 bg-[#050815] border-r border-white/5 hidden sm:flex flex-col py-4 px-2 select-none">
          <span className="text-[9px] font-mono tracking-wider font-bold text-muted-text/60 uppercase px-2 mb-3">
            Explorer
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-white/95 font-semibold">
              <ChevronRight className="w-3 h-3 text-muted-text" />
              <Folder className="w-3.5 h-3.5 text-primary" />
              <span>spac3d</span>
            </div>
            
            <div className="flex flex-col pl-4 gap-0.5 border-l border-white/5 ml-3.5 mt-0.5">
              <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-muted-text hover:text-white transition-colors cursor-pointer">
                <FileCode className="w-3.5 h-3.5 text-secondary" />
                <span>dataset.py</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-white bg-primary/10 rounded-lg border border-primary/25 cursor-pointer">
                <FileCode className="w-3.5 h-3.5 text-primary" />
                <span>spac3d.py</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-muted-text hover:text-white transition-colors cursor-pointer">
                <FileCode className="w-3.5 h-3.5 text-secondary" />
                <span>train.py</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor Window */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#080c1a]/95">
          {/* Editor Tabs */}
          <div className="flex bg-[#04060f]/60 border-b border-white/5 select-none">
            <div className="flex items-center gap-1.5 px-4 py-2 text-xs text-white bg-[#080c1a] border-r border-white/5 border-t border-t-primary/80">
              <FileCode className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono">spac3d.py</span>
            </div>
          </div>

          {/* Syntax Highlighted Code Area */}
          <div className="flex-1 overflow-auto p-4 font-mono text-[11px] leading-relaxed text-white/90">
            <pre className="whitespace-pre">
              <code>
                <span className="text-accent">import</span> torch{"\n"}
                <span className="text-accent">import</span> torch.nn <span className="text-accent">as</span> nn{"\n\n"}
                <span className="text-accent">class</span> <span className="text-secondary font-bold">Spac3DDetector</span>(nn.Module):{"\n"}
                {"    "}<span className="text-accent">def</span> <span className="text-primary font-bold">__init__</span>(<span className="text-orange-400">self</span>, num_classes=<span className="text-yellow-400">8</span>):{"\n"}
                {"        "}<span className="text-primary">super</span>().__init__(){"\n"}
                {"        "}<span className="text-muted-text"># Backbone CNN for topology extraction</span>{"\n"}
                {"        "}<span className="text-orange-400">self</span>.backbone = nn.Sequential({"\n"}
                {"            "}nn.Conv2d(<span className="text-yellow-400">3</span>, <span className="text-yellow-400">32</span>, kernel_size=<span className="text-yellow-400">3</span>, padding=<span className="text-yellow-400">1</span>),{"\n"}
                {"            "}nn.BatchNorm2d(<span className="text-yellow-400">32</span>),{"\n"}
                {"            "}nn.ReLU(),{"\n"}
                {"            "}nn.MaxPool2d(<span className="text-yellow-400">2</span>){"\n"}
                {"        "}){"\n"}
                {"        "}<span className="text-muted-text"># Bounding box regressor</span>{"\n"}
                {"        "}<span className="text-orange-400">self</span>.bbox_reg = nn.Linear(<span className="text-yellow-400">32 * 128 * 128</span>, <span className="text-yellow-400">4</span>){"\n\n"}
                {"    "}<span className="text-accent">def</span> <span className="text-primary font-bold">forward</span>(<span className="text-orange-400">self</span>, x):{"\n"}
                {"        "}features = <span className="text-orange-400">self</span>.backbone(x){"\n"}
                {"        "}features = torch.flatten(features, <span className="text-yellow-400">1</span>){"\n"}
                {"        "}<span className="text-accent">return</span> <span className="text-orange-400">self</span>.bbox_reg(features)
              </code>
            </pre>
          </div>

          {/* Minimal Terminal pane */}
          <div className="h-28 bg-[#04060f] border-t border-white/5 flex flex-col p-3 font-mono text-[10px]">
            <div className="flex items-center gap-1.5 text-muted-text/80 mb-2 border-b border-white/5 pb-1">
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span>Terminal</span>
            </div>
            <div className="flex-1 overflow-y-auto text-green-400/90 leading-tight space-y-1">
              <div>spac3d$ python train.py --epochs 10</div>
              <div className="text-muted-text/60">[INFO] Loaded dataset: 12,400 room samples</div>
              <div className="text-muted-text/60">[INFO] Booted Spac3DDetector on CUDA:0</div>
              <div className="text-white/80">Epoch 10/10 | loss: 0.125 | val_loss: 0.148 | accuracy: 96.4%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
