'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '@/lib/projects';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from '@/components/ui/TextReveal';
import ProjectSimulator from './ProjectSimulator';
import { ArrowRight } from 'lucide-react';
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
};

export default function Projects() {
    const { language, t } = useLanguage();
    const projectsData = getProjects(language);
    
    const [activeSlug, setActiveSlug] = useState<string>(projectsData[0]?.slug || '');
    const [isMobile, setIsMobile] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'systems', label: 'Systems & AI' },
        { id: 'ecommerce', label: 'E-commerce' },
        { id: 'creative', label: 'Creative/Landing' }
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
                return 'creative';
            default:
                return '';
        }
    };

    const filteredProjects = projectsData.filter(project => {
        if (selectedCategory === 'all') return true;
        return getFilterCategory(project.slug) === selectedCategory;
    });

    const handleCategoryChange = (catId: string) => {
        setSelectedCategory(catId);
        const filtered = projectsData.filter(p => catId === 'all' || getFilterCategory(p.slug) === catId);
        if (filtered.length > 0) {
            setActiveSlug(filtered[0].slug);
        } else {
            setActiveSlug('');
        }
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-24 relative bg-background border-b border-border/30">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-border/30" />

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground flex flex-wrap gap-x-3">
                        <TextReveal text={t.projects.titleStart} splitType="letter" /> 
                        <span className="text-neon">
                            <TextReveal text={t.projects.titleHighlight} splitType="letter" delay={0.4} />
                        </span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap gap-3 mb-12 select-none">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        const label = cat.label;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-4 py-2 border text-[10px] md:text-xs font-mono font-bold tracking-wider transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer group ${
                                    isActive
                                        ? 'border-neon bg-neon/10 text-neon shadow-[0_0_15px_rgba(225,29,29,0.15)]'
                                        : 'border-border/30 text-muted-foreground hover:border-neon/40 hover:text-neon'
                                }`}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    isActive ? 'bg-neon scale-125' : 'bg-muted-foreground/30 group-hover:bg-neon/60'
                                }`} />
                                <span>{label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* DESKTOP SPLIT SHOWCASE (lg and up) */}
                {!isMobile && (
                    <div className="grid grid-cols-12 gap-8 items-start relative min-h-[500px]">
                        {/* Left Column: Projects Vertical List */}
                        <div className="col-span-5 space-y-4">
                            {filteredProjects.map((project, index) => {
                                const isActive = activeSlug === project.slug;

                                return (
                                    <div 
                                        key={project.slug}
                                        onMouseEnter={() => {
                                            setActiveSlug(project.slug);
                                        }}
                                        className={`group relative p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                                            isActive 
                                                ? 'border-neon bg-neon/[0.02] shadow-[0_0_15px_rgba(225,29,29,0.05)]' 
                                                : 'border-border/30 bg-transparent hover:border-neon/30'
                                        }`}
                                    >
                                        {/* Animated Glow Border Line on left */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-neon transition-transform duration-300 ${
                                            isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                                        }`} />

                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[9px] font-mono bg-neon/10 text-neon border border-neon/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                                                {project.metrics}
                                            </span>
                                            {/* Category Badge */}
                                            <span className={`px-2 py-0.5 border text-[9px] font-medium uppercase tracking-wider font-mono ${project.category.color}`}>
                                                {project.category.en}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="mb-2">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Logos */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {project.tech.map((tech: string) => {
                                                const iconPath = techLogos[tech];
                                                return (
                                                    <span key={tech} className="inline-flex items-center gap-1 px-1.5 py-0.5 border border-border/20 bg-muted/5 rounded-sm">
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
                                                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
                                                            {tech}
                                                        </span>
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Impact / Outcome */}
                                        <div className="mt-4 pt-3 border-t border-border/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="bg-neon/5 border border-neon/15 px-3 py-1.5 rounded-none flex items-center gap-2 flex-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon shrink-0 animate-pulse" />
                                                <span className="text-neon font-mono text-[9px] font-bold uppercase tracking-wider">
                                                    RESULT:
                                                </span>
                                                <span className="text-foreground text-[11px] font-semibold">
                                                    {project.caseStudy.outcome}
                                                </span>
                                            </div>
                                            <a 
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-white text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0"
                                                aria-label={`Visit ${project.title}`}
                                            >
                                                <span>Visit Website</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                            {filteredProjects.length === 0 && (
                                <div className="text-center py-12 border border-dashed border-border/30 text-muted">
                                    No projects in this category currently.
                                </div>
                            )}
                        </div>

                        {/* Right Column: Sticky Simulator Preview */}
                        <div className="col-span-7 sticky top-28 h-[480px]">
                            <AnimatePresence mode="wait">
                                {activeSlug && (
                                    <motion.div
                                        key={activeSlug}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="w-full h-full"
                                    >
                                        <ProjectSimulator slug={activeSlug} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {/* MOBILE CARDS LIST (Collapsible / Accordion embedded simulators) */}
                {isMobile && (
                    <div className="space-y-6">
                        {filteredProjects.map((project) => {
                            const isSelected = activeSlug === project.slug;

                            return (
                                <div 
                                    key={project.slug}
                                    onClick={() => setActiveSlug(isSelected ? '' : project.slug)}
                                    className={`p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                                        isSelected 
                                            ? 'border-neon bg-neon/[0.01]' 
                                            : 'border-border/30 bg-transparent hover:border-neon/30'
                                    }`}
                                >
                                    {/* Card header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                                            <span className="text-[9px] font-mono bg-neon/10 text-neon border border-neon/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                                                {project.metrics}
                                            </span>
                                        </div>
                                        <span className={`px-2 py-0.5 border text-[9px] font-medium font-mono uppercase ${project.category.color}`}>
                                            {project.category.en}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className={`text-muted-foreground text-xs leading-relaxed mb-4 ${
                                        isSelected ? '' : 'line-clamp-2'
                                    }`}>
                                        {project.description}
                                    </p>

                                    {/* Tech Logos */}
                                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
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

                                    {!isSelected && (
                                        <div className="text-[10px] font-mono text-neon font-bold uppercase tracking-wider mt-2 flex items-center gap-1">
                                            <span>View Case Study & Outcome +</span>
                                        </div>
                                    )}

                                    {/* Embedded Simulator inside mobile item (only visible when expanded) */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full overflow-hidden mb-4 border-t border-border/10 pt-4 mt-2 space-y-4"
                                            >
                                                <div className="w-full h-[240px] border border-border/20">
                                                    <ProjectSimulator slug={project.slug} />
                                                </div>

                                                {/* Outcome Highlight Box */}
                                                <div className="bg-neon/5 border border-neon/15 p-3 rounded-none flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-neon shrink-0 animate-pulse" />
                                                        <span className="text-neon font-mono text-[9px] font-bold uppercase tracking-wider">
                                                            VERIFIED OUTCOME
                                                        </span>
                                                    </div>
                                                    <p className="text-foreground text-xs font-semibold leading-relaxed">
                                                        {project.caseStudy.outcome}
                                                    </p>
                                                </div>

                                                {/* Visit Button */}
                                                <div className="flex justify-end pt-2">
                                                    <a 
                                                        href={project.links.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()} // Stop accordion trigger
                                                        className="w-full sm:w-auto px-4 py-2.5 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-white text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                                                    >
                                                        <span>Visit Live Website</span>
                                                        <ArrowRight className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12 border border-dashed border-border/30 text-muted">
                                No projects in this category currently.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
