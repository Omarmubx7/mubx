'use client';

import React from 'react';

export default function SkipToContent() {
    return (
        <a
            href="#main-content"
            className="fixed top-4 left-4 z-[100] translate-y-[-150%] focus:translate-y-0 bg-neon text-black px-6 py-3 rounded-full font-bold transition-transform duration-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-neon ring-offset-2 ring-offset-background"
        >
            Skip to content
        </a>

    );
}
