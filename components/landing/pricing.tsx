"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for experiments and side projects.",
        features: [
            "1,000 Actions / mo",
            "Basic Policy Engine",
            "7-day Log History",
            "Community Support",
        ],
        cta: "Get Started",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$99",
        description: "For teams scaling their AI agent workforce.",
        features: [
            "50,000 Actions / mo",
            "Advanced Guards (PII, Injection)",
            "Unlimited Log History",
            "Priority Support",
            "Custom Approvals",
        ],
        cta: "Start Free Trial",
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Security and compliance for the whole organization.",
        features: [
            "Unlimited Actions",
            "SSO / SAML",
            "EU AI Act / NIST Reports",
            "Dedicated Account Manager",
            "Custom VPC Deployment",
        ],
        cta: "Contact Sales",
        highlight: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-zinc-950">
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
                        <span className="text-white">Simple, </span>
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            transparent pricing
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Start for free, scale as you grow. No hidden fees, no surprises.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative p-8 rounded-3xl border flex flex-col ${tier.highlight
                                ? "bg-gradient-to-b from-emerald-500/10 to-transparent border-emerald-500/30"
                                : "bg-zinc-900/50 border-zinc-800"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-5xl font-bold text-white">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-zinc-500">/mo</span>}
                            </div>
                            <p className="text-zinc-400 mb-8">
                                {tier.description}
                            </p>

                            <div className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3 text-zinc-300">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full h-12 rounded-xl font-medium ${tier.highlight
                                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0"
                                    : "bg-zinc-800 hover:bg-zinc-700 text-white border-0"
                                    }`}
                            >
                                {tier.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
