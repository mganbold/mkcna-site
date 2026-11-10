# mkcna.org

Website for the **Morin Khuur Center in North America** (MKCNA), built with [Astro](https://astro.build) and Tailwind CSS v4.

## Run it

Requires Node 22.23.4 or newer (Astro 7).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build to dist/
npm run preview   # serve dist/ locally
```

## Where things live

| What | Where |
| --- | --- |
| Palette, fonts, khee-band, nav styles | `src/styles/global.css` |
| Org details, PayPal link, Web3Forms key, socials, nav, **Mongolian script text** | `src/site.config.ts` |
| Shared page shell (header, donate, contact, khee-band, footer) | `src/layouts/Layout.astro` |
| Sections | `src/components/*.astro` |
| Board / executive team | `src/data/leadership.ts` |
| Affiliates (+ logos in `src/assets/affiliates/`) | `src/data/affiliates.ts` |
| Videos (YouTube IDs) | `src/data/videos.ts` |
| Europe / Mongolia partner festivals | `src/data/cycle.ts` |
| 1st–3rd festivals (not yet in the collection) | `src/data/pastFestivals.ts` |
| MKCNA festivals (content collection) | `src/content/festivals/*.md`, schema in `src/content.config.ts` |

## Pages

- `/` – hero, about, festival cycle, leadership
- `/festivals` – archive (collection entries + placeholders)
- `/festivals/[slug]` – one page per file in `src/content/festivals/` (`2026-denver.md` → `/festivals/2026-denver/`)
- `/affiliates`, `/videos`

Donate and Contact appear at the bottom of every page, so `#donate` and `#contact` work everywhere.

## Adding a festival

Copy `src/content/festivals/2026-denver.md`, rename it (the file name becomes the URL), put its images in
`src/assets/festivals/<slug>/`, and edit the frontmatter. The build fails with a clear message if a required
field is missing or `end` is before `start`. The Markdown body is the "Festival highlights" intro.

## Contact form

Set `contact.web3formsAccessKey` in `src/site.config.ts`. Until then the form shows a "not connected yet" message.

## Deployment

`.github/workflows/deploy.yml` builds with the official Astro action and publishes to GitHub Pages
on every push to `main`, once a day (08:17 UTC), and on demand from the Actions tab.

One-time GitHub setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**, then set the
custom domain there. (With Actions deployments, GitHub uses the Settings field; `public/CNAME` is kept as a record.)

DNS for mkcna.org (only at launch; changing it replaces the current site):
- `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `CNAME` for `www`: `<your-github-username>.github.io`
