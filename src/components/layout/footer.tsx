import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { siteConfig, navItems } from '@/config/site';
import { Container } from '@/components/ui/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-gray-600 transition-colors hover:text-primary-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              <li className="text-xs">{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
