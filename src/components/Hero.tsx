'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';
import TypingText from './ui/TypingText';
import MagneticButton from './ui/MagneticButton';
import TextReveal from './ui/TextReveal';

export default function Hero() {


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
                initial="visible" // Crucial for LCP: Start visible
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10"
            >
                <div className="mb-8 relative inline-block">
                    {/* Availability Badge */}
                    <div className="flex items-center justify-center gap-2 mb-8 mx-auto px-4 py-1.5 bg-white/5 w-fit rounded-full border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Available for New Projects</span>
                    </div>

                    <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] text-white drop-shadow-2xl z-20 mb-6">
                        I build <span className="text-neon">fast, secure</span><br className="hidden md:block" /> web systems for<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">founders in Jordan.</span>
                    </h1>

                    <div className="hidden md:block absolute -right-4 top-20 rotate-12 opacity-80">
                        <span className="px-3 py-1 bg-neon text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-neon/20">
                            Verified Dev
                        </span>
                    </div>

                    <p className="mt-8 text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light">
                        Custom-engineered for performance, security, and local payments <span className="text-white font-medium">(Zain Cash, CliQ)</span>.
                        <br className="hidden md:block" /> Stop losing customers to slow, generic templates.
                    </p>
                </div>

                {/* Main CTA - Larger & Higher Contrast */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20">
                    <MagneticButton>
                        <a
                            href="#contact"
                            className="group flex items-center justify-center gap-3 px-10 py-5 bg-neon text-black font-black text-xl rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(255,30,30,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                        >
                            Get a Project Estimate
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </MagneticButton>
                </motion.div>

                {/* Social Proof / Trust Strip */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 opacity-90 w-full max-w-4xl min-h-[400px] md:min-h-[160px]">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm text-muted uppercase tracking-widest font-bold">Trusted by Local Leaders</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold text-lg">HTU Martial Arts</span>
                            <span className="text-xs text-muted mb-2">University Club System</span>
                            <span className="text-neon font-mono text-xs font-bold">100+ Members Managed</span>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold text-lg">BloB.JO</span>
                            <span className="text-xs text-muted mb-2">Amman, Print-on-Demand Brand</span>
                            <span className="text-neon font-mono text-xs font-bold">Full Digital Branch</span>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold text-lg">Vynex Media</span>
                            <span className="text-xs text-muted mb-2">Digital Agency</span>
                            <span className="text-neon font-mono text-xs font-bold">+20% Lead Conversion</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
