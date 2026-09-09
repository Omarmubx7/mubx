'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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

const categories = [
    { id: 'all', label: 'All' },
    { id: 'systems', label: 'Systems & AI' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'creative', label: 'Creative/Landing' },
];

const getFilterCategory = (slug: string): string => {
    switch (slug) {
        case 'mubxai':
        case 'mubxbot':
        case 'htu-martial-arts':
            return 'systems';
        case 'blob-jo':
            return 'ecommerce';
        case 'aqabwi':
        case 'men-only-show':
        case 'the-glorious-page':
        case 'vynex-media':
        case 'jordan-fa':
        case 'porsche-noir':
            return 'creative';
        default:
            return '';
    }
};

function TimelineNode({
    project,
    index,
    isExpanded,
    onToggle,
    isLast,
}: {
    project: Project;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
    isLast: boolean;
}) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
            }}
            className="relative"
        >
            {/* Desktop: Alternating layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
                {/* Left side */}
                <div className={`col-span-5 ${isEven ? 'order-1' : 'order-3'}`}>
                    {isEven ? (
                        <ProjectNodeCard
                            project={project}
                            isExpanded={isExpanded}
                            onToggle={onToggle}
                            side="left"
                        />
                    ) : (
                        <TimelineLabel timeframe={project.timeframe} side="left" />
                    )}
                </div>

                {/* Center spine + dot */}
                <div className="col-span-2 flex flex-col items-center order-2 relative">
                    {/* Timeline dot */}
                    <motion.div
                        animate={{
                            scale: isExpanded ? 1.4 : 1,
                            boxShadow: isExpanded
                                ? '0 0 20px rgba(255,46,46,0.5)'
                                : '0 0 0px rgba(255,46,46,0)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="relative z-10 w-4 h-4 rounded-full bg-neon border-2 border-background cursor-pointer shrink-0 mt-8"
                        onClick={onToggle}
                    />
                    {/* Spine line */}
                    {!isLast && (
                        <div className="w-[2px] flex-1 bg-border/30 min-h-[60px]" />
                    )}
                </div>

                {/* Right side */}
                <div className={`col-span-5 ${isEven ? 'order-3' : 'order-1'}`}>
                    {isEven ? (
                        <TimelineLabel timeframe={project.timeframe} side="right" />
                    ) : (
                        <ProjectNodeCard
                            project={project}
                            isExpanded={isExpanded}
                            onToggle={onToggle}
                            side="right"
                        />
                    )}
                </div>
            </div>

            {/* Mobile: Left spine, right cards */}
            <div className="lg:hidden flex gap-5">
                {/* Spine column */}
                <div className="flex flex-col items-center shrink-0">
                    <motion.div
                        animate={{
                            scale: isExpanded ? 1.4 : 1,
                            boxShadow: isExpanded
                                ? '0 0 20px rgba(255,46,46,0.5)'
                                : '0 0 0px rgba(255,46,46,0)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="relative z-10 w-3.5 h-3.5 rounded-full bg-neon border-2 border-background shrink-0 mt-7"
                        onClick={onToggle}
                    />
                    {!isLast && <div className="w-[2px] flex-1 bg-border/30 min-h-[40px]" />}
                </div>

                {/* Card column */}
                <div className="flex-1 pb-10">
                    <TimelineLabel timeframe={project.timeframe} side="right" mobile />
                    <ProjectNodeCard
                        project={project}
                        isExpanded={isExpanded}
                        onToggle={onToggle}
                        side="right"
                        mobile
                    />
                </div>
            </div>
        </motion.div>
    );
}

function TimelineLabel({ timeframe, side, mobile }: { timeframe: string; side: 'left' | 'right'; mobile?: boolean }) {
    return (
        <div
            className={`font-mono text-[10px] text-neon/70 uppercase tracking-widest font-bold pt-8 ${
                mobile ? 'pt-0 pb-1' : side === 'left' ? 'text-right pr-4' : 'text-left pl-4'
            }`}
        >
            {timeframe}
        </div>
    );
}

function ProjectNodeCard({
    project,
    isExpanded,
    onToggle,
    side,
    mobile,
}: {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
    side: 'left' | 'right';
    mobile?: boolean;
}) {
    return (
        <div
            className={`group border transition-all duration-300 ${
                isExpanded
                    ? 'border-neon bg-neon/[0.02] shadow-[0_0_20px_rgba(255,46,46,0.06)]'
                    : 'border-border/30 bg-transparent hover:border-neon/30'
            } ${mobile ? '' : side === 'left' ? 'mr-8' : 'ml-8'}`}
        >
            {/* Compact card (always visible) */}
            <button
                onClick={onToggle}
                className="w-full text-left p-5 cursor-pointer"
            >
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-0.5 border text-[9px] font-medium uppercase tracking-wider font-mono ${project.category.color}`}>
                            {project.category.en}
                        </span>
                        <span className="text-[9px] font-mono bg-neon/10 text-neon border border-neon/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                            {project.metrics}
                        </span>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground group-hover:text-neon transition-colors shrink-0"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors mb-2">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Tech stack (compact) */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
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
            </button>

            {/* Expanded case study section */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 space-y-4 border-t border-border/10 pt-4">
                            {/* Screenshot */}
                            <div className="w-full h-[220px] sm:h-[300px] border border-border/20 overflow-hidden">
                                <ProjectSimulator slug={project.slug} />
                            </div>

                            {/* Case study narrative */}
                            <div className="space-y-3">
                                <CaseStudyBlock label="Problem" text={project.caseStudy.problem} />
                                <CaseStudyBlock label="Solution" text={project.caseStudy.solution} />
                                <CaseStudyBlock label="Outcome" text={project.caseStudy.outcome} highlight />
                            </div>

                            {/* Role + timeframe */}
                            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                                <span>Role: <span className="text-foreground">{project.caseStudy.role}</span></span>
                                <span>·</span>
                                <span>Timeline: <span className="text-foreground">{project.timeframe}</span></span>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 pt-2">
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2.5 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-white text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                                >
                                    <span>Visit Website</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                                {project.links.code && (
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2.5 border border-border/30 hover:border-neon/50 text-muted-foreground hover:text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                                    >
                                        <span>Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function CaseStudyBlock({
    label,
    text,
    highlight,
}: {
    label: string;
    text: string;
    highlight?: boolean;
}) {
    return (
        <div className={`p-3 ${highlight ? 'bg-neon/5 border border-neon/15' : 'bg-muted/30 border border-border/10'}`}>
            <span className={`font-mono text-[9px] font-bold uppercase tracking-wider ${highlight ? 'text-neon' : 'text-muted-foreground'}`}>
                {label}
            </span>
            <p className="text-foreground text-xs leading-relaxed mt-1.5">{text}</p>
        </div>
    );
}

export default function ProjectTimeline() {
    const { language, t } = useLanguage();
    const projectsData = getProjects(language);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    const filteredProjects = projectsData.filter((project) => {
        if (selectedCategory === 'all') return true;
        return getFilterCategory(project.slug) === selectedCategory;
    });

    const handleCategoryChange = (catId: string) => {
        setSelectedCategory(catId);
        setExpandedSlug(null);
    };

    const toggleProject = (slug: string) => {
        setExpandedSlug((prev) => (prev === slug ? null : slug));
    };

    return (
        <section ref={sectionRef} className="py-24 relative bg-background border-b border-border/30">
            {/* Scroll progress indicator - left edge */}
            <div className="fixed left-0 top-0 bottom-0 w-[3px] z-50 hidden lg:block">
                <motion.div
                    className="w-full bg-neon origin-top"
                    style={{ height: progressHeight, boxShadow: '0 0 8px rgba(255,46,46,0.4)' }}
                />
            </div>

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
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

                {/* Category filters */}
                <div className="flex flex-wrap gap-3 mb-16 select-none">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-4 py-2 border text-[10px] md:text-xs font-mono font-bold tracking-wider transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer group ${
                                    isActive
                                        ? 'border-neon bg-neon/10 text-neon shadow-[0_0_15px_rgba(255,46,46,0.15)]'
                                        : 'border-border/30 text-muted-foreground hover:border-neon/40 hover:text-neon'
                                }`}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    isActive ? 'bg-neon scale-125' : 'bg-muted-foreground/30 group-hover:bg-neon/60'
                                }`} />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Timeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="relative max-w-6xl mx-auto"
                >
                    {filteredProjects.map((project, index) => (
                        <TimelineNode
                            key={project.slug}
                            project={project}
                            index={index}
                            isExpanded={expandedSlug === project.slug}
                            onToggle={() => toggleProject(project.slug)}
                            isLast={index === filteredProjects.length - 1}
                        />
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16 border border-dashed border-border/30 text-muted font-mono text-sm">
                            No projects in this category currently.
                        </div>
                    )}

                    {/* End node */}
                    {filteredProjects.length > 0 && (
                        <div className="flex flex-col items-center pt-2">
                            <div className="w-2 h-2 rounded-full bg-neon/30" />
                            <span className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-widest mt-3">
                                More coming soon
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
