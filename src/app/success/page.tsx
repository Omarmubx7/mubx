import { LanguageProvider } from '@/context/LanguageContext';
import SuccessView from '@/components/SuccessView';
import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

import { Suspense } from 'react';

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
