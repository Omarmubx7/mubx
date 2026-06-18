import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Services from '@/components/Services';
import { siteConfig } from '@/config/seo';
import dynamic from 'next/dynamic';

import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FloatingPaths } from '@/components/ui/background-paths';
import Badge from '@/components/ui/Badge';

const Process = dynamic(() => import('@/components/Process'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

import { dictionary, Locale } from '@/lib/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
    const lang: Locale = 'en';
    const dictMeta = dictionary[lang].seo.services;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'web development services Jordan', 'MUBX services', 'Omar Mubaidin services', 'website pricing Jordan',
            'e-commerce development Amman', 'Zain Cash integration', 'CliQ payment Jordan'
        ],
        alternates: {
            canonical: `${siteConfig.url}/services`
        },
        openGraph: {
            title: dictMeta.title,
            description: dictMeta.description,
            url: `${siteConfig.url}/services`,
            siteName: 'MUBX',
            images: [siteConfig.ogImage],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            images: [siteConfig.ogImage],
        }
    };
}

export default async function ServicesPage() {
    const lang: Locale = 'en';
    const t = dictionary[lang];

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-black relative overflow-hidden pb-24">
                    {/* Floating Paths Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <FloatingPaths position={1} />
                        <FloatingPaths position={-1} />
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/[0.01] blur-[150px] rounded-full" />
                    </div>


                    
                    {/* Standalone Page Hero / Header consistent with project detail pages */}
                    <div className="relative z-10 pt-32 pb-4">
                        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white mb-8 transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                {t.nav.backToHome}
                            </Link>

                            <div className="max-w-4xl mb-8">
                                <Badge variant="neon" className="mb-4">Premium Development Tiers</Badge>
                                <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-4">
                                    {t.services.title} <span className="text-neon">{t.services.titleHighlight}</span>
                                </h1>
                                <p className="text-muted text-lg max-w-2xl leading-relaxed">
                                    {t.services.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-0">
                        <Services />
                    </div>

                    <div className="relative z-10 pt-0">
                        <Process />
                    </div>

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "MUBX Web Development Services",
                        "description": dictionary[lang].hero.description,
                        "provider": {
                            "@type": "Person",
                            "@id": "https://mubx.dev/#person",
                            "name": "Omar Mubaidin",
                            "url": siteConfig.url
                        },
                        "areaServed": [
                            { "@type": "Country", "name": "Jordan" },
                            { "@type": "Country", "name": "Saudi Arabia" },
                            { "@type": "Country", "name": "United Arab Emirates" }
                        ],
                        "serviceType": [
                            "Landing Page Development",
                            "E-commerce Development",
                            "Custom Web System Development",
                            "Zain Cash Integration",
                            "CliQ Payment Integration",
                            "SEO Optimization",
                            "Dashboard Development",
                            "Technical Consulting"
                        ],
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": dictionary[lang].services.packages.landing.title,
                                "description": dictionary[lang].services.packages.landing.desc,
                                "price": "300",
                                "priceCurrency": "JOD",
                            },
                            {
                                "@type": "Offer",
                                "name": dictionary[lang].services.packages.business.title,
                                "description": dictionary[lang].services.packages.business.desc,
                                "price": "500",
                                "priceCurrency": "JOD",
                            },
                            {
                                "@type": "Offer",
                                "name": dictionary[lang].services.packages.system.title,
                                "description": dictionary[lang].services.packages.system.desc,
                                "price": "700",
                                "priceCurrency": "JOD",
                            }
                        ]
                    }} />

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Who is Omar Mubaidin and what is MUBX?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Omar Mubaidin is a freelance full-stack web developer based in Amman, Jordan. He runs MUBX, specializing in Next.js, e-commerce, local payment integration (Zain Cash, CliQ), and high-performance SEO for startups in Jordan and the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What web development services does MUBX offer in Jordan?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "I build landing pages, full e-commerce stores with Zain Cash and CliQ payment integration, custom web systems with admin dashboards, performance optimization (Core Web Vitals), technical SEO, and more for startups in Amman and across the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does MUBX integrate Zain Cash and CliQ payments?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. I specialize in integrating Jordanian payment gateways including Zain Cash and CliQ into custom e-commerce platforms, ensuring local customers can pay seamlessly using methods they trust."
                                }
                            }
                        ]
                    }} />


                </main>
            </LanguageProvider>
        </Suspense>
    );
}
