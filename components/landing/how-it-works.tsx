"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Key, Code2, LayoutDashboard } from "lucide-react";

const steps = [
    {
        title: "Sign Up",
        description: "Create your workspace in 30 seconds. Login with Google or GitHub.",
        icon: <UserPlus className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Get API Key",
        description: "Copy your secret key from the dashboard settings.",
        icon: <Key className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500",
    },
    {
        title: "Initialize with One Line",
        description: "Add katyar.init() to your agent. 21 compliance controls auto-activate.",
        icon: <Code2 className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500",
        code: `import katyar

katyar.init("kt_live_xxx", agent_name="my-agent")

# That's it! Compliance activated.
# - 21 controls across EU AI Act, NIST RMF, UK ICO
# - Auto-evaluates compliance from live data
# - Returns score with actionable recommendations`
    },
    {
        title: "View Dashboard",
        description: "See real-time compliance score, agent activity, and approval workflows.",
        icon: <LayoutDashboard className="w-6 h-6" />,
        color: "from-emerald-500 to-teal-500",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-black">
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
                        <span className="text-white">Get started in </span>
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            5 minutes
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        One-line compliance activation. No infrastructure changes required.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex gap-8 pb-12 last:pb-0"
                        >
                            {/* Timeline */}
                            <div className="flex flex-col items-center">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white z-10`}>
                                    {step.icon}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-px h-full bg-zinc-800 mt-4" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <div className="text-sm text-zinc-500 mb-2 font-medium">
                                    Step {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400 mb-4">
                                    {step.description}
                                </p>

                                {step.code && (
                                    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm overflow-x-auto">
                                        <pre className="text-emerald-400">{step.code}</pre>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
