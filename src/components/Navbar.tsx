"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#summary", label: "Summary" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#leadership", label: "Leadership" },
  { href: "#advocacy", label: "Advocacy" },
  { href: "#accolades", label: "Accolades" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ════════════════════════════════════
          DESKTOP NAVBAR — Floating Pill
      ════════════════════════════════════ */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 lg:gap-6 xl:gap-8 px-5 lg:px-6 h-14 lg:h-16 rounded-full transition-all duration-500 ease-out w-[92vw] sm:w-[85vw] lg:w-auto lg:max-w-fit mx-auto ${scrolled
              ? "bg-white/95 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              : "bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            }`}
        >
          {/* Logo referencing the public folder SVG */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative flex items-center shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Home"
          >
            <img
              src="/Logo.svg"
              alt="Anusha Signature"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.filter((item) => item.label !== "Home").map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-3 py-2 rounded-lg cursor-pointer group hover:bg-[#C5A059]/10 transition-colors duration-200"
              >
                <span className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 group-hover:text-[#0F172A] transition-colors duration-200">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CV Button */}
            <a
              href="/Anusha CV.pdf"
              download
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#C5A059] transition-colors duration-300 shadow-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download CV
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden w-10 h-10 flex-col items-center justify-center gap-[5px] relative z-[110]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-[#0F172A] block"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-[2px] bg-[#0F172A] block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-[#0F172A] block"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ════════════════════════════════════ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-[100svh] bg-[#f6f5f2] z-[95] flex flex-col"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C5A059]/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Scrollable links area */}
            <div className="flex-1 w-full overflow-y-auto scrollbar-hide flex flex-col items-center justify-start gap-1 sm:gap-2 relative z-10 px-6 pt-[110px] pb-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xs text-center"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[20px] sm:text-[24px] font-black uppercase tracking-[0.1em] text-[#0F172A]/75 hover:text-[#C5A059] hover:scale-105 transition-all duration-200 block py-2"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="shrink-0 w-full flex justify-center pb-8 pt-4 relative z-10"
            >
              <a
                href="/Anusha CV.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#C5A059] transition-colors duration-300 shadow-xl flex items-center gap-3 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}