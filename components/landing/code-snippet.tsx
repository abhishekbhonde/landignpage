"use client";

import { useEffect, useState, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// Load languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-go";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
    code: string;
    language?: string;
    className?: string;
    onComplete?: () => void;
}

export function CodeSnippet({ code, language = "javascript", className, onComplete }: CodeSnippetProps) {
    const [displayedCode, setDisplayedCode] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let index = 0;
        setDisplayedCode("");
        setIsTyping(true);

        const interval = setInterval(() => {
            setDisplayedCode((prev) => {
                if (index < code.length) {
                    index++;
                    return code.substring(0, index);
                } else {
                    clearInterval(interval);
                    setIsTyping(false);
                    if (onComplete) onComplete();
                    return prev;
                }
            });
        }, 20); // Faster typing speed

        return () => clearInterval(interval);
    }, [code, onComplete]);

    const highlighted = useMemo(() => {
        const lang = language === 'node' ? 'javascript' : language;
        const grammar = Prism.languages[lang] || Prism.languages.javascript;
        return Prism.highlight(displayedCode, grammar, lang);
    }, [displayedCode, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("relative group rounded-lg overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl font-mono text-sm", className)}>
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-white/5">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <button
                    onClick={handleCopy}
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto min-h-[120px]">
                <pre className="text-zinc-300">
                    <code
                        className={`language-${language}`}
                        dangerouslySetInnerHTML={{ __html: highlighted }}
                    />
                    {isTyping && <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle">|</span>}
                </pre>
            </div>
        </div>
    );
}

