'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

import Image from 'next/image';

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
            <Link href="/" className="group relative z-50">
                <div className="relative h-16 w-auto min-w-[140px] transition-transform group-hover:scale-105">
                    <Image
                        src="/mubxlogo.png"
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
                <Link
                    href="#"
                    className="text-sm font-medium text-gray-300 hover:text-neon transition-colors flex items-center gap-1"
                >
                    Lab / Articles <span className="text-[10px] bg-neon/10 text-neon px-1.5 py-0.5 rounded-full">Soon</span>
                </Link>

                <Link
                    href="#contact"
                    className="px-4 py-2 text-sm font-bold text-black bg-neon rounded-full hover:bg-white transition-colors"
                >
                    Let&apos;s Talk
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
