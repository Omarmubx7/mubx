import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';
import { Locale } from '@/lib/dictionaries';

export const metadata: Metadata = {
    title: 'Portfolio & Case Studies | MUBX',
    description: 'Explore our latest web development projects. From high-conversion e-commerce sites to custom web applications.',
    alternates: {
        canonical: `${siteConfig.url}/projects`
    }
};

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function ProjectsPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

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
                        "name": "MUBX Projects Portfolio",
                        "provider": {
                            "@type": "Person",
                            "name": "Omar Mubaidin | عمر مبيضين",
                            "url": siteConfig.url
                        }
                    }} />
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
