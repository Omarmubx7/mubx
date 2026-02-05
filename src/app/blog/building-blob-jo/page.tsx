import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: 'How I Built BloB.JO: Custom E-commerce Case Study | MUBX',
    description: 'A technical deep dive into building Jordan’s first custom Print-on-Demand marketplace using React, Node.js, and local payment integration.',
    alternates: {
        canonical: `${siteConfig.url}/blog/building-blob-jo`
    }
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-black selection:bg-neon selection:text-black">
            <Navbar />
            <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                <Badge variant="outline" className="mb-6">Case Study</Badge>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    Building <span className="text-neon">BloB.JO</span>: A Custom Print-on-Demand System
                </h1>

                <div className="flex items-center gap-4 text-muted mb-12 pb-12 border-b border-white/10">
                    <span>By Omar Mubaidin</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span>Jan 28, 2026</span>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-2xl text-white/90 mb-8">
                        Most e-commerce stores are just Shopify templates. But when <strong>BloB.JO</strong> needed a platform where users could design their own t-shirts and hoodies in real-time, off-the-shelf solutions weren't enough.
                    </p>

                    <h2>The Challenge</h2>
                    <p>
                        The client needed a "Canvas" editor where users could upload images, add text, and see a realistic mockup of their product immediately. They also needed to route orders to different printing fulfillment centers in Amman automatically.
                    </p>

                    <h2>The Solution</h2>
                    <p>
                        I built a custom Single Page Application (SPA) using <strong>React</strong> and <strong>Fabric.js</strong> for the canvas manipulation.
                    </p>
                    <ul>
                        <li><strong>Frontend:</strong> React.js + Tailwind CSS for a pixel-perfect UI.</li>
                        <li><strong>Backend:</strong> Node.js API to handle high-res image processing.</li>
                        <li><strong>Database:</strong> MongoDB to store complex order metadata.</li>
                    </ul>

                    <div className="my-12 relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                        {/* Placeholder for project screenshot */}
                        <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-muted">
                            Project Screenshot
                        </div>
                    </div>

                    <h2>The Outcome</h2>
                    <p>
                        The platform launched successfully and processed over 500 orders in its first month. The "Design Your Own" feature became the site's biggest selling point, something competitors using standard Shopify themes couldn't offer.
                    </p>

                    <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Building a complex platform?</h3>
                        <p className="mb-4">I specialize in building systems that standard website builders can&apos;t handle.</p>
                        <a href="/#contact" className="text-neon font-bold hover:underline">Discuss Your Project →</a>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
