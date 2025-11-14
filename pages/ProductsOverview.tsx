import React from 'react';
import { MAIN_NAV_LINKS } from '../constants';
import { NavLinkWithSubLinks } from '../types';
import { Button } from '../components/ui/Button';
import { ArrowRight } from '../components/Icons';

const HeroImageBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
            src="https://storage.googleapis.com/aistudio-hosting/templates/d8d4c9d9-05b1-460d-8547-06385f02f06b/assets/products-hero-bg.jpg"
            alt="Abstract visualization of product blocks"
            className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </div>
);

const ProductsOverview = () => {
    const productsLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
    const corePlatforms = productsLink?.subLinks?.filter(p => p.category === 'Core Platforms') || [];
    const services = productsLink?.subLinks?.filter(p => p.category === 'Services & Add-Ons') || [];

    const ProductCard = ({ product, index }: { product: NavLinkWithSubLinks, index: number }) => (
        <div 
            className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg p-8 flex flex-col transition-all duration-standard ease-gentle hover:-translate-y-2 hover:shadow-glow-primary-strong animate-fade-in-up"
            style={{ animationDelay: `${200 + index * 100}ms` }}
        >
            <div className="flex items-start space-x-4">
                {product.icon && (
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg border border-primary/20">
                        {React.createElement(product.icon, { className: "h-6 w-6 text-primary" })}
                    </div>
                )}
                <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{product.shortDescription}</p>
                </div>
            </div>
             <div className="mt-6 flex-shrink-0">
                <Button href={product.href} variant="ghost" size="sm" className="group text-accent font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <section className="relative flex flex-col justify-center items-center text-center overflow-hidden py-24 sm:py-32">
                <HeroImageBackground />
                <div className="container relative z-10 mx-auto px-4 md:px-6">
                     <div className="animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                        <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-accent via-primary-foreground to-accent animate-gradient-move bg-[length:250%_auto]">
                            The Building Blocks of Your Intelligent Venue
                        </h1>
                    </div>
                     <div className="animate-fade-in-up" style={{ animationDelay: '400ms'}}>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                            Explore the powerful, integrated products that form the Flow ecosystem. From core connectivity to advanced monetization, each component works in harmony to deliver insights, automation, and revenue.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Core Platforms</h2>
                        <p className="mt-4 text-lg text-muted-foreground">The foundational engines that power the Flow operating system.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {corePlatforms.map((product, index) => (
                            <ProductCard key={product.href} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-24 bg-card/20">
                <div className="container mx-auto px-4 md:px-6">
                     <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Services & Add-Ons</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Enhance and extend the Flow platform with specialized services and certifications.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((product, index) => (
                             <ProductCard key={product.href} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 text-center">
                 <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to build your intelligent venue?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our team is ready to help you design a solution that fits your unique needs.</p>
                     <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button href="/contact" variant="primary" size="lg" glow>
                            Contact Sales
                        </Button>
                        <Button href="/solutions/ai-gateway" variant="ghost" size="lg" className="group text-foreground/80 hover:text-accent">
                            Explore the AI Vision
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsOverview;