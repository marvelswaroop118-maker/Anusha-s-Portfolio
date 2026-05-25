"use client";

import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Chronologically sorted unified timeline based on provided CVs
const AWARDS_DATA = [
    {
        category: "Competition",
        badge: "1ST PLACE",
        title: "Intra Debate Competition",
        issuer: "VIT-AP University",
        year: "2025",
        detail: "Awarded 1st Place for exceptional oral advocacy and structured argumentation.",
        highlight: true,
    },
    {
        category: "Academic",
        badge: "AWARD",
        title: "Academic Excellence",
        issuer: "VIT-AP University",
        year: "2024-26",
        detail: "Two-time recipient of the Academic Excellence Award for outstanding consistent performance in B.B.A. LL.B. (Hons.).",
        highlight: true,
    },
    {
        category: "Competition",
        badge: "1ST PLACE",
        title: "Mock Parliament",
        issuer: "VIT-AP University",
        year: "2022",
        detail: "Secured 1st Place demonstrating parliamentary debating skills and policy deliberation.",
        highlight: false,
    }
];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Accolades() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollNext = () => scrollRef.current?.scrollBy({ left: isMobile ? 300 : 420, behavior: "smooth" });
    const scrollPrev = () => scrollRef.current?.scrollBy({ left: isMobile ? -300 : -420, behavior: "smooth" });

    return (
        <section
            id="accolades"
            className="relative w-full h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans pt-20 lg:pt-24 pb-6"
        >
            {/* ── AMBIENT BACKGROUND ── */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none z-0 transform-gpu" />

            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full justify-between px-6 md:px-12 gap-6">

                {/* ── HEADER ── */}
                <motion.div variants={staggerContainer} initial="hidden" animate="show" className="shrink-0 flex items-end justify-between">
                    <div className="flex flex-col">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                            <span className="w-6 lg:w-8 h-[2px] bg-[#C5A059]"></span>
                            <p className="text-[9px] lg:text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">Awards & Ranks</p>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#0F172A] tracking-tight uppercase">
                            Trophy <span className="text-[#C5A059] italic font-serif normal-case ml-1">Cabinet</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-3">
                        <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-zinc-200 bg-white/60 flex items-center justify-center text-zinc-600 hover:text-white hover:bg-[#0F172A] transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
                        <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-zinc-200 bg-white/60 flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
                    </motion.div>
                </motion.div>

                {/* ── CAROUSEL ── */}
                <div className="flex-1 min-h-[250px] w-full relative pb-2 pt-2">
                    <div ref={scrollRef} className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 items-stretch px-2 pb-4">
                        {AWARDS_DATA.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className={`shrink-0 w-[80vw] sm:w-[320px] lg:w-[400px] h-full rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm border hover:-translate-y-2 transform-gpu transition-all duration-300 ${item.highlight ? "bg-[#0F172A] border-zinc-800 text-white shadow-[0_8px_30px_rgb(0,0,0,0.15)]" : "bg-white/60 backdrop-blur-xl border-white hover:bg-white hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex justify-between items-start shrink-0">
                                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${item.highlight ? "bg-[#C5A059] text-[#0F172A]" : "bg-[#C5A059]/10 text-[#C5A059]"}`}>{item.badge}</span>
                                    <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${item.highlight ? "text-zinc-500" : "text-zinc-400"}`}>{item.year}</span>
                                </div>
                                <div className="flex-1 flex flex-col justify-center py-4 overflow-y-auto hide-scrollbar pr-1">
                                    <h3 className={`text-xl lg:text-2xl font-black leading-tight mb-3 ${item.highlight ? "text-white" : "text-[#0F172A]"}`}>{item.title}</h3>
                                    <p className={`text-xs lg:text-sm font-medium leading-relaxed ${item.highlight ? "text-zinc-400" : "text-zinc-600"}`}>{item.detail}</p>
                                </div>
                                <div className="border-t border-zinc-200/20 pt-4 mt-2 shrink-0">
                                  <p className={`text-[9px] lg:text-[10px] uppercase tracking-widest font-bold ${item.highlight ? "text-zinc-500" : "text-zinc-500"}`}>{item.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── PROGRESS ── */}
                <div className="w-full px-5 md:px-12 mt-2 shrink-0">
                    <div className="w-full max-w-[200px] mx-auto h-[2px] bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div style={{ scaleX, transformOrigin: "0%" }} className="h-full bg-[#C5A059] w-full" />
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