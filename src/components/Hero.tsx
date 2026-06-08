'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from './ui/Badge';
import { ProTextType, SwipeLettersButton } from './framer/FramerComponents';
import TextReveal from './ui/TextReveal';
import { ContainerScroll } from './ui/container-scroll-animation';
import { FloatingPaths } from './ui/background-paths';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-background border-b border-border/30 overflow-hidden py-12 md:py-20 flex flex-col justify-center items-center">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Tech Dot Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(225,29,29,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0" />
                
                {/* Glowing backdrop elements */}
                <div className="absolute top-0 right-[-10%] w-[80vw] h-[80vw] bg-neon/5 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
                
                {/* Floating Paths Background */}
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Main Scroll Container */}
            <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContainerScroll
                    titleComponent={
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
                            <div className="flex justify-center mb-6">
                                <Badge variant="neon">
                                    Web Developer Portfolio
                                </Badge>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-foreground">
                                <span className="block mb-2 text-3xl md:text-5xl">
                                    <TextReveal text="Hi, my name is Omar" splitType="letter" delay={0.2} />
                                </span>

                                <div className="text-neon relative inline-block text-3xl sm:text-5xl md:text-6xl min-h-[1.4em] w-full mt-2 mb-2 overflow-visible font-display">
                                    <ProTextType
                                        text={['SCALABLE SYSTEMS', 'REVENUE FOCUSED', 'HIGH PERFORMANCE']}
                                        typingSpeed={70}
                                        deletingSpeed={30}
                                        pauseDuration={2500}
                                        loop={true}
                                        cursorCharacterPreset="|"
                                        cursorBlinkDuration={0.8}
                                        startOnVisible={true}
                                        className="text-neon font-black drop-shadow-[0_0_12px_rgba(225,29,29,0.35)]"
                                    />
                                </div>

                                <span className="block mt-2 text-3xl md:text-5xl">
                                    <TextReveal text="I build high-performance web applications." splitType="letter" delay={0.6} />
                                </span>
                            </h1>

                            <div className="text-base md:text-lg text-muted mb-8 max-w-lg mx-auto leading-relaxed font-medium">
                                <TextReveal text="Welcome to my portfolio. I engineer custom web systems, high-speed interfaces, and secure local integrations. Here is what I've built:" splitType="word" delay={1} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <SwipeLettersButton
                                    label="Book a 15-min call"
                                    link="https://calendly.com/omarmubaidincs/30min"
                                    defaultState={{ bgColor: '#E11D1D', borderColor: 'transparent', textColor: '#FFFFFF' }}
                                    hoverState={{ bgColor: '#B91616', borderColor: '#E11D1D', textColor: '#FFFFFF' }}
                                    font={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={28}
                                    paddingY={14}
                                />
                                <SwipeLettersButton
                                    label="View selected work"
                                    link="#projects"
                                    defaultState={{ bgColor: 'transparent', borderColor: 'rgba(255,255,255,0.15)', textColor: '#FFFFFF' }}
                                    hoverState={{ bgColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.3)', textColor: '#FFFFFF' }}
                                    font={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={28}
                                    paddingY={14}
                                    marginClass="ml-0 sm:ml-4"
                                />
                            </motion.div>
                        </div>
                    }
                >
                    {/* Premium Dashboard Frame inside the 3D scroll card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-4 bg-zinc-950 text-white p-4">
                        {/* Left Side: Portrait Image */}
                        <div className="relative h-48 md:h-full w-full rounded-xl overflow-hidden border border-white/10 bg-background/50">
                            <Image
                                src="/omarmub.webp"
                                alt="Omar Mubaidin"
                                fill
                                priority
                                className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                                sizes="(max-width: 768px) 460px, (max-width: 1024px) 540px, 620px"
                            />
                        </div>

                        {/* Right Side: Professional Terminal / Console info */}
                        <div className="flex flex-col justify-between p-4 md:p-6 bg-zinc-900/40 backdrop-blur-md rounded-xl border border-white/5 font-mono text-[11px] md:text-xs leading-relaxed text-left">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span className="text-neon font-bold font-sans text-sm tracking-wider">MUBX CONSOLE v2.6</span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] uppercase tracking-widest text-green-500">ACTIVE</span>
                                    </span>
                                </div>
                                <div className="space-y-2 text-zinc-300">
                                    <p className="text-zinc-500">&gt; cat profile.json</p>
                                    <p>&gt; <span className="text-neon">name:</span> "Omar Mubaidin"</p>
                                    <p>&gt; <span className="text-neon">role:</span> "Full Stack Web Engineer"</p>
                                    <p>&gt; <span className="text-neon">location:</span> "Amman, Jordan"</p>
                                    <p>&gt; <span className="text-neon">stack:</span> ["Next.js", "React", "TypeScript", "TailwindCSS"]</p>
                                    <p>&gt; <span className="text-neon">focus:</span> "High-Performance Systems & Local Payment Integrations"</p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-4 space-y-2 text-[10px] md:text-xs">
                                <div className="flex justify-between text-zinc-400">
                                    <span>[ LIGHTHOUSE SCORE ]</span>
                                    <span className="text-neon font-bold">100/100</span>
                                </div>
                                <div className="flex justify-between text-zinc-400">
                                    <span>[ AVERAGE LOAD TIME ]</span>
                                    <span className="text-neon font-bold">&lt; 1.5s ON 4G</span>
                                </div>
                                <div className="flex justify-between text-zinc-400">
                                    <span>[ SYSTEM DESIGN ]</span>
                                    <span className="text-neon font-bold">CS ENGINEERED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerScroll>
            </div>
        </section>
    );
}
