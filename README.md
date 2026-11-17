# KUMFU Shop — Next.js Lite

A small React/Next.js storefront preserving the **original KUMFU Shop's hero carousel, wallpaper card components, styling and sample wallpaper data**, extracted from `narayanindustriesin/kumfu-shop`.

## Included
- Original `app/components/hero-carousel.tsx` and `lib/hero.ts` (carousel and theme)
- Original `app/globals.css` and `app/layout.tsx` (global visual language)
- Original wallpaper datasets, section heading, card and access badge, extracted into a **~10 KB** `app/components/marketplace-ui.tsx` (down from ~72 KB)
- New minimal `app/page.tsx` using the original components, with lightweight navigation and footer

## Excluded
Graphic editor, admin panel, CMS, Supabase, R2, ImageKit, checkout backend, unrelated marketplace categories, and all previous static HTML files.

## Run
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Launch limitations
This is **not yet browser-build verified or deployed**. Sample previews are from the original project's catalog, not premium assets. Purchasing is disabled. Replace sample images, configure real products and verified Razorpay/PayPal payment workflow, customer support, privacy/refund/delivery policies and restricted Google Drive fulfillment before taking orders.

## Hosting
Next.js server mode may need a suitable free host. For fully static deployment, assess `output: 'export'` after testing compatibility; avoid billing-required services.
