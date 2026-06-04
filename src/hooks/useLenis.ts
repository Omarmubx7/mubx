"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) return;

        const lenis = new Lenis({
            lerp: 0.03,           // Butter-smooth deceleration (0.1 is default)
            smoothWheel: true,
            wheelMultiplier: 0.75, // Slightly dampens wheel inputs for smoother control
            touchMultiplier: 1.5,
        });


        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
}
