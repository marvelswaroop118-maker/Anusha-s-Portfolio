"use client";

import { motion, AnimatePresence, useScroll, useSpring, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// ── THE COMPLETE 9-INTERNSHIP DATASET ──
const EXPERIENCE_DATA = [
  {
    id: "mls",
    year: "2025",
    firm: "MLS & Co. Law Firm",
    role: "Legal Intern",
    duration: "Dec 2025",
    tenure: "16 Weeks",
    tag: "Litigation",
    logo: "/Experience/Mls.png",
    initials: "MLS",
    court: "AP High Court",
    desc: "Collaborated directly with senior partners to manage civil and criminal litigation matters presented before the Hon'ble Andhra Pradesh High Court.",
    inDepth: [
      "Collaborated directly with senior partners to manage civil and criminal litigation matters presented before the Hon'ble Andhra Pradesh High Court and various subordinate courts.",
      "Drafted critical legal documentation, including internal memos, formal legal notices, and court petitions, while conducting extensive pre-hearing case research.",
      "Facilitated the case filing process and meticulously prepared documents for High Court submissions.",
      "Actively participated in client meetings and internal case strategy discussions to align legal approaches with client objectives."
    ]
  },
  {
    id: "ragini",
    year: "2025",
    firm: "Ragini Singh & Associates",
    role: "Legal Intern (Online)",
    duration: "Jun 2025",
    tenure: "16 Weeks",
    tag: "Corporate",
    logo: "/Experience/Ragini SIngh.png",
    initials: "RSA",
    court: "SEBI / Corporate",
    desc: "Conducted highly targeted legal research focused on the SEBI Act and related corporate regulations.",
    inDepth: [
      "Conducted highly targeted legal research focused on the SEBI Act and related corporate regulations.",
      "Tracked and identified relevant case laws and emerging regulatory developments within the securities sector.",
      "Compiled and delivered structured case briefs and comprehensive judgment summaries to support internal firm operations and strategy."
    ]
  },
  {
    id: "rvk",
    year: "2025",
    firm: "RVK Law Associates",
    role: "Legal Intern",
    duration: "Jun 2025",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/RVK.png",
    initials: "RVK",
    court: "Telangana HC",
    desc: "Assisted senior partners with civil and criminal litigation proceedings before the Hon'ble Telangana High Court.",
    inDepth: [
      "Assisted senior partners with civil and criminal litigation proceedings before the Hon'ble Telangana High Court and subordinate judicial bodies.",
      "Supported the legal team by drafting essential documents and conducting research to find relevant judicial precedents."
    ]
  },
  {
    id: "ylm",
    year: "2024",
    firm: "YLM Associates",
    role: "Legal Intern",
    duration: "Dec 2024",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/YLM.png",
    initials: "YLM",
    court: "District Courts",
    desc: "Drafted and successfully filed essential court documents, taking primary responsibility for leave petitions.",
    inDepth: [
      "Drafted and successfully filed essential court documents, taking primary responsibility for leave petitions and legal notices.",
      "Supported senior advocates directly during court hearings by developing and preparing comprehensive procedural checklists.",
      "Participated in preliminary case assessments and initial client consultation meetings."
    ]
  },
  {
    id: "regalwhiz",
    year: "2024",
    firm: "Regal-Whiz Solutions",
    role: "Legal Intern",
    duration: "Jun 2024",
    tenure: "4 Weeks",
    tag: "IPR",
    logo: "/Experience/Regalwhiz.png",
    initials: "RWS",
    court: "IP Registry",
    desc: "Executed trademark (TM) public searches and applied NICE classifications for intellectual property management.",
    inDepth: [
      "Executed trademark (TM) public searches and applied NICE classifications for intellectual property management.",
      "Assisted the legal team in sourcing and analyzing relevant judgments pertaining to ongoing matters."
    ]
  },
  {
    id: "unnam",
    year: "2023",
    firm: "Unnam Law Firm",
    role: "Legal Intern",
    duration: "Dec 2023",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/Unnam.png",
    initials: "ULF",
    court: "Trial Courts",
    desc: "Researched complex, multi-faceted legal issues to assist senior counsel in formulating robust arguments for active litigation.",
    inDepth: [
      "Researched complex, multi-faceted legal issues to assist senior counsel in formulating robust arguments for active litigation.",
      "Analyzed historical case law developments to draft strategic, well-reasoned case briefs.",
      "Assisted the broader legal team in identifying and retrieving highly relevant case laws."
    ]
  },
  {
    id: "dsla",
    year: "2023",
    firm: "District Legal Services Authority",
    role: "Intern",
    duration: "Jul 2023",
    tenure: "2 Weeks",
    tag: "Lok Adalat",
    logo: "/Experience/DSLA.png",
    initials: "DLS",
    court: "Lok Adalat",
    desc: "Observed active dispute resolution proceedings within the Special Lok Adalat and gained insights into mediation.",
    inDepth: [
      "Observed active dispute resolution proceedings within the Special Lok Adalat.",
      "Interacted directly with presiding judges, gaining valuable, practical insights into judicial decision-making and alternative dispute mechanisms."
    ]
  },
  {
    id: "pjs",
    year: "2023",
    firm: "PJS Associates",
    role: "Legal Intern",
    duration: "Jun 2023",
    tenure: "4 Weeks",
    tag: "Litigation",
    logo: "/Experience/PJS.png",
    initials: "PJS",
    court: "Consumer Forum",
    desc: "Assisted in drafting a formal appeal for submission before the State Consumer Disputes Redressal Commission.",
    inDepth: [
      "Assisted in drafting a formal appeal for submission before the State Consumer Disputes Redressal Commission.",
      "Researched statutory provisions and identified relevant legal precedents across a broad spectrum of practice areas, including property law, arbitration, criminal procedure, and trademark infringement."
    ]
  },
  {
    id: "mv",
    year: "2022",
    firm: "M.V. Foundation",
    role: "Project Intern",
    duration: "Jun 2022",
    tenure: "4 Weeks",
    tag: "NGO",
    logo: "/Experience/MV.png",
    initials: "MVF",
    court: "Field Work",
    desc: "Contributed to community outreach programs aimed at returning young, underprivileged children to formal education.",
    inDepth: [
      "Contributed to community outreach programs aimed at returning young, underprivileged children to formal educational environments.",
      "Conducted field surveys and comprehensive assessments to support and scale educational reintegration initiatives.",
      "Utilized the Microsoft Office Suite to process data from the National Assessment Survey and drafted detailed findings and recommendations reports for key stakeholders."
    ]
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Experience() {
  const [activeDataIndex, setActiveDataIndex] = useState<number>(0);
  const [activeModalData, setActiveModalData] = useState<typeof EXPERIENCE_DATA[0] | null>(null);
  const scrollContainerRefMobile = useRef<HTMLDivElement>(null);

  const activeData = EXPERIENCE_DATA[activeDataIndex];

  // Lock body scroll when modal is open (Mobile)
  useEffect(() => {
    if (activeModalData) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [activeModalData]);

  const scrollMobile = (direction: "left" | "right") => {
    if (scrollContainerRefMobile.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRefMobile.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleMobileCardClick = (index: number) => {
    setActiveModalData(EXPERIENCE_DATA[index]);
  };

  return (
    // STRICT 100svh bounds, NO global scroll overflow allowed
    <div className="relative w-full h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans select-none">
      
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-[-5%] right-[-15%] w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-[#C5A059]/8 rounded-full blur-[140px] pointer-events-none z-0 transform-gpu" />
      
      {/* ── MAIN LAYOUT ── */}
      <div className="relative z-10 w-full max-w-[96rem] mx-auto flex flex-col h-full pt-[110px] md:pt-[120px] lg:pt-[130px] pb-[2svh] lg:pb-[5svh] px-5 md:px-10 lg:px-14">
        
        {/* ── HEADER ── */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full mb-4 lg:mb-8 shrink-0">
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-2 lg:mb-3">
            <span className="w-5 lg:w-7 h-[2px] bg-[#C5A059]" />
            <p className="text-[9px] lg:text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Career Timeline</p>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#0F172A] tracking-tight">
            Professional <span className="text-[#C5A059] italic font-serif">Experience</span>
          </motion.h2>
        </motion.div>

        {/* ── SPLIT LAYOUT (Fills remaining space tightly) ── */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 relative w-full items-start">
          
          {/* ═══════════════════════════════════
              DESKTOP LEFT PANE (Grid of Compact Cards)
          ═══════════════════════════════════ */}
          <div className="hidden lg:grid grid-cols-3 w-full lg:w-1/2 xl:w-7/12 h-full gap-2 xl:gap-3 relative z-10 overflow-hidden pr-1 content-start">
            {EXPERIENCE_DATA.map((item, index) => {
              const isActiveDesktop = activeDataIndex === index;
              return (
                <div key={item.id} className="flex flex-col shrink-0 h-[100px] xl:h-[130px]">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                    onClick={() => setActiveDataIndex(index)}
                    className={`relative w-full h-full rounded-[1rem] xl:rounded-2xl p-3 xl:p-4 cursor-pointer border transition-all duration-300 flex flex-col justify-between ${isActiveDesktop ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-[#C5A059]/30 lg:scale-[1.03] z-10' : 'bg-white/40 backdrop-blur-xl border-white/80 hover:bg-white/70'}`}
                  >
                    <div className="flex items-start justify-between gap-1">
                        <div className={`w-8 h-8 xl:w-10 xl:h-10 rounded-xl border flex items-center justify-center shrink-0 overflow-hidden ${isActiveDesktop ? 'bg-white border-[#C5A059]/20 shadow-sm' : 'bg-white/50 border-zinc-200'}`}>
                          <FallbackImage src={item.logo} alt={item.firm} fallback={item.initials} className="w-5 h-5 xl:w-6 xl:h-6 object-contain" />
                        </div>
                        <span className="text-[9px] xl:text-[10px] font-black text-zinc-300 tracking-wider leading-none mt-1">{item.year}</span>
                    </div>

                    <div className="mt-auto">
                        <h3 className={`text-[10px] xl:text-[11px] font-bold leading-tight line-clamp-2 mb-0.5 xl:mb-1 transition-colors ${isActiveDesktop ? 'text-[#C5A059]' : 'text-[#0F172A]'}`}>{item.firm}</h3>
                        <p className="text-[8px] xl:text-[9px] font-bold text-zinc-500 uppercase tracking-widest truncate">{item.role}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
            <div className="h-2 col-span-full shrink-0" /> {/* Bottom spacer for scroll if ever needed */}
          </div>

          {/* ═══════════════════════════════════
              DESKTOP RIGHT PANE (Sticky Dossier)
          ═══════════════════════════════════ */}
          <div className="hidden lg:flex lg:w-1/2 xl:w-5/12 h-full relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeDataIndex}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                className="w-full h-full bg-white rounded-[2rem] border border-zinc-200 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="p-6 xl:p-8 bg-[#f6f5f2]/50 border-b border-zinc-100 flex justify-between items-start shrink-0">
                  <div className="flex items-center gap-4 xl:gap-5">
                    <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center p-2 xl:p-3 shadow-sm shrink-0 overflow-hidden">
                      <FallbackImage src={activeData.logo} alt={activeData.firm} fallback={activeData.initials} className="w-10 h-10 xl:w-12 xl:h-12 object-contain" fallbackClass="text-zinc-300 font-black text-lg xl:text-xl tracking-widest" />
                    </div>
                    <div>
                      <span className="bg-[#C5A059]/10 text-[#C5A059] text-[8px] xl:text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest mb-1.5 inline-block">{activeData.tag}</span>
                      <h2 className="text-xl xl:text-2xl font-black text-[#0F172A] leading-tight mb-1">{activeData.firm}</h2>
                      <p className="text-[10px] xl:text-xs font-bold text-zinc-500 uppercase tracking-widest">{activeData.role}</p>
                    </div>
                  </div>
                  <div className="text-right hidden xl:block">
                    <span className="text-3xl font-black text-zinc-200 block leading-none">{activeData.year}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-zinc-100 border-b border-zinc-100 shrink-0">
                  <div className="p-4 xl:p-6 flex flex-col justify-center bg-white">
                    <p className="text-[9px] xl:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Tenure</p>
                    <p className="text-xs xl:text-sm font-semibold text-[#0F172A]">{activeData.duration} • {activeData.tenure}</p>
                  </div>
                  <div className="p-4 xl:p-6 flex flex-col justify-center bg-white">
                    <p className="text-[9px] xl:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Forum</p>
                    <p className="text-xs xl:text-sm font-semibold text-[#0F172A]">{activeData.court}</p>
                  </div>
                </div>

                <div className="p-6 xl:p-8 overflow-y-auto scrollbar-hide flex-1 bg-white">
                  <h4 className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] mb-3 xl:mb-4">Executive Brief</h4>
                  <p className="text-xs xl:text-sm text-[#0F172A] font-medium leading-relaxed mb-5 xl:mb-6">{activeData.desc}</p>
                  
                  <h4 className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] mb-3 xl:mb-4">Detailed Contributions</h4>
                  <ul className="flex flex-col gap-3 xl:gap-4">
                    {activeData.inDepth.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#C5A059] transition-colors mt-1.5 shrink-0" />
                        <span className="text-[11px] xl:text-xs text-zinc-600 leading-relaxed font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ═══════════════════════════════════
              MOBILE CAROUSEL
          ═══════════════════════════════════ */}
          <div className="flex flex-col lg:hidden w-full flex-1 min-h-0 relative">
            
            <div className="absolute top-0 bottom-16 left-0 w-4 bg-gradient-to-r from-[#f6f5f2] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-16 right-0 w-4 bg-gradient-to-l from-[#f6f5f2] to-transparent z-20 pointer-events-none" />

            <div
              ref={scrollContainerRefMobile}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-2 items-stretch"
            >
              {EXPERIENCE_DATA.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => handleMobileCardClick(i)}
                  className="relative shrink-0 w-[85vw] snap-center h-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-4 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
                        <FallbackImage src={item.logo} alt={item.firm} fallback={item.initials} className="w-full h-full object-contain" fallbackClass="text-zinc-400 font-bold text-[8px] tracking-widest" />
                      </div>
                      <span className="text-zinc-300 text-lg font-black tracking-tighter uppercase leading-none mt-1">
                        {item.year}
                      </span>
                    </div>
                    <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-center py-2 min-h-0">
                    <h3 className="text-[17px] sm:text-xl font-black text-[#0F172A] leading-snug tracking-tight mb-2">
                      {item.firm}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 shrink-0">
                      {item.role} • {item.tenure}
                    </p>
                    <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-medium line-clamp-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-zinc-200/80 pt-4 mt-2 shrink-0">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest truncate max-w-[50%]">
                        {item.court}
                      </p>
                      <div className="flex items-center gap-2 text-[#C5A059] text-[9px] font-black uppercase tracking-[0.2em]">
                        <span className="leading-none mt-[1px]">Open Dossier</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-3 shrink-0 z-20">
              <button
                onClick={() => scrollMobile('left')}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-white backdrop-blur-xl shadow-sm text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95 transform-gpu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                onClick={() => scrollMobile('right')}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-white backdrop-blur-xl shadow-sm text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95 transform-gpu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════
          MODAL (MOBILE DOSSIER VIEW)
      ═══════════════════════════════════ */}
      <AnimatePresence>
        {activeModalData && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end items-center font-sans lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalData(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-t-[2rem] border-t border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-5 md:p-8 bg-[#f6f5f2] border-b border-zinc-200 flex justify-between items-start shrink-0">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center p-2 shrink-0 shadow-sm overflow-hidden">
                    <FallbackImage src={activeModalData.logo} alt={activeModalData.firm} fallback={activeModalData.initials} className="w-full h-full object-contain" fallbackClass="text-zinc-400 font-bold text-xs tracking-widest" />
                  </div>
                  <div>
                    <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-widest mb-1.5 inline-block">
                      {activeModalData.tag}
                    </span>
                    <h2 className="text-xl font-black text-[#0F172A] leading-tight mb-1">{activeModalData.firm}</h2>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{activeModalData.role}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-zinc-300 block leading-none">{activeModalData.year}</span>
                  <button
                    onClick={() => setActiveModalData(null)}
                    className="w-8 h-8 shrink-0 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#C5A059] hover:border-[#C5A059] shadow-sm transition-colors mt-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>

              <div className="p-5 md:p-8 overflow-y-auto scrollbar-hide bg-white">
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex-1 min-w-[120px] bg-[#f6f5f2] border border-zinc-200 p-3 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Tenure</p>
                    <p className="text-xs font-semibold text-[#0F172A]">{activeModalData.duration} • {activeModalData.tenure}</p>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-[#f6f5f2] border border-zinc-200 p-3 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Forum</p>
                    <p className="text-xs font-semibold text-[#0F172A]">{activeModalData.court}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059]">Executive Brief</h4>
                    <span className="w-4 h-[2px] bg-[#C5A059]"></span>
                  </div>
                  <p className="text-sm text-[#0F172A] font-medium leading-relaxed">{activeModalData.desc}</p>
                </div>

                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059]">Detailed Contributions</h4>
                    <span className="w-4 h-[2px] bg-[#C5A059]"></span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {activeModalData.inDepth.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                        <span className="text-xs text-zinc-600 leading-relaxed font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── ROBUST FALLBACK IMAGE COMPONENT ───
function FallbackImage({ src, alt, fallback, className, fallbackClass = "text-[#C5A059] font-black text-[10px] tracking-widest" }: any) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className={`flex items-center justify-center w-full h-full ${fallbackClass}`}>{fallback}</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = 'none'; // Instantly hide the broken browser icon
        setHasError(true);
      }}
    />
  );
}
