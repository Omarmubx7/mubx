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

export default function CalculatorPage() {
    return (
        <LanguageProvider initialLocale="en">
            <main className="min-h-screen bg-background selection:bg-neon selection:text-black">
                <Navbar />
                <section className="pt-32 pb-20 container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            Website Cost <span className="text-neon">Calculator</span>
                        </h1>
                        <p className="text-xl text-muted">
                            Get an instant ballpark estimate for your next web project in Jordan.
                            No email required to see the price.
                        </p>
                    </div>

                    <CostCalculator />

                    <div className="mt-20 max-w-3xl mx-auto prose prose-invert">
                        <h2>How is this calculated?</h2>
                        <p>
                            Web development pricing in Jordan varies wildly. This calculator is based on
                            <strong> high-quality, custom development</strong> using modern tech stacks (Next.js, React)
                            rather than cheap WordPress templates.
                        </p>
                        <ul>
                            <li><strong>Standard Design:</strong> Clean, professional, mobile-responsive.</li>
                            <li><strong>Premium Design:</strong> Custom animations, unique layouts, and award-winning aesthetics.</li>
                            <li><strong>Bilingual:</strong> Full RTL (Arabic) support and content management.</li>
                        </ul>
                    </div>
                </section>
                <Footer />
            </main>
        </LanguageProvider>
    );
}
