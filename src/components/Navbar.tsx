import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Hackathons', target: 'hackathons' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-[#050505]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => handleScroll('hero')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 p-[1px]">
            <div className="w-full h-full bg-[#080A0F] rounded-[7px] flex items-center justify-center text-xs font-mono font-bold text-cyan-300">
              ZH
            </div>
          </div>
          <div>
            <div className="font-mono text-sm font-bold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
              ZAID HUSSAIN
            </div>
            <div className="text-[10px] font-mono text-neutral-400 -mt-0.5">
              Data Science Student
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.target)}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Primary CTA button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleScroll('contact')}
            className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors font-mono text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#080A0F] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.target)}
              className="block w-full text-left py-2 text-sm font-mono text-neutral-300 hover:text-cyan-300 transition-colors border-b border-neutral-900 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleScroll('contact')}
              className="w-full py-2.5 rounded-lg bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold text-center"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
