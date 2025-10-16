import PageContainer from '@/components/layout/page-container';
import SiteLayout from '@/components/layout/SiteLayout';
import AnimatedHeader from '@/components/ui/animated-header'; // Import the new component
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/ui/footer';

export default function AboutPage() {
    const team = [
        {
            name: 'Jorge Peraza',
            role: 'Full-stack engineer & founder of MonkeysLegion',
            description: 'Creator of the Monkeys Framework (PHP framework) and visionary behind the MonkeysLegion ecosystem.',
            image: '/team/jorge.jpg', // Update with actual image path
        },
        {
            name: 'Marouane Amanar',
            role: 'Développeur Full Stack | Spécialiste PHP et JavaScript',
            description: 'Full-stack specialist driving the technical architecture and AI integration of MonkeysLegion CMS.',
            image: '/team/marouane.jpg', // Update with actual image path
        },
    ];

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Replace the static header with the animated header */}
                    <AnimatedHeader
                        title="Building the Future of Web Creation"
                        subtitle="We're developers who believe AI should empower creation, not replace creators."
                    />

                    {/* Rest of the page content remains the same */}
                    {/* Vision Section */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                                <div className="bg-card p-8 md:p-12 rounded-lg border border-gray-800/20">
                                    <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                                    <p className="text-muted-foreground mb-6">
                                        MonkeysLegion CMS represents the culmination of years of experience building robust web infrastructure.
                                        We've created the framework, the cloud, and the tools. Now we're bringing AI-powered automation to make
                                        web creation instant and accessible.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Our mission is simple: eliminate the barriers between idea and deployment. Whether you're a developer,
                                        entrepreneur, or agency, MonkeysLegion lets you focus on what matters while AI handles the heavy lifting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ecosystem Section */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">The MonkeysLegion Ecosystem</h2>
                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="text-2xl font-bold mb-4">Monkeys Framework</h3>
                                    <p className="text-muted-foreground mb-4">
                                        High-performance PHP/JS hybrid core powering modern web applications with enterprise-grade reliability.
                                    </p>
                                    <a href="https://monkeyslegion.com/" target="_blank" rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors">
                                        Learn more →
                                    </a>
                                </div>

                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="200">
                                    <h3 className="text-2xl font-bold mb-4">Monkeys Cloud</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Instant deployment infrastructure designed for speed and scalability, with AI-optimized hosting.
                                    </p>
                                    <a href="https://monkeys.cloud/" target="_blank" rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors">
                                        Learn more →
                                    </a>
                                </div>

                                <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="300">
                                    <h3 className="text-2xl font-bold mb-4">Monkeys Mail</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Integrated email solution for seamless communication and automation within your applications.
                                    </p>
                                    <a href="https://monkeysmail.com/" target="_blank" rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors">
                                        Learn more →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-20 px-4 bg-card">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Meet the Team</h2>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {team.map((member, index) => (
                                    <div
                                        key={member.name}
                                        className="bg-background/20 p-8 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 p-1 mb-6">
                                                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        width={128}
                                                        height={128}
                                                        className="object-contain"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                            <p className="text-primary mb-4 font-semibold">{member.role}</p>
                                            <p className="text-muted-foreground mb-4">{member.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Join Us CTA */}
                    <section className="container mx-auto px-4 py-20">
                        <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 ml-gradient-text">
                                Join the Revolution
                                We're looking for passionate developers, investors, and partners who want to shape the future of web creation.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="px-8 py-4 ml-gradient-bg text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="/investors"
                                    className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors"
                                >
                                    Investor Deck
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </PageContainer>
        </SiteLayout>
    );
}
