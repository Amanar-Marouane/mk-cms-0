'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
    children: React.ReactNode;
}

export function AOSProvider({ children }: AOSProviderProps) {
    useEffect(() => {
        // Initialize AOS with custom defaults that match our theme
        AOS.init({
            // Only animate elements once
            once: true,

            // Disable on mobile for better performance
            disable: window.innerWidth < 768 ? true : false,

            // Animation duration
            duration: 800,

            // Easing for animations
            easing: 'ease-out-cubic',

            // Delay in ms
            delay: 0,

            // Anchor placement
            anchorPlacement: 'top-bottom',

            // Our theme settings
            mirror: false,
            offset: 120
        });

        // Handle window resize
        const handleResize = () => {
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{children}</>;
}
