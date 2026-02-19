'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
    const { t, isRTL } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    const reviews = t.reviews.list;

    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, [reviews.length]);

    const prev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, [reviews.length]);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    if (!isMounted) return null;

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-neon/3 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-neon font-bold tracking-widest uppercase mb-4 block">Social Proof</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        {t.reviews.title} <span className="text-neon">{t.reviews.titleHighlight}</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:-px-12 z-20 pointer-events-none">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-card border border-border text-muted hover:text-neon hover:border-neon transition-all pointer-events-auto backdrop-blur-sm shadow-xl"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-card border border-border text-muted hover:text-neon hover:border-neon transition-all pointer-events-auto backdrop-blur-sm shadow-xl"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="relative min-h-[450px] md:min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <div className="bg-card p-8 md:p-16 rounded-[40px] border border-border relative overflow-hidden shadow-2xl">
                                    <Quote className="absolute top-8 right-12 w-24 h-24 text-neon/5 -z-10" />

                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-neon text-neon" />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-3xl font-medium text-foreground leading-relaxed md:leading-snug mb-12 italic">
                                            &quot;{reviews[activeIndex].text}&quot;
                                        </p>

                                        <div className="flex flex-col items-center gap-4 pt-8 border-t border-border/50 w-full max-w-sm mx-auto">
                                            <div className="w-16 h-16 rounded-full bg-neon/10 border-2 border-neon/30 flex items-center justify-center text-2xl font-black text-neon shadow-[0_0_20px_rgba(255,30,30,0.1)]">
                                                {reviews[activeIndex].client[0]}
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-center gap-2 mb-1">
                                                    <h3 className="text-xl font-bold text-foreground">{reviews[activeIndex].client}</h3>
                                                    <ShieldCheck className="w-5 h-5 text-neon" />
                                                </div>
                                                <p className="text-neon text-xs font-black uppercase tracking-[0.2em] mb-1">
                                                    {reviews[activeIndex].outcome}
                                                </p>
                                                <p className="text-muted text-sm font-medium">
                                                    {reviews[activeIndex].role} • {reviews[activeIndex].year}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-neon' : 'w-4 bg-muted/30 hover:bg-muted/50'
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
