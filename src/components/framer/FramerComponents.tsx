'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Centralize Framer components here to manage imports efficiently
// We use local patches to avoid the 'framer.fontStore.loadFonts' error from remote modules

// -- NAV & HERO --

// [🚀 Liquid Metal]
export const LiquidMetal = dynamic(() => import('./patch/LiquidMetal.patch.js'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-white/5 animate-pulse rounded-full" />
});

// [Typewriter Effect]
export const TypewriterEffect = dynamic(() => import('./patch/TypewriterEffect.patch.js'), {
    ssr: false,
    loading: () => <span className="opacity-0">...</span>
});

// [Swipe Letters Button]
export const SwipeLettersButton = dynamic(() => import('./patch/SwipeLettersButton.patch.js'), {
    ssr: false,
    loading: () => <div className="px-6 py-4 bg-white/10 rounded-full animate-pulse h-16 w-48" />
});

// -- LAYOUT & TRANSITIONS --

// [LogoPreloader]
// Note: We'll use the local patch which expects the mubx logo
export const LogoPreloader = dynamic(() => import('./patch/LogoPreloader.patch.js'), {
    ssr: false
});

// -- CONTENT SECTIONS --

// [FAQs]
export const FAQs = dynamic(() => import('./patch/FAQs.patch.js'), {
    ssr: false,
    loading: () => <div className="w-full h-[474px] bg-white/5 animate-pulse rounded-3xl" />
});

// [Pro Text Type]
export const ProTextType = dynamic(() => import('./patch/ProTextType.patch.js'), {
    ssr: false,
    loading: () => <div className="w-full h-24 bg-white/5 animate-pulse rounded-xl" />
});
