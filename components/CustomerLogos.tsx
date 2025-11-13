
import React from 'react';
import { cn } from '../lib/utils';

const customers = [
    'McDonald\'s',
    'Harrods',
    'Walmart',
    'VCU Health',
    'IKEA',
    'Tesco',
    'Starbucks',
    'Avanti West Coast',
    'Lloyds Bank',
];

const CustomerLogos = () => {
    const extendedCustomers = [...customers, ...customers]; // Duplicate for seamless scroll

    return (
        <section className="py-12 bg-card/20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-lg font-semibold text-muted-foreground tracking-wider uppercase">
                    Trusted by Industry-Leading Venues and Global Brands
                </h2>
                <div className="relative mt-8 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card/20 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card/20 to-transparent z-10"></div>
                    <div className="animate-scroll flex gap-16">
                        {extendedCustomers.map((customer, index) => (
                            <div key={index} className="flex-shrink-0 text-2xl font-bold text-muted-foreground/80">
                                {customer}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default CustomerLogos;
