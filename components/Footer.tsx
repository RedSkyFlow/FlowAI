import React from 'react';
import { MAIN_NAV_LINKS } from '../constants';
import { FlowLogo } from './Icons';
import { SocialIconLinkedin, SocialIconX, SocialIconWhatsApp } from './SocialIcons';

const Footer = () => {
  const footerLinks = MAIN_NAV_LINKS.filter(l => ['Products', 'Solutions', 'Industries', 'Company'].includes(l.label));

  return (
    <footer className="bg-card/20 border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <a href="/" aria-label="Flow Networks Home" className="flex items-center group w-fit">
              <FlowLogo className="h-8 w-auto" />
              <div className="flex flex-col justify-center ml-2">
                <span className="text-sm font-bold uppercase text-foreground">Flow</span>
                <span className="text-sm font-bold uppercase text-foreground -mt-1">Networks</span>
              </div>
            </a>
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">
              The operating system for intelligent venues, powered by Purple.
            </p>
          </div>

          {footerLinks.map(section => (
            <div key={section.label}>
              <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm mb-4">{section.label}</h4>
              <ul className="space-y-3">
                {section.subLinks?.slice(0, 5).map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Flow Networks. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
             <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><SocialIconX className="h-5 w-5" /></a>
             <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><SocialIconLinkedin className="h-5 w-5" /></a>
             <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><SocialIconWhatsApp className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
