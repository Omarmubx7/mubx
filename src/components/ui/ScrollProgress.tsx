'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        // Track the exact progress percentage and toggle visibility
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setProgress(Math.round(latest * 100));
            setIsVisible(latest > 0.05); // Show only after scrolling 5% down
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!mounted) return null;

    // Circular SVG configurations
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <>
            {/* Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon via-red-500 to-neon origin-left z-[110] pointer-events-none"
                style={{ scaleX: scrollYProgress }}
            />

            <div className={`fixed bottom-8 right-8 z-50 flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
            }`}>
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll back to top"
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-white/10 hover:border-neon/40 shadow-[0_0_20px_rgba(0,0,0,0.8)] group transition-colors duration-300"
                >
                    {/* SVG Progress Circle */}
                    <svg className="absolute w-full h-full -rotate-90 p-[2px]" viewBox="0 0 60 60">
                        {/* Background Circle */}
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            className="stroke-white/5 fill-none"
                            strokeWidth="3"
                        />
                        {/* Animated Progress Circle */}
                        <motion.circle
                            cx="30"
                            cy="30"
                            r={radius}
                            className="stroke-neon fill-none"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            style={{ strokeDashoffset }}
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Arrow Icon showing on hover */}
                    <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                        <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-neon group-hover:-translate-y-6 transition-all duration-300 absolute" />
                        <ArrowUp className="w-5 h-5 text-neon translate-y-6 group-hover:translate-y-0 transition-all duration-300 absolute" />
                    </div>

                    {/* Hover Tooltip/Percentage (subtle) */}
                    <div aria-hidden="true" className="absolute right-16 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right bg-black/90 border border-white/10 text-xs font-mono text-white px-2 py-1 rounded shadow-lg pointer-events-none">
                        {progress}%
                    </div>
                </button>
            </div>
        </>
    );
}
