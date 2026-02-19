
'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

import { useState, useEffect } from 'react';
import Badge from './ui/Badge';
import GradientText from './ui/GradientText';
import LoadingSkeleton from './ui/LoadingSkeleton';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Defensive check to prevent crash if dictionary keys are missing unexpectedly
    const services = mounted ? [
        {
            label: t.services?.packages?.linkBio?.label || 'Basic',
            title: t.services?.packages?.linkBio?.title || 'Link Tree',
            description: t.services?.packages?.linkBio?.desc || '',
            idealHeight: t.services?.packages?.linkBio?.timeline || '',
            deliverables: t.services?.packages?.linkBio?.deliverables || '',
            details: t.services?.packages?.linkBio?.details || [],
            price: t.services?.packages?.linkBio?.price || '50 JD'
        },
        {
            label: t.services?.packages?.landing?.label || 'Starter',
            title: t.services?.packages?.landing?.title || 'Landing Page',
            description: t.services?.packages?.landing?.desc || '',
            idealHeight: t.services?.packages?.landing?.timeline || '',
            deliverables: t.services?.packages?.landing?.deliverables || '',
            details: t.services?.packages?.landing?.details || [],
            price: t.services?.packages?.landing?.price || '300 JD'
        },
        {
            label: t.services?.packages?.business?.label || 'Growth',
            title: t.services?.packages?.business?.title || 'Business Website',
            description: t.services?.packages?.business?.desc || '',
            idealHeight: t.services?.packages?.business?.timeline || '',
            deliverables: t.services?.packages?.business?.deliverables || '',
            details: t.services?.packages?.business?.details || [],
            price: t.services?.packages?.business?.price || '500 JD'
        },
        {
            label: t.services?.packages?.system?.label || 'Pro',
            title: t.services?.packages?.system?.title || 'Web System',
            description: t.services?.packages?.system?.desc || '',
            idealHeight: t.services?.packages?.system?.timeline || '',
            deliverables: t.services?.packages?.system?.deliverables || '',
            details: t.services?.packages?.system?.details || [],
            price: t.services?.packages?.system?.price || '700+ JD'
        },
    ] : [];

    return (
        <section id="services" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <p className="text-neon font-mono text-sm mb-4 tracking-widest">03</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 break-words text-foreground uppercase">
                        {t.services.title} <GradientText>{t.services.titleHighlight}</GradientText>
                    </h2>
                    <p className="text-muted text-lg mb-8">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-card border border-border backdrop-blur-sm flex flex-col h-full space-y-4">
                                <LoadingSkeleton width="100px" />
                                <LoadingSkeleton height="32px" />
                                <LoadingSkeleton count={3} />
                                <LoadingSkeleton width="150px" />
                            </div>
                        ))
                        : services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 group backdrop-blur-md flex flex-col h-full shadow-lg relative ${index === 2
                                    ? 'bg-white/10 border-neon shadow-[0_0_30px_rgba(255,30,30,0.15)] scale-105 z-10'
                                    : 'bg-white/5 border-white/10 hover:border-neon/50 hover:bg-neon/5 hover:shadow-[0_0_20px_rgba(255,30,30,0.3)]'
                                    }`}
                            >
                                {index === 2 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-white text-xs font-black px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,30,30,0.5)] uppercase tracking-widest whitespace-nowrap">
                                        {t.services.popular}
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant={index === 2 ? 'neon' : 'outline'} className="mb-2">{service.price}</Badge>
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-neon transition-colors uppercase break-words hyphens-auto">
                                    {service.title}
                                </h3>
                                <p className="text-muted leading-relaxed mb-4 flex-grow text-sm">
                                    {service.description}
                                </p>

                                <div className="mb-4">
                                    <p className="text-sm text-white font-bold mb-1">
                                        {service.idealHeight}
                                    </p>
                                    <p className="text-xs text-muted">
                                        {service.deliverables}
                                    </p>
                                </div>

                                <ul className="space-y-2 mb-6 border-t border-border pt-6 mt-auto">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="text-xs text-muted flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                </div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-background hover:text-foreground transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 border border-transparent hover:border-neon"
                    >
                        {t.services.cta}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>

                <p className="text-center text-muted text-xs mt-8 font-mono">
                    * All prices in JOD (Jordanian Dinar). 1 JOD ≈ $1.41 USD.
                </p>

            </div>

        </section >
    );
}
