
import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from './Icons';

const AnimatedGridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: 
          `radial-gradient(hsla(var(--primary)/0.1) 1px, transparent 1px),
           radial-gradient(hsla(var(--primary)/0.1) 1px, transparent 1px)`,
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

const HeroSection = () => {
  return (
    <section className="relative flex h-[calc(100vh-80px)] min-h-[600px] w-full items-center justify-center overflow-hidden py-20 md:py-32">
       <AnimatedGridBackground />
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