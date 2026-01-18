'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/config/site';

export function ProductsSection() {
  return (
    <Section id="products" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            AI-powered solutions designed specifically for small businesses
          </p>
        </div>

        <div className="mt-16">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-2">
                <CardHeader className="space-y-4">
                  <div>
                    <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                      {product.status === 'launched' ? '✓ Launched' : 'Coming Soon'}
                    </div>
                    <CardTitle className="text-3xl">{product.name}</CardTitle>
                    <p className="text-lg font-medium text-primary-600">
                      {product.tagline}
                    </p>
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            More innovative products coming soon! Stay tuned for updates.
          </p>
        </div>
      </Container>
    </Section>
  );
}
