import Link from "next/link";
import { type Lang } from "@/lib/i18n";
import { POSTS, postHref, type Post } from "@/lib/posts";

export function PostCard({ lang, post }: { lang: Lang; post: Post }) {
  const t = post[lang];
  return (
    <Link className="post" href={postHref(lang, post)}>
      <div className="cover" style={{ background: post.cover }}>
        <svg aria-hidden="true">
          <use href={`#${post.icon}`} />
        </svg>
      </div>
      <div className="body">
        <div className="meta mono">
          <span>{t.cat}</span>
          <span>{post.minutes} min</span>
        </div>
        <h3>{t.title}</h3>
        <p>{t.desc}</p>
      </div>
    </Link>
  );
}

export default function BlogPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> blog
          </span>
          {hu ? (
            <h1>
              Tippek, hogy <span className="it">több vevő</span> találjon meg.
            </h1>
          ) : (
            <h1>
              Tips to help <span className="it">more customers</span> find you.
            </h1>
          )}
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap posts">
          {POSTS.map((p) => (
            <PostCard key={p.key} lang={lang} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
