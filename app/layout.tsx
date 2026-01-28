import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Katyar — Enterprise AI Agent Governance & Security Platform",
  description: "Run a secure, compliant AI agent infrastructure. Enterprise governance platform with security guardrails, policy enforcement, and human oversight for production AI systems. Control what your AI agents can do before they do it.",
  keywords: [
    "AI agent governance",
    "AI security platform",
    "enterprise AI infrastructure",
    "AI compliance platform",
    "human-in-the-loop AI",
    "EU AI Act compliance",
    "NIST AI RMF",
    "AI policy enforcement",
    "LLM security guardrails",
    "AI agent monitoring",
    "production AI governance",
    "LangChain security",
    "CrewAI governance",
    "autonomous agent control"
  ],
  authors: [{ name: "Katyar", url: "https://katyar.dev" }],
  creator: "Katyar",
  publisher: "Katyar",
  metadataBase: new URL('https://katyar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://katyar.dev",
    title: "Katyar — Enterprise AI Agent Governance Platform",
    description: "Run a secure, compliant AI agent infrastructure. Enterprise governance platform for production AI systems with security guardrails and policy enforcement.",
    siteName: "Katyar",
    images: [
      {
        url: "/dashboard.png",
        width: 1400,
        height: 900,
        alt: "Katyar AI Agent Governance Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katyar — Enterprise AI Agent Governance Platform",
    description: "Run a secure, compliant AI agent infrastructure. Control what your AI agents can do before they do it.",
    images: ["/dashboard.png"],
    creator: "@katyar",
    site: "@katyar",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Business Software',
  other: {
    'application-name': 'Katyar',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Katyar',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
