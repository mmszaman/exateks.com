# Boilerplate Checklist

Quick reference checklist when setting up a new brand using this boilerplate.

## Essential Setup (Must Do)

- [ ] Run setup script: `node scripts/setup-brand.js`
- [ ] Replace logo files in `/public/`
  - [ ] `exateks-logo.png`
  - [ ] `exateks-icon.png`
  - [ ] `exateks-icon-padded.png`
  - [ ] `exateks.ico`
- [ ] Update `tailwind.config.ts` colors
- [ ] Update fonts in `src/app/layout.tsx`
- [ ] Review and customize `src/config/site.ts`
- [ ] Update content in all page files (`src/app/*/page.tsx`)

## SEO & Analytics

- [ ] Set up Google Analytics (add ID to `.env.local`)
- [ ] Set up Google Tag Manager (optional)
- [ ] Create and upload `og-image.jpg` (1200x630px)
- [ ] Verify `robots.txt`
- [ ] Generate sitemap (add sitemap plugin)
- [ ] Update metadata in `src/app/layout.tsx`

## Before Deployment

- [ ] Delete or protect `/design-system` page
- [ ] Test all pages and links
- [ ] Test contact form
- [ ] Verify mobile responsiveness
- [ ] Check all images load correctly
- [ ] Run `npm run build` successfully
- [ ] Set environment variables in hosting platform
- [ ] Update `vercel.json` with correct domain

## Optional Enhancements

- [ ] Set up email service (SendGrid, etc.)
- [ ] Configure newsletter integration
- [ ] Add blog functionality
- [ ] Implement authentication (if needed)
- [ ] Add payment integration (if needed)
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure CDN for assets

## Clean Up

- [ ] Remove Exateks-specific content/images
- [ ] Update README.md
- [ ] Remove this checklist (or keep for future reference)
- [ ] Initialize new git repository
- [ ] Add your team to the project

---

**Estimated Setup Time**: 2-4 hours for basic customization
