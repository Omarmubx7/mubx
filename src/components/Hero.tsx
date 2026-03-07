'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Badge from './ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { ProTextType, SwipeLettersButton } from './framer/FramerComponents';
import TextReveal from './ui/TextReveal';

export default function Hero() {
    const { t, language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress for this specific section.
    // Container is 200vh. Viewport is 100vh.
    // "start start" -> top of container at top of viewport (0vh scrolled)
    // "end end" -> bottom of container at bottom of viewport (100vh scrolled)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    // Parallax Layering exactly as requested:
    // 3-5 background layers moving at different speeds (0.2x, 0.5x, 0.8x)
    // Because they are in a sticky container, normal scroll would be -100vh.
    // We move them relative to that.
    const yBg0_2x = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);
    const yBg0_5x = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);
    const yBg0_8x = useTransform(scrollYProgress, [0, 1], ["0vh", "-80vh"]);
    
    // Foreground elements pinned, but scale down slightly like shed.design
    const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-background">
            {/* Sticky Pinning Container - Pins for 100vh duration */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start lg:items-center pt-32 pb-20">
                
                {/* Parallax Layer 1: 0.2x Speed (Deepest) */}
                <motion.div style={{ y: yBg0_2x }} className="absolute inset-0 z-0 pointer-events-none will-change-transform flex items-center justify-center">
                    <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-neon/5 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
                </motion.div>

                {/* Parallax Layer 2: 0.5x Speed (Midground) */}
                <motion.div style={{ y: yBg0_5x }} className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center will-change-transform opacity-30">
                    <div className="w-[120vw] h-[120vh] border border-white/5 rounded-full border-dashed animate-spin-slow" />
                </motion.div>

                {/* Parallax Layer 3: 0.8x Speed (Foreground Background) */}
                <motion.div style={{ y: yBg0_8x }} className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center will-change-transform opacity-40">
                    <div className="absolute w-[80vw] h-[80vw] border border-neon/10 rounded-full border-dashed animate-spin-slow reverse" />
                    {/* Add some floating tech particles that move fast */}
                    <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-neon rounded-full blur-[2px]" />
                    <div className="absolute bottom-[30%] right-[25%] w-3 h-3 bg-cyan rounded-full blur-[2px]" />
                </motion.div>

                {/* Foreground Main Content (Pinned, 0x scroll, scaling down) */}
                <motion.div 
                    style={{ scale: scaleContent, opacity: opacityContent }} 
                    className="container mx-auto px-6 md:px-12 relative z-10 w-full will-change-transform"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Column: Text Content */}
                        <div className="flex-1 text-center lg:text-left rtl:lg:text-right order-1 lg:order-0">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex justify-center lg:justify-start rtl:lg:justify-end mb-6"
                            >
                                <Badge variant="neon">
                                    {t.hero.badge}
                                </Badge>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-foreground uppercase">
                                <span className="block mb-2">
                                    <TextReveal text={t.hero.titleStart} splitType="letter" delay={0.2} />
                                </span>

                                <div className="text-neon relative inline-block text-5xl md:text-7xl min-h-[1.1em] mt-2 mb-2">
                                    <ProTextType
                                        text={language === 'en'
                                            ? ['SCALABLE SYSTEMS', 'REVENUE FOCUSED', 'HIGH PERFORMANCE']
                                            : ['أنظمة قابلة للتوسع', 'تركز على العائدات', 'أداء عالي']}
                                        typingSpeed={70}
                                        deletingSpeed={30}
                                        pauseDuration={2500}
                                        loop={true}
                                        cursorCharacterPreset="|"
                                        cursorBlinkDuration={0.8}
                                        startOnVisible={true}
                                        className="text-neon font-black"
                                    />
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>

                                <br />
                                <span className="block mt-2">
                                    <TextReveal text={t.hero.titleEnd} splitType="letter" delay={0.6} />
                                </span>
                            </h1>

                            <div className="text-lg md:text-xl text-muted mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                                <TextReveal text={t.hero.description} splitType="word" delay={1.0} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-end items-center"
                            >
                                <SwipeLettersButton
                                    label={t.hero.ctaPrimary}
                                    link="https://calendly.com/omarmubaidincs/30min"
                                    defaultState={{ bgColor: '#D71C1C', borderColor: 'transparent', textColor: '#000000' }}
                                    hoverState={{ bgColor: '#B91616', borderColor: '#D71C1C', textColor: '#FFFFFF' }}
                                    font={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={32}
                                    paddingY={16}
                                />
                                <SwipeLettersButton
                                    label={t.hero.ctaSecondary}
                                    link={getHref('#projects')}
                                    defaultState={{ bgColor: '#1A1A1A', borderColor: '#333333', textColor: '#FFFFFF' }}
                                    hoverState={{ bgColor: '#2D2D2D', borderColor: '#515151', textColor: '#FFFFFF' }}
                                    font={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={32}
                                    paddingY={16}
                                />
                            </motion.div>
                        </div>

                        {/* Right Column: Hero Visual with Staggered Reveal */}
                        <div className="flex-1 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center group order-2 lg:order-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="relative w-64 md:w-80 lg:w-[400px] aspect-[10/14] rounded-3xl overflow-hidden border-2 border-neon/30 shadow-[0_0_50px_rgba(215,28,28,0.2)] will-change-transform"
                            >
                                <Image
                                    src="/omarmubpic.webp"
                                    alt="Omar Mubaidin"
                                    fill
                                    priority
                                    className="object-cover object-top transition-all duration-700 scale-105 group-hover:scale-110"
                                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                                />
                            </motion.div>
                            
                            {/* Floating Accent Elements */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-24 h-24 bg-neon/20 blur-2xl rounded-full pointer-events-none" 
                            />
                            <motion.div 
                                animate={{ y: [0, 20, 0] }} 
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/20 blur-2xl rounded-full pointer-events-none" 
                            />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
