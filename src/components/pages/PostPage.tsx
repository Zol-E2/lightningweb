import Link from "next/link";
import { href, SITE_URL, type Lang } from "@/lib/i18n";
import { POSTS, postHref, type Post } from "@/lib/posts";
import ArticleBody from "@/components/ArticleBody";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { PostCard } from "@/components/pages/BlogPage";

export function formatDate(lang: Lang, iso: string): string {
  return new Date(iso).toLocaleDateString(lang === "hu" ? "hu-HU" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostPage({ lang, post }: { lang: Lang; post: Post }) {
  const hu = lang === "hu";
  const t = post[lang];
  const url = SITE_URL + postHref(lang, post);
  const more = POSTS.filter((p) => p.key !== post.key).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t.title,
          description: t.desc,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: lang,
          mainEntityOfPage: url,
          url,
          author: {
            "@type": "Person",
            name: "Zoltán",
            url: SITE_URL + href(lang, "about"),
          },
          publisher: {
            "@type": "Organization",
            name: "LightningWeb",
            url: SITE_URL,
          },
        }}
      />
      <JsonLd
        data={breadcrumbs([
          ["LightningWeb", SITE_URL + href(lang, "home")],
          ["Blog", SITE_URL + href(lang, "blog")],
          [t.title, url],
        ])}
      />
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> <Link href={href(lang, "blog")}>blog</Link> /{" "}
            {t.cat.toLowerCase()}
          </span>
          <h1 className="post-h1">{t.title}</h1>
          <p className="lead">{t.desc}</p>
          <div className="post-meta mono">
            <span>Zoltán · LightningWeb</span>
            <time dateTime={post.date}>{formatDate(lang, post.date)}</time>
            <span>
              {post.minutes} {hu ? "perc olvasás" : "min read"}
            </span>
          </div>
        </div>
      </section>
      <section className="sec paper">
        <article className="wrap article">
          <ArticleBody lang={lang} body={t.body} />
          <div className="article-cta">
            <b>
              {hu
                ? "Kérdésed van, vagy segítsünk megcsinálni?"
                : "Questions, or want us to do it for you?"}
            </b>
            <Link className="btn btn-volt" href={href(lang, "contact")}>
              {hu ? "Ingyenes konzultáció" : "Free consultation"}{" "}
              <span className="ar">→</span>
            </Link>
          </div>
        </article>
      </section>
      <section className="sec paper" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="more-h">{hu ? "További cikkek" : "More articles"}</h2>
          <div className="posts">
            {more.map((p) => (
              <PostCard key={p.key} lang={lang} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
