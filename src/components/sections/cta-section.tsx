'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary-600 to-secondary-600">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg text-primary-100">
            Join hundreds of small businesses leveraging AI to boost productivity
            and drive growth. Let&apos;s discuss how we can help you succeed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
