
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw } from 'lucide-react';

interface Props {
    ui: {
        estimatedInvestment: string;
        disclaimer: string;
        getQuote: string;
        reset: string;
    };
    options: {
        id: string;
        title: string;
        multi?: boolean;
        choices: {
            id?: string;
            label: string;
            price: number;
            desc?: string;
        }[];
    }[];
}

export default function CostCalculator({ ui, options }: Props) {
    const [selections, setSelections] = useState<any>({
        pages: 300,
        design: 0,
        features: []
    });

    const toggleFeature = (price: number, id: string) => {
        const current = selections.features;
        if (current.includes(id)) {
            setSelections({ ...selections, features: current.filter((i: string) => i !== id) });
        } else {
            setSelections({ ...selections, features: [...current, id] });
        }
    };

    const calculateTotal = () => {
        const base = selections.pages + selections.design;
        // Find features option (id: 'features')
        const featuresOption = options.find(o => o.id === 'features');
        if (!featuresOption) return base;

        const featureTotal = selections.features.reduce((acc: number, id: string) => {
            const feature = featuresOption.choices.find(c => (c as any).id === id);
            return acc + (feature ? feature.price : 0);
        }, 0);
        return base + featureTotal;
    };

    return (
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Questions */}
                    <div className="space-y-10">
                        {options.map((opt, idx) => (
                            <div key={opt.id}>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon/10 text-neon text-sm border border-neon/20">
                                        {idx + 1}
                                    </span>
                                    {opt.title}
                                </h3>
                                <div className="space-y-3 pl-11">
                                    {opt.choices.map((choice) => {
                                        const isMulti = opt.multi;
                                        const choiceId = (choice as any).id;

                                        const isSelected = isMulti
                                            ? selections.features.includes(choiceId)
                                            : selections[opt.id] === choice.price;

                                        return (
                                            <div
                                                key={choice.label}
                                                onClick={() => isMulti
                                                    ? toggleFeature(choice.price, choiceId)
                                                    : setSelections({ ...selections, [opt.id]: choice.price })
                                                }
                                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between group ${isSelected
                                                    ? 'bg-neon/10 border-neon text-white'
                                                    : 'bg-black/20 border-white/5 text-muted hover:border-white/20'
                                                    }`}
                                            >
                                                <div>
                                                    <div className={`font-bold ${isSelected ? 'text-neon' : 'text-white'}`}>{choice.label}</div>
                                                    {(choice as any).desc && <div className="text-xs text-muted/60 mt-1">{(choice as any).desc}</div>}
                                                </div>
                                                {isSelected && <Check className="w-5 h-5 text-neon" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Results */}
                    <div className="relative">
                        <div className="sticky top-8 bg-black/40 border border-white/10 rounded-2xl p-8 text-center space-y-6">
                            <div>
                                <div className="text-muted text-sm uppercase tracking-wider font-bold mb-2">{ui.estimatedInvestment}</div>
                                <div className="text-6xl font-black text-white tracking-tighter">
                                    {calculateTotal()} <span className="text-2xl text-neon">JOD</span>
                                </div>
                            </div>

                            <div className="text-sm text-muted">
                                {ui.disclaimer}
                            </div>

                            <a
                                href="/#contact"
                                className="block w-full py-4 bg-neon text-black font-bold text-lg rounded-xl hover:bg-white transition-all hover:scale-[1.02]"
                            >
                                {ui.getQuote}
                            </a>

                            <button
                                onClick={() => setSelections({ pages: 300, design: 0, features: [] })}
                                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-muted hover:text-white transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" /> {ui.reset}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
