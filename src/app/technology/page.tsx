'use client';

import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Layers, Lock, Mail, Puzzle, Rocket, Zap } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function Technology() {
    // Core framework features
    const frameworkFeatures = [
        {
            title: 'High Performance',
            description: 'Our JS/PHP hybrid core delivers exceptional speed and reliability for all types of websites.',
            icon: <Zap className="h-8 w-8 text-primary" />,
        },
        {
            title: 'API-First',
            description: 'Built with a modern API-first approach, allowing seamless integration with any service or platform.',
            icon: <Code className="h-8 w-8 text-accent" />,
        },
        {
            title: 'Modular Architecture',
            description: 'Extensible component-based design makes it easy to add or modify functionality as needed.',
            icon: <Puzzle className="h-8 w-8 text-primary" />,
        },
        {
            title: 'Developer & No-Code Modes',
            description: 'Switch between advanced developer tools and intuitive no-code interface based on your needs.',
            icon: <Layers className="h-8 w-8 text-accent" />,
        },
        {
            title: 'Enterprise Security',
            description: 'Built-in security features protect your data and meet industry compliance standards.',
            icon: <Lock className="h-8 w-8 text-primary" />,
        },
        {
            title: 'Advanced Data Management',
            description: 'Flexible data storage options with powerful querying capabilities for complex applications.',
            icon: <Database className="h-8 w-8 text-accent" />,
        },
    ];

    // AI integration capabilities
    const aiCapabilities = [
        {
            title: 'Content Generation',
            description: 'AI automatically generates engaging copy tailored to your brand voice and industry.',
        },
        {
            title: 'Design & Layout',
            description: 'Smart algorithms create visually appealing layouts optimized for any device.',
        },
        {
            title: 'SEO Optimization',
            description: 'Built-in SEO tools automatically optimize your content for search engines.',
        },
        {
            title: 'Performance Tuning',
            description: 'AI analyzes and enhances page performance for faster loading times.',
        },
        {
            title: 'User Experience',
            description: 'Intelligent suggestions improve site navigation and conversion rates.',
        },
        {
            title: 'Multilingual Support',
            description: 'Automatic translation and localization for global audience reach.',
        },
    ];

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="The Technology Behind MonkeysCMS"
                        subtitle="Built on a foundation of cutting-edge frameworks, cloud infrastructure, and AI integration"
                    />

                    {/* Framework Section */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                                <ScrollReveal direction="right" className="flex-1">
                                    <h2 className="text-3xl font-bold mb-6">Monkeys Framework</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Our custom high-performance JS/PHP hybrid core powers everything we build. Designed for modern web applications, the Monkeys Framework combines the best of both worlds: JavaScript's versatility with PHP's robust server-side capabilities.
                                    </p>
                                    <p className="text-muted-foreground">
                                        This proprietary technology stack enables us to create websites that are not just beautiful, but blazingly fast, secure, and scalable from day one.
                                    </p>
                                </ScrollReveal>

                                <ScrollReveal direction="left" className="flex-1 flex justify-center">
                                    <div className="bg-card p-8 rounded-lg border border-gray-800/20 regal-box-glow">
                                        <Logo variant="monkeyslegion" height={60} />
                                    </div>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal>
                                <h3 className="text-2xl font-bold text-center mb-12">Framework Features</h3>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {frameworkFeatures.map((feature, index) => (
                                    <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                                        <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-cyan-400/30 transition-colors h-full">
                                            <div className="mb-4">
                                                {feature.icon}
                                            </div>
                                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Cloud Integration */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <ScrollReveal direction="left" className="flex-1">
                                    <h2 className="text-3xl font-bold mb-6">Cloud Integration</h2>
                                    <p className="text-muted-foreground mb-6">
                                        MonkeysCMS integrates seamlessly with Monkeys Cloud for instant deployment, giving you enterprise-grade hosting without the complexity. Benefit from:
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Global CDN with edge caching for lightning-fast page loads</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Automatic scaling to handle any traffic spikes</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Integrated security features including DDoS protection</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">One-click deployment directly from the CMS</p>
                                        </li>
                                    </ul>
                                </ScrollReveal>

                                <ScrollReveal direction="right" className="flex-1 flex justify-center">
                                    <div className="bg-card p-8 rounded-lg border border-gray-800/20 regal-box-glow">
                                        <Logo variant="monkeyscloud" height={50} />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* Mail Integration */}
                    <section className="py-20 px-4 bg-card">
                        <div className="container mx-auto">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <ScrollReveal direction="right" className="flex-1">
                                    <h2 className="text-3xl font-bold mb-6">Integrated Email Services</h2>
                                    <p className="text-muted-foreground mb-6">
                                        MonkeysMailer provides enterprise-grade email capabilities directly integrated with your applications:
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Transactional email API for notifications, confirmations, and alerts</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Newsletter and campaign management with analytics</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">Automated email workflows and user journey sequences</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background text-xs">✓</div>
                                            <p className="text-muted-foreground">High deliverability with advanced spam protection</p>
                                        </li>
                                    </ul>
                                </ScrollReveal>

                                <ScrollReveal direction="left" className="flex-1 flex justify-center">
                                    <div className="bg-background/20 p-8 rounded-lg border border-gray-800/20 regal-box-glow">
                                        <Logo variant="monkeysmail" height={50} />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* AI Integration - Use Grid instead of columns for better responsiveness */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold text-center mb-6">AI Integration</h2>
                                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
                                    Our AI models are integrated at every level of the content creation, structure, and SEO optimization process
                                </p>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiCapabilities.map((capability, index) => (
                                    <ScrollReveal key={index} delay={index * 0.1}>
                                        <div className="bg-card p-6 rounded-lg border border-gray-800/20 h-full">
                                            <h4 className="text-xl font-bold mb-3 regal-gradient-text">{capability.title}</h4>
                                            <p className="text-muted-foreground">{capability.description}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <ScrollReveal delay={0.4}>
                                <div className="mt-12 text-center">
                                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                        While the core framework and basic features are free, advanced AI capabilities are available in our Pro plans
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* Future Development */}
                    <section className="py-16 px-4 bg-background">
                        <div className="container mx-auto text-center">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold mb-6">On Our Roadmap</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                    We're constantly improving our technology stack with these upcoming features:
                                </p>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="flex flex-wrap justify-center gap-4 mb-12">
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">Plugin System</span>
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">Custom AI Model Fine-tuning</span>
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">Advanced Analytics</span>
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">E-commerce Integration</span>
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">Custom Code Injection</span>
                                    <span className="px-4 py-2 bg-card rounded-full text-sm border border-gray-800/20">Advanced User Management</span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <Button size="lg" variant="outline" className="regal-gradient-border">
                                        See the Demo
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* Business Model Callout */}
                    <section className="py-16 px-4 bg-background/80">
                        <div className="container mx-auto max-w-4xl">
                            <ScrollReveal>
                                <div className="bg-card p-8 md:p-12 rounded-lg border border-gray-800/20">
                                    <h3 className="text-2xl font-bold mb-4 regal-gradient-text">Our Business Model</h3>
                                    <p className="text-muted-foreground mb-6">
                                        While the MonkeysCMS framework and basic usage are completely free and open for development, we offer premium vertical services built on our technology:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-background/20 p-5 rounded-lg">
                                            <h4 className="font-bold mb-2">Specialized Hosting</h4>
                                            <p className="text-sm text-muted-foreground">Enterprise-grade cloud hosting with advanced security and scaling features</p>
                                        </div>
                                        <div className="bg-background/20 p-5 rounded-lg">
                                            <h4 className="font-bold mb-2">Custom Solutions</h4>
                                            <p className="text-sm text-muted-foreground">Bespoke development services for specialized business requirements</p>
                                        </div>
                                        <div className="bg-background/20 p-5 rounded-lg">
                                            <h4 className="font-bold mb-2">Pro AI Features</h4>
                                            <p className="text-sm text-muted-foreground">Advanced AI capabilities in premium subscription plans</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
