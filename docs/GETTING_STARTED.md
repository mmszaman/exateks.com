# Getting Started with Exateks Website

Welcome to the Exateks marketing website! This guide will help you get up and running quickly.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```

Update `.env.local` with your values:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@exateks.com
```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## Project Structure

```
exateks.com/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (Header, Footer)
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── products/            # Products showcase
│   ├── services/            # Services listing
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   ├── container.tsx    # Container wrapper
│   │   ├── input.tsx        # Input field
│   │   ├── textarea.tsx     # Textarea field
│   │   └── section.tsx      # Section wrapper
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Site header/navigation
│   │   └── footer.tsx       # Site footer
│   ├── sections/            # Homepage sections
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   ├── products-section.tsx
│   │   ├── features-section.tsx
│   │   └── cta-section.tsx
│   └── forms/
│       └── contact-form.tsx # Contact form with validation
├── config/
│   └── site.ts              # Site configuration
├── lib/
│   ├── utils.ts             # Utility functions
│   └── api-client.ts        # API client for FastAPI
├── api/
│   └── contact.ts           # Contact API endpoints
├── hooks/                    # Custom React hooks
│   ├── use-scroll.ts
│   ├── use-media-query.ts
│   └── use-intersection-observer.ts
└── types/
    └── index.ts             # TypeScript type definitions
```

## Development Workflow

### Running the Development Server
```bash
npm run dev
```
- Hot reload enabled
- View at http://localhost:3000

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint        # Check for errors
npm run lint:fix    # Auto-fix errors
```

### Formatting
```bash
npm run format      # Format with Prettier
```

### Building for Production
```bash
npm run build       # Create production build
npm run start       # Start production server
```

## Customizing Content

### Update Site Information
Edit [config/site.ts](config/site.ts):
```typescript
export const siteConfig = {
  name: 'Exateks',
  tagline: 'Empowering Small Businesses',
  description: '...',
  // ... more config
};
```

### Add/Edit Services
In [config/site.ts](config/site.ts), update the `services` array:
```typescript
export const services = [
  {
    id: '1',
    title: 'Your Service',
    description: '...',
    icon: 'brain',
    features: ['Feature 1', 'Feature 2'],
    slug: 'your-service',
  },
];
```

### Add/Edit Products
In [config/site.ts](config/site.ts), update the `products` array:
```typescript
export const products = [
  {
    id: '1',
    name: 'Product Name',
    tagline: '...',
    description: '...',
    features: ['...'],
    status: 'launched',
    slug: 'product-slug',
  },
];
```

### Modify Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Your primary color
    // ... other shades
  },
}
```

## Connecting to FastAPI Backend

The project includes a pre-configured API client for your FastAPI backend.

### API Client Usage
```typescript
import { apiClient } from '@/lib/api-client';

// GET request
const response = await apiClient.get('/api/endpoint');

// POST request
const response = await apiClient.post('/api/endpoint', data);
```

### Contact Form Integration
The contact form in [components/forms/contact-form.tsx](components/forms/contact-form.tsx) is ready to connect to your FastAPI backend.

Create this endpoint in your FastAPI app:
```python
@app.post("/api/contact")
async def submit_contact(data: ContactForm):
    # Handle form submission
    return {"message": "Form submitted successfully"}
```

## Deploying to Vercel

### Via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure environment variables
6. Click "Deploy"

### Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

### Environment Variables in Vercel
Add these in the Vercel dashboard:
- `NEXT_PUBLIC_API_URL` - Your production FastAPI URL
- `NEXT_PUBLIC_SITE_URL` - Your production domain
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email

## SEO Optimization

Every page includes:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Proper heading hierarchy

Update SEO in each page's `metadata` export:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};
```

## Performance Tips

1. **Images**: Use Next.js Image component for automatic optimization
2. **Fonts**: Geist Sans and Mono are pre-configured
3. **Code Splitting**: Automatic with App Router
4. **Caching**: Configure in [next.config.ts](next.config.ts)

## Common Tasks

### Adding a New Page
1. Create `app/your-page/page.tsx`
2. Add to navigation in [config/site.ts](config/site.ts)
3. Create metadata export
4. Build your page content

### Creating a New Component
1. Create in `components/ui/` or appropriate folder
2. Export from the file
3. Import where needed

### Adding Custom Hooks
1. Create in `hooks/` folder
2. Follow naming: `use-your-hook.ts`
3. Export the hook function

## Troubleshooting

### Build Errors
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check ESLint errors
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Clear Cache
```bash
rm -rf .next
npm run build
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Vercel Deployment](https://vercel.com/docs)

## Support

For questions or issues:
- Email: contact@exateks.com
- GitHub: [Create an issue](https://github.com/your-repo/issues)

---

Happy coding! 🚀
