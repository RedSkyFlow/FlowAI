
import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from './Icons';

const HeroImageBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
            src="https://storage.googleapis.com/aistudio-hosting/project-assets/images/a8383921-1279-4d1a-9657-37a5996f2a63.jpeg"
            alt="Intelligent Venue AI network visualization"
            className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </div>
);


const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-80px)] min-h-[600px] w-full items-center justify-center overflow-hidden py-20 md:py-32">
       <HeroImageBackground />
       <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
          <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-accent via-primary-foreground to-accent animate-gradient-move bg-[length:250%_auto]">
            Flow: The Operating System
            <br />
            for Intelligent Venues.
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Flow is the central nervous system for your physical space, transforming guest WiFi into a powerful engine for data and engagement with our core <span className="font-bold text-foreground">Purple</span> technology.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}>
          <Button href="/products/intelligent-wifi" variant="secondary" size="lg" glow>
            Discover the Platform
          </Button>
          <Button href="/contact" variant="ghost" size="lg" className="group text-foreground/80 hover:text-accent">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;