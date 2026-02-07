import { LanguageProvider } from '@/context/LanguageContext';
import NotFoundView from '@/components/NotFoundView';

export default function NotFound() {
    return (
        <LanguageProvider initialLocale="en">
            <NotFoundView />
        </LanguageProvider>
    );
}
