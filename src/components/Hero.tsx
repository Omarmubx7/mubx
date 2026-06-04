'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Badge from './ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { ProTextType, SwipeLettersButton } from './framer/FramerComponents';
import TextReveal from './ui/TextReveal';
import CardTilt from './ui/CardTilt';

export default function Hero() {
    const { t, language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress for this specific section.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const getHref = (path: string) => {
        if (language === 'en') {
            return path;
        }
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}lang=${language}`;
    };

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 30,
        damping: 18,
        restDelta: 0.001
    });

    // Parallax Layering: Dampened ranges for ultra-smooth movement
    const yBg0_2x = useTransform(smoothProgress, [0, 1], ["0vh", "-10vh"]);
    const yBg0_5x = useTransform(smoothProgress, [0, 1], ["0vh", "-20vh"]);
    const yBg0_8x = useTransform(smoothProgress, [0, 1], ["0vh", "-30vh"]);
    
    // Foreground elements pinned, but scale down slightly
    const scaleContent = useTransform(smoothProgress, [0, 1], [1, 0.95]);
    const opacityContent = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-background border-b border-border/30">
            {/* Sticky Pinning Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start lg:items-center pt-32 pb-20 z-10">
                {/* Background Tech Dot Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(225,29,29,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0" />
                
                {/* Parallax Layer 1: 0.2x Speed (Deepest) */}
                <motion.div style={{ y: yBg0_2x }} className="absolute inset-0 z-0 pointer-events-none will-change-transform flex items-center justify-center">
                    <div className="absolute top-0 right-[-10%] w-200 h-200 bg-neon/5 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-200 h-200 bg-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
                </motion.div>

                {/* Parallax Layer 2: 0.5x Speed (Midground) */}
                <motion.div style={{ y: yBg0_5x }} className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center will-change-transform opacity-30">
                    <div className="w-[120vw] h-[120vh] border border-white/3 rounded-full border-dashed animate-spin-slow" />
                </motion.div>

                {/* Parallax Layer 3: 0.8x Speed (Foreground Background) */}
                <motion.div style={{ y: yBg0_8x }} className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center will-change-transform opacity-40">
                    <div className="absolute w-[80vw] h-[80vw] border border-neon/5 rounded-full border-dashed animate-spin-slow reverse" />
                    <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-neon rounded-full blur-[2px]" />
                    <div className="absolute bottom-[30%] right-[25%] w-3 h-3 bg-cyan rounded-full blur-[2px]" />
                </motion.div>

                {/* Foreground Main Content */}
                <motion.div 
                    style={{ scale: scaleContent, opacity: opacityContent }} 
                    className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 will-change-transform"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative items-center">
                        {/* Vertical Grid Line Separator */}
                        <div className="hidden absolute left-1/2 top-[-20%] bottom-[-20%] w-[1px] bg-border/20 -translate-x-1/2 pointer-events-none z-0" />

                        {/* Left Column: Text Content */}
                        <div className="flex flex-col text-center lg:text-left rtl:lg:text-right order-1 lg:order-none z-10">
                            <div className="flex justify-center lg:justify-start rtl:lg:justify-end mb-6">
                                <Badge variant="neon">
                                    {t.hero.badge}
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-foreground uppercase">
                                <span className="block mb-2 text-3xl md:text-5xl">
                                    <TextReveal text={t.hero.titleStart} splitType="letter" delay={0.2} />
                                </span>

                                <div className="text-neon relative inline-block text-4xl md:text-6xl min-h-[1.2em] w-full mt-2 mb-2 overflow-hidden font-display">
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
                                        className="text-neon font-black drop-shadow-[0_0_12px_rgba(225,29,29,0.35)]"
                                    />
                                </div>

                                <br />
                                <span className="block mt-2 text-3xl md:text-5xl">
                                    <TextReveal text={t.hero.titleEnd} splitType="letter" delay={0.6} />
                                </span>
                            </h1>

                            <div className="text-base md:text-lg text-muted mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                                <TextReveal text={t.hero.description} splitType="word" delay={1} />
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
                                    font={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={28}
                                    paddingY={14}
                                />
                                <SwipeLettersButton
                                    label={t.hero.ctaSecondary}
                                    link={getHref('#projects')}
                                    defaultState={{ bgColor: '#1A1A1A', borderColor: '#333333', textColor: '#FFFFFF' }}
                                    hoverState={{ bgColor: '#2D2D2D', borderColor: '#515151', textColor: '#FFFFFF' }}
                                    font={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.4px' }}
                                    paddingX={28}
                                    paddingY={14}
                                    marginClass="ml-0 sm:ml-4 rtl:ml-0 rtl:sm:mr-4"
                                />
                            </motion.div>
                        </div>

                        {/* Right Column: Framed Editorial Portrait */}
                        <div className="flex justify-center items-center order-2 lg:order-none z-10 lg:col-span-1">
                            <CardTilt className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[420px] xl:max-w-[480px]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                    className="relative p-4 rounded-none bg-card/10 border border-border/30 backdrop-blur-md w-full hover:border-neon/30 transition-all duration-500 group"
                                >
                                    {/* Glowing backdrop element inside the card */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-none" />

                                    {/* Image Frame */}
                                    <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden border border-border/20 bg-background/50">
                                        <Image
                                            src="/omarmub.webp"
                                            alt="Omar Mubaidin"
                                            fill
                                            priority
                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out pointer-events-none"
                                            sizes="(max-width: 768px) 460px, (max-width: 1024px) 540px, 620px"
                                        />
                                    </div>

                                    {/* Frame Metadata Label */}
                                    <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest pt-3 border-t border-border/20 relative z-10">
                                        <span>OMAR MUBAIDIN // PORTRAIT</span>
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                                            PORTRAIT // AMMAN, JORDAN
                                        </span>
                                    </div>
                                </motion.div>
                            </CardTilt>
                        </div>

                    </div>
                </motion.div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none hidden lg:flex">
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.2em] animate-pulse">
                        {language === 'en' ? 'Scroll to explore' : 'مرر للأسفل'}
                    </span>
                    <div className="w-[1px] h-12 bg-linear-to-b from-neon to-transparent relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-4 bg-neon"
                            animate={{
                                y: [0, 48, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
