import { siteConfig } from "@/config/seo";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
    title: 'Privacy Policy | MUBX',
    description: 'Privacy Policy for MUBX Services.',
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function PrivacyPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <LanguageProvider initialLocale={lang}>
            <div className="container mx-auto px-6 py-32 text-foreground max-w-4xl bg-background min-h-screen">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-invert prose-lg max-w-none text-foreground">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-muted leading-relaxed">
                            Welcome to <strong>MUBX</strong>. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
                        <p className="text-muted leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone number (submitted via forms).</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and services (e.g., analytics).</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Data</h2>
                        <p className="text-muted leading-relaxed mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted">
                            <li>To allow us to contact you regarding a project inquiry.</li>
                            <li>To improve our website, products/services, marketing of customer relationships and experiences.</li>
                            <li>To comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies & Analytics</h2>
                        <p className="text-muted leading-relaxed">
                            We use Vercel Analytics to understand how visitors interact with our website. This data is anonymized and does not directly identify you.
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                        <p className="text-muted leading-relaxed">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <br /><br />
                            <span className="text-foreground font-mono">Email: mubxdev@proton.me</span>
                            <br />
                            <span className="text-foreground font-mono">Location: Amman, Jordan</span>
                        </p>
                    </section>
                </div>
            </div>
        </LanguageProvider>
    );
}
