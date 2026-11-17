# KUMFU Shop — React/Next.js UI edition

This repository now contains a React/Next.js site using the **actual source components** from the original private `narayanindustriesin/kumfu-shop` project.

## Source files reused
- `app/components/hero-carousel.tsx` — original hero carousel, unchanged
- `app/components/marketplace-ui.tsx` — original UI library and wallpaper cards, unchanged
- `lib/hero.ts`, `lib/templates.ts`, `lib/template-ratio.ts` — original helper/data modules
- `app/globals.css` — original styles
- `app/layout.tsx` — original root layout, with updated metadata

The homepage is reduced to wallpaper collections. The original editor, CMS, database, Supabase, R2, ImageKit, admin system, and checkout are not wired into the homepage or installed as dependencies. The shared UI source still contains unused components and links for other product categories; further pruning can follow after visual QA.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Important
- This is not deployed or browser-verified yet.
- Wallpaper images are original project's **sample Unsplash URLs**, not the owner's premium images.
- Purchasing and payment are intentionally disabled until real products, official payment links, delivery terms and policies are configured.
- The old static files `index.html`, `styles.css`, `products.js`, `script.js`, `policies.html` are superseded by Next.js.
