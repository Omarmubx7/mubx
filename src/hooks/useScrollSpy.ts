'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll-spy functionality using IntersectionObserver
 * More performant than scroll event listeners
 * 
 * @param ids - Array of section IDs to observe
 * @param offset - Offset from top in pixels (default: 100)
 * @returns activeId - ID of the currently active section
 */
export function useScrollSpy(ids: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            rootMargin: `-${offset}px 0px -${100 - offset}px 0px`,
            threshold: [0, 0.25, 0.5, 0.75, 1],
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            // Find the entry with the highest intersection ratio
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            if (visibleEntries.length > 0) {
                const mostVisible = visibleEntries.reduce((prev, current) =>
                    current.intersectionRatio > prev.intersectionRatio ? current : prev
                );
                setActiveId(mostVisible.target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup
        return () => {
            ids.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [ids, offset]);

    return activeId;
}
