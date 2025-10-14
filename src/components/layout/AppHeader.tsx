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
        { name: 'Business Model', href: '/business-model' }, // Added Business Model link
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    // Default left content with logo
    const defaultLeftContent = (
        <Link href="/" className="flex items-center">
            <Logo variant="monkeyscms" height={30} />
        </Link>
    );

    // Default right content - navigation links and CTA
    const defaultRightContent = (
        <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href ||
                        (link.href !== '/' && pathname?.startsWith(link.href));

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm ${isActive
                                ? 'text-primary font-medium regal-glow'
                                : 'text-muted-foreground hover:text-primary'
                                } transition-colors`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );

    return (
        <header className={`flex ${height} shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear border-b border-gray-800/20 bg-background/80 backdrop-blur-sm ${className}`}>
            <div className='flex items-center gap-2 px-4'>
                {showSidebar && <SidebarTrigger />}
                {showSeparator && showSidebar && <Separator orientation='vertical' className='mr-2 h-4' />}
                {leftContent || children || defaultLeftContent}
            </div>

            <div className='flex items-center gap-2 px-4'>
                {rightContent || defaultRightContent}
            </div>
        </header>
    );
}
