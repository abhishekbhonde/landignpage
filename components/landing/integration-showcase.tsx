"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { CodeSnippet } from "./code-snippet";

export function IntegrationShowcase() {
    const beforeCode = `// Manual Compliance Check
function checkCompliance(data) {
  // Check against EU AI Act Annex III
  if (data.purpose === 'biometric' || 
      data.sector === 'critical_infra') {
      // Consult legal team
      // Generate risk assessment
      // Update technical docs
      throw new Error('Compliance Review Needed');
  }
  // ... more manual checks
}`;

    const afterCode = `// Automated Compliance
import { AIActor } from '@eu-ai-compliance/core';

const compliance = await AIActor.validate(model);
if (compliance.isCompliant) {
  await AIActor.generateReport();
}`;

    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-4 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">The Old Way</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Wrestling With Legal Frameworks</h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Manual compliance reviews are slow, expensive, and prone to human error.
                            Developer teams waste hundreds of hours decoding legal texts instead of building products.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-zinc-400">
                                <X className="w-5 h-5 text-red-500 mr-3" />
                                Costly legal consultations
                            </li>
                            <li className="flex items-center text-zinc-400">
                                <X className="w-5 h-5 text-red-500 mr-3" />
                                Delayed time-to-market
                            </li>
                            <li className="flex items-center text-zinc-400">
                                <X className="w-5 h-5 text-red-500 mr-3" />
                                Risk of fines (up to €35M)
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Visual - Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Before Card */}
                        <div className="absolute top-0 left-0 w-full transform -rotate-3 scale-95 opacity-50 blur-[1px] origin-bottom-right z-0">
                            <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-4 h-full">
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                    <span className="text-red-400 text-xs">legacy_implementation.js</span>
                                </div>
                                <pre className="text-xs text-zinc-500 font-mono overflow-hidden opacity-50">
                                    {beforeCode}
                                </pre>
                            </div>
                        </div>

                        {/* After Card (Main) */}
                        <div className="relative z-10 transform scale-100 hover:scale-[1.02] transition-transform duration-500">
                            <div className="bg-zinc-950 border border-emerald-500/30 rounded-xl shadow-2xl overflow-hidden">
                                <div className="bg-emerald-900/10 border-b border-emerald-500/20 p-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        <span className="text-emerald-400 text-sm font-mono">modern_compliance.ts</span>
                                    </div>
                                    <Check className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div className="p-6">
                                    <CodeSnippet code={afterCode} className="border-0 shadow-none bg-transparent !p-0" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
