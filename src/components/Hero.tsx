'use client';

import Image from 'next/image';
import Badge from './ui/Badge';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';
import { HeroSkeleton } from './ui/LoadingSkeleton';

// Dynamic import for 3D component to reduce initial bundle size
const Hero3D = dynamic(() => import('./canvas/Hero3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
                <div className="absolute inset-0 rounded-full bg-muted/10 animate-pulse" />
                <div className="absolute inset-8 rounded-full bg-muted/5 animate-pulse delay-150" />
                <div className="absolute inset-16 rounded-full bg-muted/5 animate-pulse delay-300" />
            </div>
        </div>
    ),
});

export default function Hero() {
    const { t, isRTL, language } = useLanguage();

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    return (
        <section className="relative min-h-screen flex items-start lg:items-center pt-32 pb-20 overflow-hidden bg-background transition-colors duration-300">
            {/* Background Spotlights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 blur-[80px] -z-10 rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/5 blur-[80px] -z-10 rounded-full mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    {/* Left Column: Text Content */}
                    <div
                        className="flex-1 text-center lg:text-left rtl:lg:text-right order-1 lg:order-none"
                    >
                        <div className="flex justify-center lg:justify-start rtl:lg:justify-end mb-6 animate-hero-fade-up">
                            <Badge variant="neon" className="animate-pulse-slow">
                                {t.hero.badge}
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-foreground uppercase">
                            <span className="block animate-hero-fade-up">
                                {t.hero.titleStart}
                            </span>

                            <span className="text-neon relative inline-block text-5xl md:text-7xl animate-hero-fade-up delay-hero-2">
                                {t.hero.titleHighlight}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>

                            <br />
                            <span className="block animate-hero-fade-up delay-hero-3">
                                {t.hero.titleEnd}
                            </span>
                        </h1>

                        <p
                            className="text-lg md:text-xl text-muted mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-hero-fade-up delay-hero-3"
                        >
                            {t.hero.description}
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-end animate-hero-fade-up delay-hero-4"
                        >
                            <a
                                href="https://calendly.com/omarmubaidincs/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-background hover:text-foreground border border-transparent hover:border-neon transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] flex items-center gap-2 justify-center group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                {t.hero.ctaPrimary}
                            </a>
                            <Link
                                href={getHref('/#projects')}
                                className="px-8 py-4 bg-card border border-border text-foreground font-bold text-lg rounded-full hover:bg-muted/10 transition-all flex items-center gap-2 justify-center group"
                            >
                                {t.hero.ctaSecondary}
                                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Hero Image / Visual */}
                    <div
                        className="flex-1 relative h-[600px] lg:h-[700px] w-full flex items-center justify-center group order-2 lg:order-none animate-hero-slide-in"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent rounded-full blur-[60px] animate-pulse-slow" />

                        {/* 3D Hero Scene */}
                        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
                            <Hero3D />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
