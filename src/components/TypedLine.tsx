"use client";

import { useEffect, useRef } from "react";

/** Terminal line that types itself once on load. Reduced motion shows the full text immediately. */
export function TypedLine({ text, startDelay = 900 }: { text: string; startDelay?: number }) {
  const out = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = out.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        el.textContent = text.slice(0, i);
        if (i >= text.length) clearInterval(interval);
      }, 40);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, startDelay]);

  return (
    <p className="mt-9 min-h-[1.6em] font-mono text-base text-ink">
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        &gt; <span ref={out} />
        <span className="caret">_</span>
      </span>
    </p>
  );
}
