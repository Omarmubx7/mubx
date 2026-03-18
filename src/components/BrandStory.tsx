'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Zap, Globe } from 'lucide-react';

export default function BrandStory() {
    const { t, isRTL } = useLanguage();
    const { brandStory } = t as unknown as { 
        brandStory: { 
            title: string; 
            highlight: string; 
            desc1: string; 
            desc2: string; 
            desc3: string; 
            stats: { performance: string; integrity: string; security: string; }; 
        } 
    };

    if (!brandStory) return null;

    const stats = [
        { icon: Zap, label: brandStory.stats.performance, color: '#E11D1D' },
        { icon: Globe, label: brandStory.stats.integrity, color: '#E11D1D' },
        { icon: Shield, label: brandStory.stats.security, color: '#E11D1D' },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                            <span className="text-xs font-bold tracking-widest text-neon uppercase">
                                {brandStory.title}
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            {brandStory.highlight.split(' ').map((word: string, i: number) => (
                                <span key={`${word}-${i}`} className={i === 1 ? 'text-neon block' : 'block'}>
                                    {word}
                                </span>
                            ))}
                        </h2>
                        
                        <div className="space-y-6 text-foreground/70 text-lg max-w-xl">
                            <p>{brandStory.desc1}</p>
                            <p className="border-l-2 border-neon/30 pl-6 italic bg-white/3 py-4 rounded-r-xl">
                                {brandStory.desc2}
                            </p>
                            <p>{brandStory.desc3}</p>
                        </div>
                    </motion.div>

                    {/* Visual Card Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                            {/* Brand Identifier */}
                            <div className="text-8xl font-black text-white/5 absolute -top-10 -right-10 select-none group-hover:text-neon/10 transition-colors duration-700">
                                MUBX
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                    >
                                        <div className="p-4 rounded-2xl bg-neon/10 text-neon">
                                            <stat.icon size={28} />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Interactive Brand Element */}
                            <div className="mt-12 p-6 rounded-2xl bg-neon/5 border border-neon/10 flex items-center justify-between">
                                <div className="text-sm font-medium text-foreground/60 tracking-wider uppercase">
                                    Brand Authority
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-1 h-4 bg-neon rounded-full" style={{ opacity: i * 0.2 }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
