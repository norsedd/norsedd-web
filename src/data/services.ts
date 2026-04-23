/**
 * Canonical registry of services offered by NORSE + X Drill.
 *
 * This is the source of truth for nav links, service grids, and
 * the service detail route. Per-service long-form content lives
 * in `src/content/services/{locale}/{slug}.mdx`.
 *
 * Nav labels localize to the visitor's locale (ui.ts pattern). Long-form
 * tagline/body text is English-only until translations land — see
 * CONTENT.md for the outstanding translation list.
 */

export type ServiceBrand = 'norse' | 'xdrill';

export type ServiceEntry = {
  slug: string;
  brand: ServiceBrand;
  /** English title shown in mega-menu and service cards. Localized titles
   *  will be sourced from content frontmatter once translations land. */
  titleEn: string;
  /** One-line English tagline shown in cards. */
  taglineEn: string;
};

export const services: ServiceEntry[] = [
  // NORSE
  {
    slug: 'surface-drilling',
    brand: 'norse',
    titleEn: 'Surface drilling',
    taglineEn:
      'Diamond core drilling for mineral resource definition, geotechnics, and infrastructure.',
  },
  {
    slug: 'underground-drilling',
    brand: 'norse',
    titleEn: 'Underground drilling',
    taglineEn:
      'High-precision drilling for mine development, resource expansion, and structural stability.',
  },
  {
    slug: 'helicopter-portable',
    brand: 'norse',
    titleEn: 'Helicopter-portable drilling',
    taglineEn:
      'Access to remote, high-altitude, and environmentally sensitive sites — no roads required.',
  },

  // X Drill
  {
    slug: 'prospektering',
    brand: 'xdrill',
    titleEn: 'Exploration drilling (BOT sampling)',
    taglineEn:
      'Odex 76 mm sampling of moraine and bedrock. Casing removed cleanly after sampling.',
  },
  {
    slug: 'vindkraft',
    brand: 'xdrill',
    titleEn: 'Wind power services',
    taglineEn:
      'Certified service and maintenance crews for wind farms — GWO, ESA, SSG Heta arbeten.',
  },
  {
    slug: 'grundvattenror',
    brand: 'xdrill',
    titleEn: 'Groundwater pipes',
    taglineEn: 'Drilling for pipes up to 2", including sand-filter wells.',
  },
  {
    slug: 'miljo',
    brand: 'xdrill',
    titleEn: 'Environmental approach',
    taglineEn:
      'Wide rubber tracks, environmental oils, and sites left clean after completion.',
  },
];

export const norseServices = services.filter((s) => s.brand === 'norse');
export const xdrillServices = services.filter((s) => s.brand === 'xdrill');
