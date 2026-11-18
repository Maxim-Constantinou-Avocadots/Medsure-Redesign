# Medsure — Homepage Redesign

A premium, editorial homepage for [Medsure Medicare Insurance Brokers (Cyprus) Ltd](https://www.medsure.com.cy/), designed and built by [Avocadots](https://avocadots.com).

**Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript and CSS Modules. There's no UI or animation library: the motion is plain CSS plus a few small client components.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (the homepage is prerendered as static HTML) |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Deploying

The project works on **Vercel** with no configuration. Import the repo and deploy.

It also runs on any Node host (`npm run build && npm run start`) or in Docker.

## Project structure

```
src/
  app/
    layout.tsx           Fonts, metadata, skip link, <MotionArm />
    page.tsx             Homepage — assembles the sections in order
    globals.css          Design tokens (:root) and motion utilities
    icon.svg             Favicon
    opengraph-image.jpg  Social share image
  components/
    Nav.tsx              Fixed nav: frosted on scroll, hides on scroll down
    Hero.tsx             Hero (with CountUp)
    Specialties.tsx      Card rail with arrow controls
    Why.tsx              Four-step "Why Medsure" switcher
    StatementBand.tsx    Story-style autoplaying statements
    About.tsx            Values and founder note
    Marquee.tsx          Specialties ticker
    Steps.tsx            How it works
    Faq.tsx              Accordion
    Closing.tsx          Closing call to action
    Footer.tsx           Footer with the oversized wordmark
    Reveal.tsx           Scroll-reveal wrapper (IntersectionObserver)
    MotionArm.tsx        Turns reveals on after hydration
    Curtain.tsx          Page-load curtain (pure CSS)
    Button.tsx, Logo.tsx, icons.tsx, CountUp.tsx, CurrentYear.tsx
    *.module.css         Styles that sit next to each component
  content/
    site.ts              All homepage copy, images and data
  lib/
    motion.ts            delay(), cx(), prefersReducedMotion()
  assets/
    images/              Photography, imported statically
    fonts/               Inter Tight (variable) and Montserrat, self-hosted (OFL)
```

### Editing content

All copy lives in `src/content/site.ts`: hero, specialties, reasons, statements, values, steps, FAQs, the closing section and contact details. Change it there and the components update.

When the client moves to a CMS, replace that module with a fetch that returns the same shapes.

## How the motion works

| Effect | Implementation |
| --- | --- |
| Page-load curtain, word-by-word headline, Ken Burns zoom | CSS keyframes. They run before hydration, so there's no JavaScript cost |
| Hero counters | `CountUp`: the final value is rendered on the server and animated on the client |
| Scroll reveals | `<Reveal>` adds `.is-in` when a section enters the viewport. Children with `.rv`, `.rv-img`, `.rv-rule` or `.ltr` animate, staggered with `delay()`, which sets `--d` |
| Hero and band parallax, rail progress bar | CSS scroll-driven animations (`animation-timeline`). This is progressive enhancement: Chrome, Edge and Safari 26+ animate, and other browsers show a static version |
| Switchers and statement band | Elements stacked in one grid cell (`.stack`), crossfaded with `.fade-item` / `.is-active` / `.is-before` |
| FAQ | Height animated with `grid-template-rows: 0fr → 1fr` |

### Accessibility and fallbacks

- Scroll reveals only switch on after hydration (`html.js-armed`). Without JavaScript, the page renders fully visible.
- `prefers-reduced-motion: reduce` turns off every animation, the curtain and autoplay.
- The statement band autoplays only while it's on screen, and pauses when the tab is hidden.
- All controls are real `<button>` or `<a>` elements with labels and ARIA state. There's a skip link and visible focus rings.

## Before going live

- [ ] Replace `src/assets/images/*` with the original high-resolution photos. The current files are 1518×730 captures from the live site.
- [ ] Replace `LogoMark` in `src/components/icons.tsx` with the client's vector logo.
- [ ] Have the client approve the new copy in `src/content/site.ts`.
- [ ] Confirm the founding year. The current site says both 1983 and 1973; the copy avoids stating it.
- [ ] Build out the inner pages (About, the specialty pages, Careers, Contact, Privacy) and point the `#anchor` links at them.
- [ ] Add Greek (EL) with Next.js internationalised routing.
- [ ] Set the production domain in `metadataBase` (`src/app/layout.tsx`).
- [ ] Fix the current site's footer map link, which points to North Parramatta, Australia instead of Nicosia.

## Plain HTML version

The original dependency-free HTML/CSS/JS build is in the repo history (commit `3134fb0`).
