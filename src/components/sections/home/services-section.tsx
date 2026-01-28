'use client';

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
import { Bot, Brain, Rocket, Server, Zap } from 'lucide-react';

const iconMap = {
  brain: Brain,
  server: Server,
  rocket: Rocket,
  bot: Bot,
  zap: Zap,
};

export function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading level="h2" className="text-3xl sm:text-4xl">
            Our Services
          </Heading>
          <Text size="lg" variant="muted" className="mt-4">
            Comprehensive AI solutions tailored to transform your business
            operations
          </Text>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
