'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, Suspense, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useActiveSectionContext } from '@/context/ScrollSpyContext';
import { usePathname } from 'next/navigation';


const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        return path;
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
                    return activeSection === 'about' || activeSection === 'journey';
                }
                return activeSection === hash;
            }
            return activeSection === 'hero' || activeSection === '';
        }
        const cleanHref = href.split('?')[0];
        return cleanPathname === cleanHref || (cleanPathname.startsWith(cleanHref) && cleanHref !== '/');
    };

    const sectionLinks = [
        { name: 'About & Journey', href: '#about' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.tools, href: '#tech-stack' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
                opacity: 1, 
                y: 0,
                paddingTop: (mounted && scrolled) ? 14 : 22,
                paddingBottom: (mounted && scrolled) ? 14 : 22,
                backgroundColor: (mounted && scrolled) ? 'rgba(10,10,10,0.85)' : 'rgba(13,13,13,0.7)',
                borderBottomColor: (mounted && scrolled) ? 'rgba(225,29,29,0.12)' : 'rgba(255,255,255,0.05)',
                boxShadow: (mounted && scrolled) ? '0 8px 32px rgba(0,0,0,0.5)' : '0 1px 0px rgba(255,255,255,0.03)'
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12"
            style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
            }}
        >
            <Link href={getHref('/')} className="group relative z-50 p-2 -ml-2" aria-label="MUBX Home">
                <div className="relative h-14 w-28 md:h-16 md:w-32 transition-transform group-hover:scale-105 active:scale-95">
                    <Image
                        src="/mubxlogoloader.svg"
                        alt="MUBX Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
                <Link
                    href="/"
                    aria-current={isLinkActive('/') ? 'page' : undefined}
                    className="relative px-6 py-3 text-base font-medium tracking-wide transition-colors"
                    style={{
                        color: isLinkActive('/') ? '#E11D1D' : 'rgba(237,232,228,0.8)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = isLinkActive('/') ? '#E11D1D' : 'rgba(237,232,228,0.8)'
                    }}
                >
                    {t.nav.home}
                </Link>
                {sectionLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        aria-current={isLinkActive(link.href) ? 'page' : undefined}
                        className="relative px-6 py-3 text-base font-medium tracking-wide transition-colors"
                        style={{
                            color: isLinkActive(link.href) ? '#E11D1D' : 'rgba(237,232,228,0.8)',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = isLinkActive(link.href) ? '#E11D1D' : 'rgba(237,232,228,0.8)'
                        }}
                    >
                        {link.name}
                    </a>
                ))}

                <div className="h-6 w-[1px] mx-4" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-medium tracking-wide transition-colors"
                    style={{ color: 'rgba(237,232,228,0.8)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(237,232,228,0.8)' }}
                >
                    {t.nav.resume}
                </a>

                {mounted && (
                    <a
                        href="https://calendly.com/omarmubaidincs/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-7 py-3 text-base font-bold text-white transition-all"
                        style={{
                            backgroundColor: '#E11D1D',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,29,0.35)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        {t.nav.bookCall}
                    </a>
                )}
            </div>

            <div className="flex items-center gap-4 lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 p-2 transition-colors"
                    style={{ color: '#E11D1D' }}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[60] p-6 pt-24 lg:hidden flex flex-col gap-4 h-screen overflow-y-auto"
                        style={{
                            backgroundColor: 'rgba(13,13,13,0.95)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                        }}
                    >
                        <motion.div variants={itemVariants}>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold uppercase tracking-wider transition-colors"
                                style={{ color: '#EDE8E4' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#EDE8E4' }}
                            >
                                {t.nav.home}
                            </Link>
                        </motion.div>
                        {sectionLinks.map((link) => (
                            <motion.div key={link.href} variants={itemVariants}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold uppercase tracking-wider transition-colors"
                                    style={{ color: '#EDE8E4' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#EDE8E4' }}
                                >
                                    {link.name}
                                </a>
                            </motion.div>
                        ))}
                        <motion.div variants={itemVariants}>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold uppercase tracking-wider transition-colors"
                                style={{ color: '#EDE8E4' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#E11D1D' }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#EDE8E4' }}
                            >
                                {t.nav.resume}
                            </a>
                        </motion.div>
                        <div className="flex flex-col gap-3 mt-8">
                            {mounted && (
                                <motion.div variants={itemVariants}>
                                    <a
                                        href="https://wa.me/962780090453"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 py-4 font-bold text-white rounded-2xl text-lg"
                                        style={{ backgroundColor: '#E11D1D' }}
                                    >
                                        {t.nav.bookCall}
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default function Navbar() {
    return (
        <Suspense fallback={<div className="h-16 w-full fixed top-0 left-0 z-50" style={{ backgroundColor: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(24px)' }} />}>
            <NavbarContent />
        </Suspense>
    );
}
