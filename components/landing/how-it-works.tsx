"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Key, UserPlus, Code2, LayoutDashboard } from "lucide-react";

const steps = [
    {
        title: "Sign Up",
        description: "Create your workspace in 30 seconds. Login with Google or GitHub.",
        icon: <UserPlus className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Get API Key",
        description: "Copy your secret key from the dashboard settings.",
        icon: <Key className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Wrap Your Agent",
        description: "Add 3 lines of code to your existing AI agent.",
        icon: <Code2 className="w-6 h-6 text-purple-500" />,
        code: `from katyar import Katyar

kt = Katyar(api_key="kt_live_xxx")

@kt.track
def my_agent():
    # your code
    pass`
    },
    {
        title: "See Real-Time Logs",
        description: "Watch actions stream in live. Create policies and approval flows.",
        icon: <LayoutDashboard className="w-6 h-6 text-emerald-500" />,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Get started in less than 5 minutes.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex gap-8 mb-12 last:mb-0 relative group">
                            {/* Line connecting steps */}
                            {idx !== steps.length - 1 && (
                                <div className="absolute left-6 top-14 bottom-[-48px] w-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />
                            )}

                            {/* Icon Bubble */}
                            <div className="relative shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                    Step {idx + 1}: {step.title}
                                </h3>
                                <p className="text-zinc-400 mb-4 max-w-lg">{step.description}</p>

                                {step.code && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        whileInView={{ opacity: 1, height: "auto" }}
                                        viewport={{ once: true }}
                                        className="bg-black border border-white/10 rounded-lg p-4 font-mono text-sm text-zinc-300 overflow-hidden shadow-2xl max-w-lg"
                                    >
                                        <pre><code>{step.code}</code></pre>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
