'use client';

import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { useSearchParams } from 'next/navigation';
import { Locale, dictionary } from '@/lib/dictionaries';
import { getBlogPosts } from '@/lib/blog-data';

export default function BlogContent() {
    const searchParams = useSearchParams();
    const lang = (searchParams.get('lang') === 'ar' ? 'ar' : 'en') as Locale;
    const tagFilter = searchParams.get('tag');

    const posts = getBlogPosts(lang).filter(post =>
        !tagFilter || post.tag === tagFilter
    );
    const t = dictionary[lang].blog;

    return (
        <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <div className="mb-16">
                    <Badge variant="neon" className="mb-4">{t.badge}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {t.titleStart} <span className="text-neon">{t.titleHighlight}</span>
                    </h1>
                    <p className="text-muted text-lg">
                        {t.description}
                    </p>
                </div>

                <div className="space-y-4">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-2 mb-2 relative z-20">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.location.href = `/blog?tag=${post.tag}&lang=${lang === 'ar' ? 'ar' : 'en'}`;
                                        }}
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <Badge variant="ghost" className="pl-0 text-neon/80 hover:text-neon underline decoration-neon/20 underline-offset-4">{post.tag}</Badge>
                                    </button>
                                </div>
                                <span className="text-xs text-muted font-mono">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-muted leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="hidden">{t.readMore}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
