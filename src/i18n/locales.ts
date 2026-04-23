export const locales = ['en', 'sv', 'no', 'fi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sv: 'Svenska',
  no: 'Norsk',
  fi: 'Suomi',
};

export const localeHtmlLang: Record<Locale, string> = {
  en: 'en-US',
  sv: 'sv-SE',
  no: 'nb-NO',
  fi: 'fi-FI',
};

/** URL prefix for a locale: '' for default, '/sv' etc. for others. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Build a locale-aware path. `path` should start with '/'. */
export function localizedPath(locale: Locale, path: string = '/'): string {
  const prefix = localePrefix(locale);
  if (path === '/') return prefix || '/';
  return `${prefix}${path}`;
}

/** Extract locale from a URL pathname; falls back to defaultLocale. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(segment as Locale)
    ? (segment as Locale)
    : defaultLocale;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
