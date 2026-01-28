import { ContactForm } from '@/components/forms/contact-form';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/typography/heading';
import { Text } from '@/components/ui/typography/text';
import { siteConfig } from '@/config/site';
import { LandingLayout } from '@/layouts';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Exateks. We're here to answer your questions and help you get started with AI solutions for your business.",
};

export default function ContactPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading level="h1" className="text-4xl sm:text-5xl">
              Get in Touch
            </Heading>
            <Text size="lg" variant="muted" className="mt-6">
              Have a question or ready to get started? We&apos;d love to hear
              from you. Fill out the form below and we&apos;ll get back to you
              as soon as possible.
            </Text>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <Heading level="h2" className="mb-6 text-2xl">
                  Contact Information
                </Heading>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <Text size="base_medium">Email</Text>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-600 hover:text-primary-600"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <Text size="base_medium">Phone</Text>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-gray-600 hover:text-primary-600"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <Text size="base_medium">Address</Text>
                      <Text variant="muted">{siteConfig.contact.address}</Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6">
                <Heading level="h3" className="mb-3 text-lg font-semibold">
                  Business Hours
                </Heading>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
