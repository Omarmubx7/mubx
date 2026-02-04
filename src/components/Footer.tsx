import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5 bg-black/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-50" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Col 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="flex items-center justify-center w-10 h-10 bg-black/50 border border-white/10 rounded-xl group-hover:border-neon/50 transition-colors">
                                <span className="text-lg font-black text-white tracking-tighter">M<span className="text-neon">.</span></span>
                            </span>
                            <span className="font-bold text-xl text-white tracking-tight">MUBX</span>
                        </Link>
                        <p className="text-muted leading-relaxed max-w-xs">
                            Built by Omar Mubaidin — Web Developer & CS Student in Amman, Jordan. Creating secure, high-performance web systems.
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="text-muted hover:text-white hover:translate-x-1 transition-all">Home</Link>
                            <Link href="/about" className="text-muted hover:text-white hover:translate-x-1 transition-all">About</Link>
                            <Link href="/#projects" className="text-muted hover:text-white hover:translate-x-1 transition-all">Work</Link>
                            <Link href="/#services" className="text-muted hover:text-white hover:translate-x-1 transition-all">Services</Link>
                            <Link href="/blog" className="text-muted hover:text-white hover:translate-x-1 transition-all">Lab</Link>
                            <Link href="/contact" className="text-muted hover:text-white hover:translate-x-1 transition-all">Contact</Link>
                        </nav>
                    </div>

                    {/* Col 3: Connect */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:omarmubaidin@proton.me" className="flex items-center gap-2 text-muted hover:text-neon transition-colors group">
                                <Mail className="w-4 h-4" />
                                <span>omarmubaidin@proton.me</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                            <a href="https://wa.me/962780090453" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                                WhatsApp: +962 780 090 453
                            </a>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/Omarmubx7" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-all border border-white/5 hover:border-neon/30" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/omarmubx" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-all border border-white/5 hover:border-neon/30" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/mubx.dev?igsh=MTg4bDVqMGdwbGdpbQ==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-all border border-white/5 hover:border-neon/30" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Social Proof Strip */}
                        <div className="pt-4 mt-4 border-t border-white/5">
                            <p className="text-xs text-muted/50 mb-2">Selected Projects</p>
                            <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                                <span>HTU Martial Arts</span>
                                <span>•</span>
                                <span>BloB.JO</span>
                                <span>•</span>
                                <span>Vynex Media</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted">
                        &copy; {new Date().getFullYear()} MUBX. All rights reserved.
                    </p>
                    <p className="text-xs text-muted/60">
                        Designed with precision in Amman.
                    </p>
                </div>
            </div>
        </footer>
    );
}
