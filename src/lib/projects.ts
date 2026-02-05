
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
    }
}

export const projects: Project[] = [
    {
        slug: 'vynex-media',
        title: 'Vynex Media',
        description: 'Visual production agency platform. High-performance landing page with SEO optimization and smooth frame interactions.',
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        links: { live: 'https://vynexmedia.lovable.app/', code: 'https://github.com/Omarmubx7/vynexmedia' },
        logo: '/images/vynex-logo.png',
        metrics: '20% Conversion Rate',
        verified_outcome: 'Verified via Google Analytics',
        screenshots: ['/images/vynex-desktop.jpg', '/images/vynex-mobile.jpg'],
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
        description: 'University sports club management system. Handles membership bookings, user profiles, and admin dashboards.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'Authentication'],
        links: { live: 'https://htumartialarts.42web.io/?i=1', code: 'https://github.com/Omarmubx7/htu_martial_arts-man' },
        logo: '/images/htu-logo.png',
        metrics: '100+ Active Members',
        verified_outcome: 'Based on Club Registry Logs',
        screenshots: ['/images/htu-dashboard.jpg', '/images/htu-admin.jpg'],
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
        description: 'Jordan\'s premier Print-on-Demand e-commerce store. Features custom product design capability and dynamic order tracking.',
        tech: ['React', 'Node.js', 'E-commerce', 'UX Design'],
        links: { live: 'https://www.blobjor.me/', code: 'https://github.com/Omarmubx7/blobjor' },
        logo: '/images/blobjor-logo.png',
        metrics: 'Full E-com Flow',
        verified_outcome: 'Operational since Jan 2025',
        screenshots: ['/images/blob-home.jpg', '/images/blob-product.jpg'],
        timeframe: '3 Weeks',
        caseStudy: {
            problem: 'Lack of local POD store with custom design tools.',
            role: 'Product UX, E-commerce flow, Frontend.',
            solution: 'I built a custom frontend that allows users to visualize designs on products before buying. The system integrates clear order tracking and a seamless checkout experience.',
            outcome: 'Digital order flow replacing manual communication. Bridges the gap between local artists and wearable products.',
        }
    },
];
