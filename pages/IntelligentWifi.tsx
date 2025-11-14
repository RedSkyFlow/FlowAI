
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Wifi, UserCheck, Megaphone, BrainCircuit, Hotel, ShoppingCart, Plane, TrendingUp, Wrench, ShieldCheck } from '../components/Icons';
import { cn } from '../lib/utils';

const AnimatedGridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
            className="absolute inset-0"
            style={{
                backgroundImage: `radial-gradient(hsla(var(--primary)/0.1) 1px, transparent 1px), radial-gradient(hsla(var(--primary)/0.1) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
                backgroundPosition: '0 0, 16px 16px',
                maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
            }}
        />
        <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.1),transparent_40%)] animate-pulse"
            style={{ animationDuration: '6s' }}
        />
    </div>
);

const WifiHero = () => (
    <section className="relative flex flex-col justify-center items-center text-center overflow-hidden py-24 sm:py-32">
        <AnimatedGridBackground />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-accent via-primary-foreground to-accent animate-gradient-move bg-[length:250%_auto]">
                    Beyond Connectivity
                    <br />
                    The Intelligent WiFi Platform
                </h1>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                    Transform your guest WiFi from a simple utility into a powerful engine for data, engagement, and revenue. Our platform, powered by Purple, acts as the central nervous system for your physical space, bridging the physical and digital worlds.
                </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <Button href="/contact" variant="secondary" size="lg" glow>
                    Get a Demo
                </Button>
                <Button href="#features" variant="ghost" size="lg" className="group text-foreground/80 hover:text-accent">
                    See Features
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    </section>
);

const HowItWorks = () => {
    const steps = [
        {
            phase: "Phase 1",
            title: "Sensory Input",
            subtitle: "Connect & Capture",
            description: "The WiFi connection provides irrefutable proof of physical presence. Through branded splash pages, you capture critical first-party data, bridging the physical and digital worlds.",
        },
        {
            phase: "Phase 2",
            title: "Intelligent Orchestration",
            subtitle: "The AI Gateway",
            description: "Our AI Gateway fuses real-time location data with siloed information from your PMS, POS, and CRM systems, creating a single, evolving profile with hyper-local context.",
        },
        {
            phase: "Phase 3",
            title: "Automated Action",
            subtitle: "Engage & Convert",
            description: "Trigger hyper-contextual messages via SMS, WhatsApp, and email at the precise moment of relevance, transforming a passive visit into an interactive, revenue-driving experience.",
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A simple, powerful, three-phase process to turn presence into profit.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                       <svg width="100%" height="2" className="overflow-visible">
                         <path d="M0 1 H10000" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="8 8" />
                       </svg>
                    </div>
                    {steps.map((step, index) => (
                        <div key={index} className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg p-8 text-center animate-fade-in-up relative z-10" style={{ animationDelay: `${200 + index * 150}ms` }}>
                            <div className="mb-4">
                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{step.phase}</span>
                                <h3 className="text-2xl font-bold text-foreground mt-1">{step.title}</h3>
                                <p className="text-accent font-semibold">{step.subtitle}</p>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureBreakdown = () => {
    const features = [
        { icon: Wifi, title: "Connect", description: "Establish a secure, stable foundation with enterprise-grade WiFi. Utilize modern standards like Passpoint to offer seamless, encrypted connections that act as a definitive 'digital key' for each visitor." },
        { icon: UserCheck, title: "Capture", description: "Deploy fully branded captive portals to capture rich, permission-based data through social logins or simple forms, while maintaining full GDPR & CCPA compliance." },
        { icon: Megaphone, title: "Engage", description: "Leverage presence as a trigger for action. Send automated, personalized marketing messages to enhance the guest experience, promote offers, and drive on-site spending." },
    ];
    return (
        <section id="features" className="py-20 md:py-32 bg-card/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Core Capabilities</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Our platform is built on three interconnected pillars that create a virtuous cycle of data and engagement.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {features.map((feature, index) => (
                        <div key={index} className="bg-card p-8 rounded-lg animate-fade-in-up shadow-lg" style={{ animationDelay: `${200 + index * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                     ))}
                </div>
            </div>
        </section>
    );
}

