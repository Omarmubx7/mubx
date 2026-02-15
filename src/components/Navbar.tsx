'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useState, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { usePathname } from 'next/navigation';

const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const shouldHide = latest > previous && latest > 150;
        if (shouldHide !== hidden) {
            setHidden(shouldHide);
        }
    });


    const { t, language } = useLanguage();

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    const pathname = usePathname();
    const activeSection = useScrollSpy([



        'about',
        'tech',
        'timeline',
        'contact'
    ], 100);

    const isLinkActive = (href: string) => {
        if (pathname === '/' || pathname === '/ar') {
            // Extract hash
            const hash = href.split('#')[1];
            if (hash) {
                return activeSection === hash;
            }
        }
        // Handle normal pages like /blog
        return pathname === href || (pathname.startsWith(href) && href !== '/');
    };

    const links = [
        { name: t.nav.services, href: getHref('/services') },
        { name: t.nav.projects, href: getHref('/projects') },


        { name: t.nav.contact, href: getHref('/#contact') },
    ];

    return (
        <motion.nav
            initial="hidden"
            animate={hidden ? "hiddenNav" : "visible"}
            variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                hiddenNav: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } }
            }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-glass"
        >
            <Link href={getHref('/')} className="group relative z-50 p-2 -ml-2" aria-label="MUBX Home">
                <div className="relative h-16 w-auto min-w-[140px] transition-transform group-hover:scale-105">
                    <Image
                        src="/brand-icon.png"
                        alt="MUBX - High Performance Web Systems & E-commerce"

                        width={64}
                        height={64}
                        className="h-full w-auto object-contain dark:invert-0 invert"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 48px, 64px"
                    />

                </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        aria-current={isLinkActive(link.href) ? 'page' : undefined}
                        className={`text-sm font-medium transition-colors relative group ${isLinkActive(link.href) ? 'text-neon font-bold' : 'text-muted hover:text-neon'
                            }`}
                    >

                        {link.name}
                        {/* Hover Underline */}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon to-red-500 rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out" />

                        {/* Active Indicator (Keep existing but make it compatible) */}
                        {isLinkActive(link.href) && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon rounded-full"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                ))}
                {/* Resume Link */}
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted hover:text-neon transition-colors flex items-center gap-1"
                >
                    {t.nav.resume}
                </a>


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
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-2xl p-6 pt-16 md:hidden flex flex-col gap-4 shadow-2xl h-screen overflow-y-auto border-b border-white/10"
                    >
                        {links.map((link) => (
                            <motion.div key={link.name} variants={itemVariants}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-bold text-foreground hover:text-neon transition-colors uppercase tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <div className="flex items-center justify-between py-3 border-t border-border mt-8 mb-4">
                            <span className="text-sm text-muted">Language</span>
                            <LanguageToggle />
                        </div>
                        <motion.div variants={itemVariants}>
                            <Link
                                href={getHref('#contact')}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold text-neon hover:text-foreground transition-colors uppercase tracking-wider mb-4 block"
                            >
                                {t.nav.talk}
                            </Link>
                        </motion.div>
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
