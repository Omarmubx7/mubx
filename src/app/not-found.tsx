import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <LanguageProvider initialLocale="en">
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
                <Navbar />
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 className="text-neon text-9xl font-black mb-4">404</h1>
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Page Not Found</h2>
                    <p className="text-muted text-lg max-w-md mb-8">
                        The system couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-white transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Return Home
                    </Link>
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
