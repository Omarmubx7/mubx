import { LanguageProvider } from '@/context/LanguageContext';
import NotFoundView from '@/components/NotFoundView';
import { Suspense } from 'react';

export default function NotFound() {
    return (
        <Suspense>
            <LanguageProvider initialLocale="en">
                <NotFoundView />
            </LanguageProvider>
        </Suspense>
    );
}
