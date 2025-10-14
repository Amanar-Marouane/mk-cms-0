'use client';

import React, { useState } from 'react';
import { Button } from './button';
import { motion } from 'framer-motion';
import { ButtonProps } from './button';

interface AnimatedButtonProps extends ButtonProps {
    glowOnHover?: boolean;
    pulse?: boolean;
}

export function AnimatedButton({
    children,
    className,
    variant,
    size,
    glowOnHover = true,
    pulse = false,
    ...props
}: AnimatedButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    // For gradient buttons, add a glow effect
    const isGradient = className?.includes('regal-gradient-bg') || false;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            whileHover={{
                scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
            animate={pulse ? {
                scale: [1, 1.02, 1],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            } : {}}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Glow effect for gradient buttons */}
            {isGradient && glowOnHover && (
                <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-green-400 blur-lg"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: isHovered ? 0.6 : 0,
                        scale: isHovered ? 1.1 : 1,
                        transition: { duration: 0.3 }
                    }}
                />
            )}

            <Button
                className={className}
                variant={variant}
                size={size}
                {...props}
            >
                {children}
            </Button>
        </motion.div>
    );
}
