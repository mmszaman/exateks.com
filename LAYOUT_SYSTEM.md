# Layout System Documentation

## Overview

The Exateks website uses a flexible multi-layout system that allows different pages to have different header/footer combinations. All navigation menus and links are centrally configured for easy management.

## Available Layouts

### 1. Landing Layout (`LandingLayout`)
**Use for**: Homepage, major landing pages, marketing pages

**Features**:
- Full-featured navigation with all menu items
- Sticky header with transparent-to-solid transition on scroll
- Comprehensive footer with multiple sections
- CTA button in header
- Mobile responsive menu
- Social media links in footer

**Header**: [src/components/layout/headers/landing-header.tsx](src/components/layout/headers/landing-header.tsx)
**Footer**: [src/components/layout/footers/landing-footer.tsx](src/components/layout/footers/landing-footer.tsx)

### 2. Base Layout (`BaseLayout`)
**Use for**: Standard content pages, secondary pages

**Features**:
- Simplified navigation
- Static header with border
- Minimal footer (3 columns)
- Smaller branding
- Clean, focused design

**Header**: [src/components/layout/headers/base-header.tsx](src/components/layout/headers/base-header.tsx)
**Footer**: [src/components/layout/footers/base-footer.tsx](src/components/layout/footers/base-footer.tsx)

### 3. Blog Layout (`BlogLayout`)
**Use for**: Blog pages, article listings, single posts

**Features**:
- Blog-specific navigation
- Search button in header
- Sticky header
- Blog-focused footer sections
- Category/tag navigation

**Header**: [src/components/layout/headers/blog-header.tsx](src/components/layout/headers/blog-header.tsx)
**Footer**: [src/components/layout/footers/blog-footer.tsx](src/components/layout/footers/blog-footer.tsx)

### 4. Info Layout (`InfoLayout`)
**Use for**: Legal pages (Privacy, Terms), simple info pages

**Features**:
- Minimal header with "Back to Home" link
- Ultra-minimal footer (single line)
- Maximum focus on content
- Lightest design

**Header**: [src/components/layout/headers/info-header.tsx](src/components/layout/headers/info-header.tsx)
**Footer**: [src/components/layout/footers/info-footer.tsx](src/components/layout/footers/info-footer.tsx)

## How to Use Layouts

### Basic Usage

```tsx
// In any page component
import { LandingLayout } from '@/layouts';

export default function YourPage() {
  return (
    <LandingLayout>
      {/* Your page content */}
      <Section>
        <h1>Page Title</h1>
      </Section>
    </LandingLayout>
  );
}
```

### Example: Using Different Layouts

```tsx
// Homepage - Use Landing Layout
import { LandingLayout } from '@/layouts';

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
    </LandingLayout>
  );
}
```

```tsx
// Privacy Page - Use Info Layout
import { InfoLayout } from '@/layouts';

export default function PrivacyPage() {
  return (
    <InfoLayout>
      <Container>
        <h1>Privacy Policy</h1>
        {/* content */}
      </Container>
    </InfoLayout>
  );
}
```

```tsx
// Blog Post - Use Blog Layout
import { BlogLayout } from '@/layouts';

export default function BlogPost() {
  return (
    <BlogLayout>
      <article>
        <h1>Post Title</h1>
        {/* content */}
      </article>
    </BlogLayout>
  );
}
```

## Configuration System

All navigation items, links, and footer sections are configured in a central file for easy management.

### Configuration File
[src/config/navigation.ts](src/config/navigation.ts)

### Configurable Elements

#### 1. Navigation Menus

```typescript
// Landing Page Navigation
export const landingNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products', badge: 'New' },  // Optional badge
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Base Layout Navigation (simplified)
export const baseNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// Blog Navigation
export const blogNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Categories', href: '/blog/categories' },
  { label: 'About', href: '/about' },
];
```

#### 2. Footer Sections

```typescript
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
      // ... more links
    ],
  },
  // ... more sections
];
```

#### 3. Social Media Links

```typescript
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
  // ... more social links
];
```

#### 4. CTA Buttons

```typescript
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
```

## Customization Guide

### Adding a New Menu Item

1. Open [src/config/navigation.ts](src/config/navigation.ts)
2. Add to the appropriate nav array:

