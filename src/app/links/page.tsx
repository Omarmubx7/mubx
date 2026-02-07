
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';

import Badge from '@/components/ui/Badge';
import { Github, Linkedin, Globe, Phone, Instagram, ArrowRight, Mail, Briefcase, Code } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Links | Omar Mubaidin',
    description: 'Connect with Omar Mubaidin - Full Stack Web Developer. Social links, portfolio, and contact info.',
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function LinksPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    // Group 1: High Intent / Work
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

    // Group 2: Social & Code
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
        }
    ];

    const LinkCard = ({ link, isPrimary = false }: { link: any, isPrimary?: boolean }) => (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-between p-6 rounded-3xl transition-all duration-300 border backdrop-blur-sm ${isPrimary
                ? "bg-white text-black border-white hover:bg-neutral-200 hover:border-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "bg-white/5 border-white/10 hover:border-neon/50 hover:bg-white/[0.07] text-white"
                }`}
        >
            <div className="flex items-center gap-5">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${isPrimary
                    ? "bg-black/10 text-black"
                    : "bg-white/5 text-white/70 group-hover:text-neon"
                    }`}>
                    <link.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left gap-1">
                    <span className={`font-bold text-lg ${isPrimary ? "text-black" : "text-white group-hover:text-neon transition-colors"
                        }`}>
                        {link.name}
                    </span>
                    <span className={`text-sm font-medium ${isPrimary ? "text-black/60" : "text-muted group-hover:text-white/80 transition-colors"
                        }`}>
                        {link.sub}
                    </span>
                </div>
            </div>

            <div className={`pr-2 transition-all duration-300 ${isPrimary
                ? "translate-x-0 opacity-100"
                : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`}>
                <ArrowRight className={`w-5 h-5 ${isPrimary ? "text-black" : "text-neon"}`} />
            </div>
        </a>
    );

    return (
        <LanguageProvider initialLocale={lang}>
            <main className="relative flex flex-col min-h-screen bg-black">
                {/* Background Texture (Consistent with Home) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-20" />



                <div className="flex-grow pt-32 pb-20">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">

                        {/* Hero Section */}
                        <header className="text-center flex flex-col items-center mb-20">
                            <div className="mb-6 relative w-32 h-32 md:w-40 md:h-40">
                                <Image
                                    src="/icon.png"
                                    alt="MUBX Profile"
                                    fill
                                    className="object-cover rounded-full border-2 border-white/10 shadow-2xl"
                                    priority
                                />
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
                                Omar <span className="text-white/40">/</span> Mubaidin
                            </h1>

                            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
                                Building the modern web. <span className="text-muted">Freelance web systems for brands that want to scale.</span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                <Badge variant="outline">⚡ NEXT.JS</Badge>
                                <Badge variant="outline">TS TYPESCRIPT</Badge>
                                <Badge variant="outline">TAILWIND</Badge>
                                <Badge variant="neon">FREELANCE</Badge>
                            </div>
                        </header>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

                            {/* Work Column */}
                            <section className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-[1px] bg-neon w-8" />
                                    <h2 className="text-sm font-bold text-neon uppercase tracking-widest">Work & Contact</h2>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {workLinks.map(link => <LinkCard key={link.name} link={link} isPrimary={link.primary} />)}
                                </div>
                            </section>

                            {/* Social Column */}
                            <section className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-[1px] bg-white/20 w-8" />
                                    <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest">Social & Code</h2>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {socialLinks.map(link => <LinkCard key={link.name} link={link} />)}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

            </main>
        </LanguageProvider>
    );
}
