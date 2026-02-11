'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Check } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { initializeSupabaseStore } from '@/lib/db-init';

export default function Contact() {
    const { t, isRTL, language } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
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
                    <span className="text-neon font-medium tracking-wide uppercase mb-4 block">{t.contact.connect}</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                        {t.contact.titleStart} <span className="text-foreground">{t.contact.titleHighlight}</span>?
                    </h2>
                    <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                        {t.contact.desc1}
                        <br />
                        {t.contact.desc2}
                    </p>
                    <p className="text-muted text-lg max-w-xl mx-auto mb-12">
                        {t.contact.desc3}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left rtl:text-right mb-16">
                        {/* Contact Info & Urgency */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">{t.contact.availability.title}</h3>
                                <div className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                                            <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                                        </div>
                                        <span className="text-foreground font-bold">{t.contact.availability.status}</span>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {t.contact.availability.response} <span className="text-neon font-bold">{t.contact.availability.responseTime}</span>.
                                        <br />
                                        {t.contact.availability.context}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-xs text-muted/60 mb-1">
                                        {t.contact.availability.urgent}
                                    </p>
                                    <a href={t.contact.availability.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-foreground hover:text-neon flex items-center gap-2 transition-colors">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        {t.contact.availability.whatsapp}
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-muted hover:text-foreground transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                                        <Mail className="w-5 h-5 text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted/60">{t.contact.email}</p>
                                        <a href="mailto:mubxdev@proton.me" className="font-medium">mubxdev@proton.me</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-muted hover:text-foreground transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                                        <MapPin className="w-5 h-5 text-neon" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted/60">{t.contact.location}</p>
                                        <p className="font-medium">{t.contact.locationVal}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Lead Form */}
                        <div className="bg-card p-8 rounded-3xl border border-border relative overflow-hidden">
                            {/* Budget Filter Badge */}
                            <div className={`absolute top-0 ${isRTL ? 'left-0 rounded-br-xl' : 'right-0 rounded-bl-xl'} bg-muted/10 px-3 py-1 text-[10px] text-muted font-medium uppercase tracking-wider backdrop-blur-md`}>
                                {t.contact.form.badge}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-6">{t.contact.form.title}</h3>

                            {/* Why Clients Choose MUBX - Compact Bullets */}
                            <div className="flex flex-wrap gap-4 text-xs font-bold text-muted/80 mb-6 font-mono">
                                <span className="flex items-center gap-2 px-2 py-1 bg-background rounded border border-border">
                                    <Check className="w-3 h-3 text-neon" /> {t.contact.form.fastReplies}
                                </span>
                                <span className="flex items-center gap-2 px-2 py-1 bg-background rounded border border-border">
                                    <Check className="w-3 h-3 text-neon" /> {t.contact.form.security}
                                </span>
                                <span className="flex items-center gap-2 px-2 py-1 bg-background rounded border border-border">
                                    <Check className="w-3 h-3 text-neon" /> {t.contact.form.arabicSupport}
                                </span>
                            </div>

                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);

                                setFormState('submitting');
                                const supabase = await initializeSupabaseStore();

                                if (!supabase) {
                                    setFormState('error');
                                    console.error('Supabase client not initialized. Check your environment variables.');
                                    return;
                                }

                                try {
                                    const { error } = await supabase
                                        .from('contact_submissions')
                                        .insert([{
                                            email: formData.get('email'),
                                            goal: formData.get('goal'),
                                            budget: formData.get('budget'),
                                            deadline: formData.get('deadline'),
                                            message: formData.get('message'),
                                            language: language // Capturing the user's language preference
                                        }]);

                                    if (error) throw error;

                                    // Trigger email notification
                                    fetch('/api/notify', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                            email: formData.get('email'),
                                            goal: formData.get('goal'),
                                            budget: formData.get('budget'),
                                            deadline: formData.get('deadline'),
                                            message: formData.get('message'),
                                            language: language
                                        }),
                                    }).catch(err => console.error('Notification error:', err));

                                    form.reset();
                                    setFormState('success');
                                    setTimeout(() => setFormState('idle'), 5000);
                                } catch (error: any) {
                                    console.error('🔥 MUBX Submission Error:', error.message || error);
                                    if (error.details) console.error('Error Details:', error.details);
                                    if (error.hint) console.error('Hint:', error.hint);
                                    setFormState('error');
                                    setTimeout(() => setFormState('idle'), 5000);
                                }
                            }} className="space-y-4">
                                {/* Qualifiers Row */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                                    <div className="space-y-1">
                                        <label htmlFor="goal" className="text-[10px] font-bold text-foreground uppercase tracking-wider">{t.contact.form.goal}</label>
                                        <select
                                            id="goal"
                                            name="goal"
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-neon transition-colors appearance-none cursor-pointer"
                                        >
                                            {t.contact.form.goalOptions.map((opt: string) => (
                                                <option key={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="budget" className="text-[10px] font-bold text-foreground uppercase tracking-wider">{t.contact.form.budget}</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-neon transition-colors appearance-none cursor-pointer"
                                        >
                                            {t.contact.form.budgetOptions.map((opt: string) => (
                                                <option key={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="deadline" className="text-[10px] font-bold text-foreground uppercase tracking-wider">{t.contact.form.deadline}</label>
                                        <select
                                            id="deadline"
                                            name="deadline"
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-neon transition-colors appearance-none cursor-pointer"
                                        >
                                            {t.contact.form.deadlineOptions.map((opt: string) => (
                                                <option key={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold ml-1">{t.contact.form.email}</label>
                                    <input type="email" name="email" id="email" required className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:border-neon focus:ring-1 focus:ring-neon/20 focus:outline-none transition-all placeholder:text-muted/50" placeholder={t.contact.form.emailPlaceholder} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold ml-1">{t.contact.form.details}</label>
                                    <textarea name="message" id="message" rows={4} required className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:border-neon focus:ring-1 focus:ring-neon/20 focus:outline-none transition-all resize-none placeholder:text-muted/50" placeholder={t.contact.form.detailsPlaceholder}></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full py-4 bg-neon text-black font-bold text-lg rounded-xl hover:bg-background hover:text-foreground border border-transparent hover:border-neon transition-all transform hover:scale-[1.01] shadow-[0_0_20px_rgba(255,30,30,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formState === 'submitting' ? t.contact.form.sending : t.contact.form.submit}
                                </button>

                                {formState === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-500 font-bold text-center text-sm">
                                        {t.contact.form.success}
                                    </motion.div>
                                )}
                                {formState === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-500 font-bold text-center text-sm">
                                        {t.contact.form.error}
                                    </motion.div>
                                )}
                            </form>
                            <p className="text-xs text-muted/60 text-center mt-4 leading-relaxed">
                                {t.contact.form.footer}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-muted/60 max-w-lg mx-auto mb-8 border-t border-border pt-6">
                        {t.contact.typical} <span className="text-foreground/80">{t.contact.typicalList}</span> {t.contact.typicalContext}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-muted text-sm">
                        <MapPin className="w-4 h-4 text-neon" />
                        <span>{t.contact.locationVal}</span>
                    </div>
                </motion.div >
            </div >

            {/* FAQ Section - Added for Trust */}
            < motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }
                }
                variants={fadeUp}
                className="mt-24 text-left rtl:text-right max-w-3xl mx-auto border-t border-border pt-16 relative z-10"
            >
                <div className="container mx-auto px-6 md:px-12">
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t.contact.faq.title}</h3>
                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h4 className="text-foreground font-bold mb-2 text-sm uppercase tracking-wide">{t.contact.faq.q1.q}</h4>
                            <p className="text-muted text-sm leading-relaxed">{t.contact.faq.q1.a}</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h4 className="text-foreground font-bold mb-2 text-sm uppercase tracking-wide">{t.contact.faq.q2.q}</h4>
                            <p className="text-muted text-sm leading-relaxed">{t.contact.faq.q2.a}</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h4 className="text-foreground font-bold mb-2 text-sm uppercase tracking-wide">{t.contact.faq.q3.q}</h4>
                            <p className="text-muted text-sm leading-relaxed">{t.contact.faq.q3.a}</p>
                        </div>
                    </div>
                </div>
            </motion.div >

        </section >
    );
}
