import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { ProjectsGallery } from './components/ProjectsGallery';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col bg-[#0c051a]">
      {/* Animated Hero & Ambient Background */}
      <BackgroundCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About Me Section */}
        <AboutMe />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Projects Portfolio Gallery (8 Verified Projects) */}
        <ProjectsGallery />

        {/* 5. Skills Section */}
        <SkillsSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer with Two Separate Instagram Accounts */}
      <Footer />

      {/* CV Preview & Download Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
