'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export default function Blog() {
    // We use the first 3 posts from the real data source
    const posts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            ENGINEERING <span className="text-neon">NOTES</span>
                        </h2>
                        <p className="text-muted text-lg max-w-xl">
                            We&apos;re building something special. Check back soon for insights on web development, security, and scaling systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="text-white hover:text-neon transition-colors font-bold uppercase tracking-wider text-sm flex items-center gap-2"
                        >
                            View All Posts <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            variants={fadeUp}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/50 transition-all duration-300 hover:bg-white/10 h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-neon border border-neon/20 px-3 py-1 rounded-full bg-neon/5">
                                        {post.tag}
                                    </span>
                                    <span className="text-sm text-muted">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors leading-tight mb-4 flex-grow">
                                    {post.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition-colors mt-4">
                                    Read Article <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
