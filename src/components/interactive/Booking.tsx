"use client";

import { useRef, useState } from "react";
import { CONTACT, type Lang } from "@/lib/i18n";

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, unknown>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/** Official Cal.com embed loader (queues calls until embed.js has loaded). */
function loadCal(): CalFn {
  const w = window;
  if (!w.Cal) {
    const push = (a: { q: unknown[] }, args: unknown) => a.q.push(args);
    const cal = function (...args: unknown[]) {
      const c = w.Cal as CalFn & { q: unknown[] };
      if (!c.loaded) {
        c.ns = {};
        c.q = c.q || [];
        const s = document.createElement("script");
        s.src = "https://app.cal.com/embed/embed.js";
        s.async = true;
        document.head.appendChild(s);
        c.loaded = true;
      }
      push(c, args);
    } as CalFn;
    w.Cal = cal;
    cal("init", { origin: "https://cal.com" });
    cal("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#2fd0f5" } },
      layout: "month_view",
    });
  }
  return w.Cal;
}

/**
 * Free 20-minute call booking through Cal.com (synced with Google Calendar).
 * The booking widget only loads when the visitor clicks, so it costs nothing
 * on page load; without JavaScript the link opens the booking page itself.
 */
export default function Booking({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const [busy, setBusy] = useState(false);
  const warmed = useRef(false);
  const warm = () => {
    if (warmed.current) return;
    warmed.current = true;
    loadCal();
  };
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    setBusy(true);
    loadCal()("modal", {
      calLink: CONTACT.booking,
      config: { layout: "month_view", theme: "dark" },
    });
    // the modal appears when embed.js is ready; clear the spinner after a moment
    setTimeout(() => setBusy(false), 1500);
  };
  return (
    <>
      <ul className="book-facts">
        <li>{hu ? "20 perc, ingyenes" : "20 minutes, free"}</li>
        <li>{hu ? "Videóhívás vagy telefon" : "Video call or phone"}</li>
        <li>
          {hu ? "Válaszd ki, mikor jó neked" : "Pick a time that suits you"}
        </li>
      </ul>
      <div>
        <a
          className="btn btn-volt"
          href={`https://cal.com/${CONTACT.booking}`}
          target="_blank"
          rel="noopener"
          onPointerEnter={warm}
          onFocus={warm}
          onClick={open}
          aria-busy={busy}
        >
          {busy
            ? hu
              ? "Naptár betöltése…"
              : "Loading calendar…"
            : hu
              ? "Időpont kiválasztása"
              : "Choose a time"}{" "}
          <span className="ar">→</span>
        </a>
      </div>
    </>
  );
}
