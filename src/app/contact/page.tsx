import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { LanguageProvider } from '@/context/LanguageContext';
import ContactView from '@/components/ContactView';
import { Locale } from '@/lib/dictionaries';
import { Suspense } from 'react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Get a Project Estimate | Omar Mubaidin — MUBX',
    description: 'Start your next web project with Omar Mubaidin (MUBX). Get a custom estimate for website development, e-commerce, or technical consulting in Jordan.',
    keywords: ['hire web developer Jordan', 'MUBX contact', 'Omar Mubaidin contact', 'web development estimate Jordan'],
    alternates: {
        canonical: `${siteConfig.url}/contact`
    },
    openGraph: {
        title: 'Get a Project Estimate | MUBX',
        description: 'Start your next web project with MUBX. Custom estimates for website, e-commerce, and app development.',
        url: `${siteConfig.url}/contact`,
        siteName: 'MUBX',
        images: [siteConfig.ogImage],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get a Project Estimate | MUBX',
        description: 'Start your next web project with MUBX.',
        creator: '@omarmubx',
        images: [siteConfig.ogImage],
    },
};

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function ContactPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact MUBX — Omar Mubaidin",
                    "description": "Get in touch with Omar Mubaidin for web development projects, technical consulting, and custom estimates.",
                    "url": `${siteConfig.url}/contact`,
                    "mainEntity": {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "email": "mubxdev@proton.me",
                        "telephone": "+962780090453",
                        "availableLanguage": ["English", "Arabic"],
                        "areaServed": ["Jordan", "Middle East", "Remote"],
                        "url": "https://calendly.com/omarmubaidincs/30min"
                    }
                }} />
                <ContactView />
            </LanguageProvider>
        </Suspense>
    );
}

