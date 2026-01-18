import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Server, Rocket, Bot, Zap } from 'lucide-react';
import { LandingLayout } from '@/layouts';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/config/site';

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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              End-to-end AI solutions designed to transform your business operations
              and drive sustainable growth for small and medium-sized businesses.
            </p>
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
                      <CardTitle className="text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col justify-center">
                      <h3 className="mb-4 font-semibold text-gray-900">
                        Key Features:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                            <span className="text-gray-700">{feature}</span>
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

      <Section className="bg-gradient-to-br from-primary-600 to-secondary-600">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg text-primary-100">
              Let&apos;s discuss how our services can help transform your business
            </p>
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
