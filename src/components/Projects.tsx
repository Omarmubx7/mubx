'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '@/lib/projects';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from '@/components/ui/TextReveal';
import ProjectSimulator from './ProjectSimulator';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
    const { language, t } = useLanguage();
    const projectsData = getProjects(language);
    
    const [activeSlug, setActiveSlug] = useState<string>(projectsData[0]?.slug || '');
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);





    return (
        <section id="projects" className="py-24 relative bg-background border-b border-border/30">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-border/30" />

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-neon font-mono text-sm mb-4 tracking-widest">01</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase flex flex-wrap gap-x-3">
                        <TextReveal text={t.projects.titleStart} splitType="letter" /> 
                        <span className="text-neon">
                            <TextReveal text={t.projects.titleHighlight} splitType="letter" delay={0.4} />
                        </span>
                    </h2>
                </motion.div>

                {/* DESKTOP SPLIT SHOWCASE (lg and up) */}
                {!isMobile && (
                    <div className="grid grid-cols-12 gap-8 items-start relative min-h-[500px]">
                        {/* Left Column: Projects Vertical List */}
                        <div className="col-span-5 space-y-4">
                            {projectsData.map((project, index) => {
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

                                        {/* Index & Header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-mono text-neon font-bold">0{index + 1}</span>
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

                                        {/* Impact / Outcome */}
                                        <div className="mt-4 pt-3 border-t border-border/10 flex items-center justify-between text-[11px] select-none gap-4">
                                            <span className="text-foreground font-semibold flex-1 pr-4">{project.caseStudy.outcome}</span>
                                            <a 
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-black text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shrink-0"
                                            >
                                                <span>Visit here</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column: Sticky Simulator Preview */}
                        <div className="col-span-7 sticky top-28 h-[400px]">
                            <AnimatePresence mode="wait">
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
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {/* MOBILE CARDS LIST (Collapsible / Accordion embedded simulators) */}
                {isMobile && (
                    <div className="space-y-6">
                        {projectsData.map((project, index) => {
                            const isSelected = activeSlug === project.slug;

                            return (
                                <div 
                                    key={project.slug}
                                    onClick={() => setActiveSlug(isSelected ? '' : project.slug)}
                                    className={`p-6 border flex flex-col justify-between transition-all duration-300 ${
                                        isSelected 
                                            ? 'border-neon bg-neon/[0.01]' 
                                            : 'border-border/30 bg-transparent'
                                    }`}
                                >
                                    {/* Card header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-neon font-bold">0{index + 1}</span>
                                            <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                                        </div>
                                        <span className={`px-2 py-0.5 border text-[9px] font-medium font-mono uppercase ${project.category.color}`}>
                                            {project.category.en}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Embedded Simulator inside mobile item (only visible when expanded) */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 260 }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full overflow-hidden mb-4 border-t border-border/10 pt-4"
                                            >
                                                <div className="w-full h-full max-h-[240px]">
                                                    <ProjectSimulator slug={project.slug} />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Action row */}
                                    <div className="flex items-center justify-between border-t border-border/10 pt-4 mt-auto text-xs gap-4">
                                        <span className="text-foreground font-semibold flex-1">
                                            {project.caseStudy.outcome}
                                        </span>
                                        <a 
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} // Stop accordion trigger
                                            className="px-4 py-2 border border-neon/30 bg-neon/5 hover:bg-neon hover:text-black text-neon text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shrink-0"
                                        >
                                            <span>Visit here</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
