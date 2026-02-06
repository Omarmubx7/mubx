'use client';

import { motion } from 'framer-motion';
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
            <motion.div
                className="flex gap-4 min-w-full"
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Duplicate children to ensure seamless loop */}
                <div className="flex gap-4 items-center">
                    {children}
                </div>
                <div className="flex gap-4 items-center">
                    {children}
                </div>
                <div className="flex gap-4 items-center">
                    {children}
                </div>
                <div className="flex gap-4 items-center">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
