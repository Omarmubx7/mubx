
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Download,
    GithubIcon,
    Globe,
    InstagramIcon,
    LinkedinIcon,
    Mail,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';

import { LanguageProvider } from '@/context/LanguageContext';

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

type PillLink = {
    label: string;
    href: string;
    icon: LucideIcon;
    external?: boolean;
    download?: string;
    accent?: boolean;
};

const pillLinks: PillLink[] = [
    { label: 'Website', href: '/', icon: Globe },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/mubx.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        icon: InstagramIcon,
        external: true,
    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omarmubaidin', icon: LinkedinIcon, external: true },
    { label: 'GitHub', href: 'https://github.com/Omarmubx7', icon: GithubIcon, external: true },
    { label: 'Email', href: 'mailto:mubxdev@proton.me', icon: Mail },
];

function PillButton({ link }: Readonly<{ link: PillLink }>) {
    const { label, href, icon: Icon, external, download, accent } = link;

    const content = (
        <>
            <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    accent ? 'bg-neon/15 text-neon' : 'bg-foreground/8 text-foreground/80 group-hover:bg-neon/12 group-hover:text-neon'
                }`}
            >
                <Icon className="h-4 w-4" />
            </span>
            <span
                className={`flex-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    accent ? 'text-neon' : 'text-foreground group-hover:text-neon'
                }`}
            >
                {label}
            </span>
            <ArrowRight
                className={`h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-1 ${
                    accent ? 'text-neon' : 'text-muted group-hover:text-neon'
                }`}
            />
        </>
    );

    const className = `group flex w-full items-center gap-3.5 rounded-full border px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none ${
        accent
            ? 'border-neon/40 bg-neon/8 shadow-[0_0_25px_rgba(255,46,46,0.12)] hover:border-neon hover:bg-neon/12'
            : 'border-foreground/10 bg-foreground/[0.04] hover:border-neon/50 hover:bg-neon/[0.06]'
    }`;

    if (href.startsWith('/')) {
        return (
            <Link href={href} aria-label={label} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <a
            href={href}
            aria-label={label}
            {...(download ? { download } : {})}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={className}
        >
            {content}
        </a>
    );
}

export default async function LinksPage() {
    const lang: Locale = 'en';

    const cvLink: PillLink = {
        label: 'CV',
        href: '/cv.pdf',
        icon: Download,
        download: 'Omar-Mubaidin-Resume.pdf',
        accent: true,
    };

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
                    {/* Subtle red glow behind photo */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/8 blur-[110px]"
                    />

                    {/* Photo */}
                    <div className="relative mb-7">
                        <div aria-hidden className="absolute -inset-4 bg-neon/10 blur-2xl" />
                        <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(255,46,46,0.18)] md:h-48 md:w-40">
                            <Image
                                src="/omarmub.webp"
                                alt="Omar Mubaidin"
                                fill
                                priority
                                sizes="(max-width: 768px) 128px, 160px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Name + title */}
                    <h1 className="text-center text-3xl font-black uppercase tracking-tighter md:text-4xl">
                        Omar Mubaidin
                    </h1>
                    <p className="mt-2.5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-neon md:text-xs">
                        Full-Stack Developer &amp; AI Engineer
                    </p>

                    {/* Pill buttons */}
                    <nav
                        aria-label="Links"
                        className="mt-11 flex w-full max-w-sm flex-col gap-3.5"
                    >
                        {pillLinks.map((link) => (
                            <PillButton key={link.label} link={link} />
                        ))}
                        <PillButton link={cvLink} />
                    </nav>
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
