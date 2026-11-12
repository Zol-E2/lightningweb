"use client";

import { useState } from "react";

/** Example time slots for booking a call (to be replaced by a real booking tool). */
export default function Slots({ lang }: { lang: "hu" | "en" }) {
  const slots =
    lang === "hu"
      ? ["H 10:00", "K 14:00", "Sze 09:30", "Cs 16:00"]
      : ["Mon 10:00", "Tue 14:00", "Wed 09:30", "Thu 16:00"];
  const [sel, setSel] = useState(1);
  return (
    <div
      className="slots"
      role="group"
      aria-label={lang === "hu" ? "Időpont" : "Time slot"}
    >
      {slots.map((s, i) => (
        <button
          key={s}
          type="button"
          aria-pressed={sel === i}
          onClick={() => setSel(i)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
