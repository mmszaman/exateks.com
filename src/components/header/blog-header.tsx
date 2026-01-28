'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { blogNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/blog" className="flex items-center space-x-3">
            <Image
              src={siteConfig.logo.header}
              alt={siteConfig.name}
              width={120}
              height={30}
              className="h-7 w-auto"
            />
            <span className="text-sm font-medium text-gray-500">Blog</span>
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
