import { LanguageProvider } from "@/context/LanguageContext";
import { Locale, dictionary } from '@/lib/dictionaries';
import { Suspense } from 'react';

type Props = {
    searchParams: Promise<{ lang?: string }>
}

export const metadata = {
    title: 'Service Agreement | MUBX',
    description: 'Professional Service Agreement for MUBX clients.',
};

export default async function ContractPage(props: Props) {
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    const t = dictionary[lang].contractPage;

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <div className="min-h-screen bg-white text-black py-20 px-6 md:px-0">
                    <div className="max-w-3xl mx-auto border p-8 md:p-12 shadow-sm bg-white" id="contract-content">
                        {/* Header */}
                        <div className="border-b-2 border-black pb-8 mb-8 flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">{t.title}</h1>
                                <p className="text-sm font-mono text-gray-600">MUBX-MSA-2026-001</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold">MUBX</span>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-sm">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold uppercase text-xs text-gray-500 mb-1">{t.provider}</h3>
                                    <p className="font-medium">Omar Mubaidin (MUBX)</p>
                                    <p className="text-gray-600">Amman, Jordan</p>
                                </div>
                                <div>
                                    <h3 className="font-bold uppercase text-xs text-gray-500 mb-1">{t.location}</h3>
                                    <p>Remote / Amman, Jordan</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold uppercase text-xs text-gray-500 mb-1">{t.client}</h3>
                                    <p className="border-b border-gray-300 pb-1 italic text-gray-400">[Client Name/Company]</p>
                                </div>
                                <div>
                                    <h3 className="font-bold uppercase text-xs text-gray-500 mb-1">{t.effectiveDate}</h3>
                                    <p className="border-b border-gray-300 pb-1 italic text-gray-400">[Date]</p>
                                </div>
                            </div>
                        </div>

                        {/* Agreement Body */}
                        <div className="space-y-10 mb-16 text-sm leading-relaxed text-left">
                            {t.sections.map((section: { title: string; content: string }, index: number) => (
                                <section key={index}>
                                    <h2 className="font-bold uppercase mb-3 border-l-4 border-black pl-3">{section.title}</h2>
                                    <p className="text-gray-800">{section.content}</p>
                                </section>
                            ))}
                        </div>

                        {/* Signatures */}
                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-200 text-sm">
                            <div className="space-y-8">
                                <div className="h-16 border-b border-black flex items-end pb-2">
                                    <span className="text-gray-400 italic">Signature</span>
                                </div>
                                <div>
                                    <p className="font-bold uppercase text-xs text-gray-500 mb-1">{t.footer.clientSignature}</p>
                                    <p className="border-b border-gray-200 pb-1 h-6"></p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase text-xs text-gray-500 mb-1">{t.footer.date}</p>
                                    <p className="border-b border-gray-200 pb-1 h-6"></p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="h-16 border-b border-black flex items-center justify-center">
                                    <span className="font-serif text-2xl rotate-[-2deg] opacity-80">Omar Mubaidin</span>
                                </div>
                                <div>
                                    <p className="font-bold uppercase text-xs text-gray-500 mb-1">{t.footer.providerSignature}</p>
                                    <p className="pb-1 h-6 font-medium">Omar Mubaidin</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase text-xs text-gray-500 mb-1">{t.footer.date}</p>
                                    <p className="pb-1 h-6">{new Date().toLocaleDateString(lang === 'ar' ? 'ar-JO' : 'en-US')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Print Button (Visible only on screen) */}
                    <div className="max-w-3xl mx-auto mt-8 flex justify-center print:hidden">
                        <button
                            onClick={() => window.print()}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer"
                        >
                            {lang === 'ar' ? 'طباعة كـ PDF' : 'Print to PDF'}
                        </button>
                    </div>
                </div>
            </LanguageProvider>
        </Suspense>
    );
}
