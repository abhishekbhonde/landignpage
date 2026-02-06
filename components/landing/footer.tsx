"use client";

import { Github, Twitter, Linkedin, Shield } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Documentation", href: "#" },
    ],
    resources: [
        { name: "EU AI Act Guide", href: "#" },
        { name: "NIST AI RMF Overview", href: "#" },
        { name: "Compliance Checklist", href: "#" },
        { name: "Blog", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Security", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-zinc-800">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Katyar<span className="text-emerald-400">AI</span>
                            </span>
                        </div>
                        <p className="text-zinc-400 max-w-xs mb-6 leading-relaxed">
                            AI Agent Governance & Compliance Platform. Policy engine, guardrails, human oversight, and observability.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-sm text-zinc-500">
                    <p>© 2025 KatyarAI Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
