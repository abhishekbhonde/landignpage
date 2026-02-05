"use client";

import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-black" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Katyar<span className="text-zinc-500">AI</span></span>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
                    <a href="#" className="hover:text-white transition-colors">Risk Assessment</a>
                    <a href="#" className="hover:text-white transition-colors">Compliance</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Docs</a>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block">Log in</a>
                    <Button size="sm" className="bg-white text-black hover:bg-zinc-200">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
