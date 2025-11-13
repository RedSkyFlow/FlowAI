
import React, { useState, useEffect } from 'react';
import { Menu, FlowLogo } from './Icons';
import { usePathname } from '../hooks/usePathname';
import { cn } from '../lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import { MAIN_NAV_LINKS } from '../constants';
import { type NavLinkWithSubLinks } from '../types';
import { Button } from './ui/Button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/Sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-card-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const DesktopDropdownMenu = ({ isLinkActive }: { isLinkActive: (l: NavLinkWithSubLinks) => boolean }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MAIN_NAV_LINKS.map((link) => (
           link.href === '/' ? null : (
          <NavigationMenuItem key={link.href}>
            {link.subLinks && link.subLinks.length > 0 ? (
              <>
                <NavigationMenuTrigger 
                   className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm", isLinkActive(link) ? "text-accent font-semibold" : "text-foreground/90 hover:text-accent")}
                >
                  <span className="flex items-center gap-2">
                    {link.icon && React.createElement(link.icon, { className: "h-4 w-4" })}
                    {link.label}
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 md:w-[600px] lg:w-[750px] bg-popover/80 backdrop-blur-xl border border-border/50 rounded-lg shadow-2xl">
                     <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                        {Object.entries(
                          link.subLinks.reduce((acc, subLink) => {
                            const category = subLink.category || 'General';
                            if (!acc[category]) {
                              acc[category] = [];
                            }
                            acc[category].push(subLink);
                            return acc;
                          }, {} as Record<string, NavLinkWithSubLinks[]>)
                        ).map(([category, items]) => (
                          <div key={category} className="flex flex-col space-y-2">
                            <h4 className="font-bold text-accent text-sm tracking-wider uppercase px-3 pt-2">{category}</h4>
                            <ul className="space-y-1">
                              {items.map((item) => (
                                <ListItem key={item.href} href={item.href} title={item.label}>
                                  {item.shortDescription}
                                </ListItem>
                              ))}
                            </ul>
                          </div>
                        ))}
                     </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <a href={link.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm", isLinkActive(link) ? "text-accent font-semibold" : "text-foreground/90 hover:text-accent")}>
                   <div className="flex items-center gap-2">
                      {link.icon && React.createElement(link.icon, { className: "h-4 w-4" })}
                      {link.label}
                  </div>
              </a>
            )}
          </NavigationMenuItem>
        )))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileMenu = ({ isLinkActive }: { isLinkActive: (l: NavLinkWithSubLinks) => boolean }) => {
  const renderSubLinks = (subLinks: NavLinkWithSubLinks[], level: number = 0) => {
    return (
      <ul className={cn("space-y-1", level > 0 && "pl-4")}>
        {subLinks.map((subLink) => (
          <li key={subLink.href}>
            {subLink.subLinks && subLink.subLinks.length > 0 ? (
              // FIX: Removed `collapsible` prop which is not supported by the custom Accordion component.
              <Accordion type="single" className="w-full">
                <AccordionItem value={subLink.label} className="border-none">
                  <AccordionTrigger className="py-2 text-md font-medium text-muted-foreground hover:text-foreground hover:no-underline">
                     <span className="flex items-center gap-2">
                        {subLink.icon && React.createElement(subLink.icon, { className: "h-4 w-4" })}
                        {subLink.label}
                      </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    {renderSubLinks(subLink.subLinks, level + 1)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <SheetClose asChild>
                <a href={subLink.href} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground">
                  <span className="flex items-center gap-2">
                    {subLink.icon && React.createElement(subLink.icon, { className: "h-4 w-4" })}
                    {subLink.label}
                  </span>
                </a>
              </SheetClose>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Sheet>
        <SheetTrigger asChild>
           <Button variant="ghost" size="icon" className="text-foreground/90">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-sm bg-card/95 backdrop-blur-xl border-l border-border p-0">
            <nav className="flex flex-col h-full">
                <div className="flex-grow p-6 overflow-y-auto">
                    <Accordion type="multiple" className="w-full">
                        {MAIN_NAV_LINKS.map((link) =>
                            link.subLinks && link.subLinks.length > 0 ? (
                                <AccordionItem key={link.label} value={link.label} className="border-b border-border">
                                    <AccordionTrigger>
                                        <span className={cn("flex items-center gap-2 text-lg font-semibold", isLinkActive(link) ? "text-accent" : "text-foreground/90 hover:text-accent")}>
                                          {link.icon && React.createElement(link.icon, { className: "h-5 w-5" })}
                                          {link.label}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2">
                                        {renderSubLinks(link.subLinks)}
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <SheetClose key={link.href} asChild>
                                    <a href={link.href} className={cn("flex items-center gap-2 text-lg font-semibold py-4 border-b border-border", isLinkActive(link) ? 'text-accent' : 'text-foreground/90 hover:text-accent')}>
                                      <span className="flex items-center gap-2">
                                        {link.icon && React.createElement(link.icon, { className: "h-5 w-5" })}
                                        {link.label}
                                      </span>
                                    </a>
                                </SheetClose>
                            )
                        )}
                    </Accordion>
                </div>
                <div className="mt-auto p-6 border-t border-border">
                    <SheetClose asChild>
                         <Button href="/contact" variant="secondary" glow className="w-full">
                            Contact Sales
                        </Button>
                    </SheetClose>
                </div>
            </nav>
        </SheetContent>
    </Sheet>
  );
};

const AppHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (link: NavLinkWithSubLinks) => {
    if (link.basePath) return pathname.startsWith(link.basePath);
    if (link.href === '/') return pathname === '/';
    return pathname.startsWith(link.href) && link.href !== '/';
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-standard ease-gentle",
        isScrolled 
          ? "bg-card/30 backdrop-blur-md border-b border-border shadow-lg shadow-black/20" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <a href="/" aria-label="Flow Networks Home" title="Flow Networks Home" className="flex items-center group">
            <FlowLogo className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col justify-center ml-2">
              <span className="text-sm font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary-foreground to-accent animate-gradient-move bg-[length:250%_auto]">Flow</span>
              <span className="text-sm font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary-foreground to-accent animate-gradient-move bg-[length:250%_auto] -mt-1">Networks</span>
            </div>
          </a>
        </div>
        
        <nav className="hidden items-center md:flex flex-grow justify-center">
           <DesktopDropdownMenu isLinkActive={isLinkActive} />
        </nav>

        <div className="hidden md:flex flex-shrink-0">
          <Button href="/contact" variant="secondary" size="sm" glow>
              Contact Sales
          </Button>
        </div>

        <div className="md:hidden flex-shrink-0">
          <MobileMenu isLinkActive={isLinkActive} />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
