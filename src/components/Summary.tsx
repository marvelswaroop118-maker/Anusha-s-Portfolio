"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

// Stagger animation for the grid items
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Summary() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth manual scroll function for mobile buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="summary"
      className="relative w-full h-[100svh] min-h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans select-none"
    >

      {/* ── AMBIENT BACKGROUND LIGHTING ── */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-0 -left-[10%] w-[50vw] h-[50vw] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-white/80 rounded-full blur-[150px] pointer-events-none z-0 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row h-full pt-[110px] md:pt-[120px] lg:pt-[130px] pb-6 lg:pb-12 px-5 md:px-10 lg:px-12 gap-4 lg:gap-16 items-center">

        {/* =========================================
            LEFT/TOP: EXECUTIVE SUMMARY
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[40%] flex flex-col justify-center shrink-0 mb-2 lg:mb-0"
        >
          {/* Premium Glassmorphic Tag */}
          <div className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-3 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 self-start shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <p className="text-[9px] lg:text-[10px] text-[#0F172A] uppercase tracking-[0.3em] font-black">Executive Summary</p>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] lg:leading-[1.2] font-semibold text-[#0F172A] tracking-tight mb-2 lg:mb-6">
            A distinguished legal professional with a robust foundation in <span className="font-serif italic text-[#C5A059]">civil, criminal, and corporate litigation</span>, backed by experience at appellate courts.
          </h2>

          <p className="text-[13px] sm:text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg font-medium">
            Dedicated to advancing legal discourse through high-impact research, continuous moot court advocacy, and comprehensive regulatory analysis.
          </p>
        </motion.div>

        {/* =========================================
            RIGHT/BOTTOM: RESPONSIVE CARDS
        ========================================= */}
        <div className="flex-1 w-full flex flex-col items-center overflow-hidden min-h-0 h-full">

          {/* DESKTOP VIEW: 2x2 Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="hidden lg:grid w-full h-full min-h-0 lg:grid-cols-2 lg:grid-rows-2 gap-4"
          >
            {/* CARD 1: Academics */}
            <motion.div variants={fadeUp} className="w-full h-full rounded-[2rem] bg-white/60 border border-white backdrop-blur-2xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-colors duration-500 overflow-hidden hide-scrollbar">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#C5A059] mb-2 lg:mb-3">Education</p>
                <h3 className="text-lg lg:text-xl font-black text-[#0F172A] leading-tight mb-2">Academic Excellence</h3>
                <p className="text-[11px] lg:text-sm text-zinc-600 font-medium leading-relaxed">
                  B.B.A. LL.B. (Hons.) at VIT-AP University. Two-time recipient of the prestigious <strong className="text-[#0F172A] font-bold">Academic Excellence Award (2024-25 & 2025-26)</strong>.
                </p>
              </div>
              <div className="mt-4 lg:mt-6 shrink-0">
                <p className="text-4xl lg:text-5xl font-serif text-[#0F172A] transition-colors duration-500 hover:text-[#C5A059]">8.65</p>
                <p className="text-[9px] lg:text-[10px] uppercase tracking-widest font-black text-zinc-400 mt-1 lg:mt-2">CGPA / 10</p>
              </div>
            </motion.div>

            {/* CARD 2: Experience */}
            <motion.div variants={fadeUp} className="w-full h-full relative rounded-[2rem] bg-[#0F172A] border border-zinc-800 p-6 lg:p-8 shadow-2xl overflow-hidden hide-scrollbar group">
              <div className="absolute top-0 right-0 w-32 lg:w-40 h-32 lg:h-40 bg-[#C5A059]/20 rounded-full blur-[40px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 mb-2 lg:mb-3">Litigation</p>
                  <h3 className="text-xl lg:text-2xl font-serif italic text-white mb-2 lg:mb-4">Practice & Strategy</h3>
                </div>
                <p className="text-[11px] lg:text-sm text-zinc-400 leading-relaxed">
                  Extensive exposure to civil and criminal proceedings before High Courts and District Courts. Proficient in legal drafting, SEBI regulations, and IPR framework analysis.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: Scholarly Research */}
            <motion.div variants={fadeUp} className="w-full h-full rounded-[2rem] bg-white/40 border border-white/80 backdrop-blur-xl p-6 lg:p-8 flex flex-col justify-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:bg-white/60 transition-colors duration-500 overflow-hidden hide-scrollbar">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400 mb-2 lg:mb-3 shrink-0">Publications</p>
              <h3 className="text-[13px] lg:text-lg font-semibold text-[#0F172A] leading-relaxed">
                Published author and national presenter focusing on <span className="text-[#C5A059] italic font-serif">Data Privacy, AI Governance, Electoral Integrity, and Trade Secrets.</span>
              </h3>
            </motion.div>

            {/* CARD 4: Leadership */}
            <motion.div variants={fadeUp} className="w-full h-full relative rounded-[2rem] bg-[#C5A059] p-6 lg:p-8 shadow-xl overflow-hidden hide-scrollbar group">
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#0F172A]/60 mb-2 lg:mb-3">Leadership</p>
                  <h3 className="text-lg lg:text-xl font-black text-[#0F172A] leading-tight mb-2 lg:mb-3">Advocacy & Organizing</h3>
                </div>
                <p className="text-[11px] lg:text-sm text-[#0F172A]/80 font-medium leading-relaxed">
                  Spearheaded National Conferences and Intra Moot Courts. Recognized researcher in Constitutional and Public Health Law moots.
                </p>
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

              {/* Mobile Card 1 */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-[2rem] bg-white/70 border border-white backdrop-blur-2xl p-5 flex flex-col justify-between shadow-sm overflow-hidden hide-scrollbar">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-black text-[#C5A059] mb-1.5 shrink-0">Education</p>
                  <h3 className="text-[15px] font-black text-[#0F172A] leading-tight mb-2 shrink-0">Academic Excellence</h3>
                  <p className="text-[11px] text-zinc-600 font-medium leading-relaxed">B.B.A. LL.B. (Hons.) at VIT-AP. Two-time recipient of the <strong className="text-[#0F172A]">Academic Excellence Award (2024-25 & 2025-26)</strong>.</p>
                </div>
                <div className="mt-3 shrink-0">
                  <p className="text-3xl font-serif text-[#0F172A]">8.65</p>
                  <p className="text-[9px] uppercase tracking-widest font-black text-zinc-400 mt-0.5">CGPA / 10</p>
                </div>
              </div>

              {/* Mobile Card 2 */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center relative rounded-[2rem] bg-[#0F172A] border border-zinc-800 p-5 shadow-xl overflow-hidden hide-scrollbar flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10 shrink-0">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-black text-zinc-500 mb-1.5">Litigation</p>
                  <h3 className="text-[17px] font-serif italic text-white mb-2">Practice & Strategy</h3>
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] text-zinc-400 leading-relaxed">Extensive exposure to civil and criminal proceedings before High Courts. Proficient in legal drafting and SEBI regulations.</p>
                </div>
              </div>

              {/* Mobile Card 3 */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-[2rem] bg-white/50 border border-white/80 backdrop-blur-xl p-5 flex flex-col justify-center shadow-sm overflow-hidden hide-scrollbar">
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-zinc-400 mb-2 shrink-0">Publications</p>
                <h3 className="text-[13px] font-semibold text-[#0F172A] leading-relaxed">
                  Published author focusing on <span className="text-[#C5A059] italic font-serif">Data Privacy, AI Governance, Electoral Integrity, and Trade Secrets.</span>
                </h3>
              </div>

              {/* Mobile Card 4 */}
              <div className="shrink-0 w-[85vw] sm:w-[320px] snap-center relative rounded-[2rem] bg-[#C5A059] p-5 shadow-lg overflow-hidden hide-scrollbar flex flex-col justify-between">
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="relative z-10 shrink-0">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-black text-[#0F172A]/60 mb-1.5">Leadership</p>
                  <h3 className="text-[15px] font-black text-[#0F172A] leading-tight mb-2">Advocacy & Organizing</h3>
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] text-[#0F172A]/80 font-medium leading-relaxed">Spearheaded National Conferences and Intra Moot Courts. Recognized researcher in Constitutional and Public Health Law moots.</p>
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