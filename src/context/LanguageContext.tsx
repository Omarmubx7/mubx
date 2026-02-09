'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionary, Locale } from '@/lib/dictionaries';
import { useSearchParams } from 'next/navigation';

type LanguageContextType = {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: typeof dictionary['en'];
    isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLocale = 'en' }: { children: ReactNode, initialLocale?: Locale }) {
    const [language, setLanguage] = useState<Locale>(initialLocale);
    const searchParams = useSearchParams();

    // Sync with initialLocale if it changes (e.g., client navigation)
    useEffect(() => {
        const langParam = searchParams.get('lang');
        if (langParam === 'ar' || langParam === 'en') {
            setLanguage(langParam as Locale);
        } else if (initialLocale) {
            setLanguage(initialLocale);
        }
    }, [initialLocale, searchParams]);

    // Update document dir and lang attributes
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('language', language);
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: dictionary[language],
        isRTL: language === 'ar',
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
