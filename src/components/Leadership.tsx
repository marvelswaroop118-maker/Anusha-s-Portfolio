"use client";

import { motion, AnimatePresence, useScroll, useSpring, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// --- LEADERSHIP DATASET ---
const LEADERSHIP_DATA = [
    {
        id: "intl-conf",
        year: "2024",
        role: "Stage & Presenter Management",
        title: "International Conference on Comparative Law",
        forum: "VIT-AP University",
        type: "International Event",
        tag: "Operations",
        desc: "Managed structural operations, stage execution, and presenter coordination for an international academic symposium.",
        inDepth: [
            "Spearheaded the stage infrastructure and on-site execution for a massive international academic conference.",
            "Managed real-time stage coordination, presenter transitions, and guest speaker hosting for international delegates.",
            "Ensured seamless execution of panel discussions and on-ground operational workflows."
        ]
    },
    {
        id: "isil-conf",
        year: "2024",
        role: "Stage & Presenter Management",
        title: "International Law in Times of Crisis",
        forum: "Jointly Organised with ISIL",
        type: "National Conference",
        tag: "Execution",
        desc: "Handled core stage management and presenter operations in collaboration with the Indian Society of International Law.",
        inDepth: [
            "Managed the complete stage workflow, including presenter hosting and schedule coordination for the conference.",
            "Spearheaded collaborative on-site logistics between the university and the Indian Society of International Law (ISIL).",
            "Ensured seamless physical execution of critical discussions revolving around global geopolitical crises."
        ]
    },
    {
        id: "intl-law-tech",
        year: "2024",
        role: "Organizing Committee",
        title: "Two-Day International Conference on Private International Law in the Era of New Emerging Technologies",
        forum: "VIT-AP School of Law",
        type: "International Conference",
        tag: "Committee",
        desc: "Served on the core Organizing Committee, assisting in stage and presenter management for the conference.",
        inDepth: [
            "Served on the core Organizing Committee for the International Conference on Private International Law and Emerging Technologies.",
            "Assisted in logistical and on-stage operational frameworks for discussions featuring global experts.",
            "Ensured seamless coordination, guest hosting, and execution of panel events."
        ]
    },
    {
        id: "cci-moot",
        year: "2024",
        role: "Court Room In-Charge",
        title: "VSL-CCI 1st National Moot Court",
        forum: "VIT-AP & CCI",
        type: "National Competition",
        tag: "Management",
        desc: "Organized the inaugural National Moot in collaboration with the Competition Commission of India as Court Room In-Charge.",
        inDepth: [
            "Served on the core Organizing Committee and acted as the primary Court Room In-Charge for the national-level event.",
            "Managed real-time courtroom setups, judicial seating protocols, and seamless stage transitions for participating national teams.",
            "Spearheaded collaboration logistics and structural planning between VSL and the Competition Commission of India."
        ]
    },
    {
        id: "intra-moot",
        year: "2023 & 2024",
        role: "Court Room In-Charge",
        title: "VSL Intra Moot Court",
        forum: "VIT-AP School of Law",
        type: "Flagship Competition",
        tag: "Execution",
        desc: "Assisted in organizing the moot court, managing courtroom logistics, and coordinating judicial evaluations.",
        inDepth: [
            "Served on the Organizing Committee for consecutive editions (2023 & 2024) as Court Room In-Charge.",
            "Assisted in overall organization, scaling the event's reach and institutional prestige.",
            "Coordinated evaluation matrices, onboarding of expert judicial benches, and real-time courtroom management."
        ]
    }
];

const IMPACT_METRICS = [
    { value: "05", label: "Core Initiatives" },
    { value: "Intl/Nat", label: "Scale Events" },
    { value: "300+", label: "Participants" },
    { value: "2023-25", label: "Active Years" },
];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function Leadership() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const [primedCardIndex, setPrimedCardIndex] = useState<number | null>(null);
    const [activeModalData, setActiveModalData] = useState<typeof LEADERSHIP_DATA[0] | null>(null);

    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 1024);
            setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    useEffect(() => {
        if (activeModalData) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [activeModalData]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth > 1024 ? 450 : window.innerWidth * 0.85;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleCardInteraction = (index: number) => {
        if (isTouch) {
            if (primedCardIndex === index) {
                setActiveModalData(LEADERSHIP_DATA[index]);
                setPrimedCardIndex(null);
            } else {
                setPrimedCardIndex(index);
                setTimeout(() => setPrimedCardIndex((curr) => curr === index ? null : curr), 3000);
            }
        } else {
            setActiveModalData(LEADERSHIP_DATA[index]);
        }
    };

    return (
        <div className="relative w-full h-[100svh] bg-[#f6f5f2] overflow-hidden flex flex-col font-sans select-none">

            {/* ── HIGH-END AMBIENT BACKGROUND ── */}
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div className="absolute top-[-10%] right-[-10%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none z-0 transform-gpu" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-white/60 rounded-full blur-[120px] pointer-events-none z-0 transform-gpu" />

            {/* ── MAIN LAYOUT WRAPPER ── */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col h-full pt-20 md:pt-24 lg:pt-24 pb-[2svh] lg:pb-[4svh]">

                {/* ── HEADER AREA ── */}
                <div className="px-5 md:px-12 shrink-0">
                    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">

                        <div className="flex flex-col items-start w-full lg:w-auto">
                            <motion.div variants={fadeUp} className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                                <span className="w-6 lg:w-8 h-[2px] bg-[#C5A059]" />
                                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Initiatives & Operations</p>
                            </motion.div>

                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#0F172A] tracking-tight mb-4 lg:mb-6">
                                Organizational <span className="text-[#C5A059] italic font-serif">Leadership</span>
                            </motion.h2>

                            {/* IMPACT METRICS DASHBOARD */}
                            <motion.div variants={fadeUp} className="w-full flex justify-between items-center bg-white/60 border border-zinc-200 rounded-xl p-2 sm:p-3 backdrop-blur-md shadow-sm max-w-2xl">
                                {IMPACT_METRICS.map((metric, i) => (
                                    <div key={i} className="flex flex-col items-center flex-1 border-r border-zinc-200 last:border-0 px-1 sm:px-2">
                                        <span className="text-[#C5A059] font-black text-[11px] sm:text-sm">{metric.value}</span>
                                        <span className="text-zinc-500 font-bold text-[7px] sm:text-[9px] uppercase tracking-widest mt-0.5 text-center leading-tight sm:leading-normal">{metric.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Desktop Navigation Buttons */}
                        <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-3">
                            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-zinc-200 bg-white/60 flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#C5A059] hover:border-[#C5A059] transition-all shadow-sm group">
                                <svg className="w-5 h-5 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-zinc-200 bg-white/60 flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#C5A059] hover:border-[#C5A059] transition-all shadow-sm group">
                                <svg className="w-5 h-5 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </motion.div>

                    </motion.div>
                </div>

                {/* ── UNIVERSAL CAROUSEL (Dynamically fits remaining height) ── */}
                <div className="flex-1 min-h-[280px] w-full relative mt-5 lg:mt-8 pb-4 flex flex-col">
                    
                    <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-[#f6f5f2] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-[#f6f5f2] to-transparent z-20 pointer-events-none" />

                    {/* h-full ensures cards perfectly fill the leftover vertical space without exceeding the slide */}
                    <div
                        ref={scrollRef}
                        className="flex-1 w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-stretch px-5 lg:px-12 gap-5 lg:gap-8 pt-4 pb-4"
                    >
                        {LEADERSHIP_DATA.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95, y: i % 2 === 0 ? 10 : -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                                onClick={() => handleCardInteraction(i)}
                                className="relative snap-center shrink-0 w-[85vw] sm:w-[360px] lg:w-[420px] h-full bg-white/50 backdrop-blur-xl border border-white/80 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-between group overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 transform-gpu"
                            >
                                {/* Exquisite Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/0 via-transparent to-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex justify-between items-center mb-4 lg:mb-6 shrink-0">
                                    <span className="text-zinc-500 text-[11px] lg:text-[13px] font-black tracking-[0.2em] uppercase">
                                        {item.year}
                                    </span>
                                    <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[9px] lg:text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shrink-0">
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col justify-center py-2 overflow-y-auto scrollbar-hide pr-1">
                                    <h3 className="text-[16px] lg:text-xl xl:text-2xl font-black text-[#0F172A] leading-[1.2] tracking-tight group-hover:text-[#C5A059] transition-colors mb-2 lg:mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] lg:text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em] mb-2 lg:mb-3">
                                        {item.role} • {item.forum}
                                    </p>
                                    <p className="text-[11px] lg:text-sm text-zinc-600 font-medium leading-relaxed hidden sm:block">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 border-t border-zinc-200/60 pt-4 mt-2 shrink-0 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[#0F172A] text-[9px] font-black uppercase tracking-[0.2em] group-hover:text-[#C5A059] transition-colors duration-300">
                                        <span>Open Dossier</span>
                                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Spacer */}
                        <div className="shrink-0 w-2 lg:w-4" />
                    </div>

                    {/* Mobile Nav Controls */}
                    <div className="flex lg:hidden justify-center items-center gap-4 mt-3 shrink-0 z-20">
                        <button onClick={() => scroll('left')} className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-xl border border-zinc-200 flex items-center justify-center text-[#0F172A] shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg></button>
                        <button onClick={() => scroll('right')} className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-xl border border-zinc-200 flex items-center justify-center text-[#0F172A] shadow-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg></button>
                    </div>
                </div>

            </div>

            {/* ── THE DOSSIER MODAL ── */}
            <AnimatePresence>
                {activeModalData && (
                    <div className="fixed inset-0 z-[120] flex items-end lg:items-center justify-center p-0 lg:p-10">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setActiveModalData(null)}
                            className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-md cursor-pointer"
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-[#f6f5f2] rounded-t-[2rem] lg:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] lg:max-h-[90vh]"
                        >
                            <div className="p-5 md:p-8 bg-white/60 backdrop-blur-xl border-b border-zinc-200/60 flex justify-between items-start shrink-0">
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-zinc-200/60 rounded-[1rem] flex items-center justify-center p-2 shrink-0 shadow-sm overflow-hidden">
                                        <img src="/Education/VIT.png" alt="VIT-AP" className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <div>
                                        <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[8px] md:text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-widest mb-1.5 inline-block">
                                            {activeModalData.tag}
                                        </span>
                                        <h2 className="text-[16px] md:text-xl font-bold text-[#0F172A] leading-tight tracking-tight pr-2">
                                            {activeModalData.title}
                                        </h2>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setActiveModalData(null)}
                                    className="w-10 h-10 shrink-0 bg-white border border-zinc-200/60 rounded-full flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#C5A059] shadow-sm transition-colors ml-2"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <div className="p-5 md:p-8 overflow-y-auto hide-scrollbar">
                                <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                                    <div className="flex-1 min-w-[120px] bg-white border border-zinc-200/60 p-4 rounded-2xl shadow-sm">
                                        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black mb-1.5">Forum / Organizer</p>
                                        <p className="text-[13px] md:text-sm text-[#0F172A] font-bold truncate">{activeModalData.forum}</p>
                                    </div>
                                    <div className="flex-1 min-w-[120px] bg-white border border-zinc-200/60 p-4 rounded-2xl shadow-sm">
                                        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black mb-1.5">Scale / Type</p>
                                        <p className="text-[13px] md:text-sm text-[#C5A059] font-bold">{activeModalData.type}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[10px] md:text-[11px] font-black text-[#0F172A] uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                        <span className="w-4 h-[2px] bg-[#C5A059]"></span>
                                        Execution & Deliverables
                                    </h3>
                                    <ul className="flex flex-col gap-4 pb-4">
                                        {activeModalData.inDepth.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-[6px] shrink-0" />
                                                <p className="text-[12px] md:text-sm text-zinc-600 font-medium leading-relaxed">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
