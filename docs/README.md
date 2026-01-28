# Exateks - AI-First Software Company

> Empowering Small Businesses with AI Innovation

A modern, production-ready marketing website built with Next.js 15, TypeScript, and Tailwind CSS. This is the official website for Exateks, an AI-first software company providing AI development, infrastructure, implementation, agent development, and automation services.

## Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Production-Ready**: Optimized for Vercel deployment with proper SEO and metadata
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Performance Optimized**: Image optimization, code splitting, and fast page loads
- **FastAPI Integration**: Ready for backend API integration
- **Type-Safe**: Full TypeScript support with strict type checking
- **Scalable Architecture**: Well-organized folder structure for easy maintenance

## Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with class-variance-authority
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Code Quality**: ESLint, Prettier
- **Deployment**: Vercel (optimized)

## Project Structure

```
exateks.com/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── products/            # Products page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections (Hero, Services, etc.)
│   └── ui/                 # Reusable UI components
├── config/                  # Configuration files
│   └── site.ts             # Site configuration and content
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and API client
├── api/                     # API integration layer
├── types/                   # TypeScript type definitions
└── public/                  # Static assets

```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd exateks.com
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Backend Integration

The project is configured to work with a FastAPI backend. Update the `NEXT_PUBLIC_API_URL` in your `.env.local` file to point to your FastAPI server.

API integration example:
```typescript
import { contactApi } from '@/api/contact';

// Submit contact form
const response = await contactApi.submitContactForm(formData);
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

The project is optimized for Vercel with automatic builds and deployments.

### Manual Deployment

```bash
npm run build
npm run start
```

## Customization

### Site Configuration

Edit `config/site.ts` to update:
- Site metadata
- Navigation items
- Services
- Products
- Contact information

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`:
- Colors
- Fonts
- Spacing
- Animations

### Content

Update content in:
- `app/*/page.tsx` - Page content
- `components/sections/*` - Section components
- `config/site.ts` - Site-wide content

## SEO

Each page includes proper metadata:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured data ready

## Performance

- Automatic image optimization
- Code splitting and lazy loading
- Font optimization with Geist
- Minimal bundle size
- Fast Time to First Byte (TTFB)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Exateks. All rights reserved.

## Contact

- Website: [https://exateks.com](https://exateks.com)
- Email: contact@exateks.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Exateks
# exateks.com
