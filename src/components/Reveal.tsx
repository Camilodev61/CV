"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";

/** Calls back once when the element scrolls into view, then stops observing. */
export function useInViewOnce<T extends Element>(rootMargin = "0px 0px -15% 0px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, visible] as const;
}

/**
 * Section wrapper: sets `data-visible` once in view. Descendants with the `.reveal`
 * class fade up, staggered by their `--i` index (see globals.css).
 */
export function RevealSection(props: ComponentPropsWithoutRef<"section">) {
  const [ref, visible] = useInViewOnce<HTMLElement>();
  return <section ref={ref} data-visible={visible || undefined} {...props} />;
}
