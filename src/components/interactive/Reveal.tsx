"use client";

import { useEffect } from "react";

const SEL = ".sec-head, .tile, .case, .plan, .sd, .post";

/**
 * Scroll reveal: blocks below the fold fade in as they enter the screen.
 * Elements already visible on load are left alone, so nothing flashes.
 */
export default function Reveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.remove("pre");
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    const vh = window.innerHeight;
    document.querySelectorAll<HTMLElement>(`main :is(${SEL})`).forEach((el) => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      if (el.getBoundingClientRect().top > vh) {
        const n = Array.prototype.indexOf.call(
          el.parentElement?.children ?? [],
          el,
        );
        el.style.animationDelay = `${(n % 4) * 50}ms`;
        el.classList.add("pre");
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
  return null;
}
