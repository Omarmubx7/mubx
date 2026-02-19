'use client';

import Badge from './ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { ProTextType, SwipeLettersButton } from './framer/FramerComponents';



export default function Hero() {
    const { t, language } = useLanguage();

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    return (
        <section className="relative min-h-screen flex items-start lg:items-center pt-32 pb-20 overflow-hidden bg-background transition-colors duration-300">
            {/* Background Spotlights */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-neon/5 blur-[80px] -z-10 rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-cyan/5 blur-[80px] -z-10 rounded-full mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    {/* Left Column: Text Content */}
                    <div
                        className="flex-1 text-center lg:text-left rtl:lg:text-right order-1 lg:order-0"
                    >
                        <div className="flex justify-center lg:justify-start rtl:lg:justify-end mb-6">
                            <Badge variant="neon">
                                {t.hero.badge}
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-foreground uppercase">
                            <span className="block animate-hero-fade-up-immediate">
                                {t.hero.titleStart}
                            </span>

                            <div className="text-neon relative inline-block text-5xl md:text-7xl animate-hero-fade-up delay-hero-2 min-h-[1.1em]">
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
                            <span className="block animate-hero-fade-up">
                                {t.hero.titleEnd}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-end animate-hero-fade-up delay-hero-4 items-center"
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
                        </div>
                    </div>

                    {/* Right Column: Hero Image / Visual */}
                    <div
                        className="flex-1 relative h-100 lg:h-150 w-full flex items-center justify-center group order-2 lg:order-0 animate-hero-slide-in"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-neon/10 to-transparent rounded-full blur-[60px] animate-pulse-slow" />

                        {/* 
                            3D Hero Scene Removed for Performance 
                            The glow above maintains visual interest without the heavy canvas load.
                        */}
                    </div>

                </div>
            </div>
        </section >
    );
}
