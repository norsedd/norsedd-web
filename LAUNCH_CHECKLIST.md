# LAUNCH_CHECKLIST.md

Gate items for cutover. Check off in order.

## Pre-launch (1 week out)

- [ ] Lighthouse mobile ≥ 95 on all four categories for `/` (run `npx lighthouse …`)
- [ ] LCP < 2 s on simulated 4G
- [ ] Axe / keyboard audit on home, services/*, about, contact — no WCAG 2.2 AA
      violations
- [ ] All four locales render without console errors
- [ ] `src/content/_translations.json` accurate — every published slug matches its file
- [ ] `npx astro check` passes clean
- [ ] GitHub Actions CI green on `main`
- [ ] `MIGRATION.md` redirect table is 100% populated and every old URL's new target
      returns 200

## Analytics & consent

- [ ] Cookie/consent banner in place, essential-only by default, GDPR compliant
- [ ] Analytics chosen (recommend Plausible or Vercel Analytics — no cookies, no banner
      overhead for basic traffic counts)
- [ ] Google Search Console property verified for `https://www.norsedd.com`
- [ ] Bing Webmaster Tools verified
- [ ] `sitemap-index.xml` submitted to both
- [ ] Vercel Web Analytics / Speed Insights enabled

## SEO & structured data

- [ ] Organization schema on home
- [ ] LocalBusiness schema with **both** Malå and Blattnicksele addresses on contact page
- [ ] Service schema on each service page
- [ ] Person schema on each team card
- [ ] hreflang tags correct in sitemap for all four locales
- [ ] og:image generated per page

## DNS cutover (day of)

- [ ] Freeze content edits 4 h before cutover
- [ ] Final production build deployed to Vercel preview
- [ ] Smoke test all four locale homepages on preview URL
- [ ] Update DNS: `norsedd.com` apex A + `www.norsedd.com` CNAME → Vercel
- [ ] TTL dropped to 300 s 24 h ahead, restored to 3600 s 24 h after
- [ ] Verify TLS cert issued by Vercel
- [ ] 10-min post-cutover: run `curl -sI` against the full MIGRATION.md table

## X Drill domain decision

- [ ] Marcus informed that xdrill.se stays live as the Swedish landing page
- [ ] Canonical tags added to each xdrill.se service page pointing to the corresponding
      `/sv/services/...` URL on norsedd.com
- [ ] Cross-link footer block added to xdrill.se ("Part of NORSE Group")
- [ ] Calendar reminder: revisit xdrill.se strategy 2027-04 (12-month authority transfer
      review)

## Post-launch (first 7 days)

- [ ] Monitor Vercel logs for 404s and backfill redirects
- [ ] Check Search Console coverage report — aim for zero "excluded: redirect error"
- [ ] WhatsApp / phone / email CTAs all test-verified
- [ ] Team confirms their contact cards are accurate

## Post-launch (first 30 days)

- [ ] First real case study shipped (replaces one of the `coming-soon` placeholders)
- [ ] First equipment page populated with specs
- [ ] SV/NO/FI translation status ≥ 80% of EN pages
- [ ] Search Console impressions trending vs. the Squarespace baseline
