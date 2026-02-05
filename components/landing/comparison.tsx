"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
    {
        feature: "Setup Time",
        katyar: "2 Minutes",
        diy: "3-6 Months",
    },
    {
        feature: "Prompt Injection Protection",
        katyar: true,
        diy: "Complex Regex/ML",
    },
    {
        feature: "PII Redaction",
        katyar: true,
        diy: "Brittle Hand-coded",
    },
    {
        feature: "Policy Engine",
        katyar: "Visual/Code",
        diy: "Hard-coded",
    },
    {
        feature: "Human Approval Flows",
        katyar: true,
        diy: "Requires custom UI",
    },
    {
        feature: "Audit Logging",
        katyar: true,
        diy: "Database Overhead",
    },
];

export function Comparison() {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                        The Katyar Difference
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Stop building glue code and start building agents.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <motion.table
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full text-left border-collapse"
                    >
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 px-4 text-zinc-500 font-medium">Feature</th>
                                <th className="py-6 px-4 text-emerald-500 font-bold">Katyar</th>
                                <th className="py-6 px-4 text-zinc-500 font-medium">DIY Solution</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-4 text-zinc-300 font-medium">{row.feature}</td>
                                    <td className="py-4 px-4 text-zinc-100 font-bold">
                                        {typeof row.katyar === "boolean" ? (
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-emerald-500" />
                                            </div>
                                        ) : (
                                            row.katyar
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-zinc-500">
                                        {typeof row.diy === "boolean" ? (
                                            row.diy ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <X className="w-4 h-4 text-red-500" />
                                            )
                                        ) : (
                                            row.diy
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>
            </div>
        </section>
    );
}
