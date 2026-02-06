"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Terminal, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeSnippet } from "./code-snippet";
import { cn } from "@/lib/utils";

const snippets = {
    node: `import { Katyar } from '@katyar/node';
const kt = new Katyar("kt_live_xxx");

// Wrap tools for governance
const searchDb = kt.wrapTool(
  "database", "query",
  (query) => db.execute(query)
);`,
    python: `import katyar

# One-line compliance activation
katyar.init("kt_live_xxx")

@katyar.tool("database", "query")
def search_db(query: str):
    return db.execute(query)`,
    go: `import "github.com/katyar-ai/sdk"
kt := katyar.New("kt_live_xxx")

kt.Track(func() {
    // Your agent code here
})`
};

export function Hero() {
    const [activeTab, setActiveTab] = useState<'node' | 'python' | 'go'>('node');

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Grid Background - Aurorincad Style */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center pt-32 pb-20">
                {/* Large App Icon - Aurorincad Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                </motion.div>

                {/* Main Headline - Aurorincad + Sprinto Hybrid */}
                <motion.div
                    className="max-w-5xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
                        <span className="text-white">The next generation of </span>
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            AI Governance
                        </span>
                    </h1>
                </motion.div>

                {/* Description - Clean & Minimal */}
                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Built from the ground up to be fast, secure, and actually compliant. Policy engine, guardrails, human oversight, and observability — all in one line of code.
                </motion.p>

                {/* CTA Buttons - Aurorincad Gradient Style */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
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
                        <FileText className="mr-2 h-5 w-5" />
                        View Documentation
                    </Button>
                </motion.div>

                {/* Code Snippet Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-2xl mx-auto relative group"
                >
                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-8 md:-right-20 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3 rounded-xl shadow-2xl z-20 hidden md:flex items-center gap-3"
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
                        className="absolute -bottom-6 -left-8 md:-left-20 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3 rounded-xl shadow-2xl z-20 hidden md:flex items-center gap-3"
                    >
                        <div className="rounded-full bg-blue-500/20 p-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-zinc-400">Compliance</span>
                            <span className="text-sm font-bold text-white">21 Controls</span>
                        </div>
                    </motion.div>

                    {/* Code Card */}
                    <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
                        {/* Tab Bar */}
                        <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                            <div className="flex space-x-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <div className="flex space-x-1">
                                <button
                                    onClick={() => setActiveTab('node')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                                        activeTab === 'node' ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Node.js
                                </button>
                                <button
                                    onClick={() => setActiveTab('python')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                                        activeTab === 'python' ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Python
                                </button>
                                <button
                                    onClick={() => setActiveTab('go')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                                        activeTab === 'go' ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                        {/* Snippet Content */}
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

                {/* Trust Strip - Below Code */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-8 mt-16 text-zinc-500"
                >
                    <div className="flex items-center gap-2 text-sm">
                        <Terminal className="w-4 h-4" />
                        <span>EU AI Act</span>
                    </div>
                    <div className="w-px h-4 bg-zinc-800" />
                    <div className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4" />
                        <span>NIST AI RMF</span>
                    </div>
                    <div className="w-px h-4 bg-zinc-800" />
                    <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4" />
                        <span>UK ICO</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
