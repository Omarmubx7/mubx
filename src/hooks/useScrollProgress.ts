import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    return { scrollProgress: scrollYProgress };
}
