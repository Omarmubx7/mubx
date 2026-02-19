'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        { icon: Search, data: t.process.step1 },
        { icon: PenTool, data: t.process.step2 },
        { icon: Code, data: t.process.step3 },
        { icon: Rocket, data: t.process.step4 },
    ];

    return (
        <section id="process" className="py-24 bg-background/50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-neon font-bold tracking-widest uppercase mb-4 block">
                        {t.process.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        {t.process.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Desktop Connector Line */}
                    <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-border/50 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-neon transition-all duration-500 relative bg-glass">
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neon text-black text-xs font-black flex items-center justify-center shadow-[0_0_15px_rgba(255,30,30,0.5)]">
                                    0{index + 1}
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
            </div>
        </section>
    );
}
