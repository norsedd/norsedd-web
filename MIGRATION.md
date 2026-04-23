# MIGRATION.md

Redirect strategy for cutover from the Squarespace site and the xdrill.se WordPress.

## Squarespace → new Astro site

These 301s will be configured in `vercel.json` before DNS cutover. Populated as IA is
built out — each row confirms the old URL, the new URL, and that the redirect resolves
without chaining.

| Old (Squarespace) | New | Status |
|---|---|---|
| `/` | `/` | ⚠ TODO |
| `/about` | `/about` | ⚠ TODO |
| `/services` | `/services` | ⚠ TODO |
| `/equipment` (currently "Coming Soon" w/ title "Projects") | `/equipment` | ⚠ TODO — disambiguate |
| `/careers` | `/careers` | ⚠ TODO |
| `/contact` | `/contact` | ⚠ TODO |

Process:

1. `curl -sI https://www.norsedd.com/sitemap.xml` to extract the full URL list before
   cutover.
2. Map each to a new URL; add any that don't have a 1:1 equivalent to this table with a
   clear destination.
3. Validate with `curl -sI` after deploy — every old URL must return `301` + a target
   that returns `200`.

## xdrill.se strategy

**Decision (confirmed 2026-04-23):** option B — keep `xdrill.se` live as a thin
Swedish-language landing page branded "Part of NORSE Group," with deep links into
`norsedd.com/sv/services/...`. Canonicals on xdrill.se point to the corresponding
norsedd.com URLs so ranking signal consolidates without losing the regional domain.

Rationale: X Drill has ~5 years of Swedish regional SEO equity on queries like
*"Odex 76 prospektering Västerbotten"* — dropping the domain would forfeit that
authority, and Marcus Grahn's regional identity is part of what clients recognize.

Concretely:

| xdrill.se page | New destination (canonical) | Redirect type |
|---|---|---|
| `/` | `/` on xdrill.se (keep live) with link to `norsedd.com/sv/companies/xdrill` | none |
| `/prospektering/` | canonical → `norsedd.com/sv/services/prospektering` | canonical + link |
| `/vindkraft/` | canonical → `norsedd.com/sv/services/vindkraft` | canonical + link |
| `/grundvattenror/` | canonical → `norsedd.com/sv/services/grundvattenror` | canonical + link |
| `/miljo/` | canonical → `norsedd.com/sv/services/miljo` | canonical + link |
| `/kontakt/` | keep — Marcus Grahn's regional contact point | none |

The xdrill.se WordPress stays under Marcus's control for now. After 12 months of stable
canonical consolidation, we can revisit a full 301 to `/sv/companies/xdrill` if authority
has fully transferred.

## DNS

- `norsedd.com` and `www.norsedd.com` → Vercel apex + www (AAAA + CNAME).
- Pre-cutover: stage on a Vercel preview domain, validate all locales, then swap DNS.
- Post-cutover: monitor 404s in Vercel logs for 7 days and backfill redirects.
