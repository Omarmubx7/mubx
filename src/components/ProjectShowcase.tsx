'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { getProjects, Project } from '@/lib/projects';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from '@/components/ui/TextReveal';
import ProjectSimulator from './ProjectSimulator';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const techLogos: Record<string, string> = {
    'Next.js': '/techstackicons/next.svg',
    'React': '/techstackicons/react-svgrepo-com.svg',
    'Tailwind': '/techstackicons/tailwindcss-icon-svgrepo-com.svg',
    'Framer Motion': '',
    'TypeScript': '/techstackicons/typescript-icon-svgrepo-com.svg',
    'Node.js': '/techstackicons/nodejs-icon-svgrepo-com.svg',
    'AI Integration': '',
    'PHP': '',
    'MySQL': '',
    'Bootstrap': '/techstackicons/Bootstrap.svg',
    'E-commerce': '',
    'UX Design': '',
    'Authentication': '',
    'Three.js': '',
    'GSAP': '',
    'Lenis': '',
    'Vite': '',
};

const projectScreenshots: Record<string, string> = {
    mubxai: '/images/projects/mubxai.png',
    mubxbot: '/images/projects/mubxbot.png',
    aqabwi: '/images/projects/aqabwi.png',
    'men-only-show': '/images/projects/men-only-show.png',
    'the-glorious-page': '/images/projects/the-glorious-page.png',
    'vynex-media': '/images/projects/vynex-media.png',
    'htu-martial-arts': '/images/projects/htu-martial-arts.png',
    'blob-jo': '/images/projects/blob-jo.png',
    qadumyweb: '/images/projects/qadumyweb.png',
    'jordan-fa': '/images/projects/jordan-fav3.png',
    'porsche-noir': '/images/projects/911porshe.png',
};

function SlideContent({ project }: { project: Project }) {
    const screenshot = projectScreenshots[project.slug];

    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-16 xl:px-24">
            {/* Left: Project info */}
            <div className="flex-1 max-w-xl space-y-6 z-10">
                {/* Category + metrics */}
                <div className="flex items-center gap-3 flex-wrap">
                    <span className={`px-3 py-1 border text-[10px] font-medium uppercase tracking-wider font-mono ${project.category.color}`}>
                        {project.category.en}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-mono bg-neon/10 text-neon border border-neon/20 font-bold uppercase tracking-wider">
                        {project.metrics}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight tracking-tight">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((tech: string) => {
                        const iconPath = techLogos[tech];
                        return (
                            <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-border/20 bg-muted/5 rounded-sm">
                                {iconPath ? (
                                    <span className="relative w-3.5 h-3.5 shrink-0">
                                        <Image
                                            src={iconPath}
                                            alt={tech}
                                            fill
                                            className="object-contain opacity-70"
                                            sizes="14px"
                                        />
                                    </span>
                                ) : null}
                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                                    {tech}
                                </span>
                            </span>
                        );
                    })}
                </div>

                {/* Role + timeframe */}
                <div className="flex items-center gap-4 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    <span>{project.caseStudy.role}</span>
                    <span className="w-1 h-1 rounded-full bg-neon/50" />
                    <span>{project.timeframe}</span>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-2">
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-neon text-white text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,29,0.3)] hover:shadow-[0_0_30px_rgba(225,29,29,0.5)] hover:bg-[#B91616]"
                    >
                        <span>Visit Website</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-border/30 hover:border-neon/50 text-muted-foreground hover:text-neon text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Code</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Right: Simulator */}
            <div className="flex-1 max-w-2xl w-full h-[300px] md:h-[400px] lg:h-[480px] z-10">
                <ProjectSimulator slug={project.slug} />
            </div>
        </div>
    );
}

function MobileSlide({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="min-h-[80vh] flex flex-col justify-center py-12"
        >
            {/* Index number */}
            <div className="font-mono text-neon/30 text-[10px] tracking-widest mb-4">
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Category + metrics */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
                <span className={`px-2 py-0.5 border text-[9px] font-medium uppercase tracking-wider font-mono ${project.category.color}`}>
                    {project.category.en}
                </span>
                <span className="text-[9px] font-mono bg-neon/10 text-neon border border-neon/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                    {project.metrics}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-black text-foreground leading-tight tracking-tight mb-3">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
            </p>

            {/* Simulator */}
            <div className="w-full h-[240px] border border-border/20 mb-5">
                <ProjectSimulator slug={project.slug} />
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {project.tech.map((tech: string) => {
                    const iconPath = techLogos[tech];
                    return (
                        <span key={tech} className="inline-flex items-center gap-1 px-1.5 py-0.5 border border-border/20 bg-muted/5 rounded-sm">
                            {iconPath ? (
                                <span className="relative w-3 h-3 shrink-0">
                                    <Image
                                        src={iconPath}
                                        alt={tech}
                                        fill
                                        className="object-contain opacity-70"
                                        sizes="12px"
                                    />
                                </span>
                            ) : null}
                            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
                                {tech}
                            </span>
                        </span>
                    );
                })}
            </div>

            {/* CTA */}
            <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-neon text-white text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,29,29,0.25)]"
            >
                <span>Visit Website</span>
                <ArrowRight className="w-3 h-3" />
            </a>
        </motion.div>
    );
}

