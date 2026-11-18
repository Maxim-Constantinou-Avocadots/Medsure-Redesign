# Medsure — Homepage Redesign

A premium, editorial redesign of [Medsure Medicare Insurance Brokers (Cyprus) Ltd](https://www.medsure.com.cy/), designed and built by [Avocadots](https://avocadots.com). It covers all 17 pages of the current English site, at the same URLs.

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
| `npm run check:content -- http://localhost:3000` | Checks every page against the content inventory (run against `npm run start`) |

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about-us-medsure` | About Us hub (+ newsletter sign-up) |
| `/values-vision`, `/history`, `/service-charter`, `/lloyds-corporation`, `/medsure` | About pages |
| `/medical-professional-responsibility` | Professional Liability hub |
| `/dentistry`, `/light-aesthetics`, `/clinics`, `/independent-physicians`, `/paramedicine`, `/additional-professions` | Specialty pages (one shared template) |
| `/careers` | Careers (+ application form with CV upload) |
| `/contact-us` | Contact (+ message form) |
| `/privacy-policy` | Privacy Policy (word for word) |

All copy comes from `docs/content-inventory.md`, a word-for-word capture of the live site. Every content module notes which inventory section it draws from. `npm run check:content` confirms every page still carries its source facts, and that known source errors (e.g. "Taurus", "Easy Aesthetics") never appear.

## Forms

The contact, careers and newsletter forms post to `/api/contact`, `/api/careers` and `/api/newsletter`. Those routes validate the input (with a honeypot against spam) and forward it to **`FORMS_WEBHOOK_URL`** as multipart form data. That URL can be a Make/Zapier webhook, or a small function that emails `info@medsure.com.cy`.

Until `FORMS_WEBHOOK_URL` is set, the routes return 503 and the forms ask visitors to email or call instead, so no enquiry is silently lost.

## Deploying

The project works on **Vercel** with no configuration. Import the repo and deploy.

It also runs on any Node host (`npm run build && npm run start`) or in Docker.

## Project structure

```
src/
  app/
    layout.tsx           Fonts, metadata, skip link, <MotionArm />
    page.tsx             Homepage — assembles the sections in order
    <slug>/page.tsx      One route per page, same URLs as the live site
    api/                 Form endpoints (contact, careers, newsletter)
    sitemap.ts, robots.ts, not-found.tsx
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
    company.ts           Routes, navigation, company details
    home.ts, about.ts, liability.ts, careers.ts, privacy.ts
                         All copy, traced to docs/content-inventory.md
  components/pages/      Page templates (About pages, specialty template, hubs, careers, contact, privacy)
  lib/
    motion.ts            delay(), cx(), prefersReducedMotion()
  assets/
    images/              Photography and the hero poster frame, imported statically
    fonts/               Inter Tight (variable) and Montserrat, self-hosted (OFL)
public/
  video/                 Hero loop: hero-1080 / hero-720, .webm and .mp4
```

### Editing content

All copy lives in `src/content/*.ts`. Change it there and the components update.

When the client moves to a CMS, replace that module with a fetch that returns the same shapes.

## How the motion works

| Effect | Implementation |
| --- | --- |
| Page-load curtain, word-by-word headline, Ken Burns zoom | CSS keyframes. They run before hydration, so there's no JavaScript cost |
| Hero video | `HeroVideo`: a server-rendered poster frame is shown first, and the video is attached after hydration and fades in over it. Phones get 720p and desktops 1080p, as WebM (VP9) with an MP4 (H.264) fallback, 240–450 KB for the WebM files. The clip is a 16 s ping-pong loop with no audio. Reduced-motion and Save-Data users keep the poster |
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

- [ ] Have the client approve the AI-generated hero video (`public/video/`), or swap in their own footage at the same file names.
- [ ] Replace `src/assets/images/*` with the original high-resolution photos. The current files are 1518×730 captures from the live site.
- [ ] Replace `LogoMark` in `src/components/icons.tsx` with the client's vector logo.
- [ ] Have the client review the copy in `src/content/` and the open issues table in `docs/content-inventory.md`, including the "shipping liability" wording on Clinics and "bonuses" on Careers.
- [ ] Set `FORMS_WEBHOOK_URL` so the forms deliver.
- [ ] Add a Cookie Policy and cookie banner (the Privacy Policy refers to one).
- [ ] Confirm the founding history. The current site says "established 1983" and also "since 1973"; this site uses 1983.
- [ ] Add Greek (EL) with Next.js internationalised routing.
- [ ] Set the production domain in `metadataBase` (`src/app/layout.tsx`).
- [ ] Fix the current site's footer map link, which points to North Parramatta, Australia instead of Nicosia.

## Plain HTML version

The original dependency-free HTML/CSS/JS build is in the repo history (commit `3134fb0`).
