import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import BlogContent from '@/components/BlogContent';
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { dictionary, Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string; tag?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const lang = (resolvedSearchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    const dictMeta = dictionary[lang].seo.blog;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        alternates: {
            canonical: `${siteConfig.url}/blog`,
            languages: {
                'en': `${siteConfig.url}/blog`,
                'ar': `${siteConfig.url}/blog?lang=ar`,
            },
        },
        openGraph: {
            title: dictMeta.title,
            description: dictMeta.description,
            url: `${siteConfig.url}/blog`,
            siteName: 'MUBX',
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'MUBX Blog — Omar Mubaidin' }],
            locale: lang === 'ar' ? 'ar_QA' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            creator: '@omarmubx',
            images: [siteConfig.ogImage],
        },
        robots: { index: true, follow: true },
    };
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
