'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { getBlogPosts } from '@/lib/blog-data';
import { useLanguage } from '@/context/LanguageContext';
import TextReveal from './ui/TextReveal';

export default function BlogPreview() {
    const { language, t, isRTL } = useLanguage();
    const posts = getBlogPosts(language).slice(0, 3);

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    return (
        <section id="blog-preview" className="py-24 relative bg-background border-b border-border/30">
            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="mb-16"
                >
                    <p className="text-neon font-mono text-sm mb-4 tracking-widest">05</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase flex flex-wrap gap-x-3">
                        <TextReveal text={t.blog.badge} splitType="letter" /> 
                        <span className="text-neon">
                            <TextReveal text={t.blog.titleHighlight} splitType="letter" delay={0.4} />
                        </span>
                    </h2>
                    <p className="text-xs text-muted-foreground font-mono mt-4 max-w-xl">
                        {"// "}{t.blog.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-border/30 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-border/30 bg-background/50">
                    {posts.map((post) => (
                        <motion.div
                            key={post.slug}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group relative p-6 md:p-8 hover:bg-white/[0.015] transition-all duration-300 flex flex-col justify-between min-h-[300px] rounded-none"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between w-full items-center text-[10px] font-mono">
                                    <span className="text-muted-foreground uppercase">{post.date}</span>
                                    <span className="text-neon font-bold">{"// "}{post.tag}</span>
                                </div>

                                <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors line-clamp-2">
                                    <Link href={getHref(`/blog/${post.slug}`)}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 font-mono">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="flex gap-4 items-center w-full pt-4 border-t border-border/10 mt-8">
                                <Link 
                                    href={getHref(`/blog/${post.slug}`)} 
                                    className="text-foreground hover:text-neon text-xs font-bold flex items-center gap-2 transition-all font-mono uppercase tracking-wider"
                                >
                                    {t.blog.readMore} {isRTL ? '←' : '→'}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-end">
                    <Link
                        href={getHref('/blog')}
                        className="px-6 py-3 text-xs font-mono font-bold text-foreground border border-border/30 hover:border-neon hover:text-neon transition-all bg-card/5 rounded-none"
                    >
                        {language === 'en' ? 'VIEW ALL ARTICLES' : 'عرض كافة المقالات'}
                    </Link>
                </div>
            </div>
        </section>
    );
}
