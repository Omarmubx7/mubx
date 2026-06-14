'use client';

import React from 'react';
import Image from 'next/image';

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

export default function ProjectSimulator({ slug }: Readonly<SimulatorProps>) {
    const imageSrc = projectScreenshots[slug];

    return (
        <div className="w-full h-full border border-border/30 bg-card/5 backdrop-blur-md relative overflow-hidden flex flex-col rounded-none shadow-2xl">
            {/* Monitor window chrome */}
            <div className="w-full border-b border-border/30 bg-card/10 px-4 py-3 flex items-center gap-1.5 pointer-events-none select-none shrink-0">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
                <span className="text-[9px] font-mono text-muted-foreground/60 ml-4 tracking-wider uppercase">mubx://systems/preview/{slug}</span>
            </div>
            
            {/* Screen canvas content displaying the real screenshot */}
            <div className="flex-1 bg-black/40 relative overflow-hidden w-full h-full">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={`${slug} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                        priority
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground font-mono text-xs">
                        Preview not available
                    </div>
                )}
            </div>
        </div>
    );
}
