# KUMFU Shop — Lite

A lightweight, responsive, static digital-wallpaper storefront built from the visual language of the original `narayanindustriesin/kumfu-shop` project.

## What is retained
- Manrope typography, white surfaces, violet/fuchsia/pink gradients and rounded cards.
- Wallpaper-first catalog and responsive marketing sections.
- Sample wallpaper preview URLs used in the original repository (these are NOT the owner's premium products).

## What is deliberately removed
No React, vinext, Supabase, Cloudflare R2, ImageKit, graphic editor, admin dashboard, CMS, database, cart or payment server. No card or billing details are required for the code itself.

## Preview
Open `index.html` in a browser or run `python -m http.server 8000`.

## Launch checklist (IMPORTANT)
1. Curate real wallpaper ZIPs and upload them privately to Google Drive. Never put premium ZIPs or public Google Drive download links in this repository.
2. Replace all example Unsplash images in `products.js` and the hero image URLs in `styles.css` with your own low-resolution, appropriately licensed previews.
3. Verify the product count, file sizes, quality and prices. These are provisional.
4. Set `orderEmail` in `products.js` to a verified store support address.
5. After products and delivery are ready, change each product `status` from `coming-soon` to `available`. This enables an email **order enquiry**, NOT payment or automated delivery.
6. Create official Razorpay/PayPal payment instructions in the merchant dashboards. Independently verify each successful payment before granting restricted Google Drive access.
7. Replace the provisional policies with accurate refund, privacy, delivery, licensing and contact details. Do not collect payments before this.
8. Publish on a no-card static host such as Cloudflare Pages Free (subject to provider signup requirements/limits) or GitHub Pages if the account permits it; point your existing domain after verifying the live deployment.

## Security
This site does not process payment information and does not claim payments succeeded. Never trust screenshots or buyer-submitted payment claims as proof. Never expose private Google Drive credentials or payment API keys in public JavaScript.

## Architecture
Plain HTML + CSS + vanilla JS. No build step, npm dependencies or environment variables.
