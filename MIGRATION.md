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

**Current domain state (discovered 2026-04-23):** `https://www.xdrill.se/` returns
`301 → https://www.it4u.se/` — pointing at an unrelated Swedish IT hosting company, not
X Drill content. The last real X Drill snapshot in the Wayback Machine is from 2026-04-21
and referenced the historical Blattnicksele address (Strandvägen 20). The old WordPress
is effectively off the air.

**Decision (confirmed 2026-04-23):** permanent **301 `xdrill.se` → `norsedd.com/sv/services`**.
Option B (keep xdrill.se as a thin canonical-bearing landing page) is not viable without
first recovering the domain from the current mis-configured redirect, which isn't worth
the ongoing maintenance. A single 301 passes most link equity while consolidating the
entire brand at `norsedd.com`.

Concretely:

| Old URL | New destination | Redirect type |
|---|---|---|
| `xdrill.se/*` (apex) | `norsedd.com/sv/services` | 301 permanent |
| `www.xdrill.se/*` | `norsedd.com/sv/services` | 301 permanent |
| `xdrill.se/prospektering` | `norsedd.com/sv/services/prospektering` | 301 (preserve path if possible) |
| `xdrill.se/vindkraft` | `norsedd.com/sv/services/vindkraft` | 301 |
| `xdrill.se/grundvattenror` | `norsedd.com/sv/services/grundvattenror` | 301 |
| `xdrill.se/miljo` | `norsedd.com/sv/services/miljo` | 301 |

**Implementation steps** (outside this repo — done at DNS / hosting layer):

1. Regain control of `xdrill.se` at the registrar (confirm owner contact; it's currently
   pointing hosting records at it4u.se's Apache server).
2. Either (a) point DNS at a small host that serves path-preserving 301s, or
   (b) park the domain on Vercel (add domain to this project, then set
   `{"redirects":[{"source":"/:path*","destination":"https://www.norsedd.com/sv/services/:path*","permanent":true}]}`
   in `vercel.json` — simplest, leverages infra we already have).
3. After 301 is live, submit xdrill.se in Google Search Console's *Change of Address*
   tool against norsedd.com to accelerate signal consolidation.
4. Monitor Search Console for xdrill.se errors; leave the 301 in place permanently — the
   301 only needs to return successfully, so it can stay indefinitely at zero cost.

**X Drill content on norsedd.com:** the four X Drill services (prospektering, vindkraft,
grundvattenrör, miljö) are migrated verbatim in Swedish with EN translations, rendered
at `/sv/services/{slug}` and `/services/{slug}`. Page-level `rel="alternate"` links tie
the locale pair together.

## DNS

- `norsedd.com` and `www.norsedd.com` → Vercel apex + www (AAAA + CNAME).
- Pre-cutover: stage on a Vercel preview domain, validate all locales, then swap DNS.
- Post-cutover: monitor 404s in Vercel logs for 7 days and backfill redirects.
