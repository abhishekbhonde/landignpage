"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "./sparkles";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center">
            {/* Background Glow & Meteors */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    <h2 className="relative text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                        Get Compliant in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-white">Minutes</span>, Not Months.
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        Don't let regulations slow down your innovation. Integrate in 2 lines of code and stay ahead of the curve.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-zinc-200">
                            Start Integration Now <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
