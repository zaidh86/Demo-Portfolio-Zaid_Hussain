import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVisual } from './components/HeroVisual';
import { TechStackSection } from './components/TechStackSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { HackathonsSection } from './components/HackathonsSection';
import { projects } from './data/projects';
import { Project } from './types';
import {
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Layers,
  Database,
  Cpu,
  Code2,
  Lightbulb,
  GraduationCap,
  Calendar,
  Compass,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectById = (projectId: string) => {
    const proj = projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const filteredProjects = selectedTech
    ? projects.filter((p) =>
        p.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase())
      )
    : projects;

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* 01 — HERO SECTION */}
      <section id="hero" className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow & Status */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DATA • AI • SOFTWARE</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#0B0F14] text-xs font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CURRENTLY: Learning • Building • Experimenting</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                BUILDING WITH DATA, <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  AI & PRACTICAL CODE.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed font-sans">
                I'm <strong className="text-white font-medium">Zaid Hussain</strong>, a Data Science
                student exploring the intersection of data, artificial intelligence, and software
                development — turning ideas and real-world problems into practical solutions.
              </p>

              {/* Personality Keywords */}
              <div className="pt-1 flex flex-wrap gap-2">
                {['BUILD', 'ANALYZE', 'AUTOMATE', 'LEARN', 'SHIP'].map((word) => (
                  <span
                    key={word}
                    className="px-3 py-1 rounded bg-[#0B0F14] border border-neutral-800 text-[11px] font-mono tracking-widest text-neutral-400 font-semibold"
                  >
                    {word}
                  </span>
                ))}
              </div>

              {/* Hero Call To Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 rounded-lg bg-cyan-500 text-neutral-950 hover:bg-cyan-400 transition-colors font-mono text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 rounded-lg bg-[#10151C] border border-neutral-700 text-neutral-200 hover:border-neutral-500 hover:text-white transition-colors font-mono text-xs font-semibold tracking-wider uppercase"
                >
                  Let's Connect
                </button>

                <a
                  href="https://github.com/zaidh86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0B0F14] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: zaidh86"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Right Column: Abstract Technical Visual */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — ABOUT SECTION */}
      <section id="about" className="py-20 relative z-10 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              02 — ABOUT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              LEARNING BY BUILDING.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Personal Narrative */}
            <div className="lg:col-span-5 space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              <p>
                I am a <strong className="text-white">Data Science student</strong> passionate about
                transforming data into meaningful insights and building intelligent, practical
                solutions.
              </p>
              <p>
                My technical interests span data analytics, artificial intelligence, machine learning,
                and software development — with a focus on writing clean Python, developing
                AI-assisted workflows, and creating automated systems.
              </p>
              <p>
                Rather than treating theory as an end in itself, I strengthen my abilities through
                hands-on projects, coding challenges, hackathons, and practical experimentation.
                Every project is an opportunity to turn ideas into working code.
              </p>
              <div className="p-4 rounded-xl bg-[#0B0F14] border border-neutral-800 text-xs font-mono text-neutral-400 space-y-1">
                <div className="text-cyan-400 font-semibold uppercase">Positioning Statement</div>
                <div>Data Science Student • Problem Solver • AI & Data Analytics Enthusiast</div>
              </div>
            </div>

            {/* Right Column: 4 Concept Blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-blue-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  BLOCK 01
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">DATA</h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Turning raw information into structured insights through exploratory analysis,
                  cleaning, statistical summaries, and dynamic visualizations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-cyan-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  BLOCK 02
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">AI</h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Exploring intelligent applications and integrating LLM reasoning APIs to augment
                  analytical tasks with contextual summaries.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-violet-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-violet-950 border border-violet-800/50 flex items-center justify-center text-violet-400 mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  BLOCK 03
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">SOFTWARE</h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Turning ideas into working full-stack applications with TypeScript, Express REST
                  APIs, authentication, and relational database schemas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-emerald-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  BLOCK 04
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">PROBLEM SOLVING</h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Learning through competitive hackathons, debugging complex integration bugs, and
                  shipping robust solutions under real-world constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — TECH STACK SECTION */}
      <TechStackSection
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
        onOpenProject={handleOpenProjectById}
      />

      {/* 04 — PROJECTS SECTION */}
      <section id="projects" className="py-20 border-t border-neutral-800/80 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
                04 — PROJECTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                THINGS I'VE BUILT.
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-sans">
                Real software and data applications built to solve problems, explore architectures,
                and apply what I learn.
              </p>
            </div>

            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline self-start md:self-auto"
              >
                Reset Filter (Showing: {selectedTech})
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                selectedTech={selectedTech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — HACKATHONS SECTION */}
      <HackathonsSection onOpenProject={handleOpenProjectById} />

      {/* 06 — BUILDING JOURNEY */}
      <section className="py-20 border-t border-neutral-800/80 relative z-10 bg-[#080A0F]/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            06 — BUILDING JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            THE ITERATIVE CYCLE.
          </h2>

          {/* Flow visual */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {['LEARN', 'BUILD', 'BREAK', 'IMPROVE', 'SHIP'].map((phase, idx, arr) => (
              <React.Fragment key={phase}>
                <div className="px-4 py-2.5 rounded-xl bg-[#10151C] border border-neutral-800 text-xs sm:text-sm font-mono font-bold text-cyan-300 shadow-md">
                  {phase}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-neutral-600 font-mono text-sm sm:text-base">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-2 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            <p>
              "My projects are where I turn concepts into practice.
              Sometimes I build from scratch. Sometimes I integrate different systems.
              Sometimes I debug something that should have worked."
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono pt-1">
              Every project and every hackathon becomes another step in the learning process.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — EDUCATION SECTION */}
      <section id="education" className="py-20 border-t border-neutral-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center sm:text-left">
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              07 — EDUCATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              ACADEMIC BACKGROUND.
            </h2>
            <p className="text-sm text-neutral-400 font-sans">
              Foundations in mathematics, data science, and analytical thinking.
            </p>
          </div>

          <div className="space-y-6 relative border-l border-neutral-800 ml-4 sm:ml-6 pl-6 sm:pl-8">
            {/* Degree */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#050505]" />
              <div className="p-6 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">St. Joseph's Degree & PG College</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                    July 2025 – May 2029
                  </span>
                </div>
                <div className="text-sm font-semibold text-neutral-300 mb-2 font-mono">
                  Bachelor's Degree in Data Science
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Core focus on probability, statistics, data analytics, machine learning algorithms,
                  programming, and computational data analysis.
                </p>
              </div>
            </div>

            {/* High School */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-600 border-4 border-[#050505]" />
              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-white">Madina High School</h3>
                  <span className="text-xs font-mono text-neutral-400">
                    May 2018 – March 2023
                  </span>
                </div>
                <div className="text-xs text-neutral-400 font-sans">
                  Secondary education emphasizing science, mathematics, and foundational logic.
                </div>
              </div>
            </div>

            {/* Earlier */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-700 border-4 border-[#050505]" />
              <div className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-white">International Indian School, Dammam</h3>
                  <span className="text-xs font-mono text-neutral-400">
                    April 2011 – March 2018
                  </span>
                </div>
                <div className="text-xs text-neutral-400 font-sans">
                  Early primary & middle schooling foundations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — CURRENTLY LEARNING */}
      <section className="py-20 border-t border-neutral-800/80 relative z-10 bg-[#080A0F]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              08 — CURRENTLY LEARNING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              STILL EXPLORING.
            </h2>
            <p className="text-sm text-neutral-400 font-sans">
              Qualitative development roadmap — tracking active research areas without arbitrary percentages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { topic: 'Data Science & Statistical Modeling', state: 'Learning', desc: 'Exploratory data analysis, distributions, and inferential hypothesis testing.' },
              { topic: 'Generative AI & LLM Systems', state: 'Building', desc: 'Context windows, tool integration, and practical AI application pipelines.' },
              { topic: 'Machine Learning Algorithms', state: 'Learning', desc: 'Supervised classification, regression, and model evaluation metrics.' },
              { topic: 'Full-Stack Software Architecture', state: 'Building', desc: 'TypeScript, REST APIs, relational schemas, and authenticated services.' },
              { topic: 'Data Visualization & Dashboards', state: 'Experimenting', desc: 'Streamlit, Plotly, and reactive exploratory dashboards.' },
              { topic: 'Emerging Technologies & Automation', state: 'Exploring', desc: 'Scripting, workflow automation, and distributed developer tools.' }
            ].map((item) => (
              <div
                key={item.topic}
                className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-neutral-500 uppercase">Focus Area</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        item.state === 'Building'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/50 font-semibold'
                          : item.state === 'Learning'
                          ? 'bg-blue-950 text-blue-300 border border-blue-800/50'
                          : 'bg-violet-950 text-violet-300 border border-violet-800/50'
                      }`}
                    >
                      {item.state}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.topic}</h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — CONTACT SECTION */}
      <section id="contact" className="py-24 border-t border-neutral-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            09 — CONTACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Have an idea, project, hackathon collaboration, or an interesting problem to solve?
            Let's connect.
          </p>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <a
              href="mailto:zaidh8680@gmail.com"
              className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-cyan-500/50 hover:bg-[#10151C] transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mb-1">Email Directly</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono truncate">
                zaidh8680@gmail.com
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/zaid-hussain-a21875382/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-blue-500/50 hover:bg-[#10151C] transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mb-1">Professional</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono truncate">
                Zaid Hussain on LinkedIn
              </div>
            </a>

            <a
              href="https://github.com/zaidh86"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0F14] border border-neutral-800 hover:border-violet-500/50 hover:bg-[#10151C] transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-violet-950 text-violet-400 flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mb-1">Source Code</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono truncate">
                github.com/zaidh86
              </div>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to project discussions, hackathons, and technical collaborations.</span>
          </div>
        </div>
      </section>

      {/* 10 — FOOTER */}
      <footer className="border-t border-neutral-900 bg-[#050505] py-8 text-xs font-mono text-neutral-400 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold text-white">ZAID HUSSAIN</span>
            <span className="text-neutral-500 mx-2">—</span>
            <span>Building with Data, AI & Code.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zaidh86"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zaid-hussain-a21875382/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:zaidh8680@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-neutral-500">© 2026 Zaid Hussain</div>
        </div>
      </footer>

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
