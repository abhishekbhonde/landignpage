"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonMovingBorder } from "./moving-border";

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
            "Advanced Guards (PII, Injections)",
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
            "SOC2 / GDPR Export Reports",
            "Dedicated Account Manager",
            "Custom VPC Deployment",
        ],
        cta: "Contact Sales",
        highlight: false,
    },
];

export function Pricing() {
    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Start for free, scale with your agent usage. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-3xl border ${tier.highlight
                                    ? "bg-white/5 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                                    : "bg-zinc-900/50 border-white/5"
                                } relative flex flex-col`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-xs font-bold text-black uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-zinc-500">/mo</span>}
                            </div>
                            <p className="text-zinc-400 mb-8 text-sm">
                                {tier.description}
                            </p>

                            <div className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {tier.highlight ? (
                                <ButtonMovingBorder
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
                                >
                                    {tier.cta}
                                </ButtonMovingBorder>
                            ) : (
                                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 py-6">
                                    {tier.cta}
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
