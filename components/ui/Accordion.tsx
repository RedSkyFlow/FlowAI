
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from '../Icons';

type AccordionContextType = {
  activeItem: string | null;
  setActiveItem: (value: string | null) => void;
  type: 'single' | 'multiple';
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion provider');
  }
  return context;
};

export const Accordion: React.FC<{
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  defaultValue?: string;
}> = ({ children, className, type = 'single', defaultValue }) => {
  const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);
  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem, type }}>
      <div className={cn('w-full', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = createContext({});

export const AccordionItem: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({
  children,
  value,
  className,
}) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border-b border-border", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { activeItem, setActiveItem } = useAccordion();
  const parentValue = (React.useContext(AccordionItemContext) as { value: string }).value;
  const isOpen = activeItem === parentValue;

  return (
    <button
      onClick={() => setActiveItem(isOpen ? null : parentValue)}
      className={cn(
        'flex w-full items-center justify-between font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180 py-4',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
};


export const AccordionContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { activeItem } = useAccordion();
  const parentValue = (React.useContext(AccordionItemContext) as { value: string }).value;
  const isOpen = activeItem === parentValue;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, children]);

  return (
    <div
      ref={contentRef}
      style={{ height }}
      className={cn('overflow-hidden transition-all duration-300 ease-in-out', className)}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
