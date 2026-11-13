import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/i18n";

/**
 * Contact form endpoint. Emails the enquiry to LightningWeb through Resend.
 * Needs these environment variables (Cloudflare: Workers > Settings > Variables):
 *   RESEND_API_KEY  – secret API key from resend.com
 *   CONTACT_TO      – where enquiries go, e.g. info@lightningweb.hu
 *   CONTACT_FROM    – verified sender, e.g. "LightningWeb <urlap@lightningweb.hu>"
 * When the visitor gives an email address they also get a short, fixed
 * confirmation (no user text echoed back, so the form can't be used to spam).
 */
type Body = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  needs?: string[];
  message?: string;
  website?: string;
  lang?: string;
};

const clip = (v: unknown, n: number) =>
  String(v ?? "")
    .trim()
    .slice(0, n);
const esc = (s: string) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!,
  );

export async function POST(req: Request) {
  let b: Body;
  try {
    b = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  // Honeypot filled in: pretend success so bots learn nothing.
  if (b.website) return NextResponse.json({ ok: true });

  const name = clip(b.name, 120);
  const email = clip(b.email, 200);
  const phone = clip(b.phone, 60);
  if (!name || (!email && !phone))
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  if (email && !/^\S+@\S+\.\S+$/.test(email))
    return NextResponse.json({ error: "bad_email" }, { status: 400 });

  const fields: [string, string][] = [
    ["Név", name],
    ["Cégnév", clip(b.company, 160)],
    ["E-mail", email],
    ["Telefon", phone],
    [
      "Érdekli",
      (Array.isArray(b.needs) ? b.needs : [])
        .map((x) => clip(x, 40))
        .join(", "),
    ],
    ["Nyelv", clip(b.lang, 5)],
  ];
  const message = clip(b.message, 5000);
  const text =
    fields.map(([k, v]) => `${k}: ${v || "–"}`).join("\n") +
    `\n\nÜzenet:\n${message || "–"}`;
  const html =
    `<table cellpadding="4">${fields.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v || "–")}</td></tr>`).join("")}</table>` +
    `<p><b>Üzenet:</b><br>${esc(message || "–").replace(/\n/g, "<br>")}</p>`;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) {
    console.error(
      "contact: RESEND_API_KEY / CONTACT_TO / CONTACT_FROM not set",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email || undefined,
      subject: `Új ajánlatkérés: ${name}${b.company ? ` (${clip(b.company, 80)})` : ""}`,
      text,
      html,
    }),
  });
  if (!res.ok) {
    console.error("contact: resend failed", res.status, await res.text());
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  if (email) {
    const confirm = confirmation(b.lang === "en" ? "en" : "hu", name);
    const c = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${key}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ from, to: [email], reply_to: to, ...confirm }),
    });
    // The enquiry itself already arrived, so a failed confirmation is only logged.
    if (!c.ok)
      console.error("contact: confirmation failed", c.status, await c.text());
  }
  return NextResponse.json({ ok: true });
}

/** Fixed auto-reply. Only a plain first name is used, never free text. */
function confirmation(lang: "hu" | "en", name: string) {
  const first =
    name.split(/\s+/)[lang === "hu" ? name.split(/\s+/).length - 1 : 0];
  const safe = /^[\p{L}'.-]{1,30}$/u.test(first ?? "") ? first : "";
  const hu = lang === "hu";
  const hello = hu
    ? `Kedves ${safe || "Érdeklődő"}!`
    : `Hi${safe ? ` ${safe}` : ""},`;
  const lines = hu
    ? [
        "Köszönjük az üzenetedet, megkaptuk!",
        "24 órán belül, általában sokkal hamarabb felvesszük veled a kapcsolatot.",
        `Ha sürgős, hívj minket bátran: ${CONTACT.phone}`,
        `Ha szeretnél, foglalhatsz egy ingyenes konzultációt is: https://cal.com/${CONTACT.booking}`,
      ]
    : [
        "Thanks for your message, we’ve received it!",
        "We’ll get back to you within 24 hours, usually much sooner.",
        `If it’s urgent, feel free to call us: ${CONTACT.phone}`,
        `You can also book a free consultation: https://cal.com/${CONTACT.booking}`,
      ];
  const sign = hu
    ? "Üdvözlettel,\nLightningWeb"
    : "Best regards,\nLightningWeb";
  const text = [hello, "", ...lines, "", sign, "https://lightningweb.hu"].join(
    "\n",
  );
  const html =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">` +
    `<p>${esc(hello)}</p>` +
    lines.map((l) => `<p>${esc(l)}</p>`).join("") +
    `<p>${esc(sign).replace("\n", "<br>")}<br><a href="https://lightningweb.hu">lightningweb.hu</a></p></div>`;
  return {
    subject: hu
      ? "Megkaptuk az üzenetedet – LightningWeb"
      : "We’ve received your message – LightningWeb",
    text,
    html,
  };
}
