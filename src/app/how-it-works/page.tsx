'use client';

import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Rocket, Sparkles } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';
import Link from 'next/link';

export default function HowItWorks() {
    // Example site types that can be generated
    const exampleSites = [
        {
            title: 'Static Portfolio Website',
            description: 'Professional portfolio sites with customizable sections, projects showcase, and contact forms.',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#ea8a0a" strokeWidth="2" fill="none" />
                    <path d="M3 8 H21" stroke="#ea8a0a" strokeWidth="2" />
                    <circle cx="6" cy="5.5" r="0.5" fill="#15225A" />
                    <circle cx="8" cy="5.5" r="0.5" fill="#15225A" />
                    <circle cx="10" cy="5.5" r="0.5" fill="#15225A" />
                    <rect x="6" y="11" width="5" height="5" rx="1" fill="#ea8a0a" opacity="0.3" />
                    <line x1="13" y1="12" x2="18" y2="12" stroke="#15225A" strokeWidth="1.5" />
                    <line x1="13" y1="15" x2="18" y2="15" stroke="#15225A" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: 'Dynamic Landing Page with Blog',
            description: 'Conversion-optimized landing pages with integrated blog functionality for content marketing.',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6 L20 6 L20 18 L4 18 Z" stroke="#ea8a0a" strokeWidth="2" fill="none" />
                    <rect x="6" y="9" width="12" height="2" fill="#15225A" opacity="0.5" />
                    <rect x="6" y="12" width="12" height="1" fill="#ea8a0a" opacity="0.3" />
                    <rect x="6" y="14" width="8" height="1" fill="#ea8a0a" opacity="0.3" />
                    <path d="M12 2 L16 6 L12 6 Z" fill="#ea8a0a" />
                    <circle cx="19" cy="19" r="3" fill="#15225A" />
                    <path d="M19 17.5 L19 20.5 M17.5 19 L20.5 19" stroke="white" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: 'Ecommerce Template',
            description: 'Full-featured online stores with product catalogs, cart functionality, and payment processing.',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3 L5 3 L7 13 L21 13 L19 7 L7 7" stroke="#ea8a0a" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <circle cx="8" cy="18" r="2" fill="#15225A" />
                    <circle cx="18" cy="18" r="2" fill="#15225A" />
                    <rect x="9" y="8" width="3" height="3" fill="#ea8a0a" opacity="0.3" />
                    <rect x="13" y="8" width="3" height="3" fill="#ea8a0a" opacity="0.3" />
                    <path d="M17 5 L19 7 L17 9" stroke="#ea8a0a" strokeWidth="1.5" fill="none" />
                </svg>
            ),
        },
        {
            title: 'Multi-language Business Site',
            description: 'Corporate websites with multi-language support, team sections, and service offerings.',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#ea8a0a" strokeWidth="2" fill="none" />
                    <path d="M3 12 L21 12" stroke="#ea8a0a" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#15225A" strokeWidth="1.5" fill="none" />
                    <text x="8" y="9" fontSize="6" fill="#15225A" fontWeight="bold">A</text>
                    <text x="14" y="16" fontSize="5" fill="#ea8a0a" fontWeight="bold">文</text>
                    <circle cx="18" cy="6" r="2" fill="#ea8a0a" opacity="0.5" />
                </svg>
            ),
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
                            <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">3 Simple Steps to Your New Website</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                {/* Step 1 */}
                                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors relative" data-aos="fade-right" data-aos-delay="100">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 ml-gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Describe Your Idea</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Tell our AI what you need. Describe your business, goals, and preferences.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors relative" data-aos="fade-up" data-aos-delay="200">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 ml-gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Preview Instantly</h3>
                                    <p className="text-muted-foreground mb-4">
                                        See your website come to life in real-time with full SEO and responsive design.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors relative" data-aos="fade-left" data-aos-delay="300">
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 ml-gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold mt-6 mb-4">Deploy Anywhere</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Deploy to Monkeys Cloud for instant hosting or export to your preferred platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Example Sites */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6 ml-gradient-text" data-aos="fade-up">Build Any Type of Website</h2>
                            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
                                Our AI can generate a wide variety of websites tailored to your specific needs
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {exampleSites.map((site, index) => (
                                    <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <div className="h-12 w-12 bg-primary/10 rounded-full mb-4 flex items-center justify-center">
                                            {site.icon}
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">{site.title}</h3>
                                        <p className="text-sm text-muted-foreground">{site.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
                                <Button size="lg" className="ml-gradient-bg hover:opacity-90 text-white">
                                    Try the Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="py-20 px-4 bg-card">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Key Features</h2>
                            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
                                What makes MonkeysCMS stand out from traditional website builders
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {keyFeatures.map((feature, index) => (
                                    <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay={index * 100}>
                                        <div className="mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 ml-gradient-text">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 px-4 bg-background">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Build Your Website?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
                                Join the future of web development with MonkeysCMS's AI-powered platform
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4" data-aos="zoom-in" data-aos-delay="200">
                                <Link href={"/demo"}>
                                    <Button size="lg" variant="outline" className="border-primary text-primary">
                                        See the Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
