'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, Suspense, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useActiveSectionContext } from '@/context/ScrollSpyContext';
import { usePathname } from 'next/navigation';

const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const lastScrollY = useRef(0);
    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = lastScrollY.current;
        const diff = latest - previous;

        if (latest < 80) {
            setNavHidden(false);
        } else if (diff > 30) {
            setNavHidden(true);
        } else if (diff < -10) {
            setNavHidden(false);
        }

        lastScrollY.current = latest;
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const { t } = useLanguage();

    const menuVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: { type: 'tween' as const, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
        },
        exit: {
            x: '100%',
            transition: { type: 'tween' as const, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    const pathname = usePathname();
    const { activeSection } = useActiveSectionContext();

    if (pathname.startsWith('/links')) return null;

    const isLinkActive = (href: string) => {
        if (!mounted) return href === '/';
        const cleanPathname = pathname.split('?')[0];
        const isHomepage = cleanPathname === '/' || cleanPathname === '/ar';
        if (isHomepage) {
            const hashPart = href.split('#')[1];
            if (hashPart) {
                const hash = hashPart.split('?')[0];
                if (hash === 'about') {
                    return activeSection === 'about';
                }
                return activeSection === hash;
            }
            return activeSection === 'hero' || activeSection === '';
        }
        const cleanHref = href.split('?')[0];
        return cleanPathname === cleanHref || (cleanPathname.startsWith(cleanHref) && cleanHref !== '/');
    };

    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: 'About', href: '#about' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.tools, href: '#tech-stack' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <>
            {/* Desktop: Floating pill navbar */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={navHidden ? 'hidden' : 'visible'}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-[200] hidden lg:flex justify-center pt-5 px-6"
                onMouseEnter={() => setNavHidden(false)}
            >
                <motion.nav
                    className="flex items-center gap-1 px-2 py-2 rounded-full"
                    style={{
                        backgroundColor: 'rgba(13,13,13,0.85)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-10 p-2 mr-2 shrink-0" aria-label="MUBX Home">
                        <div className="relative h-10 w-20 transition-transform hover:scale-105 active:scale-95">
                            <Image
                                src="/mubxlogoloader.svg"
                                alt="MUBX Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="h-5 w-[1px] mr-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

                    {/* Nav items with hover pill */}
                    {navLinks.map((link, index) => {
                        const active = isLinkActive(link.href);
                        return (
                            <li
                                key={link.href}
                                ref={(el) => { navItemsRef.current[index] = el; }}
                                className="relative list-none px-1"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <a
                                    href={link.href}
                                    className="relative z-10 px-4 py-2.5 text-[13px] font-medium tracking-wide block transition-colors duration-200"
                                    style={{
                                        color: active ? '#E11D1D' : hoveredIndex === index ? '#EDE8E4' : 'rgba(237,232,228,0.6)',
                                    }}
                                >
                                    {link.name}
                                </a>
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        className="absolute inset-0 rounded-full z-0"
                                        style={{
                                            backgroundColor: 'rgba(225,29,29,0.08)',
                                            border: '1px solid rgba(225,29,29,0.12)',
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}

                    <div className="h-5 w-[1px] mx-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

                    {/* Resume */}
                    <li className="relative list-none px-1 flex items-center">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 pl-4 pr-2 py-2.5 text-[13px] font-medium tracking-wide block transition-colors duration-200"
                            style={{
                                color: hoveredIndex === navLinks.length ? '#E11D1D' : 'rgba(237,232,228,0.6)',
                            }}
                            onMouseEnter={() => setHoveredIndex(navLinks.length)}
                        >
                            {t.nav.resume}
                        </a>
                        <a
                            href="/cv.pdf"
                            download="Omar-Mubaidin-Resume.pdf"
                            aria-label="Download Resume"
                            title="Download Resume"
                            className="relative z-10 px-2 py-2.5 flex items-center transition-colors duration-200"
                            style={{
                                color: hoveredIndex === navLinks.length ? '#E11D1D' : 'rgba(237,232,228,0.6)',
                            }}
                            onMouseEnter={() => setHoveredIndex(navLinks.length)}
                        >
                            <Download className="w-3.5 h-3.5" />
                        </a>
                        {hoveredIndex === navLinks.length && (
                            <motion.div
                                layoutId="nav-hover-pill"
                                className="absolute inset-0 rounded-full z-0"
                                style={{
                                    backgroundColor: 'rgba(225,29,29,0.08)',
                                    border: '1px solid rgba(225,29,29,0.12)',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 350,
                                    damping: 30,
                                }}
                            />
                        )}
                    </li>

                    <div className="h-5 w-[1px] mx-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

                    {/* Book Call CTA */}
                    <li className="relative list-none pl-1 pr-1.5">
                        <a
                            href="https://calendly.com/omarmubaidincs/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 px-5 py-2.5 text-[13px] font-bold text-white tracking-wide block rounded-full transition-all duration-200"
                            style={{
                                backgroundColor: '#E11D1D',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,29,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {t.nav.bookCall}
                        </a>
                    </li>
                </motion.nav>
            </motion.header>

            {/* Mobile: Fixed top bar with hamburger */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={navHidden ? 'hidden' : 'visible'}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-[200] lg:hidden"
            >
                <nav
                    className="flex items-center justify-between px-5 py-3"
                    style={{
                        backgroundColor: 'rgba(10,10,10,0.92)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    <Link href="/" className="relative z-50 p-1 -ml-1" aria-label="MUBX Home">
                        <div className="relative h-10 w-20">
                            <Image
                                src="/mubxlogoloader.svg"
                                alt="MUBX Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[210] p-2 transition-colors"
                        style={{ color: '#E11D1D' }}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Slide-in Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 z-[205] lg:hidden"
                            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 bottom-0 z-[206] w-[280px] lg:hidden flex flex-col overflow-y-auto"
                            style={{
                                backgroundColor: 'rgba(13,13,13,0.98)',
                                backdropFilter: 'blur(24px)',
                                WebkitBackdropFilter: 'blur(24px)',
                                borderLeft: '1px solid rgba(255,255,255,0.06)',
                            }}
                        >
                            <div className="flex items-center justify-end p-5 pb-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 transition-colors"
                                    style={{ color: 'rgba(237,232,228,0.5)' }}
                                    aria-label="Close Menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex flex-col px-6 pt-4 pb-6 gap-1">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants}>
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 py-3 text-[15px] font-medium tracking-wide transition-colors min-h-[44px] ${
                                                isLinkActive(link.href) ? 'text-[#E11D1D]' : 'text-[rgba(237,232,228,0.75)] hover:text-[#E11D1D]'
                                            }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                                                isLinkActive(link.href) ? 'bg-[#E11D1D] scale-125' : 'bg-transparent'
                                            }`} />
                                            {link.name}
                                        </a>
                                    </motion.div>
                                ))}

                                <div className="h-[1px] my-3" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

                                <motion.div variants={itemVariants}>
                                    <div className="flex items-center">
                                        <a
                                            href="/cv.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 py-3 text-[15px] font-medium tracking-wide text-[rgba(237,232,228,0.75)] hover:text-[#E11D1D] transition-colors min-h-[44px] flex-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-transparent" />
                                            {t.nav.resume}
                                        </a>
                                        <a
                                            href="/cv.pdf"
                                            download="Omar-Mubaidin-Resume.pdf"
                                            aria-label="Download Resume"
                                            title="Download Resume"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center py-3 px-4 text-[rgba(237,232,228,0.75)] hover:text-[#E11D1D] transition-colors min-h-[44px]"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-auto px-6 pb-8 pt-4 border-t border-white/5">
                                <motion.div variants={itemVariants}>
                                    <a
                                        href="https://calendly.com/omarmubaidincs/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center py-3.5 font-bold text-white text-sm tracking-wide transition-all min-h-[44px] rounded-full"
                                        style={{
                                            backgroundColor: '#E11D1D',
                                            boxShadow: '0 0 20px rgba(225,29,29,0.2)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(225,29,29,0.35)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 0 20px rgba(225,29,29,0.2)';
                                        }}
                                    >
                                        {t.nav.bookCall}
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default function Navbar() {
    return (
        <Suspense fallback={<div className="h-16 w-full fixed top-0 left-0 z-50" style={{ backgroundColor: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(24px)' }} />}>
            <NavbarContent />
        </Suspense>
    );
}
