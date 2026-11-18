# Medsure — Homepage Redesign

A premium, editorial homepage concept for [Medsure Medicare Insurance Brokers (Cyprus) Ltd](https://www.medsure.com.cy/), designed and built by [Avocadots](https://avocadots.com).

Static HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Run locally

Open `index.html` in a browser, or serve the folder so the paths resolve exactly as they will in production:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Structure

```
index.html            Page markup
css/styles.css        All styles, design tokens at the top (:root)
js/main.js            Interactions and animation logic
assets/favicon.svg
assets/images/        Photography (taken from the client's current site)
```

## Sections

1. Fixed navigation that turns frosted on scroll and hides when you scroll down
2. Hero with a full-bleed photo, a word-by-word headline reveal and count-up stats
3. Specialties: a horizontal card rail with arrow controls and a progress bar
4. Why Medsure: a four-step switcher with image wipe transitions
5. Statement band: story-style autoplay with progress bars
6. Values and a founder note
7. Specialties marquee
8. How it works, in three steps
9. FAQ accordion
10. Closing call to action
11. Footer with the oversized wordmark

## Motion

| Effect | How it works |
| --- | --- |
| Page-load curtain, hero entrance, Ken Burns zoom | CSS keyframes |
| Scroll reveals (fade, blur, image wipes, rules, letters) | `IntersectionObserver` adds `.is-in` to each `[data-reveal]` section. Children with `.rv`, `.rv-img`, `.rv-rule` or `.ltr` animate, staggered by the `--d` custom property |
| Hero and band parallax, specialties rail progress | CSS scroll-driven animations (`animation-timeline`), progressive enhancement: Chrome, Edge and Safari 26+. Other browsers show them static |
| Counters, nav state, switchers, statement autoplay, FAQ | `js/main.js` |

Accessibility:

- Without JavaScript, or with `prefers-reduced-motion: reduce`, every section renders static and fully readable.
- The statement band only autoplays while it is on screen, and pauses when the tab is hidden.
- All controls are real `<button>` and `<a>` elements with labels.

Easing tokens live in `:root` as `--ease-out` and `--ease-io`.

## Before going live

- [ ] Replace `assets/images/*` with the original high-resolution photos. The current files are 1518×730 captures from the live site.
- [ ] Replace the inline SVG logo with the client's vector logo.
- [ ] Have the client approve the new copy: specialty descriptions, "Why Medsure" points, the three steps and the FAQ answers.
- [ ] Confirm the founding year. The current site says both 1983 and 1973; this page avoids stating it.
- [ ] Point the nav, card and footer links (currently `#anchors`) to the real inner pages.
- [ ] Wire up the EN / EL language switch.
- [ ] Fix the current site's footer map link, which points to North Parramatta, Australia instead of Nicosia.
- [ ] Optional: convert the images to AVIF or WebP and add `srcset` variants.

## Fonts

[Inter Tight](https://fonts.google.com/specimen/Inter+Tight) for the interface and [Montserrat](https://fonts.google.com/specimen/Montserrat) for the wordmark, both from Google Fonts.
