"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Quotes() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            {/* Soft Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/8 rounded-full blur-[150px]" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Quote Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-10">
                            <Quote className="w-8 h-8 text-emerald-400" />
                        </div>

                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 text-white">
                            "AI systems should be overseen by{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                people
                            </span>
                            , rather than by automation, to prevent harmful outcomes."
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-px bg-zinc-700" />
                            <p className="text-lg text-zinc-400 font-medium">
                                EU AI Act, Recital 48
                            </p>
                            <div className="w-12 h-px bg-zinc-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
