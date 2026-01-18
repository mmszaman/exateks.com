'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 md:pt-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
            <Sparkles className="h-4 w-4" />
            AI-First Software Company
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Small Businesses
            <span className="mt-2 block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              with AI Innovation
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            Transform your business with cutting-edge AI development, infrastructure,
            and automation solutions. We help SMBs boost productivity and accelerate
            growth through modern technology adoption.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="mt-1 text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="mt-1 text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="mt-1 text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-secondary-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </Section>
  );
}
