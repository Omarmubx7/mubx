import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'Next.js vs WordPress: Which is Right for Your Business? | MUBX',
    description: 'Why modern businesses are moving from WordPress to Next.js. Performance, security, and scalability comparison for 2026.',
    alternates: {
        canonical: `${siteConfig.url}/blog/nextjs-vs-wordpress`
    }
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
                    <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                        <Badge variant="outline" className="mb-6">Tech Comparison</Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Next.js vs <span className="text-neon">WordPress</span> in 2026
                        </h1>

                        <div className="flex items-center gap-4 text-muted mb-12 pb-12 border-b border-white/10">
                            <span>By Omar Mubaidin</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="lead text-2xl text-white/90 mb-8">
                                WordPress powers 40% of the web, but it wasn&apos;t built for the modern interactive web. Next.js is the standard for high-performance applications.
                            </p>

                            <h2>Key Differences</h2>
                            <ul>
                                <li><strong>Speed:</strong> Next.js is static-first (instant). WordPress is database-driven (slower).</li>
                                <li><strong>Security:</strong> WordPress plugins are the #1 attack vector. Next.js has no plugins to hack.</li>
                                <li><strong>Scalability:</strong> Next.js runs on the edge. WordPress requires beefy servers.</li>
                            </ul>

                            <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Is your WordPress site slow?</h3>
                                <p className="mb-4">I allow businesses to migrate to Next.js without losing their SEO rankings.</p>
                                <a href="/#contact" className="text-neon font-bold hover:underline">Get a Migration Audit →</a>
                            </div>
                        </div>
                    </article>
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
