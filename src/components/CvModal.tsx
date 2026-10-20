import React, { useEffect } from 'react';
import { X, FileDown, Printer, GraduationCap, Code, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#140827] border border-purple-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-pink-300">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-xl font-bold text-white tracking-tight">
                Curriculum Vitae — {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs text-purple-300/70">
                Verified Credentials & Production Milestone Summary
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-purple-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Close CV Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Preview Content */}
        <div className="space-y-6 text-sm">
          
          {/* Candidate Overview */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Madiha Asif</h3>
                <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                  Web Developer & Graphic Designer • Karachi, Pakistan
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 self-start sm:self-auto">
                Open for Hire
              </span>
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              Creative web developer passionate about crafting modern, responsive digital solutions. Strong foundation combining web development with logo design and visual branding.
            </p>
          </div>

          {/* Education & Qualifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-pink-400" />
              <span>Education & Qualifications</span>
            </h4>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between">
                <div>
                  <span className="font-semibold text-white block text-xs sm:text-sm">
                    ADC (Diploma in Commerce) Part 1
                  </span>
                  <span className="text-xs text-purple-300/70">Karachi University</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded">
                  Enrolled
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between">
                <div>
                  <span className="font-semibold text-white block text-xs sm:text-sm">
                    Intermediate in Commerce
                  </span>
                  <span className="text-xs text-purple-300/70">Karachi College</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded">
                  Completed
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between">
                <div>
                  <span className="font-semibold text-white block text-xs sm:text-sm">
                    Matriculation in Computer Science
                  </span>
                  <span className="text-xs text-purple-300/70">Pak Grammar School</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded">
                  Completed
                </span>
              </div>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Verified Core Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Responsive Design',
                'Git & GitHub',
                'UI Design',
                'Graphic Design',
                'Logo Design'
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-purple-900/30 border border-purple-500/20 text-xs font-medium text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* File Replacement Guide Box */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-400/20 text-xs text-purple-200/80 space-y-1">
            <span className="font-semibold text-pink-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Easy CV Asset Replacement Guide</span>
            </span>
            <p>
              To replace this document with your custom PDF anytime, simply drop your file into:
            </p>
            <code className="block p-2 rounded bg-black/40 font-mono text-[11px] text-pink-200 mt-1 select-all">
              public/cv/Madiha_Asif_CV.pdf
            </code>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          {/* Direct PDF Download */}
          <a
            href="/cv/Madiha_Asif_CV.pdf"
            download="Madiha_Asif_CV.pdf"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-md transition-all min-h-[44px]"
          >
            <FileDown className="w-4 h-4" />
            <span>Download PDF CV</span>
          </a>

          {/* Printable HTML Viewer */}
          <a
            href="/cv/Madiha_Asif_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold text-purple-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all min-h-[44px]"
          >
            <Printer className="w-4 h-4 text-purple-300" />
            <span>Print / View HTML</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

      </div>
    </div>
  );
};
