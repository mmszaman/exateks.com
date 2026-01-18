import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { LandingLayout } from '@/layouts';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/config/site';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Discover Exa7i, our AI-first ERP solution for small businesses, and explore our upcoming AI-powered products designed to boost productivity.',
};

export default function ProductsPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              AI-powered solutions built specifically for small and medium-sized
              businesses to streamline operations and drive growth.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="space-y-12">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border-2 border-primary-100">
                <div className="grid gap-8 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
                          {product.status === 'launched' ? '✓ Now Available' : 'Coming Soon'}
                        </div>
                      </div>
                      <CardTitle className="text-4xl">{product.name}</CardTitle>
                      <p className="text-xl font-medium text-primary-600">
                        {product.tagline}
                      </p>
                      <CardDescription className="text-base leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                  </div>

                  <CardContent className="flex flex-col justify-center lg:col-span-2">
                    <h3 className="mb-6 text-lg font-semibold text-gray-900">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button asChild className="w-full">
                        <Link href={product.url || `/products/${product.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              More Products in Development
            </h2>
            <p className="mt-4 text-gray-600">
              We&apos;re constantly innovating to bring you more AI-powered solutions.
              Stay tuned for exciting announcements!
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/contact">Get Notified</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
