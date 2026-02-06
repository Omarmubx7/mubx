'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, Calculator, Calendar, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

type Message = {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    options?: Option[];
};

type Option = {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    // Initial state: just the greeting
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm the MUBX Navigator. How can I help you today? 🤖",
            sender: 'bot',
            options: [
                { label: "I need a website", action: () => handleOption('website'), icon: <Rocket className="w-3 h-3" /> },
                { label: "Estimate Cost", action: () => handleOption('cost'), icon: <Calculator className="w-3 h-3" /> },
                { label: "Book a Call", action: () => handleOption('book'), icon: <Calendar className="w-3 h-3" /> },
                { label: "عربي / Arabic", action: () => handleOption('arabic'), icon: <Globe className="w-3 h-3" /> },
            ]
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const addMessage = (text: string, sender: 'bot' | 'user', options?: Option[]) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            options
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleOption = (key: string) => {
        // 1. User "says" the option
        const labels: Record<string, string> = {
            'website': "I need a new website.",
            'cost': "I want to estimate a price.",
            'book': "I want to book a call.",
            'arabic': "Do you speak Arabic?",
            'ecommerce': "E-commerce Store",
            'landing': "Landing Page / Business Site",
            'custom': "Custom Web App"
        };

        addMessage(labels[key] || key, 'user');

        // 2. Bot responds after delay
        setTimeout(() => {
            if (key === 'website') {
                addMessage("Awesome. What kind of project are you building?", 'bot', [
                    { label: "E-commerce Store", action: () => handleOption('ecommerce'), icon: <Rocket className="w-3 h-3" /> },
                    { label: "Business Site", action: () => handleOption('landing') },
                    { label: "Custom App", action: () => handleOption('custom') },
                ]);
            }
            else if (key === 'cost') {
                addMessage("I have a dedicated calculator for that! It's accurate for the Jordanian market.", 'bot', [
                    { label: "Open Calculator", action: () => window.location.href = '/tools/website-cost-calculator-jordan' }
                ]);
            }
            else if (key === 'book') {
                addMessage("Smart move. Let's skip the back-and-forth emails.", 'bot', [
                    { label: "Open Calendly", action: () => window.open('https://calendly.com/omarmubaidincs/30min', '_blank') }
                ]);
            }
            else if (key === 'arabic') {
                addMessage("طبعاً! MUBX now has a dedicated Arabic version.", 'bot', [
                    { label: "Go to Arabic Site", action: () => window.location.href = '/ar' }
                ]);
            }
            else if (key === 'ecommerce') {
                addMessage("E-commerce is my specialty (Zain Cash & CliQ integration included). You should check out the success story of BloB.JO.", 'bot', [
                    { label: "View E-commerce Page", action: () => window.location.href = '/services/ecommerce' },
                    { label: "View BloB.JO Case Study", action: () => window.location.href = '/projects/blob-jo' }
                ]);
            }
            else if (key === 'landing') {
                addMessage("Perfect for high conversion. Check out my pricing packages.", 'bot', [
                    { label: "View Pricing", action: () => window.location.href = '/services' }
                ]);
            }
            else if (key === 'custom') {
                addMessage("I love complex challenges. Let's discuss your architecture.", 'bot', [
                    { label: "Book Technical Call", action: () => window.open('https://calendly.com/omarmubaidincs/30min', '_blank') }
                ]);
            }
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                                <span className="font-bold text-sm text-white">MUBX Navigator</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-white text-black font-bold rounded-tr-none'
                                                : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Options (Only show for bot messages that have them) */}
                                    {msg.options && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {msg.options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={option.action}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neon/10 border border-neon/20 hover:bg-neon/20 text-neon text-xs font-bold transition-all hover:scale-105"
                                                >
                                                    {option.icon}
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer (Simplified as input is not needed for rule-based) */}
                        <div className="p-3 border-t border-white/10 bg-black/20 text-[10px] text-center text-muted">
                            Powered by MUBX Logic
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-neon text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,30,30,0.4)] hover:shadow-[0_0_30px_rgba(255,30,30,0.6)] transition-shadow"
            >
                {isOpen ? <ChevronRight className="w-6 h-6 rotate-90" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
