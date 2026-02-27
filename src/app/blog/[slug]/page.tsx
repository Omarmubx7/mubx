import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

import { Locale, dictionary } from '@/lib/dictionaries';


import { Suspense } from 'react';

type Props = {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ lang?: string }>
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    const post = getBlogPost(params.slug, lang);

    if (!post) return {};

    return {
        title: `${post.title} | MUBX Blog`,
        description: post.excerpt,
        authors: [{ name: 'Omar Mubaidin', url: siteConfig.url }],
        keywords: [post.tag, 'Omar Mubaidin', 'MUBX', 'web development', 'Jordan'],
        alternates: {
            canonical: `${siteConfig.url}/blog/${post.slug}`,
        },
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            url: `${siteConfig.url}/blog/${post.slug}`,
            siteName: 'MUBX',
            locale: lang === 'ar' ? 'ar_QA' : 'en_US',
            authors: ['Omar Mubaidin'],
            publishedTime: post.date,
            tags: [post.tag],
            images: [siteConfig.ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            creator: '@omarmubx',
            images: [siteConfig.ogImage],
        },
    };
}

export default async function BlogPost(props: Props) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const post = getBlogPost(params.slug, lang);
    const t = dictionary[lang].blog;

    if (!post) {
        notFound();
    }

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="relative flex flex-col min-h-screen">
                    <Navbar />

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.excerpt,
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "url": `${siteConfig.url}/blog/${post.slug}`,
                        "author": {
                            "@type": "Person",
                            "@id": "https://mubx.dev/#person",
                            "name": "Omar Mubaidin",
                            "url": siteConfig.url,
                        },
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://mubx.dev/#organization",
                            "name": "MUBX",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteConfig.url}/mubxlogoloader.svg`
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `${siteConfig.url}/blog/${post.slug}`
                        },
                        "articleSection": post.tag,
                        "inLanguage": lang === 'ar' ? 'ar' : 'en',
                    }} />

                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": siteConfig.url
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": `${siteConfig.url}/blog`
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title,
                                "item": `${siteConfig.url}/blog/${post.slug}`
                            }
                        ]
                    }} />

                    <article className="pt-32 pb-24 relative overflow-hidden flex-grow">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-96 bg-neon/5 blur-[100px] rounded-full -z-10" />

                        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8 group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t.backToNotes}
                            </Link>

                            <header className="mb-12">
                                <div className="flex gap-4 items-center mb-6">
                                    <span className="flex items-center gap-2 text-neon text-sm font-bold uppercase tracking-wider border border-neon/20 px-3 py-1 rounded-full bg-neon/5">
                                        <Tag className="w-3 h-3" /> {post.tag}
                                    </span>
                                    <span className="flex items-center gap-2 text-muted text-sm">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                    {post.title}
                                </h1>
                                <div className="flex items-center gap-3 text-muted text-sm">
                                    <span>By <strong className="text-white">Omar Mubaidin</strong></span>
                                </div>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-muted prose-strong:text-white prose-li:text-muted hover:prose-a:text-neon prose-a:transition-colors">
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </article>

                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
