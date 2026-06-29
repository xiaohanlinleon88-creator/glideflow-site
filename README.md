# Glideflow Static Site

## Key assumptions

- This repository is a static Astro site only. There is no backend, auth, database, payment flow, or production deployment logic.
- Brand, domain, API base URL, support email, model IDs, pricing, and comparison data are centralized in `src/config/site.ts`.
- Model prices are launch placeholders until the final provider list is confirmed.
- Competitor comparison prices use public list-price references captured on 2026-06-29 and should be updated in `src/config/site.ts` before launch.
- CTA links point to `https://app.glideflowai.com`, the new-api dashboard for registration, login, key creation, and credits.
- Data and privacy copy assumes requests pass through the Glideflow gateway and are forwarded to the selected upstream model provider.
- No analytics or tracking scripts are included.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321` for the landing page and `http://localhost:4321/docs` for the documentation.

## Build

```bash
npm run build
npm run preview
```

## Update site data

Edit `src/config/site.ts`. The landing page, documentation examples, model tables, pricing tables, and Starlight title all read from this file.
