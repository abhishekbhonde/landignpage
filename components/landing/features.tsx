"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
    Shield,
    Eye,
    Lock,
    Copyright,
    FileCode,
    Beaker,
} from "lucide-react";

export function Features() {
    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                        Built for Everyone
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Whether you are shipping code, securing infrastructure, or proving compliance.
                    </p>
                </div>
                <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={cn(i === 3 || i === 6 ? "md:col-span-2" : "")}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
    {
        title: "3 Lines of Code",
        description: "Wrap your agent in minutes. Supports Python, Node.js, and Go.",
        header: <Skeleton />,
        icon: <FileCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Universal Compatibility",
        description: "Works with LangChain, CrewAI, AutoGen, or custom agents.",
        header: <Skeleton />,
        icon: <Beaker className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Block Prompt Injection",
        description: "LLM Guard automatically scans and blocks malicious inputs.",
        header: <Skeleton />,
        icon: <Shield className="h-4 w-4 text-red-500" />,
    },
    {
        title: "PII Redaction",
        description: "Detect and mask sensitive data (credit cards, emails) before it leaves.",
        header: <Skeleton />,
        icon: <Eye className="h-4 w-4 text-blue-500" />,
    },
    {
        title: "Granular Policies",
        description: "Define exactly what each agent can do (e.g., 'Read-only' access).",
        header: <Skeleton />,
        icon: <Lock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Full Audit Trail",
        description: "Log every action, prompt, and tool usage for compliance reviews.",
        header: <Skeleton />,
        icon: <Copyright className="h-4 w-4 text-green-500" />,
    },
];
