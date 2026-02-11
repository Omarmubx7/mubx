'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Components
import LaptopModel from './LaptopModel';
import LaptopScreenOverlay from './LaptopScreenOverlay';
import Badge from '../ui/Badge';

// Hooks
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Hero3DLaptop() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollProgress } = useScrollProgress(heroRef);
    const { t, language, isRTL } = useLanguage();

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    // Camera rig to follow scroll
    // We can't put useFrame here because we are outside Canvas.
    // Instead we can map scroll to camera prop in Canvas if we make a wrapper, 
    // OR just handle camera in the scene component. 
    // For simplicity, we'll let LaptopModel handle model rotation and keep camera fixed or 
    // move camera inside a rig component. 
    // The previous plan mentioned "Camera position... z: from 6 to 4".
    // I will add a CameraRig component inside the Canvas.

    return (
        <section
            ref={heroRef}
            className="relative min-h-[150vh] bg-neutral-950 overflow-hidden" // Taller than screen to allow scrolling
        >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] -z-10 rounded-full" />

            <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 md:px-12 z-10 transition-colors duration-500">

                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start rtl:lg:items-end text-center lg:text-left rtl:lg:text-right pt-20 lg:pt-0 pointer-events-none lg:pointer-events-auto">

                    {/* Pointer events handling: on mobile, text is on top, need to click buttons. On desktop, side by side. */}
                    <div className="pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 flex justify-center lg:justify-start rtl:lg:justify-end"
                        >
                            <Badge variant="neon">{t.hero.badge}</Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white"
                        >
                            {t.hero.titleStart}{' '}
                            <span className="text-cyan-400">{t.hero.titleHighlight}</span>{' '}
                            {t.hero.titleEnd}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
                        >
                            {t.hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start"
                        >
                            <a
                                href="https://calendly.com/omarmubaidincs/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded-full hover:bg-cyan-400 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                            >
                                <MessageCircle className="w-5 h-5" />
                                {t.hero.ctaPrimary}
                            </a>
                            <Link
                                href={getHref('/#projects')}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                {t.hero.ctaSecondary}
                                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: 3D Scene */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex items-center justify-center">

                    {/* The 2D Overlay for the screen */}
                    <LaptopScreenOverlay scrollProgress={scrollProgress} />

                    {/* The 3D Canvas */}
                    <div className="absolute inset-0 z-10">
                        <Canvas
                            dpr={[1, 2]}
                            camera={{ position: [0, 1.2, 5], fov: 45 }}
                            gl={{ antialias: true, alpha: true }}
                        >
                            <Suspense fallback={null}>
                                <Environment preset="city" blur={1} />
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[-5, 5, 5]} intensity={1} color="#ffffff" />
                                <directionalLight position={[5, -5, 5]} intensity={0.5} color="#00ffff" />

                                <LaptopModel scrollProgress={scrollProgress} />

                                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>

            </div>
        </section>
    );
}

