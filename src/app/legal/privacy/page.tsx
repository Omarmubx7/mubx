import { siteConfig } from "@/config/seo";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
    title: 'Privacy Policy | MUBX',
    description: 'Privacy Policy for MUBX Services.',
};

import { Locale, dictionary } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function PrivacyPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const t = dictionary[lang].legalPage.privacy;

    return (
        <LanguageProvider initialLocale={lang}>
            <div className="container mx-auto px-6 py-32 text-foreground max-w-4xl bg-background min-h-screen">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                <p className="text-muted mb-12">{t.lastUpdated} {new Date().toLocaleDateString(lang === 'ar' ? 'ar-JO' : 'en-US')}</p>

                <div className="prose prose-invert prose-lg max-w-none text-foreground">
                    {t.sections.map((section, index) => (
                        <section key={index} className="mb-10">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                {section.content}
                            </p>
                            {section.list && (
                                <ul className="list-disc pl-6 space-y-2 text-muted">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {section.email && (
                                <p className="text-muted leading-relaxed mt-4">
                                    <span className="text-foreground font-mono block">{section.email}</span>
                                    {section.location && <span className="text-foreground font-mono block">{section.location}</span>}
                                </p>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </LanguageProvider>
    );
}
