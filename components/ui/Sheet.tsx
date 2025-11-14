
import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

type SheetContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  side: 'top' | 'bottom' | 'left' | 'right';
};

const SheetContext = createContext<SheetContextType | null>(null);

const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) throw new Error('useSheet must be used within a Sheet');
  return context;
};

export const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const side = 'right'; // Hardcoded for this use-case

  // Close sheet on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return <SheetContext.Provider value={{ isOpen, setIsOpen, side }}>{children}</SheetContext.Provider>;
};

export const SheetTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => {
  const { setIsOpen } = useSheet();
  if (asChild) {
    // FIX: Added a type assertion to `children` to fix cloning error with `asChild`.
    // This ensures TypeScript allows adding props like `onClick` to the cloned element.
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: () => setIsOpen(true),
      });
    }
    return <>{children}</>;
  }
  return <button onClick={() => setIsOpen(true)}>{children}</button>;
};

export const SheetClose: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => {
  const { setIsOpen } = useSheet();
  if (asChild) {
    // FIX: Added a type assertion to `children` to fix cloning errors with `asChild`.
    // This allows safely accessing the child's props and cloning the element.
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent) => {
          const childOnClick = children.props.onClick;
          if(childOnClick) childOnClick(e);
          setIsOpen(false);
        }
      });
    }
     return <>{children}</>;
  }
  return <button onClick={() => setIsOpen(false)}>{children}</button>;
};

export const SheetContent: React.FC<{ children: React.ReactNode; className?: string; side?: 'top' | 'bottom' | 'left' | 'right' }> = ({
  children,
  className,
  side: propSide,
}) => {
  const { isOpen, setIsOpen, side: contextSide } = useSheet();
  const side = propSide || contextSide;

  const sideClasses = {
    top: 'inset-x-0 top-0 border-b data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0',
    bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0 sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 sm:max-w-sm',
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />
      {/* Content */}
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className={cn(
          'fixed z-50 gap-4 bg-card p-6 shadow-lg transition ease-in-out duration-300',
          sideClasses[side],
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
