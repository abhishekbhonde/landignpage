"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
                {/* Gradient Orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        Start your journey
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-white">Get compliant in </span>
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            minutes
                        </span>
                        <span className="text-white">, not months.</span>
                    </h2>

                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        Don't let regulations slow down your innovation. Integrate with one line of code and stay ahead of the curve.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-base bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-medium shadow-lg shadow-emerald-500/25 border-0"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            Start Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-base border-zinc-700 hover:bg-zinc-900 text-white rounded-xl font-medium"
                        >
                            Book a Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
