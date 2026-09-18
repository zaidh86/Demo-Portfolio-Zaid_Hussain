import React from 'react';
import { Project } from '../types';
import { Github, ArrowUpRight, ShieldAlert, Sparkles, Layers, Terminal } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  selectedTech?: string | null;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, selectedTech }) => {
  const isMatch = selectedTech ? project.technologies.some(t => t.toLowerCase() === selectedTech.toLowerCase()) : false;

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 bg-[#0B0F14] ${
        isMatch
          ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50'
          : 'border-neutral-800/80 hover:border-neutral-700 hover:bg-[#0D1219]'
      }`}
    >
      <div>
        {/* Category & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono tracking-wider text-cyan-400 font-medium">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5">
            {project.hackathonAssociation && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-800/50">
                {project.hackathonAssociation}
              </span>
            )}
            {project.status && (
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  project.status === 'Completed'
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                    : project.status === 'In Development'
                    ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                    : 'bg-neutral-800/70 text-neutral-300 border border-neutral-700'
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Tagline / Description */}
        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
          {project.tagline}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => {
            const isHighlighted = selectedTech && tech.toLowerCase() === selectedTech.toLowerCase();
            return (
              <span
                key={tech}
                className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                  isHighlighted
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-semibold'
                    : 'bg-[#10151C] text-neutral-300 border border-neutral-800 group-hover:border-neutral-700'
                }`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold py-1 group/btn"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        {project.github && project.github !== '[ADD GITHUB LINK]' ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        ) : (
          <span className="text-[10px] font-mono text-neutral-500">
            [Repo Coming]
          </span>
        )}
      </div>
    </div>
  );
};
