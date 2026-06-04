'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { dictionary, Locale } from '@/lib/dictionaries';

type LanguageContextType = {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: typeof dictionary['en'];
    isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode, initialLocale?: Locale }) {
    // Update document dir and lang attributes to always be English / LTR
    useEffect(() => {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        localStorage.setItem('language', 'en');
    }, []);

    const value = {
        language: 'en' as Locale,
        setLanguage: () => {}, // No-op to prevent state-changing issues in legacy code
        t: dictionary['en'],
        isRTL: false,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

