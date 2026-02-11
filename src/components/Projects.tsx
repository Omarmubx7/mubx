'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectCard } from '@/lib/motion';
import Badge from './ui/Badge';
import Image from 'next/image';

import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';


import Link from 'next/link';

import { getProjects } from '@/lib/projects';
import { useLanguage } from '@/context/LanguageContext';

import { ProjectCardSkeleton } from './ui/LoadingSkeleton';

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    const { language, t } = useLanguage();

    const getHref = (path: string) => {
        if (path.startsWith('http')) return path; // Don't modify external links
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    const projectsData = getProjects(language);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
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
                            <ProjectCardSkeleton key={i} />
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