const AiGatewaySection = () => (
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex items-center justify-center animate-fade-in-up">
                    <div className="relative p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_50%)] animate-pulse" style={{ animationDuration: '5s' }} />
                        <BrainCircuit className="h-64 w-64 text-primary opacity-50" />
                    </div>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        The Intelligence Overlay, Not a Replacement
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        The Flow AI Gateway is a private, context-aware engine that sits on top of your existing infrastructure—Wi-Fi hardware, PMS, POS, and CRM systems. Unlike generic public AI, it understands your venue's real-time context, from spa availability to store inventory, while ensuring complete data sovereignty and security.
                    </p>
                    <div className="mt-8 space-y-2">
                        <p className="font-semibold text-foreground">Flexible Deployment Models:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li><span className="font-semibold text-foreground/90">On-Premise:</span> For maximum security, speed, and data control.</li>
                            <li><span className="font-semibold text-foreground/90">Private Cloud:</span> To maintain control within a dedicated cloud environment.</li>
                            <li><span className="font-semibold text-foreground/90">Hybrid Model:</span> A blended approach for ultimate flexibility.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IndustryUseCases = () => {
    const [activeTab, setActiveTab] = useState('Hospitality');
    const tabs = [
        { name: 'Hospitality', icon: Hotel, content: "A returning couple connects to the WiFi. The AI greets them by name, recognizes their anniversary from the PMS, and proactively offers to book a table at their favorite on-site restaurant." },
        { name: 'Retail', icon: ShoppingCart, content: "A shopper's dwell time near an electronics store triggers a personalized SMS: 'Hi Sarah, we see you're near [Store Name]. Show this for 15% off your purchase today!' turning passive browsing into a sale." },
        { name: 'Airports', icon: Plane, content: "A frequent flyer's phone connects automatically via Passpoint. The AI instantly recognizes them, triggering a push notification: 'Welcome back, Adam. Your flight is on time at Gate B12. Enjoy complimentary lounge access.'" }
    ];

    const activeContent = tabs.find(tab => tab.name === activeTab);

    return (
        <section className="py-20 md:py-32 bg-card/20">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Synergy in Action</h2>
                    <p className="mt-4 text-lg text-muted-foreground">See how our platform delivers measurable value across different industries.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center border-b border-border mb-8">
                        {tabs.map(tab => (
                            <button key={tab.name} onClick={() => setActiveTab(tab.name)} className={cn("flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-colors", activeTab === tab.name ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground')}>
                                <tab.icon className="h-5 w-5" />
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-lg text-center min-h-[120px] flex items-center justify-center">
                        <p className="text-lg text-foreground/90 italic">"{activeContent?.content}"</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BusinessOutcomes = () => {
    const outcomes = [
        { icon: TrendingUp, title: 'Unlock New Revenue', description: "Redirecting 25% of mass promotion spending to personalized offers can increase ROI by 200%. Travelers with personalized campaigns show a 45% increase in spend." },
        { icon: Wrench, title: 'Boost Operational Efficiency', description: "Deliver 'Actionable AI' to staff. A maintenance tech can instantly access building schematics based on their location, enabling faster, more efficient repairs." },
        { icon: ShieldCheck, title: 'Build a Defensible Moat', description: "Achieve true data sovereignty. Own and control your most valuable asset: a deep, proprietary understanding of your customers' in-venue behavior." }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Driving Tangible Business Outcomes</h2>
                    <p className="mt-4 text-lg text-muted-foreground">This is more than technology—it's a strategy for measurable growth and competitive advantage.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {outcomes.map((outcome, index) => (
                        <div key={index} className="bg-card/30 backdrop-blur-md border border-border/50 p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20">
                                    <outcome.icon className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{outcome.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{outcome.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCta = () => (
    <section className="py-20 md:py-32 text-center bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to unlock your venue's potential?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Let's discuss how Flow's Intelligent WiFi platform can transform your customer experience and your bottom line.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/contact" variant="secondary" size="lg" glow>
                    Contact Sales
                </Button>
                <Button href="/solutions/ai-gateway" variant="ghost" size="lg" className="group text-foreground/80 hover:text-accent">
                    Explore the AI Vision
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    </section>
);


const IntelligentWifi: React.FC = () => {
    return (
        <>
            <WifiHero />
            <HowItWorks />
            <FeatureBreakdown />
            <AiGatewaySection />
            <IndustryUseCases />
            <BusinessOutcomes />
            <FinalCta />
        </>
    );
};

export default IntelligentWifi;
