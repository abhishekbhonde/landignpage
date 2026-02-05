"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function RiskDashboard() {
    return (
        <section className="py-24 overflow-hidden bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Risk Classification</h2>
                    <p className="text-zinc-400">Real-time monitoring of your AI models against EU regulations.</p>
                </div>

                <div className="flex justify-center perspective-1000">
                    <TiltCard className="relative w-full max-w-5xl aspect-video rounded-xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden group">
                        {/* Mock Dashboard UI */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="font-mono text-sm uppercase tracking-wider text-zinc-400">Control Panel</span>
                                </div>
                                <span className="text-xs text-zinc-500">System Active</span>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Unacceptable Risk Card */}
                                <div className="bg-black/50 border border-white/5 p-4 rounded-lg">
                                    <h4 className="text-zinc-400 text-xs uppercase mb-2">Prohibited Practices</h4>
                                    <div className="text-3xl font-bold text-white mb-1">0</div>
                                    <div className="text-emerald-500 text-xs flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span> Compliant
                                    </div>
                                </div>

                                {/* High Risk Card */}
                                <div className="bg-black/50 border border-white/5 p-4 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-50">
                                        <div className="animate-pulse w-2 h-2 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <h4 className="text-zinc-400 text-xs uppercase mb-2">High-Risk Systems</h4>
                                    <div className="text-3xl font-bold text-white mb-1">2</div>
                                    <div className="text-orange-400 text-xs">Action Required</div>
                                </div>

                                {/* Transparency Card */}
                                <div className="bg-black/50 border border-white/5 p-4 rounded-lg">
                                    <h4 className="text-zinc-400 text-xs uppercase mb-2">Transparency Score</h4>
                                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                                    <div className="w-full bg-zinc-800 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 w-[98%] h-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Graph Area Mockup */}
                            <div className="mt-6 h-48 md:h-64 bg-black/30 border border-white/5 rounded-lg relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                                {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 60, 75].map((h, i) => (
                                    <div key={i} className="w-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute bottom-0 w-full bg-blue-500/30 h-1"></div>
                                    </div>
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
