
'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
const PopupModal = dynamic(() => import('react-calendly').then((mod) => mod.PopupModal), {
    ssr: false
});
import { useState, useEffect } from 'react';
import Badge from './ui/Badge';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Services() {
    const services = [
        {
            label: 'Link Bio',
            title: 'CUSTOM LINK TREE',
            description: 'Advanced designing and custom domain for your social media presence.',
            idealHeight: 'Timeline: 2–3 Days',
            deliverables: 'Includes: Custom Domain Setup, Advanced Design, Unlimited Links, Analytics.',
            details: ['Custom Domain', 'Advanced Design', 'Social Integration', 'Analytics'],
            price: '50 JD'
        },
        {
            label: 'Quick Launch',
            title: 'LANDING PAGE',
            description: 'High-conversion, lightning-fast single page designed to turn ads & visitors into leads.',
            idealHeight: 'Timeline: 5–7 Days',
            deliverables: 'Includes: Copywriting, Speed Optimization (90+), Basic Analytics, Hosting Setup.',
            details: ['Responsive Design', 'Speed Optimization', 'SEO Basics', 'Analytics Setup'],
            price: 'From 200 JD'
        },
        {
            label: 'Growth',
            title: 'BUSINESS WEBSITE',
            description: 'A robust multi-page platform to establish authority. Includes a CMS so you can edit content.',
            idealHeight: 'Timeline: 1–2 Weeks',
            deliverables: 'Includes: 5-Page Custom Design, CMS Integration, Advanced SEO, Contact Forms.',
            details: ['CMS Integration', 'Advanced SEO', 'Blog / News Section', 'Contact Forms', 'Free Hosting & Domain'],
            price: 'From 350 JD'
        },
        {
            label: 'Scale',
            title: 'CUSTOM WEB SYSTEM',
            description: 'E-commerce or SaaS. Scalable architecture with secure local payments (Zain Cash/CliQ).',
            idealHeight: 'Timeline: 2–3 Weeks',
            deliverables: 'Includes: Custom DB, Secure Auth, Payment Gateway, Admin Dashboard.',
            details: ['Product Catalog', 'Shopping Cart', 'Zain Cash / CliQ', 'Order Management', 'Admin Dashboard'],
            price: 'From 550 JD'
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const mountTimer = setTimeout(() => setMounted(true), 0);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => {
            clearTimeout(mountTimer);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 break-words"
                    >
                        SERVICES & <span className="text-neon">PRICING</span>
                    </motion.h2>
                    <p className="text-muted text-lg mb-8">
                        Clear packages. No hidden fees. Delivered on time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <Skeleton width={80} height={20} />
                                        <Skeleton width={40} height={40} />
                                    </div>
                                    <Skeleton width={150} height={24} className="mb-4" />
                                    <Skeleton count={3} className="mb-2" />
                                    <Skeleton width={120} height={16} className="mt-4 mb-6" />
                                    <div className="border-t border-white/10 pt-6 mt-auto">
                                        <Skeleton count={2} />
                                    </div>
                                </div>
                            </SkeletonTheme>
                        ))
                        : services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 group backdrop-blur-sm flex flex-col h-full shadow-lg relative ${index === 2
                                    ? 'bg-white/10 border-neon shadow-[0_0_30px_rgba(255,30,30,0.15)] scale-105 z-10'
                                    : 'bg-white/5 border-white/10 hover:border-neon/50 hover:bg-white/[0.07] hover:shadow-neon/10'
                                    }`}
                            >
                                {index === 2 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant={index === 2 ? 'neon' : 'outline'} className="mb-2">{service.price}</Badge>
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon transition-colors uppercase break-words hyphens-auto">
                                    {service.title}
                                </h3>
                                <p className="text-muted leading-relaxed mb-4 flex-grow text-sm">
                                    {service.description}
                                </p>

                                <div className="mb-4">
                                    <p className="text-sm text-neon font-bold mb-1">
                                        {service.idealHeight}
                                    </p>
                                    <p className="text-xs text-muted/80">
                                        {service.deliverables}
                                    </p>
                                </div>

                                <ul className="space-y-2 mb-6 border-t border-white/10 pt-6 mt-auto">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="text-xs text-white/80 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                </div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2"
                    >
                        Get a Project Estimate
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* How It Works Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-24 max-w-5xl mx-auto px-6 md:px-12"
            >
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">HOW IT WORKS</h3>
                    <div className="h-1 w-20 bg-neon mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <motion.div variants={fadeUp} className="bg-white/5 p-8 rounded-xl border border-white/5 relative">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-neon text-black font-bold flex items-center justify-center rounded-full text-xl shadow-[0_0_15px_rgba(255,30,30,0.5)]">1</div>
                        <h4 className="font-bold text-white text-lg mb-2">Free Discovery Call</h4>
                        <p className="text-muted text-sm">We chat for 20 mins to understand your goals. No sales pressure, just clarity.</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-white/5 p-8 rounded-xl border border-white/5 relative">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-neon text-black font-bold flex items-center justify-center rounded-full text-xl shadow-[0_0_15px_rgba(255,30,30,0.5)]">2</div>
                        <h4 className="font-bold text-white text-lg mb-2">Proposal in 24 Hours</h4>
                        <p className="text-muted text-sm">You get a clear plan with deadline and price. <strong>50% upfront, 50% on launch</strong>, includes 2 revision rounds.</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-white/5 p-8 rounded-xl border border-white/5 relative">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-neon text-black font-bold flex items-center justify-center rounded-full text-xl shadow-[0_0_15px_rgba(255,30,30,0.5)]">3</div>
                        <h4 className="font-bold text-white text-lg mb-2">Build & Launch</h4>
                        <p className="text-muted text-sm">I build your system, you review it, and we go live. Simple as that.</p>
                    </motion.div>
                </div>
            </motion.div>


            {
                mounted && (
                    <PopupModal
                        url="https://calendly.com/omarmubaidincs/30min"
                        onModalClose={() => setIsOpen(false)}
                        open={isOpen}
                        rootElement={document.body}
                    />
                )
            }
        </section >
    );
}
