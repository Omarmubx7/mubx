"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.12,           // Increased from 0.08 for more responsiveness
            wheelMultiplier: 1.1, // Slightly increased scroll velocity
            duration: 1.0,        // Explicit duration for predictable behavior
            smoothWheel: true,
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
