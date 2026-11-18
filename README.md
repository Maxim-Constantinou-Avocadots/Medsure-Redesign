# Medsure Redesign

The English Medsure site is hosted on Wix Headless. The 17 source routes keep the
existing website URLs. Wix Astro handles hosting and visitor authentication
while the redesign's React components and CSS modules provide the interface.

## Development

Use Node.js 24.22.1 or later.

```sh
npm ci
npx wix login
npx wix env pull
npm run dev
npm run typecheck
npm run build
```

- `src/pages/` registers the routes and `src/app/` assembles the React pages.
- `src/components/` contains the redesign components and styles.
- `src/content/` contains editable page copy and public Wix form IDs.
- `docs/content-inventory.md` records the source material and open content decisions.
- Run `npm run check:content -- https://your-wix-deployment` against a release to check the source copy.

## Wix Forms

The homepage and Contact page share the Medsure Contact form. Careers and
Newsletter have their own Wix forms. Schemas and submissions are managed in the
Medsure Wix dashboard. The site renders the live schema and submits through the
Wix Forms integration. Careers currently has no CV field because native file
uploads require a paid Wix plan. Add an upload field to the Wix form after the
plan changes and test it on the live site.

## Releases

The Medsure project is published through the existing [Wix Headless project](https://manage.wix.com/dashboard/3913ac6f-0ec5-4971-8281-d672757373e1). [View the live site](https://medsure-redesign-1-avocadots-1209.wix-site-host.com/).

Keep website code in `main` on GitHub. For a code change, save it in GitHub and publish the same revision through the signed-in Wix project. If an edit starts in Wix, bring that code change into GitHub as part of the release so `main` matches the published site.

Changes to form schemas and other Wix-managed data are made in the Wix dashboard. Form submissions are also stored there.
