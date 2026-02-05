"use client";

import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10 text-zinc-400 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-4">KatyarAI</h3>
                        <p className="max-w-xs mb-6">
                            The first developer-centric platform for EU AI Act compliance.
                            Automate risk assessments and documentation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Risk Assessment</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Documentation Generator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Governance API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">EU AI Act Text</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Compliance Checklist</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p>© 2025 KatyarAI Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
