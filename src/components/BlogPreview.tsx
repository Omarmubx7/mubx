'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { blogPosts } from '@/lib/blog-data';
import Badge from './ui/Badge';

export default function BlogPreview() {
    const posts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                            ARTICLES & <span className="text-neon">INSIGHTS</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
                            Technical deep dives and thoughts on performance, security, and the future of web development.
                        </motion.p>
                    </div>
                    <motion.div variants={fadeUp}>
                        <Link href="/blog" className="flex items-center gap-2 text-white hover:text-neon transition-colors font-bold group">
                            Read all articles
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-start h-full"
                        >
                            <div className="flex justify-between w-full items-center mb-4">
                                <span className="text-xs font-mono text-neon uppercase tracking-widest">{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-muted leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                <Badge variant="ghost" className="pl-0 text-neon/80 font-mono text-xs">{post.tag}</Badge>
                            </div>

                            <div className="flex gap-4 items-center w-full pt-4 border-t border-white/5 mt-auto">
                                <Link href={`/blog/${post.slug}`} className="text-white text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4 text-neon" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
