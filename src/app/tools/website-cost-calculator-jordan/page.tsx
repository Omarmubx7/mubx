import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import Footer from '@/components/Footer';
import CostCalculator from '@/components/tools/CostCalculator';
import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: 'Website Cost Calculator Jordan (2026) | MUBX',
    description: 'How much does a website cost in Jordan? Use this interactive calculator to get an instant estimate for your business website or e-commerce store.',
    alternates: {
        canonical: `${siteConfig.url}/tools/website-cost-calculator-jordan`
    }
};

import { Locale, dictionary } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function CalculatorPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const t = dictionary[lang].tools.calculator;

    return (
        <LanguageProvider initialLocale={lang}>
            <main className="min-h-screen bg-background selection:bg-neon selection:text-black">
                <Navbar />
                <section className="pt-32 pb-20 container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            {t.title} <span className="text-neon">{t.titleHighlight}</span>
                        </h1>
                        <p className="text-xl text-muted">
                            {t.description}
                        </p>
                    </div>

                    <CostCalculator ui={t.ui} options={t.options as any} />

                    <div className="mt-20 max-w-3xl mx-auto prose prose-invert">
                        <h2>{t.howItWorks.title}</h2>
                        <p>
                            {t.howItWorks.desc}
                        </p>
                        <ul>
                            {t.howItWorks.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <Footer />
            </main>
        </LanguageProvider>
    );
}
