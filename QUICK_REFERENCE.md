# Exateks - Quick Reference Guide

## 🚀 Quick Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

### First Time Setup
```bash
npm install          # Install dependencies
cp .env.example .env.local  # Copy environment file
# Edit .env.local with your settings
npm run dev          # Start development
```

## 📁 Important File Locations

### Configuration
- `config/site.ts` - **MAIN CONTENT CONFIG** (services, products, site info)
- `tailwind.config.ts` - Colors, fonts, theme
- `.env.local` - Environment variables (create from .env.example)

### Pages
- `app/page.tsx` - Homepage
- `app/services/page.tsx` - Services page
- `app/products/page.tsx` - Products page
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

### Components
- `components/ui/*` - Reusable UI components
- `components/layout/*` - Header, Footer
- `components/sections/*` - Homepage sections
- `components/forms/*` - Form components

### Utilities
- `lib/utils.ts` - Helper functions
- `lib/api-client.ts` - API integration
- `hooks/*` - Custom React hooks

## 🎨 Customization Checklist

### Brand Assets
- [ ] Replace logo in `Header` component
- [ ] Add favicon to `app/favicon.ico`
- [ ] Update OG image in `public/images/og-image.jpg`
- [ ] Update apple-touch-icon

### Content
- [ ] Update site name/tagline in `config/site.ts`
- [ ] Update services in `config/site.ts`
- [ ] Update products in `config/site.ts`
- [ ] Update contact info in `config/site.ts`
- [ ] Update social media links in `config/site.ts`
- [ ] Review and update all page content

### Styling
- [ ] Update primary color in `tailwind.config.ts`
- [ ] Update secondary color in `tailwind.config.ts`
- [ ] Customize fonts if needed
- [ ] Review responsive breakpoints

### Configuration
- [ ] Set up `.env.local` with correct values
- [ ] Update metadata in all pages
- [ ] Configure analytics (GA/Plausible)
- [ ] Set up error tracking (Sentry)

### Backend Integration
- [ ] Set `NEXT_PUBLIC_API_URL` in `.env.local`
- [ ] Implement FastAPI contact endpoint
- [ ] Test form submission
- [ ] Set up CORS in FastAPI

## 🔧 Common Tasks

### Add a New Service
1. Open `config/site.ts`
2. Add to `services` array:
```typescript
{
  id: 'unique-id',
  title: 'Service Name',
  description: 'Service description...',
  icon: 'brain', // brain, server, rocket, bot, zap
  features: ['Feature 1', 'Feature 2'],
  slug: 'service-slug',
}
```

### Add a New Product
1. Open `config/site.ts`
2. Add to `products` array:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  tagline: 'Short tagline',
  description: 'Longer description...',
  features: ['Feature 1', 'Feature 2'],
  status: 'launched', // or 'coming-soon'
  slug: 'product-slug',
}
```

### Change Colors
1. Open `tailwind.config.ts`
2. Update `colors` in `theme.extend`:
```typescript
primary: {
  500: '#yourcolor',
  600: '#yourdarkercolor',
  // ... generate full palette
}
```

### Add a New Page
1. Create `app/your-page/page.tsx`
2. Add metadata:
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```
3. Add to navigation in `config/site.ts`

### Modify Navigation
1. Open `config/site.ts`
2. Update `navItems` array:
```typescript
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Your Page', href: '/your-page' },
];
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Via Dashboard
1. Push to GitHub
2. Import on Vercel
3. Add environment variables
4. Deploy

# Via CLI
npm i -g vercel
vercel login
vercel
```

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://api.exateks.com
NEXT_PUBLIC_SITE_URL=https://exateks.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@exateks.com
```

## 🐛 Troubleshooting

### Build Fails
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check ESLint errors
rm -rf .next && npm run build  # Clear cache
```

### Port 3000 in Use
```bash
npx kill-port 3000  # Kill process on port 3000
```

### API Connection Issues
1. Check `NEXT_PUBLIC_API_URL` in `.env.local`
2. Verify FastAPI is running
3. Check CORS settings in FastAPI
4. Review browser console for errors

### Styling Not Working
```bash
npm run dev  # Restart dev server
# Check Tailwind classes are correct
# Verify no CSS syntax errors
```

## 📊 Project Stats

- **Pages**: 5 (Home, Services, Products, About, Contact)
- **Components**: 16+ reusable components
- **Bundle Size**: 102KB shared JS
- **Build Time**: ~5-6 seconds
- **Type Coverage**: 100%

## 🔗 Quick Links

- **Local Dev**: http://localhost:3000
- **Documentation**: [GETTING_STARTED.md](GETTING_STARTED.md)
- **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **Main README**: [README.md](README.md)

## 💡 Tips

1. **Content First**: Update `config/site.ts` before anything else
2. **Test Locally**: Always run `npm run build` before deploying
3. **Type Safety**: Run `npm run type-check` frequently
4. **Format Often**: Use `npm run format` to keep code clean
5. **Git Commits**: Commit frequently with clear messages
6. **Environment**: Never commit `.env.local` to Git

## 📞 Support

Need help? Check these resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- Contact: contact@exateks.com

---

**Last Updated**: 2026-01-18
