'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, Calculator, Calendar, Globe, Rocket, Code, DollarSign, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type Message = {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    options?: Option[];
    timestamp: number;
};

type Option = {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Fallback to 'en' if searchParams is null (during build or initial load)
    const language = searchParams?.get('lang') === 'ar' ? 'ar' : 'en';

    // Initial greeting based on current language
    const [messages, setMessages] = useState<Message[]>([]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const isFirstRun = useRef(true);

    // Initialize or reset chat when language changes
    useEffect(() => {
        const greetingText = language === 'ar'
            ? "مرحباً! أنا المساعد الذكي لـ MUBX. كيف يمكنني مساعدتك اليوم؟ 🤖"
            : "Hi! I'm the MUBX Navigator. How can I help you today? 🤖";

        const initialOptions: Option[] = language === 'ar' ? [
            { label: "أريد موقعاً إلكترونياً", action: () => handleOption('website'), icon: <Rocket className="w-3 h-3" /> },
            { label: "حساب التكلفة", action: () => handleOption('cost'), icon: <Calculator className="w-3 h-3" /> },
            { label: "حجز استشارة", action: () => handleOption('book'), icon: <Calendar className="w-3 h-3" /> },
            { label: "Switch to English", action: () => handleOption('english'), icon: <Globe className="w-3 h-3" /> },
        ] : [
            { label: "I need a website", action: () => handleOption('website'), icon: <Rocket className="w-3 h-3" /> },
            { label: "Estimate Cost", action: () => handleOption('cost'), icon: <Calculator className="w-3 h-3" /> },
            { label: "Book a Call", action: () => handleOption('book'), icon: <Calendar className="w-3 h-3" /> },
            { label: "التحويل للعربية", action: () => handleOption('arabic'), icon: <Globe className="w-3 h-3" /> },
        ];

        // Reset conversation on language switch if it's open, or just ensure first message is correct
        setMessages([{
            id: 'init',
            text: greetingText,
            sender: 'bot',
            options: initialOptions,
            timestamp: Date.now()
        }]);

    }, [language]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const addMessage = (text: string, sender: 'bot' | 'user', options?: Option[]) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            options,
            timestamp: Date.now()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleSwitchLanguage = (newLang: 'en' | 'ar') => {
        // Optimistic UI update
        const params = new URLSearchParams(searchParams?.toString() || '');
        params.set('lang', newLang);
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleOption = (key: string) => {
        // Knowledge Base for responses
        const responses = {
            en: {
                website: "Awesome. What kind of project are you building?",
                cost: "I have a dedicated calculator for that! It's accurate for the Jordanian market.",
                book: "Smart move. Let's skip the back-and-forth emails.",
                ecommerce: "E-commerce is my specialty (Zain Cash & CliQ integration included). You should check out the success story of BloB.JO.",
                landing: "Perfect for high conversion. Check out my pricing packages.",
                custom: "I love complex challenges. Let's discuss your architecture.",
                tech: "My core stack is Next.js 14, TypeScript, and Tailwind CSS. This ensures 100/100 Performance scores."
            },
            ar: {
                website: "رائع. ما هو نوع المشروع الذي تريد بناءه؟",
                cost: "لدي حاسبة مخصصة لذلك! تعطي تقديرات دقيقة للسوق الأردني.",
                book: "خيار ممتاز. دعنا نحدد وقتاً للمكالمة.",
                ecommerce: "المتاجر الإلكترونية هي تخصصي (شاملة ربط زين كاش و CliQ). أنصحك برؤية قصة نجاح BloB.JO.",
                landing: "ممتاز لزيادة المبيعات والانتشار. تفضل بزيارة صفحة الباقات.",
                custom: "أحب التحديات البرمجية المعقدة. دعنا نناقش التفاصيل التقنية.",
                tech: "أستخدم أحدث التقنيات: Next.js 14, TypeScript, Tailwind CSS لضمان أداء فائق وسرعة عالية."
            }
        };

        const t = language === 'ar' ? responses.ar : responses.en;

        // User Inputs (Echo back what they clicked)
        const userLabels: Record<string, string> = language === 'ar' ? {
            'website': "أريد موقعاً إلكترونياً",
            'cost': "حساب التكلفة التقريبية",
            'book': "حجز مكالمة استشارية",
            'arabic': "التحويل للعربية",
            'english': "Switch to English",
            'ecommerce': "متجر إلكتروني",
            'landing': "موقع تعريفي للشركة",
            'custom': "تطبيق خاص / مخصص"
        } : {
            'website': "I need a new website",
            'cost': "Estimate a price",
            'book': "Book a consultation",
            'arabic': "Switch to Arabic",
            'english': "Switch to English",
            'ecommerce': "E-commerce Store",
            'landing': "Landing Page / Business Site",
            'custom': "Custom Web App"
        };

        // Add user message
        addMessage(userLabels[key] || key, 'user');

        // Bot Logic
        setTimeout(() => {
            if (key === 'website') {
                const options: Option[] = language === 'ar' ? [
                    { label: "متجر إلكتروني", action: () => handleOption('ecommerce'), icon: <Briefcase className="w-3 h-3" /> },
                    { label: "موقع شركة", action: () => handleOption('landing'), icon: <Rocket className="w-3 h-3" /> },
                    { label: "تطبيق مخصص", action: () => handleOption('custom'), icon: <Code className="w-3 h-3" /> },
                ] : [
                    { label: "E-commerce Store", action: () => handleOption('ecommerce'), icon: <Briefcase className="w-3 h-3" /> },
                    { label: "Business Site", action: () => handleOption('landing'), icon: <Rocket className="w-3 h-3" /> },
                    { label: "Custom App", action: () => handleOption('custom'), icon: <Code className="w-3 h-3" /> },
                ];
                addMessage(t.website, 'bot', options);
            }
            else if (key === 'cost') {
                addMessage(t.cost, 'bot', [{
                    label: language === 'ar' ? "فتح الحاسبة" : "Open Calculator",
                    action: () => window.location.href = `/tools/website-cost-calculator-jordan?lang=${language}`,
                    icon: <Calculator className="w-3 h-3" />
                }]);
            }
            else if (key === 'book') {
                addMessage(t.book, 'bot', [{
                    label: language === 'ar' ? "فتح Calendly" : "Open Calendly",
                    action: () => window.open('https://calendly.com/omarmubaidincs/30min', '_blank'),
                    icon: <Calendar className="w-3 h-3" />
                }]);
            }
            else if (key === 'arabic') {
                handleSwitchLanguage('ar');
            }
            else if (key === 'english') {
                handleSwitchLanguage('en');
            }
            else if (key === 'ecommerce') {
                addMessage(t.ecommerce, 'bot', [
                    { label: language === 'ar' ? "تفاصيل الخدمة" : "View Service", action: () => window.location.href = `/services/ecommerce?lang=${language}` },
                    { label: language === 'ar' ? "مشاهدة BloB.JO" : "View Case Study", action: () => window.location.href = `/projects/blob-jo?lang=${language}` }
                ]);
            }
            else if (key === 'landing') {
                addMessage(t.landing, 'bot', [
                    { label: language === 'ar' ? "عرض الباقات" : "View Packages", action: () => window.location.href = `/#services?lang=${language}` }
                ]);
            }
            else if (key === 'custom') {
                addMessage(t.custom, 'bot', [
                    { label: language === 'ar' ? "حجز مكالمة تقنية" : "Book Technical Call", action: () => window.open('https://calendly.com/omarmubaidincs/30min', '_blank') }
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
                        className="mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
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
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neon/10 border border-neon/20 hover:bg-neon/20 text-neon text-xs font-bold transition-all hover:scale-105 text-left"
                                                >
                                                    {option.icon}
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <span className="text-[10px] text-muted/50 mt-1 px-1">
                                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
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
                className="w-14 h-14 rounded-full bg-neon text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,30,30,0.4)] hover:shadow-[0_0_30px_rgba(255,30,30,0.6)] transition-shadow relative"
            >
                {isOpen ? <ChevronRight className="w-6 h-6 rotate-90" /> : <MessageCircle className="w-6 h-6" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                )}
            </motion.button>
        </div>
    );
}
