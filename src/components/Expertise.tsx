"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Expertise() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth manual scroll function for mobile buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // Scroll by approximately one card width
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="expertise"
      className="relative w-full lg:h-[100svh] min-h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans select-none"
    >

      {/* ── AMBIENT BACKGROUND LIGHTING ── */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/4 -left-1/4 w-[400px] lg:w-[60vw] h-[400px] lg:h-[60vw] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[500px] lg:w-[45vw] h-[500px] lg:h-[45vw] bg-white/80 rounded-full blur-[150px] pointer-events-none z-0 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row h-full pt-[110px] md:pt-[120px] lg:pt-[130px] pb-8 lg:pb-12 px-6 md:px-10 lg:px-12 gap-6 lg:gap-12 items-center">

        {/* =========================================
            LEFT COLUMN: HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[32%] flex flex-col shrink-0"
        >
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <span className="w-6 h-[2px] bg-[#C5A059]"></span>
            <p className="text-[9px] lg:text-[10px] text-[#0F172A]/60 uppercase tracking-[0.3em] font-black">The Legal Arsenal</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#0F172A] tracking-tight mb-3 lg:mb-5">
            Core <span className="text-[#C5A059] italic font-serif">Expertise</span>
          </h2>
          <p className="text-[13px] lg:text-sm text-zinc-600 leading-relaxed font-medium max-w-sm hidden sm:block">
            Forged through rigorous courtroom exposure, meticulous precedent analysis, and an unparalleled standard of consecutive academic brilliance.
          </p>
        </motion.div>

        {/* =========================================
            RIGHT COLUMN: RESPONSIVE BENTO GRID
        ========================================= */}
        <div className="flex-1 w-full flex flex-col items-center overflow-hidden min-h-0 h-full">

          {/* DESKTOP VIEW: Premium Bento Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="hidden lg:grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-4 w-full h-full min-h-0"
          >
            {/* 1. LITIGATION & ADVOCACY (Row 1, Span 3) */}
            <motion.div variants={fadeUp} className="md:col-span-3 rounded-3xl lg:rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-5 lg:p-6 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-colors duration-500 overflow-y-auto hide-scrollbar">
              <div className="flex items-center gap-2 mb-3 lg:mb-4 border-b border-zinc-200/60 pb-2 lg:pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#C5A059] transition-colors duration-500" />
                <h3 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Litigation & Advocacy</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-1">Appellate Practice</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 font-medium leading-snug">Navigating civil and criminal litigation before the High Court and subordinate courts.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-1">Dispute Resolution</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 font-medium leading-snug">Academic focus and practical understanding of ADR effectiveness.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-1">Oral Advocacy</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 font-medium leading-snug">Honed through elite national moot court competitions.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-1">Judicial Proceedings</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 font-medium leading-snug">Direct observation of Special Lok Adalat settlements.</p>
                </div>
              </div>
            </motion.div>

            {/* 2. REGULATORY, CORPORATE & IP (Row 1, Span 3) */}
            <motion.div variants={fadeUp} className="md:col-span-3 rounded-3xl lg:rounded-[2rem] bg-[#0F172A] border border-zinc-800 p-5 lg:p-6 flex flex-col relative shadow-2xl group overflow-y-auto hide-scrollbar">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A059]/20 rounded-full blur-[50px] pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 flex items-center gap-2 mb-3 lg:mb-4 border-b border-[#C5A059]/30 pb-2 lg:pb-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_12px_rgba(197,160,89,0.8)]" />
                <h3 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-white">Regulatory & IP</h3>
              </div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div className="sm:col-span-2">
                  <h4 className="text-[11px] lg:text-xs font-bold text-white mb-0.5 flex items-center gap-1.5"><span className="w-1 h-1 bg-[#C5A059] rounded-full"></span> Intellectual Property</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-400 leading-snug">Conducting trademark public searches and applying NICE classifications.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-white mb-0.5 flex items-center gap-1.5"><span className="w-1 h-1 bg-[#C5A059] rounded-full"></span> Corporate</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-400 leading-snug">Targeted research capabilities in company law and the SEBI Act.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-white mb-0.5 flex items-center gap-1.5"><span className="w-1 h-1 bg-[#C5A059] rounded-full"></span> Data & Tech Policy</h4>
                  <p className="text-[10px] lg:text-[11px] text-zinc-400 leading-snug">Navigating regulatory landscapes for AI advancements.</p>
                </div>
              </div>
            </motion.div>

            {/* 3. LEGAL DRAFTING (Row 2, Span 2) */}
            <motion.div variants={fadeUp} className="md:col-span-2 rounded-3xl lg:rounded-[2rem] bg-white/40 border border-white/80 backdrop-blur-xl p-5 lg:p-6 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:bg-white/60 transition-all duration-300 overflow-y-auto hide-scrollbar">
              <h3 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-3 shrink-0">Legal Drafting</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-[11px] lg:text-xs font-bold text-[#0F172A] leading-tight">Pleadings:</span>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 leading-snug mt-0.5">Drafting plaints, leave petitions, and critical appeals.</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] lg:text-xs font-bold text-[#0F172A] leading-tight">Pre-Trial & Strategy:</span>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 leading-snug mt-0.5">Preparation of legal notices, memos, and checklists.</p>
                </div>
              </div>
            </motion.div>

            {/* 4. ACADEMICS & RESEARCH (Row 2, Span 2) */}
            <motion.div variants={fadeUp} className="md:col-span-2 rounded-3xl lg:rounded-[2rem] bg-white/40 border border-white/80 backdrop-blur-xl p-5 lg:p-6 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:bg-white/60 transition-all duration-300 overflow-y-auto hide-scrollbar">
              <h3 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-3 shrink-0">Academics & Research</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-[11px] lg:text-xs font-bold text-[#0F172A] leading-tight">Academic Honors:</span>
                  <p className="text-[10px] lg:text-[11px] text-[#C5A059] font-bold leading-snug mt-0.5">
                    Two-time recipient of the Academic Excellence Award (2024-25 & 2025-26).
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] lg:text-xs font-bold text-[#0F172A] leading-tight">Interpretation:</span>
                  <p className="text-[10px] lg:text-[11px] text-zinc-600 leading-snug mt-0.5">Deep analysis into Property law, arbitration, and the MTP Act.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. LEADERSHIP (Row 2, Span 2) */}
            <motion.div variants={fadeUp} className="md:col-span-2 rounded-3xl lg:rounded-[2rem] bg-[#C5A059] p-5 lg:p-6 flex flex-col relative shadow-xl overflow-y-auto hide-scrollbar">
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />

              <div className="relative z-10 w-full mb-3 shrink-0">
                <h3 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-[#0F172A]/70 mb-1">Leadership & Ops</h3>
                <h4 className="text-sm lg:text-[15px] font-black text-[#0F172A] leading-tight">Organizing & Community</h4>
              </div>

              <div className="relative z-10 w-full flex flex-col gap-3 border-t border-[#0F172A]/10 pt-3">
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-0.5 leading-tight">Event Management</h4>
                  <p className="text-[10px] lg:text-[11px] text-[#0F172A]/80 font-medium leading-snug">Led technical operations and execution for national moot courts.</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-[#0F172A] mb-0.5 leading-tight">Field Assessment</h4>
                  <p className="text-[10px] lg:text-[11px] text-[#0F172A]/80 font-medium leading-snug">Community surveys for underprivileged children via M.V. Foundation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* MOBILE VIEW: Manual Snap Carousel with Controls */}
          <div className="flex flex-col lg:hidden w-full h-full min-h-0 flex-1 relative">

            {/* Elegant vignette edges */}
            <div className="absolute top-0 bottom-16 left-0 w-6 bg-gradient-to-r from-[#f6f5f2] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-16 right-0 w-6 bg-gradient-to-l from-[#f6f5f2] to-transparent z-20 pointer-events-none" />

            {/* Scrollable Container (Forces children to stretch vertically) */}
            <div
              ref={scrollContainerRef}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 items-stretch"
            >

              {/* CARD 1: Litigation */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-[2rem] bg-white/70 border border-white backdrop-blur-2xl p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-y-auto hide-scrollbar">
                <div className="flex items-center gap-3 mb-4 border-b border-zinc-200/60 pb-3 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Litigation & Advocacy</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1">Appellate Practice</h4>
                    <p className="text-[12px] text-zinc-600 font-medium leading-relaxed">Navigating civil and criminal litigation before the High Court.</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1">Dispute Resolution</h4>
                    <p className="text-[12px] text-zinc-600 font-medium leading-relaxed">Practical understanding of ADR effectiveness.</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1">Oral Advocacy</h4>
                    <p className="text-[12px] text-zinc-600 font-medium leading-relaxed">Honed through elite national moot court competitions.</p>
                  </div>
                </div>
              </div>

              {/* CARD 2: Regulatory & IP */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center relative rounded-[2rem] bg-[#0F172A] border border-zinc-800 p-6 shadow-xl overflow-y-auto hide-scrollbar">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-4 border-b border-[#C5A059]/30 pb-3 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_12px_rgba(197,160,89,0.8)]" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Regulatory & IP</h3>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1">Intellectual Property</h4>
                    <p className="text-[12px] text-zinc-400 leading-relaxed">Conducting trademark public searches and applying NICE classifications.</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1">Corporate</h4>
                    <p className="text-[12px] text-zinc-400 leading-relaxed">Targeted research capabilities in company law and the SEBI Act.</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1">Data & Tech Policy</h4>
                    <p className="text-[12px] text-zinc-400 leading-relaxed">Navigating regulatory landscapes for AI advancements.</p>
                  </div>
                </div>
              </div>

              {/* CARD 3: Legal Drafting */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-[2rem] bg-white/60 border border-white/80 backdrop-blur-xl p-6 flex flex-col shadow-sm overflow-y-auto hide-scrollbar">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-5 shrink-0 border-b border-zinc-200/60 pb-3">Legal Drafting</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#0F172A] leading-tight">Pleadings:</span>
                    <p className="text-[12px] text-zinc-600 leading-relaxed mt-1">Drafting plaints, leave petitions, and critical appeals.</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#0F172A] leading-tight">Pre-Trial & Strategy:</span>
                    <p className="text-[12px] text-zinc-600 leading-relaxed mt-1">Preparation of legal notices, memos, and procedural checklists.</p>
                  </div>
                </div>
              </div>

              {/* CARD 4: Academics & Research */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-[2rem] bg-white/60 border border-white/80 backdrop-blur-xl p-6 flex flex-col shadow-sm overflow-y-auto hide-scrollbar">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-5 shrink-0 border-b border-zinc-200/60 pb-3">Academics & Research</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#0F172A] leading-tight">Academic Honors:</span>
                    <p className="text-[12px] text-[#C5A059] font-bold leading-relaxed mt-1">Two-time recipient of the Academic Excellence Award (2024-25 & 2025-26).</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#0F172A] leading-tight">Statutory Interpretation:</span>
                    <p className="text-[12px] text-zinc-600 leading-relaxed mt-1">Deep-dive analysis into Property law, arbitration, and the MTP Act.</p>
                  </div>
                </div>
              </div>

              {/* CARD 5: Leadership */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center relative rounded-[2rem] bg-[#C5A059] p-6 flex flex-col shadow-lg overflow-y-auto hide-scrollbar">
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="relative z-10 w-full mb-4 shrink-0 border-b border-[#0F172A]/10 pb-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F172A]/70 mb-1.5">Leadership & Ops</h3>
                  <h4 className="text-[15px] font-black text-[#0F172A] leading-tight">Organizing & Community</h4>
                </div>
                <div className="relative z-10 w-full flex flex-col gap-4 pt-2">
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1 leading-tight">Event Management</h4>
                    <p className="text-[12px] text-[#0F172A]/80 font-medium leading-relaxed">Led technical operations and execution for national moot courts.</p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] mb-1 leading-tight">Field Assessment</h4>
                    <p className="text-[12px] text-[#0F172A]/80 font-medium leading-relaxed">Community surveys for underprivileged children.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile Scroll Controls */}
            <div className="flex justify-center items-center gap-4 mt-2 shrink-0 z-20">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 border border-white backdrop-blur-xl shadow-sm text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95 transform-gpu"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>

              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 border border-white backdrop-blur-xl shadow-sm text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95 transform-gpu"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}