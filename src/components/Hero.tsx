'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Hero() {
    // const techStack = ['Next.js 15', 'TypeScript', 'MySQL', 'PHP', 'Security', 'Cryptography'];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Elements (Parallax or Glow) */}
            {/* Background Elements (Parallax or Glow) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-black to-black -z-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-1000" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10"
            >
                <motion.div variants={fadeUp} className="mb-8 relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-cyan/20 blur-xl opacity-50 animate-pulse rounded-full" />
                    <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                        OMAR <br className="md:hidden" />
                        MUBAIDIN
                    </h1>
                    <div className="hidden md:block absolute -right-12 -top-8 rotate-12">
                        <span className="px-3 py-1 bg-neon text-black text-xs font-bold rounded-full uppercase tracking-wider">
                            Verified Dev
                        </span>
                    </div>
                </motion.div>

                <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mb-10 leading-relaxed">
                    I build <span className="text-neon font-bold">fast, secure web systems</span> for brands that want to scale.
                </motion.h2>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                    <a
                        href="https://wa.me/962780090453"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        {/* Text placeholders for logos as per request */}
                        <span className="text-white/40 font-bold text-lg hover:text-white transition-colors">HTU Martial Arts</span>
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                        <span className="text-white/40 font-bold text-lg hover:text-white transition-colors">BloB.JO</span>
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                        <span className="text-white/40 font-bold text-lg hover:text-white transition-colors">Vynex Media</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
