'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Quote, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();

    const socialLinks = [
        'https://www.instagram.com/vynexmedia.jo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        'https://htu.edu.jo',
        'https://blobjor.me'
    ];

    const bgColors = [
        'from-orange-500/10 to-orange-500/0',
        'from-red-600/10 to-red-600/0',
        'from-blue-500/10 to-blue-500/0'
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background -z-20" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        {t.reviews.title} <span className="text-neon">{t.reviews.titleHighlight}</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {t.reviews.list.map((review, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className={`relative p-8 rounded-3xl bg-card border border-border backdrop-blur-sm overflow-hidden group hover:scale-[1.02] hover:border-neon/30 hover:shadow-[0_0_30px_rgba(255,30,30,0.1)] transition-all duration-300 flex flex-col h-full`}
                        >
                            {/* Subtle dynamic background tint */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[i]} opacity-10 group-hover:opacity-25 transition-opacity`} />

                            <Quote className="w-10 h-10 text-neon/20 mb-6" />

                            <p className="text-foreground/90 text-lg leading-loose mb-8 font-medium italic relative z-10 flex-grow">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-border">
                                <div className="w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center font-bold text-neon border border-border text-lg shrink-0">
                                    {review.client[0]}
                                </div>
                                <div className="leading-tight">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-foreground font-bold text-base">{review.client}</h3>
                                        {socialLinks[i] && (
                                            <a href={socialLinks[i]} target="_blank" rel="noopener noreferrer" className="text-neon/80 hover:text-neon text-[10px] font-bold uppercase tracking-wide border border-neon/20 px-2 py-0.5 rounded-full hover:bg-neon/10 transition-colors flex items-center gap-1">
                                                <span>{review.linkLabel || 'Visit Website'}</span>
                                                <LinkIcon className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-neon text-xs font-bold uppercase tracking-wide mb-0.5">{review.outcome}</p>
                                    <p className="text-muted/40 text-xs">{review.role}, {review.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
