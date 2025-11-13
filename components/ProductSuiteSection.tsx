
import React from 'react';
import { Wifi, MailCheck, CreditCard, Tv2 } from './Icons';
import { Button } from './ui/Button';

const products = [
  {
    icon: Wifi,
    name: 'Intelligent Venue WiFi',
    description: 'The foundation of your smart venue. Our Purple-powered platform provides robust connectivity, captures valuable first-party data, and delivers rich location analytics.'
  },
  {
    icon: MailCheck,
    name: 'Everlytic AI Studio',
    description: 'Engage visitors post-visit or in-venue with automated, multi-channel campaigns via Email, SMS, and conversational AI on WhatsApp.'
  },
  {
    icon: CreditCard,
    name: 'All Axxess Platform',
    description: 'A comprehensive solution for event management, access control, and seamless cashless payments, perfect for any venue or occasion.'
  },
  {
    icon: Tv2,
    name: 'CNNTAP Monetization',
    description: 'Turn your WiFi from a cost center into a revenue stream by delivering premium, targeted advertising through our exclusive CNN partnership.'
  }
];

const ProductSuiteSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in-up">
            Our Integrated Product Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Flow combines best-in-class solutions to create a single, powerful operating system for your venue. Each component works in harmony to deliver insights, automation, and revenue.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className="bg-card/30 backdrop-blur-md border border-border/50 p-8 rounded-lg flex items-start space-x-6 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg border border-primary/20">
                <product.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <Button href="/products" variant="secondary" size="lg" glow>
                Explore All Products
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSuiteSection;
