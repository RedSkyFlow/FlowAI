
import React from 'react';
import { ArrowRight, BrainCircuit } from './Icons';
import { Button } from './ui/Button';

const CoreOffering = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            Our Core Mission
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Turn Your Physical Venue into an Intelligent Space
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Flow is an integrated platform that leverages your guest WiFi to bridge the gap between your physical and digital operations. We empower you to deeply understand visitor behavior, automate marketing, and create new revenue streams through actionable, first-party data.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start">
                                <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Understand & Identify</h4>
                                    <p className="text-muted-foreground">Capture valuable, compliant first-party data to build rich visitor profiles.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Enhance & Engage</h4>
                                    <p className="text-muted-foreground">Deliver personalized experiences through automated, trigger-based marketing.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Monetize & Optimize</h4>
                                    <p className="text-muted-foreground">Generate revenue and improve operational efficiency with data-driven insights.</p>
                                </div>
                            </li>
                        </ul>
                         <div className="mt-10">
                            <Button href="/solutions/ai-gateway" variant="secondary" size="lg" glow>
                                Explore the AI Gateway
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                        <div className="relative p-8">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_50%)] animate-pulse" style={{ animationDuration: '5s' }} />
                             <BrainCircuit className="h-64 w-64 text-primary opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreOffering;
