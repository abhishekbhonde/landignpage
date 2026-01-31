'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useSpring, useInView, AnimatePresence, Variants } from 'framer-motion'
import {
    ArrowRight,
    Shield,
    Zap,
    Activity,
    Search,
    Lock,
    CheckCircle2,
    Workflow,
    Users,
    Plus,
    ChevronRight,
    Star,
    Layers,
    Fingerprint,
    Eye,
    Code2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// --- Animation Variants ---
const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const cardHover: Variants = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        borderColor: 'rgba(255,255,255,0.1)'
    },
    hover: {
        scale: 1.01,
        y: -4,
        boxShadow: '0px 10px 30px -10px rgba(0,0,0,0.5)',
        borderColor: 'rgba(255,255,255,0.25)',
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

const SectionHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("mb-16", className)}
        >
            {children}
        </motion.div>
    )
}

const AnimatedCounter = ({ value, suffix = '' }: { value: string, suffix?: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <span ref={ref} className="inline-block tabular-nums">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {value}{suffix}
                </motion.span>
            ) : (
                <span className="opacity-0">{value}{suffix}</span>
            )}
        </span>
    )
}

const FeatureCard = ({ children, className, variant = "default" }: { children: React.ReactNode, className?: string, variant?: "default" | "gradient" }) => {
    return (
        <motion.div
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            className={cn(
                "rounded-3xl border border-white/10 p-8 relative overflow-hidden group backdrop-blur-sm",
                variant === "default" ? "bg-neutral-900/10" : "bg-gradient-to-br from-neutral-900/30 to-black",
                className
            )}
        >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    )
}

