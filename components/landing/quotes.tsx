"use client";

import { motion } from "framer-motion";

export function Quotes() {
    return (
        <section className="py-32 relative overflow-hidden bg-white text-black">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                            "AI systems should be overseen by people, rather than by automation, to prevent harmful outcomes."
                        </p>
                        <p className="text-xl md:text-2xl text-zinc-600 font-medium tracking-wide items-center justify-center flex gap-2">
                            <span className="w-8 h-[1px] bg-zinc-400 inline-block"></span>
                            EU AI Act, Recital 48
                            <span className="w-8 h-[1px] bg-zinc-400 inline-block"></span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-zinc-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-zinc-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
