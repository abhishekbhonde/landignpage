"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeSnippet } from "./code-snippet";
import { BackgroundBeams } from "./background-beams";
import { ButtonMovingBorder } from "./moving-border";
import { TextGenerateEffect } from "./text-generate-effect";
import { cn } from "@/lib/utils";

const snippets = {
    node: `import { Katyar } from '@katyar/sdk';
const kt = new Katyar({ apiKey: 'kt_live_xxx' });

await kt.track(async () => {
  // Your agent code here
});`,
    python: `from katyar import Katyar
kt = Katyar(api_key="kt_live_xxx")

@kt.track
def my_agent():
    # Your agent code here
    pass`,
    go: `import "github.com/katyar-ai/sdk"
kt := katyar.New("kt_live_xxx")

kt.Track(func() {
    // Your agent code here
})`
};

export function Hero() {
    const [activeTab, setActiveTab] = useState<'node' | 'python' | 'go'>('node');

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Effects */}
            <BackgroundBeams />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] border-emerald-500/20">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-zinc-300 uppercase tracking-widest font-semibold">AI Governance & Security Gateway</span>
                </div>

                <div className="max-w-[1400px] mx-auto mb-8 flex flex-col items-center">
                    <TextGenerateEffect
                        words="Seamless AI Compliance & Governance"
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 mb-2 leading-[1.1] font-outfit md:whitespace-nowrap"
                    />
                    <TextGenerateEffect
                        words="in 2 Lines of Code"
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white/90 font-outfit"
                    />
                </div>

                <motion.p
                    className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    The world&apos;s most advanced gateway for AI agent security. Automate GDPR, EU AI Act, and SOC2 compliance with a single integration.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <ButtonMovingBorder
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Start Free Trial
                    </ButtonMovingBorder>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5 w-full sm:w-auto rounded-full">
                        View Documentation <FileText className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>

                {/* Trust/Compliance Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-wrap justify-center gap-6 mb-16 opacity-70"
                >
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm font-medium">
                        <Terminal className="w-4 h-4" /> <span>ISO 27001</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm font-medium">
                        <div className="h-4 w-[1px] bg-zinc-800"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm font-medium">
                        <FileText className="w-4 h-4" /> <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm font-medium">
                        <div className="h-4 w-[1px] bg-zinc-800"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm font-medium">
                        <ArrowRight className="w-4 h-4 text-green-500" /> <span>SOC2 Ready</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="max-w-2xl mx-auto dark relative group"
                >
                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-12 md:-right-24 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl z-20 hidden md:flex items-center gap-3"
                    >
                        <div className="rounded-full bg-green-500/20 p-2">
                            <ArrowRight className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-zinc-400">Risk Analysis</span>
                            <span className="text-sm font-bold text-white">Passed</span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-8 -left-12 md:-left-24 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl z-20 hidden md:flex items-center gap-3"
                    >
                        <div className="rounded-full bg-blue-500/20 p-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-zinc-400">Documentation</span>
                            <span className="text-sm font-bold text-white">Generated</span>
                        </div>
                    </motion.div>

                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-500 opacity-20 blur group-hover:opacity-40 transition duration-500" />
                    <div className="relative rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
                        {/* Tab Bar */}
                        <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
                            <div className="flex space-x-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="flex space-x-1">
                                <button
                                    onClick={() => setActiveTab('node')}
                                    className={cn(
                                        "px-3 py-1 rounded text-xs font-medium transition-all",
                                        activeTab === 'node' ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Node.js
                                </button>
                                <button
                                    onClick={() => setActiveTab('python')}
                                    className={cn(
                                        "px-3 py-1 rounded text-xs font-medium transition-all",
                                        activeTab === 'python' ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Python
                                </button>
                                <button
                                    onClick={() => setActiveTab('go')}
                                    className={cn(
                                        "px-3 py-1 rounded text-xs font-medium transition-all",
                                        activeTab === 'go' ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                        {/* Snippet Content (We pass key to force re-type on change, or handle inside) */}
                        <div className="text-left">
                            <CodeSnippet
                                key={activeTab}
                                code={snippets[activeTab]}
                                language={activeTab === 'node' ? 'javascript' : activeTab}
                                className="!bg-transparent !p-0 !m-0 rounded-none border-none"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Gradient Overlay for bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
}
