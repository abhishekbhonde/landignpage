"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Eye, ShieldAlert, CheckCircle } from "lucide-react";

const categories = [
    {
        id: "unacceptable",
        title: "Unacceptable Risk",
        icon: ShieldAlert,
        color: "text-red-500",
        bg: "bg-red-500/10",
        description: "Systems that pose a clear threat to safety, livelihoods, and rights. These are banned.",
        examples: ["Social scoring", "Real-time biometric ID in public", "Subliminal manipulation"],
        status: "BANNED",
    },
    {
        id: "high",
        title: "High Risk",
        icon: AlertCircle,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        description: "AI systems used in critical infrastructures, education, employment, etc. Strict obligations apply.",
        examples: ["Recruitment tools", "Credit scoring", "Medical devices"],
        status: "STRICT COMPLIANCE",
    },
    {
        id: "transparency",
        title: "Limited Risk",
        icon: Eye,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "Systems with specific transparency risks. Users must be aware they are interacting with AI.",
        examples: ["Chatbots", "Emotion recognition", "Deepfakes"],
        status: "TRANSPARENCY",
    },
    {
        id: "minimal",
        title: "Minimal Risk",
        icon: CheckCircle,
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "The vast majority of AI systems. No new obligations, but voluntary codes of conduct recommended.",
        examples: ["Spam filters", "Video games", "Inventory management"],
        status: "NO OBLIGATIONS",
    },
];

export function ComplianceCategories() {
    const [activeId, setActiveId] = useState("high");

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Your Classification</h2>
                    <p className="text-zinc-400">The EU AI Act categorizes AI systems into four risk levels.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto h-[600px] lg:h-[400px]">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            onClick={() => setActiveId(category.id)}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-white/5 ${activeId === category.id ? "flex-[3]" : "flex-1 hover:flex-[1.2]"
                                }`}
                            layout
                        >
                            {/* Background with overlay */}
                            <div className={`absolute inset-0 ${category.bg} opacity-20`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <div className="flex items-center space-x-3 mb-4">
                                    <category.icon className={`w-6 h-6 ${category.color}`} />
                                    <h3 className={`text-xl font-bold ${activeId === category.id ? "text-white" : "text-zinc-400"}`}>
                                        {category.title}
                                    </h3>
                                </div>

                                <AnimatePresence>
                                    {activeId === category.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-zinc-300 mb-4 text-sm leading-relaxed">
                                                {category.description}
                                            </p>
                                            <div className="space-y-2">
                                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Examples:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.examples.map((ex, i) => (
                                                        <span key={i} className="px-2 py-1 rounded bg-white/10 text-xs text-white border border-white/10">
                                                            {ex}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={`mt-6 inline-block px-3 py-1 rounded-full text-xs font-bold border ${category.color.replace('text-', 'border-')} ${category.color}`}>
                                                {category.status}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
