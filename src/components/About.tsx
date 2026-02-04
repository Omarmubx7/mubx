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
                            WEB DEVELOPER IN <span className="text-neon">AMMAN</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                            I am a Computer Science student and <span className="text-white font-medium">Full Stack Web Developer</span> based in Jordan.
                            I specialize in building <span className="text-neon">Next.js</span> applications that are fast, secure, and scalable.
                            My focus is bridging the gap between strong CS theory and real-world production systems.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                <span className="text-neon font-bold">Next.js</span> Expert
                            </span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
                                <span className="text-cyan font-bold">Secure</span> Systems
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
                                <div className="text-4xl font-bold text-neon mb-1">DEV</div>
                                <div className="text-sm text-muted">Web Developer</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md translate-y-8">
                                <div className="text-4xl font-bold text-cyan mb-1">100%</div>
                                <div className="text-sm text-muted">Secure & Fast</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md -translate-y-4">
                                <div className="text-4xl font-bold text-white mb-1">JO</div>
                                <div className="text-sm text-muted">Based in Amman</div>
                            </div>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md translate-y-4">
                                <div className="text-4xl font-bold text-neon mb-1">UX</div>
                                <div className="text-sm text-muted">Modern Design</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
