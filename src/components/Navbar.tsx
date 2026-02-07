'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useState, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language } = useLanguage();

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    const links = [
        { name: t.nav.services, href: getHref('/#services') },
        { name: t.nav.projects, href: getHref('/#projects') },
        { name: t.nav.lab, href: getHref('/blog') },
        { name: t.nav.testimonials, href: getHref('/#testimonials') },
        { name: t.nav.contact, href: getHref('/#contact') },
    ];

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-sm border-b border-white/5"
        >
            <Link href={getHref('/')} className="group relative z-50">
                <div className="relative h-16 w-auto min-w-[140px] transition-transform group-hover:scale-105">
                    <Image
                        src="/icon.png"
                        alt="MUBX Logo"
                        width={220}
                        height={80}
                        className="h-full w-auto object-contain dark:invert-0 invert"
                        priority
                    />
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-muted hover:text-neon transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                {/* Resume Link */}
                <Link
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted hover:text-neon transition-colors flex items-center gap-1"
                >
                    {t.nav.resume}
                </Link>

                <div className="h-6 w-[1px] bg-border mx-2" />

                <ThemeToggle />
                <LanguageToggle />

                <Link
                    href={getHref('#contact')}
                    className="px-5 py-2.5 text-sm font-bold text-black bg-neon rounded-full hover:bg-background hover:text-foreground border border-transparent hover:border-neon transition-all shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:shadow-[0_0_25px_rgba(255,30,30,0.4)] ml-2"
                >
                    {t.nav.estimate}
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
                <ThemeToggle />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 p-2 text-neon hover:text-foreground transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Navigation Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 pt-24 md:hidden flex flex-col gap-6 shadow-2xl h-screen"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-foreground hover:text-neon transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between py-4 border-t border-border mt-auto mb-20">
                            <span className="text-muted">Language</span>
                            <LanguageToggle />
                        </div>
                        <Link
                            href={getHref('#contact')}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-neon hover:text-foreground transition-colors uppercase tracking-wider mb-8"
                        >
                            {t.nav.talk}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default function Navbar() {
    return (
        <Suspense fallback={<div className="h-20 w-full fixed top-0 left-0 bg-background/80 backdrop-blur-sm z-50 border-b border-white/5" />}>
            <NavbarContent />
        </Suspense>
    );
}
