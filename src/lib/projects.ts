
export interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    links: { live: string; code?: string };
    logo: string;
    metrics: string;
    timeframe: string;
    verified_outcome?: string; // Added field
    screenshots?: string[]; // Added field
    caseStudy: {
        problem: string;
        role: string;
        solution: string; // Renaming/Explicitly adding solution for clarity if needed, or mapping details to it
        outcome: string;
        caseStudyUrl?: string;
    }
}

export const projects: Project[] = [
    {
        slug: 'vynex-media',
        title: 'Vynex Media',
        description: 'Digital Agency Platform. Increased lead generation by 20% through high-performance UX and SEO.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
        logo: '/images/vynex-logo.png',
        metrics: '20% Lead Boost',
        verified_outcome: 'Verified via Google Analytics',
        screenshots: ['/images/Vynex Media.png'],
        timeframe: '2 Weeks',
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
        logo: '/images/htu-logo.png',
        metrics: '100+ Members',
        verified_outcome: 'Based on Club Registry Logs',
        screenshots: ['/images/HTU Martial Arts.png'],
        timeframe: '1 Month',
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
        logo: '/images/blobjor-logo.png',
        metrics: 'Full E-com Flow',
        verified_outcome: 'Operational since Jan 2025',
        screenshots: ['/images/BloB.JO.png'],
        timeframe: '3 Weeks',
        caseStudy: {
            problem: 'Lack of local POD store with custom design tools.',
            role: 'Product UX, E-commerce flow, Frontend.',
            solution: 'I built a custom frontend that allows users to visualize designs on products before buying. The system integrates clear order tracking and a seamless checkout experience.',
            outcome: 'Digital order flow replacing manual communication. Bridges the gap between local artists and wearable products.',
        }
    }
];
