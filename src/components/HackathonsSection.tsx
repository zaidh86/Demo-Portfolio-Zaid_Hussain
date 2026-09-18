import React from 'react';
import { hackathons } from '../data/hackathons';
import { Project } from '../types';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, ShieldCheck, Terminal, Award } from 'lucide-react';

interface HackathonsSectionProps {
  onOpenProject: (projectId: string) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ onOpenProject }) => {
  return (
    <section id="hackathons" className="py-20 border-t border-neutral-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            04 — HACKATHONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            BUILDING UNDER PRESSURE.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-sans">
            Hackathons have become an important part of how I learn — working with unfamiliar problems,
            experimenting with technology, debugging, collaborating, and shipping under constraints.
          </p>

          {/* Core Story Flow Visual */}
          <div className="mt-8 p-4 rounded-xl bg-[#0B0F14] border border-neutral-800/80 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-max text-neutral-400">
              <span className="text-neutral-500 font-semibold uppercase text-[10px] tracking-wider mr-2">
                HACKATHON LIFECYCLE:
              </span>
              {[
                'UNFAMILIAR PROBLEM',
                'RESEARCH',
                'EXPERIMENT',
                'BUILD',
                'DEBUG',
                'COLLABORATE',
                'SHIP'
              ].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1 rounded bg-[#10151C] text-cyan-300 border border-neutral-800 font-medium">
                    {step}
                  </span>
                  {idx < arr.length - 1 && <span className="text-neutral-600 font-mono">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon Timeline List */}
        <div className="space-y-8 relative">
          {hackathons.map((h, index) => (
            <div
              key={h.id}
              className="rounded-2xl border border-neutral-800 bg-[#0B0F14] p-6 sm:p-8 relative hover:border-neutral-700 transition-all duration-300"
            >
              {/* Top Meta Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-neutral-800/80 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {h.organizer ? `${h.organizer} • ` : ''}{h.format}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {h.participationType} Participation
                    </span>
                    {h.projectAssociated && (
                      <button
                        onClick={() => onOpenProject(h.projectAssociated!.projectId)}
                        className="text-xs font-mono text-violet-300 bg-violet-950/60 border border-violet-800/50 px-2.5 py-0.5 rounded hover:bg-violet-900/60 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Project: {h.projectAssociated.projectName}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{h.name}</h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-400 gap-1">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{h.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{h.duration}</span>
                  </div>
                  {h.location && (
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{h.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Theme & Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Event Theme
                    </h4>
                    <p className="text-sm font-semibold text-white">{h.theme}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Hackathon Experience
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      {h.description}
                    </p>
                  </div>

                  {/* Flow Stages */}
                  {h.storyFlow && (
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Execution Stages
                      </h4>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                        {h.storyFlow.map((step, idx) => (
                          <span
                            key={step}
                            className="px-2 py-0.5 rounded bg-[#10151C] border border-neutral-800 text-neutral-300"
                          >
                            <span className="text-cyan-400 mr-1">{idx + 1}.</span>
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Focus Areas & Technologies */}
                <div className="lg:col-span-5 space-y-4 bg-[#10151C] p-5 rounded-xl border border-neutral-800/80">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
                      Engineering Focus
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                      {h.focusAreas.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-neutral-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Technologies Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {h.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#0B0F14] border border-neutral-800 text-neutral-300 font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1.5 font-semibold">
                      Key Takeaway
                    </h4>
                    <ul className="space-y-1 text-xs text-neutral-300 font-sans">
                      {h.learning.map((l, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
