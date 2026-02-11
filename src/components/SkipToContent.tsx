'use client';

import React from 'react';

export default function SkipToContent() {
    return (
        <a
            href="#main-content"
            className="fixed top-4 left-4 z-50 -translate-y-[150%] bg-neon text-black px-6 py-3 rounded-full font-bold transition-transform focus-visible:translate-y-0 focus:translate-y-0 text-sm shadow-[0_0_20px_rgba(255,30,30,0.5)] outline-none ring-2 ring-transparent focus-visible:ring-neon focus:ring-neon"
        >
            Skip to content
        </a>
    );
}
