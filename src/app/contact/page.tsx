"use client";

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Footer from '@/components/ui/footer';
import AnimatedHeader from '@/components/ui/animated-header';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.type) newErrors.type = 'Please select an option';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, type: value }));
        if (errors.type) {
            setErrors(prev => ({ ...prev, type: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormStatus('submitting');

        try {
            // In a real implementation, this would be an API call
            // await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // });

            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1000));

            setFormStatus('success');
            setFormData({ name: '', email: '', type: '', message: '' });

            // Reset form after 5 seconds
            setTimeout(() => {
                setFormStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
        }
    };

    return (
        <SiteLayout>
            <PageContainer padding="p-0" fullHeight={false} scrollable={false} className="min-h-screen">
                <div className="w-full">
                    {/* Hero Section */}
                    <AnimatedHeader
                        title="Join the Revolution"
                        subtitle="Interested in investing, partnering, or joining the team? Let's build the future of web creation together."
                    />

                    {/* Contact Form */}
                    <section className="py-20 px-4 bg-background">
                        <div className="container mx-auto">
                            <div className="max-w-5xl mx-auto">
                                <div className="grid md:grid-cols-5 gap-10 md:gap-16">
                                    {/* Info Column */}
                                    <ScrollReveal direction="right" className="md:col-span-2">
                                        <div className="bg-card p-8 rounded-lg border border-gray-800/20 h-full">
                                            <h2 className="text-2xl font-bold mb-6 regal-gradient-text">Get in Touch</h2>

                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                                                    <a href="mailto:marouane.amanar07@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                                        marouane.amanar07@gmail.com
                                                    </a>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-primary mb-1">Location</h3>
                                                    <p className="text-muted-foreground">
                                                        Worldwide team with hubs in Europe & North America
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-primary mb-1">Connect</h3>
                                                    <div className="flex gap-4 mt-2">
                                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                            <span className="sr-only">Twitter</span>
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                            <span className="sr-only">GitHub</span>
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                                            <span className="sr-only">LinkedIn</span>
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Form Column */}
                                    <ScrollReveal direction="left" className="md:col-span-3">
                                        <div className="bg-card p-8 rounded-lg border border-gray-800/20">
                                            {formStatus === 'success' ? (
                                                <Alert className="bg-green-500/10 border-green-500/20 text-green-400 mb-6">
                                                    <CheckCircle2 className="h-5 w-5" />
                                                    <AlertTitle>Message sent successfully!</AlertTitle>
                                                    <AlertDescription>
                                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                                    </AlertDescription>
                                                </Alert>
                                            ) : formStatus === 'error' ? (
                                                <Alert className="bg-red-500/10 border-red-500/20 text-red-400 mb-6">
                                                    <AlertCircle className="h-5 w-5" />
                                                    <AlertTitle>Error sending message</AlertTitle>
                                                    <AlertDescription>
                                                        There was a problem submitting your message. Please try again.
                                                    </AlertDescription>
                                                </Alert>
                                            ) : null}

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div>
                                                    <Label htmlFor="name" className="text-muted-foreground">
                                                        Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your name"
                                                        className={`bg-background/20 border ${errors.name ? 'border-red-500' : 'border-gray-800'} mt-1`}
                                                    />
                                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                                </div>

                                                <div>
                                                    <Label htmlFor="email" className="text-muted-foreground">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your@email.com"
                                                        className={`bg-background/20 border ${errors.email ? 'border-red-500' : 'border-gray-800'} mt-1`}
                                                    />
                                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                                </div>

                                                <div>
                                                    <Label htmlFor="type" className="text-muted-foreground">
                                                        I am a
                                                    </Label>
                                                    <Select onValueChange={handleSelectChange} value={formData.type}>
                                                        <SelectTrigger
                                                            className={`w-full bg-background/20 border ${errors.type ? 'border-red-500' : 'border-gray-800'} mt-1`}
                                                        >
                                                            <SelectValue placeholder="Select an option" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="investor">Investor</SelectItem>
                                                            <SelectItem value="developer">Developer</SelectItem>
                                                            <SelectItem value="partner">Partner</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                                                </div>

                                                <div>
                                                    <Label htmlFor="message" className="text-muted-foreground">
                                                        Message
                                                    </Label>
                                                    <Textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="How can we help you?"
                                                        rows={5}
                                                        className={`bg-background/20 border ${errors.message ? 'border-red-500' : 'border-gray-800'} mt-1`}
                                                    />
                                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                                </div>

                                                <Button
                                                    type="submit"
                                                    disabled={formStatus === 'submitting'}
                                                    className="w-full regal-gradient-bg text-black font-bold hover:opacity-90"
                                                >
                                                    {formStatus === 'submitting' ? (
                                                        <span className="flex items-center gap-2">
                                                            <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Sending...
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-2">
                                                            <Send className="h-4 w-4" />
                                                            Send Message
                                                        </span>
                                                    )}
                                                </Button>
                                            </form>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Join Us Section */}
                    <section className="py-20 px-4 bg-background/80">
                        <div className="container mx-auto">
                            <div className="max-w-4xl mx-auto">
                                <ScrollReveal>
                                    <h2 className="text-3xl font-bold text-center mb-10">Why Join MonkeysLegion?</h2>
                                </ScrollReveal>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <ScrollReveal direction="up" delay={0.1}>
                                        <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors h-full">
                                            <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Cutting-Edge Tech</h3>
                                            <p className="text-muted-foreground">
                                                Work with state-of-the-art AI models and high-performance frameworks that push the boundaries of what's possible.
                                            </p>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={0.2}>
                                        <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors h-full">
                                            <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Global Impact</h3>
                                            <p className="text-muted-foreground">
                                                Help democratize web creation and empower businesses and creators worldwide with next-gen tools.
                                            </p>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={0.3}>
                                        <div className="bg-card p-6 rounded-lg border border-gray-800/20 hover:border-primary/30 transition-colors h-full">
                                            <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Agile Team</h3>
                                            <p className="text-muted-foreground">
                                                Join a passionate team of innovators with decades of combined experience in cloud, framework, and AI development.
                                            </p>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                <ScrollReveal delay={0.4}>
                                    <div className="mt-12 text-center">
                                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                                            We're always looking for talented developers, visionary designers, and AI specialists to join our mission.
                                        </p>
                                        <Button className="px-8 py-6 regal-gradient-bg text-black font-bold hover:opacity-90">
                                            Apply to Join the Team
                                        </Button>
                                    </div>
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
