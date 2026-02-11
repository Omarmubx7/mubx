'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import GradientText from './ui/GradientText';

export default function Timeline() {
    const { t } = useLanguage();

    const icons = [Briefcase, GraduationCap, Code];

    return (
        <section id="timeline" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16 space-y-4">
                        <motion.div variants={fadeUp}>
                            <p className="text-neon font-mono text-sm mb-4 tracking-widest">05</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase">
                                {t.timeline.title} <GradientText>{t.timeline.titleHighlight}</GradientText>
                            </h2>
                        </motion.div>
                        <motion.p variants={fadeUp} className="text-muted text-lg">
                            {t.timeline.subtitle}
                        </motion.p>
                    </div>

                    <div className="relative border-l-2 border-border/50 ml-6 md:ml-12 space-y-12">
                        {t.timeline.items.map((item: any, index: number) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="relative pl-8 md:pl-12"
                                >
                                    {/* Dot & Icon */}
                                    <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-background border-2 border-neon flex items-center justify-center group z-10">
                                        <div className="w-2 h-2 bg-neon rounded-full group-hover:scale-150 transition-transform" />
                                    </div>

                                    <div className="bg-card/40 border border-border/50 backdrop-blur-sm p-6 rounded-2xl hover:border-neon/30 hover:bg-muted/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] group">
                                        <span className="inline-block px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-bold mb-3 border border-neon/20">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-neon transition-colors">
                                            {item.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted mb-4">
                                            <Icon className="w-4 h-4" />
                                            <span>{item.company}</span>
                                        </div>
                                        <p className="text-muted/80 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
