"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Great_Vibes } from "next/font/google";

// Using a beautiful handwriting font for the signature
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface PreloaderProps {
    onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // 3.5 seconds total display time
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Wait for the exit zoom animation to finish before unlocking the page scroll
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 800);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    // Matches the dark slate blue background of the site perfectly
                    initial={{ opacity: 1, backgroundColor: "#050B14" }}
                    exit={{ opacity: 0, backgroundColor: "transparent" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                >
                    <motion.div
                        // The massive zoom-out effect
                        initial={{ scale: 1 }}
                        exit={{ scale: 20, opacity: 0 }}
                        // 🚨 FIX: Cast the array as any to ensure TypeScript ignores strict transition type checking
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
                        className="relative flex items-center justify-center"
                    >
                        {/* The base text (faint gold outline) */}
                        <div className={`text-6xl md:text-8xl lg:text-9xl text-[#C5A059]/10 tracking-widest ${greatVibes.className}`}>
                            Anusha Nalla
                        </div>
                        
                        {/* The clipping mask text that sweeps left to right like it's being drawn */}
                        <motion.div
                            className={`absolute left-0 top-0 text-6xl md:text-8xl lg:text-9xl text-[#C5A059] tracking-widest whitespace-nowrap overflow-hidden ${greatVibes.className}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.4, duration: 1.8, ease: "easeInOut" }}
                        >
                            Anusha Nalla
                        </motion.div>
                        
                        {/* A beautiful white flash/glow effect at the very end to signify completion */}
                        <motion.div
                            className={`absolute left-0 top-0 text-6xl md:text-8xl lg:text-9xl text-white tracking-widest whitespace-nowrap overflow-hidden ${greatVibes.className}`}
                            initial={{ width: "100%", opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 2.3, duration: 0.8, ease: "easeInOut" }}
                        >
                            Anusha Nalla
                        </motion.div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}