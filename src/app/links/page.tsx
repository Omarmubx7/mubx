
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Globe, Phone, Instagram, ArrowRight } from 'lucide-react';

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
            bg: "hover:bg-neon hover:text-black"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/962780090453",
            icon: Phone,
            sub: "+962 780 090 453",
            bg: "hover:bg-[#25D366] hover:text-white"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/mubx.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: Instagram,
            sub: "@mubx.dev",
            bg: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/omarmubaidin",
            icon: Linkedin,
            sub: "Professional Profile",
            bg: "hover:bg-[#0077b5] hover:text-white"
        },
        {
            name: "GitHub",
            url: "https://github.com/Omarmubx7",
            icon: Github,
            sub: "Open Source Code",
            bg: "hover:bg-white/20 hover:text-white"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon/10 via-black to-black -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0" />

            <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center gap-8">
                {/* Profile Section */}
                <div className="text-center flex flex-col items-center gap-4">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-neon/50 shadow-[0_0_30px_rgba(255,30,30,0.3)]">
                        <Image
                            src="/icon.png"
                            alt="Omar Mubaidin"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight mb-1">Omar Mubaidin</h1>
                        <p className="text-muted font-medium text-sm">Full Stack Web Developer 🇯🇴</p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="w-full flex flex-col gap-4">
                    {links.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] ${link.bg}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="p-2 rounded-lg bg-black/20 group-hover:bg-black/10 transition-colors">
                                    <link.icon className="w-6 h-6" />
                                </span>
                                <div className="text-left">
                                    <h3 className="font-bold text-sm">{link.name}</h3>
                                    <p className="text-xs opacity-60 font-mono">{link.sub}</p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted hover:text-white transition-colors uppercase tracking-widest font-bold opacity-50 hover:opacity-100">
                        Built by MUBX
                    </Link>
                </footer>
            </div>
        </main>
    );
}
