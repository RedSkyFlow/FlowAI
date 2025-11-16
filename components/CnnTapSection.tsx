import React from 'react';
import { Button } from './ui/Button';
import { Check } from './Icons';
import { IMAGES } from '../assets';

const CnnTapSection = () => {
    return (
        <section 
            className="py-20 md:py-32 bg-card/20 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-card/80 backdrop-blur-[2px]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Monetize Your WiFi with World-Class Content
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Through our partnership with CNN, Flow integrates the CNN TAP (Travel Advertising Platform) to transform your guest WiFi from a cost center into a powerful revenue generator. Offer your guests premium content while unlocking new income streams through strategic brand partnerships.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start">
                                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Zero Cost to You</h4>
                                    <p className="text-muted-foreground">The entire program is free for venues that display CNN International.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">New Revenue Streams</h4>
                                    <p className="text-muted-foreground">Earn ancillary revenue from brand partnerships managed by CNN's global sales team.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Global Exposure</h4>
                                    <p className="text-muted-foreground">Be featured on CNN's partner websites and on-air commercials, reaching millions of travelers.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Bespoke Guest Experience</h4>
                                    <p className="text-muted-foreground">Engage guests with beautiful, bespoke landing pages designed by CNN's award-winning creative team.</p>
                                </div>
                            </li>
                        </ul>
                         <div className="mt-10">
                            <Button href="/products/cnntap" variant="secondary" size="lg" glow>
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                       <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-br from-secondary via-primary to-accent rounded-lg opacity-20 blur-xl"></div>
                            <img 
                                src={IMAGES.HOMEPAGE.CNNTAP_MOCKUP}
                                alt="CNN TAP on a mobile phone" 
                                className="relative rounded-lg shadow-2xl shadow-black/30 w-full max-w-sm"
                            />
                       </div>
                    </div>
                </div>
                 <div className="mt-16 text-center">
                    <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Trusted by world-renowned hospitality brands</p>
                    <div className="flex justify-center items-center gap-x-8 sm:gap-x-12 mt-6 grayscale opacity-60">
                        <img src={IMAGES.LOGOS.HILTON} alt="Hilton" className="h-6 sm:h-8" />
                        <img src={IMAGES.LOGOS.RADISSON} alt="Radisson" className="h-10 sm:h-12" />
                        <img src={IMAGES.LOGOS.IHG} alt="IHG" className="h-10 sm:h-12" />
                        <img src={IMAGES.LOGOS.STEIGENBERGER} alt="Steigenberger" className="h-6 sm:h-8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CnnTapSection;