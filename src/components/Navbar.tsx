'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: 'Services', href: '/#services' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Articles', href: '/blog' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent backdrop-blur-sm"
        >
            <Link href="/" className="group relative z-50">
                <div className="relative h-16 w-auto min-w-[140px] transition-transform group-hover:scale-105">
                    <Image
                        src="/icon.png"
                        alt="MUBX Logo"
                        width={220}
                        height={80}
                        className="h-full w-auto object-contain"
                        priority
                    />
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-neon transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                {/* Resume Link */}
                <Link
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-300 hover:text-neon transition-colors flex items-center gap-1"
                >
                    Resume
                </Link>

                <Link
                    href="#contact"
                    className="px-5 py-2.5 text-sm font-bold text-black bg-neon rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                >
                    Get Estimate
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 p-2 text-neon hover:text-white transition-colors"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Mobile Navigation Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 pt-24 md:hidden flex flex-col gap-6 shadow-2xl"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-white hover:text-neon transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/blog"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-white hover:text-neon transition-colors uppercase tracking-wider"
                        >
                            Lab / Articles
                        </Link>
                        <Link
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-white hover:text-neon transition-colors uppercase tracking-wider"
                        >
                            Resume
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-neon hover:text-white transition-colors uppercase tracking-wider"
                        >
                            Let&apos;s Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
