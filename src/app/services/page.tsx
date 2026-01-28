import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';
import { services } from '@/config/site';
import { LandingLayout } from '@/layouts';
import { Bot, Brain, Rocket, Server, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const iconMap = {
  brain: Brain,
  server: Server,
  rocket: Rocket,
  bot: Bot,
  zap: Zap,
};

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive AI solutions including AI development, infrastructure, implementation, agent development, and automation services for small businesses.',
};

export default function ServicesPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading level="h1" className="text-4xl sm:text-5xl">
              Our Services
            </Heading>
            <Text size="lg" variant="muted" className="mt-6">
              End-to-end AI solutions designed to transform your business
              operations and drive sustainable growth for small and medium-sized
              businesses.
            </Text>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card
                  key={service.id}
                  className={`overflow-hidden ${
                    index % 2 === 0 ? '' : 'bg-gray-50'
                  }`}
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    <CardHeader className="space-y-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-3xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col justify-center">
                      <Heading level="h3" className="mb-4 font-semibold">
                        Key Features:
                      </Heading>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                            <Text as="span" className="text-gray-700">
                              {feature}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-highlight-700">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <Heading level="h2" className="text-3xl text-white sm:text-4xl">
              Ready to Get Started?
            </Heading>
            <Text size="lg" className="mt-6 text-primary-100">
              Let&apos;s discuss how our services can help transform your
              business
            </Text>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
