import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter, Outfit, Ubuntu } from 'next/font/google';
import './globals.css';

// Body font - Clean, highly readable
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'block',
  fallback: ['system-ui', 'arial'],
});

// Heading font - Modern geometric sans-serif
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'block',
  fallback: ['system-ui', 'arial'],
});

// Accent font - Friendly, distinctive character
const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'block',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI development',
    'AI infrastructure',
    'AI automation',
    'AI agents',
    'small business software',
    'SMB AI solutions',
    'AI ERP',
    'business automation',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: '/exateks.ico',
    shortcut: '/exateks.ico',
    apple: '/exateks-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@exateks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${ubuntu.variable}`}
      style={{
        fontFamily: `${inter.style.fontFamily}, system-ui, sans-serif`,
      }}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
