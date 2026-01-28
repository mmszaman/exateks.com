'use client';

import { SocialIcon } from '@/components/ui/social-icons';
import { landingFooterSections, socialLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

// Company Logo Component
const Logo = () => (
  <Link href="/exa-logo.png" className="group flex items-center">
    <Image
      src={siteConfig.logo.footer}
      alt={siteConfig.name}
      width={160}
      height={40}
      className="h-8 w-auto transition-opacity group-hover:opacity-80 sm:h-10"
    />
  </Link>
);

// Newsletter Subscription Component
const NewsletterForm = () => (
  <div className="mx-auto w-full max-w-md space-y-3 text-center sm:space-y-4 lg:mx-0 lg:text-left">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 sm:text-base">
      Stay Updated
    </h3>
    <p className="text-sm text-gray-400 sm:text-base">
      Get the latest insights on AI and automation delivered to your inbox.
    </p>
    <form
      className="flex flex-col gap-2 sm:flex-row sm:gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full flex-1 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:py-3"
      />
      <button
        type="submit"
        className="w-full whitespace-nowrap rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:from-primary-600 hover:to-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto sm:py-3"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export function FooterMain() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-br from-purple-950 to-indigo-950">
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12 md:pt-16 lg:px-8">
        {/* Top Section - Logo, Tagline, Newsletter */}
        <div className="grid grid-cols-1 gap-8 border-b border-gray-800 pb-8 sm:gap-10 sm:pb-10 md:pb-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Logo & Description */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400 sm:text-base lg:mx-0">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-900 text-purple-300 transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-500/20 hover:to-secondary-500/20 hover:text-white sm:h-10 sm:w-10"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="w-full lg:max-w-md lg:justify-self-end">
            <NewsletterForm />
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 sm:gap-8 sm:py-10 md:py-12 lg:grid-cols-5">
          {landingFooterSections.map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h3 className="mb-3 text-base font-semibold uppercase tracking-wider text-white sm:mb-4 sm:text-base">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white sm:text-base"
                    >
                      <span className="mr-0 hidden h-px w-0 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:mr-2 group-hover:w-3 sm:block" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom Bar - Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-3 border-b border-t border-gray-800 py-4 sm:gap-4 sm:py-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-base md:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-4 sm:text-sm md:gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 transition-colors hover:text-gray-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 transition-colors hover:text-gray-300"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-500 transition-colors hover:text-gray-300"
            >
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-4 text-center text-lg text-gray-600 sm:mt-6 sm:text-lg">
          Empowering businesses with AI-first solutions
        </p>
      </div>
    </footer>
  );
}

export default FooterMain;
