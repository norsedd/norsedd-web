import type { Locale } from './locales';

export type UIStrings = {
  nav: {
    about: string;
    services: string;
    equipment: string;
    caseStudies: string;
    sustainability: string;
    careers: string;
    contact: string;
  };
  cta: {
    getInTouch: string;
    ourServices: string;
    learnMore: string;
  };
  footer: {
    groupBlurb: string;
    rights: string;
  };
  untranslatedBanner: string;
};

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      equipment: 'Equipment',
      caseStudies: 'Case studies',
      sustainability: 'Sustainability & HSEQ',
      careers: 'Careers',
      contact: 'Contact',
    },
    cta: {
      getInTouch: 'Get in touch',
      ourServices: 'Our services',
      learnMore: 'Learn more',
    },
    footer: {
      groupBlurb:
        'NORSE Diamond Drilling and X Drill AB operate together to cover the full spectrum of Nordic drilling — core drilling, BOT/exploration, groundwater, and wind-power services.',
      rights: 'All rights reserved.',
    },
    untranslatedBanner:
      "This page isn't available in your language yet — showing the English version.",
  },
  sv: {
    nav: {
      about: 'Om oss',
      services: 'Tjänster',
      equipment: 'Utrustning',
      caseStudies: 'Referenser',
      sustainability: 'Hållbarhet & HSEQ',
      careers: 'Karriär',
      contact: 'Kontakt',
    },
    cta: {
      getInTouch: 'Kontakta oss',
      ourServices: 'Våra tjänster',
      learnMore: 'Läs mer',
    },
    footer: {
      groupBlurb:
        'NORSE Diamond Drilling och X Drill AB arbetar tillsammans och täcker hela spektrumet av nordisk borrning — kärnborrning, BOT/prospektering, grundvatten och vindkrafttjänster.',
      rights: 'Alla rättigheter förbehållna.',
    },
    untranslatedBanner:
      'Den här sidan är inte översatt till svenska ännu — visar den engelska versionen.',
  },
  no: {
    nav: {
      about: 'Om oss',
      services: 'Tjenester',
      equipment: 'Utstyr',
      caseStudies: 'Referanser',
      sustainability: 'Bærekraft & HSEQ',
      careers: 'Karriere',
      contact: 'Kontakt',
    },
    cta: {
      getInTouch: 'Ta kontakt',
      ourServices: 'Våre tjenester',
      learnMore: 'Les mer',
    },
    footer: {
      groupBlurb:
        'NORSE Diamond Drilling og X Drill AB jobber sammen for å dekke hele bredden av nordisk boring — kjerneboring, BOT/prospektering, grunnvann og vindkrafttjenester.',
      rights: 'Alle rettigheter reservert.',
    },
    untranslatedBanner:
      'Denne siden er ikke oversatt til norsk ennå — viser den engelske versjonen.',
  },
  fi: {
    nav: {
      about: 'Tietoa',
      services: 'Palvelut',
      equipment: 'Kalusto',
      caseStudies: 'Referenssit',
      sustainability: 'Kestävyys & HSEQ',
      careers: 'Urat',
      contact: 'Yhteystiedot',
    },
    cta: {
      getInTouch: 'Ota yhteyttä',
      ourServices: 'Palvelumme',
      learnMore: 'Lue lisää',
    },
    footer: {
      groupBlurb:
        'NORSE Diamond Drilling ja X Drill AB toimivat yhdessä kattamaan pohjoismaisen porauksen koko kirjon — ydinporaus, BOT/tutkimusporaus, pohjavesi ja tuulivoimapalvelut.',
      rights: 'Kaikki oikeudet pidätetään.',
    },
    untranslatedBanner:
      'Tämä sivu ei ole vielä saatavilla suomeksi — näytetään englanninkielinen versio.',
  },
};

export function t(locale: Locale): UIStrings {
  return ui[locale];
}
