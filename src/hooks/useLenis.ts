"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) return;

        const lenis = new Lenis({
            lerp: 0.05,           // Lower lerp = smoother deceleration (0.1 is default)
            duration: 1.5,        // Longer duration for a more cinematic feel
            smoothWheel: true,
            wheelMultiplier: 1.0, // Standard multiplier for predictability
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
