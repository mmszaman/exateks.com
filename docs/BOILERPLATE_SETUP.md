# Boilerplate Setup Guide

This project is designed to be reused as a boilerplate for multiple brand websites. Follow this guide to customize it for your new brand.

## Quick Start Customization Checklist

### 1. Site Configuration

Edit `src/config/site.ts`:

- [ ] Change `name` to your brand name
- [ ] Update `tagline` and `description`
- [ ] Update `url` to your domain
- [ ] Change `logo` paths
- [ ] Update social media `links`
- [ ] Update `contact` information
- [ ] Customize `navItems` for your navigation
- [ ] Update `services` or `products` array

### 2. Environment Variables

Copy and edit `.env.example` to `.env.local`:

- [ ] `NEXT_PUBLIC_SITE_URL` - Your domain
- [ ] `NEXT_PUBLIC_SITE_NAME` - Brand name
- [ ] `NEXT_PUBLIC_SITE_DESCRIPTION` - SEO description
- [ ] `NEXT_PUBLIC_API_URL` - Your backend API URL
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email
- [ ] `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

### 3. Brand Colors & Theme

Edit `tailwind.config.ts`:

**Option A: Use Different Tailwind Colors**

```typescript
colors: {
  primary: colors.blue,      // Change to your brand color
  secondary: colors.cyan,    // Change accent color
  tertiary: colors.sky,
  highlight: colors.indigo,
}
```

**Option B: Custom Color Palette**

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... add all shades 100-900
  },
}
```

**Quick Theme Presets:**

- **Blue/Corporate**: `primary: colors.blue, secondary: colors.cyan`
- **Green/Eco**: `primary: colors.green, secondary: colors.emerald`
- **Orange/Energy**: `primary: colors.orange, secondary: colors.amber`
- **Red/Bold**: `primary: colors.red, secondary: colors.rose`
- **Purple/Creative** (current): `primary: colors.purple, secondary: colors.fuchsia`

### 4. Typography

Edit `tailwind.config.ts` fontFamily:

```typescript
fontFamily: {
  sans: ['var(--font-inter)', ...],    // Body font
  heading: ['var(--font-outfit)', ...], // Heading font
  accent: ['var(--font-ubuntu)', ...],  // Accent font
}
```

Then update fonts in `src/app/layout.tsx`:

```typescript
import { Inter, Outfit, Ubuntu } from 'next/font/google';
// Change to your preferred Google Fonts
```

### 5. Logo & Branding Assets

Replace files in `public/`:

- [ ] `/exateks-logo.png` - Full logo
- [ ] `/exateks-icon.png` - Icon/favicon
- [ ] `/exateks-icon-padded.png` - Icon with padding
- [ ] `/exateks.ico` - Favicon
- [ ] `/images/og-image.jpg` - Open Graph image (1200x630px)

### 6. Content Pages

Update content in these files:

- [ ] `src/app/page.tsx` - Homepage content
- [ ] `src/app/about/page.tsx` - About page
- [ ] `src/app/services/page.tsx` - Services/offerings
- [ ] `src/app/products/page.tsx` - Products (if applicable)
- [ ] `src/app/contact/page.tsx` - Contact info

### 7. SEO & Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Brand Name',
  description: 'Your brand description',
  // ... update all metadata
};
```

### 8. Package.json

Update `package.json`:

- [ ] Change `name` field
- [ ] Update `version`
- [ ] Update repository URL (if applicable)

### 9. README.md

- [ ] Update README.md with your brand information
- [ ] Change project title and description
- [ ] Update screenshots (if added)

## Advanced Customization

### Custom Components

All UI components are in `src/components/ui/`:

- Button variants and styles
- Form components (Input, Select, Checkbox, etc.)
- Card components
- Typography components

### Layout System

Four layout types available in `src/layouts/`:

1. `base-layout.tsx` - Standard pages
2. `landing-layout.tsx` - Marketing pages
3. `info-layout.tsx` - Content pages
4. `blog-layout.tsx` - Blog posts

### Design System

Access the design system at `/design-system` route to:

- See all components and variants
- Copy component usage examples
- Preview color palette
- Test form elements

**⚠️ IMPORTANT**: Remove or hide the design system page in production:

```typescript
// src/app/design-system/page.tsx
// Delete this file or add authentication
```

## Deployment Checklist

- [ ] Update `vercel.json` with your domain
- [ ] Set environment variables in Vercel/hosting platform
- [ ] Update `robots.txt` with your domain
- [ ] Generate `sitemap.xml`
- [ ] Test all pages and links
- [ ] Verify SEO metadata
- [ ] Check mobile responsiveness
- [ ] Test contact form integration
- [ ] Enable analytics

## Multiple Brands Management

If you're managing multiple brands, create separate repositories:

```bash
# Clone for new brand
git clone exateks-boilerplate brand-name
cd brand-name

# Remove old git history
rm -rf .git
git init

# Follow customization checklist above
```

Or use this as a template repository on GitHub.

## Support & Documentation

- **Design System**: `/design-system` (development only)
- **Component Docs**: Check `src/components/ui/` for component props
- **Layout Docs**: See `docs/LAYOUT_SYSTEM.md`
- **Migration Guide**: See `docs/MIGRATION_SUMMARY.md`

## Recommended Workflow

1. Clone/copy this boilerplate
2. Run `npm install`
3. Complete "Quick Start Customization Checklist"
4. Run `npm run dev` to preview
5. Customize content and components as needed
6. Deploy to Vercel or your preferred platform

---

**Remember**: This is a starting point. Customize freely to match your brand's unique needs!
