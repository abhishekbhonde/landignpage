'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Eye, Lock, Activity, CheckCircle2, FileCheck, Zap, Server, Code2, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-black/50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-lg">K</span>
            </div>
            Katyar
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Security</a>
            <a href="#pricing" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Pricing</a>
            <a href="https://github.com/KanurkarPrateek/nexas" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/KanurkarPrateek/nexas" className="hidden sm:block text-sm font-medium text-white hover:text-neutral-300 transition-colors">Star on GitHub</a>
            <Button className="bg-white text-black hover:bg-neutral-200 font-medium px-4 h-9 rounded-full">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                v1.0 is now available
              </div>

              <h1 className="text-[56px] lg:text-[88px] font-bold leading-[1.05] tracking-tight mb-8">
                Governance for the
                <br />
                <span className="text-neutral-500">Agentic Era.</span>
              </h1>

              <p className="text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
                The complete infrastructure for securing and governing autonomous AI agents.
                Prevent prompt injection, enforce policies, and maintain compliance at scale.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button className="h-12 px-8 bg-white text-black hover:bg-neutral-200 text-base font-medium rounded-full">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 px-8 border-white/10 bg-transparent text-white hover:bg-white/5 text-base font-medium rounded-full">
                  Read Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="border-y border-white/10 bg-neutral-900/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { label: 'Latency', value: '<10ms', sub: 'Policy evaluation' },
                { label: 'Throughput', value: '100k+', sub: 'Events per second' },
                { label: 'Uptime', value: '99.99%', sub: 'SLA guaranteed' },
                { label: 'Security', value: 'SOC 2', sub: 'Type II compliant' }
              ].map((stat, i) => (
                <div key={i} className="py-12 pl-8 first:pl-0">
                  <div className="text-3xl font-mono font-bold mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Security that doesn't
                  <br />
                  slow you down.
                </h2>
                <div className="space-y-8">
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Katyar sits between your agents and their tools, intercepting actions in real-time.
                    Our high-performance policy engine evaluates requests in microseconds, ensuring
                    security without compromising user experience.
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: 'Zero-overhead Integration', desc: 'Drop-in SDKs for Python and TypeScript.' },
                      { title: 'Real-time Guardrails', desc: 'Block PII and malicious prompts instantly.' },
                      { title: 'Audit Everything', desc: 'Immutable logs for every agent action.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{item.title}</h3>
                          <p className="text-sm text-neutral-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-xl border border-white/10 bg-black overflow-hidden shadow-2xl">
                  <Image
                    src="/dashboard.png"
                    alt="Katyar Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid with Borders */}
        <section id="features" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-20">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Platform Capabilities</h2>
              <p className="text-xl text-neutral-400 max-w-2xl">Everything you need to run agents in production with confidence.</p>
            </div>

            <div className="grid md:grid-cols-3 border-l border-t border-white/10">
              {[
                {
                  icon: Shield,
                  title: 'Security Guardrails',
                  desc: 'Pre-configured scanners for prompt injection, PII, and secrets detection.'
                },
                {
                  icon: Workflow,
                  title: 'Policy Engine',
                  desc: 'Granular control over tool access, API calls, and resource usage.'
                },
                {
                  icon: Eye,
                  title: 'Human Oversight',
                  desc: 'Approval workflows for high-risk actions with full context review.'
                },
                {
                  icon: Activity,
                  title: 'Observability',
                  desc: 'Real-time traces, metrics, and logs for every agent interaction.'
                },
                {
                  icon: Server,
                  title: 'Infrastructure',
                  desc: 'Global edge network ensuring low latency policy evaluation.'
                },
                {
                  icon: Code2,
                  title: 'Developer Experience',
                  desc: 'Typed SDKs, CLI tools, and a dashboard built for engineers.'
                }
              ].map((feature, i) => (
                <div key={i} className="border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors group">
                  <feature.icon className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section className="py-32 px-6 border-t border-white/10 bg-neutral-900/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Start governing your
              <br />
              AI agents today.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="h-12 px-8 bg-white text-black hover:bg-neutral-200 text-base font-medium rounded-full w-full sm:w-auto">
                Get Started for Free
              </Button>
              <Button variant="outline" className="h-12 px-8 border-white/10 bg-transparent text-white hover:bg-white/5 text-base font-medium rounded-full w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
            <p className="mt-8 text-sm text-neutral-500">
              Free tier includes 10k monthly events using hosted cloud.
            </p>
          </div>
        </section>

        {/* Detailed Footer */}
        <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-xs">K</span>
                  </div>
                  Katyar
                </div>
                <p className="text-neutral-500 text-sm max-w-xs mb-8">
                  The enterprise standard for AI agent governance and security.
                  Built for developers, designed for security teams.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Developers</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SDKs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
              <div>© 2024 Katyar Inc. All rights reserved.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Security Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
