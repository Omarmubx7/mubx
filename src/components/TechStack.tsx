'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import GradientText from './ui/GradientText';
import CardTilt from './ui/CardTilt';
import Image from 'next/image';
import { Code, Database, Terminal } from 'lucide-react';

interface TechItem {
    name: string;
    icon: string;
    isCore: boolean;
    role?: string;
}

interface TechCategory {
    id: 'frontend' | 'backend' | 'tools';
    icon: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        id: 'frontend',
        icon: Code,
        items: [
            { name: 'Next.js', icon: '/techstackicons/next-dot-js-svgrepo-com.svg', isCore: true, role: 'Primary Framework' },
            { name: 'React', icon: '/techstackicons/react-svgrepo-com.svg', isCore: true, role: 'UI Library' },
            { name: 'TypeScript', icon: '/techstackicons/typescript-icon-svgrepo-com.svg', isCore: true, role: 'Type Safety' },
            { name: 'Tailwind CSS', icon: '/techstackicons/tailwindcss-icon-svgrepo-com.svg', isCore: false },
            { name: 'Figma', icon: '/techstackicons/figma-icon.svg', isCore: false },
            { name: 'HTML5', icon: '/techstackicons/HTML5.svg', isCore: false },
            { name: 'CSS3', icon: '/techstackicons/CSS3.svg', isCore: false },
            { name: 'Bootstrap', icon: '/techstackicons/Bootstrap.svg', isCore: false },
        ]
    },
    {
        id: 'backend',
        icon: Database,
        items: [
            { name: 'Node.js', icon: '/techstackicons/nodejs-icon-svgrepo-com.svg', isCore: true, role: 'Backend Runtime' },
            { name: 'PostgreSQL', icon: '/techstackicons/postgresql-svgrepo-com.svg', isCore: true, role: 'Primary Database' },
            { name: 'Supabase', icon: '/techstackicons/supabase-logo-icon.svg', isCore: false },
            { name: 'Prisma', icon: '/techstackicons/prisma-svgrepo-com.svg', isCore: false },
            { name: 'Python', icon: '/techstackicons/python-svgrepo-com.svg', isCore: false },
            { name: 'FastAPI', icon: '/techstackicons/FastAPI.svg', isCore: false },
            { name: 'Laravel', icon: '/techstackicons/laravel-2.svg', isCore: false },
            { name: 'Java', icon: '/techstackicons/java-svgrepo-com.svg', isCore: false },
            { name: 'C++', icon: '/techstackicons/c-1.svg', isCore: false },
            { name: 'Swift', icon: '/techstackicons/swift-svgrepo-com.svg', isCore: false },
        ]
    },
    {
        id: 'tools',
        icon: Terminal,
        items: [
            { name: 'Vercel', icon: '/techstackicons/vercel-logo-svgrepo-com.svg', isCore: true, role: 'Hosting & Edge' },
            { name: 'Git', icon: '/techstackicons/git-svgrepo-com.svg', isCore: false },
            { name: 'GitHub', icon: '/techstackicons/github-svgrepo-com.svg', isCore: false },
            { name: 'Docker', icon: '/techstackicons/docker-svgrepo-com.svg', isCore: false },
            { name: 'NPM', icon: '/techstackicons/NPM.svg', isCore: false },
            { name: 'VS Code', icon: '/techstackicons/Visual Studio Code (VS Code).svg', isCore: false },
            { name: 'Postman', icon: '/techstackicons/postman-icon-svgrepo-com.svg', isCore: false },
            { name: 'Bash', icon: '/techstackicons/bash-icon-svgrepo-com.svg', isCore: false },
            { name: 'GoLand', icon: '/techstackicons/GoLand.svg', isCore: false },
        ]
    }
];

const categoryDescriptions = {
    frontend: 'Building responsive, modern, and interactive user experiences.',
    backend: 'Architecting secure, scalable, and database-driven solutions.',
    tools: 'Leveraging automation, version control, and CI/CD workflows.'
};

