'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react';

export default function Services() {
    const services = [
        {
            label: 'Service 01',
            title: 'LANDING PAGE + DEPLOYMENT',
            description: 'I design and build a fast, responsive landing page tailored to your brand, then handle deployment so it’s live on your domain with proper SEO and analytics.',
            idealHeight: 'Ideal for: New businesses needing a high-impact presence.',
            details: ['Responsive Design', 'SEO Setup', 'Analytics Integration', 'Fast Performance'],
        },
        {
            label: 'Service 02',
            title: 'E-COMMERCE MVP',
            description: 'End-to-end e-commerce experience with product catalog, cart, and checkout flow. Focused on clear UX and performance to give you a solid foundation.',
            idealHeight: 'Ideal for: Brands starting to sell online.',
            details: ['Product Catalog', 'Shopping Cart', 'Checkout Flow', 'Admin Dashboard'],
        },
        {
            label: 'Service 03',
            title: 'DATABASE + SECURITY AUDIT',
            description: 'I review your current app’s database structure, queries, and security practices. You get a technical report with fixes.',
            idealHeight: 'Ideal for: Teams with slow or vulnerable apps.',
            details: ['Schema Review', 'Query Optimization', 'Security Analysis', 'Performance Tuning'],
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
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
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        WHAT I <span className="text-neon">DELIVER</span>
                    </motion.h2>
                    <p className="text-muted text-lg mb-8">
                        Reliable, secure web systems for small businesses and growing brands.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block relative"
                    >
                        <div className="absolute inset-0 bg-neon blur-md opacity-20" />
                        <span className="relative z-10 inline-block px-8 py-3 rounded-full bg-neon text-black font-black tracking-widest uppercase text-sm transform hover:scale-105 transition-transform cursor-default shadow-[0_0_15px_rgba(255,30,30,0.4)]">
                            Projects start from 150 JD
                        </span>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/50 transition-all duration-300 hover:bg-white/10 group backdrop-blur-sm flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-muted uppercase tracking-wider">{service.label}</span>
                                <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent group-hover:from-neon/50 group-hover:to-transparent transition-colors">
                                    0{index + 1}
                                </h3>
                            </div>

                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-neon transition-colors uppercase">
                                {service.title}
                            </h4>
                            <p className="text-muted leading-relaxed mb-4 flex-grow">
                                {service.description}
                            </p>
                            <p className="text-sm text-white/80 font-medium italic mb-6 border-l-2 border-neon pl-3">
                                {service.idealHeight}
                            </p>

                            <ul className="space-y-2 mb-6 border-t border-white/10 pt-6">
                                {service.details.map((detail) => (
                                    <li key={detail} className="text-sm text-white/80 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-8 py-4 bg-transparent border border-neon text-neon font-bold rounded-full hover:bg-neon hover:text-black transition-all uppercase tracking-wide cursor-pointer"
                    >
                        Book a Free 20-min Call
                    </button>
                </motion.div>
            </div>

            {/* Simple FAQ / Process Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-24 max-w-4xl mx-auto px-6 md:px-12"
            >
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">COMMON QUESTIONS</h3>
                    <div className="h-1 w-20 bg-neon mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Do you work with startups?</h4>
                        <p className="text-muted text-sm">Yes. I specialize in helping fast-paced startups and small businesses get their MVP to market securely and quickly.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">What is your typical timeline?</h4>
                        <p className="text-muted text-sm">A standard landing page takes 3-5 days. Full e-commerce sites or web apps typically take 2-4 weeks depending on complexity.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Do you handle hosting?</h4>
                        <p className="text-muted text-sm">Absolutely. I deploy your site (usually on Vercel or VPS), configure your domain, and ensure SSL security is active.</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">What tech do you use?</h4>
                        <p className="text-muted text-sm">I primarily use Next.js, React, and Tailwind CSS for frontend, with Supabase or MySQL for backend data handling.</p>
                    </motion.div>
                </div>
            </motion.div>


            {
                mounted && (
                    <PopupModal
                        url="https://calendly.com/omarmubaidincs/30min"
                        onModalClose={() => setIsOpen(false)}
                        open={isOpen}
                        rootElement={document.getElementById("root") || document.body}
                    />
                )
            }
        </section >
    );
}
