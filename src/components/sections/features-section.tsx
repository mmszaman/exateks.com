'use client';

import { CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

const features = [
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    description: 'Increase efficiency by up to 70% with intelligent automation and AI-powered workflows.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your data and ensure compliance.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive tasks and focus on what matters most for your business.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Join hundreds of businesses already experiencing transformative growth.',
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Exateks?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We deliver measurable results that drive your business forward
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
