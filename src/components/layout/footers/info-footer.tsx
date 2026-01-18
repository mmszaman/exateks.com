import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/container';

export function InfoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-sm font-bold text-white">E</span>
            </div>
            <span className="text-base font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          <p className="text-sm text-gray-600">
            &copy; {currentYear} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
