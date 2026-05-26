"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const EDUCATION_DATA = [
  {
    year: "2021 – 2026",
    degree: "B.B.A. LL.B. (Hons.)",
    institution: "VIT-AP University",
    category: "Undergraduate Degree",
    details: "Currently pursuing this degree at VIT-AP University. Achieved a CGPA of 8.62/10.",
    logo: "/Education/VIT.png",
    initials: "Degree",
  },
  {
    year: "2019 – 2021",
    degree: "Class XII (CBSE Board)",
    institution: "Dafne Civil’s Academy",
    category: "Senior Secondary",
    details: "Achieved 83.8%.",
    logo: "/Education/CBSE.png",
    initials: "12th",
  },
  {
    year: "2018 – 2019",
    degree: "Class X (CBSE Board)",
    institution: "Dafne Asiatic School",
    category: "Secondary",
    details: "Achieved 84.2%.",
    logo: "/Education/CBSE.png",
    initials: "10th",
  }
];

// 🚨 Maintained the smooth, hardware-accelerated card variants outside the component 
// and kept the strict TypeScript fixes to prevent Vercel errors.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }
  }
};

export default function Education() {
  const [active, setActive] = useState(0);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});

  return (
    <div className="relative w-full h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none z-0 translate-y-1/2 -translate-x-1/4 transform-gpu" />

      {/* ── MAIN LAYOUT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 md:px-12 flex flex-col h-full pt-[110px] md:pt-[120px] lg:pt-[130px] pb-[4svh] lg:pb-[8svh] justify-between">

        {/* ── HEADER (Restored to force immediate animation) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-6 lg:mb-10 shrink-0"
        >
          <div className="mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full">
            <span className="w-6 lg:w-8 h-[2px] bg-[#C5A059]"></span>
            <p className="text-[9px] lg:text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">Academics</p>
          </div>
          <h2 className="text-[9.5vw] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-[#0F172A]">
            Academic <span className="text-[#C5A059] italic font-serif ml-1">Foundation</span>
          </h2>
        </motion.div>

        {/* ── CONTENT SPLIT (Timeline + Display Box) ── */}
        <div
          className="flex flex-col lg:flex-row gap-6 lg:gap-16 flex-1 min-h-0 w-full items-center lg:items-stretch"
        >

          {/* 1. TIMELINE NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="w-full lg:w-1/3 flex lg:flex-col justify-between lg:justify-start lg:gap-10 relative shrink-0"
          >
            {/* Desktop Vertical Line connecting nodes */}
            <div className="hidden lg:block absolute left-[11px] top-4 bottom-4 w-[2px] bg-zinc-200/50 -z-10" />
            {/* Mobile Horizontal Line connecting nodes */}
            <div className="lg:hidden absolute top-[11px] left-6 right-6 h-[2px] bg-zinc-200/50 -z-10" />

            {EDUCATION_DATA.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative flex lg:flex-row flex-col items-center lg:items-start gap-2 lg:gap-6 group text-left ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'} transition-opacity duration-300`}
                >
                  {/* Timeline Node */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 bg-[#f6f5f2] ${isActive ? 'border-[#C5A059] scale-125 shadow-[0_0_15px_rgba(210,4,45,0.4)]' : 'border-zinc-200 group-hover:border-zinc-500'}`}>
                    {isActive && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-[#C5A059]" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  </div>

                  {/* Timeline Text */}
                  <div className="flex flex-col items-center lg:items-start mt-2 lg:mt-0">
                    <span className="text-[10px] lg:text-xs font-bold text-zinc-600 uppercase tracking-widest mb-1 hidden sm:block">
                      {item.year}
                    </span>
                    <span className={`text-[9px] sm:text-xs lg:text-sm font-black uppercase tracking-wider text-center lg:text-left transition-colors duration-300 ${isActive ? 'text-[#0F172A]' : 'text-zinc-600'}`}>
                      {item.initials}
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* 2. CINEMATIC DISPLAY BOX */}
          <div className="flex-1 w-full max-w-2xl relative h-full flex items-center justify-center">
            {/* GPU Accelerated ambient glow */}
            <div className="absolute inset-0 bg-[#C5A059]/5 blur-[80px] rounded-full pointer-events-none transform-gpu" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full bg-white/60 backdrop-blur-xl border border-white/80 p-6 sm:p-8 lg:p-12 rounded-3xl lg:rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[250px] lg:min-h-[350px] transform-gpu will-change-transform"
              >
                {/* Watermark Background Number */}
                <span className="absolute -bottom-10 -right-4 text-[12rem] lg:text-[16rem] font-black text-[#0F172A]/[0.02] select-none pointer-events-none leading-none">
                  0{active + 1}
                </span>

                {/* Top Row: Logo & Badges */}
                <div className="flex justify-between items-start mb-6 lg:mb-10 relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white/95 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {!imgFailed[active] ? (
                      <img
                        src={EDUCATION_DATA[active].logo}
                        alt={EDUCATION_DATA[active].institution}
                        className="w-full h-full object-contain"
                        onError={() => setImgFailed(prev => ({ ...prev, [active]: true }))}
                      />
                    ) : (
                      <span className="text-[10px] sm:text-xs font-black text-[#09090b]">
                        {EDUCATION_DATA[active].initials}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[9px] sm:text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {EDUCATION_DATA[active].year}
                    </span>
                    <span className="text-zinc-600 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em]">
                      {EDUCATION_DATA[active].category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0F172A] leading-snug tracking-tight mb-2">
                    {EDUCATION_DATA[active].degree}
                  </h3>
                  <p className="text-[12px] sm:text-sm lg:text-base font-bold text-zinc-600 mb-4 lg:mb-6">
                    {EDUCATION_DATA[active].institution}
                  </p>

                  <div className="w-12 h-[2px] bg-[#C5A059] mb-4 lg:mb-6" />

                  <p className="text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-600 font-medium">
                    {EDUCATION_DATA[active].details}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}