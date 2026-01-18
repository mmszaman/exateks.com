import Link from 'next/link';
import { baseFooterSections } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';

export function BaseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-8 py-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              {siteConfig.tagline}
            </p>
          </div>

          {baseFooterSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
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

        <div className="border-t py-4">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
