import React from 'react';
import { Database, Cpu, Code2, CheckCircle2, ArrowDown, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Decorative backdrop grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl" />

      {/* Main Container */}
      <div className="relative rounded-2xl border border-neutral-800/90 bg-[#080A0F]/90 p-5 sm:p-6 backdrop-blur-md shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-neutral-400">system.pipeline.flow</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40 flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" />
            ACTIVE
          </span>
        </div>

        {/* Pipeline Nodes: DATA -> AI -> SOFTWARE -> SOLUTION */}
        <div className="space-y-3">
          {/* Node 1: DATA */}
          <div className="p-3 rounded-xl bg-[#10151C] border border-neutral-800 flex items-center justify-between group hover:border-blue-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white tracking-wide">01 • DATA INGESTION</div>
                <div className="text-[11px] text-neutral-400 font-sans">Tabular schemas, validation & normalization</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-300 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50">
              Pandas / SQL
            </span>
          </div>

          {/* Connection line */}
          <div className="flex justify-center -my-1 text-neutral-600">
            <ArrowDown className="w-4 h-4 text-cyan-500/60 animate-bounce" />
          </div>

          {/* Node 2: AI */}
          <div className="p-3 rounded-xl bg-[#10151C] border border-neutral-800 flex items-center justify-between group hover:border-cyan-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white tracking-wide">02 • AI & REASONING</div>
                <div className="text-[11px] text-neutral-400 font-sans">Context synthesis & pattern detection</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
              LLM APIs / Groq
            </span>
          </div>

          {/* Connection line */}
          <div className="flex justify-center -my-1 text-neutral-600">
            <ArrowDown className="w-4 h-4 text-violet-500/60 animate-bounce" />
          </div>

          {/* Node 3: SOFTWARE */}
          <div className="p-3 rounded-xl bg-[#10151C] border border-neutral-800 flex items-center justify-between group hover:border-violet-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-950/80 border border-violet-800/50 flex items-center justify-center text-violet-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white tracking-wide">03 • SOFTWARE ENGINEERING</div>
                <div className="text-[11px] text-neutral-400 font-sans">TypeScript REST APIs, auth & databases</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-violet-300 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-900/50">
              Express / Prisma
            </span>
          </div>

          {/* Connection line */}
          <div className="flex justify-center -my-1 text-neutral-600">
            <ArrowDown className="w-4 h-4 text-emerald-500/60 animate-bounce" />
          </div>

          {/* Node 4: PRACTICAL SOLUTION */}
          <div className="p-3 rounded-xl bg-[#10151C] border border-emerald-900/40 flex items-center justify-between group hover:border-emerald-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white tracking-wide">04 • PRACTICAL SOLUTION</div>
                <div className="text-[11px] text-neutral-400 font-sans">Tested, working software solving real problems</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
              Shipped
            </span>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span>Philosophy: Learn by Building</span>
          <span className="text-neutral-300">Zaid Hussain</span>
        </div>
      </div>
    </div>
  );
};
