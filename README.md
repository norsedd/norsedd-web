# norsedd-web

Static marketing site for [NORSE Diamond Drilling](https://www.norsedd.com) and its
subsidiary X Drill AB. Multilingual (EN / SV / NO / FI), content-in-repo, deployed to
Vercel.

## Stack

- **Astro 6** — static site generator, zero JS by default
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **MDX** for long-form content
- **Fontsource** self-hosted variable fonts (Inter + Space Grotesk)
- **next-intl-free**: Astro's built-in i18n routing with a custom UI-strings module
- **Vercel** hosting target

## Local development

Requirements: Node.js ≥ 22, npm ≥ 10. (The project was scaffolded on Node 24.)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # preview the built site
npx astro check   # type-check .astro + .mdx files
```

## Project layout

```
src/
├── content/                  # MDX/JSON content (organized by collection and locale)
│   ├── services/{locale}/*.mdx
│   ├── team/{locale}/*.mdx
│   ├── case-studies/{locale}/*.mdx
│   ├── equipment/{locale}/*.mdx
│   ├── pages/{locale}/*.mdx
│   └── _translations.json    # per-entry translation status
├── content.config.ts         # Zod schemas for each collection
├── i18n/
│   ├── locales.ts            # Locale constants + helpers
│   └── ui.ts                 # UI strings per locale (nav, CTAs, footer, ...)
├── layouts/BaseLayout.astro  # HTML shell + <head> + fonts + global CSS
├── pages/
│   ├── index.astro           # EN home (default locale is unprefixed)
│   └── [lang]/index.astro    # SV / NO / FI homes
├── styles/global.css         # Tailwind import + @theme brand tokens
└── components/               # (added in subsequent commits)
public/
├── logos/                    # NORSE logo variants
└── robots.txt
```

## Brand tokens

Authoritative source is `NORSE Visual Identity / Color codes.pdf` (Nov 2022). Encoded in
`src/styles/global.css` under `@theme {}`:

| Token | Hex | Usage |
|---|---|---|
| `safety-orange` | `#FF6B00` | Primary accent — CTAs, active nav, highlights |
| `safety-orange-80` | `#FF8933` | Hover / secondary state |
| `safety-orange-50` | `#FFB580` | Tint for backgrounds, gentle emphasis |
| `rocky` | `#2A2A2A` | Primary dark surface (not pure black) |
| `rocky-80` | `#555555` | Body text on light, dividers |
| `rocky-50` | `#959595` | De-emphasized text |
| `aquatic` | `#196B66` | **Reserved** for Sustainability & HSEQ accents |
| `aquatic-80` / `aquatic-50` | `#478985` / `#8CB5B3` | Aquatic tints |
| `light-grey` | `#E2E2E2` | Subtle backgrounds, input borders |

These emit as Tailwind utilities automatically — e.g. `bg-safety-orange`, `text-rocky-80`.

**Typography.** Display: *Space Grotesk* (industrial feel, tight spacing). Body: *Inter*
(maximum legibility, strong multilingual coverage including Finnish glyphs). Both loaded
self-hosted via Fontsource variable fonts — no Google Fonts network call. If you want to
change the pairing, swap the `--font-display` / `--font-sans` tokens in `global.css` and
the corresponding `@fontsource-variable/*` imports in `BaseLayout.astro`.

## Internationalization

Locales: **`en`** (default, unprefixed), **`sv`**, **`no`**, **`fi`** — prefixed as
`/sv`, `/no`, `/fi`.

- Astro's built-in `fallback: { sv/no/fi: 'en' }` serves the English page when a
  translation is missing, so the site never 404s on a missing locale.
- UI strings (nav, CTAs, footer) live in `src/i18n/ui.ts`.
- Content translation status lives in `src/content/_translations.json`. Keep it honest —
  it's the signal editors use to know what's outstanding. **Never machine-translate
  silently.**

### Adding a new language

1. Add the locale code to the `locales` tuple in `src/i18n/locales.ts`.
2. Add the corresponding entry to `localeNames` and `localeHtmlLang`.
3. Add a complete entry to `ui` in `src/i18n/ui.ts`.
4. Add the locale to the `locales` array in `astro.config.mjs` and to the `fallback` map.
5. Add a params entry in `src/pages/[lang]/index.astro` (and other dynamic `[lang]`
   routes as they're created).
6. Start translating content into `src/content/{collection}/{locale}/`.

### Adding a case study

1. Create `src/content/case-studies/{locale}/{slug}.mdx`.
2. Set frontmatter (`title`, `client`, `service`, `year`, `status`, …) matching the Zod
   schema in `src/content.config.ts`.
3. Record translation status in `src/content/_translations.json` under
   `"case-studies/{slug}"`.

### Updating team members

Team entries live in `src/content/team/{locale}/{slug}.md`. Each frontmatter exposes
`name`, `role`, `email`, `phone`, `whatsapp`, `photo`, `location`, `order`. The grid
renders in `order` ascending.

## X Drill AB integration

X Drill is a wholly-owned subsidiary, **not** a rebrand — its services are labeled with
an `X Drill` chip in the nav and on service pages, and each X Drill service lists
Marcus Grahn as the named contact. The Swedish site at [xdrill.se](http://xdrill.se) is
kept as a thin Swedish landing page that cross-links into `/sv/services/...` here, with
canonicals pointing to the NORSE URLs (preserves regional SEO equity). See
`MIGRATION.md` for the detailed plan.

## Deployment

GitHub Actions runs typecheck + build on every push/PR (`.github/workflows/ci.yml`).
Vercel deploys on every push to `main`, with per-branch preview URLs on PRs.

## Future CMS migration

All content is in-repo as MDX with Zod-validated frontmatter. Moving to Sanity / Payload
/ Contentful is a one-afternoon task: each collection schema in `src/content.config.ts`
maps 1:1 to a CMS document type; MDX files become documents with the same fields. The
page templates don't care where content comes from — they just consume the collection
API.

## Licences

- Content and brand assets © Norse Diamond Drilling AS. All rights reserved.
- Code © Norse Diamond Drilling AS. Internal use only unless otherwise noted.
