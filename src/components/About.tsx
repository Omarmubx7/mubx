'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from '@/components/ui/TextReveal';

export default function About() {
    const { t } = useLanguage();

    const stats = [
        { title: 'DEV', desc: t.about.stats.dev, accent: 'text-neon' },
        { title: '100%', desc: t.about.stats.secure, accent: 'text-neon' },
        { title: 'JO', desc: t.about.stats.location, accent: 'text-foreground' },
        { title: 'UI/UX', desc: t.about.stats.design, accent: 'text-foreground' }
    ];

    return (
        <section id="about" className="py-24 relative bg-background border-b border-border/30">
            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch"
                >
                    {/* Left Column: Story & Vision (Spans 7 cols) */}
                    <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
                        <motion.div variants={fadeUp}>
                            <p className="text-neon font-mono text-sm mb-4 tracking-widest">02</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase flex flex-wrap items-center gap-x-3">
                                <TextReveal text={t.about.titleStart} splitType="letter" /> 
                                <span className="text-neon">
                                    <TextReveal text={t.about.titleHighlight} splitType="letter" delay={0.4} />
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeUp} className="text-muted text-lg leading-relaxed space-y-4">
                            <p>
                                {t.about.descriptionStart} <span className="text-foreground font-bold">{t.about.name}</span>{t.about.descriptionMiddle}
                            </p>
                            <p>
                                {t.about.descriptionEnd} <span className="text-neon">{t.about.performance}</span>{t.about.descriptionContext}
                            </p>
                            <div className="text-foreground font-medium border-l-2 border-neon pl-4 block py-2 italic text-muted-foreground bg-white/1 rounded-r-xl">
                                {t.about.quoteStart} {t.about.quoteHighlight} {t.about.quoteEnd}
                            </div>
                        </motion.div>

                        <div className="pt-4">
                            <h3 className="text-foreground font-bold mb-6 uppercase tracking-wider text-xs font-mono text-muted-foreground">{t.about.whyChoose.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <strong className="text-foreground text-sm font-bold block uppercase font-display tracking-wide">{t.about.whyChoose.reason1.title}</strong>
                                    <p className="text-xs text-muted leading-relaxed">{t.about.whyChoose.reason1.desc}</p>
                                </div>
                                <div className="space-y-2">
                                    <strong className="text-foreground text-sm font-bold block uppercase font-display tracking-wide">{t.about.whyChoose.reason2.title}</strong>
                                    <p className="text-xs text-muted leading-relaxed">{t.about.whyChoose.reason2.desc}</p>
                                </div>
                                <div className="space-y-2">
                                    <strong className="text-foreground text-sm font-bold block uppercase font-display tracking-wide">{t.about.whyChoose.reason3.title}</strong>
                                    <p className="text-xs text-muted leading-relaxed">{t.about.whyChoose.reason3.desc}</p>
                                </div>
                                <div className="space-y-2">
                                    <strong className="text-foreground text-sm font-bold block uppercase font-display tracking-wide">{t.about.whyChoose.reason4.title}</strong>
                                    <p className="text-xs text-muted leading-relaxed">{t.about.whyChoose.reason4.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Flat Specs Grid (Spans 5 cols) */}
                    <motion.div variants={fadeUp} className="lg:col-span-5 flex items-center justify-center relative min-h-[300px]">
                        {/* Grid backdrop glow */}
                        <div className="absolute inset-0 bg-neon/3 blur-[100px] rounded-full pointer-events-none" />

                        {/* Flat Editorial 2x2 grid container */}
                        <div className="grid grid-cols-2 w-full border border-border/30 bg-card/10 backdrop-blur-md rounded-none overflow-hidden relative z-10">
                            {stats.map((stat, index) => {
                                const borderClass = index === 0
                                    ? 'border-b border-r border-border/30 rtl:border-r-0 rtl:border-l'
                                    : index === 1
                                        ? 'border-b border-border/30'
                                        : index === 2
                                            ? 'border-r border-border/30 rtl:border-r-0 rtl:border-l'
                                            : '';
                                return (
                                    <div 
                                        key={index}
                                        className={`p-4 md:p-8 bg-transparent flex flex-col justify-between aspect-square hover:bg-white/[0.015] transition-all duration-300 ${borderClass} cursor-default`}
                                    >
                                        <div className={`text-2xl sm:text-3xl md:text-4xl font-black ${stat.accent} font-display break-words`}>
                                            {stat.title}
                                        </div>
                                        <div className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-wider font-mono">
                                            {stat.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
