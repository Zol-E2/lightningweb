import { type Lang } from "@/lib/i18n";
import WorkCases from "@/components/interactive/WorkCases";
export default function WorkPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? <span>munkaink</span> : <span>work</span>}
          </span>
          {hu ? (
            <h1>
              Projektek, amikre <span className="it">büszkék</span> vagyunk.
            </h1>
          ) : (
            <h1>
              Projects we&apos;re <span className="it">proud</span> of.
            </h1>
          )}
          {hu ? (
            <p className="lead">
              Gyártó, termelő, kézműves márka és saját fejlesztésű alkalmazás.
              Mind élő, működő oldal, kattints bármelyikre a részletekért.
            </p>
          ) : (
            <p className="lead">
              A manufacturer, a producer, a craft brand and our own app. All
              live, working sites: click any of them for the details.
            </p>
          )}
        </div>
      </section>
      <section className="sec ink" style={{ paddingTop: "8px" }}>
        <div className="wrap">
          <WorkCases lang={lang} />
        </div>
      </section>
    </>
  );
}
