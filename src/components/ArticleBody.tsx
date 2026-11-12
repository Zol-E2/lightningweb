import Link from "next/link";
import type { ReactNode } from "react";
import { caseHref, href, type Lang } from "@/lib/i18n";
import { POSTS, postHref } from "@/lib/posts";

/** Resolves "page:pricing", "post:maps" and "case:oz" link targets. */
function target(lang: Lang, t: string): string {
  const [kind, key] = t.split(":");
  if (kind === "page") return href(lang, key);
  if (kind === "case") return caseHref(lang, key);
  if (kind === "post") {
    const p = POSTS.find((x) => x.key === key);
    if (p) return postHref(lang, p);
  }
  return href(lang, "blog");
}

/** Inline: **bold** and [text](kind:key). */
function inline(lang: Lang, text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\(([a-z]+:[a-z-]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={i++}>{m[1]}</strong>);
    else
      out.push(
        <Link key={i++} href={target(lang, m[3])}>
          {m[2]}
        </Link>,
      );
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Renders the small markdown subset used in posts.ts. */
export default function ArticleBody({
  lang,
  body,
}: {
  lang: Lang;
  body: string;
}) {
  const blocks = body.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((b, i) => {
        const t = b.trim();
        if (t.startsWith("## "))
          return <h2 key={i}>{inline(lang, t.slice(3))}</h2>;
        if (t.startsWith("> "))
          return (
            <p key={i} className="tip">
              {inline(lang, t.slice(2))}
            </p>
          );
        if (t.startsWith("- "))
          return (
            <ul key={i}>
              {t.split("\n").map((li, j) => (
                <li key={j}>{inline(lang, li.replace(/^-\s*/, ""))}</li>
              ))}
            </ul>
          );
        return <p key={i}>{inline(lang, t)}</p>;
      })}
    </>
  );
}
