"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        date: "Feb 2, 2025",
        title: "Unacceptable Risk Ban",
        description: "Prohibited AI practices must be phased out immediately.",
    },
    {
        date: "9 Months",
        title: "Codes of Practice",
        description: "Generalized AI models must adhere to new codes of practice.",
    },
    {
        date: "12 Months",
        title: "Transparency Rules",
        description: "Governance obligations for GPAI models come into force.",
    },
    {
        date: "36 Months",
        title: "High-Risk Obligations",
        description: "Full compliance required for high-risk AI systems (Annex III).",
    },
];

export function ComplianceTimeline() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Timeline</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">Prepare your organization for the upcoming regulatory milestones.</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[16px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] md:-translate-x-1/2 z-10 mt-2"></div>

                                {/* Content */}
                                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                                    <div className={`p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors ${index % 2 === 0 ? "text-left" : "md:text-right text-left"}`}>
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 mb-3">
                                            {milestone.date}
                                        </span>
                                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
