import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Services from '@/components/Services';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';
import { Locale } from '@/lib/dictionaries';

export const metadata: Metadata = {
    title: 'Services & Pricing | MUBX',
    description: 'Professional web development services in Jordan. From landing pages to custom web systems.',
    alternates: {
        canonical: `${siteConfig.url}/services`
    }
};

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function ServicesPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-background selection:bg-neon selection:text-black">
                    <Navbar />
                    <div className="pt-24">
                        <Services />
                    </div>

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "MUBX Web Development Services",
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
