import React from 'react';
import {
  FileCode,
  Layers,
  Terminal,
  ShieldCheck,
  Atom,
  Smartphone,
  Layout,
  PenTool,
  Sparkles,
  GitBranch,
  Zap,
  CloudUpload,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const renderSkillIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-purple-300 group-hover:text-pink-300 transition-colors";
    switch (iconName) {
      case 'FileCode':
        return <FileCode className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Atom':
        return <Atom className={iconClass} />;
      case 'Smartphone':
        return <Smartphone className={iconClass} />;
      case 'Layout':
        return <Layout className={iconClass} />;
      case 'PenTool':
        return <PenTool className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'GitBranch':
        return <GitBranch className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'CloudUpload':
        return <CloudUpload className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Creative Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/70">
            A verified toolkit grounded in live production projects, clean web standards, and visual design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Skill Category Groups */}
        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 sm:p-8 rounded-3xl flex flex-col justify-between border border-white/10"
            >
              <div>
                {/* Category Header */}
                <div className="mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                    <span>{category.title}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-500/20">
                      {category.skills.length} Skills
                    </span>
                  </h3>
                  <p className="text-xs text-purple-200/60 mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Skill Cards within Category */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/5 hover:border-purple-400/20 transition-all duration-200 flex items-start gap-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        {renderSkillIcon(skill.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-pink-200 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-medium text-pink-300/80 uppercase tracking-wider">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-purple-200/60 mt-1 line-clamp-1">
                          {skill.verifiedContext}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Verification Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Backed by live code</span>
                </span>
                <span className="text-[10px] text-purple-300/50">100% Honest</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
