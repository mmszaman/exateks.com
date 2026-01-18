export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

// ===== Landing Page Navigation =====
export const landingNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products', badge: 'New' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ===== Base Layout Navigation (Simple) =====
export const baseNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// ===== Blog Layout Navigation =====
export const blogNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Categories', href: '/blog/categories' },
  { label: 'About', href: '/about' },
];

// ===== Info Page Navigation (Minimal) =====
export const infoNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Back', href: '/' },
];

// ===== Social Media Links =====
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/exateks',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/exateks',
    icon: 'twitter',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/exateks',
    icon: 'github',
  },
  {
    name: 'Email',
    href: 'mailto:contact@exateks.com',
    icon: 'mail',
  },
];

// ===== Footer Sections for Landing Page =====
export const landingFooterSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Development', href: '/services#ai-development' },
      { label: 'AI Infrastructure', href: '/services#ai-infrastructure' },
      { label: 'AI Automation', href: '/services#ai-automation' },
      { label: 'Agent Development', href: '/services#agent-development' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Exa7i ERP', href: '/products/exa7i' },
      { label: 'All Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request Demo', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

// ===== Footer Sections for Base Layout (Minimal) =====
export const baseFooterSections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

// ===== Footer Sections for Blog Layout =====
export const blogFooterSections: FooterSection[] = [
  {
    title: 'Blog',
    links: [
      { label: 'All Posts', href: '/blog' },
      { label: 'Categories', href: '/blog/categories' },
      { label: 'Tags', href: '/blog/tags' },
      { label: 'Authors', href: '/blog/authors' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

// ===== CTA Configuration =====
export const ctaConfig = {
  landing: {
    primary: { text: 'Get Started', href: '/contact' },
    secondary: { text: 'Learn More', href: '/services' },
  },
  base: {
    primary: { text: 'Contact Us', href: '/contact' },
  },
  blog: {
    primary: { text: 'Subscribe', href: '/blog/subscribe' },
  },
};
