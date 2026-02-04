'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export default function Navbar() {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent backdrop-blur-sm"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                MUBX<span className="text-neon">.</span>
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
                <Link
                    href="#contact"
                    className="px-4 py-2 text-sm font-bold text-black bg-neon rounded-full hover:bg-white transition-colors"
                >
                    Let's Talk
                </Link>
            </div>

            {/* Mobile Menu Toggle (Simplified for now) */}
            <div className="md:hidden text-neon">
                {/* Placeholder for hamburger */}
                Menu
            </div>
        </motion.nav>
    );
}
