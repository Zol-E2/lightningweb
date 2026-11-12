"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT, href, type Lang } from "@/lib/i18n";

/** Call / quote bar on phones, shown after the visitor scrolls past the hero. */
export default function MobileBar({
  lang,
  hideOnPage,
}: {
  lang: Lang;
  hideOnPage: boolean;
}) {
  const hu = lang === "hu";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY >= 320);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`mbar${!scrolled || hideOnPage ? " hide" : ""}`}>
      <a className="mb-call" href={CONTACT.phoneHref}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
        {hu ? "Hívás" : "Call"}
      </a>
      <Link className="mb-quote" href={href(lang, "contact")}>
        {hu ? "Ajánlatkérés" : "Get a quote"} <span>→</span>
      </Link>
    </div>
  );
}
