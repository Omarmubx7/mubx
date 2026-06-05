'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import GradientText from './ui/GradientText';

export default function Timeline() {
    const { t } = useLanguage();

    return (
        <section id="timeline" className="py-24 bg-background relative overflow-hidden border-b border-border/30">
            {/* Background subtle neon details */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.div variants={fadeUp}>
                            <p className="text-neon font-mono text-sm mb-4 tracking-widest">06</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                {t.timeline.title} <GradientText>{t.timeline.titleHighlight}</GradientText>
                            </h2>
                        </motion.div>
                        <motion.p variants={fadeUp} className="text-muted text-lg">
                            {t.timeline.subtitle}
                        </motion.p>
                    </div>

                    {/* Table-Like Experience List (Sawad Style) */}
                    <div className="border-t border-border/30 w-full">
                        {t.timeline.items.map((item: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="group relative py-8 border-b border-border/30 transition-all duration-300 hover:bg-white/[0.015] flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center cursor-default"
                            >
                                {/* Year Column */}
                                <div className="md:col-span-2 text-neon font-mono text-sm font-bold">
                                    {item.year}
                                </div>

                                {/* Role & Company Column */}
                                <div className="md:col-span-3 flex flex-col text-left rtl:text-right">
                                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-neon transition-colors duration-300">
                                        {item.role}
                                    </h3>
                                    <span className="text-xs text-muted-foreground font-mono mt-1">
                                        {item.company}
                                    </span>
                                </div>

                                {/* Description Column (Spans 7 columns on desktop) */}
                                <div className="md:col-span-7 text-muted text-sm leading-relaxed text-left rtl:text-right">
                                    {item.description}
                                </div>

                                {/* Active bottom border highlight on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rtl:origin-right shadow-[0_0_8px_#E11D1D]" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
