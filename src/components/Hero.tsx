'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Hero() {
    const techStack = ['Next.js 15', 'TypeScript', 'MySQL', 'PHP', 'Security', 'Cryptography'];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Elements (Parallax or Glow) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10"
            >
                <motion.p variants={fadeUp} className="text-neon font-bold tracking-wide text-sm md:text-base mb-4 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                    Computer Science Student & Web Developer
                </motion.p>

                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
                    OMAR <br className="md:hidden" />
                    <span className="text-white">MUBAIDIN</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted max-w-2xl mb-8 leading-relaxed">
                    Founder of <span className="text-white font-semibold">MUBX</span>. I don't just build websites; I engineer <span className="text-cyan">secure, data-driven systems</span>.
                    Bridging the gap between CS theory and production-grade applications.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 text-sm font-bold text-white/90 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:border-cyan/50 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(225,245,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        View Work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="/cv.pdf" // Placeholder path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                    >
                        Download CV
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
