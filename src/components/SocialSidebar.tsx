'use client';

import { Github as GithubIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center z-50">
            <div className="w-px h-24 bg-linear-to-b from-transparent to-neon/50" />

            <div className="flex flex-col gap-6">
                <SocialLink href="https://github.com/Omarmubx7" icon={<GithubIcon size={20} />} label="GitHub Profile" />
                <SocialLink href="https://www.linkedin.com/in/omarmubaidin" icon={<LinkedinIcon size={20} />} label="LinkedIn Profile" />
                <SocialLink href="https://instagram.com/omarmubx" icon={<InstagramIcon size={20} />} label="Instagram Profile" />
            </div>

            <div className="w-px h-24 bg-linear-to-t from-transparent to-neon/50" />
        </div>
    );
}

function SocialLink({ href, icon, label }: Readonly<{ href: string; icon: React.ReactNode; label: string }>) {
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
