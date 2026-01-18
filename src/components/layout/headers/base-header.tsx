'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { baseNavItems, ctaConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function BaseHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            {baseNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href={ctaConfig.base.primary.href}>
                {ctaConfig.base.primary.text}
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
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="flex flex-col space-y-3 border-t py-4 md:hidden">
            {baseNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-full">
              <Link
                href={ctaConfig.base.primary.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaConfig.base.primary.text}
              </Link>
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
