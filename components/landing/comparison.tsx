"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
    {
        feature: "Setup Time",
        katyar: "1 Line of Code",
        diy: "3-6 Months",
    },
    {
        feature: "Compliance Controls",
        katyar: "21 Auto-Evaluated",
        diy: "Manual Tracking",
    },
    {
        feature: "Prompt Injection Protection",
        katyar: true,
        diy: "Complex Regex/ML",
    },
    {
        feature: "PII Detection & Masking",
        katyar: true,
        diy: "Brittle Hand-coded",
    },
    {
        feature: "Policy Engine",
        katyar: "Visual + Code",
        diy: "Hard-coded Only",
    },
    {
        feature: "Human Approval Flows",
        katyar: true,
        diy: "Custom UI Needed",
    },
    {
        feature: "Observability & Traces",
        katyar: true,
        diy: "Separate Tools",
    },
    {
        feature: "Framework Support",
        katyar: "EU AI Act, NIST, ICO",
        diy: "None Built-in",
    },
];

export function Comparison() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Katyar vs. </span>
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            DIY Governance
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Stop reinventing the wheel. Get compliance in minutes, not months.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900/50">
                        {/* Header */}
                        <div className="grid grid-cols-3 bg-zinc-900 border-b border-zinc-800">
                            <div className="p-6 text-zinc-400 font-medium">Feature</div>
                            <div className="p-6 text-center">
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold text-lg">
                                    Katyar
                                </span>
                            </div>
                            <div className="p-6 text-center text-zinc-400 font-medium">DIY / Custom</div>
                        </div>

                        {/* Rows */}
                        {comparisonData.map((row, index) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 border-b border-zinc-800 last:border-b-0 ${index % 2 === 0 ? 'bg-zinc-900/30' : ''}`}
                            >
                                <div className="p-6 text-white font-medium">{row.feature}</div>
                                <div className="p-6 flex items-center justify-center">
                                    {typeof row.katyar === "boolean" ? (
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-emerald-400" />
                                        </div>
                                    ) : (
                                        <span className="text-emerald-400 font-medium">{row.katyar}</span>
                                    )}
                                </div>
                                <div className="p-6 flex items-center justify-center">
                                    {typeof row.diy === "boolean" ? (
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                            <X className="w-5 h-5 text-red-400" />
                                        </div>
                                    ) : (
                                        <span className="text-zinc-500">{row.diy}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
