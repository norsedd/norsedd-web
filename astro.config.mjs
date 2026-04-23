// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.norsedd.com',
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'no', 'fi'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    // Fallback is handled explicitly via a TranslationBanner component so
    // editors/readers always know they're seeing the English version. See
    // README.md → Internationalization and src/i18n/ui.ts → untranslatedBanner.
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          sv: 'sv-SE',
          no: 'nb-NO',
          fi: 'fi-FI',
        },
      },
    }),
  ],
});
