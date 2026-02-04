
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Contact MUBX | Web Development Services in Amman & Verified Systems',
    description: 'Book a call or get a project estimate for your landing page, e-commerce MVP, or web system. Trusted by student clubs, agencies, and local brands.',
};

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-24">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
