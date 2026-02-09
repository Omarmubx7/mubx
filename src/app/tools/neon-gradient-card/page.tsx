import { Metadata } from 'next';
import Link from 'next/link';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: 'Free Next.js Neon Gradient Card Component | MUBX Tools',
    description: 'Copy and paste this free, high-performance Neon Gradient Card component for your Next.js and Tailwind projects. Built by MUBX.',
    alternates: {
        canonical: `${siteConfig.url}/tools/neon-gradient-card`
    }
};

import { Locale } from '@/lib/dictionaries';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

import { Suspense } from 'react';

export default async function NeonCardPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const codeString = `export default function NeonCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group w-full max-w-sm">
      {/* The Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff94] to-[#00b8ff] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      {/* The Content Container */}
      <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}`;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="min-h-screen bg-black selection:bg-neon selection:text-black">
                    <Navbar />
                    <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">
                        <div className="mb-12 text-center max-w-2xl mx-auto">
                            <Badge variant="outline" className="mb-6">Free Component</Badge>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                                The <span className="text-neon">Neon Gradient</span> Card
                            </h1>
                            <p className="text-muted text-lg">
                                A high-performance, GPU-accelerated glow effect that works perfectly with Tailwind CSS and Next.js. Free to use in your projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                            {/* Preview Side */}
                            <div className="space-y-8">
                                <div className="p-12 bg-zinc-900/50 rounded-3xl border border-white/5 flex items-center justify-center min-h-[400px]">
                                    {/* The Actual Component */}
                                    <div className="relative group w-full max-w-sm cursor-pointer">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon to-[#00b8ff] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                        <div className="relative h-full bg-black border border-white/10 rounded-2xl p-8 flex flex-col justify-between aspect-square">
                                            <div className="space-y-4">
                                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                                    <span className="text-2xl">✨</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">Hover Me</h3>
                                                <p className="text-muted">
                                                    This card uses a negative inset glow effect to prevent layout shifts. It's GPU optimized.
                                                </p>
                                            </div>
                                            <div className="pt-4">
                                                <span className="text-neon text-sm font-bold uppercase tracking-wider">Try it out →</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-muted">
                                    Preview of the card effect on hover.
                                </p>
                            </div>

                            {/* Code Side */}
                            <div className="space-y-6">
                                <div className="relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
                                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                        <span className="text-xs font-mono text-muted">components/NeonCard.tsx</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                        </div>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="text-sm font-mono text-white/80 leading-relaxed">
                                            <code>{codeString}</code>
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-neon/5 border border-neon/20 rounded-xl p-6">
                                    <h4 className="text-neon font-bold mb-2 flex items-center gap-2">
                                        🚀 Need Custom UI Components?
                                    </h4>
                                    <p className="text-sm text-white/80 mb-4">
                                        I build performant, interaction-heavy interfaces for startups and agencies.
                                    </p>
                                    <Link href="/#contact" className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-0.5 hover:text-neon hover:border-neon transition-colors">
                                        Book a Project &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
