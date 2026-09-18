import React from 'react';
import { skillCategories } from '../data/skills';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TechStackSectionProps {
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
  onOpenProject: (projectId: string) => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  selectedTech,
  onSelectTech,
  onOpenProject
}) => {
  return (
    <section id="skills" className="py-20 border-t border-neutral-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            03 — TECH STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            TOOLS I BUILD WITH.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-sans">
            Technologies and areas I work with in practical projects. No artificial percentage bars —
            only verified tools connected to real implementation evidence.
          </p>
        </div>

        {/* Filter State Bar */}
        {selectedTech && (
          <div className="mb-6 p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <span>Filtering projects matching:</span>
              <span className="font-bold text-white bg-cyan-900/60 px-2 py-0.5 rounded">
                {selectedTech}
              </span>
            </div>
            <button
              onClick={() => onSelectTech(null)}
              className="text-xs font-mono text-neutral-400 hover:text-white underline"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Category Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-neutral-800 bg-[#0B0F14] p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                  {cat.name}
                </h3>
                <span className="text-[10px] font-mono text-neutral-400">
                  {cat.skills.length} Tools
                </span>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill) => {
                  const isSelected = selectedTech?.toLowerCase() === skill.name.toLowerCase();

                  return (
                    <div
                      key={skill.name}
                      onClick={() => onSelectTech(isSelected ? null : skill.name)}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-500/60 text-white'
                          : 'bg-[#10151C] border-neutral-800/80 text-neutral-300 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-xs font-mono font-medium">{skill.name}</span>
                      </div>

                      {skill.evidenceProject ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenProject(skill.evidenceProject!.id);
                          }}
                          className="text-[10px] font-mono text-neutral-400 hover:text-cyan-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 inline-flex items-center gap-1"
                          title={`View in ${skill.evidenceProject.title}`}
                        >
                          <span>{skill.evidenceProject.title}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      ) : (
                        <span className="text-[9px] font-mono text-neutral-400">
                          Verified
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
