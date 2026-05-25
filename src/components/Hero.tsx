"use client";

import { motion, animate, Variants, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* =========================================================
   ANIMATED COUNTER (Optimized: Zero React Re-renders)
========================================================= */
const AnimatedCounter = ({ value }: { value: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    // Animate DOM node directly. Bypassing React state prevents 60fps render lag.
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
      onUpdate(latest) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(latest).toString();
        }
      },
    });

    return () => controls.stop();
  }, [value, isInView]);

  return <span ref={nodeRef}>0</span>;
};

/* =========================================================
   MOTION VARIANTS
========================================================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

/* =========================================================
   HERO PAGE
========================================================= */
export default function Hero() {
  const butterflyRef = useRef<HTMLDivElement>(null);
  const dummyEventRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);


  /* =====================================================
     GPU-ACCELERATED PARALLAX SCROLL
  ===================================================== */
  // useScroll + useTransform runs completely on the GPU compositor thread.
  // This removes scroll stutter entirely.
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  /* =====================================================
     THREE.JS BUTTERFLIES INIT
  ===================================================== */
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let effectInstance: any = null;
    const isMobile = window.innerWidth < 768;

    // Respect user's OS motion sickness settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    async function init() {
      try {
        // @ts-ignore
        const { butterfliesBackground } = await import("threejs-toys");

        if (!butterflyRef.current) return;
        butterflyRef.current.innerHTML = "";

        effectInstance = butterfliesBackground({
          el: butterflyRef.current,
          eventsEl: dummyEventRef.current, // Swallows events so page scrolling works normally

          /* PERFORMANCE TUNING */
          gpgpuSize: isMobile ? 24 : 42,
          background: 0xf6f5f2,
          material: "basic",
          materialParams: { transparent: true, alphaTest: 0.5 },
          texture: "https://assets.codepen.io/33787/butterflies.png",
          textureCount: 4,
          wingsScale: isMobile ? [0.45, 0.45, 0.45] : [0.65, 0.65, 0.65],
          wingsWidthSegments: isMobile ? 4 : 6,
          wingsHeightSegments: isMobile ? 4 : 6,
          wingsSpeed: 0.4,
          wingsDisplacementScale: 0.8,
          noiseCoordScale: 0.005,
          noiseTimeCoef: 0.0002,
          noiseIntensity: 0.0015,
          attractionRadius1: isMobile ? 25 : 50,
          attractionRadius2: isMobile ? 50 : 100,
          maxVelocity: 0.03,
        });
      } catch (err) {
        console.error("WebGL failed to load:", err);
      }
    }

    init();

    return () => {
      // Clean up WebGL context when unmounting to free memory
      if (effectInstance && typeof effectInstance.destroy === "function") {
        effectInstance.destroy();
      }
      if (butterflyRef.current) butterflyRef.current.innerHTML = "";
    };
  }, []);


  return (
    <motion.section
      style={{ scale, opacity }}
      className="relative w-full h-[100svh] overflow-hidden origin-top bg-[#f6f5f2] select-none transform-gpu"
    >
      {/* Screen Reader Only H1 for true SEO */}
      <h1 className="sr-only">Anusha Nalla - B.B.A. LL.B. (Hons.) Legal Counsel</h1>

      {/* DUMMY ELEMENT TO SWALLOW BUTTERFLY EVENTS */}
      <div ref={dummyEventRef} className="hidden" />

      {/* =============================================
          BUTTERFLIES (Background Layer)
      ============================================= */}
      <div
        ref={butterflyRef}
        id="app-hero"
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.85]"
      />


      {/* =============================================
          PREMIUM LIGHTING OVERLAYS
      ============================================= */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#C5A059]/15 to-transparent blur-[120px] pointer-events-none z-[1] transform-gpu" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-white/60 to-transparent blur-[100px] pointer-events-none z-[1] transform-gpu" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(246,245,242,0.8)_100%)]" />

      {/* =============================================
          HUGE WATERMARK TEXT (Aria hidden for screen readers)
      ============================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="leading-none flex flex-col items-center mt-[8svh]"
        >
          <div className="whitespace-nowrap font-serif text-[24vw] md:text-[18vw] font-black tracking-[-0.08em] text-[#0F172A] opacity-[0.06]">
            ANUSHA
          </div>
          <div className="whitespace-nowrap font-serif text-[24vw] md:text-[18vw] font-black tracking-[-0.08em] text-[#0F172A] opacity-[0.06] ml-12 lg:ml-32 mt-[-4vw]">
            NALLA
          </div>
        </motion.div>
      </div>

      {/* =============================================
          MAIN PORTRAIT
      ============================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none mt-[4svh] md:mt-[8svh] pb-[10svh]"
      >
        <div className="relative flex h-[50vh] md:h-[60vh] w-[95%] md:w-[620px] lg:h-[75vh] lg:w-[720px] items-end justify-center">
          <div className="absolute top-[25%] h-[60%] w-[60%] rounded-full bg-[#C5A059]/20 blur-[100px] transform-gpu" />

          <Image
            src="/Anusha_Portrait.png"
            alt="Portrait of Anusha Nalla"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 720px"
            // transform-gpu ensures the shadow and mask do not cause frame drops
            className="object-contain object-bottom scale-[1.05] origin-bottom transform-gpu drop-shadow-[0_0_60px_rgba(0,0,0,0.15)] [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)] -webkit-[mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]"
          />
        </div>
      </motion.div>

      {/* =============================================
          UI LAYER (FROSTED BOXES)
      ============================================= */}
      <div className="absolute inset-0 z-30 mx-auto flex w-full max-w-[92rem] flex-col justify-between p-4 md:p-6 lg:p-12 pointer-events-none">

        {/* TOP TAG */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex w-full justify-center pt-20 pointer-events-auto"
        >
          <div className="rounded-full border border-white/50 bg-white/40 px-6 py-2 md:px-8 md:py-3 backdrop-blur-xl shadow-lg transform-gpu will-change-transform">
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#0F172A] lg:text-xs">
              B.B.A. LL.B. (Hons.)
              <span className="mx-2 md:mx-3 text-[#C5A059]">•</span>
              Legal Counsel
            </p>
          </div>
        </motion.div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col gap-3 md:gap-6 pb-[2svh] md:pb-[3svh] lg:flex-row lg:items-end lg:justify-between pointer-events-auto">

          {/* LEFT CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-row gap-2 md:gap-4 rounded-2xl md:rounded-[28px] border border-white/40 bg-white/40 p-2 md:p-3 backdrop-blur-xl shadow-lg w-full lg:w-auto justify-center transform-gpu will-change-transform"
          >
            <a
              href="/Anusha CV.pdf"
              download
              aria-label="Download CV Document"
              className="flex-1 lg:flex-none rounded-xl md:rounded-2xl bg-[#0F172A] px-4 py-3 md:px-8 md:py-4 text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#C5A059] hover:shadow-md active:scale-95"
            >
              Download CV
            </a>

            <a
              href="#contact"
              aria-label="Go to contact section"
              className="flex-1 lg:flex-none rounded-xl md:rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 md:px-8 md:py-4 text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] transition-all duration-300 hover:border-black hover:bg-white active:scale-95"
            >
              Contact
            </a>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex w-full justify-between gap-2 md:gap-6 rounded-2xl md:rounded-[28px] border border-white/40 bg-white/40 p-4 md:p-6 backdrop-blur-xl shadow-lg lg:w-auto lg:gap-10 transform-gpu will-change-transform"
          >
            {[
              { value: 9, label: "Internships" },
              { value: 6, label: "Publications" },
              { value: 4, label: "Moots" },
            ].map((item, i) => (
              <div key={i} className="text-center lg:text-right flex-1">
                <p className="font-serif text-2xl md:text-3xl font-semibold text-[#C5A059] lg:text-5xl">
                  <AnimatedCounter value={item.value} />+
                </p>
                <p className="mt-1 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] text-[#0F172A] lg:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Canvas Styling Scoped */}
      <style jsx global>{`
        #app-hero canvas {
          position: absolute !important;
          inset: 0;
          z-index: 0 !important;
          display: block;
        }
      `}</style>

    </motion.section>
  );
}