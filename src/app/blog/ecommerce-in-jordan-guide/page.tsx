import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'E-commerce in Jordan: The Complete Guide (2026) | MUBX',
    description: 'Everything you need to know about selling online in Jordan. Payment gateways (Zain Cash, CliQ), logistics, and custom development vs Shopify.',
    alternates: {
        canonical: `${siteConfig.url}/blog/ecommerce-in-jordan-guide`
    }
};

export default function BlogPost() {
    return (
        <LanguageProvider initialLocale="en">
            <main className="min-h-screen bg-black selection:bg-neon selection:text-black">
                <Navbar />
                <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                    <Badge variant="outline" className="mb-6">E-commerce Guide</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        The State of E-commerce in <span className="text-neon">Jordan (2026)</span>
                    </h1>

                    <div className="flex items-center gap-4 text-muted mb-12 pb-12 border-b border-white/10">
                        <span>By Omar Mubaidin</span>
                        <span>•</span>
                        <span>10 min read</span>
                        <span>•</span>
                        <span>Updated Feb 2026</span>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-2xl text-white/90 mb-8">
                            Selling online in Jordan has changed. With the rise of <strong>CliQ</strong> and <strong>e-wallets</strong>, the barrier to entry has never been lower. But most businesses still get stuck on the technical side.
                        </p>

                        <h2>1. The Payment Gateway Problem</h2>
                        <p>
                            Traditionally, getting a credit card gateway (Network International) required a ~500 JOD deposit and weeks of paperwork.
                            Now, digital wallets like **Zain Cash** allow you to launch instantly, though they often require manual payment verification unless you use a custom API integration.
                        </p>

                        <h2>2. Shopify vs Custom Development</h2>
                        <p>
                            Shopify is great, but the monthly fees add up ($29/mo + 2% transaction fees).
                            For Jordanian businesses, a custom Next.js store often pays for itself in 6 months because you own the code. You pay $0 in "platform fees", just your $5/mo hosting.
                        </p>

                        <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Need a store?</h3>
                            <p className="mb-4">Check our interactive calculator to see how much a custom store costs.</p>
                            <a href="/tools/website-cost-calculator-jordan" className="text-neon font-bold hover:underline">Launch Calculator →</a>
                        </div>
                    </div>
                </article>
                <Footer />
            </main>
        </LanguageProvider>
    );
}
