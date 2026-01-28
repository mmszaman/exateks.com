'use client';

import { socialLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

// Social Icons Component
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'linkedin':
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'mail':
      return (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export function FooterLite() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Top Row - Logo & Social on mobile, all three on desktop */}
          <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Logo */}
            <Link href="/" className="group flex flex-shrink-0 items-center">
              <Image
                src={siteConfig.logo.footer}
                alt={siteConfig.name}
                width={120}
                height={30}
                className="h-6 w-auto transition-opacity group-hover:opacity-80 sm:h-7"
              />
            </Link>

            {/* Quick Links - Center on desktop, full width on mobile */}
            <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-4 text-xs sm:order-2 sm:w-auto sm:gap-6 sm:text-sm">
              <Link
                href="/"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Contact
              </Link>
            </nav>

            {/* Social Links */}
            <div className="order-2 flex flex-shrink-0 items-center gap-2 sm:order-3 sm:gap-3">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500 transition-all hover:bg-gray-100 hover:text-primary-600 sm:h-8 sm:w-8 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-gray-200 sm:my-6 dark:bg-gray-800" />

        {/* Bottom Bar - Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <p className="text-center text-[10px] text-gray-500 sm:text-left sm:text-xs dark:text-gray-500">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:gap-4 sm:text-xs">
            <Link
              href="/privacy"
              className="text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            >
              Privacy
            </Link>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <Link
              href="/terms"
              className="text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            >
              Terms
            </Link>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <Link
              href="/cookies"
              className="text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLite;
