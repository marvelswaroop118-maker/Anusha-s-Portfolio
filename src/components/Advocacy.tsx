"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

// Strictly updated to reflect actual CV data (Speaker vs Researcher roles, specific subjects, and winning streaks)
const ADVOCACY_DATA = [
  {
    year: "2025",
    role: "Speaker",
    title: "4th NLUO Public Health Law National Moot",
    forum: "NLU Odisha",
    type: "National Moot",
    description: "Addressed complex constitutional issues regarding the termination of pregnancy and the nuanced interpretation of the MTP Act and Privacy laws.",
    tags: ["Public Health", "MTP Act", "Privacy Law"],
    highlight: false,
  },
  {
    year: "2024",
    role: "Researcher",
    title: "7th Surana & Surana & KLE National Moot",
    forum: "KLE Law College",
    type: "National Moot",
    description: "Drafted comprehensive memorials and formulated arguments focusing on the intricate intersection of Constitutional Law and Taxation frameworks.",
    tags: ["Constitutional Law", "Taxation", "Drafting"],
    highlight: false,
  },
  {
    year: "2023",
    role: "Researcher",
    title: "9th National KIIT Moot Court",
    forum: "KIIT University",
    type: "National Moot",
    description: "Formulated rigorous legal research and arguments pertaining to company law, specifically focusing on Mergers, Acquisitions, and SEBI (SAST) Regulations.",
    tags: ["M&A", "Company Law", "SEBI"],
    highlight: false,
  },
  {
    year: "2022 & 2025",
    role: "Winner (1st Place)",
    title: "Intra Debate & Mock Parliament",
    forum: "VIT-AP University",
    type: "Flagship Competitions",
    description: "Secured 1st Place in both the Intra Debate Competition (2025) and Mock Parliament (2022), demonstrating exceptional oral advocacy and parliamentary debating skills.",
    tags: ["Oral Advocacy", "Debate", "Mock Parliament"],
    highlight: true,
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Advocacy() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 600 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="advocacy"
      // Strictly locked to 100svh
      className="relative w-full h-[100svh] bg-[#f6f5f2] flex flex-col font-sans select-none overflow-hidden pt-[110px] md:pt-[120px] lg:pt-[130px] pb-6 lg:pb-8"
    >
      {/* ── AMBIENT BACKGROUND LIGHTING ── */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/4 translate-x-1/4 transform-gpu" />
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-white/80 rounded-full blur-[150px] pointer-events-none z-0 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full gap-5 lg:gap-8 px-6 md:px-10 lg:px-12">

        {/* ── HEADER AREA (Compact) ── */}
        <div className="shrink-0">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">

            <div className="flex flex-col items-start w-full lg:w-auto">
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-2 lg:mb-3">
                <span className="w-6 h-[2px] bg-[#C5A059]" />
                <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-black">Moots & Debates</p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#0F172A] tracking-tight mb-2 lg:mb-0">
                Courtroom <span className="text-[#C5A059] italic font-serif">Advocacy</span>
              </motion.h2>
            </div>

            {/* Desktop Nav Controls */}
            <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-2 shrink-0">
              <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-zinc-200 bg-white/60 backdrop-blur-xl flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] transition-all duration-300 shadow-sm active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-zinc-200 bg-white/60 backdrop-blur-xl flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] transition-all duration-300 shadow-sm active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </motion.div>

          </motion.div>
        </div>

        {/* ── CAROUSEL SECTION ── */}
        <div className="flex-1 min-h-0 flex flex-col relative w-full mt-2 lg:mt-4">

          {/* Unified Carousel Container (Fits exactly the remaining space) */}
          <div className="flex-1 w-full relative min-h-0 group">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 lg:w-12 bg-gradient-to-r from-[#f6f5f2] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 lg:w-12 bg-gradient-to-l from-[#f6f5f2] to-transparent z-20 pointer-events-none" />

            {/* Absolute inset-0 guarantees it won't push the parent height */}
            <div
              ref={scrollRef}
              className="absolute inset-0 flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar items-stretch gap-4 lg:gap-6"
            >
              {ADVOCACY_DATA.map((item, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center flex flex-col rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border transition-all duration-300 group/card overflow-hidden ${item.highlight
                      ? "bg-[#0F172A] border-zinc-800 shadow-2xl hover:shadow-[#C5A059]/10"
                      : "bg-white/60 backdrop-blur-2xl border-white hover:bg-white/80"
                    }`}
                >
                  {/* Highlight Glow Effect */}
                  {item.highlight && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-[40px] pointer-events-none transition-transform duration-700 group-hover/card:scale-150" />
                  )}

                  <div className="flex flex-col h-full relative z-10">
                    {/* Top: Role & Year */}
                    <div className="flex justify-between items-center mb-5 shrink-0">
                      <span className={`text-[8px] lg:text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${item.highlight
                          ? "bg-[#C5A059] text-white shadow-sm"
                          : "bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059]"
                        }`}>
                        {item.role}
                      </span>
                      <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${item.highlight ? "text-zinc-500" : "text-zinc-400"}`}>
                        {item.year}
                      </span>
                    </div>

                    {/* Middle: Info */}
                    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto hide-scrollbar mb-4">
                      <h3 className={`text-[17px] lg:text-[19px] font-bold leading-snug tracking-tight mb-2 transition-colors duration-300 ${item.highlight ? "text-white" : "text-[#0F172A] group-hover/card:text-[#C5A059]"
                        }`}>
                        {item.title}
                      </h3>
                      <p className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.15em] mb-3 shrink-0 ${item.highlight ? "text-[#C5A059]" : "text-zinc-500"
                        }`}>
                        {item.type} • {item.forum}
                      </p>
                      <p className={`text-xs lg:text-[13px] font-medium leading-relaxed ${item.highlight ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom: Tags */}
                    <div className={`border-t pt-4 shrink-0 flex flex-wrap gap-2 ${item.highlight ? "border-zinc-800" : "border-zinc-200/60"}`}>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className={`px-2.5 py-1.5 rounded-md text-[8px] lg:text-[9px] font-bold uppercase tracking-wider ${item.highlight
                            ? "bg-white/5 text-zinc-300 border border-white/10"
                            : "bg-[#f6f5f2]/50 text-zinc-600 border border-zinc-200"
                          }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer */}
              <div className="shrink-0 w-2 lg:w-4" />
            </div>
          </div>

          {/* Mobile Nav Controls */}
          <div className="flex lg:hidden justify-center items-center gap-4 mt-4 shrink-0 z-20">
            <button onClick={() => scroll('left')} className="h-12 w-12 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#0F172A] shadow-sm active:scale-95 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
            <button onClick={() => scroll('right')} className="h-12 w-12 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#0F172A] shadow-sm active:scale-95 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}