'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function InfoHeader() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.logo.header}
              alt={siteConfig.name}
              width={100}
              height={25}
              className="h-6 w-auto"
            />
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
