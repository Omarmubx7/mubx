'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessView() {
    return (
        <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-[80vh]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="max-w-2xl w-full"
                >
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
                        {/* Background Glow */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon/5 blur-[100px] rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6 text-neon"
                        >
                            <CheckCircle className="w-10 h-10" />
                        </motion.div>

                        <h1 className="text-4xl font-bold text-white mb-4">Request Received!</h1>
                        <p className="text-muted text-lg mb-8 max-w-md mx-auto">
                            Thanks for reaching out! I&apos;ve received your project details and will be in touch shortly with an estimate.
                        </p>

                        <Link
                            href="/"
                            className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)]"
                        >
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
