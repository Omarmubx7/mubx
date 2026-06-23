'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import GradientText from './ui/GradientText';
import Image from 'next/image';

interface TechItem {
    name: string;
    icon: string;
    isCore: boolean;
    role?: string;
}

interface TechCategory {
    id: 'frontend' | 'backend' | 'tools';
    label: string;
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        id: 'frontend',
        label: 'Frontend',
        items: [
            { name: 'Next.js', icon: '/techstackicons/next.svg', isCore: true, role: 'Framework' },
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
        label: 'Backend',
        items: [
            { name: 'Node.js', icon: '/techstackicons/nodejs-icon-svgrepo-com.svg', isCore: true, role: 'Runtime' },
            { name: 'PostgreSQL', icon: '/techstackicons/postgresql-svgrepo-com.svg', isCore: true, role: 'Database' },
            { name: 'Supabase', icon: '/techstackicons/supabase-logo-icon.svg', isCore: false },
            { name: 'Prisma', icon: '/techstackicons/prisma-svgrepo-com.svg', isCore: false },
            { name: 'Python', icon: '/techstackicons/python-svgrepo-com.svg', isCore: false },
            { name: 'FastAPI', icon: '/techstackicons/FastAPI.svg', isCore: false },
            { name: 'Laravel', icon: '/techstackicons/laravel-2.svg', isCore: false },
            { name: 'Java', icon: '/techstackicons/java-svgrepo-com.svg', isCore: false },
            { name: 'C++', icon: '/techstackicons/c-1.svg', isCore: false },
            { name: 'Swift', icon: '/techstackicons/swift-svgrepo-com.svg', isCore: false },
            { name: 'Kotlin', icon: '/techstackicons/Kotlin.svg', isCore: false },
        ]
    },
    {
        id: 'tools',
        label: 'Tools',
        items: [
            { name: 'Vercel', icon: '/techstackicons/vercel.svg', isCore: true, role: 'Hosting' },
            { name: 'Git', icon: '/techstackicons/git-svgrepo-com.svg', isCore: false },
            { name: 'GitHub', icon: '/techstackicons/github (1).svg', isCore: false },
            { name: 'Docker', icon: '/techstackicons/docker-svgrepo-com.svg', isCore: false },
            { name: 'NPM', icon: '/techstackicons/NPM.svg', isCore: false },
            { name: 'VS Code', icon: '/techstackicons/Visual Studio Code (VS Code).svg', isCore: false },
            { name: 'Postman', icon: '/techstackicons/postman-icon-svgrepo-com.svg', isCore: false },
            { name: 'Bash', icon: '/techstackicons/bash-icon-svgrepo-com.svg', isCore: false },
            { name: 'GoLand', icon: '/techstackicons/GoLand.svg', isCore: false },
            { name: 'PowerShell', icon: '/techstackicons/Powershell_128.svg', isCore: false },
            { name: 'Android Studio', icon: '/techstackicons/Android_Studio_icon_(2023).svg', isCore: false },
            { name: 'Groq', icon: '/techstackicons/groq.svg', isCore: false },
            { name: 'Claude AI', icon: '/techstackicons/Claude_AI_symbol.svg', isCore: false },
            { name: 'Perplexity', icon: '/techstackicons/perplexity-color.svg', isCore: false },
            { name: 'OpenCode', icon: '/techstackicons/opencode-logo-dark-square (1).svg', isCore: false },
        ]
    }
];

