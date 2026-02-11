'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center z-50">
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-neon/50" />

            <div className="flex flex-col gap-6">
                <SocialLink href="https://github.com/Omarmubx7" icon={<Github size={20} />} label="GitHub Profile" />
                <SocialLink href="https://www.linkedin.com/in/omarmubaidin" icon={<Linkedin size={20} />} label="LinkedIn Profile" />
                <SocialLink href="https://instagram.com/omarmubx" icon={<Instagram size={20} />} label="Instagram Profile" />
            </div>

            <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-neon/50" />
        </div>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-neon hover:translate-x-1 transition-all duration-300 transform"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
