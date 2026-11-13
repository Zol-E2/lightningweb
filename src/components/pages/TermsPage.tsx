import { type Lang } from "@/lib/i18n";
import { LEGAL_UPDATED, TERMS } from "@/lib/legal";
import ArticleBody from "@/components/ArticleBody";
import { formatDate } from "@/components/pages/PostPage";

/** General terms and conditions (text in src/lib/legal.ts). */
export default function TermsPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? "aszf" : "terms"}
          </span>
          <h1>
            {hu
              ? "Általános szerződési feltételek"
              : "General terms and conditions"}
          </h1>
          <p className="lead">
            {hu ? "Hatályos: " : "Effective: "}
            {formatDate(lang, LEGAL_UPDATED)}
          </p>
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap legal-text">
          <ArticleBody lang={lang} body={TERMS[lang]} />
        </div>
      </section>
    </>
  );
}
