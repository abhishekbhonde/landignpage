"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lock, ShieldAlert, ArrowRight, Database, Globe, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
    {
        title: "Data Leaks",
        description: "Agent accidentally sends customer PII to a public API.",
        icon: <Database className="w-5 h-5 text-red-500" />,
    },
    {
        title: "Prompt Injection",
        description: "Malicious user tricks agent into deleting files.",
        icon: <ShieldAlert className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Unauthorized Actions",
        description: "Agent transfers money without human approval.",
        icon: <Lock className="w-5 h-5 text-yellow-500" />,
    },
];

export function ProblemSolution() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* The Problem Section */}
            <div className="container mx-auto px-4 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Problem: <span className="text-zinc-500">Uncontrolled Agents</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        AI agents are powerful, but blindly trusting them with tools and data is dangerous.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-red-500/20 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* The Solution Section */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Solution: <span className="text-emerald-500">Katyar Gateway</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        A security layer that sits between your agents and the world.
                    </p>
                </motion.div>

                {/* Architecture Diagram */}
                <div className="relative max-w-5xl mx-auto p-8 rounded-3xl bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        {/* Left: Your Agent */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <span className="mt-4 font-mono text-sm text-zinc-400">Your Agent</span>
                        </div>

                        {/* Arrow 1 */}
                        <div className="flex-1 h-[2px] bg-zinc-800 relative hidden md:block">
                            <motion.div
                                animate={{ x: [0, 100, 0] }} // simple movement, in real app use path
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px]"
                            />
                        </div>
                        <ArrowRight className="md:hidden text-zinc-600 rotate-90 my-4" />


                        {/* Middle: Katyar Gateway */}
                        <div className="flex flex-col items-center relative">
                            <div className="w-64 p-6 rounded-2xl bg-zinc-900 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col gap-3 relative overflow-hidden">
                                <div className="text-center font-bold text-emerald-500 mb-2">Katyar Gateway</div>
                                <div className="text-xs bg-zinc-950 p-2 rounded border border-white/5 text-center text-zinc-400">Authenticate</div>
                                <div className="text-xs bg-zinc-950 p-2 rounded border border-white/5 text-center text-zinc-400">Scan & Detect</div>
                                <div className="text-xs bg-zinc-950 p-2 rounded border border-white/5 text-center text-zinc-400">Authorize Policy</div>
                                <div className="text-xs bg-zinc-950 p-2 rounded border border-white/5 text-center text-zinc-400">Audit Log</div>

                                {/* Scan Line Animation */}
                                <motion.div
                                    animate={{ top: ["0%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-emerald-500/50 shadow-[0_0_10px_#10b981]"
                                />
                            </div>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex-1 h-[2px] bg-zinc-800 relative hidden md:block"></div>
                        <ArrowRight className="md:hidden text-zinc-600 rotate-90 my-4" />

                        {/* Right: Tools */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-2 shadow-lg">
                                <Database className="w-5 h-5 text-zinc-500" />
                                <Globe className="w-5 h-5 text-zinc-500" />
                                <Server className="w-5 h-5 text-zinc-500" />
                            </div>
                            <span className="mt-4 font-mono text-sm text-zinc-400">Real World Tools</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
