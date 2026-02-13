'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import GradientText from './ui/GradientText';
import { fadeUp } from '@/lib/motion';

const basePhotos = [
    '/images/BloB.JO.png',
    '/images/HTU Martial Arts.png',
    '/images/Vynex Media.png',
];

const photos = [...basePhotos, ...basePhotos]; // Double for seamless loop

export default function Photography() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section id="photography" ref={containerRef} className="py-32 relative overflow-hidden bg-background">
            {/* Horizontal Parallax Strip */}
            <div className="w-full relative">
                <motion.div
                    style={{ x: springX }}
                    className="flex gap-8 w-max px-6"
                >
                    {photos.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.02]"
                        >
                            <Image
                                src={src}
                                alt={`Photography Sample ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority={index < 2} // Preload first two for smoother initial render
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
