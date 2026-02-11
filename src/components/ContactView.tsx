'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUp } from '@/lib/motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';

export default function ContactView() {
    const router = useRouter();
    const { language, t } = useLanguage();
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        setFormState('submitting');

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([{
                    email: formData.get('email'),
                    goal: formData.get('type'),
                    budget: formData.get('budget'),
                    deadline: formData.get('timeline'),
                    message: formData.get('message') || formData.get('details'),
                    language: language
                }]);

            if (error) throw error;

            // Trigger email notification
            fetch('/api/notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    goal: formData.get('type'),
                    budget: formData.get('budget'),
                    deadline: formData.get('timeline'),
                    message: formData.get('message') || formData.get('details'),
                    language: language
                }),
            }).catch(err => console.error('Notification error:', err));

            router.push(language === 'en' ? '/success' : `/success?lang=${language}`);
        } catch (error: any) {
            console.error('Submission error details:', error.message || error);
            setFormState('error');
            setTimeout(() => setFormState('idle'), 5000);
        }
    };

    return (
        <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-6 md:px-12">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <Badge variant="neon" className="mb-6">{t.contact.availability.title}</Badge>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            {t.contact.titleStart} <span className="text-neon">{t.contact.titleHighlight}</span>
                        </h1>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            {t.contact.desc1}
                            <br />
                            <span className="text-foreground/80 font-medium">{t.contact.availability.response} {t.contact.availability.responseTime}.</span>
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon/5 blur-[100px] rounded-full pointer-events-none" />

                        <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10" noValidate>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.name}</label>
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder={t.contact.form.namePlaceholder}
                                        className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.email}</label>
                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        required
                                        placeholder={t.contact.form.emailPlaceholder}
                                        className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.business}</label>
                                    <input
                                        name="business"
                                        id="business"
                                        type="text"
                                        placeholder={t.contact.form.businessPlaceholder}
                                        className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.goal}</label>
                                    <select name="type" id="type" className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors appearance-none md:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] md:bg-[length:20px_20px] md:bg-no-repeat md:bg-[right_1rem_center]">
                                        {t.contact.form.goalOptions.map((opt: string) => (
                                            <option key={opt} value={opt} className="bg-background text-foreground">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.budget}</label>
                                    <select name="budget" id="budget" className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors appearance-none md:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] md:bg-[length:20px_20px] md:bg-no-repeat md:bg-[right_1rem_center]">
                                        {t.contact.form.budgetOptions.map((opt: string) => (
                                            <option key={opt} value={opt} className="bg-background text-foreground">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.deadline}</label>
                                    <select name="timeline" id="timeline" className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors appearance-none md:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] md:bg-[length:20px_20px] md:bg-no-repeat md:bg-[right_1rem_center]">
                                        {t.contact.form.deadlineOptions.map((opt: string) => (
                                            <option key={opt} value={opt} className="bg-background text-foreground">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground uppercase tracking-wider">{t.contact.form.details}</label>
                                <textarea
                                    name="details"
                                    id="details"
                                    rows={4}
                                    required
                                    placeholder={t.contact.form.detailsPlaceholder}
                                    className="w-full bg-card/40 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-neon/50 transition-colors resize-none"
                                />
                            </div>

                            <button
                                disabled={formState === 'submitting'}
                                type="submit"
                                className="w-full py-5 bg-neon text-black font-black uppercase tracking-widest text-lg rounded-xl hover:bg-background hover:text-foreground border border-transparent hover:border-neon transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formState === 'submitting' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        {t.contact.form.submit}
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {formState === 'error' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-500 font-bold text-center text-sm">
                                    {t.contact.form.error}
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
