'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import dynamic from 'next/dynamic';
const PopupModal = dynamic(() => import('react-calendly').then((mod) => mod.PopupModal), {
    ssr: false
});
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-neon/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="relative z-10"
                >
                    <span className="text-neon font-medium tracking-wide uppercase mb-4 block">Let&apos;s Connect</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Ready to build with <span className="text-white">MUBX</span>?
                    </h2>
                    <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                        Ready to scale? I&apos;m currently accepting new projects for Q1.
                        <br />
                        Let&apos;s discuss how we can engineer your growth.
                    </p>
                    <p className="text-muted text-lg max-w-xl mx-auto mb-12">
                        Whether you need a full-stack audit, a database redesign, or a complete product build, I&apos;m ready to architect the solution.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
                        {/* Contact Info & Urgency */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Availability & Response</h3>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                                            <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                                        </div>
                                        <span className="text-white font-bold">Accepting 2 New Projects (Q1)</span>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        I typically reply within <span className="text-neon font-bold">24 hours</span>.
                                        <br />
                                        Currently prioritizing e-commerce and SaaS projects.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-muted hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Mail className="w-5 h-5 text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted/60">Email</p>
                                        <a href="mailto:omarmubaidin@proton.me" className="font-medium">omarmubaidin@proton.me</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-muted hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <MapPin className="w-5 h-5 text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted/60">Location</p>
                                        <p className="font-medium">Amman, Jordan (Remote Available)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Lead Form */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Tell me about your project</h3>
                            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2">Your Email</label>
                                    <input type="email" name="email" id="email" required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted mb-2">Project Details</label>
                                    <textarea name="message" id="message" rows={4} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors resize-none" placeholder="I need a landing page for..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-neon text-black font-bold rounded-lg hover:bg-white transition-all transform hover:scale-[1.02]">
                                    Send Inquiry
                                </button>
                            </form>
                            <p className="text-xs text-muted/40 text-center mt-4">
                                No spam. Direct to my encrypted inbox.
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-muted/60 max-w-lg mx-auto mb-8 border-t border-white/5 pt-6">
                        Typical projects: <span className="text-white/80">landing pages, e-commerce MVPs, and web systems</span> for startups in Amman and worldwide.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-muted text-sm">
                        <MapPin className="w-4 h-4 text-neon" />
                        <span>Amman, Jordan (Available Remote)</span>
                    </div>
                </motion.div>
            </div>

            {mounted && (
                <PopupModal
                    url="https://calendly.com/omarmubaidincs/30min"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={document.getElementById("root") || document.body}
                />
            )}
        </section>
    );
}
