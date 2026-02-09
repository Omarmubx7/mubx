import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/seo';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'E-commerce Website Development in Amman, Jordan | MUBX',
    description: 'Custom e-commerce solutions for Jordanian businesses. Build fast, secure online stores accepting Zain Cash & CliQ. Own your data and stop paying monthly fees.',
    alternates: {
        canonical: `${siteConfig.url}/services/ecommerce`
    }
};

import { Locale, dictionary } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

import { Suspense } from 'react';

export default async function EcommercePage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    // Get localized content
    const t = dictionary[lang].servicesPage.ecommerce;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-black">
                    <Navbar />

                    {/* Hero Section */}
                    <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            {t.titleStart} <span className="text-neon">{t.titleHighlight}</span> {t.titleEnd}
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
                            {t.subtitleStart} <strong>{t.subtitleHighlight}</strong> {t.subtitleEnd}
                        </p>
                        <Link href="/#contact" className="inline-block px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:scale-105 transition-transform">
                            {t.cta}
                        </Link>
                    </section>

                    {/* Content / Benefits Section */}
                    <section className="py-20 bg-white/5 border-y border-white/5">
                        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">{t.benefitsTitle}</h2>
                                <ul className="space-y-4 text-lg text-muted">
                                    {t.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="text-neon">{benefit.highlight}</span> {benefit.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl bg-black/50 border border-white/10">
                                <h3 className="text-xl font-bold mb-4">{t.caseStudy.title}</h3>
                                <p className="text-muted mb-4">
                                    {t.caseStudy.desc}
                                </p>
                                <div className="text-neon font-bold">{t.caseStudy.outcome}</div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Question Block (AI Optimization) */}
                    <section className="py-20 container mx-auto px-6 md:px-12">
                        <h2 className="text-3xl font-bold mb-10 text-center">{t.faq.title}</h2>
                        <div className="grid gap-6 max-w-3xl mx-auto">
                            {t.faq.items.map((item, index) => (
                                <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                                    <p className="text-muted">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
