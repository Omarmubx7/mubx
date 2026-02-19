'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';
import { SwipeLettersButton } from './framer/FramerComponents';

export default function Pricing() {
    const { t, language } = useLanguage();

    const tiers = [
        { key: 'launch', icon: '🚀', color: 'border-border' },
        { key: 'growth', icon: '📈', color: 'border-neon', recommended: true },
        { key: 'enterprise', icon: '🏢', color: 'border-border' }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-neon font-bold tracking-widest uppercase mb-4 block">
                        {t.pricing.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {t.pricing.title}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        {t.pricing.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => {
                        const data = t.pricing.tiers[tier.key as keyof typeof t.pricing.tiers];
                        return (
                            <motion.div
                                key={tier.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`relative p-8 rounded-3xl bg-card border ${tier.color} flex flex-col h-full hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
                            >
                                {tier.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon text-black text-xs font-black uppercase rounded-full tracking-wider">
                                        {t.pricing.popular}
                                    </div>
                                )}

                                <div className="text-4xl mb-6">{tier.icon}</div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">{data.name}</h3>
                                <p className="text-sm text-muted mb-8 leading-relaxed">
                                    {data.desc}
                                </p>

                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-foreground">{data.price}</span>
                                    {data.currency && (
                                        <span className="text-lg font-bold text-muted">{data.currency}</span>
                                    )}
                                    {data.period && (
                                        <span className="text-sm text-muted">/ {data.period}</span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {data.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <Check className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <SwipeLettersButton
                                    label={t.pricing.cta}
                                    link="#contact"
                                    defaultState={{ bgColor: tier.recommended ? '#D71C1C' : '#1A1A1A', borderColor: tier.recommended ? 'transparent' : '#333333', textColor: tier.recommended ? '#000000' : '#FFFFFF' }}
                                    hoverState={{ bgColor: '#D71C1C', borderColor: '#D71C1C', textColor: '#000000' }}
                                    font={{ fontSize: '16px', fontWeight: 'bold' }}
                                    className="w-full"
                                    paddingY={14}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
