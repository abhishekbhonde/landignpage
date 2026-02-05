import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { HowItWorks } from "@/components/landing/how-it-works";
import { RiskDashboard } from "@/components/landing/risk-dashboard";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { Pricing } from "@/components/landing/pricing";
import { Quotes } from "@/components/landing/quotes";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { ScrollProgress } from "@/components/landing/scroll-progress";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20 relative">
            <ScrollProgress />
            <Navbar />
            <Hero />
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <Comparison />
            <RiskDashboard />
            <Pricing />
            <Quotes />
            <CTA />
            <Footer />
        </div>
    );
}
