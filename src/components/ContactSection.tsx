import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: 'Website Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectOptions = [
    'Website Development',
    'Responsive Web Design',
    'Frontend Development',
    'Website Redesign',
    'Graphic Design',
    'Logo Design & Branding',
    'Other / Consultation',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Please write a message with at least 10 characters.');
      return;
    }

    // Trigger celebratory confetti
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c084fc', '#f472b6', '#38bdf8', '#fbbf24', '#ffffff'],
      });
    }

    setSubmitted(true);
  };

  // Generate URL for WhatsApp with the submitted message
  const generateWhatsAppSubmissionUrl = () => {
    const text = `Hi Madiha! My name is ${formData.fullName.trim()} (${formData.email.trim()}).\n\nProject Type: ${formData.projectType}\n\nProject Brief:\n${formData.message.trim()}`;
    return `https://wa.me/${PERSONAL_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
  };

  // Generate Mailto URL fallback
  const generateMailtoSubmissionUrl = () => {
    const subject = `Project Inquiry: ${formData.projectType} — ${formData.fullName.trim()}`;
    const body = `Name: ${formData.fullName.trim()}\nEmail: ${formData.email.trim()}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message.trim()}`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const directWhatsAppUrl = `https://wa.me/${PERSONAL_INFO.whatsappClean}?text=${encodeURIComponent(
    "Hi Madiha, I would like to consult with you about building a modern website or designing a brand identity."
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/75 leading-relaxed max-w-2xl mx-auto">
            Have an idea, need a website, or want to improve your brand's online presence? I'd love to hear about your project. Let's discuss how I can help.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="glass-panel p-8 rounded-3xl space-y-6 border border-white/10">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-purple-200/70">
                Choose the channel most convenient for you. I respond promptly to inquiries from freelance clients, recruiters, and businesses.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between group hover:border-purple-400/30 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/25 flex items-center justify-center flex-shrink-0 text-pink-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/60 block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-pink-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors ml-2 flex-shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Card */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between group hover:border-emerald-400/30 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-950/40 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 text-emerald-300">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/60 block">
                        WhatsApp Fast Chat
                      </span>
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-950/50 transition-colors ml-2 flex-shrink-0"
                    aria-label="Open WhatsApp chat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between group hover:border-purple-400/30 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/25 flex items-center justify-center flex-shrink-0 text-purple-200">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/60 block">
                        Code Repositories
                      </span>
                      <a
                        href={PERSONAL_INFO.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-pink-300 transition-colors truncate block"
                      >
                        github.com/MadihaAsif66
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors ml-2 flex-shrink-0"
                    aria-label="Open GitHub profile in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                  aria-label="Contact Me on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Contact Me on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200/70 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Available for freelance contracts, part-time engagements, and remote client projects worldwide.</span>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/70 mt-1">
                      Fill out the form below. Once reviewed, we can continue directly over WhatsApp or Email.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
                      Full Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Sarah Khan or David Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.07] transition-all min-h-[48px]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
                      Email Address <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.07] transition-all min-h-[48px]"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
                      Project Type <span className="text-pink-400">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#170a2c] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 transition-all min-h-[48px]"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#170a2c] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
                      Message & Requirements <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Briefly describe your project goals, desired features, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-400 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] min-h-[48px]"
                  >
                    <Send className="w-4 h-4 text-pink-200" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                /* High-Delight Success State */
                <div className="text-center py-8 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-purple-200/80 mt-2 max-w-md mx-auto">
                      Your inquiry has been compiled with zero latency. For the fastest response, send it directly to my WhatsApp or Email with one click below:
                    </p>
                  </div>

                  {/* Submission Summary Preview */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div>
                      <span className="text-purple-300/60 font-semibold uppercase">Project:</span>{' '}
                      <span className="text-white font-medium">{formData.projectType}</span>
                    </div>
                    <div>
                      <span className="text-purple-300/60 font-semibold uppercase">Sender:</span>{' '}
                      <span className="text-white font-medium">{formData.fullName} ({formData.email})</span>
                    </div>
                    <div className="pt-1 text-purple-200/70 italic line-clamp-2">
                      "{formData.message}"
                    </div>
                  </div>

                  {/* 2 Real Action Flows */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                    {/* Instant WhatsApp Flow */}
                    <a
                      href={generateWhatsAppSubmissionUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/30 transition-all flex-1 min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>

                    {/* Email Fallback Flow */}
                    <a
                      href={generateMailtoSubmissionUrl()}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold text-purple-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all flex-1 min-h-[44px]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        projectType: 'Website Development',
                        message: '',
                      });
                    }}
                    className="text-xs text-purple-300/60 hover:text-white underline underline-offset-4 pt-4 block mx-auto"
                  >
                    Submit another response
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
