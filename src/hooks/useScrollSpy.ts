'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Reliable scroll-spy using scroll position math.
 * Marks the last section whose top edge is above `triggerRatio * viewportHeight`.
 * This always works regardless of section height or nesting.
 *
 * @param ids           - Ordered array of section element IDs to track
 * @param _legacyOptions - Ignored; kept for backward-compat with old IntersectionObserver signature
 * @param triggerRatio  - 0–1 fraction of viewport height used as the trigger line (default: 0.3)
 * @returns activeId    - The ID of the currently active section
 */
export function useScrollSpy(
    ids: string[],
    _legacyOptions?: number | { offset?: number; rootMargin?: string },
    triggerRatio = 0.3
): string {
    const idsKey = ids.join(',');

    const getActive = useCallback(() => {
        if (typeof window === 'undefined') return ids[0] ?? '';
        const idsArray = idsKey.split(',').filter(Boolean);
        const trigger = window.innerHeight * triggerRatio;

        let current = idsArray[0] ?? '';
        for (const id of idsArray) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.getBoundingClientRect().top <= trigger) {
                current = id;
            }
        }
        return current;
    }, [ids, idsKey, triggerRatio]);

    // Lazy initializer runs once synchronously before any render — no effect needed
    const [activeId, setActiveId] = useState<string>(() => ids[0] ?? '');

    useEffect(() => {
        // Update on each scroll event via rAF for performance
        let rafId: number;
        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const next = getActive();
                setActiveId((prev) => (prev === next ? prev : next));
            });
        };

        // Sync immediately after mount (sections now in DOM)
        const initial = getActive();
        setActiveId((prev) => (prev === initial ? prev : initial)); // eslint-disable-line react-hooks/set-state-in-effect

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, [getActive]);

    return activeId;
}
