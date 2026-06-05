'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { ArrowRight, Check, Sparkles, Globe, Shield, Wallet, Link2, Database, Share2, Layers } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Badge from './ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from '@/components/ui/TextReveal';

export default function Services() {
    const { t, language } = useLanguage();
    const pathname = usePathname();
    const isStandalone = pathname === '/services' || pathname === '/ar/services';

    const getHref = (path: string) => {
        if (language === 'ar') {
            if (path.startsWith('/#')) {
                return `/?lang=ar${path.substring(1)}`;
            }
            return path === '/' ? '/?lang=ar' : `${path}?lang=ar`;
        }
        return path;
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const services = mounted ? [
        {
            key: 'linkBio',
            label: t.services?.packages?.linkBio?.label || 'Basic',
            title: t.services?.packages?.linkBio?.title || 'Link Tree',
            description: t.services?.packages?.linkBio?.desc || '',
            timeline: t.services?.packages?.linkBio?.timeline || '',
            deliverables: t.services?.packages?.linkBio?.deliverables || '',
            details: t.services?.packages?.linkBio?.details || [],
            price: t.services?.packages?.linkBio?.price || 'start at 49.99 JD',
            cta: t.services?.packages?.linkBio?.cta || 'Start Link Tree Project',
            idealFor: 'Social media profiles, influencers, and micro-brands.'
        },
        {
            key: 'landing',
            label: t.services?.packages?.landing?.label || 'Starter',
            title: t.services?.packages?.landing?.title || 'Landing Page',
            description: t.services?.packages?.landing?.desc || '',
            timeline: t.services?.packages?.landing?.timeline || '',
            deliverables: t.services?.packages?.landing?.deliverables || '',
            details: t.services?.packages?.landing?.details || [],
            price: t.services?.packages?.landing?.price || 'start at 149.99 JD',
            cta: t.services?.packages?.landing?.cta || 'Plan My Landing Page',
            idealFor: 'Marketing campaigns, single products, and lead generation.'
        },
        {
            key: 'business',
            label: t.services?.packages?.business?.label || 'Growth',
            title: t.services?.packages?.business?.title || 'Business Website',
            description: t.services?.packages?.business?.desc || '',
            timeline: t.services?.packages?.business?.timeline || '',
            deliverables: t.services?.packages?.business?.deliverables || '',
            details: t.services?.packages?.business?.details || [],
            price: t.services?.packages?.business?.price || 'start at 299.99 JD',
            cta: t.services?.packages?.business?.cta || 'Build My Business Website',
            idealFor: 'Local businesses, corporate sites, and growing startups.'
        },
        {
            key: 'system',
            label: t.services?.packages?.system?.label || 'Pro',
            title: t.services?.packages?.system?.title || 'Web System',
            description: t.services?.packages?.system?.desc || '',
            timeline: t.services?.packages?.system?.timeline || '',
            deliverables: t.services?.packages?.system?.deliverables || '',
            details: t.services?.packages?.system?.details || [],
            price: t.services?.packages?.system?.price || 'start at 499.99 JD',
            cta: t.services?.packages?.system?.cta || 'Architect My Custom System',
            idealFor: 'Custom e-commerce, custom SaaS, and databases.'
        },
    ] : [];

    return (
        <section className="py-24 relative bg-background border-b border-border/30 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon/[0.015] blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                {!isStandalone && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <p className="text-neon font-mono text-sm mb-4 tracking-widest">02</p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 break-words text-foreground uppercase flex flex-wrap justify-center gap-x-3 text-center">
                            <TextReveal text={t.services.title} splitType="letter" /> 
                            <span className="text-neon">
                                <TextReveal text={t.services.titleHighlight} splitType="letter" delay={0.4} />
                            </span>
                        </h2>
                        <p className="text-muted text-lg">
                            {t.services.subtitle}
                        </p>
                        <p className="text-muted-foreground/60 text-xs font-mono mt-3 uppercase tracking-wider">
                            * All prices in JOD (Jordanian Dinar). 1 JOD ≈ $1.41 USD. International clients accepted.
                        </p>
                    </motion.div>
                )}

                {mounted && (
                    <div className="max-w-6xl mx-auto space-y-12">
                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                            {services.map((service, index) => {
                                const isPopular = service.key === 'business';
                                // Dynamic column spans for Bento Grid layout
                                let colSpan = "lg:col-span-6 md:col-span-6 col-span-12";
                                if (service.key === 'business') {
                                    colSpan = "lg:col-span-8 md:col-span-12 col-span-12";
                                } else if (service.key === 'system') {
                                    colSpan = "lg:col-span-4 md:col-span-12 col-span-12";
                                }

                                return (
                                    <motion.div
                                        key={service.key}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`group relative rounded-3xl border p-8 md:p-10 backdrop-blur-md flex flex-col justify-between overflow-hidden transition-all duration-500 ${
                                            isPopular 
                                                ? 'border-neon/50 bg-white/5 shadow-[0_0_30px_rgba(225,29,29,0.15)] hover:border-neon' 
                                                : 'border-white/5 bg-white/3 hover:bg-white/[0.04] hover:border-white/20'
                                        } ${colSpan}`}
                                    >
                                        {/* Accent Top Banner for Popular Tier */}
                                        {isPopular && (
                                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neon to-red-500 z-10" />
                                        )}
                                        {/* Glow effects */}
                                        <div className={`absolute -bottom-20 -right-20 w-48 h-48 rounded-full pointer-events-none blur-[60px] transition-all duration-500 group-hover:scale-110 ${
                                            isPopular ? 'bg-neon/10' : 'bg-neon/[0.02]'
                                        }`} />

                                        {/* Card Top */}
                                        <div className="space-y-6">
                                            {/* Header Row */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Badge variant={isPopular ? "neon" : "outline"}>{service.label}</Badge>
                                                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{service.timeline}</span>
                                                </div>
                                                {isPopular && (
                                                    <span className="bg-neon/15 border border-neon/30 text-neon text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                                                        {t.services.popular}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title & Description */}
                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-2">
                                                    {service.title}
                                                    {service.key === 'system' && <Sparkles className="w-5 h-5 text-neon" />}
                                                </h3>
                                                <p className="text-muted text-sm leading-relaxed max-w-xl">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Custom Component Visual Representations (Bento Elements) */}
                                            <div className="py-4 select-none pointer-events-none relative h-28 border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden flex items-center justify-center">
                                                {service.key === 'linkBio' && (
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground transition-all group-hover:scale-110 group-hover:border-neon group-hover:text-neon shadow-lg">
                                                            <Link2 className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <div className="w-24 h-2 rounded bg-white/15" />
                                                            <div className="w-16 h-2 rounded bg-white/10" />
                                                        </div>
                                                        <div className="flex gap-2 ml-4">
                                                            <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-muted-foreground"><Share2 className="w-3.5 h-3.5" /></span>
                                                            <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-muted-foreground">@</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {service.key === 'landing' && (
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl shadow-lg relative overflow-hidden group-hover:border-neon/30 group cursor-help">
                                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Lighthouse</span>
                                                            <span className="text-xl font-black text-green-500 font-mono">100</span>
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-[9px] font-mono text-white px-2 py-1 rounded-none shadow-lg pointer-events-none whitespace-nowrap z-50">
                                                                Google quality audit score (100 is perfect performance & SEO)
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl shadow-lg relative overflow-hidden group-hover:border-neon/30 group cursor-help">
                                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">LCP</span>
                                                            <span className="text-xl font-black text-neon font-mono">0.6s</span>
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-[9px] font-mono text-white px-2 py-1 rounded-none shadow-lg pointer-events-none whitespace-nowrap z-50">
                                                                Largest Contentful Paint (under 2.5s is considered excellent)
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                {service.key === 'business' && (
                                                    <div className="relative w-full h-full flex items-center justify-center">
                                                        {/* Overlapping sheets */}
                                                        <div className="absolute w-40 h-16 rounded-xl border border-white/5 bg-white/[0.02] transform -rotate-6 translate-y-2 opacity-50 flex items-center justify-between px-4">
                                                            <Layers className="w-4 h-4 text-muted-foreground" />
                                                            <div className="w-16 h-1.5 rounded bg-white/10" />
                                                        </div>
                                                        <div className="absolute w-40 h-16 rounded-xl border border-white/10 bg-white/5 transform rotate-3 -translate-y-1 shadow-2xl flex items-center justify-between px-4 group-hover:border-neon/30 group cursor-help">
                                                            <div className="flex items-center gap-2">
                                                                <Globe className="w-4 h-4 text-neon" />
                                                                <span className="text-[10px] font-mono font-bold tracking-widest text-foreground">EN / AR</span>
                                                            </div>
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-[9px] font-mono text-white px-2 py-1 rounded-none shadow-lg pointer-events-none whitespace-nowrap z-50">
                                                                Bilingual support (English & Arabic) built-in natively
                                                            </span>
                                                            <div className="flex flex-col gap-1 items-end">
                                                                <div className="w-12 h-1.5 rounded bg-white/15" />
                                                                <div className="w-8 h-1.5 rounded bg-white/10" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {service.key === 'system' && (
                                                    <div className="flex flex-wrap gap-2 justify-center max-w-[200px]">
                                                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono font-bold flex items-center gap-1.5 text-muted-foreground group-hover:border-neon/30 group-hover:text-foreground">
                                                            <Database className="w-3 h-3 text-neon" /> SQL
                                                        </span>
                                                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono font-bold flex items-center gap-1.5 text-muted-foreground group-hover:border-neon/30 group-hover:text-foreground">
                                                            <Shield className="w-3 h-3 text-neon" /> Auth
                                                        </span>
                                                        <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono font-bold flex items-center gap-1.5 text-muted-foreground group-hover:border-neon/30 group-hover:text-foreground">
                                                            <Wallet className="w-3 h-3 text-neon" /> CliQ
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Features list */}
                                            <div className="space-y-3 pt-4 border-t border-white/5">
                                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                                                    {language === 'en' ? "What's Included" : 'ما الذي يتضمنه'}
                                                </span>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                    {service.details.map((detail: string) => (
                                                        <li
                                                            key={detail}
                                                            className="text-xs text-muted-foreground flex items-center gap-2"
                                                        >
                                                            <span className="w-4 h-4 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center text-neon shrink-0">
                                                                <Check className="w-2.5 h-2.5" />
                                                            </span>
                                                            <span className="truncate">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Card Bottom / Footer pricing & CTA */}
                                        <div className="mt-8 space-y-6 pt-6 border-t border-white/5">
                                            <div className="flex justify-between items-baseline gap-2 flex-wrap">
                                                <div>
                                                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-0.5">
                                                        {language === 'en' ? 'Investment' : 'الاستثمار'}
                                                    </span>
                                                    <div className="flex items-center gap-1.5 relative group">
                                                        <span className="text-2xl font-black text-white tracking-tight">
                                                            {service.price}
                                                        </span>
                                                        <div className="w-4 h-4 rounded-full bg-white/10 hover:bg-white/20 text-muted-foreground hover:text-white flex items-center justify-center text-[10px] font-mono font-bold cursor-help transition-colors select-none">
                                                            ?
                                                        </div>
                                                        {/* Tooltip */}
                                                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/95 border border-white/10 text-[9px] font-mono text-white p-2.5 rounded-none shadow-xl pointer-events-none w-56 leading-relaxed z-50">
                                                            {service.key === 'linkBio' && "Base price covers custom aggregates, profile links, and hosting. Custom domain integrations (+15 JD) may affect the final budget."}
                                                            {service.key === 'landing' && "Includes up to 3 standard sections. Custom analytics tracking or custom payment APIs may adjust the timeline and budget."}
                                                            {service.key === 'business' && "Includes 5 custom CMS-ready pages. E-commerce features, premium databases, or booking portals may add to the base scope."}
                                                            {service.key === 'system' && "Pricing is highly customized and variable based on user volumes, security audits, database schemas, and Zain Cash gateway credentials."}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-0.5">
                                                        {language === 'en' ? 'Ideal For' : 'مثالي لـ'}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground/80 font-medium block max-w-[200px] truncate">
                                                        {service.idealFor}
                                                    </span>
                                                </div>
                                            </div>

                                            <Link
                                                href={getHref('/contact')}
                                                className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer ${
                                                    isPopular 
                                                        ? 'bg-neon text-white border-transparent hover:bg-transparent hover:text-foreground hover:border-neon/50 shadow-[0_0_20px_rgba(255,30,30,0.15)] hover:shadow-none' 
                                                        : 'bg-white/5 text-foreground border-white/10 hover:bg-neon hover:text-white hover:border-transparent'
                                                }`}
                                            >
                                                {service.cta}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <p className="text-center text-muted-foreground/55 text-[10px] font-mono pt-4">
                            * All prices in JOD (Jordanian Dinar). 1 JOD ≈ $1.41 USD.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

