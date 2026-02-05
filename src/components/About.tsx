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
                            <br /><br />
                            Unlike typical template-users, I focus on <span className="text-neon">database efficiency, security, and raw performance</span>.
                            My background in CS theory allows me to build systems that scale, not just pages that look good.
                        </motion.p>

                        <div className="pt-6">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Tech Stack & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind', 'Framer Motion', 'Git'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/80 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 mt-6">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Achievements</h3>
                            <ul className="space-y-2 text-muted text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                                    Top 5% in CS Class (GPA Highlight)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                                    Built & Deployed 10+ Production Apps
                                </li>
                            </ul>
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
