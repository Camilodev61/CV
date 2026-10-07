import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { contacto } from "@/i18n";
import type { Dictionary } from "@/i18n/types";
import { ContactForm } from "./ContactForm";
import { CountUp } from "./CountUp";
import { RevealSection } from "./Reveal";
import { Timeline } from "./Timeline";

const idx = (i: number) => ({ "--i": i }) as CSSProperties;

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`reveal mb-3 font-mono text-[13px] ${dark ? "text-muted-dark" : "text-muted"}`}>{children}</p>;
}

function Title({ children, className = "mb-12" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`reveal text-[clamp(32px,5vw,56px)] font-black tracking-tight ${className}`} style={idx(1)}>
      {children}
    </h2>
  );
}

const pill =
  "rounded-full border border-ink/25 px-4 py-2 text-ink no-underline transition-[background-color,color,transform] duration-150 ease-out hover:bg-ink hover:text-cream active:scale-[0.97]";

export function Perfil({ t }: { t: Dictionary["perfil"] }) {
  return (
    <RevealSection className="grid items-center gap-14 px-[6vw] py-24 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <p className="reveal mb-2 font-mono text-[13px] text-muted" style={idx(1)}>{t.spoiler}</p>
        <p className="reveal mb-6 text-[22px] leading-tight font-bold" style={idx(2)}>{t.frase}</p>
        <p className="reveal max-w-[56ch] text-base leading-[1.7] text-ink-soft" style={idx(3)}>{t.resumen}</p>

        <dl className="reveal mt-9 flex gap-12" style={idx(4)}>
          {t.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="font-mono text-xs text-muted uppercase">{s.label}</dt>
              <dd className="text-[44px] font-black text-accent">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="reveal mt-8 flex flex-wrap gap-3.5 font-mono text-[13px]" style={idx(5)}>
          <a href={`mailto:${contacto.email}`} className={pill}>{contacto.email}</a>
          <a href={contacto.github} target="_blank" rel="noreferrer" className={pill}>github.com/camilodev61</a>
        </div>
      </div>

      <div className="reveal relative mx-auto aspect-[1/1.1] w-full max-w-md" style={idx(2)}>
        <div className="absolute inset-0 rounded-[46%_54%_58%_42%/50%_46%_54%_50%] bg-accent" />
        <div className="absolute inset-[22px] overflow-hidden rounded-full">
          <Image src="/perfil.webp" alt={t.photoAlt} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
        </div>
        <p aria-hidden className="absolute -top-2.5 right-[14%] -rotate-6 font-mono text-[13px]">{t.photoNote}</p>
      </div>
    </RevealSection>
  );
}

export function Stack({ t }: { t: Dictionary["stack"] }) {
  return (
    <RevealSection className="px-[6vw] py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Title>{t.title}</Title>
      {t.groups.map((group, g) => (
        <div key={group.title} className="reveal mb-8" style={idx(g + 2)}>
          <h3 className="mb-3.5 font-mono text-xs tracking-wider text-muted uppercase">{group.title}</h3>
          <ul className="flex flex-wrap gap-2.5">
            {group.items.map((tag) => (
              <li
                key={tag}
                className="cursor-default rounded-full bg-ink px-4.5 py-2.5 text-sm font-bold text-cream transition-[background-color,color,transform] duration-150 ease-out hover:scale-105 hover:bg-accent hover:text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </RevealSection>
  );
}

export function Experiencia({ t }: { t: Dictionary["experiencia"] }) {
  return (
    <RevealSection className="px-[6vw] py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Title className="mb-14">{t.title}</Title>
      <Timeline items={t.items} />
    </RevealSection>
  );
}

export function Proyectos({ t }: { t: Dictionary["proyectos"] }) {
  return (
    <RevealSection id="proyectos" className="scroll-mt-6 px-[6vw] py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Title>{t.title}</Title>
      <ul className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {t.items.map((p, i) => (
          <li key={p.nombre} className="reveal" style={idx(i + 2)}>
            <article className="h-full rounded-[20px] border-[1.5px] border-ink/15 bg-paper p-8 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(26,24,21,0.1)]">
              <h3 className="mb-2.5 text-[22px] font-extrabold">{p.nombre}</h3>
              <p className="mb-4.5 text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[11px] text-muted">{t}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}

export function Educacion({ t }: { t: Dictionary["educacion"] }) {
  return (
    <RevealSection className="px-[6vw] py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Title className="mb-10">{t.title}</Title>
      <ul className="max-w-[760px] border-t border-ink/15">
        {t.items.map((e, i) => (
          <li key={e.titulo} className="reveal flex flex-wrap justify-between gap-5 border-b border-ink/15 py-5.5" style={idx(i + 2)}>
            <span className="text-lg font-bold">{e.titulo}</span>
            <span className="text-right font-mono text-[13px] text-muted">
              {e.institucion}
              <br />
              {e.periodo}
            </span>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}

const darkLink = "text-accent underline-offset-4 transition-colors duration-150 ease-out hover:text-cream hover:underline";

export function Contacto({ t }: { t: Dictionary["contacto"] }) {
  return (
    <RevealSection id="contacto" className="bg-ink px-[6vw] pt-24 pb-10 text-cream">
      <Eyebrow dark>{t.eyebrow}</Eyebrow>
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h2 className="reveal mb-5 text-[clamp(32px,5vw,56px)] font-black tracking-tight" style={idx(1)}>
            {t.title}<span className="text-accent">.</span>
          </h2>
          <p className="reveal mb-7 max-w-[44ch] text-base leading-[1.7] text-cream-soft" style={idx(2)}>
            {t.intro}
          </p>
          <address className="reveal font-mono text-sm leading-[2.2] not-italic break-words" style={idx(3)}>
            <div>📍 {t.ubicacion}</div>
            <div><a href={`tel:${contacto.telefono.replace(/[^\d+]/g, "")}`} className="text-cream">{contacto.telefono}</a></div>
            <div><a href={`mailto:${contacto.email}`} className={darkLink}>{contacto.email}</a></div>
            <div><a href={contacto.linkedin} target="_blank" rel="noreferrer" className={darkLink}>linkedin.com/in/camilohernandez</a></div>
            <div><a href={contacto.github} target="_blank" rel="noreferrer" className={darkLink}>github.com/camilodev61</a></div>
            <div><a href={contacto.portafolio} target="_blank" rel="noreferrer" className={darkLink}>camilodev61.github.io/mi-portafolio</a></div>
          </address>
        </div>
        <div className="reveal" style={idx(3)}>
          <ContactForm t={t.form} />
        </div>
      </div>

      <footer className="mt-24 flex flex-wrap justify-between gap-3 border-t border-line-darker pt-6 font-mono text-xs text-muted-dark">
        <span>© 2026 Camilo Hernández</span>
        <span>{t.builtWith}</span>
      </footer>
    </RevealSection>
  );
}
