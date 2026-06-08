import { LanguageProvider } from '@/context/LanguageContext';
import SuccessView from '@/components/SuccessView';

import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Request Received | MUBX",
        description: "Thank you for reaching out. Your request has been successfully received.",
        robots: {
            index: false,
            follow: false,
        }
    };
}

export default async function SuccessPage() {
    return (
        <Suspense>
            <LanguageProvider initialLocale="en">
                <SuccessView />
            </LanguageProvider>
        </Suspense>
    );
}
