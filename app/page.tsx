'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Eye,
  Lock,
  Activity,
  CheckCircle2,
  Zap,
  Server,
  Code2,
  Workflow,
  MessageSquare,
  Search,
  Layers,
  Users,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              <span className="text-black text-lg font-bold">K</span>
            </div>
            Katyar
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">How it Works</a>
            <a href="#use-cases" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Use Cases</a>
            <a href="#pricing" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Pricing</a>
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
        <section className="pt-28 pb-16 px-6 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />
          <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6 hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                  v1.0 is now available
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-10">
                Control what your AI agents
                <span className="block mt-4 bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                  can do before they do it.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-10 leading-relaxed font-light">
                Katyar is a security gateway for AI agents — authenticate, authorize, audit, and approve every action.
                Run a secure, compliant AI agent infrastructure in <span className="text-white">3 lines of code</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <Button className="h-12 px-8 bg-white text-black hover:bg-neutral-200 text-base font-semibold rounded-full group transition-all">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-12 px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 text-base font-medium rounded-full transition-all">
                  Read Documentation
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-40">
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 w-full lg:w-auto">Integrates with</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">L</div>
                  <span className="text-sm font-medium">LangChain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">C</div>
                  <span className="text-sm font-medium">CrewAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">A</div>
                  <span className="text-sm font-medium">AutoGen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">P</div>
                  <span className="text-sm font-medium">PydanticAI</span>
                </div>
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
                { label: 'Integrations', value: 'Any LLM', sub: 'LangChain, CrewAI, AutoGen' },
                { label: 'Uptime', value: '99.99%', sub: 'SLA guaranteed' },
                { label: 'Compliance', value: 'Audit Ready', sub: 'SOC2, GDPR, HIPAA' }
              ].map((stat, i) => (
                <div key={i} className="py-10 px-8 first:pl-0 group transition-all duration-300 hover:bg-white/[0.03]">
                  <div className="text-3xl font-mono font-bold mb-1 tracking-tighter transition-colors group-hover:text-white">{stat.value}</div>
                  <div className="text-sm font-medium text-neutral-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12 leading-tight">
                  Security that doesn't
                  <br />
                  slow you down.
                </h2>

                <div className="space-y-12">
                  {[
                    { title: '01. Sign Up', desc: 'Create your workspace with Google or GitHub in 30 seconds.' },
                    { title: '02. Get API Key', desc: 'Securely generate credentials for your agents from the dashboard.' },
                    { title: '03. Wrap Your Agent', desc: 'Add 3 lines of code using our Python SDK or LangChain handler.' },
                    { title: '04. Govern & Scale', desc: 'Watch actions live, create policies, and approve high-risk requests.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-sm font-mono text-neutral-500">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative sticky top-32">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-xl border border-white/10 bg-black overflow-hidden shadow-2xl p-6">
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                      <div className="w-3 h-3 rounded-full bg-green-400/20" />
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">katyar.py</div>
                  </div>
                  <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                    <code className="text-neutral-300">
                      <span className="text-purple-400">from</span> katyar <span className="text-purple-400">import</span> Katyar<br /><br />
                      kt = Katyar(api_key=<span className="text-green-400">"kt_live_xxx"</span>)<br /><br />
                      <span className="text-blue-400">@kt.track</span><br />
                      <span className="text-purple-400">def</span> <span className="text-yellow-400">my_agent</span>():<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500"># Your existing agent code</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500"># All actions now go through Katyar</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">pass</span>
                    </code>
                  </pre>
                </div>

                <div className="mt-8 flex items-center gap-4 px-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    LangChain Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    CrewAI Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    AutoGen Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Platform Capabilities</h2>
              <p className="text-xl text-neutral-400 max-w-2xl">The complete infrastructure for AI agent governance and security.</p>
            </div>

            <div className="grid md:grid-cols-3 border-l border-t border-white/10">
              {[
                {
                  icon: Shield,
                  title: 'Security Guardrails',
                  desc: 'Powered by LLM Guard. Blocks prompt injection, jailbreak attempts, and instruction hijacking.'
                },
                {
                  icon: Lock,
                  title: 'Data Privacy',
                  desc: 'Detect and mask PII (emails, SSNs, credit cards) before sensitive data leaves your system.'
                },
                {
                  icon: Workflow,
                  title: 'Policy Engine',
                  desc: 'Granular control over tool access with Visual Policy Builder or Cedar Policy Language.'
                },
                {
                  icon: Eye,
                  title: 'Human Oversight',
                  desc: 'Approval workflows for high-risk actions. Approve or deny directly in Slack or Dashboard.'
                },
                {
                  icon: Activity,
                  title: 'Real-Time Audit',
                  desc: 'Immutable logs of every agent action with full request/response inspection.'
                },
                {
                  icon: Server,
                  title: 'Agent Gateway',
                  desc: 'Secure proxy between agents and tools with WebSocket connections and low latency.'
                }
              ].map((feature, i) => (
                <div key={i} className="border-r border-b border-white/10 p-8 hover:bg-white/[0.02] transition-colors group">
                  <feature.icon className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section id="use-cases" className="border-t border-white/10 bg-neutral-900/10">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Enterprise Use Cases</h2>
              <p className="text-xl text-neutral-400 max-w-2xl">Proven governance for production AI systems across industries.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Customer Service',
                  case: 'Limit refund amounts and restrict AI data access to only authorized records.',
                  icon: MessageSquare,
                },
                {
                  title: 'Fintech',
                  case: 'Ensure every transaction over $500 gets human approval before completion.',
                  icon: Shield,
                },
                {
                  title: 'Healthcare',
                  case: 'Log all patient data access for HIPAA compliance and block any PII leaks.',
                  icon: Lock,
                },
                {
                  title: 'DevOps Automation',
                  case: 'Require approval for production infrastructure changes or secret access.',
                  icon: Server,
                },
                {
                  title: 'Data Analysis',
                  case: 'Enforce read-only policies and mask sensitive financial columns in queries.',
                  icon: Search,
                },
                {
                  title: 'Multi-Agent Systems',
                  case: 'Isolate agents with least-privilege policies and track inter-agent chatter.',
                  icon: Layers,
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-black hover:bg-white/[0.02] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                    <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.case}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Simple, Usage-Based Pricing</h2>
              <p className="text-xl text-neutral-400">Pay for what you use. No surprises.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  desc: 'For trials and small projects.',
                  features: ['1,000 actions/mo', '1 Workspace', '7 days retention', 'Basic policies']
                },
                {
                  name: 'Pro',
                  price: '$99',
                  desc: 'For production workloads.',
                  features: ['50,000 actions/mo', '5 Workspaces', '30 days retention', 'Slack HITL', 'Cedar policies']
                },
                {
                  name: 'Team',
                  price: '$499',
                  desc: 'For scaling teams.',
                  features: ['500,000 actions/mo', 'Unlimited Workspaces', '90 days retention', 'SSO (SAML)', 'Audit Export']
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  desc: 'For advanced requirements.',
                  features: ['Unlimited actions', 'VPC Deployment', '7 yrs retention', '99.99% SLA', 'Dedicated support']
                }
              ].map((plan, i) => (
                <div key={i} className="border-r border-b border-white/10 p-8 hover:bg-white/[0.02] transition-colors flex flex-col">
                  <h3 className="text-sm font-mono text-neutral-500 uppercase mb-4 tracking-widest">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm text-neutral-500 ml-1">/mo</span>}
                  </div>
                  <p className="text-sm text-neutral-500 mb-8">{plan.desc}</p>

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className={`${plan.name === 'Pro' ? 'bg-white text-black' : 'bg-transparent border border-white/10 text-white hover:bg-white/5'} h-10 w-full rounded-full text-sm font-medium`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-white/10 bg-neutral-900/10">
          <div className="max-w-3xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
            <div className="divide-y divide-white/10">
              {[
                { q: "What is an 'Agent Action'?", a: "An action is counted each time your agent calls a tool through Katyar, gets a policy decision, or triggers a human-in-the-loop request." },
                { q: "Does Katyar support custom agents?", a: "Yes. Our Python SDK decorator works with any custom agent or function, in addition to native support for frameworks like LangChain." },
                { q: "What about performance/latency?", a: "Our policy engine is optimized for high performance, typically evaluating rules in under 10ms. Policy-only checks can also run asynchronously." },
                { q: "Is my data used for training?", a: "No. We never use customer data to train models. Your data is only used to provide the governance services you configure." },
                { q: "Can I host Katyar in my own VPC?", a: "Yes, self-hosting and VPC deployments are available as part of our Enterprise plan. Contact us for details." }
              ].map((faq, i) => (
                <div key={i} className="py-2">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-white transition-colors group"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <Plus className={`w-5 h-5 text-neutral-500 group-hover:text-white transition-transform ${openFaq === i ? 'rotate-45' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pb-6 text-neutral-400 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-t border-white/10">
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
              Free tier includes 1,000 monthly actions. No credit card required.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-xs font-bold">K</span>
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
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Developers</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SDKs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
              <div>© 2024 Katyar Inc. All rights reserved.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
