
import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from '../Icons';

export const NavigationMenu: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <nav className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}>
    {children}
  </nav>
);

export const NavigationMenuList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <ul className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}>
    {children}
  </ul>
);

export const NavigationMenuItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <li className={cn('group relative', className)}>{children}</li>
);

export const navigationMenuTriggerStyle = () =>
  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 hover:text-accent focus:bg-muted/50 focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50';

export const NavigationMenuTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <button className={cn(navigationMenuTriggerStyle(), 'group', className)}>
    {children}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
      aria-hidden="true"
    />
  </button>
);

export const NavigationMenuContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn(
      "absolute left-0 top-full w-auto transform-gpu",
      "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
      "invisible group-hover:visible group-focus-within:visible",
      "translate-y-4 group-hover:translate-y-2 group-focus-within:translate-y-2",
      "transition-all duration-standard ease-gentle",
      "mt-2",
       className
    )}>
    {children}
  </div>
);

export const NavigationMenuLink: React.FC<{ asChild?: boolean; children: React.ReactNode; className?: string }> = ({
  asChild,
  children,
  className,
}) => {
  if (asChild) {
    if (React.isValidElement(children)) {
      // FIX: Add type assertion to fix cloning error with `asChild`.
      // `React.isValidElement` alone is not enough to narrow `children.props` from `unknown`.
      // Casting to `React.ReactElement<any>` ensures props can be read and extended.
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cn(child.props.className, className),
      });
    }
  }
  return <a className={className}>{children}</a>;
};