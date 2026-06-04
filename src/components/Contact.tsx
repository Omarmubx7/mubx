'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Check, X, User, Target, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t, language } = useLanguage();
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; business?: string; message?: string }>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business: '',
        website: '',
        goal: '',
        budget: '',
        deadline: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (fieldErrors[name as keyof typeof fieldErrors]) {
            setFieldErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateStep = (s: number) => {
        const errors: { name?: string; email?: string; business?: string; message?: string } = {};
        if (s === 1) {
            if (!formData.name.trim()) errors.name = language === 'ar' ? 'الرجاء إدخال اسمك' : 'Please enter your name';
            if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = language === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address';
            if (!formData.business.trim()) errors.business = language === 'ar' ? 'الرجاء إدخال اسم عملك' : 'Please enter your business name';
        } else if (s === 3) {
            if (!formData.message.trim() || formData.message.length < 10) errors.message = language === 'ar' ? 'يرجى كتابة 10 أحرف على الأقل' : 'Please enter at least 10 characters';
        }
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(step)) setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // If not on final step, just advance to the next step when pushing Enter
        if (step !== 3) {
            nextStep();
            return;
        }

        if (!validateStep(3)) return;

        setFormState('submitting');

        const fetchWithTimeout = (url: string, options: RequestInit, timeout = 8000) => {
            return new Promise<Response>((resolve, reject) => {
                const timer = setTimeout(() => reject(new Error('Submission request timed out')), timeout);
                fetch(url, options)
                    .then(res => {
                        clearTimeout(timer);
                        resolve(res);
                    })
                    .catch(err => {
                        clearTimeout(timer);
                        reject(err);
                    });
            });
        };

        try {
            const dbPromise = fetchWithTimeout('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    business: formData.business,
                    website: formData.website,
                    goal: formData.goal || 'General Inquiry',
                    budget: formData.budget || 'Not Specified',
                    deadline: formData.deadline || 'Flexible',
                    message: formData.message,
                    language: language
                }),
            }).then(async (res) => {
                if (!res.ok) {
                    const payload = await res.json().catch(() => ({}));
                    throw new Error(payload?.details || payload?.error || 'Failed to save contact submission');
                }
                return res;
            });

            const notifyPromise = fetchWithTimeout('/api/notify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, language }),
            }).then(async (res) => {
                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    console.error('📧 Resend Error:', errorData);
                }
                return res;
            }).catch((err) => {
                console.error('📧 Resend Fetch Error:', err);
            });

            await Promise.all([dbPromise, notifyPromise]);

            setFormData({ name: '', email: '', business: '', website: '', goal: '', budget: '', deadline: '', message: '' });
            setFormState('success');
            setStep(1);
            setTimeout(() => setFormState('idle'), 5000);
        } catch (error: unknown) {
            console.error('🔥 MUBX Submission Error:', error);
            setFormState('error');
            setTimeout(() => setFormState('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center py-24 relative z-10 overflow-hidden bg-background">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-neon/5 blur-[100px] rounded-full -z-10" />

            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <p className="text-neon font-mono text-sm mb-4 tracking-widest">06</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            {t.contact.titleStart} <span className="text-neon">{t.contact.titleHighlight}</span>?
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
                            {t.contact.desc3}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Sidebar: Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-8 rounded-none bg-card/10 border border-border/30 shadow-none">
                            <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-wider">{t.contact.availability.title}</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-green-500 rounded-none animate-pulse" />
                                <span className="text-foreground font-bold">{t.contact.availability.status}</span>
                            </div>
                            <p className="text-sm text-muted leading-relaxed mb-6">
                                {t.contact.availability.response} <span className="text-neon font-bold">{t.contact.availability.responseTime}</span>.
                            </p>
                            <a href={t.contact.availability.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-neon hover:underline">
                                <MessageSquare className="w-4 h-4" /> {t.contact.availability.whatsapp}
                            </a>
                        </div>

                        <div className="space-y-4 px-4">
                            <div className="flex items-center gap-4 text-muted">
                                <div className="w-10 h-10 rounded-none bg-card flex items-center justify-center border border-border/30">
                                    <Mail className="w-5 h-5 text-neon" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-muted/60">{t.contact.email}</p>
                                    <a href="mailto:mubxdev@proton.me" className="text-sm font-medium hover:text-neon transition-colors">mubxdev@proton.me</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-muted">
                                <div className="w-10 h-10 rounded-none bg-card flex items-center justify-center border border-border/30">
                                    <MapPin className="w-5 h-5 text-neon" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-muted/60">{t.contact.location}</p>
                                    <p className="text-sm font-medium">{t.contact.locationVal}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main: Multi-step Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-card/10 p-8 md:p-12 rounded-none border border-border/30 relative overflow-hidden shadow-none">
                            {/* Progress Header */}
                            <div className="flex items-center justify-between mb-16 relative">
                                <div className="absolute top-5 left-0 w-full h-[2px] bg-border/30 -translate-y-1/2 -z-10" />
                                <div
                                    className="absolute top-5 left-0 h-[2px] bg-neon -translate-y-1/2 -z-10 transition-all duration-500"
                                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                                />
                                {[1, 2, 3].map((s) => {
                                    const isActive = step === s;
                                    const isCompleted = step > s;
                                    let icon = <User className="w-4 h-4" />;
                                    let label = (t.contact.form as { step1Label?: string }).step1Label || 'Details';
                                    if (s === 2) {
                                        icon = <Target className="w-4 h-4" />;
                                        label = (t.contact.form as { step2Label?: string }).step2Label || 'Scope';
                                    } else if (s === 3) {
                                        icon = <MessageSquare className="w-4 h-4" />;
                                        label = (t.contact.form as { step3Label?: string }).step3Label || 'Brief';
                                    }

                                    return (
                                        <div key={s} className="flex flex-col items-center gap-2 relative z-10">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (s < step) {
                                                        setStep(s);
                                                    } else if (s > step) {
                                                        // Validate steps sequentially
                                                        let canGo = true;
                                                        for (let checkStep = step; checkStep < s; checkStep++) {
                                                            if (!validateStep(checkStep)) {
                                                                canGo = false;
                                                                break;
                                                            }
                                                        }
                                                        if (canGo) setStep(s);
                                                    }
                                                }}
                                                className={`w-10 h-10 rounded-none border flex items-center justify-center transition-all duration-500 ${
                                                    isActive || isCompleted 
                                                        ? 'border-neon bg-background text-neon shadow-[0_0_15px_rgba(225,29,29,0.2)]' 
                                                        : 'border-border/30 bg-card text-muted hover:border-neon/40 hover:text-neon'
                                                }`}
                                                aria-label={label}
                                            >
                                                {icon}
                                            </button>
                                            <span className={`text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 font-bold ${
                                                isActive ? 'text-neon font-black' : 'text-muted-foreground'
                                            }`}>
                                                {label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-foreground mb-8">Business Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.name}</label>
                                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.form.namePlaceholder} className={`w-full bg-background border rounded-none px-5 py-4 focus:border-neon transition-all outline-none ${fieldErrors.name ? 'border-red-500' : 'border-border/30'}`} />
                                                    {fieldErrors.name && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.name}</p>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.email}</label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.contact.form.emailPlaceholder} className={`w-full bg-background border rounded-none px-5 py-4 focus:border-neon transition-all outline-none ${fieldErrors.email ? 'border-red-500' : 'border-border/30'}`} />
                                                    {fieldErrors.email && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.email}</p>}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.business}</label>
                                                    <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder={t.contact.form.businessPlaceholder} className={`w-full bg-background border rounded-none px-5 py-4 focus:border-neon transition-all outline-none ${fieldErrors.business ? 'border-red-500' : 'border-border/30'}`} />
                                                    {fieldErrors.business && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.business}</p>}
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.website}</label>
                                                    <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder={t.contact.form.websitePlaceholder} className="w-full bg-background border border-border/30 rounded-none px-5 py-4 focus:border-neon transition-all outline-none" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-foreground mb-8">Project Scope</h3>
                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.goal}</label>
                                                    <select name="goal" value={formData.goal} onChange={handleChange} className="w-full bg-background border border-border/30 rounded-none ps-4 pe-10 py-4 focus:border-neon transition-all outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[right_1rem_center] rtl:bg-[left_1rem_center]">
                                                        {t.contact.form.goalOptions.map((opt: string) => <option key={opt} className="bg-background text-foreground">{opt}</option>)}
                                                    </select>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.budget}</label>
                                                        <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-background border border-border/30 rounded-none ps-4 pe-10 py-4 focus:border-neon transition-all outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[right_1rem_center] rtl:bg-[left_1rem_center]">
                                                            {t.contact.form.budgetOptions.map((opt: string) => <option key={opt} className="bg-background text-foreground">{opt}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.deadline}</label>
                                                        <select name="deadline" value={formData.deadline} onChange={handleChange} className="w-full bg-background border border-border/30 rounded-none ps-4 pe-10 py-4 focus:border-neon transition-all outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23888%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-no-repeat bg-[right_1rem_center] rtl:bg-[left_1rem_center]">
                                                            {t.contact.form.deadlineOptions.map((opt: string) => <option key={opt} className="bg-background text-foreground">{opt}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-foreground mb-8">Final Details</h3>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-muted uppercase tracking-wider">{t.contact.form.details}</label>
                                                <textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder={t.contact.form.detailsPlaceholder} className={`w-full bg-background border rounded-none px-5 py-4 focus:border-neon transition-all outline-none resize-none ${fieldErrors.message ? 'border-red-500' : 'border-border/30'}`} />
                                                {fieldErrors.message && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.message}</p>}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="flex items-center justify-between pt-8 border-t border-border/30">
                                    {step > 1 ? (
                                        <button type="button" onClick={prevStep} className="flex items-center gap-2 text-muted hover:text-foreground font-bold transition-colors">
                                            <ChevronLeft className="w-5 h-5" /> Back
                                        </button>
                                    ) : <div />}

                                    {step < 3 ? (
                                        <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-none hover:bg-neon/90 transition-all">
                                            Next <ChevronRight className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <div className="flex flex-col items-start gap-3">
                                            <button
                                                type="submit"
                                                disabled={formState === 'submitting'}
                                                className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-none hover:bg-neon/90 transition-all disabled:opacity-50"
                                            >
                                                {formState === 'submitting' ? t.contact.form.sending : t.contact.form.submit}
                                            </button>
                                            {formState === 'submitting' && (
                                                <div className="flex gap-1.5 items-center justify-center mt-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-bounce" style={{ animationDelay: '150ms' }} />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-bounce" style={{ animationDelay: '300ms' }} />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {formState === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mt-6 p-6 rounded-none bg-green-500/10 border border-green-500/50 text-green-500 flex flex-col items-center gap-2 text-center"
                                    >
                                        <div className="w-10 h-10 rounded-none bg-green-500/20 flex items-center justify-center mb-2">
                                            <Check className="w-6 h-6" />
                                        </div>
                                        <p className="font-bold text-lg">{t.contact.form.success}</p>
                                    </motion.div>
                                )}
                                {formState === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mt-6 p-6 rounded-none bg-red-500/10 border border-red-500/50 text-red-500 flex flex-col items-center gap-2 text-center"
                                    >
                                        <div className="w-10 h-10 rounded-none bg-red-500/20 flex items-center justify-center mb-2">
                                            <X className="w-6 h-6" />
                                        </div>
                                        <p className="font-bold text-lg">{t.contact.form.error}</p>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
