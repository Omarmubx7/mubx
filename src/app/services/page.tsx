import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Services from '@/components/Services';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Web Development Services in Amman | MUBX',
    description: 'Expert web development in Amman: E-commerce, landing pages, and custom web apps. High-performance solutions by MUBX.',
    alternates: {
        canonical: `${siteConfig.url}/services`
    }
};

import { Locale } from '@/lib/dictionaries';

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
                        "serviceType": "Web Development",
                        "provider": {
                            "@type": "Person",
                            "name": "Omar Mubaidin | عمر مبيضين",
                            "url": siteConfig.url
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Amman"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Web Design & Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Landing Page Design"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Web Applications"
                                    }
                                }
                            ]
                        }
                    }} />
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
