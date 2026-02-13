'use client';

import { useLanguage } from '@/context/LanguageContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
    const { language } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const switchLanguage = (newLang: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', newLang);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <button
            onClick={() => switchLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1 font-bold text-sm px-3 py-1.5 rounded-full border border-border/50 hover:bg-card transition-all"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            suppressHydrationWarning
        >
            <span className={language === 'ar' ? 'text-neon' : 'text-muted'}>عربي</span>
            <span className="text-muted/50">/</span>
            <span className={language === 'en' ? 'text-neon' : 'text-muted'}>EN</span>
        </button>
    );
}