export default function ProjectShowcase() {
    const { language, t } = useLanguage();
    const projectsData = getProjects(language);
    const containerRef = useRef<HTMLDivElement>(null);
    const activeIndexRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(true);
    const [hydrated, setHydrated] = useState(false);

    const totalProjects = projectsData.length;

    useEffect(() => {
        setHydrated(true);
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: hydrated ? containerRef : undefined,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const idx = Math.min(
            Math.floor(latest * totalProjects),
            totalProjects - 1
        );
        const next = Math.max(0, idx);
        if (next !== activeIndexRef.current) {
            activeIndexRef.current = next;
            setActiveIndex(next);
        }
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    if (isMobile) {
        return (
            <section id="projects" className="py-24 relative bg-background border-b border-border/30">
                <div className="w-full px-6 md:px-12 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground flex flex-wrap gap-x-3">
                            <TextReveal text={t.projects.titleStart} splitType="letter" />
                            <span className="text-neon">
                                <TextReveal text={t.projects.titleHighlight} splitType="letter" delay={0.4} />
                            </span>
                        </h2>
                    </motion.div>

                    {/* Stacked mobile slides */}
                    <div className="space-y-4">
                        {projectsData.map((project, index) => (
                            <MobileSlide key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Intro header (before the scroll-pinned section) */}
            <section id="projects" className="pt-24 pb-16 relative bg-background border-b border-border/30">
                <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground flex flex-wrap gap-x-3">
                            <TextReveal text={t.projects.titleStart} splitType="letter" />
                            <span className="text-neon">
                                <TextReveal text={t.projects.titleHighlight} splitType="letter" delay={0.4} />
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-sm mt-4 font-mono flex items-center gap-2">
                            <ChevronDown className="w-4 h-4 animate-bounce" />
                            Scroll to explore each project
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Scroll-pinned showcase */}
            <div ref={containerRef} style={{ height: `${totalProjects * 100}vh` }} className="relative bg-background">
                <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ willChange: 'transform', contain: 'layout style' }}>
                    <div className="relative w-full h-full">
                        {/* Background: blurred screenshot of active project */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className="absolute inset-0 will-change-[opacity]"
                            >
                                {projectScreenshots[projectsData[activeIndex].slug] && (
                                    <Image
                                        src={projectScreenshots[projectsData[activeIndex].slug]}
                                        alt=""
                                        fill
                                        className="object-cover object-top blur-sm"
                                        sizes="100vw"
                                        priority
                                    />
                                )}
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-background/80" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Top bar: progress + counter + dots */}
                        <div className="absolute top-0 left-0 right-0 z-50">
                            {/* Progress bar */}
                            <motion.div
                                className="h-[3px] bg-neon origin-left"
                                style={{ width: progressWidth, boxShadow: '0 0 10px rgba(225,29,29,0.5)' }}
                            />

                            <div className="flex items-center justify-between px-8 py-6">
                                {/* Counter */}
                                <div className="font-mono text-sm text-muted-foreground">
                                    <span className="text-neon font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
                                    <span className="mx-2 text-border">/</span>
                                    <span>{String(totalProjects).padStart(2, '0')}</span>
                                </div>

                                {/* Dot navigation */}
                                <div className="flex items-center gap-2">
                                    {projectsData.map((project, i) => (
                                        <div
                                            key={project.slug}
                                            className="flex items-center gap-1.5 group"
                                        >
                                            <div
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    i === activeIndex
                                                        ? 'bg-neon scale-125 shadow-[0_0_8px_rgba(225,29,29,0.5)]'
                                                        : 'bg-border/50 group-hover:bg-muted-foreground/50'
                                                }`}
                                            />
                                            {i === activeIndex && (
                                                <span className="text-[9px] font-mono text-neon uppercase tracking-wider hidden md:inline">
                                                    {project.title}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Active slide content */}
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="absolute inset-0 flex items-center justify-center will-change-[opacity,transform]"
                            >
                                <SlideContent project={projectsData[activeIndex]} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom: scroll hint */}
                        <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                                className="flex flex-col items-center gap-1"
                            >
                                <span className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                                    {activeIndex < totalProjects - 1 ? 'Scroll down' : 'Keep scrolling'}
                                </span>
                                <ChevronDown className="w-4 h-4 text-muted-foreground/30" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
