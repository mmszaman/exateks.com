'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { blogNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/blog" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">
                {siteConfig.name}
              </span>
              <span className="ml-2 text-sm text-gray-500">Blog</span>
            </div>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            {blogNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
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
            {blogNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
