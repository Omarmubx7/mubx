import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Services from '@/components/Services';
import { siteConfig } from '@/config/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Suspense } from 'react';

import { dictionary, Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const lang = (resolvedSearchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    const dictMeta = dictionary[lang].seo.services;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'web development services Jordan', 'عمان', 'تطوير مواقع الأردن',
            'MUBX services', 'Omar Mubaidin services', 'website pricing Jordan',
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
            locale: lang === 'ar' ? 'ar_QA' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            images: [siteConfig.ogImage],
        }
    };
}

export default async function ServicesPage(props: Readonly<Props>) {
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
                        "name": lang === 'ar' ? "خدمات MUBX لتطوير الويب" : "MUBX Web Development Services",
                        "description": dictionary[lang].hero.description,
                        "provider": {
                            "@type": "Person",
                            "@id": "https://mubx.dev/#person",
                            "name": lang === 'ar' ? "عمر مبيضين" : "Omar Mubaidin",
                            "url": siteConfig.url
                        },
                        "areaServed": [
                            { "@type": "Country", "name": lang === 'ar' ? "الأردن" : "Jordan" },
                            { "@type": "Country", "name": lang === 'ar' ? "السعودية" : "Saudi Arabia" },
                            { "@type": "Country", "name": lang === 'ar' ? "الإمارات" : "United Arab Emirates" }
                        ],
                        "serviceType": [
                            lang === 'ar' ? "تطوير صفحات الهبوط" : "Landing Page Development",
                            lang === 'ar' ? "تطوير المتاجر الإلكترونية" : "E-commerce Development",
                            lang === 'ar' ? "تطوير أنظمة الويب المخصصة" : "Custom Web System Development",
                            lang === 'ar' ? "تكامل زين كاش" : "Zain Cash Integration",
                            lang === 'ar' ? "تكامل كليك" : "CliQ Payment Integration",
                            lang === 'ar' ? "تحسين محركات البحث SEO" : "SEO Optimization",
                            lang === 'ar' ? "تطوير لوحات التحكم" : "Dashboard Development",
                            lang === 'ar' ? "استشارات تقنية" : "Technical Consulting"
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
                                "name": lang === 'ar' ? "من هو عمر مبيضين وما هي MUBX؟" : "Who is Omar Mubaidin and what is MUBX?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": lang === 'ar' ? "عمر مبيضين مؤسس MUBX - استشارات ويب تركز على الأرباح في عمان، الأردن. خبير في Next.js، التجارة الإلكترونية، بوابات الدفع (زين كاش وكليك)، وSEO عالي الأداء." : "Omar Mubaidin (عمر مبيضين) is a full-stack web developer and technical consultant based in Amman, Jordan. He is the founder of MUBX, a revenue-focused web consultancy specializing in Next.js, e-commerce, local payment integration (Zain Cash, CliQ), and high-performance SEO for startups in Jordan and the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": lang === 'ar' ? "ما هي خدمات تطوير الويب التي تقدمها MUBX في الأردن؟" : "What web development services does MUBX offer in Jordan?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": lang === 'ar' ? "تقدم MUBX صفحات هبوط، متاجر إلكترونية مع دفع محلي، وأنظمة ويب مخصصة، وتحسين أداء المواقع وSEO تقني للشركات الناشئة." : "MUBX offers landing pages, full e-commerce stores with Zain Cash and CliQ payment integration, custom web systems with admin dashboards, performance optimization (Core Web Vitals), technical SEO, and ongoing technical consulting for startups in Amman and across the Middle East."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": lang === 'ar' ? "هل تقوم MUBX بدمج مدفوعات زين كاش وكليك؟" : "Does MUBX integrate Zain Cash and CliQ payments?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": lang === 'ar' ? "نعم. تتخصص MUBX في دمج بوابات الدفع الأردنية بما في ذلك زين كاش وكليك في منصات التجارة الإلكترونية المخصصة." : "Yes. MUBX specializes in integrating Jordanian payment gateways including Zain Cash and CliQ into custom e-commerce platforms, ensuring local customers can pay seamlessly using methods they trust."
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