export default function LandingPage() {
    const [mounted, setMounted] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                            <span className="text-black text-sm font-bold font-mono">K</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight group-hover:text-neutral-200 transition-colors">Katyar</span>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        {['Features', 'Use Cases', 'Pricing', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-neutral-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/KanurkarPrateek/nexas" className="hidden sm:flex text-sm font-medium text-neutral-400 hover:text-white items-center gap-2 transition-colors">
                            <Star className="w-4 h-4" />
                            <span>Star on GitHub</span>
                        </a>
                        <Button size="sm" className="bg-white text-black hover:bg-neutral-200 font-semibold px-5 py-2 h-9 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Get Started
                        </Button>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-6 relative overflow-hidden min-h-[95vh] flex items-center">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                    <motion.div
                        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] left-[10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
                    />

                    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16 items-center w-full">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-6"
                        >
                            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300 mb-8 hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-neutral-300 tracking-wide">v1.0 Release</span>
                                <div className="w-[1px] h-3 bg-white/20 mx-2" />
                                <span className="text-white">Security for the Autonomous Enterprise</span>
                                <ChevronRight className="w-3 h-3 text-neutral-500 ml-1" />
                            </motion.div>

                            <motion.h1
                                variants={fadeUpVariant}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-8"
                            >
                                Control what your <br />
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent inline-block pb-2">
                                    AI agents can do
                                </span>
                                <br />before they do it.
                            </motion.h1>

                            <motion.h2 variants={fadeUpVariant} className="text-xl text-neutral-400 max-w-lg mb-10 leading-relaxed font-light">
                                The identity-first governance gateway for the autonomous enterprise.
                            </motion.h2>

                            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                                <Button className="h-14 px-10 bg-white text-black hover:bg-neutral-100 text-lg font-bold rounded-full w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>

                            <motion.div variants={fadeUpVariant} className="border-t border-white/5 pt-8">
                                <p className="text-xs font-semibold text-neutral-500 mb-6 uppercase tracking-[0.2em]">Enabling safe agent deployment at</p>
                                <div className="flex flex-wrap gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700">
                                    {['Acme Corp', 'GlobalBank', 'TechFlow', 'DataSystems'].map((brand, i) => (
                                        <div key={i} className="flex items-center gap-2 group cursor-default">
                                            <div className="w-5 h-5 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                                            <span className="text-sm font-bold tracking-tight text-white/50 group-hover:text-white transition-colors">{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Code Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="lg:col-span-6 relative hidden lg:block perspective-1000"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent rounded-[2rem] blur-3xl" />
                            <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A]/90 shadow-2xl overflow-hidden backdrop-blur-sm">
                                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.03]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
                                    </div>
                                    <div className="text-[11px] font-mono text-neutral-500 flex items-center gap-2">
                                        <Lock className="w-3 h-3" />
                                        policy_engine.py — Katyar
                                    </div>
                                </div>
                                <div className="p-8 font-mono text-sm leading-8 text-neutral-300 overflow-x-auto">
                                    <div className="flex">
                                        <div className="w-8 flex-shrink-0 text-neutral-700 select-none text-right pr-4 border-r border-white/5 mr-4 font-normal">
                                            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                                        </div>
                                        <div className="w-full">
                                            <div><span className="text-purple-400 font-bold">from</span> katyar <span className="text-purple-400 font-bold">import</span> Katyar</div>
                                            <div className="h-4" />
                                            <div><span className="text-neutral-500 italic"># Define agent identity & policy</span></div>
                                            <div>kt = Katyar(api_key=<span className="text-green-400">"kt_prod_..."</span>)</div>
                                            <div>kt.policy.enforce(</div>
                                            <div>&nbsp;&nbsp;allow=[<span className="text-green-400">"read:CRM"</span>, <span className="text-green-400">"search_web"</span>],</div>
                                            <div>&nbsp;&nbsp;deny=[<span className="text-red-400">"write:DB"</span>, <span className="text-red-400">"delete:*"</span>],</div>
                                            <div>&nbsp;&nbsp;pii_masking=<span className="text-blue-400 font-bold">True</span></div>
                                            <div>)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-y border-white/5 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-x border-white/5">
                            {[
                                { label: 'Latency Impact', value: '<5', suffix: 'ms', icon: Zap },
                                { label: 'Uptime SLA', value: '99.99', suffix: '%', icon: Activity },
                                { label: 'Threats Blocked', value: '1.2', suffix: 'M+', icon: Shield },
                                { label: 'Audit Logs', value: '100', suffix: '%', icon: Search },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="py-12 px-8 flex flex-col justify-center items-start hover:bg-white/[0.03] transition-colors group cursor-default"
                                >
                                    <div className="flex items-center gap-2 mb-3 text-neutral-500 group-hover:text-blue-400 transition-colors">
                                        <stat.icon className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                    <div className="text-4xl font-bold tracking-tighter text-white group-hover:scale-105 transition-transform origin-left">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-40 px-6 bg-[#050505] relative">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading className="max-w-3xl mb-24">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                                Autonomous but <span className="text-neutral-500">Governed.</span>
                            </h2>
                            <p className="text-neutral-400 text-xl font-light leading-relaxed">
                                Close the AI Trust Gap. Katyar provides the essential control plane for deploying agents in regulated environments, ensuring security without sacrificing autonomy.
                            </p>
                        </SectionHeading>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            <FeatureCard className="md:col-span-2 row-span-2" variant="gradient">
                                <div className="p-2 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                                        <Workflow className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Granular Policy Builder</h3>
                                    <p className="text-neutral-400 leading-relaxed text-base mb-8">
                                        Instead of all-or-nothing access, define exactly what tools and data your agents can interact with. Build context-aware rules that adapt to user roles, data sensitivity, and session intent.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                        {[
                                            'Identity-Based Access',
                                            'Tool-Level Permissions',
                                            'PII Masking Rules',
                                            'Dynamic Rate Limits'
                                        ].map((p) => (
                                            <div key={p} className="flex items-center gap-2 text-sm text-neutral-300 bg-white/5 border border-white/5 rounded-lg px-4 py-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                {p}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto p-6 rounded-2xl bg-black border border-white/5 font-mono text-xs">
                                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-neutral-500 uppercase">Policy: Customer_Support_V2</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div><span className="text-purple-400">ALLOW</span> search_kb <span className="text-purple-400">WHERE</span> user.plan == <span className="text-green-400">"premium"</span></div>
                                            <div><span className="text-red-400">DENY</span> refund_request <span className="text-purple-400">IF</span> amt &gt; <span className="text-blue-400">1000</span></div>
                                        </div>
                                    </div>
                                </div>
                            </FeatureCard>

                            <FeatureCard>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                                    <Shield className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">Semantic Firewall</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                                    Automatically detect and block prompt injections, jailbreaks, and PII leaks before they reach your LLMs or databases.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {['Inject-Shield', 'PII Filter', 'Jailbreak-Off'].map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] uppercase font-bold tracking-wider">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </FeatureCard>

                            <FeatureCard>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">Human-in-the-Loop</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                                    Route high-risk actions to human approval via Slack or Dashboard. Keep humans accountable for agent decisions and maintain total oversight for sensitive operations.
                                </p>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-neutral-700 border-2 border-[#050505] overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-neutral-600 to-neutral-800" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">+5 Admins Online</span>
                                    </div>
                                </div>
                            </FeatureCard>

                            <FeatureCard className="md:col-span-3 min-h-[450px] flex flex-col lg:flex-row items-stretch gap-12 !p-12" variant="gradient">
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-8 border border-orange-500/20">
                                        <Activity className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Identity-First Audit Logs</h3>
                                    <p className="text-neutral-300 max-w-xl leading-relaxed mb-8 text-lg font-light">
                                        Eliminate Shadow AI with total visibility. Katyar captures every agent interaction with full request and response context, ensuring you never lose track of autonomous behavior.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <Search className="w-4 h-4 text-orange-400" />
                                                <span>Searchable Intent</span>
                                            </div>
                                            <p className="text-sm text-neutral-400 font-light">Instantly find specific tool calls or prompt contents across all agents.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <Layers className="w-4 h-4 text-orange-400" />
                                                <span>Retention Controls</span>
                                            </div>
                                            <p className="text-sm text-neutral-400 font-light">Customizable data lifecycle policies to meet your industry's compliance needs.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <Fingerprint className="w-4 h-4 text-orange-400" />
                                                <span>Exportable Records</span>
                                            </div>
                                            <p className="text-sm text-neutral-400 font-light">Generate SOC2-ready audit trails and immutable compliance documentation.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <Eye className="w-4 h-4 text-orange-400" />
                                                <span>Real-Time Visibility</span>
                                            </div>
                                            <p className="text-sm text-neutral-400 font-light">Monitor active agent sessions as they happen with sub-5ms tracing.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-3xl font-bold text-white tracking-tighter">100% Traceability</span>
                                            <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">Provenance for every decision</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-3xl font-bold text-white tracking-tighter">Zero Shadow AI</span>
                                            <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">Universal agent authentication</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 w-full relative min-h-[300px] flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
                                    <div className="relative w-full p-8 font-mono text-xs text-neutral-400">
                                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-neutral-200">Session: 8f2d-41a9</span>
                                            </div>
                                            <span className="text-neutral-500">2026-05-12T14:22:01.034Z</span>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-orange-400 mb-1">REQ_INPUT</div>
                                                <div className="text-neutral-200 bg-white/5 p-2 rounded">"Execute wire transfer of $1,200 to secondary account..."</div>
                                            </div>
                                            <div className="flex items-center gap-4 text-[10px]">
                                                <span className="text-blue-400">POLICY_EVAL:</span>
                                                <span className="text-green-500 font-bold bg-green-500/10 px-2 rounded">PASS</span>
                                                <span className="text-neutral-500 italic">Rules: limit_check, identity_v3</span>
                                            </div>
                                            <div>
                                                <div className="text-purple-400 mb-1">TOOL_CALL</div>
                                                <div className="text-neutral-200 bg-white/5 p-2 rounded">bank_api.transfer(amt=1200, dest="ACC_4439")</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </section>

                {/* Logo Ticker */}
                <section id="use-cases" className="py-16 border-y border-white/5 bg-white/[0.01]">
                    <div className="relative overflow-hidden w-full">
                        <div className="flex items-center gap-16 animate-scroll whitespace-nowrap min-w-full pl-6">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-16 items-center">
                                    {[
                                        'Customer Service', 'DevOps Automation', 'Data Analysis', 'Sales Assistant', 'Multi-Agent', 'Healthcare', 'Fintech', 'Government'
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-neutral-400 font-medium group cursor-default">
                                            <CheckCircle2 className="w-5 h-5 text-neutral-600 group-hover:text-green-500 transition-colors" />
                                            <span className="text-lg tracking-tight group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                    <div className="w-[1px] h-8 bg-white/10 mx-6" />
                                    {['LangChain', 'CrewAI', 'AutoGen', 'PydanticAI'].map((tech) => (
                                        <div key={tech} className="flex items-center gap-3 text-neutral-600 font-medium opacity-70 hover:opacity-100 transition-opacity">
                                            <Code2 className="w-4 h-4" />
                                            <span className="text-sm font-mono">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="py-32 px-6 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Pricing for Every Stage</h2>
                            <p className="text-neutral-400 text-lg">Start free, scale with production-grade controls.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {[
                                {
                                    name: 'Free',
                                    price: '$0',
                                    description: 'For prototypes and testing',
                                    features: ['1,000 actions/mo', 'Basic Policies', '7-day retention', 'PII Detection'],
                                    cta: 'Get Started'
                                },
                                {
                                    name: 'Pro',
                                    price: '$99',
                                    description: 'For production workloads',
                                    features: ['50,000 actions/mo', 'Slack Approval', '30-day retention', 'Cedar Policies', 'Agent Groups'],
                                    popular: true,
                                    cta: 'Get Started'
                                },
                                {
                                    name: 'Team / Enterprise',
                                    price: 'Custom',
                                    description: 'For regulated teams',
                                    features: ['Unlimited actions', 'SSO (SAML)', 'Audit Export', 'VPC Deployment', 'SLA Guarantees'],
                                    cta: 'Contact Sales'
                                }
                            ].map((plan, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group",
                                        plan.popular ? "bg-white/[0.03] border-white/20 ring-1 ring-white/10 shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)] scale-105 z-10" : "bg-black border-white/10"
                                    )}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-4 text-sm font-semibold text-neutral-400 uppercase tracking-widest">{plan.name}</div>
                                    <div className="mb-2 flex items-baseline gap-1">
                                        <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                                        <span className="text-base text-neutral-500 font-medium">/mo</span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-8 font-light">{plan.description}</p>
                                    <div className="flex-1 space-y-5 mb-10">
                                        {plan.features.map((f) => (
                                            <div key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                                </div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        variant={plan.popular ? 'default' : 'outline'}
                                        onClick={() => window.open('https://calendly.com/abhishekbhonde31/30min?month=2026-02', '_blank')}
                                        className={cn(
                                            "w-full rounded-full h-12 text-sm font-semibold tracking-wide transition-all",
                                            plan.popular ? "bg-white text-black hover:bg-neutral-200 shadow-lg" : "border-white/10 hover:bg-white/5 text-white hover:text-white"
                                        )}
                                    >
                                        {plan.cta}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="py-32 px-6 border-t border-white/5 bg-neutral-900/5">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 tracking-tight">Common Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "What is the 'AI Trust Gap'?", a: "It's the risk preventing enterprises from deploying autonomous agents. Without governance, agents are black boxes. Katyar provides the visibility and control needed to trust them." },
                                { q: "How is Katyar different from traditional firewalls?", a: "Traditional firewalls look at IP addresses. Katyar is a semantic firewall that understands agent intent, prompt contents, function calls, and PII, blocking logic attacks that others miss." },
                                { q: "Does this slow down my agents?", a: "Minimal overhead (<5ms). Our edge-optimized gateway parses policies locally and uses WebSockets for real-time performance." },
                                { q: "Can I self-host for data privacy?", a: "Yes. Our Enterprise plan supports VPC and self-hosted deployments via Docker, ensuring your data never leaves your environment." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group hover:border-white/20 transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full text-left px-8 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-medium text-base text-neutral-200">{item.q}</span>
                                        <div className={cn("w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300", openFaq === i ? "bg-white text-black rotate-45" : "text-neutral-500")}>
                                            <Plus className="w-4 h-4" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-8 pb-8 pt-0 text-sm text-neutral-400 leading-relaxed max-w-2xl"
                                            >
                                                {item.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="py-40 px-6 border-t border-white/5 text-center bg-[url('/grid.svg')] relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                            Ready to ship your agent?
                        </motion.h2>
                        <p className="text-neutral-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                            Join engineering teams at top fintechs and startups who trust Katyar for their agent governance.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-neutral-200 font-bold text-base shadow-xl">
                                Get Started Now
                            </Button>
                            <Button
                                onClick={() => window.open('https://calendly.com/abhishekbhonde31/30min?month=2026-02', '_blank')}
                                className="h-14 px-10 rounded-full border-2 border-blue-500 bg-blue-500/10 text-white hover:bg-blue-500 font-bold text-base shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-md"
                            >
                                Request Demo
                            </Button>
                        </div>
                    </div>
                </section>

                <footer className="py-12 border-t border-white/5 px-6 bg-black">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <span>© 2026 Katyar Inc.</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Documentation</a>
                            <a href="#" className="hover:text-white transition-colors">GitHub</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
