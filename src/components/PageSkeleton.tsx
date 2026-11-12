import { Bolt } from "@/components/Icon";

/**
 * Shown while a page is loading (route loading.tsx): logo bar, hero lines and a
 * grid of cards, all shimmering, so a slow connection never looks frozen.
 */
export default function PageSkeleton({ label }: { label: string }) {
  return (
    <div className="sk-page" role="status" aria-live="polite" aria-busy="true">
      <header className="nav">
        <div className="wrap bar">
          <span className="brand" aria-hidden="true">
            <span className="mark">
              <Bolt />
            </span>
            <span className="wm">
              Lightning<span>Web</span>
            </span>
          </span>
          <span className="sk-line skel sk-nav" />
        </div>
      </header>
      <div className="wrap sk-hero">
        <span className="sk-line skel s" />
        <span className="sk-line skel xl" />
        <span className="sk-line skel l" />
        <span className="sk-line skel m" />
        <span className="sk-line skel s" />
        <div className="sk-btns">
          <span className="skel sk-btn" />
          <span className="skel sk-btn" />
        </div>
        <div className="sk-cards">
          <span className="skel sk-card" />
          <span className="skel sk-card" />
          <span className="skel sk-card" />
        </div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
