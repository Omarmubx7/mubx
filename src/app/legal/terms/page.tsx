import { siteConfig } from "@/config/seo";

export const metadata = {
    title: 'Terms of Service | MUBX',
    description: 'Terms and Conditions for MUBX Services.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-6 py-32 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted/80 leading-relaxed">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong>MUBX</strong> ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-muted/80 leading-relaxed">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">3. Services & Payments</h2>
                    <p className="text-muted/80 leading-relaxed mb-4">
                        <strong>Project Engagement:</strong> All development services are subject to a specific proposal or contract signed by both parties.
                        <br />
                        <strong>Payments:</strong> We accept payments via Bank Transfer, Zain Cash, and CliQ.
                        <br />
                        <strong>Refunds:</strong> Refunds are handled on a case-by-case basis as outlined in your specific Service Agreement. Generally, deposits are non-refundable once work has commenced.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Limitations of Liability</h2>
                    <p className="text-muted/80 leading-relaxed">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                    <p className="text-muted/80 leading-relaxed">
                        These Terms shall be governed by and defined following the laws of <strong>The Hashemite Kingdom of Jordan</strong>. MUBX and yourself irrevocably consent that the courts of Jordan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                    <p className="text-muted/80 leading-relaxed">
                        To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        <br /><br />
                        <span className="text-white font-mono">Email: mubxdev@proton.me</span>
                    </p>
                </section>
            </div>
        </div>
    );
}
