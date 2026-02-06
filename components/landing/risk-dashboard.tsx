"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Shield, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

const metrics = [
    {
        label: "Prohibited Practices",
        value: "0",
        status: "Compliant",
        statusColor: "text-emerald-400",
        icon: <Shield className="w-5 h-5" />,
        bgColor: "bg-emerald-500/10",
    },
    {
        label: "High-Risk Systems",
        value: "2",
        status: "Action Required",
        statusColor: "text-orange-400",
        icon: <AlertTriangle className="w-5 h-5" />,
        bgColor: "bg-orange-500/10",
        pulse: true,
    },
    {
        label: "Transparency Score",
        value: "98%",
        status: "Excellent",
        statusColor: "text-blue-400",
        icon: <TrendingUp className="w-5 h-5" />,
        bgColor: "bg-blue-500/10",
        progress: 98,
    },
];

export function RiskDashboard() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Real-time </span>
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            compliance monitoring
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Track your AI systems against EU regulations with live dashboards and instant alerts.
                    </p>
                </motion.div>

                <div className="flex justify-center" style={{ perspective: "1000px" }}>
                    <TiltCard className="relative w-full max-w-5xl aspect-[16/10] rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 p-6 md:p-8">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">Katyar Dashboard</span>
                                        <div className="text-xs text-zinc-500">Real-time monitoring</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs text-zinc-400">System Active</span>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {metrics.map((metric, idx) => (
                                    <div key={idx} className="bg-zinc-950/50 border border-zinc-800 p-5 rounded-2xl">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs uppercase tracking-wider text-zinc-500">{metric.label}</span>
                                            <div className={`w-8 h-8 rounded-lg ${metric.bgColor} flex items-center justify-center ${metric.statusColor}`}>
                                                {metric.icon}
                                            </div>
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                                        <div className={`text-sm ${metric.statusColor} flex items-center gap-2`}>
                                            {metric.pulse && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />}
                                            <CheckCircle className="w-3 h-3" />
                                            {metric.status}
                                        </div>
                                        {metric.progress && (
                                            <div className="w-full bg-zinc-800 h-1.5 mt-3 rounded-full overflow-hidden">
                                                <div className="bg-blue-500 h-full rounded-full" style={{ width: `${metric.progress}%` }} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Chart Area */}
                            <div className="h-32 md:h-40 bg-zinc-950/30 border border-zinc-800 rounded-2xl relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-6 gap-1">
                                {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 60, 75, 85, 55, 70].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-emerald-500/40 to-emerald-500/10 hover:from-emerald-500/60 hover:to-emerald-500/20 transition-colors rounded-t-sm"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
