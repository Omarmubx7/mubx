"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, 
    ArrowRight, 
    Check, 
    CreditCard, 
    DollarSign, 
    TrendingUp, 
    Cpu, 
    HelpCircle, 
    ChevronDown, 
    ExternalLink 
} from 'lucide-react';
import { LanguageProvider } from '@/context/LanguageContext';
import CardTilt from '@/components/ui/CardTilt';
import { FloatingPaths } from '@/components/ui/background-paths';
import Badge from '@/components/ui/Badge';
import { dictionary, Locale } from '@/lib/dictionaries';

// FAQ Item Accordion component for smooth interactive animations
function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/5 bg-white/3 backdrop-blur-md rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-foreground cursor-pointer focus:outline-none"
            >
                <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-neon shrink-0" />
                    {question}
                </span>
                <ChevronDown 
                    className={`w-5 h-5 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-neon' : ''}`} 
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 pt-2 text-sm text-muted-foreground/90 border-t border-white/5 leading-relaxed font-mono">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function EcommercePage() {
    const lang: Locale = 'en';
    const t = dictionary[lang].servicesPage.ecommerce;

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Local payment simulator states
    const [activeMethod, setActiveMethod] = useState<'zain' | 'cliq'>('zain');
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

    const triggerPaymentSimulation = () => {
        setPaymentStatus('processing');
        setTimeout(() => {
            setPaymentStatus('success');
        }, 1500);
    };

    useEffect(() => {
        if (paymentStatus === 'success') {
            const timer = setTimeout(() => setPaymentStatus('idle'), 3000);
            return () => clearTimeout(timer);
        }
    }, [paymentStatus]);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-t-2 border-neon animate-spin" />
            </div>
        );
    }

    return (
        <Suspense>
            <LanguageProvider initialLocale="en">
                <main className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-black relative overflow-hidden pb-24">
                    {/* Floating Paths Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <FloatingPaths position={1} />
                        <FloatingPaths position={-1} />
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/[0.01] blur-[150px] rounded-full" />
                    </div>



                    <div className="relative z-10 pt-32 pb-4">
                        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                            {/* Return Link */}
                            <Link href="/services" className="inline-flex items-center gap-2 text-muted hover:text-white mb-8 transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Services
                            </Link>

                            {/* Page Header */}
                            <div className="max-w-4xl mb-16">
                                <Badge variant="neon" className="mb-4">Jordan Market Optimized</Badge>
                                <h1 className="text-4xl sm:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                                    {t.titleStart} <span className="text-neon">{t.titleHighlight}</span> {t.titleEnd}
                                </h1>
                                <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
                                    {t.subtitleStart} <span className="text-foreground font-bold">{t.subtitleHighlight}</span> {t.subtitleEnd}
                                </p>
                            </div>

                            {/* Bento Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-20">
                                {/* Left Side: Benefits list Bento Card (6 columns) */}
                                <CardTilt className="lg:col-span-6 bg-white/3 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="outline">Core Benefits</Badge>
                                            <span className="text-xs font-mono text-muted-foreground uppercase">0% Platform commission</span>
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-black uppercase text-foreground">{t.benefitsTitle}</h2>
                                        
                                        <ul className="space-y-4 pt-4">
                                            {t.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                                                    <span className="w-5 h-5 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center text-neon shrink-0 mt-0.5 font-bold">
                                                        {benefit.highlight}
                                                    </span>
                                                    <span className="leading-relaxed">{benefit.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/60 uppercase">Tailored Systems</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-neon/30 animate-pulse" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        </div>
                                    </div>
                                </CardTilt>

                                {/* Right Side: E-commerce Local Payment Simulator (6 columns) */}
                                <CardTilt className="lg:col-span-6 bg-white/3 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <Badge variant="neon">Local Integrations</Badge>
                                            <span className="text-[10px] font-mono text-green-500 font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Active API
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase text-foreground">Payment Gateway</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            Test how Zain Cash or CliQ handles transactions on custom storefronts instantly without transaction delay.
                                        </p>

                                        {/* Simulator Interface */}
                                        <div className="bg-zinc-950/80 border border-white/5 p-6 rounded-2xl font-mono text-xs text-left relative overflow-hidden">
                                            <div className="flex justify-between border-b border-white/10 pb-3 mb-4">
                                                <span className="text-zinc-500">PAYMENT_CONSOLE v1.0</span>
                                                <span className="text-neon font-bold">READY</span>
                                            </div>

                                            {/* Selector */}
                                            <div className="flex gap-2 mb-4">
                                                <button 
                                                    onClick={() => { setActiveMethod('zain'); setPaymentStatus('idle'); }}
                                                    className={`px-3 py-1.5 border rounded-lg text-[10px] uppercase font-bold cursor-pointer transition-colors ${activeMethod === 'zain' ? 'border-neon text-neon bg-neon/5' : 'border-white/5 text-zinc-500 hover:text-white'}`}
                                                >
                                                    Zain Cash
                                                </button>
                                                <button 
                                                    onClick={() => { setActiveMethod('cliq'); setPaymentStatus('idle'); }}
                                                    className={`px-3 py-1.5 border rounded-lg text-[10px] uppercase font-bold cursor-pointer transition-colors ${activeMethod === 'cliq' ? 'border-neon text-neon bg-neon/5' : 'border-white/5 text-zinc-500 hover:text-white'}`}
                                                >
                                                    CliQ Portal
                                                </button>
                                            </div>

                                            {/* Screen Content */}
                                            <div className="h-20 flex flex-col justify-center items-center border border-white/5 bg-zinc-900/40 rounded-xl px-4 text-center">
                                                {paymentStatus === 'idle' && (
                                                    <div className="space-y-1.5">
                                                        <p className="text-[10px] text-zinc-400">Total Purchase: <span className="text-white font-bold">145.00 JOD</span></p>
                                                        <button 
                                                            onClick={triggerPaymentSimulation}
                                                            className="px-4 py-1.5 bg-neon hover:bg-neon/90 text-white font-bold text-[10px] rounded-full uppercase tracking-wider cursor-pointer"
                                                        >
                                                            Simulate Checkout
                                                        </button>
                                                    </div>
                                                )}
                                                {paymentStatus === 'processing' && (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-3.5 h-3.5 border-t-2 border-neon rounded-full animate-spin" />
                                                        <span className="text-zinc-400 uppercase tracking-widest text-[10px]">Processing Transaction...</span>
                                                    </div>
                                                )}
                                                {paymentStatus === 'success' && (
                                                    <div className="space-y-1 text-green-500 font-bold uppercase tracking-wider">
                                                        <p className="text-[11px]">✓ Payment Received</p>
                                                        <p className="text-[9px] text-zinc-400 font-mono font-medium">Gateway: {activeMethod === 'zain' ? 'Zain Cash API' : 'CliQ Instant Settlement'}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Instant Settlements &bull; Zain Cash &bull; CliQ</span>
                                    </div>
                                </CardTilt>

                                {/* Case Study Bento Card (12 columns) */}
                                <CardTilt className="lg:col-span-12 bg-white/3 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col lg:flex-row justify-between gap-8 items-stretch overflow-hidden">
                                    <div className="space-y-6 lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="neon">Success Case</Badge>
                                            <span className="text-xs font-mono text-muted-foreground uppercase">Featured Work</span>
                                        </div>
                                        <h3 className="text-3xl font-black uppercase text-foreground">{t.caseStudy.title}</h3>
                                        <p className="text-muted leading-relaxed text-sm">
                                            {t.caseStudy.desc}
                                        </p>
                                        <div className="bg-neon/5 border border-neon/15 px-4 py-3 flex items-center gap-3 w-fit rounded-xl">
                                            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                                            <span className="text-neon font-mono text-xs font-bold uppercase tracking-wider">
                                                {t.caseStudy.outcome}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Visual Representation container */}
                                    <div className="lg:w-1/2 flex items-center justify-center p-6 border border-white/5 bg-black/40 rounded-2xl relative overflow-hidden min-h-[200px]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent pointer-events-none" />
                                        
                                        <div className="text-center space-y-4 relative z-10 font-mono text-xs leading-relaxed max-w-sm">
                                            <div className="flex justify-center mb-2">
                                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon font-black text-xl">
                                                    🎨
                                                </div>
                                            </div>
                                            <p className="text-foreground font-bold">BloB.JO E-commerce Store</p>
                                            <p className="text-zinc-400 text-[10px]">
                                                Integrated Zain Cash e-wallets, custom Print-On-Demand builders, and automated production slips.
                                            </p>
                                            <a 
                                                href="https://www.blobjor.me" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-1.5 text-neon font-bold hover:underline"
                                            >
                                                Visit Store <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </CardTilt>
                            </div>

                            {/* Accordion FAQ Section */}
                            <div className="max-w-4xl mx-auto mb-16">
                                <div className="text-center mb-12">
                                    <span className="text-neon font-mono font-bold tracking-widest uppercase block mb-3">FAQ</span>
                                    <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground">
                                        {t.faq.title}
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {t.faq.items.map((item, index) => (
                                        <AccordionItem 
                                            key={index} 
                                            question={item.q} 
                                            answer={item.a} 
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Sticky CTA alignment */}
                            <div className="text-center max-w-xl mx-auto border border-white/5 bg-white/3 backdrop-blur-md p-10 rounded-3xl hover:border-neon/30 transition-all duration-300">
                                <h3 className="text-2xl font-black uppercase text-white mb-4">Ready to sell online?</h3>
                                <p className="text-muted text-sm mb-8">
                                    Book a project estimate brief to integrate local payment gateways and print pipelines natively.
                                </p>
                                <Link 
                                    href="/#contact" 
                                    className="px-8 py-4 bg-neon hover:bg-[#B91616] text-white font-bold text-base rounded-full shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
                                >
                                    {t.cta}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
