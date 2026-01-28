'use client';

import { AIScoreCalculator } from '@/components/ui/ai-score-calculator';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Eyebrow } from '@/components/ui/typography/eyebrow';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';
import {
  ArrowRight,
  Brain,
  Calculator,
  CircuitBoard,
  Cpu,
  Network,
  Sparkles,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function HeroSection() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <>
      <Section className="relative overflow-hidden bg-white pb-16 pt-28 md:pb-24 md:pt-36 lg:pb-32 lg:pt-44">
        {/* Premium Light AI Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Base gradient - very subtle warm white */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px)
            `,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(rgba(147, 51, 234, 0.8) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Floating orbs - top left */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary-100/60 via-tertiary-100/40 to-transparent blur-3xl" />

          {/* Floating orbs - top right */}
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gradient-to-bl from-secondary-100/50 via-highlight-100/30 to-transparent blur-3xl" />

          {/* Floating orbs - mid left */}
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-tertiary-100/40 to-primary-100/30 blur-3xl" />

          {/* Floating orbs - mid right */}
          <div className="absolute right-1/4 top-1/2 h-56 w-56 rounded-full bg-gradient-to-l from-highlight-100/35 to-secondary-100/25 blur-3xl" />

          {/* Floating orbs - bottom left */}
          <div className="absolute -left-10 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-primary-100/50 via-tertiary-100/30 to-transparent blur-3xl" />

          {/* Floating orbs - bottom right */}
          <div className="absolute -right-10 bottom-1/3 h-64 w-64 rounded-full bg-gradient-to-tl from-secondary-100/45 via-highlight-100/25 to-transparent blur-3xl" />

          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-50/40 via-tertiary-50/30 to-secondary-50/40 blur-3xl" />

          {/* Bottom ambient light */}
          <div className="absolute bottom-0 left-1/2 h-96 w-full -translate-x-1/2 bg-gradient-to-t from-primary-50/30 via-tertiary-50/20 to-transparent" />

          {/* Neural network lines - decorative */}
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-[0.02]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="neural-pattern"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="60" cy="60" r="2" fill="currentColor" />
                <circle cx="0" cy="0" r="1" fill="currentColor" />
                <circle cx="120" cy="0" r="1" fill="currentColor" />
                <circle cx="0" cy="120" r="1" fill="currentColor" />
                <circle cx="120" cy="120" r="1" fill="currentColor" />
                <line
                  x1="60"
                  y1="60"
                  x2="120"
                  y2="0"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="60"
                  x2="0"
                  y2="0"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="60"
                  x2="120"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="60"
                  x2="0"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#neural-pattern)"
              className="text-primary-500"
            />
          </svg>

          {/* Floating AI icons - decorative elements */}
          <div className="absolute left-[8%] top-[18%] hidden animate-pulse lg:block">
            <div className="rounded-xl bg-white p-3 shadow-md shadow-primary-200/50 ring-1 ring-primary-100">
              <Brain className="h-5 w-5 text-primary-400" />
            </div>
          </div>
          <div
            className="absolute right-[12%] top-[22%] hidden animate-pulse lg:block"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="rounded-xl bg-white p-3 shadow-md shadow-secondary-200/50 ring-1 ring-secondary-100">
              <Zap className="h-5 w-5 text-secondary-400" />
            </div>
          </div>
          <div
            className="absolute left-[5%] top-[55%] hidden animate-pulse lg:block"
            style={{ animationDelay: '1s' }}
          >
            <div className="rounded-xl bg-white p-3 shadow-md shadow-tertiary-200/50 ring-1 ring-tertiary-100">
              <Sparkles className="h-5 w-5 text-tertiary-400" />
            </div>
          </div>
          <div
            className="absolute right-[8%] top-[50%] hidden animate-pulse lg:block"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="rounded-xl bg-white p-3 shadow-md shadow-highlight-200/50 ring-1 ring-highlight-100">
              <Cpu className="h-5 w-5 text-highlight-400" />
            </div>
          </div>
          <div
            className="absolute bottom-[20%] left-[12%] hidden animate-pulse lg:block"
            style={{ animationDelay: '2s' }}
          >
            <div className="rounded-xl bg-white p-3 shadow-md shadow-primary-200/50 ring-1 ring-primary-100">
              <Network className="h-5 w-5 text-primary-400" />
            </div>
          </div>
          <div
            className="absolute bottom-[25%] right-[15%] hidden animate-pulse lg:block"
            style={{ animationDelay: '2.5s' }}
          >
            <div className="rounded-xl bg-white p-3 shadow-md shadow-secondary-200/50 ring-1 ring-secondary-100">
              <CircuitBoard className="h-5 w-5 text-secondary-400" />
            </div>
          </div>

          {/* Light gradient mesh overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(243, 232, 255, 0.5), transparent),
              radial-gradient(ellipse 50% 30% at 90% 20%, rgba(250, 232, 255, 0.4), transparent),
              radial-gradient(ellipse 50% 30% at 10% 80%, rgba(238, 242, 255, 0.4), transparent)
            `,
            }}
          />

          {/* Sparkle particles effect */}
          <div className="absolute left-[20%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-primary-300/60" />
          <div
            className="absolute left-[70%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-300/50"
            style={{ animationDelay: '0.3s' }}
          />
          <div
            className="absolute left-[30%] top-[60%] h-1 w-1 animate-pulse rounded-full bg-tertiary-300/60"
            style={{ animationDelay: '0.6s' }}
          />
          <div
            className="absolute left-[80%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-highlight-300/50"
            style={{ animationDelay: '0.9s' }}
          />
          <div
            className="absolute left-[15%] top-[75%] h-1 w-1 animate-pulse rounded-full bg-primary-300/60"
            style={{ animationDelay: '1.2s' }}
          />
          <div
            className="absolute left-[85%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-secondary-300/50"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 flex justify-center md:mb-8">
              <Eyebrow
                variant="badge-gradient"
                size="sm"
                className="animate-fade-in"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary-500" />
                AI-First Software Company
              </Eyebrow>
            </div>

            {/* Hero Title */}
            <Heading
              level="h1"
              variant="hero_title"
              className="mb-6 animate-slide-up text-gray-700 md:mb-8"
            >
              The{' '}
              <span className="text-gradient-animate-flow relative inline-block">
                Blueprint
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-primary-300 via-tertiary-300 to-secondary-300 opacity-70 md:-bottom-2 md:h-1.5" />
              </span>{' '}
              for Your
              <br className="hidden sm:block" />
              <span className="text-gradient-animate-wave relative mt-2 inline-block sm:mt-0">
                AI Evolution
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-secondary-300 via-primary-300 to-highlight-300 opacity-70 md:-bottom-2 md:h-1.5" />
              </span>{' '}
              Starts Here
            </Heading>

            {/* Subheading */}
            <Text
              size="base"
              variant="muted"
              className="mx-auto mb-10 max-w-2xl animate-slide-up md:mb-12 md:text-lg"
              style={{ animationDelay: '100ms' }}
            >
              Unlock the transformative power of AI for your business. From
              intelligent automation to custom AI solutions, we architect your
              path to innovation and sustainable competitive advantage.
            </Text>

            {/* CTA Buttons */}
            <div
              className="flex animate-slide-up flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
              style={{ animationDelay: '200ms' }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() => setIsCalculatorOpen(true)}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your AI Score
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                asChild
                variant="outline-subtle"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-16 animate-fade-in md:mt-20"
              style={{ animationDelay: '400ms' }}
            >
              <Text
                size="sm"
                className="mb-6 uppercase tracking-wider text-gray-400"
              >
                Trusted by forward-thinking businesses
              </Text>
              {/* Infinite scroll container */}
              <div className="relative overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-32" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-32" />

                {/* Scrolling animation container */}
                <div className="group flex">
                  <div className="animate-scroll-rtl flex items-center gap-x-8 py-2 group-hover:[animation-play-state:paused] md:gap-x-16">
                    {[
                      'TechCorp',
                      'InnovateLabs',
                      'FutureScale',
                      'DataDrive',
                      'CloudSync',
                      'NeuralNet',
                    ].map((name) => (
                      <div
                        key={`first-${name}`}
                        className="whitespace-nowrap font-heading text-xl font-bold text-gray-600 transition-colors hover:text-purple-600 md:text-2xl"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div
                    className="animate-scroll-rtl flex items-center gap-x-8 py-2 group-hover:[animation-play-state:paused] md:gap-x-16"
                    aria-hidden="true"
                  >
                    {[
                      'TechCorp',
                      'InnovateLabs',
                      'FutureScale',
                      'DataDrive',
                      'CloudSync',
                      'NeuralNet',
                    ].map((name) => (
                      <div
                        key={`second-${name}`}
                        className="whitespace-nowrap font-heading text-xl font-bold text-gray-600 transition-colors hover:text-purple-600 md:text-2xl"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* AI Score Calculator Modal */}
        <AIScoreCalculator
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
        />
      </Section>
    </>
  );
}
