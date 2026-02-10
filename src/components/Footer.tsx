'use client';

import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, isRTL, language } = useLanguage();

    const getHref = (path: string) => {
        return language === 'en' ? path : `${path}${path.includes('?') ? '&' : '?'}lang=${language}`;
    };

    return (
        <footer className="py-16 border-t border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-50" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Col 1: Brand (Span 2 cols on desktop) */}
                    <div className="md:col-span-2 space-y-6">
                        <Link href={getHref('/')} className="flex items-center gap-2 group">
                            <span className="relative h-20 w-auto min-w-[160px] transition-transform group-hover:scale-105">
                                <Image
                                    src="/icon.png"
                                    alt="MUBX Logo"
                                    width={260}
                                    height={100}
                                    className="h-full w-auto object-contain dark:invert-0 invert"
                                />
                            </span>
                        </Link>
                        <p className="text-muted leading-relaxed max-w-xs">
                            {t.footer.brandDesc}
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">{t.footer.navigation}</h3>
                        <nav className="flex flex-col gap-4">
                            <Link href={getHref('/')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all flex items-center gap-1 group-hover:gap-2"><span>{t.nav.home}</span></Link>
                            <Link href={getHref('/#about')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.about}</Link>
                            <Link href={getHref('/#projects')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.work}</Link>
                            <Link href={getHref('/#services')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.services}</Link>
                            <Link href={getHref('/blog')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.articles}</Link>
                            <Link href={getHref('/links')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">My Link Tree</Link>
                            <Link href={getHref('/contact')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.contact}</Link>
                            <Link href={getHref('/tools/website-cost-calculator-jordan')} className="text-neon hover:text-foreground hover:translate-x-1 transition-all font-bold mt-2">{t.nav.costCalc}</Link>
                            <Link href={getHref('/tools/neon-gradient-card')} className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all">{t.nav.freeTools}</Link>
                        </nav>

                        <div className="pt-6 border-t border-border mt-6">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-bold">{t.footer.payments}</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-card border border-border rounded text-xs text-muted-foreground font-mono">Zain Cash</span>
                                <span className="px-2 py-1 bg-card border border-border rounded text-xs text-muted-foreground font-mono">CliQ</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Connect */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">{t.footer.connect}</h3>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:mubxdev@proton.me" className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors group">
                                <Mail className="w-4 h-4" />
                                <span>mubxdev@proton.me</span>
                                <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all ${isRTL ? 'translate-x-2 group-hover:translate-x-0 rotate-180' : '-translate-x-2 group-hover:translate-x-0'}`} />
                            </a>
                            <a href="https://calendly.com/omarmubaidincs/30min" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                {t.footer.bookCall}
                            </a>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/Omarmubx7" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card hover:bg-muted/10 text-muted-foreground hover:text-foreground transition-all border border-border hover:border-neon/30" aria-label="Visit GitHub Profile">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/omarmubaidin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card hover:bg-muted/10 text-muted-foreground hover:text-foreground transition-all border border-border hover:border-neon/30" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/mubx.dev?igsh=MTg4bDVqMGdwbGdpbQ==" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card hover:bg-muted/10 text-muted-foreground hover:text-foreground transition-all border border-border hover:border-neon/30" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Social Proof Strip */}
                        <div className="pt-4 mt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground mb-2">{t.footer.selectedProjects}</p>
                            <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/60">
                                <span className="py-2">HTU Martial Arts</span>
                                <span className="py-2">•</span>
                                <span className="py-2">BloB.JO</span>
                                <span className="py-2">•</span>
                                <span className="py-2">Vynex Media</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} MUBX. {t.footer.rights}
                    </p>
                    <div className="flex gap-6">
                        <Link href={getHref('/legal/privacy')} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footer.legal.privacy}</Link>
                        <Link href={getHref('/legal/terms')} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footer.legal.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
