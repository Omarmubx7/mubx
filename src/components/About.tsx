'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 relative bg-background transition-colors duration-300">
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
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-foreground">
                            {t.about.titleStart} <span className="text-neon">{t.about.titleHighlight}</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
                            {t.about.descriptionStart} <span className="text-foreground font-bold">{t.about.name}</span>{t.about.descriptionMiddle}
                            <br /><br />
                            {t.about.descriptionEnd} <span className="text-neon">{t.about.performance}</span>{t.about.descriptionContext}
                            <br /><br />
                            <span className="text-foreground font-medium border-l-2 border-neon pl-3 block italic">
                                &quot;{t.about.quoteStart} <span className="text-neon">{t.about.quoteHighlight}</span>{t.about.quoteEnd}&quot;
                            </span>
                        </motion.p>

                        <div className="pt-6">
                            <h3 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">{t.about.whyChoose.title}</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border shrink-0">
                                        <span className="text-neon font-bold">01</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground block mb-1">{t.about.whyChoose.reason1.title}</strong>
                                        <p className="text-sm text-muted">{t.about.whyChoose.reason1.desc}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border shrink-0">
                                        <span className="text-neon font-bold">02</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground block mb-1">{t.about.whyChoose.reason2.title}</strong>
                                        <p className="text-sm text-muted">{t.about.whyChoose.reason2.desc}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border shrink-0">
                                        <span className="text-neon font-bold">03</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground block mb-1">{t.about.whyChoose.reason3.title}</strong>
                                        <p className="text-sm text-muted">{t.about.whyChoose.reason3.desc}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 opacity-60">
                            <h3 className="text-foreground/60 font-bold mb-3 uppercase tracking-wider text-xs">{t.about.techStack}</h3>
                            <div className="flex flex-wrap gap-2 text-[10px] text-muted/60 font-mono">
                                <span>Next.js • React • TypeScript • Node.js • Supabase • Tailwind</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Stats / Visual (Abstract Representation) */}
                    <motion.div variants={fadeUp} className="relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-cyan/10 rounded-full blur-[100px]" />
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="p-6 bg-card/40 border border-border rounded-2xl backdrop-blur-md">
                                <div className="text-4xl font-bold text-neon mb-1">DEV</div>
                                <div className="text-sm text-muted">{t.about.stats.dev}</div>
                            </div>
                            <div className="p-6 bg-card/40 border border-border rounded-2xl backdrop-blur-md translate-y-8">
                                <div className="text-4xl font-bold text-cyan mb-1">100%</div>
                                <div className="text-sm text-muted">{t.about.stats.secure}</div>
                            </div>
                            <div className="p-6 bg-card/40 border border-border rounded-2xl backdrop-blur-md -translate-y-4">
                                <div className="text-4xl font-bold text-foreground mb-1">JO</div>
                                <div className="text-sm text-muted">{t.about.stats.location}</div>
                            </div>
                            <div className="p-6 bg-card/40 border border-border rounded-2xl backdrop-blur-md translate-y-4">
                                <div className="text-4xl font-bold text-neon mb-1">UX</div>
                                <div className="text-sm text-muted">{t.about.stats.design}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
