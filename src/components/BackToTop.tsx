import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#170a2c]/90 text-pink-300 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:text-white hover:border-pink-400 hover:scale-110 active:scale-95 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      aria-label="Back to top of the page"
    >
      {/* Circular Progress Ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-purple-500/20"
        />
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke="url(#progressGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="119.38"
          strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>

      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};
