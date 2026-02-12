'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CanvasCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }, []);



    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const dotSpringConfig = { stiffness: 1000, damping: 50 };
    const dotSpringX = useSpring(mouseX, dotSpringConfig);
    const dotSpringY = useSpring(mouseY, dotSpringConfig);

    useEffect(() => {
        // Mobile Check
        const checkMobile = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                return true;
            }
            return false;
        };

        if (checkMobile()) return;

        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // Don't render on server or mobile (checked via CSS/JS logic usually, but here checking window opacity/events)
    // For pure mobile optimization, strict null return might flicker if not handled with state, 
    // but the effect hook prevents listeners. 
    // Let's add formatted return null based on state to be safe.


    if (isMobile) return null;

    return (
        <>
            {/* Main Follower Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-neon rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 30, 30, 0.2)" : "rgba(255, 30, 30, 0)",
                    borderColor: isHovering ? "rgba(255, 30, 30, 0.8)" : "rgba(255, 30, 30, 1)",
                }}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon rounded-full pointer-events-none z-[9999]"
                style={{
                    x: dotSpringX,
                    y: dotSpringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isHovering ? 0 : 1
                }}
            />
        </>
    );
};

export default CanvasCursor;
