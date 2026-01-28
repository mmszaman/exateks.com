import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Award, Users } from 'lucide-react';
import { LandingLayout } from '@/layouts';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Exateks, an AI-first software company dedicated to empowering small businesses through innovative AI solutions and modern technology.',
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading level="h1" className="text-4xl sm:text-5xl">
              About Exateks
            </Heading>
            <Text size="lg" variant="muted" className="mt-6">
              We&apos;re on a mission to democratize AI technology and make it
              accessible to small and medium-sized businesses worldwide.
            </Text>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading level="h2" className="text-3xl">Our Story</Heading>
            <div className="mt-6 space-y-4">
              <Text size="lg" variant="muted">
                Exateks was founded with a clear vision: to empower small businesses
                with the same AI capabilities that large enterprises enjoy. We believe
                that every business, regardless of size, deserves access to cutting-edge
                technology that can transform their operations and drive growth.
              </Text>
              <Text size="lg" variant="muted">
                As an AI-first software company, we specialize in AI development, AI
                infrastructure, AI implementation, agent development, and AI automation.
                Our team of experts works tirelessly to deliver solutions that are not
                only powerful but also accessible and easy to implement.
              </Text>
              <Text size="lg" variant="muted">
                Our flagship product, Exa7i, represents our commitment to creating
                practical, AI-powered tools that address real business challenges. It&apos;s
                a compact, one-stop ERP solution designed specifically for SMBs, and
                it&apos;s just the beginning of our product journey.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription className="text-base">
                  To empower small businesses with AI-driven solutions that boost
                  productivity, streamline operations, and accelerate growth through
                  modern technology adoption.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-600 text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="text-base">
                  To become the leading AI-first software company for small businesses
                  worldwide, making advanced AI technology accessible, affordable, and
                  easy to implement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Heading level="h2" className="mb-12 text-center text-3xl">
            Our Values
          </Heading>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Award className="h-8 w-8" />
              </div>
              <Heading level="h3" className="mt-6 text-xl">
                Excellence
              </Heading>
              <Text variant="muted" className="mt-2">
                We strive for excellence in everything we do, delivering solutions
                that exceed expectations.
              </Text>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Users className="h-8 w-8" />
              </div>
              <Heading level="h3" className="mt-6 text-xl">
                Customer-Centric
              </Heading>
              <Text variant="muted" className="mt-2">
                Our clients&apos; success is our success. We put their needs at the
                heart of everything we create.
              </Text>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Target className="h-8 w-8" />
              </div>
              <Heading level="h3" className="mt-6 text-xl">
                Innovation
              </Heading>
              <Text variant="muted" className="mt-2">
                We embrace innovation and continuously explore new ways to solve
                business challenges.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-highlight-700">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <Heading level="h2" className="text-3xl sm:text-4xl text-white">
              Join Us on Our Journey
            </Heading>
            <Text size="lg" className="mt-6 text-primary-100">
              Let&apos;s work together to transform your business with AI
            </Text>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
