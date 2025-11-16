
import React, { useState, createContext, useContext, useRef } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from '../Icons';

type NavigationMenuContextType = {
  openItem: string | null;
  setOpenItem: (item: string | null) => void;
};

const NavigationMenuContext = createContext<NavigationMenuContextType | null>(null);

const useNavigationMenu = () => {
  const context = useContext(NavigationMenuContext);
  if (!context) {
    throw new Error('useNavigationMenu must be used within a NavigationMenuProvider');
  }
  return context;
};

export const NavigationMenu: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  return (
    <NavigationMenuContext.Provider value={{ openItem, setOpenItem }}>
      <nav className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}>
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  );
};

export const NavigationMenuList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <ul className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}>
    {children}
  </ul>
);

export const NavigationMenuItem: React.FC<{ children: React.ReactNode; className?: string, value: string }> = ({ children, className, value }) => {
  const { setOpenItem } = useNavigationMenu();
  const leaveTimeout = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
    }
    setOpenItem(value);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = window.setTimeout(() => {
      setOpenItem(null);
    }, 150); // Hover intent delay
  };
  
  return (
    <li 
      className={cn('relative', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </li>
  );
};

export const navigationMenuTriggerStyle = () =>
  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 hover:text-accent focus:bg-muted/50 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted/50';

export const NavigationMenuTrigger: React.FC<{ children: React.ReactNode; className?: string, value: string }> = ({
  children,
  className,
  value,
}) => {
  const { openItem } = useNavigationMenu();
  const isOpen = openItem === value;
  
  return (
    <div className={cn(navigationMenuTriggerStyle(), className)} data-state={isOpen ? 'open' : 'closed'}>
      {children}
      <ChevronDown
        className={cn("relative top-[1px] ml-1 h-3 w-3 transition duration-200", isOpen && "rotate-180")}
        aria-hidden="true"
      />
    </div>
  );
};

export const NavigationMenuContent: React.FC<{ children: React.ReactNode; className?: string, value: string }> = ({
  children,
  className,
  value
}) => {
  const { openItem } = useNavigationMenu();
  const isOpen = openItem === value;

  return (
    <div 
      className={cn(
        "absolute left-1/2 -translate-x-1/2 top-full w-auto transform-gpu z-20",
        "transition-all duration-standard ease-gentle",
        "mt-1", // small gap from trigger
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};


export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(({ className, children, ...props }, ref) => {
  return (
    <a ref={ref} className={className} {...props}>
      {children}
    </a>
  );
});
NavigationMenuLink.displayName = "NavigationMenuLink";

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
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
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
