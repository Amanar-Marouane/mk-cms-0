"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Check, CheckCircle2, CircleDashed } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/ui/footer';
import AnimatedHeader from '@/components/ui/animated-header';

export default function BusinessModelPage() {
    // Pricing tiers for visualization
    const tiers = [
        {
            name: "Free",
            price: "€0",
            description: "Perfect for starting your web presence",
            features: [
                "Core CMS functionality",
                "Basic AI-generated content",
                "Community support",
                "Standard templates",
                "Manual deployment"
            ],
            highlighted: false
        },
        {
            name: "Pro",
            price: "€29",
            period: "/month",
            description: "For businesses that need more power",
            features: [
                "Everything in Free",
                "Advanced AI content generation",
                "Custom domain & SSL",
                "Premium templates",
                "Automatic deployment",
                "Priority support"
            ],
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For organizations with specific needs",
            features: [
                "Everything in Pro",
                "Custom development",
                "Dedicated hosting",
                "SLA guarantees",
                "24/7 support",
                "White-labeled solutions"
            ],
            highlighted: false
        }
    ];

    // Revenue streams
    const revenueStreams = [
        {
            title: "Specialized Hosting",
            description: "High-performance, AI-optimized hosting with perfect integration for MonkeysLegion sites.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            title: "Custom Solutions",
            description: "Tailored development services for businesses with specialized requirements.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "Premium AI Features",
            description: "Advanced AI capabilities for content generation, SEO optimization, and personalization.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Support & Maintenance",
            description: "Priority support, regular updates, and dedicated maintenance for business clients.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    // Enhanced feature comparison data
    const featureComparison = [
        {
            category: "Content Creation",
            features: [
                {
                    name: "AI-powered site generation",
                    free: "Basic",
                    pro: "Advanced",
                    enterprise: "Custom"
                },
                {
                    name: "Templates",
                    free: "Standard",
                    pro: "Premium",
                    enterprise: "Custom"
                },
                {
                    name: "Content optimization",
                    free: false,
                    pro: true,
                    enterprise: true
                }
            ]
        },
        {
            category: "Infrastructure",
            features: [
                {
                    name: "Hosting infrastructure",
                    free: false,
                    pro: true,
                    enterprise: true,
                    enterpriseHighlight: "Dedicated"
                },
                {
                    name: "Custom domains",
                    free: false,
                    pro: true,
                    enterprise: true
                },
                {
                    name: "SSL certificates",
                    free: false,
                    pro: true,
                    enterprise: true
                }
            ]
        },
        {
            category: "SEO & Marketing",
            features: [
                {
                    name: "SEO optimization",
                    free: "Basic",
                    pro: "Advanced",
                    enterprise: "Custom + Analytics"
                },
                {
                    name: "Social media integration",
                    free: true,
                    pro: true,
                    enterprise: true
                },
                {
                    name: "Analytics",
                    free: "Basic",
                    pro: "Advanced",
                    enterprise: "Enterprise"
                }
            ]
        },
        {
            category: "Support & Maintenance",
            features: [
                {
                    name: "Technical support",
                    free: "Community",
                    pro: "Priority",
                    enterprise: "Dedicated"
                },
                {
                    name: "Automated maintenance",
                    free: false,
                    pro: true,
                    enterprise: true
                },
                {
                    name: "White labeling",
                    free: false,
                    pro: false,
                    enterprise: true
                }
            ]
        }
    ];

    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="Our Business Model"
                        subtitle="We believe great technology should be accessible to everyone, with premium services for those who need more."
                    />

                    {/* Core Philosophy */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                                <div className="bg-card p-8 md:p-12 rounded-lg border border-gray-800/20">
                                    <h2 className="text-3xl font-bold mb-6">Open Core, Premium Services</h2>
                                    <p className="text-muted-foreground mb-6">
                                        MonkeysLegion follows a freemium business model that democratizes web creation while building sustainable revenue streams.
                                        Our core philosophy is simple: make the base technology accessible to everyone while providing premium features and services
                                        for businesses and professionals who need more power.
                                    </p>
                                    <p className="text-muted-foreground">
                                        This approach ensures the community can grow organically while we maintain the resources to continually improve and innovate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Revenue Streams */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Revenue Streams</h2>
                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {revenueStreams.map((stream, index) => (
                                    <div key={index} className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay={index * 100}>
                                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                            <div className="text-primary">
                                                {stream.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-4">{stream.title}</h3>
                                        <p className="text-muted-foreground">
                                            {stream.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pricing Model */}
                    <section className="py-20 px-4 bg-card">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Pricing Model</h2>
                            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                                Flexible options designed to scale with your needs
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {tiers.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg border flex flex-col justify-between items-start p-8 ${tier.highlighted
                                            ? 'bg-primary text-white border-primary md:scale-110'
                                            : 'bg-background/20 border-gray-800/20'
                                            } ${tier.highlighted ? 'ml-box-glow' : ''}`}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>{tier.name}</h3>
                                        <div className="flex items-end mb-4">
                                            <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : ''}`}>{tier.price}</span>
                                            {tier.period && <span className={`ml-1 ${tier.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>{tier.period}</span>}
                                        </div>
                                        <p className={`mb-6 ${tier.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>{tier.description}</p>
                                        <div className="space-y-3 mb-8 flex-grow">
                                            {tier.features.map((feature, i) => (
                                                <div key={i} className="flex items-center">
                                                    <div className={`mr-2 ${tier.highlighted ? 'text-white' : ''}`}>
                                                        <CheckCircle2 className="h-5 w-5" />
                                                    </div>
                                                    <span className={tier.highlighted ? 'text-white/90' : 'text-muted-foreground'}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button
                                            className={`mt-auto w-full ${tier.highlighted
                                                ? 'bg-white text-primary font-bold hover:bg-white/90'
                                                : 'bg-card border border-primary/30 text-primary hover:bg-primary/10'
                                                }`}
                                        >
                                            {tier.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Feature Comparison */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Feature Comparison</h2>
                            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                                Find the plan that's right for your needs
                            </p>

                            <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                                {/* Header Row */}
                                <div className="grid grid-cols-4 gap-4 mb-6 px-4">
                                    <div className="text-left font-medium text-muted-foreground">Features</div>
                                    <div className="text-center font-medium">Free</div>
                                    <div className="text-center font-medium text-primary">Pro</div>
                                    <div className="text-center font-medium text-primary">Enterprise</div>
                                </div>

                                {/* Feature Categories */}
                                {featureComparison.map((category, index) => (
                                    <div
                                        key={index}
                                        className="mb-6 bg-card rounded-lg overflow-hidden border border-gray-800/20"
                                    >
                                        {/* Category Header - Clickable to expand/collapse */}
                                        <div
                                            className="grid grid-cols-4 gap-4 p-4 cursor-pointer hover:bg-background/20 transition-colors"
                                            onClick={() => toggleCategory(category.category)}
                                        >
                                            <div className="text-left font-bold flex items-center gap-2">
                                                <span className={`transform transition-transform ${expandedCategory === category.category ? 'rotate-90' : ''}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                                {category.category}
                                            </div>
                                            <div className="col-span-3"></div>
                                        </div>

                                        {/* Category Features */}
                                        <div className={`transition-all overflow-hidden ${expandedCategory === category.category ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {category.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className={`grid grid-cols-4 gap-4 p-4 ${i === 0 ? 'border-t border-gray-800/50' : ''}`}
                                                >
                                                    <div className="text-left text-muted-foreground">{feature.name}</div>

                                                    {/* Free Tier */}
                                                    <div className="flex justify-center items-center">
                                                        {typeof feature.free === 'boolean' ? (
                                                            feature.free ? (
                                                                <div className="h-6 w-6 rounded-full bg-background/50 flex items-center justify-center">
                                                                    <Check className="h-4 w-4" />
                                                                </div>
                                                            ) : (
                                                                <div className="h-6 w-6 flex items-center justify-center">
                                                                    <CircleDashed className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <span className="text-muted-foreground text-sm">{feature.free}</span>
                                                        )}
                                                    </div>

                                                    {/* Pro Tier */}
                                                    <div className="flex justify-center items-center">
                                                        {typeof feature.pro === 'boolean' ? (
                                                            feature.pro ? (
                                                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                                    <Check className="h-4 w-4 text-primary" />
                                                                </div>
                                                            ) : (
                                                                <div className="h-6 w-6 flex items-center justify-center">
                                                                    <CircleDashed className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <span className="text-primary text-sm font-medium">{feature.pro}</span>
                                                        )}
                                                    </div>

                                                    {/* Enterprise Tier */}
                                                    <div className="flex justify-center items-center">
                                                        {typeof feature.enterprise === 'boolean' ? (
                                                            feature.enterprise ? (
                                                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                                    <Check className="h-4 w-4 text-primary" />
                                                                </div>
                                                            ) : (
                                                                <div className="h-6 w-6 flex items-center justify-center">
                                                                    <CircleDashed className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <span className="text-primary text-sm font-medium">{feature.enterprise}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Legend */}
                                <div className="flex items-center justify-center gap-8 mt-6">
                                    <div className="flex items-center gap-2">
                                        <div className="h-4 w-4 rounded-full bg-background/50 flex items-center justify-center">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">Included</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CircleDashed className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
                                        <span className="text-sm text-muted-foreground">Not included</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto text-center p-12 bg-card rounded-lg border border-gray-800/20" data-aos="zoom-in">
                                <h2 className="text-3xl font-bold mb-6 ml-gradient-text">
                                    Ready to revolutionize your web presence?
                                </h2>
                                <p className="text-xl text-muted-foreground mb-8">
                                    Get started for free, upgrade when you're ready, or talk to us about enterprise solutions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/investors" passHref>
                                        <Button className="px-8 py-6 bg-transparent border-2 border-primary text-primary hover:bg-primary/10">
                                            For Investors
                                        </Button>
                                    </Link>
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
