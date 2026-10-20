import React, { useState, useEffect } from 'react';
import { MessageCircle, FileDown, Briefcase, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const titles = [
    'Web Developer',
    'Creative Designer',
    'Digital Creator',
    'UI/UX Enthusiast',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(PERSONAL_INFO.headline);
      return;
    }

    const currentFullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappClean}?text=${encodeURIComponent(
    "Hi Madiha! I saw your portfolio and would like to discuss a project with you."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[92svh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-950/40 border border-purple-500/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-purple-200">
                {PERSONAL_INFO.availabilityBadge}
              </span>
            </div>

            {/* Small Introductory Text */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.28em] text-pink-300 uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>{PERSONAL_INFO.greeting}</span>
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
              <span className="gradient-text-hero">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Animated Headline */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-purple-200/90 font-mono tracking-tight">
                {displayText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-pink-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-purple-100/75 max-w-2xl leading-relaxed mb-9">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              {/* Explore My Work */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-400 shadow-[0_0_25px_rgba(192,132,252,0.3)] hover:shadow-[0_0_35px_rgba(217,70,239,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore My Work</span>
              </a>

              {/* Hire Me (WhatsApp) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-400/50 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                aria-label="Hire Madiha Asif via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hire Me</span>
              </a>

              {/* Download CV */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-purple-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
              >
                <FileDown className="w-4 h-4 text-pink-300" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  8
                </p>
                <p className="text-xs text-purple-300/70 uppercase tracking-wider font-medium mt-1">
                  Live Websites
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  2
                </p>
                <p className="text-xs text-purple-300/70 uppercase tracking-wider font-medium mt-1">
                  Disciplines
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  100%
                </p>
                <p className="text-xs text-purple-300/70 uppercase tracking-wider font-medium mt-1">
                  Responsive
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait / Avatar Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square">
              
              {/* Outer Glowing Gradient Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-pink-500/25 to-indigo-500/30 blur-2xl -z-10 transform scale-95" />

              {/* Card Container */}
              <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-br from-purple-400/30 via-white/10 to-pink-400/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(20,5,38,0.6)]">
                <div className="w-full h-full rounded-[22px] bg-[#140827]/90 border border-purple-500/20 p-6 flex flex-col justify-between overflow-hidden relative group">
                  
                  {/* Subtle inner decorative grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none" />

                  {/* Top Bar of Avatar Card */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-pink-500/70" />
                      <span className="w-3 h-3 rounded-full bg-purple-500/70" />
                      <span className="w-3 h-3 rounded-full bg-indigo-500/70" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-900/40 text-purple-200 border border-purple-500/20">
                      Karachi, PK
                    </span>
                  </div>

                  {/* Creative Profile Centerpiece */}
                  <div className="flex flex-col items-center justify-center my-4 z-10">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 shadow-[0_0_35px_rgba(217,70,239,0.35)] animate-float-slow">
                      <div className="w-full h-full rounded-full bg-[#1b0c36] flex flex-col items-center justify-center overflow-hidden border-2 border-white/20">
                        {/* MA Monogram Graphic Signature */}
                        <div className="relative flex items-center justify-center">
                          <span className="font-extrabold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-pink-100 via-purple-200 to-purple-400 tracking-tighter">
                            MA
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-pink-300/80 -mt-1">
                          Portfolio
                        </span>
                      </div>

                      {/* Small badge overlay */}
                      <div className="absolute bottom-1 right-1 p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg border-2 border-[#140827]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        Madiha Asif
                      </h3>
                      <p className="text-xs text-purple-300/80 font-medium mt-0.5">
                        Web Developer & Graphic Designer
                      </p>
                    </div>
                  </div>

                  {/* Floating Micro Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 z-10 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      <Layers className="w-3.5 h-3.5 text-pink-300" />
                      <span className="text-[11px] font-medium text-purple-200">
                        Modern UI/UX
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-medium text-purple-200">
                        Clean Code
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Floating Pill 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#1d0d38]/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float-slow hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-white">Full-Stack Passion</span>
              </div>

              {/* Floating Pill 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#1d0d38]/90 border border-pink-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 hidden sm:flex">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-xs font-semibold text-white">Logo & Branding</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-purple-300/60 hover:text-pink-300 transition-colors p-2"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Scroll Down
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-purple-400/30 flex items-start justify-center p-1">
              <span className="w-1.5 h-2 rounded-full bg-pink-400 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
