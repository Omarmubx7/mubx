'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Search, PenTool, Code, Rocket, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Process() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const isStandalone = pathname === '/services';
    const [isMobile, setIsMobile] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const steps = [
        { icon: Search, data: t.process.step1, num: '01' },
        { icon: PenTool, data: t.process.step2, num: '02' },
        { icon: Code, data: t.process.step3, num: '03' },
        { icon: Rocket, data: t.process.step4, num: '04' },
    ];

    return (
        <section id="process" className={`py-24 ${isStandalone ? 'bg-transparent' : 'bg-background/50'} relative overflow-hidden border-b border-border/30`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-neon font-mono text-sm mb-4 tracking-widest block">
                        {t.process.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        {t.process.title}
                    </h2>
                </div>

                {isMobile ? (
                    /* Mobile Accordion View */
                    <div className="space-y-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isExpanded = expandedIndex === index;

                            return (
                                <div 
                                    key={index}
                                    className={`rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden ${
                                        isExpanded 
                                            ? 'border-neon bg-white/5 shadow-[0_0_20px_rgba(225,29,29,0.08)]' 
                                            : 'border-white/5 bg-white/3'
                                    }`}
                                >
                                    <button
                                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                        className="w-full p-5 flex items-center justify-between text-left"
                                        aria-expanded={isExpanded}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                                isExpanded ? 'bg-neon text-white' : 'bg-white/5 text-muted-foreground border border-white/5'
                                            }`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-neon font-black block tracking-wider mb-0.5">{step.num}</span>
                                                <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                                                    {step.data.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-neon' : ''}`} />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                            >
                                                <div className="p-5 pt-0 border-t border-white/5 mt-0.5 text-sm text-muted leading-relaxed">
                                                    {step.data.desc}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Desktop Grid View */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Desktop Connector Line */}
                        <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-border/30 -z-10" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-3xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-neon transition-all duration-500 relative bg-glass">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neon text-white text-xs font-black flex items-center justify-center shadow-[0_0_15px_rgba(225,29,29,0.5)]">
                                        {step.num}
                                    </div>
                                    <step.icon className="w-10 h-10 text-muted group-hover:text-neon transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon transition-colors">
                                    {step.data.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed max-w-[250px]">
                                    {step.data.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
