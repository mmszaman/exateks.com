export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

export interface MegaMenuSection {
  title: string;
  description?: string;
  items: SubMenuItem[];
}

export interface MegaMenuItem {
  label: string;
  href?: string;
  sections?: MegaMenuSection[];
  viewAllLink?: {
    label: string;
    href: string;
  };
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'linkedin' | 'facebook' | 'instagram' | 'mail';
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

// ===== Landing Page Navigation (Mega Menu) =====
export const landingNavItems: MegaMenuItem[] = [
  {
    label: 'Services',
    sections: [
      {
        title: 'AI Implementation',
        description: 'Transform your business with AI',
        items: [
          {
            label: 'AI Strategy & Consulting',
            href: '/services/ai-strategy',
            description: 'Strategic planning & expert guidance',
          },
          {
            label: 'AI Integration',
            href: '/services/ai-integration',
            description: 'Seamless AI system integration',
          },
          {
            label: 'AI Infrastructure',
            href: '/services/ai-infrastructure',
            description: 'Robust AI infrastructure setup',
          },
        ],
      },
      {
        title: 'Automation',
        description: 'Automate and scale efficiently',
        items: [
          {
            label: 'Workflow Automation',
            href: '/services/workflow-automation',
            description: 'Streamline your processes',
          },
          {
            label: 'Business Automation',
            href: '/services/business-automation',
            description: 'End-to-end business automation',
          },
        ],
      },
      {
        title: 'Development',
        description: 'Custom solutions for your business',
        items: [
          {
            label: 'Custom AI Agents',
            href: '/services/ai-agents',
            description: 'Intelligent agents for your needs',
          },
          {
            label: 'Business Solutions',
            href: '/services/business-solutions',
            description: 'Tailored business applications',
          },
          {
            label: 'API & Integration',
            href: '/services/api-integration',
            description: 'Connect & extend your systems',
          },
        ],
      },
      {
        title: 'Infrastructure',
        description: 'Build scalable foundations',
        items: [
          {
            label: 'Cloud Setup',
            href: '/services/cloud-setup',
            description: 'Cloud infrastructure deployment',
          },
          {
            label: 'AI Infrastructure',
            href: '/services/infrastructure',
            description: 'Scalable AI infrastructure',
          },
          {
            label: 'Scaling Support',
            href: '/services/scaling',
            description: 'Performance & growth support',
          },
        ],
      },
    ],
    viewAllLink: {
      label: 'View all services',
      href: '/services',
    },
  },
  {
    label: 'Solutions',
    sections: [
      {
        title: '',
        items: [
          {
            label: 'Exa7i',
            href: '/solutions/exa7i',
            description: 'Enterprise AI & Automation Platform',
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    sections: [
      {
        title: '',
        items: [
          {
            label: 'About',
            href: '/about',
            description: 'Our story & mission',
          },
          {
            label: 'Careers',
            href: '/careers',
            description: 'Join our team',
          },
          {
            label: 'Brands',
            href: '/brands',
            description: 'Our brand portfolio',
          },
          {
            label: 'Contact',
            href: '/contact',
            description: 'Get in touch with us',
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    sections: [
      {
        title: '',
        items: [
          {
            label: 'Case Studies',
            href: '/resources/case-studies',
            description: 'Success stories & results',
          },
          {
            label: 'Blog & Insights',
            href: '/blog',
            description: 'Latest news & articles',
          },
          {
            label: 'FAQs',
            href: '/resources/faqs',
            description: 'Common questions answered',
          },
        ],
      },
    ],
  },
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
    name: 'Facebook',
    href: 'https://facebook.com/exateks',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/exateks',
    icon: 'instagram',
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
