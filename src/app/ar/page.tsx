import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
    title: 'تصميم مواقع الكترونية في الاردن | MUBX - برمجة وتطوير مواقع',
    description: 'أفضل خدمة تصميم مواقع في عمان، الاردن. نصمم مواقع الكترونية سريعة، عصرية، وتدعم الدفع المحلي (Zain Cash & CliQ). ابدأ مشروعك الان مع مطور محترف.',
    keywords: [
        'تصميم مواقع الاردن',
        'برمجة مواقع عمان',
        'تطوير ويب الاردن',
        'متجر الكتروني الاردن',
        'Zain Cash ربط',
        'MUBX',
        'عمر عبيدات'
    ],
    openGraph: {
        locale: 'ar_JO',
        type: 'website',
        title: 'تصميم مواقع الكترونية في الاردن | MUBX',
        description: 'حول فكرتك الى واقع مع أفضل خدمة تطوير مواقع في الاردن.',
        url: 'https://mubx.dev/ar',
        siteName: 'MUBX Jordan',
    },
    alternates: {
        canonical: 'https://mubx.dev/ar',
        languages: {
            'en-US': 'https://mubx.dev',
        },
    }
};

export default function ArabicLandingPage() {
    return (
        <main dir="rtl" className="min-h-screen bg-black text-white font-sans selection:bg-neon selection:text-black">
            {/* Navigation (Simplified for Landing Page) */}
            <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
                <Link href="/" className="text-xl font-bold flex items-center gap-2 ltr:flex-row-reverse" lang="en">
                    <span className="text-neon">MUBX</span>.dev
                </Link>
                <Link href="/" className="text-sm font-bold text-muted hover:text-white flex items-center gap-2 transition-colors">
                    English
                    <ArrowLeft className="w-4 h-4" />
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 container mx-auto text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon/10 blur-[120px] rounded-full -z-10" />

                <Badge variant="neon" className="mb-6 mx-auto">مطور مواقع في عمان، الاردن</Badge>

                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                    تصميم مواقع الكترونية <br />
                    <span className="text-neon">احترافية وسريعة</span>
                </h1>

                <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                    لا تقبل بموقع بطيء أو تصميم قديم.
                    <br />
                    أنا أقدم لك موقعاً الكترونياً متكاملاً، يدعم الدفع المحلي (Zain Cash / CliQ)، ويضمن لك الظهور في الصفحات الأولى في Google.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://wa.me/962790000000" // Replace with actual number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] flex items-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5" />
                        تواصل معي واتساب
                    </a>
                    <Link
                        href="/#projects"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all"
                    >
                        شاهد أعمالي
                    </Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        لماذا تختار <span className="text-neon">MUBX</span>؟
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-neon/50 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-white">سرعة صاروخية 🚀</h3>
                            <p className="text-muted leading-relaxed">
                                نستخدم تقنيات حديثة (Next.js) لضمان تحميل موقعك في أقل من ثانية. السرعة تعني عملاء أكثر.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-neon/50 transition-colors relative">
                            <div className="absolute -top-3 -right-3 bg-neon text-black text-xs font-bold px-3 py-1 rounded-full">مهم جداً</div>
                            <h3 className="text-xl font-bold mb-4 text-white">دفع محلي (CliQ & Zain) 🇯🇴</h3>
                            <p className="text-muted leading-relaxed">
                                اربط متجرك بوابات الدفع المحلية مباشرة. استلم أموالك فوراً بدون عمولات منصات عالمية.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-black/50 border border-white/10 hover:border-neon/50 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-white">تصميم عصري وجذاب 🎨</h3>
                            <p className="text-muted leading-relaxed">
                                تصميمات مخصصة تبرز هويتك التجارية. لا نستخدم القوالب الجاهزة المملة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section (Simplified) */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">باقات الأسعار</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Package 1 */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                        <h3 className="text-2xl font-bold mb-2">موقع تعريفي للشركات</h3>
                        <div className="text-3xl font-bold text-neon mb-6">350 دينار <span className="text-sm text-muted font-normal">/ يبدأ من</span></div>
                        <ul className="space-y-3 mb-8 text-muted">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> 5 صفحات تعريفية</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> لوحة تحكم لتعديل المحتوى</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> متجاوب مع الهواتف 100%</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> استضافة ونطاق مجاني (سنة)</li>
                        </ul>
                    </div>

                    {/* Package 2 */}
                    <div className="p-8 rounded-2xl border border-neon bg-neon/5 relative">
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-neon text-black font-bold px-4 py-1 rounded-full text-sm">الأكثر طلباً</div>
                        <h3 className="text-2xl font-bold mb-2">متجر الكتروني متكامل</h3>
                        <div className="text-3xl font-bold text-neon mb-6">550 دينار <span className="text-sm text-muted font-normal">/ يبدأ من</span></div>
                        <ul className="space-y-3 mb-8 text-muted">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> عدد غير محدود من المنتجات</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> ربط مع CliQ و محافظ الكترونية</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> لوحة تحكم لإدارة الطلبات</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-neon w-5 h-5" /> دعم فني وصيانة</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://wa.me/962790000000" // Replace with actual number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors"
                    >
                        احجز استشارتك المجانية
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Footer (Simple) */}
            <footer className="py-8 border-t border-white/5 text-center text-muted text-sm">
                <p>&copy; {new Date().getFullYear()} MUBX. جميع الحقوق محفوظة.</p>
            </footer>
        </main>
    );
}
