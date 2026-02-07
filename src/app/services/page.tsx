import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Services from '@/components/Services';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Web Development Services in Amman | MUBX',
    description: 'Expert web development in Amman: E-commerce, landing pages, and custom web apps. High-performance solutions by MUBX.',
    alternates: {
        canonical: `${siteConfig.url}/services`
    }
};

export default function ServicesPage() {
    return (
        <LanguageProvider initialLocale="en">
            <main className="min-h-screen bg-background selection:bg-neon selection:text-black">
                <Navbar />
                <div className="pt-24">
                    <Services />
                </div>

                {/* Service Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Web Development",
                            "provider": {
                                "@type": "Person",
                                "name": "Omar Mubaidin",
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
                        })
                    }}
                />
                <Footer />
            </main>
        </LanguageProvider>
    );
}
