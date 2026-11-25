"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Light parallax for the hero portrait: a few pixels of vertical drift.
 * Disabled entirely when the visitor prefers reduced motion.
 */
export function PortraitFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setOffset(Math.round((clamped - 0.5) * 2 * 14));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}
