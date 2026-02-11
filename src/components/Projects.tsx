'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectCard } from '@/lib/motion';
import Badge from './ui/Badge';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';


import Link from 'next/link';

import { getProjects } from '@/lib/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    const { language, t } = useLanguage();

    const getHref = (path: string) => {
        if (path.startsWith('http')) return path; // Don't modify external links
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    const projectsData = getProjects(language);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-neon font-mono text-sm mb-4 tracking-widest">02</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase">
                        {t.projects.titleStart} <span className="text-neon">{t.projects.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <Skeleton width={64} height={64} className="rounded-2xl" />
                                        <div className="flex gap-3">
                                            <Skeleton circle width={40} height={40} />
                                        </div>
                                    </div>
                                    <Skeleton width={180} height={32} className="mb-3" />
                                    <Skeleton width={100} height={24} className="mb-4" />
                                    <Skeleton count={3} className="mb-6" />
                                    <div className="mt-auto space-y-5">
                                        <Skeleton height={80} className="rounded-xl" />
                                        <div className="flex gap-2">
                                            <Skeleton width={60} height={20} className="rounded-full" />
                                            <Skeleton width={60} height={20} className="rounded-full" />
                                            <Skeleton width={60} height={20} className="rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </SkeletonTheme>
                        ))
                        : projectsData.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                t={t}
                                language={language}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
