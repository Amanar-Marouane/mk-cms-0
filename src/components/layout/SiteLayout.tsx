import React from 'react';
import AppHeader from './AppHeader';
import PageTransition from '../ui/page-transition';
import { AOSProvider } from '../ui/aos-provider';

interface SiteLayoutProps {
    children: React.ReactNode;
    fullHeight?: boolean;
}

export default function SiteLayout({ children, fullHeight = true }: SiteLayoutProps) {
    return (
        <AOSProvider>
            <div className={`flex flex-col ${fullHeight ? 'min-h-screen' : ''} bg-background antialiased`}>
                <AppHeader showSidebar={false} showSeparator={false} />
                <main className="flex-grow w-full">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>
            </div>
        </AOSProvider>
    );
}
