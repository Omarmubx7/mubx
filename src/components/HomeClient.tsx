'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { LanguageProvider } from '@/context/LanguageContext';
import { Locale } from '@/lib/dictionaries';

const MetricsStrip = dynamic(() => import('@/components/MetricsStrip'), {
    loading: () => <div className="h-32 w-full animate-pulse bg-muted/20" />,
});
const SkillTicker = dynamic(() => import('@/components/SkillTicker'), {
    loading: () => <div className="h-40 w-full animate-pulse bg-muted/20" />,
});

// Performance optimized dynamic imports for below-the-fold content



const About = dynamic(() => import('@/components/About'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const TechStack = dynamic(() => import('@/components/TechStack'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: () => <div className="h-80 w-full animate-pulse bg-muted/20" />,
});

const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), { ssr: false });
const CanvasCursor = dynamic(() => import('@/components/canvas/CanvasCursor'), { ssr: false });

export default function HomeClient({ lang }: { lang: Locale }) {
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        // Deep Defer heavy canvases far beyond the TTI window (Time to Interactive)
        // This ensures the main thread is completely free during the critical loading window.
        const timer = setTimeout(() => setShowCanvas(true), 3500);
        return () => clearTimeout(timer);
    }, []);



    return (
        <LanguageProvider initialLocale={lang}>
            <Navbar />
            <main id="main-content" className="relative flex flex-col min-h-screen focus:outline-none" tabIndex={-1}>
                {showCanvas && <CanvasCursor />}
                {showCanvas && <StarsCanvas />}
                <Hero />
                <MetricsStrip />
                <SkillTicker />
                <Suspense fallback={null}>



                    <About />
                    <TechStack />
                    <Timeline />

                    <Contact />
                    <Footer />
                </Suspense>
            </main>
        </LanguageProvider>
    );

}
