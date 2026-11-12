import type { ReactNode } from "react";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import type { Lang } from "@/lib/i18n";
import { Sprite } from "@/components/Icon";
import "@/app/globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/** The <html> document shared by the Hungarian and English root layouts. */
export default function RootDoc({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <Sprite />
        <div className="intro" aria-hidden="true">
          <svg viewBox="0 0 270 660">
            <use href="#bolt" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
