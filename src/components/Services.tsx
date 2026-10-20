import React from 'react';
import {
  Globe,
  MonitorSmartphone,
  Code,
  Sparkles,
  PenTool,
  Award,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Services: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case 'Globe':
        return <Globe className={`${iconClass} text-pink-300`} />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone className={`${iconClass} text-purple-300`} />;
      case 'Code':
        return <Code className={`${iconClass} text-indigo-300`} />;
      case 'Sparkles':
        return <Sparkles className={`${iconClass} text-fuchsia-300`} />;
      case 'PenTool':
        return <PenTool className={`${iconClass} text-rose-300`} />;
      case 'Award':
        return <Award className={`${iconClass} text-amber-300`} />;
      default:
        return <Globe className={`${iconClass} text-pink-300`} />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services I Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/70">
            End-to-end website development, responsive engineering, and memorable visual branding.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const waUrl = `https://wa.me/${PERSONAL_INFO.whatsappClean}?text=${encodeURIComponent(
              service.waMessage
            )}`;

            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background ambient gradient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-pink-600/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shadow-inner">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-purple-300/80 border border-white/10">
                      Service
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-purple-200/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-purple-950/40 text-purple-200/90 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discuss Your Project (WhatsApp Button) */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-purple-200 bg-white/[0.04] hover:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-300 group/btn"
                    aria-label={`Discuss ${service.title} on WhatsApp`}
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Discuss Your Project</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
