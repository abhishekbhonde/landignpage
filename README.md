# Katyar Landing Page

High-converting SaaS landing page for Katyar - AI Agent Governance Platform.

## 🚀 Features

- **Modern Design**: Dark/black professional theme inspired by Stripe, Linear, and Vercel
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Comprehensive meta tags, OpenGraph, Twitter cards, and semantic HTML
- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Fast Performance**: Next.js 16 with Turbopack
- **Accessible**: Proper heading hierarchy, alt text, and ARIA labels

## 📋 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Typography**: Inter (Google Fonts)
- **Icons**: Lucide React
- **Language**: TypeScript

## 🎨 Sections

1. **Hero Section**
   - Clear product tagline: "Control what your AI agents can do before they do it"
   - Value proposition highlighting security, compliance, and human oversight
   - Primary CTAs: "Get Started" and "View Documentation"
   - Technology badges (LangChain, CrewAI, AutoGPT, Custom Agents)

2. **Product Overview**
   - Target audience cards (Engineering, Compliance, Security teams)
   - Problem/solution narrative

3. **Features Section**
   - 6 core features with icons:
     - Security Guardrails (prompt injection, PII, secrets)
     - Policy Engine (JSON rules, wildcards)
     - Human-in-the-Loop (approval workflows)
     - Real-time Observability (event stream, audit logs)
     - Compliance Dashboards (EU AI Act, NIST, UK ICO)
     - Low Latency (sub-100ms decisions)

4. **Dashboard Preview**
   - Full-width dashboard screenshot with device mockup effect
   - Showcases real-time monitoring, compliance scores, and event tracking

5. **Why Choose Katyar**
   - Performance metrics (latency, scale, concurrency)
   - Security features (LLM Guard integration)
   - Compliance frameworks supported
   - Developer experience highlights

6. **Call to Action**
   - Strong CTA: "Ready to govern your AI agents?"
   - Dual CTAs: "Get Started" and "View on GitHub"

7. **Footer**
   - Product links
   - Resources (Documentation, GitHub)
   - Contact information

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Color Palette

- **Background**: #000000 (Pure Black)
- **Foreground**: #FFFFFF (White)
- **Primary Gradient**: Indigo (#4F46E5) to Purple (#9333EA)
- **Accent Colors**: 
  - Blue: #3B82F6
  - Purple: #A855F7
  - Green: #10B981
  - Yellow: #F59E0B
  - Pink: #EC4899

## 📊 SEO Configuration

The landing page includes:

- **Title**: "Katyar - AI Agent Governance Platform | Security, Compliance & Human Oversight"
- **Description**: Optimized for search engines and social sharing
- **Keywords**: AI agent governance, AI security, AI compliance, human-in-the-loop, EU AI Act, NIST AI RMF
- **OpenGraph**: Configured for Facebook, LinkedIn
- **Twitter Cards**: Large image cards for Twitter/X sharing
- **Canonical URLs**: Proper canonical tags
- **Structured Data**: Semantic HTML5 elements

## 🖼️ Assets

- `/public/dashboard.png` - Dashboard preview screenshot (1200x800px)
- `/public/grid.svg` - Background grid pattern
- `/public/favicon.ico` - Katyar favicon

## 🚢 Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo
- **Docker**: Use provided Dockerfile
- **Any Node.js hosting**: Build and run with `npm start`

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

This landing page is derived from Katyar product documentation. To update content:

1. Review `/katyar-app/docs/` for latest product features
2. Update sections in `app/page.tsx`
3. Ensure all claims are backed by documentation
4. Test responsiveness on multiple devices

## 📧 Contact

For questions about Katyar: support@katyar.dev
