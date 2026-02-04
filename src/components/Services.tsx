'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Services() {
    const services = [
        {
            title: 'LANDING PAGE + DEPLOYMENT',
            description: 'I design and build a fast, responsive landing page tailored to your brand, then handle deployment so it’s live on your domain with proper SEO and analytics. Ideal for small businesses needing a high-impact web presence.',
            details: ['Responsive Design', 'SEO Setup', 'Analytics Integration', 'Fast Performance'],
        },
        {
            title: 'E-COMMERCE MVP',
            description: 'End-to-end e-commerce experience with product catalog, cart, and checkout flow. Focused on clear UX and performance to give you a solid foundation you can grow later, without the bloat.',
            details: ['Product Catalog', 'Shopping Cart', 'Checkout Flow', 'Admin Dashboard'],
        },
        {
            title: 'DATABASE + SECURITY AUDIT',
            description: 'I review your current app’s database structure, queries, and security practices. You get a technical report with fixes. Perfect for teams with existing products that feel slow or vulnerable.',
            details: ['Schema Review', 'Query Optimization', 'Security Analysis', 'Performance Tuning'],
        },
    ];

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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        WHAT I <span className="text-neon">DELIVER</span>
                    </h2>
                    <p className="text-muted text-lg mb-4">
                        I work with small businesses, media agencies, and growing online brands that need reliable, secure web systems—not just pretty landing pages.
                    </p>
                    <p className="text-sm text-neon/80 uppercase tracking-widest font-semibold border border-neon/20 inline-block px-4 py-2 rounded-full bg-neon/5">
                        Projects start from 150 JD
                    </p>
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
                            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-4 group-hover:from-neon/50 group-hover:to-transparent transition-colors">
                                0{index + 1}
                            </h3>
                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-neon transition-colors uppercase">
                                {service.title}
                            </h4>
                            <p className="text-muted leading-relaxed mb-6 flex-grow">
                                {service.description}
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
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-transparent border border-neon text-neon font-bold rounded-full hover:bg-neon hover:text-black transition-all uppercase tracking-wide"
                    >
                        Book a Free 20-min Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
