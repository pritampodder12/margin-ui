/**
 * Navbar Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  links?: NavLink[];
  showCTA?: boolean;
  rightContent?: React.ReactNode;
}

const defaultLinks: NavLink[] = [
  { label: 'Product', href: '#product' },
  { label: 'ATS score', href: '#ats' },
  { label: 'Templates', href: '#templates' },
  { label: 'How it works', href: '#how' },
];

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ links = defaultLinks, showCTA = true, rightContent }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-50',
          'bg-[rgba(246,244,238,0.88)]',
          'backdrop-blur-sm',
          'border-b border-[var(--rule)]'
        )}
      >
        <nav
          className={cn(
            'flex items-center justify-between',
            'max-w-[1180px] mx-auto',
            'py-[18px] px-8'
          )}
        >
          <Logo href="/" />

          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[0.92rem] text-[var(--ink-soft)]',
                  'transition-colors duration-200',
                  'hover:text-[var(--ink)]'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {rightContent || (
            showCTA && (
              <Link to="/dashboard">
                <Button variant="primary" size="sm">
                  Try Margin free
                </Button>
              </Link>
            )
          )}
        </nav>
      </header>
    );
  }
);
Navbar.displayName = 'Navbar';

// Dashboard variant navbar
const DashboardNavbar = React.forwardRef<
  HTMLElement,
  {
    links?: NavLink[];
  }
>((_props, ref) => {
  const location = useLocation();

  const dashboardLinks: NavLink[] = [
    { label: 'Dashboard', href: '/dashboard', isActive: true },
    { label: 'Templates', href: '/templates' },
    { label: 'Editor', href: '/editor' },
  ];

  return (
    <header
      ref={ref}
      className={cn(
        'sticky top-0 z-50',
        'bg-[rgba(246,244,238,0.9)]',
        'backdrop-blur-sm',
        'border-b border-[var(--rule)]'
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between',
          'max-w-[1180px] mx-auto',
          'py-4 px-8'
        )}
      >
        <Logo href="/" />

        <div className="flex gap-[30px] items-center max-md:hidden">
          {dashboardLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-[0.9rem] text-[var(--ink-soft)]',
                'pb-1 border-b-2 border-transparent',
                'transition-all duration-200',
                'hover:text-[var(--ink)]',
                isActive &&
                  '!text-[var(--ink)] border-[var(--red)] font-semibold'
              )}
            >
              {link.label}
            </Link>
          )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Upload resume
          </Button>
          <div className="w-[34px] h-[34px] rounded-full bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-['JetBrains_Mono'] text-[0.72rem] font-semibold">
            JA
          </div>
        </div>
      </nav>
    </header>
  );
});
DashboardNavbar.displayName = 'DashboardNavbar';

export { Navbar, DashboardNavbar };
