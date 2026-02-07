import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { LanguageProvider } from '@/context/LanguageContext';
import ContactView from '@/components/ContactView';
import { Locale } from '@/lib/dictionaries';

export const metadata: Metadata = {
    title: 'Get a Project Estimate | MUBX',
    description: 'Start your next web project with MUBX. Get a custom estimate for your website or app development needs.',
    alternates: {
        canonical: `${siteConfig.url}/contact`
    }
};

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function ContactPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <LanguageProvider initialLocale={lang}>
            <ContactView />
        </LanguageProvider>
    );
}
