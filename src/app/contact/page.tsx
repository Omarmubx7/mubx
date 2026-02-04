
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function ContactPage() {
    // --------------------------------------------------------------------------
    // Formspree Integration
    // Endpoint: https://formspree.io/f/xojnaqoo
    // --------------------------------------------------------------------------
    const [state, handleSubmit] = useForm("xojnaqoo");

    if (state.succeeded) {
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
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
                            {/* Background Glow */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon/5 blur-[100px] rounded-full pointer-events-none" />

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6 text-neon"
                            >
                                <CheckCircle className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-white mb-2">Request Received!</h3>
                            <p className="text-muted max-w-md">
                                Thanks for reaching out. I&apos;ll review your project details and get back to you shortly with an estimate.
                            </p>
                            <a href="/" className="mt-8 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all">Back to Home</a>
                        </div>
                    </motion.div>
                </div>
                <Footer />
            </main>
        );
    }

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
                        <Badge variant="neon" className="mb-6">Project Estimate</Badge>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            START YOUR <span className="text-neon">PROJECT</span>
                        </h1>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            Fill out the form below to get a ballpark estimate and timeline.
                            <br />
                            <span className="text-white/80 font-medium">Replies within 24 hours. Booking for Q1 2026.</span>
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon/5 blur-[100px] rounded-full pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Your Name</label>
                                    <input
                                        name="name"
                                        id="name"
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                                    <input
                                        name="email"
                                        id="email"
                                        required
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Business Name</label>
                                    <input
                                        name="business"
                                        id="business"
                                        type="text"
                                        placeholder="Company Ltd."
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Project Type</label>
                                    <select name="type" id="type" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors appearance-none">
                                        <option>Landing Page</option>
                                        <option>E-commerce MVP</option>
                                        <option>Web Application</option>
                                        <option>Database Audit</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Budget Range (JD)</label>
                                    <select name="budget" id="budget" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors appearance-none">
                                        <option>150 - 300 JD</option>
                                        <option>300 - 600 JD</option>
                                        <option>600 - 1000 JD</option>
                                        <option>1000+ JD</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Timeline</label>
                                    <select name="timeline" id="timeline" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors appearance-none">
                                        <option>ASAP (1-2 weeks)</option>
                                        <option>Standard (2-4 weeks)</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Project Details</label>
                                <textarea
                                    name="details"
                                    id="details"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your goals, specific features you need, and any design preferences..."
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon/50 transition-colors resize-none"
                                />
                                <ValidationError prefix="Message" field="details" errors={state.errors} className="text-red-500 text-sm" />
                            </div>

                            <button
                                disabled={state.submitting}
                                type="submit"
                                className="w-full py-5 bg-neon text-black font-black uppercase tracking-widest text-lg rounded-xl hover:bg-white transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
