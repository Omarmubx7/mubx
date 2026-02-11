"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,       // smoothness
            wheelMultiplier: 1.0, // scroll speed
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
