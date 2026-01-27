# Prime Care Trading & Services – One Page Site

Modern one-page marketing site built with Next.js (App Router), Tailwind CSS, and GSAP ScrollTrigger for subtle parallax imagery.

## Tech Stack
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger (parallax images)

## Quick Start
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000

## Content to Replace
- All placeholder copy must be replaced with the official text from the Prime Care PDF (About, Services, Why Choose Us, Contact).
- Placeholder images are pulled from Unsplash; swap with final brand images.
- Update brand color hex codes in `tailwind.config.ts` once confirmed.

## Parallax Usage
The reusable `ParallaxImage` component handles ScrollTrigger setup. Provide `imageSrc`, optional `alt`, and `height` props.

## Sections
Hero → About → Services → Why Choose Us → Clients → Contact (single page).