function CoreHexagon({ item, index }: { item: TechItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative"
        >
            <div className="relative w-28 h-[128px] md:w-32 md:h-[144px] cursor-default">
                {/* Core hexagon */}
                <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
                    <defs>
                        <linearGradient id={`core-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(225,29,29,0.15)" />
                            <stop offset="100%" stopColor="rgba(225,29,29,0.04)" />
                        </linearGradient>
                        <filter id={`core-glow-${index}`}>
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(225,29,29,0.25)" />
                        </filter>
                    </defs>
                    <polygon
                        points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
                        fill={`url(#core-grad-${index})`}
                        stroke="rgba(225,29,29,0.4)"
                        strokeWidth="1.5"
                        filter={`url(#core-glow-${index})`}
                        className="group-hover:stroke-[#E11D1D] group-hover:fill-[#E11D1D]/[0.15] transition-all duration-300"
                    />
                    <polygon
                        points="50 5, 89 27, 89 88, 50 110, 11 88, 11 27"
                        fill="none"
                        stroke="rgba(225,29,29,0.15)"
                        strokeWidth="0.5"
                        className="group-hover:stroke-[#E11D1D]/30 transition-all duration-300"
                    />
                </svg>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-3">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 mb-2">
                        <Image
                            src={item.icon}
                            alt={item.name}
                            fill
                            className="object-contain grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                            sizes="(max-width: 768px) 48px, 56px"
                        />
                        {/* Core badge */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E11D1D] flex items-center justify-center shadow-lg shadow-[#E11D1D]/30">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                    </div>
                    <span className="text-[10px] md:text-[11px] font-mono font-medium text-[#EDE8E4] group-hover:text-white transition-colors duration-300 text-center leading-tight">
                        {item.name}
                    </span>
                    {item.role && (
                        <span className="text-[8px] md:text-[9px] font-mono text-[#E11D1D] mt-0.5">
                            {item.role}
                        </span>
                    )}
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                    <div className="bg-[#1A1414] border border-[#E11D1D]/30 rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl shadow-[#E11D1D]/10">
                        <p className="text-[10px] font-bold font-mono text-[#EDE8E4]">{item.name}</p>
                        {item.role && <p className="text-[9px] text-[#E11D1D] font-mono">{item.role}</p>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function SmallHexagon({ item, index }: { item: TechItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group relative"
        >
            <div className="relative w-16 h-[74px] md:w-20 md:h-[92px] cursor-default">
                {/* Small hexagon */}
                <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
                    <defs>
                        <linearGradient id={`small-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
                        fill={`url(#small-grad-${index})`}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                        className="group-hover:stroke-[#E11D1D]/60 group-hover:fill-[#E11D1D]/[0.08] transition-all duration-300"
                    />
                </svg>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 mb-1">
                        <Image
                            src={item.icon}
                            alt={item.name}
                            fill
                            className="object-contain grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                            sizes="(max-width: 768px) 32px, 40px"
                        />
                    </div>
                    <span className="text-[8px] md:text-[9px] font-mono text-[#9E9490] group-hover:text-[#EDE8E4] transition-colors duration-300 text-center leading-tight">
                        {item.name}
                    </span>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                    <div className="bg-[#1A1414] border border-[rgba(255,255,255,0.07)] rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl">
                        <p className="text-[10px] font-bold font-mono text-[#EDE8E4]">{item.name}</p>
                        {item.role && <p className="text-[9px] text-[#E11D1D] font-mono">{item.role}</p>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MixedSizeHoneycomb({ items }: { items: TechItem[] }) {
    const coreItems = useMemo(() => items.filter(i => i.isCore), [items]);
    const smallItems = useMemo(() => items.filter(i => !i.isCore), [items]);

    // Calculate grid layout
    const coreSize = 144; // height of core hex
    const smallSize = 92; // height of small hex
    const gap = 6;

    // Arrange: core items in center row, small items around them
    const coreCols = coreItems.length;
    const smallCols = Math.max(smallItems.length, coreCols + 2);

    const totalRows = 3; // small row, core row, small row
    const rowHeight = smallSize * 0.75 + gap;

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex flex-col items-center" style={{ gap: gap }}>
                {/* Top row - small items */}
                <div className="flex justify-center" style={{ gap: gap }}>
                    {smallItems.slice(0, Math.ceil(smallItems.length / 2)).map((item, index) => (
                        <SmallHexagon key={item.name} item={item} index={index} />
                    ))}
                </div>

                {/* Middle row - core items */}
                <div className="flex justify-center" style={{ gap: gap }}>
                    {coreItems.map((item, index) => (
                        <CoreHexagon key={item.name} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom row - remaining small items */}
                <div className="flex justify-center" style={{ gap: gap }}>
                    {smallItems.slice(Math.ceil(smallItems.length / 2)).map((item, index) => (
                        <SmallHexagon key={item.name} item={item} index={coreItems.length + index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TechCategorySection({ category, index }: { category: TechCategory; index: number }) {
    const { t } = useLanguage();
    const categoryName = t.tech.categories[category.id] || category.label;

    return (
        <motion.div
            variants={fadeUp}
            className="relative"
        >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8 md:mb-12">
                <span className="text-[10px] font-bold text-[#E11D1D] uppercase tracking-[0.2em] font-mono">
                    // {categoryName}
                </span>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
                <span className="text-[10px] font-mono text-[#9E9490]">
                    {category.items.length} technologies
                </span>
            </div>

            {/* Mixed Size Honeycomb */}
            <MixedSizeHoneycomb items={category.items} />
        </motion.div>
    );
}

export default function TechStack() {
    const { t } = useLanguage();

    return (
        <section className="relative bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)]">
            {/* Background warm glow */}
            <div className="absolute inset-0 warm-glow pointer-events-none" />

            <div className="relative z-10 py-16 md:py-24 lg:py-32">
                {/* Section Header */}
                <div className="px-6 md:px-12 lg:px-16 xl:px-24 mb-16 md:mb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeUp}
                    >
                        <span className="text-[10px] font-bold text-[#E11D1D] uppercase tracking-[0.2em] font-mono mb-4 block">
                            // TECHNOLOGIES & TOOLS
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#EDE8E4] mb-4">
                            {t.tech.title} <GradientText>{t.tech.titleHighlight}</GradientText>
                        </h2>
                        <p className="text-[#9E9490] text-base md:text-lg max-w-2xl">
                            {t.tech.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Categories */}
                <div className="px-4 md:px-8 lg:px-12 xl:px-16 space-y-16 md:space-y-24">
                    {techCategories.map((category, index) => (
                        <TechCategorySection key={category.id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
