'use client';

import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/ui/footer';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';
import AIDemoPreview from '@/components/demo/AIDemoPreview';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, Lightbulb, Sparkles } from 'lucide-react';

export default function DemoPage() {
    // Example prompts for inspiration
    const examplePrompts = [
        "Restaurant landing page with online booking",
        "Portfolio for photographer with gallery",
        "Ecommerce for fashion store with cart",
        "Agency homepage with contact form",
        "Blog with featured articles section",
    ];

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="Experience AI-Powered Website Generation"
                        subtitle="See how MonkeysCMS creates beautiful, functional websites in seconds"
                    />

                    {/* Demo Section */}
                    <section className="py-16 px-4 bg-background">
                        <div className="container mx-auto">
                            <div className="grid md:grid-cols-5 gap-8">
                                {/* Left Column - Demo Preview */}
                                <div className="md:col-span-3 regal-box-glow rounded-lg overflow-hidden">
                                    <AIDemoPreview />
                                </div>

                                {/* Right Column - Info */}
                                <div className="md:col-span-2 space-y-8">
                                    {/* How It Works */}
                                    <div className="bg-card p-6 rounded-lg border border-gray-800/20">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Info className="h-5 w-5 text-primary" />
                                            <h3 className="text-lg font-bold">How It Works</h3>
                                        </div>

                                        <div className="space-y-4 text-sm">
                                            <p className="text-muted-foreground">
                                                This demo shows how MonkeysCMS uses AI to generate complete websites from simple text descriptions.
                                            </p>

                                            <div className="pl-4 border-l-2 border-primary/20">
                                                <p className="text-muted-foreground italic">
                                                    In the full version, you can customize every aspect of the generated site, connect your domain, and deploy instantly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Example Prompts */}
                                    <div className="bg-card p-6 rounded-lg border border-gray-800/20">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Lightbulb className="h-5 w-5 text-primary" />
                                            <h3 className="text-lg font-bold">Example Prompts</h3>
                                        </div>

                                        <div className="space-y-2">
                                            {examplePrompts.map((prompt, index) => (
                                                <div
                                                    key={index}
                                                    className="text-sm p-2 bg-background/50 rounded-md border border-gray-800/10 text-muted-foreground hover:bg-background/80 hover:text-foreground cursor-pointer transition-colors"
                                                >
                                                    {prompt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Highlight */}
                    <section className="py-16 px-4 bg-background/60">
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-2xl font-bold text-center mb-12 regal-gradient-text">Key Features</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:regal-box-glow transition-all duration-300">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Sparkles className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">AI-Driven Content</h3>
                                    <p className="text-sm text-muted-foreground">
                                        AI generates SEO-optimized copy tailored to your brand and industry
                                    </p>
                                </div>

                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:regal-box-glow transition-all duration-300">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Responsive Design</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Every site is automatically optimized for all devices and screen sizes
                                    </p>
                                </div>

                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:regal-box-glow transition-all duration-300">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Instant Deployment</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Deploy to Monkeys Cloud or export to your preferred hosting with one click
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
