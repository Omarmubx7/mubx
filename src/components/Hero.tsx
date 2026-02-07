'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';
import TypingText from './ui/TypingText';
import MagneticButton from './ui/MagneticButton';
import TextReveal from './ui/TextReveal';
import Image from 'next/image';

export default function Hero() {


    return (
        <section className="relative min-h-screen flex items-start lg:items-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black -z-30" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 opacity-20" />

            {/* Spotlights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 blur-[80px] -z-10 rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/5 blur-[80px] -z-10 rounded-full mix-blend-screen" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Stack */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center lg:items-start"
                        >
                            {/* Trust Badge */}
                            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                                    Available · Trusted by HTU, BloB.JO, Vynex
                                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                Turn your website into <br className="hidden lg:block" />
                                <span className="text-neon">revenue.</span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8 font-light">
                                I build custom, secure web systems for founders in Jordan.
                                <span className="block mt-2">
                                    No templates. Just high-performance code with native <span className="text-white font-medium">Zain Cash & CliQ</span> integration.
                                </span>
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div variants={fadeUp} className="flex flex-col items-center lg:items-start gap-4 mb-10 w-full sm:w-auto">
                                <MagneticButton>
                                    <a
                                        href="#contact"
                                        className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-neon text-black font-black text-lg rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                    >
                                        Get My Project Estimate
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </MagneticButton>
                                <span className="text-xs text-muted/60 font-medium">
                                    Clear plan & pricing in 24 hours. No pressure.
                                </span>

                                <div className="mt-2">
                                    <a href="#projects" className="text-white font-bold text-sm hover:text-neon transition-colors border-b border-transparent hover:border-neon pb-0.5">
                                        View my projects →
                                    </a>
                                </div>
                            </motion.div>

                            {/* Trust Bullets (Microcopy) */}
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-medium text-white/40 border-t border-white/5 pt-6 w-full justify-center lg:justify-start">
                                <span className="flex items-center gap-2">
                                    <span className="text-neon text-lg">›</span> Performance Optimized
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-neon text-lg">›</span> Security Standards
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-neon text-lg">›</span> Local Payments Ready
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image Card */}
                    <div className="flex-1 lg:max-w-[500px] mb-10 lg:mb-0 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full max-w-[420px] mx-auto"
                        >
                            {/* Card Container - Transparent */}
                            <div className="relative group">
                                {/* Image */}
                                <div className="relative aspect-[4/5] w-full">
                                    <Image
                                        src="/omarmub.png"
                                        alt="Omar Mubaidin - Full Stack Developer"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className="object-contain object-bottom scale-110 group-hover:scale-115 transition-transform duration-700 drop-shadow-2xl will-change-transform"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative Elements behind card */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
