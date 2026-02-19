'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function StickyCTA() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl px-4 pointer-events-none"
                >
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex items-center justify-between gap-4 pointer-events-auto shadow-2xl overflow-hidden relative group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-3 ps-4 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center shrink-0">
                                <Calendar className="w-4 h-4 text-black" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-xs font-black text-white uppercase tracking-wider leading-none mb-1">Scale your business</p>
                                <p className="text-[10px] text-white/50 font-medium leading-none">Book your free discovery call today</p>
                            </div>
                            <div className="sm:hidden">
                                <p className="text-[10px] font-black text-white uppercase tracking-wider">Scale your business</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 relative z-10">
                            <button
                                onClick={(e) => {
                                    const w = window as unknown as { Calendly?: { initPopupWidget: (args: { url: string }) => void } };
                                    if (w.Calendly) {
                                        w.Calendly.initPopupWidget({ url: 'https://calendly.com/omarmubaidincs/30min' });
                                        e.preventDefault();
                                    } else {
                                        window.open('https://calendly.com/omarmubaidincs/30min', '_blank');
                                    }
                                }}
                                className="bg-neon text-black font-black text-xs px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white transition-colors uppercase tracking-widest whitespace-nowrap"
                            >
                                Book a Call <ArrowRight className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => setIsDismissed(true)}
                                className="p-2 text-white/30 hover:text-white transition-colors"
                                aria-label="Dismiss"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
