'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GithubStatus from '@/components/GithubStatus';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/dictionaries';

const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false });
const About = dynamic(() => import('@/components/About'));
const TechStack = dynamic(() => import('@/components/TechStack'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

const TrustedBy = dynamic(() => import('@/components/TrustedBy'), {
    loading: () => <div className="h-28 w-full animate-pulse bg-muted/20" />,
});

const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), { ssr: false });

function HomeMain() {
    const { t, language } = useLanguage();
    const [showCanvas, setShowCanvas] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowCanvas(true), 3500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const sections = ['hero', 'projects', 'about', 'tech-stack', 'journey', 'contact'];
        const observers = sections.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: '-20% 0px -60% 0px'
                }
            );
            observer.observe(el);
            return { observer, el };
        });

        return () => {
            observers.forEach(obs => {
                if (obs) obs.observer.unobserve(obs.el);
            });
        };
    }, []);

    const navLinks = [
        { id: 'hero', name: language === 'en' ? 'Welcome' : 'الرئيسية' },
        { id: 'projects', name: t.nav.projects },
        { id: 'about', name: t.nav.about },
        { id: 'tech-stack', name: t.about.techStack },
        { id: 'journey', name: language === 'en' ? 'Journey' : 'مسيرتي' },
        { id: 'contact', name: t.nav.contact }
    ];

    return (
        <>
            <Navbar />
            {showCanvas && <StarsCanvas />}

            <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 border-collapse relative">
                {/* Sticky Left Sidebar (Desktop only) */}
                <aside className="hidden lg:flex lg:col-span-4 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-border/30 bg-background flex-col justify-between p-8 lg:p-12 xl:p-16 select-none overflow-y-auto z-40">
                    <div className="space-y-8 xl:space-y-12">
                        {/* Profile/Logo Block */}
                        <div className="space-y-4">
                            <Link href={getHref('/')} className="inline-block relative h-12 w-24 md:h-14 md:w-28 transition-transform hover:scale-105 active:scale-95">
                                <Image
                                    src="/mubxlogoloader.svg"
                                    alt="MUBX Logo"
                                    fill
                                    className="object-contain dark:invert-0 invert"
                                    priority
                                />
                            </Link>
                            <div>
                                <div className="text-2xl font-black text-foreground tracking-tight uppercase">
                                    {t.about.name}
                                </div>
                                <span className="bg-neon text-white px-2 py-0.5 text-[9px] font-bold uppercase font-mono tracking-wider inline-block mt-1.5">
                                    {t.hero.badge}
                                </span>
                            </div>
                        </div>

                        {/* Personality-Driven Bio (short summary) */}
                        <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                            {language === 'en' 
                              ? 'Most web developers build slow websites that look like templates, ignore local payment systems (Zain Cash/CliQ), and fail to convert visitors. I engineer custom web applications that load in milliseconds, integrate seamless payments, and turn traffic into actual revenue.'
                              : 'يبني معظم مطوري الويب مواقع بطيئة تبدو كالقوالب الجاهزة، ويتجاهلون أنظمة الدفع المحلية (زين كاش/كليك)، ويفشلون في تحويل الزوار إلى عملاء. أنا أقوم بهندسة تطبيقات ويب مخصصة تعمل في أيجاد من الثانية، وتتكامل بسلاسة مع بوابات الدفع، وتحول الزيارات إلى إيرادات فعلية.'
                            }
                        </p>

                        {/* Live Activity Widget */}
                        <GithubStatus />

                        {/* Sticky Sidebar Navigation Shortcuts */}
                        <nav className="flex flex-col gap-3.5 font-mono text-[10px] tracking-wider uppercase">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`flex items-center gap-3 transition-all duration-300 ${
                                            isActive ? 'text-neon font-black translate-x-1 rtl:-translate-x-1' : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                                            isActive ? 'bg-neon scale-125' : 'bg-muted-foreground/30'
                                        }`} />
                                        <span>{link.name}</span>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Bottom Controls & Socials */}
                    <div className="space-y-6 pt-6 border-t border-border/20">
                        {/* View Resume Prominent CTA Button */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 border border-border/30 hover:border-neon/50 text-foreground hover:text-neon text-xs font-bold rounded-none flex items-center justify-center gap-2 bg-card/10 transition-colors uppercase tracking-wider font-mono"
                        >
                            <Download className="w-3.5 h-3.5" />
                            {t.nav.resume}
                        </a>

                        {/* Toggles and Socials Row */}
                        <div className="flex items-center justify-between gap-4">
                            {/* Toggles */}
                            <div className="flex gap-2">
                                <ThemeToggle />
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="https://github.com/Omarmubx7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/omarmubaidin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Scrollable Right Panel */}
                <main className="lg:col-span-8 bg-background flex flex-col min-h-screen">
                    <Suspense fallback={null}>
                        <div id="hero">
                            <Hero />
                        </div>
                        <TrustedBy />
                        <div id="projects">
                            <Projects />
                        </div>
                        <div id="about">
                            <About />
                        </div>
                        <div id="tech-stack">
                            <TechStack />
                        </div>
                        <div id="journey">
                            <Timeline />
                        </div>

                        <div id="contact">
                            <Contact />
                        </div>
                        <div>
                            <StickyCTA />
                        </div>
                    </Suspense>
                </main>
            </div>
        </>
    );
}

export default function HomeClient({ lang }: Readonly<{ lang: Locale }>) {
    return (
        <LanguageProvider initialLocale={lang}>
            <HomeMain />
        </LanguageProvider>
    );
}
