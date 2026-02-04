'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectCard, staggerContainer } from '@/lib/motion';
import Badge from './ui/Badge';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState, useEffect } from 'react';


export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200); // Slightly longer delay than Hero
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            title: 'Vynex Media',
            description: 'Visual production agency platform. High-performance landing page with SEO optimization and smooth frame interactions.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
            logo: '/images/vynex-logo.png',
            metrics: '20% Conversion Rate',
            caseStudy: {
                problem: 'Needed a modern website matching their high visual production quality.',
                role: 'Full implementation: architecture, frontend, performance.',
                outcome: 'Professional page for client acquisition with smooth lead capture.'
            }
        },
        {
            title: 'HTU Martial Arts',
            description: 'University sports club management system. Handles membership bookings, user profiles, and admin dashboards.',
            tech: ['PHP', 'MySQL', 'Bootstrap', 'Authentication'],
            links: { live: 'https://htumartialarts.42web.io/?i=1', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
            logo: '/images/htu-logo.png',
            metrics: '100+ Active Members',
            caseStudy: {
                problem: 'Manual management of members and bookings via messages/sheets.',
                role: 'Database design, PHP backend, Admin dashboard.',
                outcome: 'Centralized management reducing manual work.'
            }
        },
        {
            title: 'BloB.JO',
            description: 'Jordan\'s premier Print-on-Demand e-commerce store. Features custom product design capability and dynamic order tracking.',
            tech: ['React', 'Node.js', 'E-commerce', 'UX Design'],
            links: { live: 'https://www.blobjor.me/', code: 'https://github.com/Omarmubx7/blobjor' },
            logo: '/images/blobjor-logo.png',
            metrics: 'Full E-com Flow',
            caseStudy: {
                problem: 'Lack of local POD store with custom design tools.',
                role: 'Product UX, E-commerce flow, Frontend.',
                outcome: 'Digital order flow replacing manual communication.'
            }
        },
    ];

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
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon/50 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,30,30,0.1)]"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,30,30,0.3)] transition-all duration-500">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.logo}
                                                    alt={`${project.title} by Omar Mubaidin - ${project.tech.join(', ')}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all duration-300 hover:scale-110 border border-white/5" title="View Live">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all duration-300 hover:scale-110 border border-white/5" title="View Code">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-neon transition-colors duration-300">{project.title}</h3>

                                    {/* Metrics Badge */}
                                    <div className="mb-4 inline-block">
                                        <span className="text-xs font-bold px-2 py-1 bg-neon/10 text-neon border border-neon/20 rounded uppercase tracking-wider">
                                            {project.metrics}
                                        </span>
                                    </div>

                                    <p className="text-muted text-base mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                                    <div className="mt-auto space-y-5">
                                        <div className="grid grid-cols-1 gap-2 text-sm bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                                            <div className="flex gap-2 items-start"><span className="text-white/40 font-bold min-w-[70px] text-xs uppercase tracking-wider mt-0.5">Problem</span> <span className="text-white/80 leading-snug">{project.caseStudy.problem}</span></div>
                                            <div className="flex gap-2 items-start"><span className="text-white/40 font-bold min-w-[70px] text-xs uppercase tracking-wider mt-0.5">Outcome</span> <span className="text-white/80 leading-snug">{project.caseStudy.outcome}</span></div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <Badge key={t} variant="outline" className="text-[10px] py-0.5">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
