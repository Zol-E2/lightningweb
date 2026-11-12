import Link from "next/link";
import { href, type Lang } from "@/lib/i18n";

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
          <Link className="post" href={href(lang, "blog")}>
            <div
              className="cover"
              style={{ background: "linear-gradient(140deg,#0a7f9e,#07303c)" }}
            >
              <svg>
                <use href="#i-search" />
              </svg>
            </div>
            <div className="body">
              <div className="meta mono">
                <span>Google</span>
                <span>6 min</span>
              </div>
              {hu ? (
                <h3>Így kerülj a Google Térkép élére</h3>
              ) : (
                <h3>How to top Google Maps</h3>
              )}
              {hu ? (
                <p>Lépésről lépésre, szakszavak nélkül.</p>
              ) : (
                <p>Step by step, no jargon.</p>
              )}
            </div>
          </Link>
          <Link className="post" href={href(lang, "blog")}>
            <div
              className="cover"
              style={{ background: "linear-gradient(140deg,#c2456b,#4a1426)" }}
            >
              <svg>
                <use href="#i-shop" />
              </svg>
            </div>
            <div className="body">
              <div className="meta mono">
                <span>Web</span>
                <span>4 min</span>
              </div>
              {hu ? (
                <h3>Mennyibe kerül egy weboldal 2026-ban?</h3>
              ) : (
                <h3>What does a website cost in 2026?</h3>
              )}
              {hu ? (
                <p>Mitől függ az ár, és mire figyelj az ajánlatoknál.</p>
              ) : (
                <p>What drives the price and what to check in quotes.</p>
              )}
            </div>
          </Link>
          <Link className="post" href={href(lang, "blog")}>
            <div
              className="cover"
              style={{ background: "linear-gradient(140deg,#e2571e,#4a1a06)" }}
            >
              <svg>
                <use href="#i-factory" />
              </svg>
            </div>
            <div className="body">
              <div className="meta mono">
                <span>Web</span>
                <span>5 min</span>
              </div>
              {hu ? (
                <h3>Weboldal gyártó cégeknek: mi kell rá?</h3>
              ) : (
                <h3>Websites for manufacturers: what to include</h3>
              )}
              {hu ? (
                <p>Ajánlatkérés, referenciák, géppark: ami tényleg számít.</p>
              ) : (
                <p>Quote forms, projects, equipment: what actually matters.</p>
              )}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
