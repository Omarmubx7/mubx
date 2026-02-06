'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectCard } from '@/lib/motion';
import Badge from './ui/Badge';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState, useEffect } from 'react';


import Link from 'next/link';

import { projects } from '@/lib/projects'; // Import shared data

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200); // Slightly longer delay than Hero
        return () => clearTimeout(timer);
    }, []);

    // Local projects definition removed to use shared source of truth

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    SELECTED <span className="text-neon">PROJECTS</span>
                </motion.h2>

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
                        : projects.map((project) => (
                            <motion.div
                                key={project.title}
                                variants={projectCard}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon/50 transition-all duration-300 backdrop-blur-sm flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] hover:bg-white/[0.07]"
                            >
                                {/* Card Header: Logo & Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center border border-white/10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} Logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">{project.title}</h3>
                                        <span className="text-xs text-muted uppercase tracking-wider font-medium">{project.metrics}</span>
                                    </div>
                                </div>

                                {/* Project Screenshot (if available) - Replaces the manual placeholder requested by user */}
                                {project.screenshots && project.screenshots.length > 0 && (
                                    <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-neon/30 transition-colors">
                                        <Image
                                            src={project.screenshots[0]}
                                            alt={`${project.title} Screenshot`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* 1-Line Result (The Hook) */}
                                <div className="mb-6">
                                    <p className="text-white font-medium text-lg leading-snug">
                                        {project.caseStudy.outcome}
                                    </p>
                                </div>

                                {/* Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="outline" className="text-[10px] px-2 py-1 rounded-md border-white/10 bg-black/20 text-muted/80 uppercase tracking-wider font-mono">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Action */}
                                <Link
                                    href={project.caseStudy.caseStudyUrl || `/projects/${project.slug}`}
                                    className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-neon hover:text-black hover:border-neon transition-all group-hover:translate-y-1"
                                >
                                    Read Case Study
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
