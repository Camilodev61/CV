import Link from "next/link";
import { localePath, locales, type Locale } from "@/i18n";

/**
 * Fixed ES/EN pill. Plain links to each locale's static page; `scroll={false}` keeps the reader
 * where they were. No motion besides press feedback — the active state swaps instantly.
 */
export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav
      aria-label={label}
      className="fixed top-4 right-4 z-40 flex rounded-full border border-ink/15 bg-cream/85 p-1 font-mono text-xs font-bold shadow-[0_4px_16px_rgba(26,24,21,0.08)] backdrop-blur-sm sm:right-[6vw]"
    >
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={localePath(l)}
            hrefLang={l}
            lang={l}
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 uppercase transition-[background-color,color,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97] ${
              active ? "bg-ink text-cream" : "text-muted hover:text-ink"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
