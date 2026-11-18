# Medsure Redesign

The English Medsure site is hosted on Wix Headless. The 17 source routes keep the
existing website URLs. Wix Astro handles hosting and visitor authentication
while the redesign's React components and CSS modules provide the interface.

## Development

Use Node.js 24.22.1 or later.

```sh
npm ci
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

`main` is the production branch. GitHub Actions builds pushes to `main` and
releases them to the site identified in `wix.config.json`. Add a Wix deployment
API key as the GitHub Actions secret `WIX_API_KEY` and run **Deploy Medsure to
Wix** manually to verify the first automated release. The workflow fails at the
release step when the key is missing. Keep the key out of the repository.

For local preview, use `npm run build` then `npm run preview` with an
authenticated Wix CLI. Deploy the hosted branch through the release workflow so
GitHub remains the source for website code.
