'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = [
    'hero',
    'projects',
    'about',
    'tech-stack',
    'journey',
    'contact',
] as const;

type SectionId = typeof SECTION_IDS[number] | string;

interface ScrollSpyContextValue {
    activeSection: SectionId;
    sectionIds: readonly string[];
}

const ScrollSpyContext = createContext<ScrollSpyContextValue>({
    activeSection: 'hero',
    sectionIds: SECTION_IDS,
});

export function ScrollSpyProvider({ children }: { children: ReactNode }) {
    // Single source of truth for the whole page
    const activeSection = useScrollSpy([...SECTION_IDS]);

    return (
        <ScrollSpyContext.Provider value={{ activeSection, sectionIds: SECTION_IDS }}>
            {children}
        </ScrollSpyContext.Provider>
    );
}

export function useActiveSectionContext() {
    return useContext(ScrollSpyContext);
}
