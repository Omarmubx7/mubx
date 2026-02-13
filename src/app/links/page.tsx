
import { Metadata } from 'next';
import Image from 'next/image';
import { LanguageProvider } from '@/context/LanguageContext';

import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Github, Linkedin, Globe, Phone, Instagram, ArrowRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Links | Omar Mubaidin',
    description: 'Connect with Omar Mubaidin - Full Stack Web Developer. Social links, portfolio, and contact info.',
};

import { Locale } from '@/lib/dictionaries';
import { Suspense } from 'react';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function LinksPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const workLinks = [
        {
            name: "Portfolio Website",
            url: "https://www.mubx.dev/",
            icon: Globe,
            sub: "View my latest work & case studies",
            primary: true
        },
        {
            name: "Email Me",
            url: "mailto:mubxdev@proton.me",
            icon: Mail,
            sub: "mubxdev@proton.me",
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/962780090453",
            icon: Phone,
            sub: "Chat directly for project inquiries",
        }
    ];

    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/mubx.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: Instagram,
            sub: "Behind the scenes & design tips",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omarmubaidin",
            icon: Linkedin,
            sub: "Professional network",
        },
        {
            name: "GitHub",
            url: "https://github.com/Omarmubx7",
            icon: Github,
            sub: "Check my open source code",

        },
        {
            name: "GitHub Student Pack",
            url: "https://education.github.com/pack",
            icon: Github,
            sub: "Free access to the best developer tools",
        }
    ];

    const LinkCard = ({ link, isPrimary = false, delay = 0 }: { link: any, isPrimary?: boolean, delay?: number }) => (
        <ScrollReveal direction="up" delay={delay} className="w-full">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border backdrop-blur-md ${isPrimary
                    ? "bg-foreground text-background border-foreground hover:opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
                    : "bg-foreground/[0.03] border-foreground/10 hover:border-neon/50 hover:bg-foreground/[0.06] text-foreground"
                    }`}
            >
                <div className="flex items-center gap-4 md:gap-5">
                    <div className={`p-3 rounded-xl transition-all duration-500 ${isPrimary
                        ? "bg-background/20 text-background"
                        : "bg-foreground/5 text-foreground/70 group-hover:text-neon group-hover:scale-110"
                        }`}>
                        <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex flex-col text-left gap-0.5 md:gap-1">
                        <span className={`font-bold text-base md:text-lg tracking-tight ${isPrimary ? "text-background" : "text-foreground group-hover:text-neon transition-colors"
                            }`}>
                            {link.name}
                        </span>
                        <span className={`text-xs md:text-sm font-medium ${isPrimary ? "text-background/70" : "text-muted group-hover:text-foreground/80 transition-colors"
                            }`}>
                            {link.sub}
                        </span>
                    </div>
                </div>

                <div className={`pr-1 md:pr-2 transition-all duration-500 ${isPrimary
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${isPrimary ? "text-background" : "text-neon"}`} />
                </div>
            </a>
        </ScrollReveal>
    );

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="relative flex flex-col min-h-screen">
                    {/* Background Texture - Theme Aware */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-[0.05] dark:opacity-[0.1]" />

                    <div className="flex-grow pt-24 pb-20 md:pt-32">
                        <div className="container mx-auto px-6 max-w-2xl">

                            {/* Hero Section */}
                            <header className="text-center flex flex-col items-center mb-16">
                                <ScrollReveal direction="up" delay={100} className="mb-8">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-neon to-[#FF8E8E] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative w-28 h-28 md:w-36 md:h-36">
                                            <Image
                                                src="/icon.png"
                                                alt="MUBX Profile"
                                                fill
                                                className="object-cover rounded-full border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="up" delay={200}>
                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase leading-none">
                                        Omar <span className="text-foreground/30">/</span> Mubaidin
                                    </h1>
                                </ScrollReveal>

                                <ScrollReveal direction="up" delay={300}>
                                    <p className="text-lg md:text-xl text-muted font-medium max-w-md mx-auto leading-relaxed mb-8">
                                        Building the modern web. <span className="text-foreground">Web systems for brands that want to scale.</span>
                                    </p>
                                </ScrollReveal>

                                <ScrollReveal direction="up" delay={400} className="flex flex-wrap justify-center gap-2">
                                    <Badge variant="outline">⚡ NEXT.JS</Badge>
                                    <Badge variant="outline">TS TYPESCRIPT</Badge>
                                    <Badge variant="outline">TAILWIND</Badge>
                                    <Badge variant="neon">FREELANCE</Badge>
                                </ScrollReveal>
                            </header>

                            {/* Links List - Single Column */}
                            <div className="flex flex-col gap-12">

                                {/* Work Section */}
                                <section className="flex flex-col gap-4">
                                    <ScrollReveal direction="up" delay={500} className="flex items-center gap-3 mb-2 px-2">
                                        <div className="h-[1px] bg-neon w-8" />
                                        <h2 className="text-xs font-bold text-neon uppercase tracking-widest">Work & Contact</h2>
                                    </ScrollReveal>
                                    <div className="flex flex-col gap-3">
                                        {workLinks.map((link, i) => (
                                            <LinkCard key={link.name} link={link} isPrimary={link.primary} delay={600 + (i * 100)} />
                                        ))}
                                    </div>
                                </section>

                                {/* Social Section */}
                                <section className="flex flex-col gap-4">
                                    <ScrollReveal direction="up" delay={800} className="flex items-center gap-3 mb-2 px-2">
                                        <div className="h-[1px] bg-foreground/20 w-8" />
                                        <h2 className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Social & Code</h2>
                                    </ScrollReveal>
                                    <div className="flex flex-col gap-3">
                                        {socialLinks.map((link, i) => (
                                            <LinkCard key={link.name} link={link} delay={900 + (i * 100)} />
                                        ))}
                                    </div>
                                </section>

                            </div>

                            {/* Footer Credit */}
                            <ScrollReveal direction="up" delay={1300} className="mt-20 text-center">
                                <p className="text-sm font-bold tracking-widest uppercase opacity-20">
                                    MUBX <span className="mx-2">/</span> EST 2026
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                </main>
            </LanguageProvider>
        </Suspense>
    );
}
