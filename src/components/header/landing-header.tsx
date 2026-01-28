'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ctaConfig, landingNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const scrolled = useScroll(20);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setExpandedSection(null);
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  const toggleMobileMenu = (label: string) => {
    setMobileActiveMenu(mobileActiveMenu === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={siteConfig.logo.header}
              alt={siteConfig.name}
              width={140}
              height={35}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {landingNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Nav Item */}
                <button
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[15px] font-semibold tracking-tight transition-all duration-200',
                    activeDropdown === item.label
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  )}
                >
                  {item.label}
                  {item.sections && (
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        activeDropdown === item.label && 'rotate-180 text-primary-500'
                      )}
                    />
                  )}
                  {/* Active indicator line */}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-200',
                      activeDropdown === item.label ? 'w-8' : 'w-0'
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                {item.sections && activeDropdown === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-80 animate-scale-in overflow-hidden rounded-2xl border border-primary-100 bg-gradient-to-b from-white to-primary-50 shadow-[0_20px_50px_-12px_rgba(147,51,234,0.2)]">
                      {/* Dropdown Header Accent */}
                      <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500" />

                      <div className="py-2">
                        {item.sections.map((section, idx) => (
                          <div key={idx}>
                            {section.title ? (
                              /* Collapsible Section */
                              <div className="mx-2 my-1">
                                <button
                                  onClick={() => toggleSection(section.title)}
                                  className={cn(
                                    'flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-200',
                                    expandedSection === section.title
                                      ? 'bg-gradient-to-r from-primary-100 to-primary-50 shadow-sm'
                                      : 'hover:bg-primary-50'
                                  )}
                                >
                                  <div
                                    className={cn(
                                      'text-[15px] font-semibold tracking-tight transition-colors',
                                      expandedSection === section.title
                                        ? 'text-primary-700'
                                        : 'text-gray-700'
                                    )}
                                  >
                                    {section.title}
                                  </div>
                                  <div
                                    className={cn(
                                      'flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200',
                                      expandedSection === section.title
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-gray-100 text-gray-500'
                                    )}
                                  >
                                    <ChevronDown
                                      className={cn(
                                        'h-3.5 w-3.5 transition-transform duration-200',
                                        expandedSection === section.title &&
                                          'rotate-180'
                                      )}
                                    />
                                  </div>
                                </button>
                                {expandedSection === section.title && (
                                  <div className="mt-1 overflow-hidden rounded-xl bg-white py-2 shadow-inner">
                                    <ul className="space-y-0.5 px-2">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.href}>
                                          <Link
                                            href={subItem.href}
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent"
                                          >
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary-300 transition-all duration-200 group-hover:h-2 group-hover:w-2 group-hover:bg-primary-500" />
                                            <span className="text-[14px] font-medium text-gray-600 transition-colors group-hover:text-primary-700">
                                              {subItem.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ) : (
                              /* Regular Items */
                              <ul className="px-2 py-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent"
                                    >
                                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                                      <span className="text-[15px] font-medium text-gray-700 transition-colors group-hover:text-primary-700">
                                        {subItem.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                        {/* View All Link */}
                        {item.viewAllLink && (
                          <div className="mx-2 mt-2 border-t border-primary-100 pt-3">
                            <Link
                              href={item.viewAllLink.href}
                              className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-primary-50 to-white px-4 py-3 transition-all duration-200 hover:from-primary-100"
                            >
                              <span className="text-[15px] font-semibold text-primary-700">
                                {item.viewAllLink.label}
                              </span>
                              <ChevronDown className="h-4 w-4 -rotate-90 text-primary-500 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Button asChild variant="gradient" className="ml-4">
              <Link href={ctaConfig.landing.primary.href}>
                {ctaConfig.landing.primary.text}
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="shrink-0 rounded-lg p-2 transition-colors hover:bg-primary-50 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-slide-down border-t border-primary-100 bg-gradient-to-b from-white to-primary-50 lg:hidden">
          <Container>
            <nav className="max-h-[calc(100vh-5rem)] overflow-x-hidden overflow-y-auto py-5">
              <div className="space-y-2">
                {landingNavItems.map((item) => (
                  <div key={item.label}>
                    {/* Mobile Menu Item */}
                    {item.sections ? (
                      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                        <button
                          onClick={() => toggleMobileMenu(item.label)}
                          className={cn(
                            'flex w-full items-center justify-between px-5 py-4 text-left transition-all duration-200',
                            mobileActiveMenu === item.label
                              ? 'bg-gradient-to-r from-primary-100 to-primary-50'
                              : 'hover:bg-primary-50'
                          )}
                        >
                          <span
                            className={cn(
                              'text-[16px] font-semibold tracking-tight transition-colors',
                              mobileActiveMenu === item.label
                                ? 'text-primary-700'
                                : 'text-gray-800'
                            )}
                          >
                            {item.label}
                          </span>
                          <div
                            className={cn(
                              'flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200',
                              mobileActiveMenu === item.label
                                ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                                : 'bg-gray-100 text-gray-500'
                            )}
                          >
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 transition-transform duration-200',
                                mobileActiveMenu === item.label && 'rotate-180'
                              )}
                            />
                          </div>
                        </button>

                        {/* Mobile Submenu */}
                        {mobileActiveMenu === item.label && (
                          <div className="border-t border-primary-100 bg-gradient-to-b from-primary-50 to-white px-3 py-3">
                            {item.sections.map((section, idx) => (
                              <div
                                key={idx}
                                className={cn(
                                  idx > 0 &&
                                    'mt-4 border-t border-primary-100 pt-4'
                                )}
                              >
                                {section.title && (
                                  <div className="mb-2 flex items-center gap-2 px-3">
                                    <span className="h-1 w-4 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400" />
                                    <span className="text-[13px] font-semibold uppercase tracking-wider text-primary-600">
                                      {section.title}
                                    </span>
                                  </div>
                                )}
                                <ul className="space-y-1">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <Link
                                        href={subItem.href}
                                        className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        <span className="flex h-2 w-2 items-center justify-center">
                                          <span className="h-1.5 w-1.5 rounded-full bg-primary-300 transition-all duration-200 group-hover:h-2 group-hover:w-2 group-hover:bg-primary-500" />
                                        </span>
                                        <span className="text-[15px] font-medium text-gray-600 transition-colors group-hover:text-primary-700">
                                          {subItem.label}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            {item.viewAllLink && (
                              <div className="mt-3 border-t border-primary-100 pt-3">
                                <Link
                                  href={item.viewAllLink.href}
                                  className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-primary-100 to-white px-4 py-3 transition-all duration-200 hover:from-primary-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <span className="text-[15px] font-semibold text-primary-700">
                                    {item.viewAllLink.label}
                                  </span>
                                  <ChevronDown className="h-4 w-4 -rotate-90 text-primary-500 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:bg-primary-50 hover:text-primary-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-6 px-1">
                <Button asChild variant="gradient" className="w-full py-4 text-base shadow-lg shadow-primary-500/25">
                  <Link
                    href={ctaConfig.landing.primary.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ctaConfig.landing.primary.text}
                  </Link>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
