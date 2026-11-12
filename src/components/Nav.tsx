"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CONTACT, href, type Lang, type PageKey } from "@/lib/i18n";
import { Bolt } from "@/components/Icon";

const LINKS: {
  key: PageKey;
  hu: string;
  en: string;
  subHu: string;
  subEn: string;
}[] = [
  { key: "home", hu: "Főoldal", en: "Home", subHu: "Kezdés", subEn: "Start" },
  {
    key: "services",
    hu: "Szolgáltatások",
    en: "Services",
    subHu: "Mit csinálunk",
    subEn: "What we do",
  },
  {
    key: "work",
    hu: "Munkáink",
    en: "Work",
    subHu: "Referenciák",
    subEn: "Projects",
  },
  {
    key: "pricing",
    hu: "Árak",
    en: "Pricing",
    subHu: "Csomagok",
    subEn: "Packages",
  },
  {
    key: "about",
    hu: "Rólunk",
    en: "About",
    subHu: "Kik vagyunk",
    subEn: "Who we are",
  },
  { key: "blog", hu: "Blog", en: "Blog", subHu: "Tippek", subEn: "Tips" },
  {
    key: "contact",
    hu: "Kapcsolat",
    en: "Contact",
    subHu: "Írj nekünk",
    subEn: "Say hello",
  },
];

function Brand({ lang, onClick }: { lang: Lang; onClick?: () => void }) {
  return (
    <Link
      className="brand"
      href={href(lang, "home")}
      aria-label="LightningWeb"
      onClick={onClick}
    >
      <span className="mark">
        <Bolt />
      </span>
      <span className="wm">
        Lightning<span>Web</span>
      </span>
    </Link>
  );
}

export default function Nav({
  lang,
  page,
  alt,
}: {
  lang: Lang;
  page: PageKey;
  alt: string;
}) {
  const hu = lang === "hu";
  const [open, setOpen] = useState(false);
  const pill = useRef<HTMLElement>(null);
  const ind = useRef<HTMLSpanElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const openBtn = useRef<HTMLButtonElement>(null);

  /* Sliding pill indicator: sits under the active link, follows the mouse on hover. */
  const place = useCallback((el: Element | null | undefined) => {
    const p = pill.current,
      i = ind.current;
    if (!p || !i) return;
    if (!el || !p.offsetParent) {
      i.style.opacity = "0";
      return;
    }
    const pr = p.getBoundingClientRect(),
      r = el.getBoundingClientRect();
    i.style.left = `${r.left - pr.left}px`;
    i.style.width = `${r.width}px`;
    i.style.opacity = "1";
  }, []);
  const moveToActive = useCallback(
    () => place(pill.current?.querySelector("a.on")),
    [place],
  );

  useLayoutEffect(() => {
    moveToActive();
  }, [moveToActive, page]);
  useEffect(() => {
    window.addEventListener("resize", moveToActive);
    document.fonts?.ready.then(moveToActive);
    return () => window.removeEventListener("resize", moveToActive);
  }, [moveToActive]);

  /* Full-screen menu: lock scrolling, focus the close button, close on Escape. */
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("lock");
    const t = setTimeout(() => closeBtn.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      // also runs when the page changes while the menu is open
      document.body.classList.remove("lock");
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const close = () => {
    if (!open) return;
    setOpen(false);
    openBtn.current?.focus();
  };

  return (
    <>
      <header className="nav">
        <div className="wrap bar">
          <Brand lang={lang} />
          <nav
            className="pill"
            ref={pill}
            aria-label={hu ? "Fő menü" : "Main menu"}
            onMouseLeave={moveToActive}
          >
            <span className="ind" ref={ind} />
            {LINKS.slice(1).map((l) => (
              <Link
                key={l.key}
                href={href(lang, l.key)}
                className={page === l.key ? "on" : undefined}
                aria-current={page === l.key ? "page" : undefined}
                onMouseEnter={(e) => place(e.currentTarget)}
              >
                {hu ? l.hu : l.en}
              </Link>
            ))}
          </nav>
          <div className="nav-r">
            <div className="lang" role="group" aria-label="Nyelv / Language">
              {/* A real link to the same page in the other language (good for SEO too). */}
              {hu ? (
                <span aria-current="true" lang="hu">
                  HU
                </span>
              ) : (
                <a href={alt} hrefLang="hu" lang="hu">
                  HU
                </a>
              )}
              {hu ? (
                <a href={alt} hrefLang="en" lang="en">
                  EN
                </a>
              ) : (
                <span aria-current="true" lang="en">
                  EN
                </span>
              )}
            </div>
            <Link className="btn btn-volt cta-s" href={href(lang, "contact")}>
              {hu ? "Ajánlatkérés" : "Get a quote"}
            </Link>
            <button
              ref={openBtn}
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-controls="overlay"
              onClick={() => setOpen(true)}
            >
              {hu ? "Menü" : "Menu"}
              <i />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay${open ? " open" : ""}`}
        id="overlay"
        role="dialog"
        aria-modal="true"
        aria-label={hu ? "Menü" : "Menu"}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="wrap ov-top">
          <Brand lang={lang} onClick={close} />
          <button
            ref={closeBtn}
            className="close"
            type="button"
            onClick={close}
          >
            {hu ? "Bezárás" : "Close"} ✕
          </button>
        </div>
        <div className="wrap ov-body">
          <ul className="ov-links">
            {LINKS.map((l, n) => (
              <li key={l.key}>
                <Link
                  href={href(lang, l.key)}
                  className={page === l.key ? "on" : undefined}
                  onClick={close}
                >
                  <small>{String(n + 1).padStart(2, "0")}</small>
                  <span>{hu ? l.hu : l.en}</span>
                  <em>{hu ? l.subHu : l.subEn}</em>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ov-side">
            <span className="mono">{hu ? "Beszéljünk" : "Let’s talk"}</span>
            <a className="ov-contact" href={`mailto:${CONTACT.email}`}>
              <strong>{CONTACT.email}</strong>
            </a>
            <a className="ov-contact" href={CONTACT.phoneHref}>
              <strong>{CONTACT.phone}</strong>
            </a>
            <div>
              <Link
                className="btn btn-volt"
                href={href(lang, "contact")}
                onClick={close}
              >
                {hu ? "Ingyenes konzultáció" : "Free consultation"}{" "}
                <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap ov-foot mono">
          <span>Finest Quality Quickly</span>
          <span>
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener">
              Facebook
            </a>{" "}
            ·{" "}
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener">
              Instagram
            </a>{" "}
            ·{" "}
            <a href={CONTACT.social.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
