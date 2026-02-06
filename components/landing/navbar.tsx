"use client";

import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Katyar<span className="text-emerald-400">AI</span>
                    </span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Docs</a>
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block">
                        Log in
                    </a>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl border-0"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
