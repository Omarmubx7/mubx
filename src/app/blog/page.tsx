import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import BlogContent from '@/components/BlogContent';

import { siteConfig } from '@/config/seo';

export const metadata = {
    title: 'Web Dev Lab & Articles | MUBX - Omar Mubaidin',
    description: 'Deep dives on Next.js, E-commerce in Jordan, and High-Performance Web Dev. The lab where I document my process.',
    alternates: {
        canonical: `${siteConfig.url}/blog`
    }
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string; tag?: string }>
}

export default async function BlogPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
                    <Navbar />
                    <Suspense fallback={<div className="pt-32 pb-24 container mx-auto px-6 md:px-12">Loading...</div>}>
                        <BlogContent />
                    </Suspense>
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
