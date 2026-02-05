
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Globe, Phone, Instagram, ArrowRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Omar Mubaidin | Links',
    description: 'Connect with Omar Mubaidin - Full Stack Web Developer. Social links, portfolio, and contact info.',
};

export default function LinksPage() {
    const links = [
        {
            name: "Portfolio Website",
            url: "https://www.mubx.dev/",
            icon: Globe,
            sub: "My main work & case studies",
            borderColor: "group-hover:border-neon/50",
            iconBg: "group-hover:bg-neon group-hover:text-black"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/962780090453",
            icon: Phone,
            sub: "+962 780 090 453",
            borderColor: "group-hover:border-[#25D366]/50",
            iconBg: "group-hover:bg-[#25D366] group-hover:text-white"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/mubx.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: Instagram,
            sub: "@mubx.dev",
            borderColor: "group-hover:border-[#E1306C]/50",
            iconBg: "group-hover:bg-gradient-to-r group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#FCAF45] group-hover:text-white"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omarmubaidin",
            icon: Linkedin,
            sub: "Professional Profile",
            borderColor: "group-hover:border-[#0077b5]/50",
            iconBg: "group-hover:bg-[#0077b5] group-hover:text-white"
        },
        {
            name: "GitHub",
            url: "https://github.com/Omarmubx7",
            icon: Github,
            sub: "Open Source Code",
            borderColor: "group-hover:border-white/50",
            iconBg: "group-hover:bg-white group-hover:text-black"
        },
        {
            name: "Email Me",
            url: "mailto:mubxdev@proton.me",
            icon: Mail,
            sub: "mubxdev@proton.me",
            borderColor: "group-hover:border-neon/50",
            iconBg: "group-hover:bg-neon group-hover:text-black"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans bg-gradient-to-b from-black via-zinc-900 to-zinc-400">

            <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center gap-6 py-12">

                {/* 1. Logo (Chrome Style) */}
                <div className="relative w-48 h-48 mb-2">
                    <Image
                        src="/mubxlogo.png"
                        alt="MUBX Logo"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* 2. Brand Identity */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-black tracking-tight text-neutral-900 drop-shadow-sm">
                        mubx.dev
                    </h1>

                    <div className="text-sm md:text-base font-medium text-neutral-800 max-w-xs mx-auto leading-relaxed space-y-2">
                        <p>
                            Mubx | Web Developer & UI Specialist
                        </p>
                        <p className="opacity-90">
                            Building the modern web.
                        </p>
                        <p className="font-semibold">
                            ⚡ Next.js • TypeScript • Tailwind
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            🛠️ Freelance
                        </p>
                    </div>
                </div>

                {/* 3. Social Icons (Minimal Row) */}
                <div className="flex items-center justify-center gap-6 mt-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full border-2 border-neutral-800/20 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-800 transition-all duration-300 transform hover:scale-110"
                            aria-label={link.name}
                        >
                            <link.icon className="w-7 h-7" />
                        </a>
                    ))}
                </div>

                {/* 4. Footer */}
                <footer className="mt-8">
                    <Link
                        href="mailto:mubxdev@proton.me"
                        className="text-[10px] text-neutral-700 hover:text-black transition-colors uppercase tracking-[0.2em] font-bold"
                    >
                        mubxdev@proton.me
                    </Link>
                </footer>
            </div>
        </main>
    );
}
