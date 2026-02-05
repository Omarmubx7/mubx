'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState, useEffect } from 'react';
import TypingText from './ui/TypingText';

export default function Hero() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black -z-30" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 opacity-20" />

            {/* Spotlight / Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neon/10 via-neon/5 to-transparent blur-3xl -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-[100px] -z-10" />

            {/* Floating particles or accents */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon rounded-full animate-pulse blur-[1px] opacity-50" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan rounded-full animate-pulse delay-700 blur-[2px] opacity-40" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10"
            >
                <div className="mb-8 relative inline-block">
                    <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-2xl z-20">
                        OMAR <br className="md:hidden" />
                        MUBAIDIN
                    </h1>
                    <div className="hidden md:block absolute -right-12 -top-8 rotate-12">
                        <span className="px-3 py-1 bg-neon text-black text-xs font-bold rounded-full uppercase tracking-wider">
                            Verified Dev
                        </span>
                    </div>
                </div>

                <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mb-10 leading-relaxed h-[60px] flex items-center justify-center">
                    <span className="sr-only">Web Developer & CS Student in Amman, Jordan. Founder of MUBX. Building fast, secure web systems.</span>
                    {isLoading ? (
                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                            <Skeleton width={400} height={24} />
                        </SkeletonTheme>
                    ) : (
                        <TypingText
                            strings={[
                                "Web Developer & CS Student in Amman",
                                "Founder of MUBX",
                                "I build <span class='text-neon font-bold'>fast, secure web systems</span>"
                            ]}
                        />
                    )}
                </motion.h2>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                    <a
                        href="mailto:omarmubaidin@proton.me"
                        className="group flex items-center justify-center gap-2 px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        Work with MUBX
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                        href="#projects"
                        className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all"
                    >
                        View Work
                    </Link>
                </motion.div>

                {/* Social Proof / Trust Strip */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 opacity-80">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm text-muted uppercase tracking-widest font-bold">Creator of BloB.JO & Founder of MUBX</p>
                        <p className="text-xs text-muted/60 font-medium">Trusted by student clubs, agencies, and local brands in Jordan.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 items-center grayscale hover:grayscale-0 transition-all duration-500">
                        <Link href="/projects/vynex-media" className="text-white/40 font-bold text-lg hover:text-white transition-colors hover:underline decoration-neon decoration-2 underline-offset-4">HTU Martial Arts</Link>
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                        <Link href="/projects/blob-jo" className="text-white/40 font-bold text-lg hover:text-white transition-colors hover:underline decoration-neon decoration-2 underline-offset-4">BloB.JO</Link>
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                        <Link href="/projects/vynex-media" className="text-white/40 font-bold text-lg hover:text-white transition-colors hover:underline decoration-neon decoration-2 underline-offset-4">Vynex Media</Link>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
