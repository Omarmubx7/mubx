import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';
import Image from 'next/image';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'Next.js Mobile Performance Guide: Fixing LCP & CLS | MUBX',
    description: 'A deep dive into optimizing Next.js 15 for mobile devices. How I improved LCP from 2.5s to 0.8s on 4G networks.',
    alternates: {
        canonical: `${siteConfig.url}/blog/nextjs-mobile-performance`
    }
};

export default function BlogPost() {
    return (
        <LanguageProvider initialLocale="en">
            <main className="min-h-screen bg-black selection:bg-neon selection:text-black">
                <Navbar />
                <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                    <Badge variant="outline" className="mb-6">Technical Deep Dive</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        Optimizing <span className="text-neon">Mobile Performance</span> in Next.js
                    </h1>

                    <div className="flex items-center gap-4 text-muted mb-12 pb-12 border-b border-white/10">
                        <span>By Omar Mubaidin</span>
                        <span>•</span>
                        <span>10 min read</span>
                        <span>•</span>
                        <span>Feb 6, 2026</span>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-2xl text-white/90 mb-8">
                            Most developers test on MacBook Pros with Fiber internet. Real users are on mid-range Androids with 4G. Here is how to fix your Largest Contentful Paint (LCP) for the real world.
                        </p>

                        <h2>The "Works on My Machine" Problem</h2>
                        <p>
                            I recently audited a client site that felt "instant" on desktop. When we ran it through PageSpeed Insights, the mobile score was <strong>45/100</strong>.
                        </p>
                        <p>
                            The culprit? A massive hero background image that was 4MB on mobile, and a "hydration" delay that blocked the main thread.
                        </p>

                        <h3>1. The `sizes` Prop is Not Optional</h3>
                        <p>
                            If you use `next/image` without a `sizes` prop, Next.js doesn't know how big the image will be. It might serve a 1080p desktop image to a 300px mobile screen.
                        </p>
                        <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto">
                            <code>{`<Image 
    src="/hero.png" 
    fill 
    // THIS is the magic line
    sizes="(max-width: 768px) 100vw, 50vw" 
    priority
    />`}</code>
                        </pre>

                        <h3>2. Font Optimization</h3>
                        <p>
                            Custom fonts are heavy. In Next.js 15, `next/font` automatically optimizes Google Fonts. But if you are loading custom OTF/TTF files, make sure to use `display: swap` so text is visible immediately.
                        </p>

                        <h3>3. Removing "Scroll Jank" (CLS)</h3>
                        <p>
                            Cumulative Layout Shift (CLS) happens when elements jump around as the page loads. The biggest fix? Reserve space for your images and videos.
                        </p>
                        <p>
                            Always define an `aspect-ratio` on your image containers.
                        </p>

                        <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Need a Performance Audit?</h3>
                            <p className="mb-4">I help startups hit 100/100 Core Web Vitals to improve SEO and conversion rates.</p>
                            <a href="/#contact" className="text-neon font-bold hover:underline">Get a Free Check →</a>
                        </div>
                    </div>
                </article>
                <Footer />
            </main>
        </LanguageProvider>
    );
}
