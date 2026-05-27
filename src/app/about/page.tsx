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

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const lang = (resolvedSearchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    const dictMeta = dictionary[lang].seo.about;

    return {
        title: dictMeta.title,
        description: dictMeta.description,
        keywords: [
            'Omar Mubaidin', 'عمر مبيضين', 'MUBX founder',
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
            locale: lang === 'ar' ? 'ar_QA' : 'en_US',
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

export default async function AboutPage(props: Readonly<Props>) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

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
                        "name": lang === 'ar' ? "عمر مبيضين" : "Omar Mubaidin",
                        "alternateName": ["عمر مبيضين", "MUBX", "Omar Mubx", "عمر المبيضين"],
                        "givenName": lang === 'ar' ? "عمر" : "Omar",
                        "familyName": lang === 'ar' ? "مبيضين" : "Mubaidin",
                        "jobTitle": lang === 'ar' ? "مطور ويب متكامل ومستشار تقني" : "Full Stack Developer & Technical Consultant",
                        "description": dictionary[lang].seo.about.description,
                        "image": "https://mubx.dev/og-images.png",
                        "url": "https://mubx.dev",
                        "nationality": {
                            "@type": "Country",
                            "name": lang === 'ar' ? "الأردن" : "Jordan"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": lang === 'ar' ? "عمان" : "Amman",
                            "addressCountry": lang === 'ar' ? "الأردن" : "Jordan"
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
