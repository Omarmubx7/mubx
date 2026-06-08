import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';
import { dictionary, Locale } from '@/lib/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
    const lang: Locale = 'en';
    const dictMeta = dictionary[lang].seo.projects;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        alternates: {
            canonical: `${siteConfig.url}/projects`
        },
        openGraph: {
            title: dictMeta.title,
            description: dictMeta.description,
            url: `${siteConfig.url}/projects`,
            siteName: 'MUBX',
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'MUBX Projects — Omar Mubaidin' }],
            locale: 'en_US',
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

export default async function ProjectsPage() {
    const lang: Locale = 'en';

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-background selection:bg-neon selection:text-black">
                    <Navbar />
                    <div className="pt-24">
                        <Projects />
                        <Testimonials />
                    </div>

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "MUBX Selected Projects",
                        "provider": {
                            "@type": "Person",
                            "name": "Omar Mubaidin",
                            "url": siteConfig.url
                        }
                    }} />

                </main>
            </LanguageProvider>
        </Suspense>
    );
}
