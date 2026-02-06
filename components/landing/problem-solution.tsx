"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lock, ShieldAlert, Shield, Zap, Users } from "lucide-react";

const problems = [
    {
        title: "Prompt Injection",
        description: "Malicious users can override agent instructions and manipulate AI behavior.",
        icon: <ShieldAlert className="w-6 h-6" />,
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    {
        title: "PII Leakage",
        description: "Sensitive personal data can be exposed through unmonitored agent outputs.",
        icon: <AlertTriangle className="w-6 h-6" />,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    {
        title: "Unauthorized Actions",
        description: "Agents performing high-risk operations without human approval or oversight.",
        icon: <Lock className="w-6 h-6" />,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
];

const solutions = [
    {
        title: "Security Guardrails",
        description: "LLM Guard integration blocks prompt injection, detects PII, and scans for secrets.",
        icon: <Shield className="w-6 h-6" />,
    },
    {
        title: "Policy Engine",
        description: "Define granular rules with allow, deny, require_approval. Visual + code-based policies.",
        icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
        title: "Human Oversight",
        description: "HITL approval workflow for sensitive operations. Humans can intervene in real-time.",
        icon: <Users className="w-6 h-6" />,
    },
];

export function ProblemSolution() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* The Problem Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        The Problem
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI agents are powerful — but risky
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Without proper governance, your agents can leak data, be manipulated, or take actions you didn't authorize.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-32">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${problem.bg} ${problem.color} mb-6`}>
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-zinc-400">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* The Solution Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                        The Solution
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Katyar makes agents{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            safe and compliant
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        One line of code. 21 compliance controls. Full visibility and control.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-900/50 border border-emerald-500/20"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 mb-6">
                                {solution.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {solution.title}
                            </h3>
                            <p className="text-zinc-400">
                                {solution.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
