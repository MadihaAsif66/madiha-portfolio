import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#110722]/85 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_10px_30px_-10px_rgba(15,7,31,0.7)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl p-1"
              aria-label="Madiha Asif Portfolio Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-purple-900/40">
                <div className="w-full h-full bg-[#140827] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-white">
                    MA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-pink-200 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] font-medium text-purple-300/70 tracking-wide -mt-1 hidden sm:block">
                  Web Developer & Designer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-purple-600/30 shadow-inner border border-purple-400/25'
                        : 'text-purple-200/70 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-400 shadow-[0_0_20px_rgba(217,70,239,0.25)] hover:shadow-[0_0_25px_rgba(217,70,239,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-purple-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 min-h-[44px] min-w-[44px]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-[82%] max-w-sm h-full bg-[#120724] border-l border-purple-500/20 shadow-2xl p-6 pt-24 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-2">
            <div className="pb-4 mb-4 border-b border-white/10">
              <span className="text-xs uppercase font-semibold tracking-widest text-purple-300/60">
                Navigation
              </span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-400/30 font-semibold'
                      : 'text-purple-200/80 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-900/30"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-purple-300/50">
              Madiha Asif • Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
