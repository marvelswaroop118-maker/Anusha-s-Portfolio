"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const PRESENTATIONS_DATA = [
  {
    title: "Trade Secrets and Employee Mobility: Balancing Business Interests and Employee Rights",
    venue: "Cochin University (CUSAT), Kochi",
    category: "Intellectual Property",
  },
  {
    title: "Breaking the Silence: Exploring the Nexus of Child Abuse, Religion, and Caste",
    venue: "Vignan School of Law, Guntur",
    category: "Human Rights",
  },
  {
    title: "Protecting Privacy in the Digital Age: Navigating Data Regulations in India",
    venue: "MNLU Nagpur & NLU Bangalore",
    category: "Data Privacy",
  },
  {
    title: "Governance and Artificial Intelligence: Navigating India's Regulatory Landscape",
    venue: "Aligarh Muslim Law University",
    category: "AI & Tech Law",
  },
  {
    title: "The Effectiveness of Alternative Dispute Resolution Over Traditional Court Proceedings",
    venue: "NMIMS University, Mumbai",
    category: "Dispute Resolution",
  },
  {
    title: "Corporate Social Responsibility (CSR) in the Age of AI: Ethical Dimensions",
    venue: "NMIMS National Conference",
    category: "Corporate Law",
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

export default function Publications() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 600 : window.innerWidth * 0.75;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="publications"
      className="relative w-full h-[100svh] bg-[#f6f5f2] flex flex-col font-sans select-none overflow-hidden"
    >
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0"
        style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 -left-[10%] w-[50vw] h-[50vw] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-white/80 rounded-full blur-[150px] pointer-events-none z-0 transform-gpu" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-[110px] md:pt-[120px] lg:pt-[130px] pb-6 lg:pb-10 px-6 md:px-12">

        {/* HEADER: Fixed Animation Trigger */}
        <div className="mb-6 lg:mb-8 shrink-0">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#C5A059]" />
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-black">Research & Articles</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold text-[#0F172A] tracking-tight">
              Scholarship & <span className="text-[#C5A059] italic font-serif">Research</span>
            </motion.h2>
          </motion.div>
        </div>

        {/* ═══ ROW 1: HIGHLIGHTED PAPER (Ultra-Sleek Horizontal Strip) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-10 shrink-0"
        >
          <div className="relative w-full rounded-2xl lg:rounded-3xl bg-[#0F172A] border border-zinc-800 p-4 lg:p-6 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#C5A059] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Published Paper</span>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Electoral Integrity</span>
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white leading-tight">
                  Strengthening Electoral Integrity in India: Legal Reforms & Pathways for Reform
                </h3>
                <p className="text-[10px] md:text-xs text-zinc-400 mt-1 italic">Published in Indian Journal of Legal Research and Review, Vol. III, Issue IV</p>
              </div>

              <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-3 md:pt-0 md:pl-6 shrink-0">
                <span className="hidden lg:block text-[9px] font-black text-zinc-500 uppercase tracking-widest">DOI: 10.5281/zenodo.16261926</span>
                <a href="https://doi.org/10.5281/zenodo.16261926" target="_blank" rel="noopener noreferrer" className="h-9 w-9 lg:h-11 lg:w-11 rounded-full bg-[#C5A059] text-[#0F172A] flex items-center justify-center hover:scale-105 transition-all shadow-lg active:scale-95">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══ ROW 2: PRESENTATIONS (Fluid flex container) ═══ */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-3 lg:mb-5 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Conferences ({PRESENTATIONS_DATA.length})</h3>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button onClick={() => scroll('left')} className="h-9 w-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
              <button onClick={() => scroll('right')} className="h-9 w-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
            </div>
          </div>

          {/* Carousel: Takes exactly the remaining space */}
          <div className="flex-1 w-full relative min-h-0">
            <div className="absolute inset-0 flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-3 lg:gap-5 items-stretch">
              {PRESENTATIONS_DATA.map((item, idx) => (
                <div key={idx} className="shrink-0 w-[82vw] sm:w-[300px] lg:w-[360px] snap-center flex flex-col rounded-3xl bg-white/60 border border-white backdrop-blur-xl p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:bg-white transition-all">
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3 shrink-0">
                      <span className="bg-[#C5A059]/10 text-[#C5A059] text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">{item.category}</span>
                      <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>

                    <h4 className="text-[14px] lg:text-[17px] font-bold text-[#0F172A] leading-snug lg:leading-normal tracking-tight flex-1">
                      {item.title}
                    </h4>

                    <div className="mt-4 pt-4 border-t border-zinc-100 shrink-0">
                      <p className="text-[9px] lg:text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-relaxed">
                        {item.venue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-2 lg:w-4" /> {/* End Spacer */}
            </div>
          </div>

          {/* Mobile Only Nav */}
          <div className="flex lg:hidden justify-center items-center gap-4 mt-4 shrink-0">
            <button onClick={() => scroll('left')} className="h-10 w-10 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#0F172A] shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
            <button onClick={() => scroll('right')} className="h-10 w-10 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#0F172A] shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
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