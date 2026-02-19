'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 relative bg-background/50">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-neon font-bold tracking-widest uppercase mb-4 block">
                        {t.faq.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        {t.faq.title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {t.faq.questions.map((item: { q: string, a: string }, index: number) => (
                        <div
                            key={index}
                            className="group border border-border rounded-2xl bg-card/30 overflow-hidden transition-all duration-300 hover:border-neon/30"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left rtl:text-right"
                            >
                                <span className="text-lg font-bold text-foreground group-hover:text-neon transition-colors">
                                    {item.q}
                                </span>
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5 text-neon shrink-0 ml-4 rtl:mr-4 rtl:ml-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted shrink-0 ml-4 rtl:mr-4 rtl:ml-0 group-hover:text-neon transition-colors" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 text-muted leading-relaxed">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
