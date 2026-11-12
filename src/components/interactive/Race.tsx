"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Load-time race between a fast and a slow site. Starts when it scrolls into
 * view; the "Run again" button (#race-btn inside the children) restarts it.
 */
export default function Race({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = () => {
      const lanes = el.querySelectorAll<HTMLElement>(".lane");
      let start: number | null = null;
      cancelAnimationFrame(raf.current);
      const frame = (t: number) => {
        start ??= t;
        const elapsed = ((t - start) / 1000) * 1.4;
        let done = true;
        lanes.forEach((ln) => {
          const te = ln.querySelector<HTMLElement>(".t")!;
          const to = parseFloat(te.dataset.to ?? "1");
          const p = Math.min(elapsed / to, 1);
          ln.querySelector<HTMLElement>(".track i")!.style.width =
            `${p * 100}%`;
          te.textContent = `${Math.min(elapsed, to).toFixed(1)} s`;
          ln.querySelector<HTMLElement>(".out")!.style.opacity =
            p < 1 ? ".3" : "1";
          if (p < 1) done = false;
        });
        if (!done) raf.current = requestAnimationFrame(frame);
      };
      raf.current = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        run();
        io.disconnect();
      }
    });
    io.observe(el);
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest("#race-btn")) run();
    };
    el.addEventListener("click", onClick);
    return () => {
      io.disconnect();
      el.removeEventListener("click", onClick);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="race" id="race" ref={root}>
      {children}
    </div>
  );
}
