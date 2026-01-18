export const siteConfig = {
  name: 'Exateks',
  tagline: 'Empowering Small Businesses',
  description:
    'AI-First Software Company providing AI development, AI infrastructure, and AI implementation services. Specializing in agent development and AI automation for SMBs.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://exateks.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/exateks',
    linkedin: 'https://linkedin.com/company/exateks',
    github: 'https://github.com/exateks',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@exateks.com',
    phone: '+1 (555) 123-4567',
    address: 'Your Address Here',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: '1',
    title: 'AI Development',
    description:
      'Custom AI solutions tailored to your business needs, from machine learning models to intelligent automation systems.',
    icon: 'brain',
    features: [
      'Custom ML Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
    slug: 'ai-development',
  },
  {
    id: '2',
    title: 'AI Infrastructure',
    description:
      'Scalable and robust AI infrastructure setup for seamless integration and optimal performance.',
    icon: 'server',
    features: [
      'Cloud Infrastructure',
      'Model Deployment',
      'MLOps Pipeline',
      'Monitoring & Scaling',
    ],
    slug: 'ai-infrastructure',
  },
  {
    id: '3',
    title: 'AI Implementation',
    description:
      'End-to-end AI implementation services to transform your business operations and drive growth.',
    icon: 'rocket',
    features: [
      'Strategy Consulting',
      'System Integration',
      'Training & Support',
      'Performance Optimization',
    ],
    slug: 'ai-implementation',
  },
  {
    id: '4',
    title: 'Agent Development',
    description:
      'Intelligent AI agents that automate complex workflows and enhance customer interactions.',
    icon: 'bot',
    features: [
      'Conversational AI',
      'Task Automation',
      'Multi-Agent Systems',
      'Custom Workflows',
    ],
    slug: 'agent-development',
  },
  {
    id: '5',
    title: 'AI Automation',
    description:
      'Streamline your business processes with intelligent automation powered by cutting-edge AI technology.',
    icon: 'zap',
    features: [
      'Process Automation',
      'Document Processing',
      'Data Extraction',
      'Workflow Optimization',
    ],
    slug: 'ai-automation',
  },
];

export const products = [
  {
    id: '1',
    name: 'Exa7i',
    tagline: 'AI-First ERP for Small Businesses',
    description:
      'A compact, one-stop AI-powered ERP application designed specifically for SMBs to manage operations, finances, inventory, and customer relationships seamlessly.',
    features: [
      'AI-Powered Insights',
      'Inventory Management',
      'Financial Tracking',
      'CRM Integration',
      'Automated Reporting',
      'Multi-User Support',
    ],
    status: 'launched' as const,
    url: '/products/exa7i',
    slug: 'exa7i',
  },
];
