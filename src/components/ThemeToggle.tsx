'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const { language } = useLanguage();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative p-2 rounded-none border border-border/30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors group"
            aria-label="Toggle Theme"
        >
            {/* Premium CSS-based Floating Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-[9px] font-mono text-white px-2 py-1 rounded-none shadow-lg pointer-events-none whitespace-nowrap z-50">
                {theme === 'dark' 
                    ? (language === 'ar' ? 'تفعيل المظهر الفاتح' : 'LIGHT MODE') 
                    : (language === 'ar' ? 'تفعيل المظهر الداكن' : 'DARK MODE')}
            </span>

            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="w-5 h-5 text-black" />
                </motion.div>
            </div>
        </button>
    );
}
