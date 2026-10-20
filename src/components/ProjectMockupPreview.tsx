import React from 'react';
import {
  Calculator,
  Apple,
  ShoppingCart,
  FileText,
  Compass,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectMockupPreviewProps {
  project: ProjectItem;
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({ project }) => {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#110722] rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-400/30 transition-all duration-500 shadow-inner">
      {/* Top Browser Chrome Bar */}
      <div className="h-7 bg-[#170a2c] border-b border-white/10 px-3 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="px-3 py-0.5 rounded-md bg-[#0e051c] text-[10px] font-mono text-purple-300/70 max-w-[200px] truncate border border-white/5">
          {new URL(project.liveUrl).hostname}
        </div>
        <div className="w-6 flex justify-end">
          <ExternalLink className="w-3 h-3 text-purple-400/50" />
        </div>
      </div>

      {/* Mockup Canvas Area */}
      <div className="relative w-full h-[calc(100%-28px)] overflow-hidden flex flex-col justify-between p-4 transition-transform duration-700 group-hover:scale-[1.03]">
        
        {/* Project 1: Zaviyar Interior Design */}
        {project.previewType === 'interior' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#1c140a] via-[#0f0a04] to-[#1a1208] p-4 rounded-xl border border-amber-500/20 text-white">
            <div className="flex items-center justify-between border-b border-amber-500/15 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-serif font-bold">Z</span>
                <span className="font-serif tracking-widest text-xs uppercase text-amber-200">Zaviyar Interior</span>
              </div>
              <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">Karachi Studio</span>
            </div>
            <div className="my-auto py-2">
              <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-widest block mb-1">Bespoke Furniture</span>
              <h4 className="font-serif text-lg text-amber-100 font-semibold leading-tight">Maison Noir & Zariya Luxury Bedroom Suites</h4>
              <p className="text-[11px] text-amber-200/70 mt-1 line-clamp-1">Curated custom furniture with WhatsApp direct consultation</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-amber-500/15">
              <span className="text-xs font-mono font-bold text-amber-300">Rs 485,000</span>
              <span className="text-[10px] font-medium px-2 py-1 rounded bg-amber-500 text-black font-semibold">WhatsApp Order</span>
            </div>
          </div>
        )}

        {/* Project 2: Student Attendance Tracker */}
        {project.previewType === 'attendance' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#0e1726] via-[#090d16] to-[#0c1322] p-4 rounded-xl border border-blue-500/20 text-white">
            <div className="flex items-center justify-between border-b border-blue-500/15 pb-2">
              <span className="text-[10px] font-mono text-blue-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Browser Tab: "Attendance: 5"
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Good Attendance ⭐</span>
            </div>
            <div className="my-auto flex items-center justify-around py-2">
              <div className="text-center">
                <span className="text-[10px] text-blue-200/60 uppercase">Student</span>
                <p className="text-xs font-bold text-white">Madiha Asif</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-mono font-extrabold text-blue-300">5</span>
                <span className="text-[8px] uppercase tracking-wider text-blue-200/60">Present</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="px-2 py-1 rounded bg-blue-600 text-[10px] font-bold text-center">+ Present</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] text-center">- Remove</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-blue-200/60 pt-2 border-t border-blue-500/15">
              <span>useRef Focus State</span>
              <span>Non-negative Safeguard</span>
            </div>
          </div>
        )}

        {/* Project 3: Modern Web Calculator */}
        {project.previewType === 'calculator' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#1f0f29] via-[#12071a] to-[#1c0d25] p-3.5 rounded-xl border border-fuchsia-500/20 text-white">
            <div className="flex items-center justify-between pb-1.5 border-b border-fuchsia-500/15">
              <span className="text-[10px] font-mono text-fuchsia-300 flex items-center gap-1.5">
                <Calculator className="w-3 h-3 text-pink-400" />
                JavaScript Calculator
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-200">DOM Engine</span>
            </div>
            <div className="bg-[#12071a] p-2 rounded-lg border border-fuchsia-500/20 text-right my-1">
              <span className="text-[10px] text-purple-300/50 font-mono block">248 × 16</span>
              <span className="text-lg font-mono font-bold text-pink-200">3,968</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center">
              <span className="p-1 rounded bg-rose-950/40 text-rose-300 border border-rose-500/20">C</span>
              <span className="p-1 rounded bg-white/5 text-purple-200">DEL</span>
              <span className="p-1 rounded bg-white/5 text-purple-200">+/-</span>
              <span className="p-1 rounded bg-fuchsia-600/40 text-fuchsia-200 font-bold">÷</span>
              <span className="p-1 rounded bg-white/5">7</span>
              <span className="p-1 rounded bg-white/5">8</span>
              <span className="p-1 rounded bg-white/5">9</span>
              <span className="p-1 rounded bg-fuchsia-600/40 text-fuchsia-200 font-bold">×</span>
              <span className="p-1 rounded bg-white/5">4</span>
              <span className="p-1 rounded bg-white/5">5</span>
              <span className="p-1 rounded bg-white/5">6</span>
              <span className="p-1 rounded bg-fuchsia-600/40 text-fuchsia-200 font-bold">-</span>
            </div>
          </div>
        )}

        {/* Project 4: OPTP Pakistan Restaurant */}
        {project.previewType === 'optp' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#2a0e0e] via-[#1a0808] to-[#250d0d] p-4 rounded-xl border border-red-500/20 text-white">
            <div className="flex items-center justify-between border-b border-red-500/15 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[9px]">OP</span>
                <span className="text-xs font-black tracking-wider text-red-200">OPTP PAKISTAN</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-red-500/20 text-amber-300 font-bold">We Only Fry Fire</span>
            </div>
            <div className="my-auto py-1">
              <span className="text-[10px] uppercase font-bold text-amber-400">WELCOME TO OPTP</span>
              <h4 className="text-sm font-extrabold text-white leading-tight">Fresh Hand-Cut Fries & Gourmet Smashed Burgers</h4>
              <p className="text-[10px] text-red-200/70 mt-1 line-clamp-1">Founded in 1998 • Pioneering crispy potato cuisine</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-red-500/15">
              <span className="text-[11px] font-bold text-amber-300">+ Add Smashed Burger</span>
              <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[10px] font-bold">Order Now</span>
            </div>
          </div>
        )}

        {/* Project 5: Apple Flagship Experience */}
        {project.previewType === 'apple' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#121214] via-[#080809] to-[#141416] p-4 rounded-xl border border-slate-500/20 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <Apple className="w-3.5 h-3.5 text-white" />
                <span className="text-[9px] text-white/60 tracking-wider">Store  Mac  iPad  iPhone</span>
              </div>
              <span className="text-[9px] text-purple-300 font-mono">Special Event</span>
            </div>
            <div className="my-auto text-center py-2">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-white">iPhone 17 Pro</span>
              <h4 className="text-sm font-bold text-white mt-0.5">Titanium. Breakthrough Battery.</h4>
              <p className="text-[10px] text-white/60 mt-1">AirPods Pro 3 with Active Noise Cancellation</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
              <span className="text-purple-300 underline underline-offset-2">Watch the Film</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-medium">Explore Lineup</span>
            </div>
          </div>
        )}

        {/* Project 6: Amazon Pakistan Marketplace */}
        {project.previewType === 'amazon' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#161c28] via-[#0d111a] to-[#121822] p-3.5 rounded-xl border border-amber-500/20 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black tracking-tighter text-amber-400">amazon</span>
                <span className="text-[9px] text-white/70">.pk portal</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Deliver to Pakistan 🇵🇰</span>
            </div>
            <div className="my-auto grid grid-cols-2 gap-2 py-1">
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-[9px] font-bold text-white block">Shop Gaming</span>
                <span className="text-[8px] text-amber-300">See 9.9 Mega Deals</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-[9px] font-bold text-white block">Fashion Trends</span>
                <span className="text-[8px] text-amber-300">Explore New Arrivals</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-white/10 text-white/70">
              <span>Today's Deals • Prime</span>
              <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>
        )}

        {/* Project 7: Interactive Digital Resume & CV */}
        {project.previewType === 'cv' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#0d1e1c] via-[#071312] to-[#0c1a18] p-4 rounded-xl border border-emerald-500/20 text-white">
            <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-200">Curriculum Vitae</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Verified Credentials</span>
            </div>
            <div className="my-auto py-1">
              <h4 className="text-sm font-bold text-white">Madiha Asif — Academic & Design Milestones</h4>
              <p className="text-[10px] text-emerald-200/70 mt-1">ADC Part 1 (Karachi University) • Pak Grammar School (CS)</p>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-emerald-300">Graphic Design</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-emerald-300">Web Development</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-emerald-300/80 pt-2 border-t border-emerald-500/15">
              <span>Semantic HTML5 Layout</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        )}

        {/* Project 8: Multi-Section Anchor Navigation */}
        {project.previewType === 'sections' && (
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#1a142c] via-[#0d091a] to-[#150f24] p-4 rounded-xl border border-indigo-500/20 text-white">
            <div className="flex items-center justify-between border-b border-indigo-500/15 pb-2">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-200">Section Head Jump Architecture</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">In-Page Routing</span>
            </div>
            <div className="my-auto py-1">
              <div className="flex gap-1.5 mb-2">
                <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-600 text-white font-mono">#section_one</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-indigo-200 font-mono">#section_two</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-indigo-200 font-mono">#section_three</span>
              </div>
              <h4 className="text-xs font-semibold text-white">Segmented Content Partitioning Demonstration</h4>
              <p className="text-[10px] text-indigo-200/70 mt-1">Smooth document viewport repositioning with semantic anchor targets</p>
            </div>
            <div className="flex items-center justify-between text-[10px] text-indigo-300/80 pt-2 border-t border-indigo-500/15">
              <span>Anchor Jump Linking</span>
              <span>Semantic Structure</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
