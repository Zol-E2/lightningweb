"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

/** Before/after comparison with a draggable divider. */
export default function BeforeAfter({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [x, setX] = useState(42);
  return (
    <div className="ba" style={{ "--x": `${x}%` } as CSSProperties}>
      {children}
      <input
        type="range"
        min={0}
        max={100}
        value={x}
        onChange={(e) => setX(+e.target.value)}
        aria-label={label}
      />
    </div>
  );
}
