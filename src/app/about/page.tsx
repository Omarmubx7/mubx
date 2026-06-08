import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import JsonLd from '@/components/JsonLd';
import { LanguageProvider } from '@/context/LanguageContext';
import AboutView from '@/components/AboutView';
import { Suspense } from 'react';

import { dictionary, Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata(): Promise<Metadata> {
    const lang: Locale = 'en';
    const dictMeta = dictionary[lang].seo.about;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'Omar Mubaidin', 'MUBX founder',
            'web developer Amman', 'CS student PSUT',
            'full stack developer Jordan', 'Omar Mubaidin about'
        ],
        authors: [{ name: 'Omar Mubaidin', url: siteConfig.url }],
        openGraph: {
            type: 'profile',
            username: 'omarmubaidin',
            firstName: 'Omar',
            lastName: 'Mubaidin',
            url: `${siteConfig.url}/about`,
            title: dictMeta.title,
            description: dictMeta.description,
            images: [siteConfig.ogImage],
            siteName: 'MUBX',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: dictMeta.title,
            description: dictMeta.description,
            creator: '@omarmubx',
            images: [siteConfig.ogImage],
        },
        alternates: {
            canonical: `${siteConfig.url}/about`
        }
    };
}

export default async function AboutPage() {
    const lang: Locale = 'en';

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                {/* Enhanced Person Schema for Knowledge Panel + AEO */}
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "ProfilePage",
                    "mainEntity": {
                        "@type": "Person",
                        "@id": "https://mubx.dev/#person",
                        "name": "Omar Mubaidin",
                        "alternateName": ["MUBX", "Omar Mubx"],
                        "givenName": "Omar",
                        "familyName": "Mubaidin",
                        "jobTitle": "Full Stack Developer & Technical Consultant",
                        "description": dictionary[lang].seo.about.description,
                        "image": "https://mubx.dev/og-images.png",
                        "url": "https://mubx.dev",
                        "nationality": {
                            "@type": "Country",
                            "name": "Jordan"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Amman",
                            "addressCountry": "Jordan"
                        },
                        "worksFor": {
                            "@type": "Organization",
                            "@id": "https://mubx.dev/#organization",
                            "name": "MUBX"
                        },
                        "sameAs": [
                            "https://github.com/Omarmubx7",
                            "https://www.linkedin.com/in/omarmubaidin",
                            "https://www.instagram.com/mubx.dev",
                            "https://wa.me/962780090453",
                            "https://mubx.dev",
                            "https://mubx.dev/links"
                        ]
                    }
                }} />
                
                <AboutView />
            </LanguageProvider>
        </Suspense>
    );
}
