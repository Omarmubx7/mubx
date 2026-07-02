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
    category: { en: string; icon: string; color: string }; // Removed ar badge
    caseStudy: {
        problem: string;
        role: string;
        solution: string;
        outcome: string;
        caseStudyUrl?: string;
    }
}

const projectsList: Project[] = [
    {
        slug: 'mubxai',
        title: 'MUBXAI',
        description: 'A real-time GPA calculator and course tracking tool designed specifically for HTU students with local data persistence.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://ai.mubx.dev/' },
        logo: '/images/mubxai-light-logo.webp',
        metrics: 'Real-time GPA',
        verified_outcome: 'Integrated Tool',
        timeframe: '2 weeks',
        category: { en: 'Academic Tool', icon: '🎓', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
        caseStudy: {
            problem: 'Students needed a quick, private way to calculate their GPA and track their academic progress without logging into slow portals.',
            role: 'Full Stack Developer',
            solution: 'Built a client-side calculator with a premium UI that persists data locally, ensuring privacy and instant access.',
            outcome: 'A seamless integration into the student portal ecosystem, providing instant academic insights.',
        }
    },
    {
        slug: 'mubxbot',
        title: 'MUBXbot',
        description: 'An AI chat assistant for fast answers, lead support, and guided conversations on the MUBX ecosystem.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'AI Integration'],
        links: { live: 'https://bot.mubx.dev/' },
        logo: '/images/mubxbot-logo.png',
        metrics: 'AI Assistant',
        verified_outcome: 'Live Product',
        timeframe: '5 days',
        category: { en: 'AI Assistant', icon: '🤖', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
        caseStudy: {
            problem: 'Visitors needed instant answers and clearer guidance without waiting for manual support responses.',
            role: 'AI Product Developer',
            solution: 'Built and deployed a branded AI assistant with a guided conversation flow and production-ready UI.',
            outcome: 'Improved response speed and made support interactions available 24/7 for users.',
        }
    },
    {
        slug: 'aqabwi',
        title: 'Aqabwi',
        description: 'A professional photography portfolio showcasing stunning visual storytelling and high-quality imagery.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://aqabwi.vercel.app/' },
        logo: '/images/aqabwi-logo.webp',
        metrics: '1.2s Load Time',
        verified_outcome: 'Portfolio Live',
        timeframe: 'Ongoing',
        category: { en: 'Photography Portfolio', icon: '📸', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
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
        timeframe: '1 Week',
        category: { en: 'Podcast Platform', icon: '🎙️', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' },
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
        metrics: '3 Days Delivery',
        verified_outcome: 'Live & Active',
        timeframe: '3 days',
        category: { en: 'Link Bio', icon: '🔗', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
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
        category: { en: 'Digital Agency', icon: '🏢', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
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
        links: { live: 'https://htu-martial-arts-man.vercel.app/', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
        logo: '/images/htu-logo.webp',
        metrics: '100+ Members',
        verified_outcome: 'Based on Club Registry Logs',
        timeframe: '3 weeks ',
        category: { en: 'Education System', icon: '🎓', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
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
        metrics: 'Zain Cash / CliQ',
        verified_outcome: 'Operational since Jan 2025',
        timeframe: '3 Weeks',
        category: { en: 'E-commerce', icon: '🛍️', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
        caseStudy: {
            problem: 'Lack of local Print-on-Demand infrastructure with custom design tools for the Jordanian creative market.',
            role: 'E-commerce Consultant',
            solution: 'Developed a custom e-commerce engine with real-time product visualization and integrated local payment gateways (Zain Cash/CliQ).',
            outcome: 'Launched Jordan\'s first fully operational POD platform, enabling local artists to sell at scale without technical barriers.',
        }
    },
    {
        slug: 'qadumyweb',
        title: 'QadumyWeb',
        description: 'A dynamic portfolio website for Ahmad Al-Qaddomy, a Jordan-based marketer and content creator, featuring animated UI and seamless brand storytelling.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://qadumyweb.vercel.app/' },
        logo: '/images/qadumyweb-logo.png',
        metrics: '80+ Lighthouse',
        verified_outcome: 'Live & Active',
        timeframe: '1 Week',
        category: { en: 'Portfolio Website', icon: '🌐', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
        caseStudy: {
            problem: 'Lack of a professional, high-performance digital portfolio to showcase content creation, marketing campaigns, and event management work.',
            role: 'Full Stack Developer & Designer',
            solution: 'Built a modern portfolio with Next.js, featuring a hero section with stats, brand sliders, services, reel showcases, and a contact form.',
            outcome: 'A visually compelling digital presence that effectively communicates the brand identity and drives collaboration inquiries.',
        }
    },
    {
        slug: 'jordan-fa',
        title: 'Jordan FA',
        description: "A comprehensive website for the Jordan National Football Team's historic debut at the 2026 FIFA World Cup, featuring match schedules, squad profiles, kit collections, and team history.",
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://jordan-jfa.vercel.app/' },
        logo: '/images/jordan-fa-logo.png',
        metrics: 'Historic Debut',
        verified_outcome: 'Live & Active',
        timeframe: '2 weeks',
        category: { en: 'Sports Platform', icon: '⚽', color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
        caseStudy: {
            problem: "Lack of a dedicated, high-quality digital platform to celebrate and document Jordan's historic World Cup 2026 journey for fans worldwide.",
            role: 'Full Stack Developer',
            solution: 'Built a visually immersive Next.js site with dynamic match schedules, animated squad profiles, kit showcases, a historical timeline, and real-time group standings.',
            outcome: 'A complete digital platform that captures the emotion of Jordan\'s first-ever World Cup appearance, combining rich storytelling with live data.',
        }
    },
    {
        slug: 'porsche-noir',
        title: 'Porsche Noir',
        description: 'A scroll-driven cinematic 3D experience celebrating sixty years of the Porsche 911 evolution.',
        tech: ['Three.js', 'GSAP', 'Lenis', 'Vite'],
        links: { live: 'https://911-legacy.vercel.app/' },
        logo: '/images/porsche-logo.svg',
        metrics: '60fps WebGL',
        verified_outcome: 'WebGL Live',
        timeframe: '3 weeks',
        category: { en: 'Interactive Experience', icon: '🏎️', color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
        caseStudy: {
            problem: 'Standard car websites are cluttered marketing templates that ignore historical heritage and design craftsmanship.',
            role: 'Lead Creative Developer & 3D Specialist',
            solution: 'Built a dark, highly focused, single-page editorial experience utilizing WebGL, GSAP, and scroll-bound animations to highlight the 911’s iconic design.',
            outcome: 'Created a premium interactive 3D narrative with 60fps rendering and responsive mechanical pacing.',
        }
    }
];

const projectsData: Record<Locale, Project[]> = {
    en: projectsList
};

export const getProjects = (lang?: Locale) => projectsData.en;
export const projects = projectsData.en; // Fallback for legacy imports
