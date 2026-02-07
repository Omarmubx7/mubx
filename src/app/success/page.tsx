import { LanguageProvider } from '@/context/LanguageContext';
import SuccessView from '@/components/SuccessView';
import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export default async function SuccessPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    return (
        <LanguageProvider initialLocale={lang}>
            <SuccessView />
        </LanguageProvider>
    );
}
