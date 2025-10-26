'use client';

import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, CheckCircle2, Clock } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';

export default function Investors() {
    const investorPoints = [
        {
            title: 'Foundation Already Built',
            description: 'We\'ve already developed the core technologies: Monkeys Framework, Monkeys Cloud, and Monkeys Mail.',
            icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
        },
        {
            title: 'AI & Infrastructure Covered',
            description: 'Our technology stack is complete with no additional compute costs needed for scaling.',
            icon: <BarChart2 className="h-8 w-8 text-accent" />,
        },
        {
            title: 'Go-to-Market in 6 Months',
            description: 'Funding is primarily needed for the development team and marketing efforts.',
            icon: <Clock className="h-8 w-8 text-primary" />,
        },
    ];

    const marketStats = [
        { value: '$15B+', label: 'CMS Market Size' },
        { value: '210M+', label: 'Websites Use a CMS' },
        { value: '60%', label: 'Websites Powered by CMS' },
        { value: '64%', label: 'Market Share to Capture' },
    ];

    // Open the PDF directly from the public folder
    const openInvestorDeck = () => {
        window.open('/MonkeysLegion AI-Powered CMS_ Investment Opportunity.pptx - MonkeysLegion AI-Powered CMS_ Investment Opportunity.pptx.pdf', '_blank');
    };

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="Invest in the Future of AI-Driven Web Creation"
                        subtitle="Join us in reshaping how websites are built, deployed, and optimized"
                    />

                    {/* Market Opportunity */}
                    <section className="py-16 px-4 bg-background">
                        <div className="container mx-auto max-w-4xl">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">The CMS Market Opportunity</h2>
                                <p className="text-lg text-muted-foreground text-center mb-12" data-aos="fade-up" data-aos-delay="100">
                                    The CMS market is massive, yet still developer-dependent. MonkeysCMS redefines it with AI-driven automation and enterprise-grade infrastructure.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    {marketStats.map((stat, index) => (
                                        <div key={index} className="bg-card p-6 rounded-lg border border-border text-center ml-box-glow" data-aos="zoom-in" data-aos-delay={index * 100}>
                                            <p className="text-3xl md:text-4xl font-bold ml-gradient-text mb-2">{stat.value}</p>
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Investment Highlights */}
                    <section className="py-16 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Why Invest Now</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                {investorPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg border transition-colors ${index === 1
                                            ? 'bg-primary text-white p-10 md:scale-110 border-primary md:col-span-1'
                                            : 'bg-card text-foreground p-8 border-border hover:border-primary/30'
                                            }`}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="mb-4">
                                            {index === 1 ? (
                                                <BarChart2 className="h-8 w-8 text-white" />
                                            ) : (
                                                point.icon
                                            )}
                                        </div>
                                        <h3 className={`text-xl font-bold mb-3 ${index === 1 ? 'text-white' : ''}`}>
                                            {point.title}
                                        </h3>
                                        <p className={index === 1 ? 'text-white/90' : 'text-muted-foreground'}>
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Business Model */}
                    <section className="py-16 px-4 bg-card">
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Our Business Model</h2>
                            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
                                While the core framework and CMS are free for developers, our revenue comes from premium services
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-background/20 p-6 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="100">
                                    <h4 className="text-lg font-bold mb-3 ml-gradient-text">Specialized Hosting</h4>
                                    <p className="text-muted-foreground">Premium cloud infrastructure with enhanced security, scaling, and performance optimization.</p>
                                </div>

                                <div className="bg-background/20 p-6 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="200">
                                    <h4 className="text-lg font-bold mb-3 ml-gradient-text">Custom Solutions</h4>
                                    <p className="text-muted-foreground">Enterprise-grade development services for specialized business requirements and integrations.</p>
                                </div>

                                <div className="bg-background/20 p-6 rounded-lg border border-border hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="300">
                                    <h4 className="text-lg font-bold mb-3 ml-gradient-text">Pro AI Features</h4>
                                    <p className="text-muted-foreground">Advanced AI capabilities for content generation, SEO, and performance optimization in premium plans.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pitch Deck CTA */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto text-center max-w-3xl" data-aos="zoom-in">
                            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
                            <p className="text-muted-foreground mb-10">
                                Our detailed investor deck covers market analysis, competitive landscape, financial projections, and our go-to-market strategy.
                            </p>

                            <div className="flex justify-center mb-8">
                                <Button size="lg" onClick={openInvestorDeck} className="ml-gradient-bg hover:opacity-90 text-white">
                                    View Investor Deck <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                For direct inquiries or to schedule a meeting, please contact us at <a href="mailto:marouane.amanar07@gmail.com" className="text-primary hover:underline">marouane.amanar07@gmail.com</a>
                            </p>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
