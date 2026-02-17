'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

interface InfiniteMarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export default function InfiniteMarquee({
    children,
    direction = 'left',
    speed = 20,
    className = "",
}: InfiniteMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsPaused(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`flex overflow-hidden whitespace-nowrap mask-image-gradient ${className}`}>
            <div
                className="flex gap-4 min-w-full animate-marquee"
                style={{
                    '--marquee-duration': `${speed}s`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationPlayState: isPaused ? 'paused' : 'running',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                } as React.CSSProperties}
            >
                <div className="flex gap-4 items-center shrink-0 min-w-full justify-around">
                    {children}
                    {children}
                </div>
                <div className="flex gap-4 items-center shrink-0 min-w-full justify-around">
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
}
