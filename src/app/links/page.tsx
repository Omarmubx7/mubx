
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
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black -z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent -z-10" />

            {/* Logo Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden -z-5">
                <Image
                    src="/icon.png"
                    alt="Background Logo"
                    width={800}
                    height={800}
                    className="object-contain animate-pulse-slow"
                />
            </div>

            <div className="w-full max-w-[640px] mx-auto z-10 flex flex-col gap-12 py-12">

                {/* 1. Identity Block */}
                <header className="text-center flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black ring-2 ring-neon/20 shadow-2xl mb-2">
                        <Image
                            src="/icon.png"
                            alt="Omar Mubaidin"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-none">
                            OMAR MUBAIDIN
                        </h1>
                        <p className="text-base font-medium text-white/50">
                            Full Stack Web Developer 🇯🇴
                        </p>
                    </div>
                    <p className="text-lg text-white/90 max-w-md leading-relaxed">
                        I build <span className="text-neon font-bold">fast, secure web systems</span> for Jordanian brands.
                    </p>
                </header>

                {/* 2. Links Section */}
                <nav className="flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 ${link.borderColor}`}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`p-3 rounded-xl bg-white/5 text-white/70 transition-colors duration-300 ${link.iconBg}`}>
                                    <link.icon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold text-base text-white group-hover:text-white transition-colors">{link.name}</span>
                                    <span className="text-sm text-white/40 font-medium group-hover:text-white/60 transition-colors">{link.sub}</span>
                                </div>
                            </div>
                            <div className="pr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 text-white/50" />
                            </div>
                        </a>
                    ))}
                </nav>

                {/* 3. Footer */}
                <footer className="text-center mt-auto pt-8">
                    <Link
                        href="mailto:mubxdev@proton.me"
                        className="text-[10px] md:text-xs text-white/20 hover:text-white/50 transition-colors uppercase tracking-[0.2em] font-bold"
                    >
                        Built by MUBX — mubxdev@proton.me
                    </Link>
                </footer>
            </div>
        </main>
    );
}
