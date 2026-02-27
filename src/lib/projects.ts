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
            slug: 'htuai',
            title: 'HTUAI',
            description: 'A real-time GPA calculator and course tracking tool designed specifically for HTU students with local data persistence.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://htuai.mubx.dev/' },
            logo: '/images/htuai-light-logo.svg',
            metrics: 'Real-time GPA',
            verified_outcome: 'Integrated Tool',
            timeframe: '2 Days',
            category: { en: 'Academic Tool', ar: 'أداة أكاديمية', icon: '🎓', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
            caseStudy: {
                problem: 'Students needed a quick, private way to calculate their GPA and track their academic progress without logging into slow portals.',
                role: 'Full Stack Developer',
                solution: 'Built a client-side calculator with a premium UI that persists data locally, ensuring privacy and instant access.',
                outcome: 'A seamless integration into the student portal ecosystem, providing instant academic insights.',
            }
        },
        {
            slug: 'aqabwi',
            title: 'Aqabwi',
            description: 'A professional photography portfolio showcasing stunning visual storytelling and high-quality imagery.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://aqabwi.vercel.app/' },
            logo: '/images/aqabwi-logo.webp',
            metrics: 'Visual Impact',
            verified_outcome: 'Portfolio Live',
            timeframe: 'Ongoing',
            category: { en: 'Photography Portfolio', ar: 'معرض صور', icon: '📸', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
            caseStudy: {
                problem: 'Lack of a professional platform to showcase high-end photography without sacrificing page speed.',
                role: 'Technical Consultant & Lead Developer',
                solution: 'Engineered a high-performance portfolio using Next.js with advanced image optimization and sleek transitions.',
                outcome: 'A cinematic digital presence that loads in under 1.2s, establishing credibility with premium clients.',
            }
        },
        {
            slug: 'men-only-show',
            title: 'Men Only Show',
            description: 'The first talk show for men in the Arab world. Discussing success, relationships, and personal growth.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://menonlyshow-gray.vercel.app/' },
            logo: '/images/menonlyshow.webp',
            metrics: "Arab World's First",
            verified_outcome: 'Live Platform',
            timeframe: 'Ongoing',
            category: { en: 'Podcast Platform', ar: 'منصة بودكاست', icon: '🎙️', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
            caseStudy: {
                problem: 'Lack of a dedicated, high-performance digital platform for men\'s dialogue and personal growth in the Arab region.',
                role: 'Technical Consultant',
                solution: 'Developed a robust web platform to host content, guest profiles, and community resources with a focus on speed and accessibility.',
                outcome: 'Successfully established the region\'s first digital home for the show, reaching a massive audience across the Arab world.',
            }
        },
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
            category: { en: 'Link Bio', ar: 'رابط بايو', icon: '🔗', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
            caseStudy: {
                problem: 'Generic link-in-bio tools lacked the visual impact and high-end brand integration required for a luxury lifestyle presence.',
                role: 'Full Stack Architect',
                solution: 'Built a bespoke brand hub with custom animations, video backgrounds, and optimized social media traffic flows.',
                outcome: 'A high-conversion landing point that perfectly aligns with the brand\'s aesthetic, outperforming standard tools in both speed and style.',
            }
        },
        {
            slug: 'vynex-media',
            title: 'Vynex Media',
            description: 'Digital Agency Platform. Increased lead generation by 20% through high-performance UX and SEO.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://vynexmedia.vercel.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
            logo: '/images/vynex-logo.webp',
            metrics: '20% Lead Boost',
            verified_outcome: 'Verified via Google Analytics',

            timeframe: '2 Weeks',
            category: { en: 'Digital Agency', ar: 'وكالة رقمية', icon: '🏢', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
            caseStudy: {
                problem: 'Standard website performance was bottlenecking lead generation and digital authority for the media agency.',
                role: 'Lead Architect',
                solution: 'Complete architectural overhaul using Next.js, focusing on Core Web Vitals and technical SEO to dominate search results.',
                outcome: 'Achieved a verified 20% increase in inbound leads within the first 30 days of launch through high-performance UX.',
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
            category: { en: 'Education System', ar: 'نظام تعليمي', icon: '🎓', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
            caseStudy: {
                problem: 'Manual paper-based registration and WhatsApp bookings were causing administrative chaos for 100+ members.',
                role: 'System Architect',
                solution: 'Engineered a custom management system with automated scheduling, member analytics, and a centralized admin dashboard.',
                outcome: 'Saved 10+ hours per week in manual admin work while digitizing all institutional records for over 100 students.',
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
            category: { en: 'E-commerce', ar: 'تجارة إلكترونية', icon: '🛍️', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
            caseStudy: {
                problem: 'Lack of local Print-on-Demand infrastructure with custom design tools for the Jordanian creative market.',
                role: 'E-commerce Consultant',
                solution: 'Developed a custom e-commerce engine with real-time product visualization and integrated local payment gateways (Zain Cash/CliQ).',
                outcome: 'Launched Jordan\'s first fully operational POD platform, enabling local artists to sell at scale without technical barriers.',
            }
        }
    ],
    ar: [
        {
            slug: 'htuai',
            title: 'HTUAI',
            description: 'أداة لحساب المعدل التراكمي وتتبع المساقات مصممة خصيصاً لطلاب جامعة الحسين التقنية مع حفظ البيانات محلياً.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://htuai.mubx.dev/' },
            logo: '/images/htuai-light-logo.svg',
            metrics: 'معدل تراكمي فوري',
            verified_outcome: 'أداة مدمجة',
            timeframe: 'يومين',
            category: { en: 'Academic Tool', ar: 'أداة أكاديمية', icon: '🎓', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
            caseStudy: {
                problem: 'احتاج الطلاب إلى طريقة سريعة وخاصة لحساب معدلاتهم وتتبع تقدمهم الأكاديمي دون الحاجة لتسجيل الدخول في بوابات بطيئة.',
                role: 'مطور واجهات كاملة',
                solution: 'بناء آلة حاسبة من جانب العميل بواجهة متميزة تحفظ البيانات محلياً، مما يضمن الخصوصية والوصول الفوري.',
                outcome: 'تكامل سلس في النظام البيئي للطلاب، مما يوفر رؤى أكاديمية فورية.',
            }
        },
        {
            slug: 'aqabwi',
            title: 'عقباوي',
            description: 'معرض صور احترافي يعرض قصصاً بصرية مذهلة وصوراً عالية الجودة.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://aqabwi.vercel.app/' },
            logo: '/images/aqabwi-logo.webp',
            metrics: 'تأثير بصري',
            verified_outcome: 'المعرض متاح',
            timeframe: 'مستمر',
            category: { en: 'Photography Portfolio', ar: 'معرض صور', icon: '📸', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
            caseStudy: {
                problem: 'الحاجة إلى منصة بسيطة وعالية الأداء لعرض الصور عالية الدقة دون المساومة على السرعة.',
                role: 'مطور واجهة أمامية',
                solution: 'بناء معرض أنيق يركز على الصور مع تحميل محسن وانتقالات سلسة لتسليط الضوء على العمل البصري.',
                outcome: 'حضور رقمي احترافي يعرض بفعالية الأسلوب الفريد للمصور وأعماله.',
            }
        },
        {
            slug: 'men-only-show',
            title: 'للرجال فقط',
            description: 'أكبر منصة حوارية للرجال في العالم العربي. نناقش النجاح، العلاقات، والنمو الشخصي.',
            tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
            links: { live: 'https://menonlyshow-gray.vercel.app/' },
            logo: '/images/menonlyshow.webp',
            metrics: 'الأول عربياً',
            verified_outcome: 'منصة حية',
            timeframe: 'مستمر',
            category: { en: 'Podcast Platform', ar: 'منصة بودكاست', icon: '🎙️', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
            caseStudy: {
                problem: 'نقص في المنصات الحوارية الرقمية المخصصة للرجال في المنطقة.',
                role: 'مطور واجهات أمامية.',
                solution: 'طورت منصة ويب عالية الأداء لاستعراض الحلقات، معلومات الضيوف، وموارد المجتمع.',
                outcome: 'تأسيس حضور رقمي ناجح للبرنامج والوصول إلى جمهور واسع.',
            }
        },
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
            category: { en: 'Link Bio', ar: 'رابط بايو', icon: '🔗', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
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
            links: { live: 'https://vynexmedia.vercel.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
            logo: '/images/vynex-logo.webp',
            metrics: 'زيادة 20% في العملاء',
            verified_outcome: 'تم التحقق عبر Google Analytics',

            timeframe: 'أسبوعين',
            category: { en: 'Digital Agency', ar: 'وكالة رقمية', icon: '🏢', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
            caseStudy: {
                problem: 'ضعف أداء المواقع التقليدية كان يعيق جودة وصول العملاء وبناء السلطة الرقمية للوكالة.',
                role: 'كبير مهندسي المشروع',
                solution: 'إعادة هيكلة كاملة باستخدام Next.js، مع التركيز على معايير الويب الأساسية وتحسين محركات البحث التقني.',
                outcome: 'تحقيق زيادة مؤكدة بنسبة 20٪ في جودة العملاء المحتملين خلال أول 30 يوماً من الإطلاق.',
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
            category: { en: 'Education System', ar: 'نظام تعليمي', icon: '🎓', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
            caseStudy: {
                problem: 'التسجيل الورقي اليدوي وحجوزات الواتساب كانت تسبب فوضى إدارية لأكثر من 100 مشترك.',
                role: 'مهندس أنظمة',
                solution: 'هندسة نظام إدارة مخصص مع جدولة آلية، تحليلات للأعضاء، ولوحة تحكم مركزية للمسؤولين.',
                outcome: 'توفير أكثر من 10 ساعات عمل أسبوعياً من العمل الإداري اليدوي مع رقمنة كامل السجلات لأكثر من 100 طالب.',
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
            category: { en: 'E-commerce', ar: 'تجارة إلكترونية', icon: '🛍️', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
            caseStudy: {
                problem: 'غياب البنية التحتية للطباعة حسب الطلب مع أدوات تصميم مخصصة للسوق الإبداعي الأردني.',
                role: 'مستشار تجارة إلكترونية',
                solution: 'تطوير محرك تجارة إلكترونية مخصص مع ميزة معاينة التصاميم وربط بوابات الدفع المحلية (زين كاش/كليك).',
                outcome: 'إطلاق أول منصة طباعة حسب الطلب في الأردن، مما مكن الفنانين المحليين من البيع على نطاق واسع بدون عوائق تقنية.',
            }
        }
    ]
};

export const getProjects = (lang: Locale) => projectsData[lang] || projectsData.en;
export const projects = projectsData.en; // Fallback for legacy imports
