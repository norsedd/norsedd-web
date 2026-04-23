# CONTENT.md

Inventory of every piece of content migrated into this repo, with its locale status.

Status legend: ✅ published · 📝 draft · ⚠ TODO · — not applicable.

## Services — NORSE

| Slug | EN | SV | NO | FI | Notes |
|---|---|---|---|---|---|
| `surface-drilling` | ⚠ | ⚠ | ⚠ | ⚠ | Pull from norsedd.com |
| `underground-drilling` | ⚠ | ⚠ | ⚠ | ⚠ | Pull from norsedd.com |
| `helicopter-portable` | ⚠ | ⚠ | ⚠ | ⚠ | Pull from norsedd.com |

## Services — X Drill

| Slug | EN | SV | NO | FI | Notes |
|---|---|---|---|---|---|
| `prospektering` (BOT sampling) | ⚠ | ⚠ | — | — | SV is source of record; translate EN |
| `vindkraft` (Wind power) | ⚠ | ⚠ | — | — | SV is source of record; translate EN |
| `grundvattenror` (Groundwater pipes) | ⚠ | ⚠ | — | — | SV is source of record; translate EN |
| `miljo` (Environment) | ⚠ | ⚠ | — | — | SV is source of record; translate EN |

## Pages

| Slug | EN | SV | NO | FI | Notes |
|---|---|---|---|---|---|
| `about` | ⚠ | ⚠ | ⚠ | ⚠ | Migrate from norsedd.com/about |
| `group` (Our Companies) | ⚠ | ⚠ | ⚠ | ⚠ | New — NORSE + X Drill relationship |
| `sustainability` (HSEQ) | ⚠ | ⚠ | ⚠ | ⚠ | New — Caring value + Core-gives-Care + X Drill env |
| `careers` | ⚠ | ⚠ | ⚠ | ⚠ | Migrate from norsedd.com/careers |
| `contact` | ⚠ | ⚠ | ⚠ | ⚠ | Both Malå and Blattnicksele addresses |

## Team

TODO: enumerate roster from norsedd.com/about. Each person becomes
`src/content/team/{locale}/{slug}.md` with Person schema in frontmatter.

| Member | Photo | Email | Phone | WhatsApp |
|---|---|---|---|---|
| (roster rows to be filled) | | | | |

## Case studies

Scaffold placeholders (section 6 of the brief):

| Slug | Client | Status | Notes |
|---|---|---|---|
| `boliden-placeholder` | Boliden | coming-soon | Theme from client logo wall |
| `rana-gruber-placeholder` | Rana Gruber | coming-soon | Theme from client logo wall |
| `franzefoss-placeholder` | Franzefoss | coming-soon | Theme from client logo wall |

## Equipment / Fleet

| Slug | Category | Brand | Status |
|---|---|---|---|
| `surface-rigs` | surface | norse | coming-soon |
| `underground-rigs` | underground | norse | coming-soon |
| `heli-portable-rigs` | heli-portable | norse | coming-soon |
| `odex-76` | odex-76 | xdrill | coming-soon |

## Assets migrated from the current sites

| Asset | Source | Destination | Licence |
|---|---|---|---|
| NORSE logo SVGs (outlined variants) | OneDrive / Visual Identity | `public/logos/` | Proprietary |
| Brand palette (Color codes.pdf) | OneDrive / Visual Identity | `src/styles/global.css` @theme | Proprietary |
| Hero photography (TBD) | norsedd.com Squarespace | `src/assets/heroes/` | Reference only — replace with final photography |
| X Drill photography (TBD) | xdrill.se | `src/assets/xdrill/` | Reference only — replace with final photography |
