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
                initial="visible" // Crucial for LCP: Start visible
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
                    {/* Clean Subtitle - Unified Block via Typing Effect */}
                    <div className="mt-4 w-full max-w-4xl mx-auto min-h-[60px]">
                        <TypingText
                            strings={[
                                "Verified developer helping Jordanian brands turn visitors into paying customers in <span class='text-neon font-bold'>under 2 weeks</span>.",
                                "I build <span class='text-neon font-bold'>lightning-fast websites</span> that Google loves and customers trust.",
                                "Secure, scalable systems designed to <span class='text-neon font-bold'>outperform your competition</span>.",
                                "From minimal landing pages to <span class='text-neon font-bold'>complex e-commerce MVPs</span>.",
                                "I don't just write code; I <span class='text-neon font-bold'>engineer business growth</span>.",
                                "Get a <span class='text-neon font-bold'>Silicon Valley standard</span> product, built locally in Amman.",
                                "Stop losing customers to <span class='text-neon font-bold'>slow loading times</span>.",
                                "Turning complex problems into <span class='text-neon font-bold'>simple, elegant solutions</span>.",
                                "Your technical partner for <span class='text-neon font-bold'>digital transformation</span>.",
                                "Trusted by <span class='text-neon font-bold'>HTU, BloB.JO, and Vynex Media</span>.",
                                "Let's build something <span class='text-neon font-bold'>extraordinary</span> together."
                            ]}
                            className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed"
                            loop={true}
                            delay={30}
                        />
                    </div>
                </div>

                {/* Main CTA - Larger & Higher Contrast */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20">
                    <a
                        href="#contact"
                        className="group flex items-center justify-center gap-3 px-10 py-5 bg-neon text-black font-black text-xl rounded-full hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,30,30,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                    >
                        Get a Project Estimate
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Social Proof / Trust Strip */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 opacity-90 w-full max-w-4xl">
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
