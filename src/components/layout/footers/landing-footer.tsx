import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { landingFooterSections, socialLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  mail: Mail,
};

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-5">
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
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {landingFooterSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
