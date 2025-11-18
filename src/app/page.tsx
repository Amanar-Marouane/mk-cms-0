'use client';

import AIDemoPreview from '@/components/demo/AIDemoPreview';
import PageContainer from '@/components/layout/page-container';
import SiteLayout from '@/components/layout/SiteLayout';
import Footer from '@/components/ui/footer';
import { Logo } from '@/components/ui/logo';

export default function Page() {
  return (
    <SiteLayout>
      <PageContainer padding='p-0' fullHeight={false} scrollable={false} className="min-h-screen">
        <div className='w-full h-full'>
          {/* Hero Section */}
          <section className="ml-hero-bg min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 md:py-20">
            <div data-aos="fade-up" data-aos-delay="100" className="w-full">
              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-8 md:mb-12">
                {/* <div className="flex justify-center mb-6">
                  <Logo variant="monkeyscms" width={240} height={60} />
                </div> */}

                <div className="inline-block mb-4 px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-medium text-white">
                    Next-Generation Content Management System
                  </p>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight ml-gradient-text">
                  AI Builds. You Deploy. Instantly.
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  The next-gen CMS that generates and optimizes websites in seconds with full SEO and performance automation.
                </p>
              </div>
            </div>

            {/* Demo Preview - Better responsive spacing */}
            <div data-aos="fade-up" data-aos-delay="300" className="w-full px-4 mb-12 md:mb-20">
              <div className="max-w-6xl mx-auto">
                <AIDemoPreview />
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-12 md:py-20 bg-background/50">
            <div className="container mx-auto px-4">
              <div data-aos="fade-up">
                <h2 className="text-2xl font-bold text-center mb-10">Built on the Monkeys Ecosystem</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['monkeyslegion', 'monkeyscloud', 'monkeysmail'].map((variant, index) => (
                  <div
                    key={variant}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-card p-6 rounded-lg border border-border text-center hover:border-primary/30 transition-colors h-full flex flex-col">
                      <div className="flex justify-center items-center mb-4 flex-grow">
                        <Logo variant={variant as any} height={30} />
                      </div>
                      <p className="text-muted-foreground">
                        {index === 0 && "High-performance JS/PHP hybrid core"}
                        {index === 1 && "Cloud-ready infrastructure for instant deployments"}
                        {index === 2 && "Integrated email services for your applications"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </PageContainer>
    </SiteLayout>
  );
}
