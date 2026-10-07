"use client";

import { useEffect, useRef } from "react";
import { useInViewOnce } from "./Reveal";

/** Counts from 0 to `value` once in view, easing out. Writes textContent directly to avoid re-renders. */
export function CountUp({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
  const [ref, visible] = useInViewOnce<HTMLSpanElement>();
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!visible || !num.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      num.current.textContent = String(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
      if (num.current) num.current.textContent = String(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden>
        <span ref={num}>0</span>
        {suffix}
      </span>
    </span>
  );
}
