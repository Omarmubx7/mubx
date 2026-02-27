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
    title: 'Web Development Services & Pricing in Jordan | Omar Mubaidin — MUBX',
    description: 'Professional web development services by Omar Mubaidin (MUBX) in Amman, Jordan. Landing pages, e-commerce, custom web systems, Zain Cash integration, and SEO optimization.',
    keywords: ['web development services Jordan', 'MUBX services', 'Omar Mubaidin services', 'website pricing Jordan', 'e-commerce development Amman'],
    alternates: {
        canonical: `${siteConfig.url}/services`
    },
    openGraph: {
        title: 'Web Development Services & Pricing | MUBX',
        description: 'Professional web development services in Amman, Jordan. From landing pages to custom web systems.',
        url: `${siteConfig.url}/services`,
        siteName: 'MUBX',
        images: [siteConfig.ogImage],
    },
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
                        "description": "Revenue-focused web development, e-commerce, and technical consulting services for startups in Jordan and the Middle East.",
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
                                "name": "Landing Page",
                                "description": "High-performance landing page with SEO optimization",
                                "priceCurrency": "JOD",
                            },
                            {
                                "@type": "Offer",
                                "name": "E-commerce Store",
                                "description": "Full e-commerce platform with Zain Cash and CliQ payment integration",
                                "priceCurrency": "JOD",
                            },
                            {
                                "@type": "Offer",
                                "name": "Custom Web System",
                                "description": "Bespoke web application with admin dashboard and API",
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
                                    "text": "Omar Mubaidin (عمر مبيضين) is a full-stack web developer and technical consultant based in Amman, Jordan. He is the founder of MUBX, a revenue-focused web consultancy specializing in Next.js, e-commerce, local payment integration (Zain Cash, CliQ), and high-performance SEO for startups in Jordan and the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What web development services does MUBX offer in Jordan?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "MUBX offers landing pages, full e-commerce stores with Zain Cash and CliQ payment integration, custom web systems with admin dashboards, performance optimization (Core Web Vitals), technical SEO, and ongoing technical consulting for startups in Amman and across the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does MUBX integrate Zain Cash and CliQ payments?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. MUBX specializes in integrating Jordanian payment gateways including Zain Cash and CliQ into custom e-commerce platforms, ensuring local customers can pay seamlessly using methods they trust."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What technologies does Omar Mubaidin use?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Omar Mubaidin (MUBX) builds with Next.js 15, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Framer Motion, and Docker. He focuses on high-performance, SEO-optimized web applications with sub-second load times."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I hire Omar Mubaidin for a web project?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can book a free 30-minute consultation at calendly.com/omarmubaidincs/30min, email mubxdev@proton.me, or WhatsApp +962780090453. Omar is currently accepting new projects for startups and businesses in Jordan and remote clients worldwide."
                                }
                            }
                        ]
                    }} />

                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
