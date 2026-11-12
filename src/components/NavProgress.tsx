"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PageSkeleton from "@/components/PageSkeleton";

/**
 * Feedback while moving between pages: a thin progress bar at once, and the
 * full page skeleton if the next page takes longer than a moment to arrive.
 */
export default function NavProgress({ label }: { label: string }) {
  const path = usePathname();
  const [state, setState] = useState<"idle" | "busy" | "slow" | "done">("idle");
  const slowTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement) || a.target || a.download) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return;
      setState("busy");
      clearTimeout(slowTimer.current);
      slowTimer.current = setTimeout(() => setState("slow"), 450);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // New page arrived: finish the bar (state adjusted during render, React docs pattern).
  const [shownPath, setShownPath] = useState(path);
  if (shownPath !== path) {
    setShownPath(path);
    if (state !== "idle") setState("done");
  }

  useEffect(() => {
    if (state !== "done") return;
    clearTimeout(slowTimer.current);
    const t = setTimeout(() => setState("idle"), 400);
    return () => clearTimeout(t);
  }, [state]);

  return (
    <>
      <div className={`navprog ${state}`} aria-hidden="true" />
      {state === "slow" && (
        <div className="navskel">
          <PageSkeleton label={label} />
        </div>
      )}
    </>
  );
}
