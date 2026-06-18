import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { LanguageProvider } from '@/context/LanguageContext';
import ContactView from '@/components/ContactView';
import { dictionary, Locale } from '@/lib/dictionaries';
import { Suspense } from 'react';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
    const lang: Locale = 'en';
    const dictMeta = dictionary[lang].seo.contact;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'hire web developer Jordan', 'MUBX contact', 'Omar Mubaidin contact', 'web development estimate Jordan',
            'freelance web developer Jordan'
        ],
        alternates: {
            canonical: `${siteConfig.url}/contact`
        },
        openGraph: {
            title: dictMeta.title,
            description: dictMeta.description,
            url: `${siteConfig.url}/contact`,
            siteName: 'MUBX',
            images: [siteConfig.ogImage],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            creator: '@omarmubx',
            images: [siteConfig.ogImage],
        },
    };
}

export default async function ContactPage() {
    const lang: Locale = 'en';

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact MUBX — Omar Mubaidin",
                    "description": dictionary[lang].contact.desc2,
                    "url": `${siteConfig.url}/contact`,
                    "mainEntity": {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "email": "mubxdev@proton.me",
                        "telephone": "+962780090453",
                        "availableLanguage": ["English"],
                        "areaServed": ["Jordan", "Middle East", "Remote"],
                        "url": "https://calendly.com/omarmubaidincs/30min"
                    }
                }} />
                <ContactView />
            </LanguageProvider>
        </Suspense>
    );
}