export default function TechStack() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
            {/* Inject pulse styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes techPulseFlow {
                    0% {
                        stroke-dashoffset: 100;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
                .tech-pulse-line {
                    stroke-dasharray: 10 40;
                    animation: techPulseFlow 3s linear infinite;
                    opacity: 0.8;
                }
            `}} />

            {/* Global background neon accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon/3 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon/3 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isMobile ? fadeUp : staggerContainer}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <motion.div variants={fadeUp}>
                            <p className="text-neon font-mono text-sm mb-4 tracking-widest">05</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                {t.tech.title} <GradientText>{t.tech.titleHighlight}</GradientText>
                            </h2>
                        </motion.div>
                        <motion.p variants={fadeUp} className="text-muted text-lg">
                            {t.tech.subtitle}
                        </motion.p>
                    </div>

                    {/* Desktop Tree View (Top-Down Org tree with organic curves) */}
                    {!isMobile && (
                        <div className="w-full py-10 flex flex-col items-center">
                            {techCategories.map((category) => {
                                const categoryName = t.tech.categories[category.id] || category.id;
                                const categoryDesc = categoryDescriptions[category.id];
                                const CategoryIcon = category.icon;

                                return (
                                    <div key={category.id} className="w-full flex flex-col items-center relative mb-24 last:mb-0">
                                        
                                        {/* Category hub card (Centered) */}
                                        <div className="w-full max-w-[280px] border border-border/30 bg-card/10 backdrop-blur-sm flex flex-col items-center p-4 relative z-20 text-center rounded-none shadow-none">
                                            <div className="w-10 h-10 border border-neon bg-background flex items-center justify-center text-neon mb-2">
                                                <CategoryIcon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground font-display tracking-wide uppercase">
                                                {categoryName}
                                            </h3>
                                            <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                                                {categoryDesc}
                                            </p>
                                        </div>

                                        {/* Top-Down Connector Lines SVG (Organic Curves & Light Pulses) */}
                                        <div className="w-full max-w-5xl mx-auto h-16 relative">
                                            <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                {/* Background static organic curves */}
                                                <path d="M 50,0 C 50,50 12.5,50 12.5,100" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" fill="none" />
                                                <path d="M 50,0 C 50,50 37.5,50 37.5,100" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" fill="none" />
                                                <path d="M 50,0 C 50,50 62.5,50 62.5,100" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" fill="none" />
                                                <path d="M 50,0 C 50,50 87.5,50 87.5,100" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" fill="none" />
                                                
                                                {/* Animated pulsing light flow curves overlay */}
                                                <path d="M 50,0 C 50,50 12.5,50 12.5,100" stroke="var(--neon)" strokeWidth="1.5" strokeLinecap="round" className="tech-pulse-line" style={{ animationDelay: '0s' }} fill="none" />
                                                <path d="M 50,0 C 50,50 37.5,50 37.5,100" stroke="var(--neon)" strokeWidth="1.5" strokeLinecap="round" className="tech-pulse-line" style={{ animationDelay: '0.7s' }} fill="none" />
                                                <path d="M 50,0 C 50,50 62.5,50 62.5,100" stroke="var(--neon)" strokeWidth="1.5" strokeLinecap="round" className="tech-pulse-line" style={{ animationDelay: '1.4s' }} fill="none" />
                                                <path d="M 50,0 C 50,50 87.5,50 87.5,100" stroke="var(--neon)" strokeWidth="1.5" strokeLinecap="round" className="tech-pulse-line" style={{ animationDelay: '2.1s' }} fill="none" />
                                            </svg>
                                        </div>

                                        {/* Grid of Skill Cards (4 columns wrapped in CardTilt) */}
                                        <div className="grid grid-cols-4 gap-x-8 gap-y-12 w-full max-w-5xl mx-auto relative z-10">
                                            {category.items.map((item, index) => {
                                                const coreLabel = 'Core';
                                                
                                                // If item is in the second or third row (index >= 4), render a top connector vertical line linking to the row above
                                                const hasTopConnector = index >= 4;

                                                return (
                                                    <div key={item.name} className="relative w-full group">
                                                        {hasTopConnector && (
                                                            <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-[1.5px] h-[48px] bg-white/10 pointer-events-none" />
                                                        )}
                                                        
                                                        <CardTilt className="w-full h-full">
                                                            <div className="w-full relative p-4 rounded-none bg-card/10 border border-border/30 hover:border-neon/40 hover:bg-white/[0.015] transition-all duration-300 flex items-center justify-between group/tech cursor-default text-left shadow-none">
                                                                <div className="flex items-center gap-3 w-full justify-between">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-8 h-8 flex items-center justify-center relative shrink-0">
                                                                            <Image
                                                                                src={item.icon}
                                                                                alt={item.name}
                                                                                width={32}
                                                                                height={32}
                                                                                className="w-full h-full object-contain grayscale group-hover/tech:grayscale-0 transition-all duration-300"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <span className="text-xs md:text-sm font-bold font-mono text-foreground tracking-tight">
                                                                                {item.name}
                                                                            </span>
                                                                            {item.isCore && item.role && (
                                                                                <span className="text-[9px] text-muted-foreground font-mono">
                                                                                    {item.role}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    {item.isCore && (
                                                                        <span className="text-[8px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded-none border border-neon/30 text-neon bg-neon/5 font-mono">
                                                                            {coreLabel}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </CardTilt>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Mobile Timeline/Tree View (Responsive fallback for screen <= 1024px) */}
                    {isMobile && (
                        <div className="relative w-full py-4">
                            {techCategories.map((category) => {
                                const categoryName = t.tech.categories[category.id] || category.id;
                                const categoryDesc = categoryDescriptions[category.id];
                                const CategoryIcon = category.icon;

                                return (
                                    <div key={category.id} className="relative mb-10 last:mb-0 w-full border border-border/30 bg-card/5">
                                        {/* Mobile Category Header - Flat Box */}
                                        <div className="border-b border-border/30 bg-card/10 p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 border border-neon bg-background flex items-center justify-center text-neon shrink-0">
                                                    <CategoryIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base md:text-lg font-bold text-foreground font-display tracking-wide uppercase">
                                                        {categoryName}
                                                    </h3>
                                                    <p className="text-[10px] text-muted-foreground mt-0.5 max-w-md">
                                                        {categoryDesc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Cards stack with Blueprint schematic connectors */}
                                        <div className="p-4 pl-8 pr-4 relative space-y-3">
                                            {/* Vertical Trunk Line inside the category stack */}
                                            <div className="absolute left-[16px] top-0 bottom-6 w-[1px] bg-border/30" />

                                            {category.items.map((item) => {
                                                const coreLabel = 'Core';
                                                return (
                                                    <div key={item.name} className="relative pl-4 group">
                                                        {/* Right-angled L-connector in CSS */}
                                                        <div className="absolute left-[-16px] top-[22px] w-4 h-[1px] bg-border/30" />

                                                        <div className="w-full relative p-3 rounded-none bg-background/40 border border-border/20 hover:border-neon/30 transition-all duration-300 flex items-center justify-between group cursor-default text-left">
                                                            <div className="flex items-center justify-between w-full relative z-10">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-7 h-7 flex items-center justify-center relative shrink-0">
                                                                        <Image
                                                                            src={item.icon}
                                                                            alt={item.name}
                                                                            width={24}
                                                                            height={24}
                                                                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <span className="text-xs font-bold font-mono text-foreground tracking-tight">
                                                                            {item.name}
                                                                        </span>
                                                                        {item.isCore && item.role && (
                                                                            <span className="text-[9px] text-muted-foreground font-mono">
                                                                                {item.role}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {item.isCore && (
                                                                    <span className="text-[8px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded-none border border-neon/30 text-neon bg-neon/5 font-mono">
                                                                        {coreLabel}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
