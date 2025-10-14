'use client';

import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Rocket, Sparkles } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';

export default function HowItWorks() {
    // Example site types that can be generated
    const exampleSites = [
        {
            title: 'Static Portfolio Website',
            description: 'Professional portfolio sites with customizable sections, projects showcase, and contact forms.',
            icon: 'portfolio-icon.svg',
        },
        {
            title: 'Dynamic Landing Page with Blog',
            description: 'Conversion-optimized landing pages with integrated blog functionality for content marketing.',
            icon: 'landing-icon.svg',
        },
        {
            title: 'Ecommerce Template',
            description: 'Full-featured online stores with product catalogs, cart functionality, and payment processing.',
            icon: 'ecommerce-icon.svg',
        },
        {
            title: 'Multi-language Business Site',
            description: 'Corporate websites with multi-language support, team sections, and service offerings.',
            icon: 'business-icon.svg',
        },
    ];

    // Key features to highlight
    const keyFeatures = [
        {
            title: 'AI-powered Copy & Design',
            description: 'Our AI generates compelling copy and designs tailored to your brand and audience.',
            icon: <Sparkles className="h-8 w-8 text-primary" />,
        },
        {
            title: 'SEO Auto-tuning',
            description: 'Built-in optimization ensures your site ranks well on search engines from day one.',
            icon: <Monitor className="h-8 w-8 text-accent" />,
        },
        {
            title: 'Instant Deployment',
            description: 'Deploy to Monkeys Cloud or export to your preferred hosting with a single click.',
            icon: <Rocket className="h-8 w-8 text-primary" />,
        },
    ];

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="How MonkeysCMS Works"
                        subtitle="Generate, preview, and deploy websites in minutes with our AI-powered platform"
                    />

                    {/* 3-Step Process */}
                    <section className="py-24 px-4 bg-background">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-16">3 Simple Steps to Your New Website</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                {/* Step 1 */}
                                <div className="bg-card p-8 rounded-lg border border-gray-800/20 relative regal-box-glow hover:border-primary/30 transition-colors">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center text-background font-bold text-lg">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Describe Your Idea</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Tell our AI what you need. Describe your business, goals, and preferences.
                                    </p>
                                    <div className="aspect-video bg-background/50 rounded-lg border border-gray-800/30 flex items-center justify-center p-4 mt-6">
                                        <p className="text-muted-foreground text-sm">AI processes your requirements and generates the perfect site structure</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-card p-8 rounded-lg border border-gray-800/20 relative regal-box-glow hover:border-primary/30 transition-colors">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center text-background font-bold text-lg">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Preview Instantly</h3>
                                    <p className="text-muted-foreground mb-4">
                                        See your website come to life in real-time with full SEO and responsive design.
                                    </p>
                                    <div className="aspect-video bg-background/50 rounded-lg border border-gray-800/30 flex items-center justify-center p-4 mt-6">
                                        <p className="text-muted-foreground text-sm">Make adjustments and watch as the AI adapts in real-time</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-card p-8 rounded-lg border border-gray-800/20 relative regal-box-glow hover:border-primary/30 transition-colors">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center text-background font-bold text-lg">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Deploy Anywhere</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Deploy to Monkeys Cloud for instant hosting or export to your preferred platform.
                                    </p>
                                    <div className="aspect-video bg-background/50 rounded-lg border border-gray-800/30 flex items-center justify-center p-4 mt-6">
                                        <p className="text-muted-foreground text-sm">One-click deployment with all optimizations included</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Sites */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6">Build Any Type of Website</h2>
                            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
                                Our AI can generate a wide variety of websites tailored to your specific needs
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {exampleSites.map((site, index) => (
                                    <div key={index} className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-cyan-400/30 transition-colors">
                                        <div className="h-12 w-12 bg-background/50 rounded-full mb-4 flex items-center justify-center">
                                            <span className="text-xl regal-gradient-text font-bold">{site.title.charAt(0)}</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">{site.title}</h3>
                                        <p className="text-sm text-muted-foreground">{site.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 text-center">
                                <Button size="lg" className="regal-gradient-bg hover:opacity-90 text-white">
                                    Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="py-20 px-4 bg-card">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
                            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
                                What makes MonkeysCMS stand out from traditional website builders
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {keyFeatures.map((feature, index) => (
                                    <div key={index} className="bg-background/20 p-6 rounded-lg border border-gray-800/20">
                                        <div className="mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 regal-gradient-text">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 px-4 bg-background">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                Join the future of web development with MonkeysCMS's AI-powered platform
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Button size="lg" variant="outline" className="regal-gradient-border">
                                    See the Demo
                                </Button>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
