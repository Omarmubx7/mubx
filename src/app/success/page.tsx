import { LanguageProvider } from '@/context/LanguageContext';
import SuccessView from '@/components/SuccessView';
import { Locale } from '@/lib/dictionaries';

import { Metadata } from 'next';
import { Suspense } from 'react';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const lang = (resolvedSearchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return {
        title: lang === 'ar' ? "تم استلام طلبك | MUBX" : "Request Received | MUBX",
        description: lang === 'ar'
            ? "شكرًا لتواصلك معنا. تم استلام طلبك بنجاح وسنتصل بك قريبًا."
            : "Thank you for reaching out. Your request has been successfully received.",
        robots: {
            index: false,
            follow: false,
        }
    };
}

export default async function SuccessPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <SuccessView />
            </LanguageProvider>
        </Suspense>
    );
}
