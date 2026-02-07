'use client';

import { ReactNode } from 'react';

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
    return (
        <div className={`flex overflow-hidden whitespace-nowrap mask-image-gradient ${className}`}>
            <div
                className="flex gap-4 min-w-full animate-marquee"
                style={{
                    '--marquee-duration': `${speed}s`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                } as React.CSSProperties}
            >
                {/* 
                   We need two identical sets of children to create a seamless loop.
                   The animation translates -100% of the container. 
                   Wait, standard technique is translating -50% of a container that holds 2 duplicates.
                   Let's adjust: The container inner should be wide enough.
                   The previous framer motion logic translated x from 0% to -50%.
                   So we need 2 sets of children.
                */}
                <div className="flex gap-4 items-center shrink-0 min-w-full justify-around">
                    {children}
                    {/* Add more copies if children width is small */}
                    {children}
                    {children}
                </div>
                <div className="flex gap-4 items-center shrink-0 min-w-full justify-around">
                    {children}
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
}
