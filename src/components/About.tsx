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
                            I’m <span className="text-white font-bold">Omar Mubaidin</span>, a Computer Science student and web developer based in Jordan.
                            <br /><br />
                            Unlike typical template-users, I engineer <span className="text-neon">performance</span>. My academic background in CS allows me to build secure, database-driven systems that safeguard your customer data.
                            <br /><br />
                            <span className="text-white font-medium border-l-2 border-neon pl-3 block italic">
                                &quot;Most of my pages load in under <span className="text-neon">1.5s on 4G</span> networks in Jordan.&quot;
                            </span>
                        </motion.p>

                        <div className="pt-6">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Why clients choose me</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <span className="text-neon font-bold">01</span>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-1">Performance & Speed</strong>
                                        <p className="text-sm text-muted">Pages load in under 1.5s, improving extensive Google ranking.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <span className="text-neon font-bold">02</span>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-1">Local Payment Expert</strong>
                                        <p className="text-sm text-muted">Official integration experience with Zain Cash & CliQ.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <span className="text-neon font-bold">03</span>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-1">Reliability</strong>
                                        <p className="text-sm text-muted">100% project completion rate. I don't ghost.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 opacity-60">
                            <h3 className="text-white/60 font-bold mb-3 uppercase tracking-wider text-xs">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2 text-[10px] text-muted/60 font-mono">
                                <span>Next.js • React • TypeScript • Node.js • Supabase • Tailwind</span>
                            </div>
                        </div>

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
