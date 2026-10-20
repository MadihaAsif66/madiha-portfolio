import React, { useState } from 'react';
import { ExternalLink, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectMockupPreview } from './ProjectMockupPreview';
import { GithubIcon } from './BrandIcons';
import type { ProjectItem } from '../types';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Full Platforms',
    'Interactive Apps',
    'Frontend Clones',
    'Personal & Docs',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const whatsappCtaUrl = `https://wa.me/${PERSONAL_INFO.whatsappClean}?text=${encodeURIComponent(
    "Hi Madiha, I was exploring your creative projects portfolio and would like to talk about building something similar for my business!"
  )}`;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Showcase Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Creative Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/70">
            A selection of websites and digital experiences I've built.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            const count =
              category === 'All'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 min-h-[40px] focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-900/40 scale-[1.02]'
                    : 'bg-white/[0.04] text-purple-200/70 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
                aria-pressed={isSelected}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-white/10 text-purple-300/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 8 Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Visual Mockup Preview */}
                <div className="mb-6 relative">
                  <ProjectMockupPreview project={project} />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#120724]/90 text-pink-200 border border-purple-400/30 backdrop-blur-md shadow-lg">
                      {project.badgeText}
                    </span>
                  </div>
                </div>

                {/* Project Header & Subtitle */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-200 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-900/30 text-purple-200 border border-purple-500/20 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-purple-100/75 leading-relaxed my-4">
                  {project.description}
                </p>

                {/* Verified Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-purple-200/90 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo & View Project */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {/* Live Demo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-md shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[42px]"
                  aria-label={`Open live demo for ${project.title} in new tab`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* View Project / Code Repository */}
                <a
                  href={project.githubUrl || project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-purple-400/40 transition-all duration-300 min-h-[42px]"
                  aria-label={`View code or project details for ${project.title}`}
                >
                  <GithubIcon className="w-3.5 h-3.5 text-purple-300" />
                  <span>View Project</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Final CTA Banner */}
        <div className="mt-20 glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-purple-500/25">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-300 block mb-2">
                Collaboration Ready
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have a Project in Mind?
              </h3>
              <p className="text-sm sm:text-base text-purple-200/80 mt-2 max-w-xl">
                Whether you need a full website build, a responsive redesign, or a memorable visual identity, let's bring your vision to life.
              </p>
            </div>

            <a
              href={whatsappCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap min-h-[48px]"
              aria-label="Contact Madiha Asif on WhatsApp about your project"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Let's Discuss on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-200" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
