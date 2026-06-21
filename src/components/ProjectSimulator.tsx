'use client';

import React from 'react';
import Image from 'next/image';
import { Lock, RotateCw, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface SimulatorProps {
    slug: string;
}

const projectScreenshots: Record<string, string> = {
    mubxai: '/images/projects/mubxai.png',
    mubxbot: '/images/projects/mubxbot.png',
    aqabwi: '/images/projects/aqabwi.png',
    'men-only-show': '/images/projects/men-only-show.png',
    'the-glorious-page': '/images/projects/the-glorious-page.png',
    'vynex-media': '/images/projects/vynex-media.png',
    'htu-martial-arts': '/images/projects/htu-martial-arts.png',
    'blob-jo': '/images/projects/blob-jo.png',
    'qadumyweb': '/images/projects/qadumyweb.png'
};

const projectUrls: Record<string, string> = {
    mubxai: 'https://ai.mubx.dev',
    mubxbot: 'https://bot.mubx.dev',
    aqabwi: 'https://aqabwi.vercel.app',
    'men-only-show': 'https://menonlyshow-gray.vercel.app',
    'the-glorious-page': 'https://theglorious.page',
    'vynex-media': 'https://vynexmedia.vercel.app',
    'htu-martial-arts': 'https://htu-martial-arts-man.vercel.app',
    'blob-jo': 'https://blobjor.me',
    qadumyweb: 'https://qadumyweb.vercel.app'
};

export default function ProjectSimulator({ slug }: Readonly<SimulatorProps>) {
    const imageSrc = projectScreenshots[slug];
    const [hovered, setHovered] = React.useState(false);

    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-full h-full border border-border/30 bg-card/5 backdrop-blur-md relative overflow-hidden flex flex-col rounded-none shadow-2xl transition-all duration-300"
            style={{
                borderColor: hovered ? 'rgba(225,29,29,0.3)' : 'rgba(255,255,255,0.07)',
                boxShadow: hovered ? '0 12px 40px rgba(225,29,29,0.08)' : 'none'
            }}
        >
            {/* Monitor window chrome */}
            <div className="w-full border-b border-border/30 bg-card/10 px-4 py-2.5 flex items-center gap-3 pointer-events-none select-none shrink-0">
                {/* Window dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E11D1D]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                
                {/* Navigation controls */}
                <div className="hidden sm:flex items-center gap-2 text-muted-foreground/30 shrink-0">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <ArrowRight className="w-3.5 h-3.5" />
                    <RotateCw className="w-3.5 h-3.5" />
                </div>
                
                {/* Address bar */}
                <div className="flex-1 bg-black/35 border border-border/20 rounded-md px-3 py-1 flex items-center justify-between text-[10px] font-mono text-muted-foreground/75 overflow-hidden">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                        <Lock className="w-3 h-3 text-emerald-500/80 shrink-0" />
                        <span className="truncate tracking-wide">{projectUrls[slug] ?? `mubx.dev/projects/${slug}`}</span>
                    </div>
                    {projectUrls[slug] && (
                        <a 
                            href={projectUrls[slug]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto text-muted-foreground/50 hover:text-neon transition-colors shrink-0 pl-2"
                            title="Open live site in new tab"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                </div>
            </div>
            
            {/* Screen canvas content displaying the real screenshot */}
            <div className="flex-1 bg-black/40 relative overflow-hidden w-full h-full">
                {imageSrc ? (
                    <>
                        <div 
                            className="w-full absolute top-0 left-0 transition-transform duration-[6000ms] ease-in-out"
                            style={{
                                transform: hovered ? 'translateY(min(0px, calc(-100% + 436px)))' : 'translateY(0)',
                            }}
                        >
                            <Image
                                src={imageSrc}
                                alt={`${slug} preview`}
                                width={1200}
                                height={2400}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="w-full h-auto object-cover object-top"
                                priority
                            />
                        </div>
                        {/* Hover hint overlay */}
                        <div className={`absolute top-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-border/30 rounded-full text-[9px] font-mono text-muted-foreground transition-opacity duration-300 pointer-events-none select-none ${
                            hovered ? 'opacity-0' : 'opacity-100'
                        }`}>
                            🖱️ Hover to scroll preview
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground font-mono text-xs">
                        Preview not available
                    </div>
                )}
            </div>
        </div>
    );
}
