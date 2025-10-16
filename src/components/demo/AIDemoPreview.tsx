'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, LayoutTemplate, Type, Image as ImageIcon, Code, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type GenerationStep = {
    name: string;
    icon: React.ReactNode;
    duration: number;
};

const DEMO_PROMPT = "Create a modern restaurant website with online booking, menu display, and contact information.";
const TYPE_SPEED = 30;

export default function AIDemoPreview() {
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentStep, setCurrentStep] = useState<number | null>(null);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [showFinalResult, setShowFinalResult] = useState(false);
    const [buildStage, setBuildStage] = useState(0); // 0-10 for more granular building animation
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const demoContainerRef = useRef<HTMLDivElement>(null);

    // Define generation steps
    const generationSteps: GenerationStep[] = [
        { name: "Analyzing Request", icon: <Sparkles className="h-4 w-4" />, duration: 1500 },
        { name: "Creating Structure", icon: <LayoutTemplate className="h-4 w-4" />, duration: 1800 },
        { name: "Generating Content", icon: <Type className="h-4 w-4" />, duration: 2000 },
        { name: "Adding Images", icon: <ImageIcon className="h-4 w-4" />, duration: 1500 },
        { name: "Styling & Design", icon: <Palette className="h-4 w-4" />, duration: 1700 },
        { name: "Optimizing Code", icon: <Code className="h-4 w-4" />, duration: 1400 },
    ];

    // Simulate typing effect
    const startTypingEffect = () => {
        setIsTyping(true);
        setInputValue('');
        setBuildStage(0);

        let i = 0;
        const typeNextChar = () => {
            if (i < DEMO_PROMPT.length) {
                setInputValue(prev => prev + DEMO_PROMPT.charAt(i));
                i++;
                typingTimeoutRef.current = setTimeout(typeNextChar, TYPE_SPEED);
            } else {
                setIsTyping(false);
                setTimeout(() => startGeneration(), 500);
            }
        };

        typingTimeoutRef.current = setTimeout(typeNextChar, 500);
    };

    // Start the generation process with more detailed build stages
    const startGeneration = () => {
        setIsGenerating(true);
        setCurrentStep(0);
        setCompletedSteps([]);
        setShowFinalResult(false);
        setBuildStage(0);

        // Process each step with delays, and add more detailed build stages
        const totalSteps = generationSteps.length;
        let totalDelay = 0;

        // Timeline for construction stages - more granular than just completion steps
        const buildTimeline = [
            { step: 0, stage: 1, delay: generationSteps[0].duration * 0.5 }, // Header structure appears
            { step: 1, stage: 2, delay: generationSteps[1].duration * 0.5 }, // Hero section frame appears
            { step: 2, stage: 3, delay: generationSteps[2].duration * 0.3 }, // Hero content text appears
            { step: 2, stage: 4, delay: generationSteps[2].duration * 0.7 }, // More hero content
            { step: 3, stage: 5, delay: generationSteps[3].duration * 0.4 }, // Left content section frame
            { step: 3, stage: 6, delay: generationSteps[3].duration * 0.8 }, // Right content section frame
            { step: 4, stage: 7, delay: generationSteps[4].duration * 0.3 }, // Menu items appear
            { step: 4, stage: 8, delay: generationSteps[4].duration * 0.7 }, // Location appears
            { step: 5, stage: 9, delay: generationSteps[5].duration * 0.5 }, // Footer appears
            { step: 5, stage: 10, delay: generationSteps[5].duration * 0.9 }, // Final polish
        ];

        // Main generation steps
        generationSteps.forEach((step, index) => {
            setTimeout(() => {
                setCurrentStep(index);

                // Mark step as completed after its duration
                setTimeout(() => {
                    setCompletedSteps(prev => [...prev, index]);

                    // If this is the last step, show the result
                    if (index === totalSteps - 1) {
                        setTimeout(() => {
                            setShowFinalResult(true);
                            setIsGenerating(false);
                        }, 800);
                    }
                }, step.duration);
            }, totalDelay);

            totalDelay += step.duration;
        });

        // More detailed build timeline
        buildTimeline.forEach(({ step, stage, delay }) => {
            let stepStartTime = 0;
            for (let i = 0; i < step; i++) {
                stepStartTime += generationSteps[i].duration;
            }

            setTimeout(() => {
                setBuildStage(stage);
            }, stepStartTime + delay);
        });
    };

    // Start the demo automatically when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            startTypingEffect();
        }, 1000);

        return () => {
            clearTimeout(timer);
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
    }, []);

    // Reset and restart the demo
    const restartDemo = () => {
        setInputValue('');
        setIsGenerating(false);
        setCurrentStep(null);
        setCompletedSteps([]);
        setShowFinalResult(false);
        setBuildStage(0);

        setTimeout(() => {
            startTypingEffect();
        }, 500);
    };

    return (
        <div
            ref={demoContainerRef}
            className="bg-card border border-gray-800/30 rounded-lg overflow-hidden w-full mx-auto"
            style={{
                height: 'auto',
                minHeight: '500px',
                maxHeight: '700px',
                maxWidth: '1000px'
            }}
        >
            {/* Demo Header */}
            <div className="border-b border-gray-800/20 p-3 md:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs md:text-sm font-medium text-center flex-grow">MonkeysCMS AI Generator</div>
                <div className="w-12 md:w-16"></div>
            </div>

            {/* Split View Layout - Better responsive handling */}
            <div className="flex flex-col lg:flex-row" style={{ height: 'calc(100% - 53px)', minHeight: '450px' }}>
                {/* Left Panel - Generation Steps & Input */}
                <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-800/20 p-3 md:p-4 overflow-y-auto max-h-[300px] lg:max-h-none">
                    {/* Input Form */}
                    <div className="mb-4 md:mb-6">
                        <label className="text-xs md:text-sm text-muted-foreground block mb-2">Describe your website</label>
                        <div className="relative">
                            <textarea
                                className="w-full p-2 md:p-3 rounded-md bg-background border border-gray-800/30 text-xs md:text-sm resize-none"
                                value={inputValue}
                                readOnly
                                placeholder="E.g., Create a restaurant website..."
                                rows={3}
                                style={{
                                    minHeight: '60px',
                                    maxHeight: '100px'
                                }}
                            />
                            <div className="absolute right-2 top-2 md:top-3">
                                {isTyping && (
                                    <div className="h-4 w-4 md:h-6 md:w-6 flex items-center justify-center">
                                        <span className="block h-1.5 w-1.5 md:h-2 md:w-2 bg-primary rounded-full animate-ping"></span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-3 md:mt-4">
                            <Button
                                onClick={restartDemo}
                                disabled={isTyping || isGenerating}
                                variant="outline"
                                size="sm"
                                className="ml-gradient-border text-primary w-full text-xs"
                            >
                                Restart Demo
                            </Button>
                        </div>
                    </div>

                    {/* Generation Progress */}
                    <div>
                        <h3 className="text-xs md:text-sm font-medium mb-3 md:mb-4">Generation Progress</h3>
                        <div className="space-y-2 md:space-y-3">
                            {generationSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex items-center gap-2 md:gap-3 p-1.5 md:p-2 rounded-md transition-all",
                                        currentStep === index && "bg-primary/5 border border-primary/20",
                                        completedSteps.includes(index) && "text-primary"
                                    )}
                                >
                                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-background/80 border border-gray-800/20 flex items-center justify-center shrink-0">
                                        {completedSteps.includes(index) ? (
                                            <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                                        ) : currentStep === index ? (
                                            <Loader2 className="h-3 w-3 md:h-4 md:w-4 animate-spin" />
                                        ) : (
                                            <div className="text-muted-foreground [&>svg]:h-3 [&>svg]:w-3 md:[&>svg]:h-4 md:[&>svg]:w-4">
                                                {step.icon}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-xs md:text-sm">{step.name}</span>
                                    {currentStep === index && !completedSteps.includes(index) && (
                                        <div className="ml-auto h-1 w-12 md:w-16 bg-gray-800/20 rounded-full overflow-hidden shrink-0">
                                            <div className="h-full bg-primary animate-pulse"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Preview Window */}
                <div className="w-full lg:w-2/3 p-3 md:p-4 flex flex-col flex-grow">
                    <h3 className="text-xs md:text-sm font-medium mb-3 md:mb-4">Website Preview</h3>
                    <div className="border border-gray-800/20 rounded-lg overflow-hidden bg-background/30 flex-grow relative" style={{ minHeight: '300px' }}>
                        {/* Loading State */}
                        {isGenerating && !showFinalResult && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[2px] z-10">
                                <div className="text-center p-4">
                                    <Loader2 className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 md:mb-4 animate-spin text-primary" />
                                    <p className="text-xs md:text-sm text-muted-foreground">Generating your website...</p>
                                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                                        Step {(currentStep !== null ? currentStep + 1 : 0)}/{generationSteps.length}:&nbsp;
                                        {currentStep !== null ? generationSteps[currentStep].name : ''}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Website Construction Animation */}
                        <div className="w-full h-full flex flex-col text-xs md:text-sm">
                            <AnimatePresence>
                                {/* Website Header - Stage 1 */}
                                {buildStage >= 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7 }}
                                        className="w-full bg-primary text-background p-2 md:p-3 flex flex-col sm:flex-row justify-between items-center gap-2"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="font-bold text-xs md:text-sm"
                                        >
                                            Gourmet Haven
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="flex gap-2 md:gap-4 text-[10px] md:text-xs"
                                        >
                                            <span>Home</span>
                                            <span>Menu</span>
                                            <span>Reservations</span>
                                            <span className="hidden sm:inline">About</span>
                                            <span className="hidden sm:inline">Contact</span>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Hero Section - Stage 2 */}
                                {buildStage >= 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.7 }}
                                        className="bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center py-6 md:py-8"
                                    >
                                        <div className="text-center p-2 md:p-4">
                                            {buildStage >= 3 && (
                                                <motion.h2
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="font-bold text-sm md:text-xl ml-gradient-text"
                                                >
                                                    Fine Dining Experience
                                                </motion.h2>
                                            )}

                                            {buildStage >= 3 && (
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="text-[10px] md:text-xs text-muted-foreground mt-1"
                                                >
                                                    Crafting culinary memories since 2010
                                                </motion.p>
                                            )}

                                            {buildStage >= 4 && (
                                                <motion.button
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="mt-2 md:mt-4 text-[10px] md:text-xs px-2 md:px-3 py-1 ml-gradient-bg text-background rounded-full"
                                                >
                                                    Book a Table
                                                </motion.button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Main Content Grid */}
                                <div className="flex-grow overflow-auto">
                                    <div className="p-2 md:p-3 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                        {/* Left Content Column - Stage 5 */}
                                        <div className="space-y-1">
                                            {buildStage >= 5 && (
                                                <motion.h3
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="text-[10px] md:text-xs font-bold"
                                                >
                                                    Our Specialties
                                                </motion.h3>
                                            )}

                                            {buildStage >= 5 && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="w-full bg-background/50 rounded overflow-hidden p-1.5 md:p-2"
                                                >
                                                    {buildStage >= 7 && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.5 }}
                                                            className="space-y-1.5 md:space-y-2"
                                                        >
                                                            {[
                                                                { name: 'Signature Pasta', price: '$24' },
                                                                { name: 'Grilled Salmon', price: '$28' },
                                                                { name: 'Chocolate Soufflé', price: '$12' }
                                                            ].map((item, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="flex items-center justify-between"
                                                                    initial={{ x: -10, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                                >
                                                                    <span className="text-[9px] md:text-[10px] font-medium">{item.name}</span>
                                                                    <span className="text-[9px] md:text-[10px] text-primary">{item.price}</span>
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Right Content Column - Stage 6 */}
                                        <div className="space-y-1">
                                            {buildStage >= 6 && (
                                                <motion.h3
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="text-[10px] md:text-xs font-bold"
                                                >
                                                    Find Us
                                                </motion.h3>
                                            )}

                                            {buildStage >= 6 && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="w-full bg-background/50 rounded overflow-hidden p-2 md:p-3"
                                                >
                                                    {buildStage >= 8 && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.5 }}
                                                            className="bg-primary/5 rounded p-2 md:p-3 text-center"
                                                        >
                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.2, duration: 0.5 }}
                                                            >
                                                                <motion.div
                                                                    className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-1"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                                                                >
                                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary"></div>
                                                                </motion.div>
                                                                <span className="text-[8px] md:text-[9px] block">123 Dining Street</span>
                                                                <span className="text-[8px] md:text-[9px] block text-muted-foreground">Gourmet City, GC</span>
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer - Stage 9 */}
                                {buildStage >= 9 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="border-t border-gray-800/10 p-2 md:p-3 flex justify-between items-center mt-auto"
                                    >
                                        <div className="text-[8px] md:text-[10px] text-muted-foreground">© 2023 Gourmet Haven</div>
                                        <motion.div
                                            className="flex gap-1.5 md:gap-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                        >
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/10 flex items-center justify-center"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, type: "spring" }}
                                                >
                                                    <span className="text-[7px] md:text-[8px]">{["f", "in", "ig"][i]}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Final Polish - Stage 10 */}
                                {buildStage >= 10 && (
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0, 0.1, 0] }}
                                        transition={{ duration: 1 }}
                                    >
                                        <div className="absolute inset-0 bg-primary/5 ml-shimmer"></div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Results & Actions - Better positioning */}
                        {showFinalResult && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute bottom-2 md:bottom-4 right-2 md:right-4 max-w-[200px] md:max-w-xs"
                            >
                                <div className="bg-primary/5 border border-primary/20 rounded-lg p-2 md:p-4 backdrop-blur-sm">
                                    <div className="flex items-center gap-1.5 md:gap-2 mb-2">
                                        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                                        <h3 className="text-[10px] md:text-sm font-medium">Complete!</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mt-2 md:mt-3">
                                        <Button size="sm" className="ml-gradient-bg text-background text-[9px] md:text-xs h-7 md:h-8">Deploy</Button>
                                        <Button size="sm" variant="outline" className="ml-gradient-border text-[9px] md:text-xs h-7 md:h-8">Edit</Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
