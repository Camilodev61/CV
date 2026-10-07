"use client";

import { useEffect, useRef } from "react";
import type { Experiencia } from "@/i18n/types";

/**
 * Vertical timeline whose accent line "draws" as you scroll through it (scaleY tied to
 * scroll position — linear, no easing, since scroll is the driver). Reduced motion shows it full.
 */
export function Timeline({ items }: { items: Experiencia[] }) {
  const wrap = useRef<HTMLOListElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (fill.current) fill.current.style.transform = "scaleY(1)";
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!wrap.current || !fill.current) return;
      const rect = wrap.current.getBoundingClientRect();
      // 0 when the list top reaches 70% of the viewport, 1 when its bottom reaches 70%.
      const anchor = window.innerHeight * 0.7;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      fill.current.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={wrap} className="relative max-w-[820px]">
      <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-ink/15" />
      <div ref={fill} aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top scale-y-0 bg-accent" />
      {items.map((job, i) => (
        <li key={job.empresa} className="reveal relative pb-12 pl-10" style={{ "--i": i } as React.CSSProperties}>
          <div aria-hidden className="absolute top-1.5 left-0 size-4 rounded-full border-[3px] border-accent bg-cream" />
          <p className="mb-1.5 font-mono text-xs text-muted">{job.periodo}</p>
          <h3 className="text-[22px] font-extrabold">{job.rol}</h3>
          <p className="mb-2.5 text-[15px] font-bold text-accent">{job.empresa}</p>
          <ul className="space-y-1">
            {job.bullets.map((b) => (
              <li key={b} className="text-[15px] leading-relaxed text-ink-soft">
                — {b}
              </li>
            ))}
          </ul>
          {job.metrics && (
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {job.metrics.map((m) => (
                <li key={m} className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[13px] font-bold text-accent">
                  {m}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
