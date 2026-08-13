/**
 * RevealOnScroll Component
 * Handles the scroll reveal animation - matches original exactly
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RevealOnScroll = React.forwardRef<HTMLDivElement, RevealOnScrollProps>(
  ({ children, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      // Check if reduced motion is preferred
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={(node) => {
          // Handle both refs
          (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn(
          'opacity-0 translate-y-[14px]',
          'transition-all duration-700 ease-out',
          isVisible && '!opacity-100 !translate-y-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
RevealOnScroll.displayName = 'RevealOnScroll';

export { RevealOnScroll };
