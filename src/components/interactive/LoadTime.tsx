"use client";

import { useEffect, useState } from "react";

/** Shows how long this page actually took to load for the visitor. */
export default function LoadTime() {
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    const measure = () => {
      let v: number | null = null;
      const n = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      if (n && n.loadEventEnd > 0) v = n.loadEventEnd - n.startTime;
      else if (n && n.domContentLoadedEventEnd > 0)
        v = n.domContentLoadedEventEnd - n.startTime;
      setMs(Math.round(v ?? performance.now()));
    };
    if (document.readyState === "complete") {
      const t = setTimeout(measure, 0);
      return () => clearTimeout(t);
    }
    const onLoad = () => setTimeout(measure, 0);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <div className="big">
      {ms ?? "—"}
      <small>ms</small>
    </div>
  );
}
