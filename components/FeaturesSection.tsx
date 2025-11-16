import React from 'react';
import { Wifi, MessageSquare, Lock, BarChart3, UserCheck, ShieldCheck, Mic } from './Icons';

const features = [
  {
    icon: Wifi,
    title: 'Guest WiFi',
    description: 'Provide secure, scalable, and stable connectivity that serves as the foundation for your intelligent venue.',
    glowClass: 'hover:shadow-glow-secondary-strong'
  },
  {
    icon: MessageSquare,
    title: 'Captive Portal',
    description: 'Create fully branded, multi-lingual splash pages that act as a powerful tool for engagement and first-party data capture.',
    glowClass: 'hover:shadow-glow-accent-strong'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'Ensure compliance with major data privacy laws like GDPR and CCPA, building trust with your visitors.',
    glowClass: 'hover:shadow-glow-primary-strong'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Access detailed WiFi analytics and behavioral insights to make data-backed decisions that drive results.',
    glowClass: 'hover:shadow-glow-secondary-strong'
  },
  {
    icon: UserCheck,
    title: 'SecurePass',
    description: 'Offer seamless and highly secure authentication methods for visitors, enhancing user experience and security.',
     glowClass: 'hover:shadow-glow-accent-strong'
  },
  {
    icon: ShieldCheck,
    title: 'Verify',
    description: 'Maintain clean and effective marketing databases with automated email and data verification tools.',
     glowClass: 'hover:shadow-glow-primary-strong'
  },
  {
    icon: Mic,
    title: 'AI-Powered Voice',
    description: 'Leverage conversational AI to answer guest questions and direct them to services, personalizing their in-venue experience.',
    glowClass: 'hover:shadow-glow-secondary-strong'
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in-up">
            The Toolkit for Your Intelligent Venue
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Flow provides a comprehensive suite of tools designed to enhance visitor experiences, optimize operations, and drive revenue.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={`bg-card/30 backdrop-blur-md border border-border/50 shadow-lg shadow-black/20 rounded-lg p-8 text-center transition-all duration-standard ease-gentle hover:-translate-y-2 ${feature.glowClass} animate-fade-in-up flex flex-col`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex justify-center items-center mb-6">
                 <div className="bg-accent/10 p-4 rounded-full border border-accent/20">
                    <feature.icon className="h-8 w-8 text-accent" />
                 </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;