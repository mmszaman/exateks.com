'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { landingNavItems, ctaConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(20);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {landingNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-700">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            <Button asChild>
              <Link href={ctaConfig.landing.primary.href}>
                {ctaConfig.landing.primary.text}
              </Link>
            </Button>
          </nav>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <Container>
            <nav className="flex flex-col space-y-4 py-6">
              {landingNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-700">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link
                  href={ctaConfig.landing.primary.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaConfig.landing.primary.text}
                </Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
