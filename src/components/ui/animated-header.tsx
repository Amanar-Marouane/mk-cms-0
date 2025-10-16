'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

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
    const containerRef = useRef<HTMLDivElement>(null);

    // Advanced animation for wave effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full width/height and handle resize
        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * devicePixelRatio;
            canvas.height = rect.height * devicePixelRatio;

            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Animation variables - Orange theme
        const waves = [
            {
                color: 'rgba(234, 138, 10, 0.05)', // Orange
                amplitude: 25,
                frequency: 0.02,
                speed: 0.05,
                phase: 0,
                points: 5,
                blur: 30
            },
            {
                color: 'rgba(234, 95, 21, 0.03)', // Orange Darker
                amplitude: 20,
                frequency: 0.03,
                speed: 0.03,
                phase: 2,
                points: 6,
                blur: 20
            },
            {
                color: 'rgba(234, 138, 10, 0.03)', // Orange lighter
                amplitude: 35,
                frequency: 0.01,
                speed: 0.02,
                phase: 4,
                points: 4,
                blur: 15
            },
        ];

        // Create multiple points on the wave for more natural movement
        const createWavePoints = (wave: any, width: number, height: number) => {
            const points = [];
            const count = wave.points * 3;

            for (let i = 0; i <= count; i++) {
                const x = (width / count) * i;
                const y = Math.sin(i * wave.frequency + wave.phase) * wave.amplitude + (height / 2);
                points.push({ x, y });
            }

            return points;
        };

        // Draw a smooth curve through points
        const drawCurve = (points: { x: number, y: number }[], ctx: CanvasRenderingContext2D) => {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(points[0].x, points[0].y);

            for (let i = 0; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }

            const lastPoint = points[points.length - 1];
            ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, lastPoint.x, lastPoint.y);
            ctx.lineTo(canvas.width, 0);
            ctx.lineTo(0, 0);
            ctx.closePath();
        };

        // Animation function
        const animate = () => {
            if (!canvas || !ctx) return;

            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            waves.forEach(wave => {
                // Update wave phase
                wave.phase += wave.speed;
                if (wave.phase > Math.PI * 2) {
                    wave.phase = 0;
                }

                // Create points for this frame
                const points = createWavePoints(wave, rect.width, rect.height);

                // Draw wave with gradient and blur
                ctx.save();

                // Create gradient
                const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
                gradient.addColorStop(0, wave.color);
                gradient.addColorStop(0.5, wave.color.replace(/[\d.]+\)$/g, '0.07)'));
                gradient.addColorStop(1, wave.color);

                // Apply blur effect
                ctx.filter = `blur(${wave.blur}px)`;
                ctx.fillStyle = gradient;

                drawCurve(points, ctx);
                ctx.fill();
                ctx.restore();
            });
        };

        // Use requestAnimationFrame for better performance
        let animationId: number;
        const runAnimation = () => {
            animate();
            animationId = requestAnimationFrame(runAnimation);
        };

        runAnimation();

        // Add mouse movement effect
        if (containerRef.current) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = containerRef.current!.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;

                waves.forEach((wave, index) => {
                    // Adjust amplitude based on mouse position
                    const targetAmplitude = wave.amplitude + (x * 10 - 5) + (index * 2);
                    const targetFrequency = wave.frequency + ((y * 0.01) - 0.005);

                    // Simple easing
                    wave.amplitude += (targetAmplitude - wave.amplitude) * 0.1;
                    wave.frequency += (targetFrequency - wave.frequency) * 0.1;
                });
            };

            containerRef.current.addEventListener('mousemove', handleMouseMove);

            return () => {
                if (containerRef.current) {
                    containerRef.current.removeEventListener('mousemove', handleMouseMove);
                }
                cancelAnimationFrame(animationId);
                window.removeEventListener('resize', resizeCanvas);
            };
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const textAlignment = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
    }[align];

    // Properly typed Framer Motion variants
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const subtitleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Generate particle data - Orange particles
    const particles = Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        initialX: `${Math.random() * 100}%`,
        initialY: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
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
        duration: 20 + Math.random() * 10
    }));

    return (
        <section
            ref={containerRef}
            className={`relative overflow-hidden ${height} ${className}`}
        >
            {/* Canvas for wave animation */}
            {/* <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
            /> */}

            {/* Animated dots in the background - Orange theme */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 rounded-full bg-primary/20"
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
                        initial="hidden"
                        animate="visible"
                        variants={titleVariants}
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            variants={subtitleVariants}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
