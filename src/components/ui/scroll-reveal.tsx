'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    once = true,
    threshold = 0.1
}: ScrollRevealProps) {
    const { ref, inView } = useInView({
        triggerOnce: once,
        threshold: threshold,
    });

    // Define direction offsets
    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = 40;
    if (direction === 'down') initialY = -40;
    if (direction === 'left') initialX = 40;
    if (direction === 'right') initialX = -40;

    // Properly typed variants
    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: initialX,
            y: initialY
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
