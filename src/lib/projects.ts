import { Locale } from './dictionaries';

export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    links: { live: string; code?: string };
    logo: string;
    metrics: string;
    timeframe: string;
    verified_outcome?: string;
    screenshots?: string[];
    category: { en: string; ar: string; icon: string; color: string }; // Added for badge
    caseStudy: {
        problem: string;
        role: string;
        solution: string;
        outcome: string;
        caseStudyUrl?: string;
    }
}

const projectsData: Record<Locale, Project[]> = {
    en: [
        {
            slug: 'the-glorious-page',
            title: 'The Glorious Page',
            description: 'Custom Link Tree. A branded, high-performance alternative to Linktree for a lifestyle brand. Includes Instagram integration.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://www.theglorious.page/' },
            logo: '/images/thegloriousicon.webp',
            metrics: 'Custom Design',
            verified_outcome: 'Live & Active',
            timeframe: '1 Week',
            category: { en: 'Link Bio', ar: 'رابط بايو', icon: '🔗', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
            caseStudy: {
                problem: 'Generic link tools (Linktree) lacked the visual impact and custom branding required by the client.',
                role: 'Full Stack Developer & Designer.',
                solution: 'I developed a bespoke "Link in Bio" web app with custom animations, video backgrounds, and direct social media integrations.',
                outcome: 'A stunning, high-conversion landing point for social media traffic that perfectly matches the brand identity.',
            }
        },
        {
            slug: 'vynex-media',
            title: 'Vynex Media',
            description: 'Digital Agency Platform. Increased lead generation by 20% through high-performance UX and SEO.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
            logo: '/images/vynex-logo.webp',
            metrics: '20% Lead Boost',
            verified_outcome: 'Verified via Google Analytics',

            timeframe: '2 Weeks',
            category: { en: 'Digital Agency', ar: 'وكالة رقمية', icon: '🏢', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
            caseStudy: {
                problem: 'Needed a modern website matching their high visual production quality.',
                role: 'Full implementation: architecture, frontend, performance.',
                solution: 'I built a Next.js application focusing on heavy media optimization, preventing layout shifts while delivering 4K visuals.',
                outcome: 'Professional page for client acquisition with smooth lead capture.',
            }
        },
        {
            slug: 'htu-martial-arts',
            title: 'HTU Martial Arts',
            description: 'University Club System. Digitized membership management for 100+ students, eliminating manual paperwork.',
            tech: ['PHP', 'MySQL', 'Bootstrap', 'Authentication'],
            links: { live: 'https://htumartialarts.42web.io/?i=1', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
            logo: '/images/htu-logo.webp',
            metrics: '100+ Members',
            verified_outcome: 'Based on Club Registry Logs',

            timeframe: '1 Month',
            category: { en: 'Education System', ar: 'نظام تعليمي', icon: '🎓', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
            caseStudy: {
                problem: 'Manual management of members and bookings via messages/sheets.',
                role: 'Database design, PHP backend, Admin dashboard.',
                solution: 'I engineered a complete management system with PHP/MySQL that handles user registration, session booking limits, and admin oversight.',
                outcome: 'Centralized management reducing manual work. Digitized the entire workflow for 100+ students.',
            }
        },
        {
            slug: 'blob-jo',
            title: 'BloB.JO',
            description: 'E-commerce Brand. Built Jordan\'s first custom Print-on-Demand store with real-time design tools.',
            tech: ['React', 'Node.js', 'E-commerce', 'UX Design'],
            links: { live: 'https://www.blobjor.me/', code: 'https://github.com/Omarmubx7/blobjor' },
            logo: '/images/blobjor-logo.webp',
            metrics: 'Full E-com Flow',
            verified_outcome: 'Operational since Jan 2025',

            timeframe: '3 Weeks',
            category: { en: 'E-commerce', ar: 'تجارة إلكترونية', icon: '🛍️', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
            caseStudy: {
                problem: 'Lack of local POD store with custom design tools.',
                role: 'Product UX, E-commerce flow, Frontend.',
                solution: 'I built a custom frontend that allows users to visualize designs on products before buying. The system integrates clear order tracking and a seamless checkout experience.',
                outcome: 'Digital order flow replacing manual communication. Bridges the gap between local artists and wearable products.',
            }
        }
    ],
    ar: [
        {
            slug: 'the-glorious-page',
            title: 'The Glorious Page',
            description: 'شجرة روابط مخصصة. بديل عالي الأداء ومخصص لـ Linktree لعلامة تجارية عصرية. يشمل دمج انستجرام.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://www.theglorious.page/' },
            logo: '/images/thegloriousicon.webp',
            metrics: 'تصميم مخصص',
            verified_outcome: 'مباشر ونشط',
            timeframe: 'أسبوع واحد',
            category: { en: 'Link Bio', ar: 'رابط بايو', icon: '🔗', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
            caseStudy: {
                problem: 'أدوات الروابط العادية (مثل Linktree) كانت تفتقر إلى الجاذبية البصرية والهوية المخصصة المطلوبة.',
                role: 'تطوير كامل وتصميم.',
                solution: 'قمت بتطوير تطبيق ويب "رابط في البايو" مخصص مع رسوم متحركة، خلفيات فيديو، وتكامل مباشر مع وسائل التواصل.',
                outcome: 'نقطة هبوط مذهلة وعالية التحويل لزيارات وسائل التواصل الاجتماعي تتطابق تماماً مع هوية العلامة التجارية.',
            }
        },
        {
            slug: 'vynex-media',
            title: 'فاينكس ميديا',
            description: 'منصة وكالة رقمية. زادت من توليد العملاء المحتملين بنسبة 20٪ من خلال تجربة مستخدم عالية الأداء وتحسين محركات البحث.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
            logo: '/images/vynex-logo.webp',
            metrics: 'زيادة 20% في العملاء',
            verified_outcome: 'تم التحقق عبر Google Analytics',

            timeframe: 'أسبوعين',
            category: { en: 'Digital Agency', ar: 'وكالة رقمية', icon: '🏢', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
            caseStudy: {
                problem: 'احتاجوا إلى موقع ويب حديث يطابق جودة إنتاجهم المرئي العالية.',
                role: 'تنفيد كامل: الهيكلية، الواجهة الأمامية، الأداء.',
                solution: 'قمت ببناء تطبيق Next.js يركز على تحسين الوسائط الثقيلة، ومنع تغييرات التخطيط مع تقديم مرئيات بدقة 4K.',
                outcome: 'صفحة احترافية لاكتساب العملاء مع تسجيل سلس للبيانات.',
            }
        },
        {
            slug: 'htu-martial-arts',
            title: 'نادي فنون القتال HTU',
            description: 'نظام نادي جامعي. رقمنة إدارة العضوية لأكثر من 100 طالب، مما قضى على العمل الورقي اليدوي.',
            tech: ['PHP', 'MySQL', 'Bootstrap', 'Authentication'],
            links: { live: 'https://htumartialarts.42web.io/?i=1', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
            logo: '/images/htu-logo.webp',
            metrics: '100+ عضو',
            verified_outcome: 'بناءً على سجلات النادي',

            timeframe: 'شهر واحد',
            category: { en: 'Education System', ar: 'نظام تعليمي', icon: '🎓', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
            caseStudy: {
                problem: 'الإدارة اليدوية للأعضاء والحجوزات عبر الرسائل/الجداول.',
                role: 'تصميم قاعدة البيانات، خلفية PHP، لوحة تحكم المسؤول.',
                solution: 'صممت نظام إدارة كامل باستخدام PHP/MySQL يعالج تسجيل المستخدمين، وحدود حجز الجلسات، وإشراف المسؤول.',
                outcome: 'إدارة مركزية تقلل العمل اليدوي. رقمنة سير العمل بالكامل لأكثر من 100 طالب.',
            }
        },
        {
            slug: 'blob-jo',
            title: 'BloB.JO',
            description: 'علامة تجارية للتجارة الإلكترونية. بنيت أول متجر طباعة حسب الطلب مخصص في الأردن بأدوات تصميم فورية.',
            tech: ['React', 'Node.js', 'E-commerce', 'UX Design'],
            links: { live: 'https://www.blobjor.me/', code: 'https://github.com/Omarmubx7/blobjor' },
            logo: '/images/blobjor-logo.webp',
            metrics: 'متجر الكتروني كامل',
            verified_outcome: 'يعمل منذ يناير 2025',

            timeframe: '3 الأسابيع',
            category: { en: 'E-commerce', ar: 'تجارة إلكترونية', icon: '🛍️', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
            caseStudy: {
                problem: 'عدم وجود متجر محلي للطباعة حسب الطلب مع أدوات تصميم مخصصة.',
                role: 'تجربة المستخدم، تدفق التجارة الإلكترونية، الواجهة الأمامية.',
                solution: 'بنيت واجهة أمامية مخصصة تسمح للمستخدمين بتصور التصاميم على المنتجات قبل الشراء. يدمج النظام تتبع الطلبات الواضح وتربة دفع سلسة.',
                outcome: 'تدفق طلبات رقمي يحل محل التواصل اليدوي. يسد الفجوة بين الفنانين المحليين والمنتجات القابلة للارتداء.',
            }
        }
    ]
};

export const getProjects = (lang: Locale) => projectsData[lang] || projectsData.en;
export const projects = projectsData.en; // Fallback for legacy imports
