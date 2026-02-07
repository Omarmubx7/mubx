import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/seo';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'E-commerce Website Development in Amman, Jordan | MUBX',
    description: 'Custom e-commerce solutions for Jordanian businesses. We build fast, secure online stores that accept Zain Cash, CliQ, and Credit Cards. Stop paying monthly fees.',
    alternates: {
        canonical: `${siteConfig.url}/services/ecommerce`
    }
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function EcommercePage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <LanguageProvider initialLocale={lang}>
            <main className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-black">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 md:px-12 container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Sell Online in <span className="text-neon">Jordan</span> Without Limits.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
                        Custom e-commerce stores designed for the Jordanian market. Accept <strong>Zain Cash, CliQ, and Visa</strong> directly into your bank account. No heavy monthly fees.
                    </p>
                    <Link href="/#contact" className="inline-block px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:scale-105 transition-transform">
                        Get Your Store Quote
                    </Link>
                </section>

                {/* Content / Benefits Section */}
                <section className="py-20 bg-white/5 border-y border-white/5">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Why Custom Development?</h2>
                            <ul className="space-y-4 text-lg text-muted">
                                <li className="flex items-center gap-3">
                                    <span className="text-neon">✓</span> Own your data & customer list.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-neon">✓</span> <strong>Result:</strong> 0% Transaction fees to platforms.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-neon">✓</span> Integrated Local Payments (Zain Cash / CliQ).
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-neon">✓</span> Bilingual (Arabic & English) built-in.
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-black/50 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Case Study: BloB.JO</h3>
                            <p className="text-muted mb-4">
                                We helped BloB.JO launch a custom Print-on-Demand store in Amman.
                                Users can design products specifically on the site—something Shopify couldn't do easily.
                            </p>
                            <div className="text-neon font-bold">Outcome: Full operational flow in 3 weeks.</div>
                        </div>
                    </div>
                </section>

                {/* FAQ Question Block (AI Optimization) */}
                <section className="py-20 container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="grid gap-6 max-w-3xl mx-auto">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-2">How much does an e-commerce website cost in Jordan?</h3>
                            <p className="text-muted">A custom, high-performance e-commerce store typically starts at <strong>700 JOD</strong> depending on complexity. This is a one-time investment compared to paying monthly fees forever on other platforms.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Can I accept Zain Cash and CliQ?</h3>
                            <p className="text-muted">Yes. We integrate local Jordanian payment methodologies so you can get paid instantly and securely without international settlement delays.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Do you provide Arabic language support?</h3>
                            <p className="text-muted">Absolutely. All our e-commerce solutions are built with <strong>RTL (Right-to-Left)</strong> support from day one, ensuring a perfect experience for your Arab customers.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Schema for Google Rich Results */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How much does an e-commerce website cost in Jordan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "A custom, high-performance e-commerce store typically starts at 700 JOD depending on complexity. This is a one-time investment."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I accept Zain Cash and CliQ on my website?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. We integrate local Jordanian payment methodologies like Zain Cash and CliQ so you can get paid instantly."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "primary difference between Shopify and Custom code?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Shopify charges monthly fees and transaction fees. Custom code is a one-time asset you own forever with zero imposed transaction fees."
                                    }
                                }
                            ]
                        })
                    }}
                />

                <Footer />
            </main>
        </LanguageProvider>
    );
}
