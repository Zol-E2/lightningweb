import Link from "next/link";
import { Bolt } from "@/components/Icon";

/** 404 content (both languages, since we can't know which one the visitor wanted). */
export default function NotFoundContent() {
  return (
    <section className="cta ink nf">
      <div className="wrap">
        <span className="mark">
          <Bolt />
        </span>
        <h1>
          <span className="it">404</span>
        </h1>
        <p>
          Ez az oldal nem található. <br />
          This page could not be found.
        </p>
        <div className="ctas" style={{ justifyContent: "center" }}>
          <Link className="btn btn-volt" href="/">
            Főoldal <span className="ar">→</span>
          </Link>
          <Link className="btn btn-line" href="/en">
            Home (English)
          </Link>
        </div>
      </div>
    </section>
  );
}
