'use client';

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
import { products } from '@/config/site';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function ProductsSection() {
  return (
    <Section id="products" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading level="h2" className="text-3xl sm:text-4xl">
            Our Products
          </Heading>
          <Text size="lg" variant="muted" className="mt-4">
            AI-powered solutions designed specifically for small businesses
          </Text>
        </div>

        <div className="mt-16">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-2">
                <CardHeader className="space-y-4">
                  <div>
                    <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                      {product.status === 'launched'
                        ? '✓ Launched'
                        : 'Coming Soon'}
                    </div>
                    <CardTitle className="text-3xl">{product.name}</CardTitle>
                    <Heading
                      level="h3"
                      className="text-lg font-medium text-primary-600"
                    >
                      {product.tagline}
                    </Heading>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href={product.url || `/products/${product.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex items-center">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary-600" />
                        <Text as="span" className="text-gray-700">
                          {feature}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Text size="sm" variant="muted">
            More innovative products coming soon! Stay tuned for updates.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
