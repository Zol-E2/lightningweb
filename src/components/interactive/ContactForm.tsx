"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { href, type Lang } from "@/lib/i18n";
import { takeDraft } from "@/lib/draft";

const NEEDS = [
  { id: "web", hu: "Weboldal", en: "Website" },
  { id: "shop", hu: "Webshop", en: "Online store" },
  { id: "seo", hu: "Google / SEO", en: "Google / SEO" },
  { id: "ads", hu: "Hirdetés", en: "Ads" },
  { id: "social", hu: "Social media", en: "Social media" },
  { id: "care", hu: "Karbantartás", en: "Maintenance" },
];

type Status = "idle" | "sending" | "sent" | "error";

/** Enquiry form. Sends to /api/contact, which emails the enquiry to LightningWeb. */
export default function ContactForm({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const L = (h: string, e: string) => (hu ? h : e);
  const msg = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState<string | null>(null);

  /* Message pre-filled from a package button, the calculator or the site checker. */
  useEffect(() => {
    const d = takeDraft();
    if (d && msg.current) msg.current.value = d;
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    if (!String(f.get("name") ?? "").trim())
      return setProblem(
        L("Kérlek, add meg a neved.", "Please enter your name."),
      );
    if (!email && !phone)
      return setProblem(
        L(
          "Adj meg e-mail címet vagy telefonszámot, hogy válaszolni tudjunk.",
          "Please give an email or phone number so we can reply.",
        ),
      );
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      return setProblem(
        L(
          "Az e-mail cím nem tűnik helyesnek.",
          "That email address doesn’t look right.",
        ),
      );
    if (!f.get("consent"))
      return setProblem(
        L(
          "A küldéshez fogadd el az adatkezelési tájékoztatót.",
          "Please accept the privacy policy to send.",
        ),
      );
    setProblem(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          company: f.get("company"),
          email,
          phone,
          needs: f.getAll("needs"),
          message: f.get("message"),
          website: f.get("website"), // honeypot, must stay empty
          lang,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <span className="mono acc">{L("Megkaptuk", "Received")}</span>
        <h3>
          {L(
            "Köszönöm, hamarosan jelentkezem!",
            "Thanks, I’ll be in touch soon!",
          )}
        </h3>
        <p>
          {L(
            "24 órán belül válaszolok, általában sokkal hamarabb.",
            "I reply within 24 hours, usually much sooner.",
          )}
        </p>
      </div>
    );
  }

  return (
    <form id="lead" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <label className="fl mono">
          {L("Név", "Name")}
          <input name="name" autoComplete="name" required />
        </label>
        <label className="fl mono">
          {L("Cégnév", "Company")}
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="row2">
        <label className="fl mono">
          E-mail
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="fl mono">
          {L("Telefon", "Phone")}
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="fl mono">
        {L("Miben segíthetünk?", "What do you need?")}
        <div className="chips">
          {NEEDS.map((n, i) => (
            <span key={n.id}>
              <input
                type="checkbox"
                id={`need-${n.id}`}
                name="needs"
                value={n.hu}
                defaultChecked={i === 0}
              />
              <label htmlFor={`need-${n.id}`}>{hu ? n.hu : n.en}</label>
            </span>
          ))}
        </div>
      </div>
      <label className="fl mono">
        {L(
          "Mivel foglalkozik a céged? Mit szeretnél?",
          "What does your business do? What do you need?",
        )}
        <textarea name="message" ref={msg} />
      </label>
      {/* Spam trap: hidden from people, bots fill it in. */}
      <label className="hp" aria-hidden="true">
        Website <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consent" value="1" />
        <span>
          {L("Elfogadom az ", "I accept the ")}
          <Link href={href(lang, "privacy")}>
            {L("Adatkezelési tájékoztatót", "Privacy Policy")}
          </Link>
          .
        </span>
      </label>
      <div>
        <button
          className="btn btn-volt"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? L("Küldés…", "Sending…")
            : L("Üzenet küldése", "Send message")}{" "}
          <span className="ar">→</span>
        </button>
      </div>
      {problem && (
        <p className="form-err" role="alert">
          {problem}
        </p>
      )}
      {status === "error" && (
        <p className="form-err" role="alert">
          {L(
            "Nem sikerült elküldeni. Kérlek, próbáld újra, vagy írj közvetlenül e-mailt.",
            "Sending failed. Please try again or email us directly.",
          )}
        </p>
      )}
    </form>
  );
}
