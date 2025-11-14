
import React from 'react';
import { cn } from '../../lib/utils';

// FIX: Changed props to extend a generic HTMLAttributes<HTMLElement> to support both button and anchor elements.
// This resolves type conflicts for event handlers and other attributes.
interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  glow?: boolean;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// FIX: Changed the forwarded ref's element type to HTMLElement, a safe common ancestor for buttons and anchors.
const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, href, children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-standard ease-gentle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

    const variantClasses = {
      primary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      secondary: 'bg-transparent text-accent border border-accent/30 hover:bg-accent/10 hover:border-accent/50',
      ghost: 'hover:bg-muted hover:text-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    };

    const sizeClasses = {
      sm: 'h-9 px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8',
      icon: 'h-10 w-10',
    };
    
    const glowClasses = glow ? {
        primary: 'shadow-glow-secondary hover:shadow-glow-secondary-strong',
        secondary: 'hover:shadow-glow-accent',
        ghost: '',
        link: '',
    }[variant] : '';

    const Comp: React.ElementType = href ? 'a' : 'button';

    return (
      <Comp
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], glowClasses, className)}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