```typescript
export const landingNavItems: NavItem[] = [
  // ... existing items
  { label: 'New Page', href: '/new-page' },
];
```

3. The change will automatically reflect in the header

### Adding a Badge to Menu Item

```typescript
{ label: 'Products', href: '/products', badge: 'New' }
```

### Changing Footer Links

1. Open [src/config/navigation.ts](src/config/navigation.ts)
2. Edit the appropriate footer sections:

```typescript
export const landingFooterSections: FooterSection[] = [
  {
    title: 'Your Section',
    links: [
      { label: 'Link 1', href: '/link-1' },
      { label: 'Link 2', href: '/link-2' },
    ],
  },
];
```

### Updating Social Links

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'YouTube',  // Add new social platform
    href: 'https://youtube.com/@exateks',
    icon: 'youtube',  // Must add corresponding icon to component
  },
];
```

Note: If adding a new icon, update the `iconMap` in the footer component.

### Changing CTA Text/Links

```typescript
export const ctaConfig = {
  landing: {
    primary: { text: 'Start Free Trial', href: '/trial' },
    secondary: { text: 'Watch Demo', href: '/demo' },
  },
};
```

## Creating a New Layout

If you need a custom layout:

1. **Create Header Component**
   ```bash
   src/components/layout/headers/your-header.tsx
   ```

2. **Create Footer Component**
   ```bash
   src/components/layout/footers/your-footer.tsx
   ```

3. **Create Layout Wrapper**
   ```bash
   src/layouts/your-layout.tsx
   ```

4. **Export from index**
   ```typescript
   // src/layouts/index.ts
   export { YourLayout } from './your-layout';
   ```

5. **Add Navigation Config** (if needed)
   ```typescript
   // src/config/navigation.ts
   export const yourNavItems: NavItem[] = [
     // your nav items
   ];
   ```

## File Structure

```
src/
├── layouts/
│   ├── landing-layout.tsx
│   ├── base-layout.tsx
│   ├── blog-layout.tsx
│   ├── info-layout.tsx
│   └── index.ts
├── components/layout/
│   ├── headers/
│   │   ├── landing-header.tsx
│   │   ├── base-header.tsx
│   │   ├── blog-header.tsx
│   │   └── info-header.tsx
│   └── footers/
│       ├── landing-footer.tsx
│       ├── base-footer.tsx
│       ├── blog-footer.tsx
│       └── info-footer.tsx
└── config/
    └── navigation.ts  ← Configure all menus/links here
```

## Best Practices

1. **One Layout Per Page**: Each page should use exactly one layout
2. **Consistent Structure**: Keep the same layout for related pages
3. **Central Configuration**: Always update navigation in `config/navigation.ts`
4. **Type Safety**: Use TypeScript interfaces for all nav items
5. **Mobile First**: All layouts are responsive by default
6. **Accessibility**: Headers include proper ARIA labels

## Migration from Old Header/Footer

If you have old pages using the deprecated `Header` and `Footer` components:

**Before:**
```tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>{/* content */}</main>
      <Footer />
    </>
  );
}
```

**After:**
```tsx
import { LandingLayout } from '@/layouts';

export default function Page() {
  return (
    <LandingLayout>
      {/* content */}
    </LandingLayout>
  );
}
```

## Quick Reference

| Page Type | Layout | Import |
|-----------|--------|--------|
| Homepage | Landing | `import { LandingLayout } from '@/layouts'` |
| Services | Landing | `import { LandingLayout } from '@/layouts'` |
| Products | Landing | `import { LandingLayout } from '@/layouts'` |
| About | Landing | `import { LandingLayout } from '@/layouts'` |
| Contact | Landing | `import { LandingLayout } from '@/layouts'` |
| Blog Index | Blog | `import { BlogLayout } from '@/layouts'` |
| Blog Post | Blog | `import { BlogLayout } from '@/layouts'` |
| Privacy | Info | `import { InfoLayout } from '@/layouts'` |
| Terms | Info | `import { InfoLayout } from '@/layouts'` |
| Generic Page | Base | `import { BaseLayout } from '@/layouts'` |

## Support

For questions or issues with the layout system:
- Check [src/config/navigation.ts](src/config/navigation.ts) for configuration
- Review layout component files for customization
- All layouts are fully TypeScript typed for autocomplete support

---

**Last Updated**: 2026-01-18
