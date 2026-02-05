"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full bg-gradient-to-b from-black to-zinc-950/80 -z-50",
                className
            )}
        >
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-black/0" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden"
            >
                <svg
                    className="z-0 h-full w-full opacity-[0.2]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Beams */}
                    <motion.path
                        d="M50 100 C 40 100 0 50 0 0 L 100 0 C 100 50 60 100 50 100 Z"
                        fill="url(#beam-gradient)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    <motion.path
                        d="M30 100 L 50 0 L 70 100 Z"
                        fill="url(#beam-gradient-2)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    <defs>
                        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#52525b" stopOpacity="0" />
                            <stop offset="50%" stopColor="#71717a" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#52525b" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="beam-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#d4d4d8" stopOpacity="0" />
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
};
