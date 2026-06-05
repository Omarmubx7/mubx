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
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl px-2 sm:px-4 pointer-events-none"
                >
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex items-center justify-between gap-2 sm:gap-4 pointer-events-auto shadow-2xl overflow-hidden relative group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-2 sm:gap-3 ps-2 sm:ps-4 relative z-10 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center shrink-0">
                                <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-xs font-black text-white uppercase tracking-wider leading-none mb-1">Scale your business</p>
                                <p className="text-[10px] text-white/50 font-medium leading-none">Book your free discovery call today</p>
                            </div>
                            <div className="sm:hidden min-w-0">
                                <p className="text-[10px] font-black text-white uppercase tracking-wider truncate">Book a free discovery call</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 relative z-10 pr-6 sm:pr-8 shrink-0">
                            <button
                                onClick={(e) => {
                                    const w = window as unknown as { Calendly?: { initPopupWidget: (args: { url: string }) => void } };
                                    if (w.Calendly) {
                                        w.Calendly.initPopupWidget({ url: 'https://calendly.com/omarmubaidincs/30min' });
                                        e.preventDefault();
                                        // Close popup when clicking the dark overlay
                                        setTimeout(() => {
                                            const overlay = document.querySelector('.calendly-overlay') as HTMLElement;
                                            if (overlay) {
                                                overlay.addEventListener('click', (evt) => {
                                                    const popup = overlay.querySelector('.calendly-popup');
                                                    if (popup && !popup.contains(evt.target as Node)) {
                                                        overlay.remove();
                                                    }
                                                });
                                            }
                                        }, 500);
                                    } else {
                                        window.open('https://calendly.com/omarmubaidincs/30min', '_blank');
                                    }
                                }}
                                className="bg-neon text-white font-black text-xs px-3 sm:px-6 py-2.5 rounded-xl flex items-center gap-1.5 sm:gap-2 hover:bg-white hover:text-black transition-colors uppercase tracking-widest whitespace-nowrap"
                            >
                                <span className="hidden xs:inline">Book a</span> Call <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Floating circular Close Button */}
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/5 text-white/40 hover:text-white transition-all duration-300 pointer-events-auto"
                            aria-label="Dismiss"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
