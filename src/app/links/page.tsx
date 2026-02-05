
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Globe, Phone, Instagram, ArrowRight, Mail, Briefcase, Code, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Omar Mubaidin | Links',
    description: 'Connect with Omar Mubaidin - Full Stack Web Developer. Social links, portfolio, and contact info.',
};

export default function LinksPage() {
    // Group 1: High Intent / Work
    const workLinks = [
        {
            name: "Portfolio Website",
            url: "https://www.mubx.dev/",
            icon: Globe,
            sub: "View my latest work & case studies",
            primary: true // Special styling for main CTA
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
            className={`group relative flex items-center justify-between p-4 md:p-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] ${isPrimary
                ? "bg-white text-black border-2 border-white hover:bg-neutral-200 hover:border-neutral-200 shadow-xl"
                : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isPrimary ? "bg-black/5 text-black" : "bg-white/5 text-white/70 group-hover:text-white transition-colors"}`}>
                    <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col text-left">
                    <span className={`font-bold text-sm md:text-base ${isPrimary ? "text-black" : "text-neutral-200 group-hover:text-white"}`}>
                        {link.name}
                    </span>
                    {link.sub && (
                        <span className={`text-xs md:text-sm font-medium ${isPrimary ? "text-black/60" : "text-neutral-500 group-hover:text-neutral-400"}`}>
                            {link.sub}
                        </span>
                    )}
                </div>
            </div>
            <div className={`pr-1 transition-transform duration-300 ${isPrimary ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}>
                <ArrowRight className={`w-5 h-5 ${isPrimary ? "text-black" : "text-white/50"}`} />
            </div>
        </a>
    );

    return (
        <main className="min-h-screen flex flex-col items-center p-6 relative overflow-x-hidden font-sans bg-gradient-to-b from-black via-zinc-950 to-neutral-900 text-white selection:bg-white/20">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

            <div className="w-full max-w-[600px] mx-auto z-10 flex flex-col gap-10 py-12 md:py-20">

                {/* 1. Identity Header */}
                <header className="text-center flex flex-col items-center gap-6">
                    {/* Logo & Chip */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                            <Image
                                src="/mubxlogo.png"
                                alt="MUBX Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 tracking-wider">
                            mubx.dev
                        </span>
                    </div>

                    {/* Main Headings */}
                    <div className="space-y-3 max-w-lg">
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                            Mubx | Web Developer & UI Specialist
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 font-medium">
                            Building the modern web.
                        </p>
                    </div>

                    {/* Pitch & Stack */}
                    <div className="space-y-4">
                        <p className="text-sm md:text-base text-neutral-300 max-w-sm mx-auto leading-relaxed">
                            Freelance web systems for brands that want to scale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-neutral-500">
                            <span className="bg-white/5 px-2 py-1 rounded">⚡ Next.js</span>
                            <span className="bg-white/5 px-2 py-1 rounded">TS TypeScript</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Tailwind</span>
                            <span className="bg-white/5 px-2 py-1 rounded">FreeLance</span>
                        </div>
                    </div>
                </header>

                {/* 2. Link Groups */}
                <div className="flex flex-col gap-8 w-full">

                    {/* Work Section */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest px-1">
                            <Briefcase className="w-3 h-3" />
                            <span>Work & Contact</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {workLinks.map(link => <LinkCard key={link.name} link={link} isPrimary={link.primary} />)}
                        </div>
                    </section>

                    {/* Social Section */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest px-1">
                            <Code className="w-3 h-3" />
                            <span>Social & Code</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map(link => <LinkCard key={link.name} link={link} />)}
                        </div>
                    </section>

                </div>

                {/* 3. Footer */}
                <footer className="mt-8 text-center border-t border-white/5 pt-8">
                    <Link
                        href="mailto:mubxdev@proton.me"
                        className="text-[10px] text-neutral-600 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold"
                    >
                        mubxdev@proton.me
                    </Link>
                </footer>
            </div>
        </main>
    );
}
