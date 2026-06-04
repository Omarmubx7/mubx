'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from './ui/Badge';

type ProjectCardProps = {
    project: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    index: number;
    t: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    language: string;
}

export default function ProjectCard({ project, index, t, language }: Readonly<ProjectCardProps>) {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const getHref = (path: string) => {
        if (path.startsWith('http')) return path;
        if (language === 'en') return path;
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}lang=${language}`;
    };

    const projectHref = getHref(`/projects/${project.slug}`);

    return (
        <Link
            href={projectHref}
            className="block h-full"
            aria-label={`Open ${project.title} project details`}
        >
            <div
                onMouseMove={handleMouseMove}
                className="group relative p-8 rounded-none bg-transparent hover:bg-white/[0.015] transition-all duration-500 flex flex-col h-full cursor-pointer card-glow-effect border-0"
            >
                {/* Numbering 01, 02... */}
                <div className="absolute top-6 right-6 rtl:left-6 rtl:right-auto text-4xl font-mono font-black text-muted-foreground/20 group-hover:text-neon group-hover:scale-105 transition-all duration-500 pointer-events-none select-none">
                    0{index + 1}
                </div>


                {/* Card Header: Logo & Title */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-none bg-white p-1.5 flex items-center justify-center border border-border/30">
                        <div className="relative w-full h-full">
                            <Image
                                src={project.logo}
                                alt={`${project.title} Logo`}
                                fill
                                className="object-contain"
                                sizes="48px"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-neon transition-colors">{project.title}</h3>
                        </div>

                        {/* Inline Category Badge */}
                        <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-none text-[10px] font-medium border ${project.category.color}`}>
                            <span>{project.category.icon}</span>
                            <span>{language === 'ar' ? project.category.ar : project.category.en}</span>
                        </div>
                    </div>
                </div>

                {/* Project Screenshot (if available) */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="relative w-full aspect-video mb-6 rounded-none overflow-hidden border border-border/30 group-hover:border-neon/30 transition-colors">
                        <Image
                            src={project.screenshots[0]}
                            alt={`${project.title} Screenshot`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                    </div>
                )}

                {/* 1-Line Result (The Hook) */}
                <div className="mb-6">
                    <p className="text-foreground font-medium text-lg leading-snug">
                        {project.caseStudy.outcome}
                    </p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-2 py-1 rounded-none border-border/30 bg-muted/10 text-muted-foreground uppercase tracking-wider font-mono">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Action */}
                <div className="w-full py-3 flex items-center justify-center gap-2 rounded-none bg-muted/5 border border-border/30 text-foreground font-bold hover:bg-neon hover:text-black hover:border-neon transition-all">
                    {project.caseStudy.readCaseStudy || t.projects.readCaseStudy}
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
