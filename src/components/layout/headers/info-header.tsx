'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function InfoHeader() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-sm font-bold text-white">E</span>
            </div>
            <span className="text-base font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
