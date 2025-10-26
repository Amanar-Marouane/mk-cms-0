'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
    height?: string;
}

export default function AnimatedHeader({
    title,
    subtitle,
    align = 'center',
    className = '',
    height = 'py-20',
}: AnimatedHeaderProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationIdRef = useRef<number | null>(null);
    const isInitializedRef = useRef(false);

    // Initialize simple wave animation only on client side
    useEffect(() => {
        if (isInitializedRef.current) return;
        isInitializedRef.current = true;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * devicePixelRatio;
            canvas.height = rect.height * devicePixelRatio;

            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('resize', handleResize);
        resizeCanvas();

        // Simple wave animation variables
        let time = 0;
        const waveAmplitude = 15;
        const waveFrequency = 0.015;
        const waveSpeed = 0.05;

        // Animation loop
        const animate = () => {
            if (!canvas || !ctx) return;

            const width = canvas.width;
            const height = canvas.height;
            const midY = height / 2;

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Draw wave
            ctx.beginPath();
            ctx.moveTo(0, midY);

            for (let x = 0; x <= width; x += 5) {
                const y = Math.sin(x * waveFrequency + time) * waveAmplitude + midY;
                ctx.lineTo(x, y);
            }

            // Fill wave area
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();

            // Create gradient
            const gradient = ctx.createLinearGradient(0, midY - waveAmplitude, 0, height);
            gradient.addColorStop(0, 'rgba(234, 138, 10, 0.1)');
            gradient.addColorStop(0.5, 'rgba(234, 138, 10, 0.05)');
            gradient.addColorStop(1, 'rgba(234, 138, 10, 0)');

            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw wave stroke
            ctx.beginPath();
            ctx.moveTo(0, midY);

            for (let x = 0; x <= width; x += 5) {
                const y = Math.sin(x * waveFrequency + time) * waveAmplitude + midY;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = 'rgba(234, 138, 10, 0.2)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Update time for animation
            time += waveSpeed;

            animationIdRef.current = requestAnimationFrame(animate);
        };

        animationIdRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textAlignment = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
    }[align];

    // Generate particle data - Orange particles
    const particles = Array.from({ length: 15 }).map((_, index) => ({
        id: index,
        initialX: `${Math.random() * 100}%`,
        initialY: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.3 + 0.1,
        positions: {
            x: [
                `${(Math.random() * 80) + 10}%`,
                `${(Math.random() * 80) + 10}%`,
                `${(Math.random() * 80) + 10}%`
            ],
            y: [
                `${(Math.random() * 80) + 10}%`,
                `${(Math.random() * 80) + 10}%`,
                `${(Math.random() * 80) + 10}%`
            ],
        },
        duration: 25 + Math.random() * 15
    }));

    return (
        <section
            className={`relative overflow-hidden ${height} ${className}`}
        >
            {/* Canvas for wave animation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
            />

            {/* Animated dots in the background */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 rounded-full bg-primary/15"
                        initial={{
                            x: particle.initialX,
                            y: particle.initialY,
                            opacity: particle.opacity
                        }}
                        animate={{
                            x: particle.positions.x,
                            y: particle.positions.y,
                        }}
                        transition={{
                            duration: particle.duration,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10" data-aos="fade-bottom">
                <div className={`max-w-4xl mx-auto ${textAlignment}`}>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold ml-gradient-text mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
