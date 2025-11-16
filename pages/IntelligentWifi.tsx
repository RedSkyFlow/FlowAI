

import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Wifi, UserCheck, Megaphone, Hotel, ShoppingCart, Plane, TrendingUp, Wrench, ShieldCheck } from '../components/Icons';
import { cn } from '../lib/utils';
import { IMAGES } from '../assets';

const WifiHero = () => (
    <section className="relative flex flex-col justify-center items-center text-center py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-background/90 z-0"></div>
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
            image: IMAGES.INDUSTRIES.AIRPORT_HERO
        },
        {
            phase: "Phase 2",
            title: "Intelligent Orchestration",
            subtitle: "The AI Gateway",
            description: "Our AI Gateway fuses real-time location data with siloed information from your PMS, POS, and CRM systems, creating a single, evolving profile with hyper-local context.",
            image: IMAGES.GLOBAL.DATA_STREAM_INTEGRATIONS
        },
        {
            phase: "Phase 3",
            title: "Automated Action",
            subtitle: "Engage & Convert",
            description: "Trigger hyper-contextual messages via SMS, WhatsApp, and email at the precise moment of relevance, transforming a passive visit into an interactive, revenue-driving experience.",
            image: IMAGES.INDUSTRIES.RETAIL_HERO
        }
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A simple, powerful, three-phase process to turn presence into profit.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg overflow-hidden text-center animate-fade-in-up flex flex-col h-full shadow-lg" style={{ animationDelay: `${200 + index * 150}ms` }}>
                            <img src={step.image} alt={step.title} className="w-full h-48 object-cover"/>
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-sm font-bold text-primary uppercase tracking-widest">{step.phase}</span>
                                <h3 className="text-2xl font-bold text-foreground mt-1">{step.title}</h3>
                                <p className="text-accent font-semibold">{step.subtitle}</p>
                                <p className="text-muted-foreground mt-4 flex-grow">{step.description}</p>
                            </div>
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
                <div className="animate-fade-in-up">
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
                <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-br from-secondary via-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500"></div>
                        <img 
                            src={IMAGES.GLOBAL.AI_GATEWAY_HERO}
                            alt="AI Gateway data visualization"
                            className="relative w-full max-w-lg rounded-2xl shadow-2xl shadow-black/30"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IndustryUseCases = () => {
    const [activeTab, setActiveTab] = useState('Hospitality');
    const tabs = [
        { name: 'Hospitality', icon: Hotel, content: "A returning couple connects to the WiFi. The AI greets them by name, recognizes their anniversary from the PMS, and proactively offers to book a table at their favorite on-site restaurant.", image: IMAGES.INDUSTRIES.HOSPITALITY_HERO },
        { name: 'Retail', icon: ShoppingCart, content: "A shopper's dwell time near an electronics store triggers a personalized SMS with a time-sensitive 15% discount, turning passive browsing into an immediate sales opportunity.", image: IMAGES.INDUSTRIES.RETAIL_HERO },
        { name: 'Airports', icon: Plane, content: "A frequent flyer connects automatically via Passpoint. The AI recognizes them, confirms their flight is on time at Gate B12, and offers complimentary lounge access, streamlining their journey.", image: IMAGES.INDUSTRIES.AIRPORT_HERO },
    ];

    const activeTabData = tabs.find(tab => tab.name === activeTab);

    return (
        <section className="py-20 md:py-32 bg-card/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Synergy in Action</h2>
                    <p className="mt-4 text-lg text-muted-foreground">See how our platform delivers measurable value across different industries.</p>
                </div>
                <div className="bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50 grid md:grid-cols-3">
                    <div className="flex flex-col border-b md:border-b-0 md:border-r border-border/50">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={cn(
                                    "p-6 text-left flex items-center gap-4 transition-colors duration-300 relative",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card",
                                    activeTab === tab.name ? "" : "hover:bg-primary/5"
                                )}
                            >
                                <div className={cn(
                                    "absolute inset-0 transition-all duration-300 ease-gentle",
                                    activeTab === tab.name ? "bg-primary/10 opacity-100" : "opacity-0"
                                )}></div>
                                <div className={cn(
                                    "absolute left-0 top-0 h-full w-1 bg-primary transition-all duration-300 ease-gentle",
                                     activeTab === tab.name ? "scale-y-100" : "scale-y-0"
                                )}></div>
                                <div className="relative z-10 flex items-center gap-4">
                                  <tab.icon className={cn("h-8 w-8 transition-colors", activeTab === tab.name ? "text-primary" : "text-muted-foreground")} />
                                  <span className={cn("text-lg font-semibold transition-colors", activeTab === tab.name ? "text-primary" : "text-foreground")}>{tab.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="md:col-span-2 min-h-[300px] md:min-h-[400px] flex items-end p-8 md:p-12 relative">
                        {tabs.map(tab => (
                           <div key={tab.name} className={cn(
                               "absolute inset-0 transition-opacity duration-1000 ease-gentle",
                               activeTab === tab.name ? "opacity-100" : "opacity-0"
                           )}>
                                <img src={tab.image} alt={`${tab.name} use case`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                           </div>
                        ))}
                         <div className="relative z-10">
                            <p className="text-xl text-white/90 leading-relaxed max-w-lg shadow-text">{activeTabData?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
             <style>{`.shadow-text { text-shadow: 0 1px 4px rgba(0,0,0,0.7); }`}</style>
        </section>
    );
};

const BusinessOutcomes = () => {
    const outcomes = [
        { icon: TrendingUp, title: "Unlock New Revenue", description: "Move beyond generic marketing to deliver personalized offers that directly influence purchasing behavior and create new monetization opportunities through targeted advertising." },
        { icon: Wrench, title: "Boost Operational Efficiency", description: "Empower staff with 'Actionable AI' that provides instant, context-aware answers and automates workflows, from stock checks to maintenance orders, reducing manual effort." },
        { icon: ShieldCheck, title: "Build Data Sovereignty", description: "Own and control your customer relationships and data assets. Our new architecture ensures you retain full sovereignty, creating a deep, proprietary understanding of in-venue behavior." }
    ];
    return (
         <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Driving Tangible Business Outcomes</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Our platform extends far beyond enhancing the customer experience to drive measurable improvements in core business metrics.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {outcomes.map((outcome, index) => (
                        <div key={index} className="bg-card/30 border border-border/50 p-8 rounded-lg animate-fade-in-up flex flex-col items-center text-center" style={{ animationDelay: `${200 + index * 150}ms` }}>
                             <div className="bg-primary/10 p-4 rounded-full border border-primary/20 mb-6">
                                <outcome.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{outcome.title}</h3>
                            <p className="text-muted-foreground">{outcome.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="py-20 md:py-32 text-center bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to turn your venue's WiFi into your most powerful asset?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Let's talk about how Flow can create hyper-personalized experiences for your customers and deliver actionable intelligence to your team.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/contact" variant="primary" size="lg" glow>
                    Request a Personalized Demo
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
            <CTASection />
        </>
    );
};

export default IntelligentWifi;
