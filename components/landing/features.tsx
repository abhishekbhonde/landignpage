"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Eye,
    Lock,
    FileText,
    Users,
    Activity,
} from "lucide-react";

const features = [
    {
        title: "One Line of Code",
        description: "Initialize with katyar.init() to activate 21 compliance controls across EU AI Act, NIST RMF, and UK ICO.",
        icon: <FileText className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Compliance",
        description: "EU AI Act, NIST AI RMF, UK ICO. 21 controls auto-evaluated from live data with actionable recommendations.",
        icon: <Shield className="w-6 h-6" />,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Security Guardrails",
        description: "Block prompt injection, detect PII, scan for secrets via LLM Guard integration.",
        icon: <Lock className="w-6 h-6" />,
        gradient: "from-red-500 to-orange-500",
    },
    {
        title: "Human Oversight",
        description: "Approval workflows for high-risk actions. Human-in-the-loop (HITL) for sensitive operations.",
        icon: <Users className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Policy Engine",
        description: "JSON rules with wildcard matching: allow, deny, require_approval. Visual + code-based rules.",
        icon: <Eye className="w-6 h-6" />,
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        title: "Observability",
        description: "Traces, spans, cost analytics, audit log, LLM generation tracking. Full visibility into agent behavior.",
        icon: <Activity className="w-6 h-6" />,
        gradient: "from-indigo-500 to-purple-500",
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Everything you need for </span>
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            AI Governance
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Security, compliance, and human oversight for AI agents. All in one platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
