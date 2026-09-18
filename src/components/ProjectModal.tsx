import React, { useEffect } from 'react';
import { Project, FeatureItem } from '../types';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Clock, Calendar, Layers, AlertCircle } from 'lucide-react';
import { AIDataAnalyzerVisual } from './AIDataAnalyzerVisual';
import { TransitOpsVisual } from './TransitOpsVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0E14] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              {project.status && (
                <span className="text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-700 px-2.5 py-0.5 rounded-full">
                  Status: {project.status}
                </span>
              )}
              {project.hackathonAssociation && (
                <span className="text-xs font-mono text-violet-300 bg-violet-950/40 border border-violet-800/40 px-2.5 py-0.5 rounded-full">
                  ★ {project.hackathonAssociation}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl font-sans">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm">
          {/* Visual Showcase */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Interface & Architecture Visual</span>
            </div>
            {project.visualType === 'analytics-dashboard' && <AIDataAnalyzerVisual />}
            {project.visualType === 'system-architecture' && <TransitOpsVisual />}
            {project.visualType === 'placeholder' && (
              <div className="border border-dashed border-neutral-800 rounded-xl p-8 text-center bg-[#080A0F]">
                <p className="text-neutral-400 font-mono text-xs">
                  [ADD VERIFIED VISUAL] — Architecture & product views will populate once verified project documentation is integrated.
                </p>
              </div>
            )}
          </div>

          {/* Problem & Approach Grid */}
          {(project.problem || project.approach || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="bg-[#10151C] border border-neutral-800/90 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                    01 • The Problem
                  </h3>
                  <p className="text-neutral-300 leading-relaxed font-sans text-xs sm:text-sm">
                    {project.problem}
                  </p>
                </div>
              )}
              {(project.approach || project.solution) && (
                <div className="bg-[#10151C] border border-neutral-800/90 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                    02 • The Approach & Solution
                  </h3>
                  <p className="text-neutral-300 leading-relaxed font-sans text-xs sm:text-sm">
                    {project.approach || project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Workflow Sequence */}
          {project.workflow && project.workflow.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Core Workflow Pipeline
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {project.workflow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="px-3 py-1.5 rounded-lg bg-[#111827] border border-neutral-700/60 text-xs font-mono text-cyan-300">
                      <span className="text-neutral-500 mr-1.5">0{idx + 1}.</span>
                      {step}
                    </div>
                    {idx < (project.workflow?.length ?? 0) - 1 && (
                      <span className="text-neutral-600 font-mono text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Features with Real Implementation Status */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Development Roadmap & Verified Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => {
                  const isString = typeof feature === 'string';
                  const name = isString ? feature : feature.name;
                  const status = isString ? 'In Development' : feature.status;
                  const note = !isString ? feature.note : undefined;

                  return (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#0B0F14] border border-neutral-800 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <div className="text-neutral-200 font-medium text-xs sm:text-sm">{name}</div>
                        {note && <div className="text-neutral-400 text-xs font-mono">{note}</div>}
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                          status === 'Implemented'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                            : status === 'In Development'
                            ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                            : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MY CONTRIBUTION (Strict Authenticity Boundary) */}
          {project.contribution && project.contribution.length > 0 && (
            <div className="bg-[#10151C] border border-cyan-900/40 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                  My Contribution & Role
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & What I Learned */}
          {(project.challenges || project.learning) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challenges && (
                <div className="bg-[#0B0F14] border border-neutral-800 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
                    Challenges Encountered
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learning && (
                <div className="bg-[#0B0F14] border border-neutral-800 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    What I Learned
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {project.learning.map((l, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">
              Verified Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-[#10151C] border border-neutral-800 font-mono text-xs text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github && project.github !== '[ADD GITHUB LINK]' ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors font-mono text-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900/60 px-3 py-1.5 rounded border border-neutral-800">
                  GitHub: [ADD GITHUB LINK]
                </span>
              )}

              {project.demo && project.demo !== '[ADD LIVE DEMO]' && project.demo !== '[ADD LIVE LINK]' ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/30 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/40 transition-colors font-mono text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900/60 px-3 py-1.5 rounded border border-neutral-800">
                  Demo: [ADD LIVE DEMO]
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-2"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
