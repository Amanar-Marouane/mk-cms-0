'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header';
import PageContainer from '@/components/layout/page-container';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { AnimatedButton } from '@/components/ui/animated-button';
import Footer from '@/components/ui/footer';

export default function ExamplePage() {
    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Animated Header */}
                    <AnimatedHeader
                        title="Stunning Animations"
                        subtitle="Interactive elements with smooth transitions and effects"
                    />

                    {/* Content with scroll animations */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold text-center mb-12">Feature Section</h2>
                            </ScrollReveal>

                            <div className="grid md:grid-cols-3 gap-8">
                                <ScrollReveal direction="left" delay={0.1}>
                                    <div className="bg-card p-6 rounded-lg border border-gray-800/20">
                                        <h3 className="text-xl font-bold mb-3">Feature 1</h3>
                                        <p className="text-muted-foreground">Description of this amazing feature</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="up" delay={0.2}>
                                    <div className="bg-card p-6 rounded-lg border border-gray-800/20">
                                        <h3 className="text-xl font-bold mb-3">Feature 2</h3>
                                        <p className="text-muted-foreground">Description of this amazing feature</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="right" delay={0.3}>
                                    <div className="bg-card p-6 rounded-lg border border-gray-800/20">
                                        <h3 className="text-xl font-bold mb-3">Feature 3</h3>
                                        <p className="text-muted-foreground">Description of this amazing feature</p>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="mt-12 text-center">
                                <ScrollReveal direction="up" delay={0.4}>
                                    <AnimatedButton
                                        className="ml-gradient-bg text-black font-bold hover:opacity-90"
                                        size="lg"
                                        glowOnHover={true}
                                        pulse={true}
                                    >
                                        Animated CTA Button
                                    </AnimatedButton>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
