'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from './ui/Badge';

type ProjectCardProps = {
    project: any;
    index: number;
    t: any;
    language: string;
}

export default function ProjectCard({ project, index, t, language }: ProjectCardProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const isEven = index % 2 === 0;
    const y = useTransform(scrollYProgress, [0, 1], isEven ? [0, -50] : [0, 50]);

    const getHref = (path: string) => {
        if (path.startsWith('http')) return path;
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="h-full"
        >
            <div
                className="group relative p-8 rounded-3xl bg-glass transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] hover:bg-neon/5 hover:border-neon/50"
            >
                {/* Numbering 01, 02... */}
                <div className="absolute top-6 right-6 text-4xl font-black text-muted/60 group-hover:text-neon transition-colors pointer-events-none select-none">
                    0{index + 1}
                </div>


                {/* Card Header: Logo & Title */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center border border-border">
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
                        <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium border ${project.category.color}`}>
                            <span>{project.category.icon}</span>
                            <span>{language === 'ar' ? project.category.ar : project.category.en}</span>
                        </div>
                    </div>
                </div>

                {/* Project Screenshot (if available) */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden border border-border group-hover:border-neon/30 transition-colors">
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
                    <p className="text-foreground font-medium text-lg leading-snug">
                        {project.caseStudy.outcome}
                    </p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-2 py-1 rounded-md border-border bg-muted/20 text-muted-foreground uppercase tracking-wider font-mono">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Action */}
                <Link
                    href={getHref(project.caseStudy.caseStudyUrl || project.links.live)}
                    target={project.caseStudy.caseStudyUrl ? "_self" : "_blank"}
                    className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-muted/10 border border-border text-foreground font-bold hover:bg-neon hover:text-black hover:border-neon transition-all group-hover:translate-y-1"
                >
                    {project.caseStudy.caseStudyUrl ? t.projects.readCaseStudy : t.projects.visitLive}
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
