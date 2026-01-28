'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';
import { CheckCircle, Clock, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    description:
      'Increase efficiency by up to 70% with intelligent automation and AI-powered workflows.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade security measures to protect your data and ensure compliance.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description:
      'Automate repetitive tasks and focus on what matters most for your business.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description:
      'Join hundreds of businesses already experiencing transformative growth.',
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading level="h2" className="text-3xl sm:text-4xl">
            Why Choose Exateks?
          </Heading>
          <Text size="lg" variant="muted" className="mt-4">
            We deliver measurable results that drive your business forward
          </Text>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <feature.icon className="h-8 w-8" />
              </div>
              <Heading level="h3" className="mt-6 text-lg font-semibold">
                {feature.title}
              </Heading>
              <Text size="sm" variant="muted" className="mt-2">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
