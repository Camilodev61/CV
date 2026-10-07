import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/types";
import { NameTiles } from "./NameTiles";
import { Parallax } from "./Parallax";
import { TypedLine } from "./TypedLine";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative flex min-h-svh flex-col justify-between px-[6vw] pt-14 pb-20">
      <div className="enter flex items-start justify-between font-mono text-[13px] tracking-wider text-muted">
        <span>{t.eyebrow}</span>
        <span className="text-right">
          {t.role[0]}
          <br />
          {t.role[1]}
        </span>
      </div>

      <Parallax className="mt-10">
        <NameTiles
          lines={[
            { text: "Camilo" },
            { text: "Hernandez", className: "text-accent", tail: { text: ".", className: "text-ink" } },
          ]}
        />
      </Parallax>

      <div>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/15 pt-4 font-mono text-[11px] tracking-wide text-muted uppercase sm:grid-cols-4">
          {t.meta.map((m, i) => (
            <div key={m.label} className="enter" style={delay(550 + i * 60)}>
              <dt>{m.label}</dt>
              <dd className="text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>

        <TypedLine text={t.typedLine} startDelay={900} />

        <div className="enter mt-8 flex flex-wrap gap-3.5" style={delay(800)}>
          <a
            href="#proyectos"
            className="rounded-full bg-ink px-7.5 py-4 text-[15px] font-bold text-cream transition-[background-color,color,transform] duration-150 ease-out hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97]"
          >
            {t.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="rounded-full border-[1.5px] border-ink px-7.5 py-4 text-[15px] font-bold text-ink transition-[background-color,color,transform] duration-150 ease-out hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97]"
          >
            {t.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
