import React from 'react';
import { Smartphone, Palette, Code2, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_CARDS, FACTUAL_STATS } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-pink-300" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-300" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-pink-300" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6 text-purple-100/80 text-base sm:text-lg leading-relaxed">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <p className="mb-4">
                {PERSONAL_INFO.aboutParagraph1}
              </p>
              <p>
                {PERSONAL_INFO.aboutParagraph2}
              </p>

              {/* Core Strengths Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10 text-sm">
                <div className="flex items-center gap-2.5 text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pixel-precise responsive layouts</span>
                </div>
                <div className="flex items-center gap-2.5 text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Interactive JavaScript & React logic</span>
                </div>
                <div className="flex items-center gap-2.5 text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Visual identity & logo creation</span>
                </div>
                <div className="flex items-center gap-2.5 text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Performance & accessibility focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Factual Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {FACTUAL_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-white">
                    {stat.value}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-2 leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-purple-300/60 mt-3 pt-3 border-t border-white/5">
                  {stat.helper}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* 3 Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {HIGHLIGHT_CARDS.map((card, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Subtle top glowing bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {getIcon(card.icon)}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-purple-200/75 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
