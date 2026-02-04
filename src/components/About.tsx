'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column: Story & Vision */}
                    <div className="space-y-6">
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold">
                            FROM <span className="text-neon">LAB</span> TO <span className="text-white">LIVE</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                            Code meant for production, not just grading. I bridge the gap between CS theory and scalable, secure web apps.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                <span className="text-neon font-bold">CS</span> Architecture
                            </span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                <span className="text-cyan font-bold">DB</span> Optimization
                            </span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                <span className="text-white font-bold">UX</span> Engineering
                            </span>
                        </motion.div>
                    </div>

                    {/* Right Column: Stats / Visual (Abstract Representation) */}
                    <motion.div variants={fadeUp} className="relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-cyan/10 rounded-full blur-[100px]" />
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
                                <div className="text-4xl font-bold text-neon mb-1">CS</div>
                                <div className="text-sm text-muted">Computer Science</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md translate-y-8">
                                <div className="text-4xl font-bold text-cyan mb-1">100%</div>
                                <div className="text-sm text-muted">Secure & Scalable</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md -translate-y-4">
                                <div className="text-4xl font-bold text-white mb-1">DB</div>
                                <div className="text-sm text-muted">Database Specialist</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md translate-y-4">
                                <div className="text-4xl font-bold text-neon mb-1">UX</div>
                                <div className="text-sm text-muted">Modern Esthetics</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
