"use client";

import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
import { Button } from '../ui/button';
import React from 'react';
import { Logo } from '../ui/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppHeaderProps {
    children?: React.ReactNode;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    showSidebar?: boolean;
    showSeparator?: boolean;
    className?: string;
    height?: string;
}

export default function AppHeader({
    children,
    leftContent,
    rightContent,
    showSidebar = true,
    showSeparator = true,
    className = "",
    height = "h-16"
}: AppHeaderProps) {
    const pathname = usePathname();

    // Navigation links for the site
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Technology', href: '/technology' },
        { name: 'For Investors', href: '/investors' },
        { name: 'Business Model', href: '/business-model' },
        { name: 'About', href: '/about' },
    ];

    // Default left content with logo
    const defaultLeftContent = (
        <Link href="/" className="flex items-center">
            <Logo variant="monkeyscms" height={30} />
        </Link>
    );

    // Default right content - centered navigation links and contact button on right
    const defaultRightContent = (
        <div className="flex items-center justify-between w-full">
            {/* Centered Nav Links with border separators */}
            <nav className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center gap-0 px-6 py-2 bg-card/50 rounded-full border border-border/50 backdrop-blur-sm">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href ||
                            (link.href !== '/' && pathname?.startsWith(link.href));

                        return (
                            <React.Fragment key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`px-3 py-1 text-sm transition-all relative ${isActive
                                        ? 'text-primary font-medium'
                                        : 'text-muted-foreground hover:text-primary'
                                        } ${isActive ? 'border-l border-r border-primary/30' : ''}`}
                                >
                                    {link.name}
                                </Link>
                                {index < navLinks.length - 1 && (
                                    <div className="w-px h-4 bg-border/30" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </nav>

            {/* Contact Button - Top Right */}
            <Link href="/contact" className="hidden md:block ml-auto">
                <Button
                    size="sm"
                    className="ml-gradient-bg text-white hover:opacity-90"
                >
                    Contact
                </Button>
            </Link>
        </div>
    );

    return (
        <header className={`flex ${height} shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear border-b border-border bg-background/80 backdrop-blur-sm ${className} fixed top-0 left-0 right-0 z-50`}>
            <div className='container mx-auto px-4 md:px-6 flex items-center justify-between w-full'>
                <div className='flex items-center gap-2'>
                    {showSidebar && <SidebarTrigger />}
                    {showSeparator && showSidebar && <Separator orientation='vertical' className='mr-2 h-4' />}
                    {leftContent || children || defaultLeftContent}
                </div>

                <div className='flex-1 flex items-center'>
                    {rightContent || defaultRightContent}
                </div>
            </div>
        </header>
    );
}
