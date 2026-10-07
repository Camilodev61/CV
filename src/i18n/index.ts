import { en } from "./en";
import { es } from "./es";
import type { Dictionary } from "./types";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale) => dictionaries[locale];

/** Public URL for a locale: Spanish lives at `/` (rewritten to /es), English at `/en`. */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

/** Same-for-every-language contact data. */
export const contacto = {
  telefono: "(+57) 321 697 6406",
  email: "camilodev61@outlook.com",
  linkedin: "https://linkedin.com/in/camilohernandez",
  github: "https://github.com/camilodev61",
  portafolio: "https://camilodev61.github.io/mi-portafolio",
};
