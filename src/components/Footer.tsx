import React from 'react';
import {
  ArrowUp,
  Sparkles,
  ExternalLink,
  Code2,
  Palette
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InstagramIcon, GithubIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/15 bg-[#0a0415]/90 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid: Branding & Two Separate Instagram Accounts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Bio & Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-[1.5px] shadow-md shadow-purple-900/40">
                <div className="w-full h-full bg-[#120724] rounded-[9px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
                    MA
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-200/70 max-w-sm leading-relaxed">
              Creative Web Developer & Graphic Designer crafting responsive digital platforms, user-centered web applications, and distinctive brand identities.
            </p>

            <p className="text-xs text-pink-300 font-medium flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Available for freelance and collaborative projects.</span>
            </p>
          </div>

          {/* Col 2 & 3: Two Separate Instagram Accounts & GitHub Profile */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Instagram Profile 1: Graphic Design */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-pink-500/30 transition-all">
              <div className="flex items-center gap-2 text-pink-400">
                <Palette className="w-4 h-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">
                  Graphic & Logo Design
                </span>
              </div>
              <a
                href={PERSONAL_INFO.instagramGraphicDesign.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-sm font-semibold text-white hover:text-pink-300 transition-colors pt-1"
                aria-label="Open Graphic Design Instagram Profile in new tab"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>{PERSONAL_INFO.instagramGraphicDesign.label}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-[11px] text-purple-300/60 block font-mono">
                {PERSONAL_INFO.instagramGraphicDesign.handle}
              </span>
            </div>

            {/* Instagram Profile 2: Web Design */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-2 text-purple-400">
                <Code2 className="w-4 h-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80">
                  Web Design & Development
                </span>
              </div>
              <a
                href={PERSONAL_INFO.instagramWebDesign.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-sm font-semibold text-white hover:text-purple-300 transition-colors pt-1"
                aria-label="Open Web Design Instagram Profile in new tab"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>{PERSONAL_INFO.instagramWebDesign.label}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-[11px] text-purple-300/60 block font-mono">
                {PERSONAL_INFO.instagramWebDesign.handle}
              </span>
            </div>

            {/* GitHub Profile Card */}
            <div className="sm:col-span-2 p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-purple-200">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-pink-300 transition-colors block"
                    aria-label="Open GitHub Profile in new tab"
                  >
                    GitHub — My Code & Projects
                  </a>
                  <span className="text-[11px] text-purple-300/60 font-mono">
                    github.com/MadihaAsif66
                  </span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Visit GitHub Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Tagline, Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-purple-200/80 font-medium">
              "{PERSONAL_INFO.tagline}"
            </p>
            <p className="text-xs text-purple-300/50">
              © {currentYear} Madiha Asif. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-purple-200 bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-pink-300" />
          </button>

        </div>

      </div>
    </footer>
  );
};
