import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Next.js Mobile Performance Guide: Fixing LCP & CLS | Omar Mubaidin — MUBX',
    description: 'A deep dive by Omar Mubaidin into optimizing Next.js 15 for mobile devices. How I improved LCP from 2.5s to 0.8s on 4G networks.',
    authors: [{ name: 'Omar Mubaidin', url: siteConfig.url }],
    keywords: ['Next.js performance', 'LCP optimization', 'CLS fix', 'Core Web Vitals', 'Omar Mubaidin', 'MUBX', 'mobile performance'],
    alternates: {
        canonical: `${siteConfig.url}/blog/nextjs-mobile-performance`
    },
    openGraph: {
        type: 'article',
        title: 'Next.js Mobile Performance Guide: Fixing LCP & CLS',
        description: 'A deep dive into optimizing Next.js 15 for mobile devices. How I improved LCP from 2.5s to 0.8s on 4G networks.',
        url: `${siteConfig.url}/blog/nextjs-mobile-performance`,
        siteName: 'MUBX',
        authors: ['Omar Mubaidin'],
        publishedTime: '2026-02-06',
        images: [siteConfig.ogImage],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Next.js Mobile Performance Guide | MUBX',
        description: 'How I improved LCP from 2.5s to 0.8s on 4G networks.',
        creator: '@omarmubx',
        images: [siteConfig.ogImage],
    },
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

import { Suspense } from 'react';

export default async function BlogPost(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-black selection:bg-neon selection:text-black">
                    <Navbar />

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Next.js Mobile Performance Guide: Fixing LCP & CLS",
                        "description": "A deep dive into optimizing Next.js 15 for mobile devices. How I improved LCP from 2.5s to 0.8s on 4G networks.",
                        "datePublished": "2026-02-06",
                        "dateModified": "2026-02-06",
                        "url": `${siteConfig.url}/blog/nextjs-mobile-performance`,
                        "author": {
                            "@type": "Person",
                            "@id": "https://mubx.dev/#person",
                            "name": "Omar Mubaidin",
                            "url": siteConfig.url,
                        },
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://mubx.dev/#organization",
                            "name": "MUBX",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteConfig.url}/mubxlogoloader.svg`
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `${siteConfig.url}/blog/nextjs-mobile-performance`
                        },
                        "articleSection": "Performance",
                        "inLanguage": "en",
                    }} />

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteConfig.url}/blog` },
                            { "@type": "ListItem", "position": 3, "name": "Next.js Mobile Performance Guide", "item": `${siteConfig.url}/blog/nextjs-mobile-performance` }
                        ]
                    }} />

                    <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                        <Badge variant="outline" className="mb-6">Technical Deep Dive</Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Optimizing <span className="text-neon">Mobile Performance</span> in Next.js
                        </h1>

                        <div className="flex items-center gap-4 text-muted mb-12 pb-12 border-b border-white/10">
                            <span>By Omar Mubaidin</span>
                            <span>•</span>
                            <span>10 min read</span>
                            <span>•</span>
                            <span>Feb 6, 2026</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="lead text-2xl text-white/90 mb-8">
                                Most developers test on MacBook Pros with Fiber internet. Real users are on mid-range Androids with 4G. Here is how to fix your Largest Contentful Paint (LCP) for the real world.
                            </p>

                            <h2>The &quot;Works on My Machine&quot; Problem</h2>
                            <p>
                                I recently audited a client site that felt &quot;instant&quot; on desktop. When we ran it through PageSpeed Insights, the mobile score was <strong>45/100</strong>.
                            </p>
                            <p>
                                The culprit? A massive hero background image that was 4MB on mobile, and a &quot;hydration&quot; delay that blocked the main thread.
                            </p>

                            <h3>1. The `sizes` Prop is Not Optional</h3>
                            <p>
                                If you use `next/image` without a `sizes` prop, Next.js doesn&apos;t know how big the image will be. It might serve a 1080p desktop image to a 300px mobile screen.
                            </p>
                            <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto">
                                <code>{`<Image 
    src="/hero.png" 
    fill 
    // THIS is the magic line
    sizes="(max-width: 768px) 100vw, 50vw" 
    priority
    />`}</code>
                            </pre>

                            <h3>2. Font Optimization</h3>
                            <p>
                                Custom fonts are heavy. In Next.js 15, `next/font` automatically optimizes Google Fonts. But if you are loading custom OTF/TTF files, make sure to use `display: swap` so text is visible immediately.
                            </p>

                            <h3>3. Removing &quot;Scroll Jank&quot; (CLS)</h3>
                            <p>
                                Cumulative Layout Shift (CLS) happens when elements jump around as the page loads. The biggest fix? Reserve space for your images and videos.
                            </p>
                            <p>
                                Always define an `aspect-ratio` on your image containers.
                            </p>

                            <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Need a Performance Audit?</h3>
                                <p className="mb-4">I help startups hit 100/100 Core Web Vitals to improve SEO and conversion rates.</p>
                                <Link href="/#contact" className="text-neon font-bold hover:underline">Get a Free Check →</Link>
                            </div>
                        </div>
                    </article>
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
