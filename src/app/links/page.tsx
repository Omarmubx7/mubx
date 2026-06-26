
import { Metadata } from 'next';
import Image from 'next/image';
import { LanguageProvider } from '@/context/LanguageContext';

import Badge from '@/components/ui/Badge';
import { GithubIcon, LinkedinIcon, Globe, Phone, InstagramIcon, ArrowRight, Mail, Mic, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { dictionary, Locale } from '@/lib/dictionaries';
import { siteConfig } from '@/config/seo';

export async function generateMetadata(): Promise<Metadata> {
    const lang: Locale = 'en';
    const dictMeta = dictionary[lang].seo.links;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'Omar Mubaidin links', 'MUBX links',
            'Omar Mubaidin social media', 'Omar Mubaidin contact', 'Amman', 'Jordan'
        ],
        alternates: {
            canonical: `${siteConfig.url}/links`,
        },
        openGraph: {
            title: dictMeta.title,
            description: dictMeta.description,
            url: `${siteConfig.url}/links`,
            siteName: 'MUBX',
            type: 'profile',
            images: [siteConfig.ogImage],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            creator: '@omarmubx',
            images: [siteConfig.ogImage],
        },
    };
}

import { Suspense } from 'react';

type LinkItem = {
    name: string;
    url: string;
    icon: LucideIcon;
    sub: string;
    primary?: boolean;
}

type LinkCardProps = {
    link: LinkItem;
    isPrimary?: boolean;
}

function LinkCard({ link, isPrimary = false }: Readonly<LinkCardProps>) {
    return (
        <div className="w-full">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border backdrop-blur-md ${isPrimary
                    ? "bg-foreground text-background border-foreground hover:opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
                    : "bg-foreground/3 border-foreground/10 hover:border-neon/50 hover:bg-foreground/6 text-foreground"
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
        </div>
    );
}

export default async function LinksPage() {
    const lang: Locale = 'en';

    const workLinks: LinkItem[] = [
        {
            name: "Email Me",
            url: "mailto:mubxdev@proton.me",
            icon: Mail,
            sub: "mubxdev@proton.me",
            primary: false
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/962780090453",
            icon: Phone,
            sub: "Chat directly for project inquiries",
            primary: false
        }
    ];

    const latestProjectsLinks: LinkItem[] = [
        {
            name: "QadumyWeb",
            url: "https://qadumyweb.vercel.app/",
            icon: Globe,
            sub: "Ahmad Al-Qaddomy — Marketer & Content Creator",
            primary: true
        },
        {
            name: "Jordan FA",
            url: "https://jordan-jfa.vercel.app/",
            icon: Globe,
            sub: "Jordan National Team's historic World Cup 2026 debut",
        },
        {
            name: "MUBXAI",
            url: "https://ai.mubx.dev/",
            icon: Globe,
            sub: "HTU Course Tracker & GPA Calculator",
        },
        {
            name: "MUBXbot",
            url: "https://bot.mubx.dev/",
            icon: Bot,
            sub: "AI assistant by MUBX",
        },
        {
            name: "Men Only Show",
            url: "https://menonlyshow-gray.vercel.app/",
            icon: Mic,
            sub: "Arab World's First Men's Talk Show",
        },
        {
            name: "Portfolio Website",
            url: "https://www.mubx.dev/",
            icon: Globe,
            sub: "View my latest work & case studies",
        }
    ];

    const socialLinks: LinkItem[] = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/mubx.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: InstagramIcon,
            sub: "Behind the scenes & design tips",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omarmubaidin",
            icon: LinkedinIcon,
            sub: "Professional network",
        },
        {
            name: "GitHub",
            url: "https://github.com/Omarmubx7",
            icon: GithubIcon,
            sub: "Check my open source code",

        },
        {
            name: "GitHub Student Pack",
            url: "https://education.github.com/pack",
            icon: GithubIcon,
            sub: "Free access to the best developer tools",
        }
    ];

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="relative flex flex-col min-h-screen">
                    {/* Background Texture - Theme Aware */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-[0.05] dark:opacity-[0.1]" />

                    <div className="grow pt-24 pb-20 md:pt-32">
                        <div className="container mx-auto px-6 max-w-2xl">

                            {/* Hero Section */}
                            <header className="text-center flex flex-col items-center mb-16">
                                <div className="mb-8 w-full flex justify-center">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-linear-to-r from-neon to-[#FF8E8E] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative w-28 h-28 md:w-36 md:h-36">
                                            <Image
                                                src="/mubxlogoloader.svg"
                                                alt="MUBX Profile"
                                                fill
                                                className="object-contain p-2 bg-black/50 rounded-full border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase leading-none">
                                        Omar <span className="text-foreground/30">/</span> Mubaidin
                                    </h1>
                                </div>

                                <div className="w-full">
                                    <p className="text-lg md:text-xl text-muted font-medium max-w-md mx-auto leading-relaxed mb-8">
                                        Building the modern web. <span className="text-foreground">Web systems for brands that want to scale.</span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 w-full">
                                    <Badge variant="outline">⚡ NEXT.JS</Badge>
                                    <Badge variant="outline">TS TYPESCRIPT</Badge>
                                    <Badge variant="outline">TAILWIND</Badge>
                                    <Badge variant="neon">FREELANCE</Badge>
                                </div>
                            </header>

                            {/* Links List - Single Column */}
                            <div className="flex flex-col gap-12">

                                {/* Work Section */}
                                <section className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 mb-2 px-2 w-full">
                                        <div className="h-px bg-neon w-8" />
                                        <h2 className="text-xs font-bold text-neon uppercase tracking-widest">Work & Contact</h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {workLinks.map((link) => (
                                            <LinkCard key={link.name} link={link} isPrimary={link.primary} />
                                        ))}
                                    </div>
                                </section>

                                {/* Latest Projects Section */}
                                <section className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 mb-2 px-2 w-full">
                                        <div className="h-px bg-neon w-8" />
                                        <h2 className="text-xs font-bold text-neon uppercase tracking-widest">My Latest Projects</h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {latestProjectsLinks.map((link) => (
                                            <LinkCard key={link.name} link={link} />
                                        ))}
                                    </div>
                                </section>

                                {/* Social Section */}
                                <section className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 mb-2 px-2 w-full">
                                        <div className="h-px bg-foreground/20 w-8" />
                                        <h2 className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Social & Code</h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {socialLinks.map((link) => (
                                            <LinkCard key={link.name} link={link} />
                                        ))}
                                    </div>
                                </section>

                            </div>

                        </div>
                    </div>

                </main>
            </LanguageProvider>
        </Suspense>
    );
}
