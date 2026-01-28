'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-highlight-700">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">
          <Heading level="h2" className="text-3xl text-white sm:text-4xl">
            Ready to Transform Your Business?
          </Heading>
          <Text size="lg" className="mt-6 text-primary-100">
            Join hundreds of small businesses leveraging AI to boost
            productivity and drive growth. Let&apos;s discuss how we can help
            you succeed.
          </Text>
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
