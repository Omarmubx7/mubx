'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
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
                    <span className="text-neon font-medium tracking-wide uppercase mb-4 block">Let's Connect</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Ready to build with <span className="text-white">MUBX</span>?
                    </h2>
                    <p className="text-neon/80 text-lg mb-8 font-medium">
                        CS student and web developer building secure, data‑driven systems in Amman, Jordan.
                    </p>
                    <p className="text-muted text-lg max-w-xl mx-auto mb-12">
                        Whether you need a full-stack audit, a database redesign, or a complete product build, I'm ready to engineer the solution.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 mb-12">
                        <div className="flex flex-col md:flex-row gap-4">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex items-center gap-2 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 cursor-pointer"
                            >
                                <Mail className="w-5 h-5" />
                                Get a Project Estimate
                            </button>
                            <a
                                href="https://github.com/Omarmubx7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/omarmubx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                        <div className="text-muted text-sm mt-4">
                            <p>Email: <a href="mailto:omarmubaidin@proton.me" className="text-white hover:text-neon transition-colors">omarmubaidin@proton.me</a></p>
                            <p>Phone / WhatsApp: <span className="text-white">+962 780 090 453</span></p>
                        </div>
                    </div>

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
