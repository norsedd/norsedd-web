import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeEnum = z.enum(['en', 'sv', 'no', 'fi']);
const brandEnum = z.enum(['norse', 'xdrill']);

/** Services: src/content/services/{locale}/{slug}.mdx */
const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      locale: localeEnum,
      brand: brandEnum,
      title: z.string(),
      tagline: z.string(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      order: z.number().default(100),
      contactName: z.string().optional(),
      contactEmail: z.string().email().optional(),
      contactPhone: z.string().optional(),
      certifications: z.array(z.string()).default([]),
      referenceClients: z.array(z.string()).default([]),
      seoDescription: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/** Team members: src/content/team/{locale}/{slug}.{md,mdx} */
const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      locale: localeEnum,
      name: z.string(),
      role: z.string(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      whatsapp: z.string().optional(),
      photo: image().optional(),
      photoAlt: z.string().optional(),
      location: z.string().optional(),
      order: z.number().default(100),
    }),
});

/** Case studies: src/content/case-studies/{locale}/{slug}.mdx */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      locale: localeEnum,
      title: z.string(),
      client: z.string(),
      service: z.string(),
      year: z.number().optional(),
      location: z.string().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      status: z.enum(['published', 'coming-soon']).default('published'),
      order: z.number().default(100),
    }),
});

/** Equipment / fleet: src/content/equipment/{locale}/{slug}.mdx */
const equipment = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/equipment' }),
  schema: ({ image }) =>
    z.object({
      locale: localeEnum,
      name: z.string(),
      category: z.enum(['surface', 'underground', 'heli-portable', 'odex-76', 'support']),
      brand: brandEnum,
      photo: image().optional(),
      photoAlt: z.string().optional(),
      specs: z.record(z.string(), z.string()).optional(),
      status: z.enum(['published', 'coming-soon']).default('coming-soon'),
      order: z.number().default(100),
    }),
});

/** Free-form pages: about, group, sustainability, careers, contact, ... */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      locale: localeEnum,
      title: z.string(),
      description: z.string().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

export const collections = {
  services,
  team,
  'case-studies': caseStudies,
  equipment,
  pages,
};
